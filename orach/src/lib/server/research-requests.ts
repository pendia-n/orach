export const researchSections = [
	'eat',
	'drink',
	'play',
	'clothing',
	'essential',
	'neighbourhood',
	'stay',
	'transport'
] as const;
export type ResearchSection = (typeof researchSections)[number];
export type ResearchCity = { name: string; country: string };
const subjects: Record<ResearchSection, string> = {
	eat: 'everyday local meals vegetarian official menu prices portions tax service',
	drink: 'coffee tea local drinks official menu prices serving minimum spend',
	play: 'ongoing adult cultural activities beginner workshops official admission price duration mandatory extras',
	clothing: 'local independent vintage clothing public shops named garments prices',
	essential:
		'supermarket grocery pack prices public laundry load tariff prepaid SIM allowance validity',
	neighbourhood:
		'four distinct neighbourhoods actual named food cultural venues practical tradeoffs',
	stay: 'hostel ordinary hotel serviced apartment exact room kitchen laundry fees no date-free room quote',
	transport: 'official adult local bus rail fares ticket validity transfers airport route fare'
};
export function sectionRequest(city: ResearchCity, section: ResearchSection) {
	const query = `${city.name}, ${city.country}: ${subjects[section]}. Prioritize this exact city, official operator pages and original currencies; preserve price units, conditions and source passages.`;
	if (section === 'transport')
		return {
			provider: 'firecrawl',
			endpoint: 'https://api.firecrawl.dev/v2/search',
			body: {
				query,
				limit: 5,
				sources: [{ type: 'web' }],
				domainTools: false,
				scrapeOptions: { formats: ['markdown'], onlyMainContent: true, parsers: [], maxAge: 0 }
			}
		};
	if (section === 'play' || section === 'clothing')
		return {
			provider: 'exa',
			endpoint: 'https://api.exa.ai/search',
			body: {
				query,
				type: 'auto',
				numResults: 5,
				contents: { text: { maxCharacters: 12000 }, highlights: true, maxAgeHours: 24 }
			}
		};
	if (section === 'neighbourhood' || section === 'stay')
		return {
			provider: 'exa',
			endpoint: 'https://api.exa.ai/answer',
			body: {
				query:
					query +
					' Return separate concise records and unknowns, maximum 400 words. Do not invent prices, dates or amenities.',
				text: true
			}
		};
	return {
		provider: 'tavily',
		endpoint: 'https://api.tavily.com/search',
		body: {
			query,
			search_depth: 'basic',
			max_results: 5,
			auto_parameters: false,
			include_raw_content: 'markdown',
			include_answer: false,
			include_usage: true
		}
	};
}
export function overviewRequest(city: ResearchCity) {
	return {
		endpoint: 'https://api.exa.ai/answer',
		body: {
			query: `Tell me the eat, drink, play, clothing, essential, neighbourhood, stay and transport of ${city.name}, ${city.country}, for a tourist staying longer, living locally, cutting unnecessary cost and enjoying unique experiences. Do not invent prices or current availability.`,
			outputSchema: {
				type: 'object',
				required: ['answer'],
				additionalProperties: false,
				properties: {
					answer: { type: 'string', description: '1 sentence answer for the search query' }
				}
			},
			text: true
		}
	};
}
export async function parallelSections<T>(
	city: ResearchCity,
	execute: (section: ResearchSection, request: ReturnType<typeof sectionRequest>) => Promise<T>
) {
	return Promise.allSettled(
		researchSections.map((section) => execute(section, sectionRequest(city, section)))
	);
}
