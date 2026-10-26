# Results

import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);

const result = await exa.answer(
  "Build the neighbourhood foundation for Tokyo, Japan,\nwithin downtown, using sources accessible as of 2026-10-26.\n\nIdentify up to four meaningfully different areas useful to temporary visitors:\na convenient central area, a food/culture area, an independent-shopping or\ncreative area, and a quieter alternative where supported. Avoid duplicate\nareas presented under different names.\n\nFor EACH area return these labelled fields:\nNAME:\nLOCATION/BOUNDARY:\nCHARACTER: A short factual description.\nFOOD/DRINK EXAMPLE: An actual venue and official URL.\nSHOPPING/CULTURE EXAMPLE: An actual venue or attraction and official URL.\nSUITS: Clearly labelled editorial interpretation.\nPRACTICAL TRADE-OFF: Source-supported, or unknown.\nEVIDENCE: Source URLs and short excerpts supporting factual claims.\nUNKNOWNS:\n\nUse official local information, venue pages and identifiable local publications,\nincluding local-language sources. Do not invent safety rankings, noise levels,\nwalking times or popularity. A venue URL is not proof its content was inspected.\n\nNeighbourhoods are AREA records. They do not require prices.\nReturn separate area records, not one general city paragraph.\nReturn fewer areas if evidence is insufficient and identify the gaps.\nMaximum 1,000 words.",
  {
    outputSchema: {
      type: "text"
    }
  }
);

# json

