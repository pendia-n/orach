export const load: import('./$types').PageServerLoad = async ({platform}) => {
 const rows=platform?.env.DB ? await platform.env.DB.prepare('SELECT city_slug,cover_url FROM city_images').all<{city_slug:string;cover_url:string}>():{results:[]};
 return {covers:Object.fromEntries(rows.results.map(r=>[r.city_slug,r.cover_url]))};
};
