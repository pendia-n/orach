import {subscriber} from '#lib/server/access';
import { writeResearch } from '#lib/server/research-cache';
import { json, error, type RequestEvent } from '@sveltejs/kit';
import { requireUser, limit } from '#lib/server/auth';
import { database } from '#lib/server/db';
import { slugify, cities } from '#lib/catalog';
import {
	overviewRequest,
	sectionRequest,
	researchSections,
	type ResearchSection
} from '#lib/server/research-requests';
export async function GET(event: RequestEvent) {
	const slug = event.url.searchParams.get('city') || '';
	const rows = await database(event.platform)
		.prepare(
			"SELECT section,status,error FROM research_jobs WHERE city_slug=? AND cycle='discovery' ORDER BY section"
		)
		.bind(slug)
		.all();
	return json({ sections: rows.results });
}
export async function POST(event: RequestEvent) {
	const user = await requireUser(event),
		db = database(event.platform),
		env = event.platform!.env;
	const input = (await event.request.json()) as Record<string, unknown>;
	const name = typeof input.city === 'string' ? input.city.trim() : '';
	const country = typeof input.country === 'string' ? input.country.trim() : '';
	const currency = typeof input.currency === 'string' ? input.currency.trim() : '';
	if (
		name.length < 2 ||
		name.length > 80 ||
		country.length < 2 ||
		country.length > 80 ||
		!/^[A-Z]{3}$/.test(currency)
	)
		error(400, 'Supply city, country and three-letter currency.');
	const section = typeof input.section === 'string' ? input.section : 'overview';
	if (section !== 'overview' && !researchSections.includes(section as ResearchSection))
		error(400, 'Choose a supported section.');
	const existing = cities.find(
		(city) =>
			city.name.toLowerCase() === name.toLowerCase() &&
			city.country.toLowerCase() === country.toLowerCase()
	);
	if (existing) return json({ slug: existing.slug, existing: true });
	const slug = slugify(name + '-' + country);
	const id = `discovery:${slug}:${section}`;
	const previous = await db
		.prepare('SELECT status,result,error FROM research_jobs WHERE id=?')
		.bind(id)
		.first<{ status: string; result: string | null; error: string | null }>();
	if (previous)
		return json({
			slug,
			status: previous.status,
			result: previous.result ? JSON.parse(previous.result) : null,
			error: previous.error
		});
	if(section !== 'overview' && !await subscriber(db,user.id)) error(403,'Orach Plus is required to commission new city sections. Existing profiles remain free.');
	await limit(event, 'city-discovery:' + user.id, 32);
	if (
		section !== 'overview' &&
		!(await db
			.prepare(
				"SELECT id FROM research_jobs WHERE city_slug=? AND section='overview' AND status='needs_review'"
			)
			.bind(slug)
			.first())
	)
		error(409, 'Create the city overview first.');
	const request =
		section === 'overview'
			? { ...overviewRequest({ name, country }), provider: 'exa' }
			: sectionRequest({ name, country }, section as ResearchSection);
	const key =
		request.provider === 'exa'
			? env.EXA_API_KEY
			: request.provider === 'firecrawl'
				? env.FIRECRAWL_API_KEY
				: env.TAVILY_API_KEY;
	if (!key) error(503, 'City research is not connected yet.');
	const month = new Date().toISOString().slice(0, 7),
		reserved = request.provider === 'exa' ? 0.02 : request.provider === 'firecrawl' ? 7 : 1;
	const budget = request.provider === 'exa' ? 10 : 1000;
	const reservation = await db
		.prepare(
			'INSERT INTO provider_usage(month,provider,used) VALUES(?,?,?) ON CONFLICT(month,provider) DO UPDATE SET used=used+excluded.used WHERE used+excluded.used<=? RETURNING used'
		)
		.bind(month, request.provider, reserved, budget)
		.first();
	if (!reservation) error(429, 'Research allowance reached. Existing profiles remain available.');
	await db
		.prepare("INSERT OR IGNORE INTO cities(slug,name,country,status) VALUES(?,?,?,'draft')")
		.bind(slug, name, country)
		.run();
	const claimed = await db
		.prepare(
			"INSERT OR IGNORE INTO research_jobs(id,cycle,city_slug,section,provider,status) VALUES(?,'discovery',?,?,?,'running')"
		)
		.bind(id, slug, section, request.provider)
		.run();
	if (!claimed.meta.changes) {
		await db
			.prepare('UPDATE provider_usage SET used=MAX(0,used-?) WHERE month=? AND provider=?')
			.bind(reserved, month, request.provider)
			.run();
		return json({ slug, status: 'running' });
	}
	try {
		const headers: Record<string, string> = { 'Content-Type': 'application/json' };
		if (request.provider === 'exa') headers['x-api-key'] = key;
		else headers.Authorization = 'Bearer ' + key;
		const response = await fetch(request.endpoint, {
			method: 'POST',
			headers,
			body: JSON.stringify(request.body),
			signal: AbortSignal.timeout(25000)
		});
		if (!response.ok) throw new Error('Research provider HTTP ' + response.status);
		const result = (await response.json()) as Record<string, unknown>;
		const serialized = JSON.stringify(result);
		if (new TextEncoder().encode(serialized).length > 1800000)
			throw new Error('Response exceeds storage limit; retained as failed rather than truncated.');
		if (result.success === false) throw new Error('Research provider reported a failure.');
		await db
			.prepare("UPDATE research_jobs SET status='needs_review',result=? WHERE id=?")
			.bind(serialized, id)
			.run();
		await writeResearch(db, slug, section, request.provider, {
			city: { name, country, currency },
			response: result
		});
		return json({ slug, status: 'needs_review', result });
	} catch (cause) {
		const message = cause instanceof Error ? cause.message : 'Research failed';
		await db
			.prepare("UPDATE research_jobs SET status='failed',error=? WHERE id=?")
			.bind(message, id)
			.run();
		error(502, 'This section could not be researched. Other completed sections remain saved.');
	}
}
