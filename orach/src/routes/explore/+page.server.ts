import {cityDirectory} from '#lib/server/city-directory';
export const load: import('./$types').PageServerLoad = async ({platform}) => {
 const rows=platform?.env.DB ? await platform.env.DB.prepare('SELECT city_slug,cover_url FROM city_images').all<{city_slug:string;cover_url:string}>():{results:[]};
 return {destinations:await cityDirectory(platform?.env.DB),covers:Object.fromEntries(rows.results.map(r=>[r.city_slug,r.cover_url]))};
};
