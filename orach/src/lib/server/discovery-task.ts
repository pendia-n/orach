import {writeResearch} from './research-cache.ts';
import {overviewRequest,sectionRequest,type ResearchSection} from './research-requests.ts';
export type CityTask={slug:string;name:string;country:string;currency:string;section:string};
export async function runCitySection(env:Env,task:CityTask){
 const db=env.DB,{slug,name,country,currency,section}=task,id=`discovery:${slug}:${section}`;
 const previous=await db.prepare('SELECT status,result FROM research_jobs WHERE id=?').bind(id).first<{status:string;result:string|null}>();
 if(previous?.status==='running')throw Error('Research is already running; retry status later.');
 if(previous)return {slug,status:previous.status,result:previous.result?JSON.parse(previous.result):null};
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
	if (!key) throw Error('City research is not connected yet.');
	const month = new Date().toISOString().slice(0, 7),
		reserved = request.provider === 'exa' ? 0.02 : request.provider === 'firecrawl' ? 7 : 1;
	const budget = request.provider === 'exa' ? 10 : 1000;
	const reservation = await db
		.prepare(
			'INSERT INTO provider_usage(month,provider,used) VALUES(?,?,?) ON CONFLICT(month,provider) DO UPDATE SET used=used+excluded.used WHERE used+excluded.used<=? RETURNING used'
		)
		.bind(month, request.provider, reserved, budget)
		.first();
	if (!reservation) throw Error('Research allowance reached.');
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
		return {slug,status:'running'};
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
		return {slug,status:'needs_review',result};
	} catch (cause) {
		const message = cause instanceof Error ? cause.message : 'Research failed';
		await db
			.prepare("UPDATE research_jobs SET status='failed',error=? WHERE id=?")
			.bind(message, id)
			.run();
		throw new Error('This section could not be researched.');
	}
}
