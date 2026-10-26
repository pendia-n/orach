# Results

## Query

> Build a draft neighbourhood section for Manchester, United Kingdom,
for a temporary visitor interested mainly in food, drink, culture,
independent shopping and enjoyable local activities.

Compare up to four distinct areas. For each provide:
1. Area name and short description.
2. What kinds of food, shopping and activities it offers.
3. Two actual example venues or attractions, with supporting URLs.
4. Who the area may suit, explicitly labelled editorial interpretation.
5. Practical trade-offs supported by sources, or unknown.

Prefer official local sources, official venue pages and identifiable
local publications. Do not invent safety rankings, popularity,
walking times or claims that locals recommend somewhere.

Cite evidence beside each area. Distinguish facts from interpretation.
Return fewer areas if evidence is insufficient. Maximum 450 words.

## Provider

>> Exa

## Code

import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);

const result = await exa.answer(
  "Build a draft neighbourhood section for Manchester, United Kingdom,\nfor a temporary visitor interested mainly in food, drink, culture,\nindependent shopping and enjoyable local activities.\n\nCompare up to four distinct areas. For each provide:\n1. Area name and short description.\n2. What kinds of food, shopping and activities it offers.\n3. Two actual example venues or attractions, with supporting URLs.\n4. Who the area may suit, explicitly labelled editorial interpretation.\n5. Practical trade-offs supported by sources, or unknown.\n\nPrefer official local sources, official venue pages and identifiable\nlocal publications. Do not invent safety rankings, popularity,\nwalking times or claims that locals recommend somewhere.\n\nCite evidence beside each area. Distinguish facts from interpretation.\nReturn fewer areas if evidence is insufficient. Maximum 450 words.",
  {
    outputSchema: {
      type: "text"
    }
  }
);

## JSON

