import { error } from '@sveltejs/kit';
import { cities, manchester, type Entry } from '#lib/catalog';
export const load = async ({ params, platform }: import('./$types').PageServerLoadEvent) => {
	const city = cities.find((c) => c.slug === params.slug);
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
	return { city, entries };
};
