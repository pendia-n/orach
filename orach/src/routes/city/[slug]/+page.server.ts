import { readResearch } from '#lib/server/research-cache';
import { researchDisplay, type ResearchDisplay } from '#lib/server/research-display';
import { error } from '@sveltejs/kit';
import { cities, manchester, type Entry, type City } from '#lib/catalog';
export const load = async ({ params, platform }: import('./$types').PageServerLoadEvent) => {
	let city = cities.find((c) => c.slug === params.slug);
	if (!city && platform?.env.DB) {
		const row = await platform.env.DB.prepare(
			"SELECT c.slug,c.name,c.country,r.response_json FROM cities c LEFT JOIN section_research r ON r.city_slug=c.slug AND r.section='overview' WHERE c.slug=? AND c.status IN ('draft','published')"
		)
			.bind(params.slug)
			.first<{ slug: string; name: string; country: string; response_json: string | null }>();
		if (row) {
			const metadata = row.response_json ? JSON.parse(row.response_json) : {};
			city = {
				slug: row.slug,
				name: row.name,
				country: row.country,
				currency: metadata.city?.currency || 'XXX',
				region: '',
				color: '#c5d6c0',
				status: 'draft'
			} as City;
		}
	}
	if (!city) error(404, 'This destination is not in the collection yet.');
	let entries = city.slug === 'manchester' ? manchester : [];
	if (platform?.env.DB) {
		const rows = await platform.env.DB.prepare(
			'SELECT data FROM city_entries WHERE city_slug=? AND published=1'
		)
			.bind(city.slug)
			.all<{ data: string }>();
		if (rows.results.length) entries = rows.results.map((r) => JSON.parse(r.data) as Entry);
	}
	const research: Record<string, ResearchDisplay> = {};
	if (platform?.env.DB) {
		const available = await platform.env.DB.prepare(
			'SELECT section FROM section_research WHERE city_slug=?'
		)
			.bind(city.slug)
			.all<{ section: string }>();
		await Promise.all(
			available.results.map(async ({ section }) => {
				const raw = await readResearch(platform.env.DB, city.slug, section);
				if (raw) research[section] = researchDisplay(raw);
			})
		);
	}
	return { city, entries, research };
};