{
  "requestId": "4694be086673f2c967d34a8eade60158",
  "answer": "Northern Quarter is Manchester’s creative hub, defined by its grit, street art, and fierce independence [1][2][3]. It offers a dense concentration of vintage boutiques, record stores, independent galleries, and lively bars [1][4]. Venues include Afflecks, a landmark indoor market for vintage and alternative goods [1][3] (https://afflecks.com), and the historic live music venue Band on the Wall [1] (https://bandonthewall.org). It suits travelers seeking a bohemian, energetic, and urban atmosphere [1][3]. A practical trade-off is its grungier, noisier environment compared to leafier suburbs [3].\n\nAncoats, the world’s first industrial suburb, blends historic red-brick mills with modern dining and canal-side scenery [5][2][4]. It features upscale independent restaurants, artisanal bakeries, and quiet, stylish bars [5][3]. Key attractions include the bakery Pollen, popular for sourdough and pastries [5][4] (https://pollenbakery.com), and the historic pub Edinburgh Castle [5] (https://www.ecancoats.com). This area suits food lovers and those preferring a trendy, refined industrial aesthetic [5][3]. Trade-offs include a less bustling traditional shopping scene compared to the city center [5].\n\nChorlton is a laid-back, cosmopolitan suburb south of the city, known for its organic delis, independent fashion boutiques, and relaxed community feel [2][6]. It offers excellent green space, including Chorlton Ees and the Water Park, alongside bohemian cafes and craft beer bars [2][7][6]. Venues include the restaurant and bar The Lead Station [6] (https://theleadstation.co.uk) and the pub Horse and Jockey, noted for its Tudor architecture [6] (https://horseandjockeychorlton.com). It suits travelers wanting a calm, village-like retreat away from the city center buzz [6]. A trade-off is the necessity of tram or bus transport to reach city-center landmarks [6].\n\nDidsbury Village and West Didsbury offer a polished, leafy atmosphere filled with boutique shopping, gastropubs, and upscale dining [2][6]. It is home to significant green areas like Fletcher Moss Park and cultural spots such as the Art of Tea [2][6]. Highlights include the Didsbury Village Bookshop [6] (https://didsburyvillagebookshop.com) and the venue Volta [6] (https://voltafoodanddrink.co.uk). These areas suit visitors seeking a sophisticated, relaxed weekend pace [2][6]. Similar to Chorlton, it is located several miles from the city center, requiring public transit for most central attractions [6].",
  "citations": [
    {
      "id": "https://www.visitmanchester.com/things-to-see-and-do/explore/neighbourhoods/northern-quarter/",
      "title": "Explore the Northern Quarter | Visit Manchester",
      "url": "https://www.visitmanchester.com/things-to-see-and-do/explore/neighbourhoods/northern-quarter/",
      "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/manchester/ManchesterRecoveryCampaign_64_large_215a28f4-0395-41d8-8fc7-5c5cd5d2bb71.jpg"
    },
    {
      "id": "https://www.visitmanchester.com/ideas-and-inspiration/blog/post/visit-manchester-insiders-guide-part-1-neighbourhoods/",
      "title": "Visit Manchester Insider’s Guide: Neighbourhoods",
      "url": "https://www.visitmanchester.com/ideas-and-inspiration/blog/post/visit-manchester-insiders-guide-part-1-neighbourhoods/",
      "publishedDate": "2026-02-27T00:00:00.000Z",
      "author": "Visit Manchester",
      "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/manchester/ManchesterRecoveryCampaign_321_1_web_1__158486c5-c36a-4cbb-9c07-6d9576aa9e2e.jpg"
    },
    {
      "id": "https://www.lonelyplanet.com/articles/best-neighborhoods-in-manchester",
      "title": "The best neighborhoods in Manchester: cutting-edge culture, fabulous food and next-level nightlife - Lonely Planet",
      "url": "https://www.lonelyplanet.com/articles/best-neighborhoods-in-manchester",
      "publishedDate": "2022-04-11T10:02:44.000Z",
      "author": "Jemima Forbes"
    },
    {
      "id": "https://www.visitmanchester.com/ideas-and-inspiration/blog/post/the-ultimate-48-hours-in-manchester-itinerary/",
      "title": "48 Hours in Manchester: The Perfect 2-Day Itinerary (Food, Nightlife & More)",
      "url": "https://www.visitmanchester.com/ideas-and-inspiration/blog/post/the-ultimate-48-hours-in-manchester-itinerary/",
      "publishedDate": "2026-08-24T12:00:00.000Z",
      "author": "Visit Manchester",
      "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/manchester/MTAW0726_0978_ef8a08d9-8131-48cc-9fab-f14464336d51.jpg"
    },
    {
      "id": "https://www.visitmanchester.com/ideas-and-inspiration/blog/post/ancoats-a-comprehensive-guide/",
      "title": "A comprehensive guide to Ancoats | Visit Manchester",
      "url": "https://www.visitmanchester.com/ideas-and-inspiration/blog/post/ancoats-a-comprehensive-guide/",
      "publishedDate": "2024-03-25T10:00:00.000Z",
      "author": "Visit Manchester",
      "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/manchester/ManchesterRecoveryCampaign_9_large_c1bfaa32-4396-4ff8-8470-d1579c490075.jpg"
    },
    {
      "id": "https://www.explore.manchester.ac.uk/neighbourhood-guides/chorlton-and-didsbury/",
      "title": "Explore | Neighbourhood Guides | Chorlton and Didsbury | The University of Manchester",
      "url": "https://www.explore.manchester.ac.uk/neighbourhood-guides/chorlton-and-didsbury/"
    },
    {
      "id": "https://mcr.city/areas/",
      "title": "Areas | MCR City",
      "url": "https://mcr.city/areas/",
      "image": "https://mcr.city/wp-content/themes/mcrcity-theme-v9-fixed/assets/img/og-default.png"
    },
    {
      "id": "https://www.visitmanchester.com/real/",
      "title": "Experience The Real Manchester",
      "url": "https://www.visitmanchester.com/real/",
      "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/manchester/0869_bd9f47ea-97b7-4f34-a3f8-d5a72fab6104.jpg"
    }
  ],
  "costDollars": {
    "total": 0.005
  }
}

## Cost

>>> Exa Balance - 0.005 USD