{
  "requestId": "d41b55a2c6d9b96967e120ea22bfb107",
  "answer": "NAME: Tokyo Station and Marunouchi\nLOCATION/BOUNDARY: Central Tokyo, centered on Tokyo Station [1][2].\nCHARACTER: The city's primary transportation hub and business center, featuring historic red-brick architecture, large-scale underground shopping complexes, and refined office districts [3][2].\nFOOD/DRINK EXAMPLE: Rokurinsha (Tokyo Ramen Street) https://www.tokyoeki-1bangai.co.jp/shop/detail/?cd=0001\nSHOPPING/CULTURE EXAMPLE: Tokyo Character Street https://www.tokyoeki-1bangai.co.jp/street/character/\nSUITS: Travelers needing convenient transit access and centralized retail variety.\nPRACTICAL TRADE-OFF: Can be crowded and disorienting due to the massive scale of the station and underground mall network [3].\nEVIDENCE: GO TOKYO [3][2].\n\nNAME: Ginza\nLOCATION/BOUNDARY: Chuo City, south of Tokyo Station [1][4].\nCHARACTER: An elegant, high-end district blending historic department stores with modern luxury boutiques, known for its weekend pedestrian-only main street [5][6].\nFOOD/DRINK EXAMPLE: Makiyaki Ginza Onodera https://onodera-group.com/makiyaki/\nSHOPPING/CULTURE EXAMPLE: Kabukiza Theatre https://www.kabuki-za.co.jp/\nSUITS: Visitors seeking sophisticated dining, premium service, and upscale retail experiences [5].\nPRACTICAL TRADE-OFF: Many high-end establishments, particularly traditional sushi counters, often require advance reservations [5].\nEVIDENCE: GO TOKYO [1][5], Michelin Guide [6].\n\nNAME: Akihabara\nLOCATION/BOUNDARY: East Chiyoda, north of Tokyo Station [2].\nCHARACTER: The global epicenter for electronics, anime, manga, and popular Japanese \"otaku\" culture [2].\nFOOD/DRINK EXAMPLE: mAAch ecute Kanda Manseibashi https://www.ecute.jp/maach/\nSHOPPING/CULTURE EXAMPLE: Akihabara Electric Town https://www.akihabara-radiokaikan.co.jp/\nSUITS: Fans of Japanese pop culture and technology enthusiasts [2].\nPRACTICAL TRADE-OFF: Can be visually and aurally overwhelming due to heavy neon signage and high density of shops [2].\nEVIDENCE: Visit Chiyoda [2].\n\nNAME: Jimbocho\nLOCATION/BOUNDARY: Central Chiyoda, adjacent to Ochanomizu [2].\nCHARACTER: A historic intellectual hub known as the nation's center for second-hand bookstores and unique curry restaurants [2].\nFOOD/DRINK EXAMPLE: Local specialty curry shops (official venue lists vary by season) [2].\nSHOPPING/CULTURE EXAMPLE: Second-hand book clusters in Jimbocho [2].\nSUITS: Travelers looking for a quieter, scholarly atmosphere and vintage retail treasures [2].\nPRACTICAL TRADE-OFF: Less concentrated modern retail infrastructure compared to Ginza or Marunouchi [2].\nEVIDENCE: Visit Chiyoda [2].",
  "citations": [
    {
      "id": "https://www.gotokyo.org/en/destinations/central-tokyo/index.html",
      "title": "Central Tokyo | The Official Tokyo Travel Guide, GO TOKYO",
      "url": "https://www.gotokyo.org/en/destinations/central-tokyo/index.html",
      "author": "Tokyo Convention, Visitors Bureau.",
      "image": "https://www.gotokyo.org/en/destinations/central-tokyo/images/58_0138_3.jpg"
    },
    {
      "id": "https://visit-chiyoda.tokyo/app/en/area",
      "title": "Areas|Official Tourism Site of Chiyoda, Tokyo / Visit Chiyoda",
      "url": "https://visit-chiyoda.tokyo/app/en/area"
    },
    {
      "id": "https://www.gotokyo.org/en/destinations/central-tokyo/tokyo-station-and-marunouchi/index.html",
      "title": "Tokyo Station & Marunouchi area travel guide | The Official Tokyo Travel Guide, GO TOKYO",
      "url": "https://www.gotokyo.org/en/destinations/central-tokyo/tokyo-station-and-marunouchi/index.html",
      "author": "Tokyo Convention, Visitors Bureau.",
      "image": "https://www.gotokyo.org/en/destinations/central-tokyo/tokyo-station-and-marunouchi/images/58_0138_2.jpg"
    },
    {
      "id": "https://centraltokyo-tourism.com/en/about_us",
      "title": "Introduction of Chuo City | Central Tokyo for Tourism - Tokyo Chuo City's official site for tourists",
      "url": "https://centraltokyo-tourism.com/en/about_us",
      "image": "https://centraltokyo-tourism.com/images/ogp.png"
    },
    {
      "id": "https://www.gotokyo.org/en/destinations/central-tokyo/ginza/index.html",
      "title": "A guide to Ginza - Tokyo's most glamorous shopping district | The Official Tokyo Travel Guide, GO TOKYO",
      "url": "https://www.gotokyo.org/en/destinations/central-tokyo/ginza/index.html",
      "author": "Tokyo Convention, Visitors Bureau.",
      "image": "https://www.gotokyo.org/en/destinations/central-tokyo/ginza/images/main.webp"
    },
    {
      "id": "https://guide.michelin.com/jp/en/article/travel/neighborhood_guide_tokyo_en",
      "title": "Where to Stay and What to Eat in Tokyo's Most Popular Neighborhoods",
      "url": "https://guide.michelin.com/jp/en/article/travel/neighborhood_guide_tokyo_en",
      "publishedDate": "2024-05-29T02:47:00.000Z",
      "author": "the MICHELIN Guide",
      "image": "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2024/05/24/39367d0560f24f36a0ba90ffd505a223_Tokyo_Hero_Sean_Pavone_shutterstock_129611225.jpg"
    },
    {
      "id": "https://www.gotokyo.org/en/destinations/central-tokyo/nihombashi/index.html",
      "title": "Nihonbashi – a bridge between traditional and modern Tokyo | The Official Tokyo Travel Guide, GO TOKYO",
      "url": "https://www.gotokyo.org/en/destinations/central-tokyo/nihombashi/index.html",
      "author": "Tokyo Convention, Visitors Bureau.",
      "image": "https://www.gotokyo.org/en/destinations/central-tokyo/nihombashi/images/82_100.jpg"
    },
    {
      "id": "https://www.japan.travel/en/spot/ma_36/",
      "title": "Asakusa | Tokyo | Kanto | Destinations | Travel Japan - Japan National Tourism Organization (Official Site)",
      "url": "https://www.japan.travel/en/spot/ma_36/",
      "author": "Japan National Tourism Organization",
      "image": "https://res-1.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1646013222/tokyo/H_00498_001"
    }
  ],
  "costDollars": {
    "total": 0.005
  }
}
