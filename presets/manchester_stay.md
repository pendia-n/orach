# Results

## Query

>Build a compact draft accommodation section for Manchester,
United Kingdom, for someone considering a two-week stay.

Cover hostel, hotel and serviced apartment/aparthotel accommodation.
Find one actual example of each from its official website.

For each provide:
1. Name, accommodation type, location and official URL.
2. Kitchen: private, shared, absent or unknown.
3. Laundry: available, chargeable, absent or unknown.
4. Explicitly stated minimum-stay requirements and extra fees.
5. Practical suitability for a temporary stay, labelled interpretation.

Do not invent room prices, availability or a citywide average.
Travel dates and guest count have not been provided.
An unstated amenity must be marked unknown rather than absent.
Keep prices out unless they are clearly identified fixed fees.

Cite evidence beside each example. Return fewer examples if sources
are insufficient. Maximum 350 words.

## Provider

>> EXA

## Code

import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);

const result = await exa.answer(
  "Build a compact draft accommodation section for Manchester,\nUnited Kingdom, for someone considering a two-week stay.\n\nCover hostel, hotel and serviced apartment/aparthotel accommodation.\nFind one actual example of each from its official website.\n\nFor each provide:\n1. Name, accommodation type, location and official URL.\n2. Kitchen: private, shared, absent or unknown.\n3. Laundry: available, chargeable, absent or unknown.\n4. Explicitly stated minimum-stay requirements and extra fees.\n5. Practical suitability for a temporary stay, labelled interpretation.\n\nDo not invent room prices, availability or a citywide average.\nTravel dates and guest count have not been provided.\nAn unstated amenity must be marked unknown rather than absent.\nKeep prices out unless they are clearly identified fixed fees.\n\nCite evidence beside each example. Return fewer examples if sources\nare insufficient. Maximum 350 words.",
  {
    outputSchema: {
      type: "text"
    }
  }
);

## JSON

{
  "requestId": "4fddde94612e9dfbda9b5be8f0892e96",
  "answer": "Hostel: Wilde Manchester, City Centre (aparthotel) is not a hostel; I don’t have a hostel example in the provided results. Serviced apartment/aparthotel example: Wilde Manchester, City Centre (Aparthotel), 3 Dickinson street, Manchester M1 4LF, https://www.wilde.com/manchester/city-centre [1]. Kitchen: fully equipped kitchen (private/unknown). Laundry: laundry room (availability/charge unknown) [1]. Minimum-stay/fees: not stated; extra cleans only if needed (“small fee” from £20) [1]. Suitability: designed for short and extended stays; weekly cleaning regime fits a temporary 2-week stay [1]. Hotel example: not found in results (only aparthotels/serviced apartments).",
  "citations": [
    {
      "id": "https://www.wilde.com/manchester/city-centre",
      "title": "Wilde Manchester, City Centre | Aparthotel in Manchester City Centre",
      "url": "https://www.wilde.com/manchester/city-centre",
      "publishedDate": "2025-09-28T00:00:00.000Z",
      "image": "https://cdn.staycity.com/media/oy0bichp/231012_wilde_staycity_lobby_03_0034_final_web.jpg?format=webp&quality=90"
    },
    {
      "id": "https://www.roomzzz.com/aparthotels/manchester-city",
      "title": "Serviced Apartments & Aparthotel in Manchester | Princess Street | Roomzzz Aparthotels",
      "url": "https://www.roomzzz.com/aparthotels/manchester-city"
    },
    {
      "id": "https://www.lockeliving.com/en/manchester/cove-by-locke-manchester",
      "title": "Cove Minshull Street — Serviced Apartments in Manchester | Cove by Locke",
      "url": "https://www.lockeliving.com/en/manchester/cove-by-locke-manchester",
      "image": "https://www.lockeliving.com/media/images/property/cove_manchester/cove_manchester_studio_apart.jpg?width=1200&height=630&mode=crop&format=jpeg&quality=70"
    },
    {
      "id": "https://www.lockeliving.com/en/manchester/whitworth-locke/your-stay/locke-studio",
      "title": "Locke Studio - Short & Long Stays, Manchester | Whitworth Locke",
      "url": "https://www.lockeliving.com/en/manchester/whitworth-locke/your-stay/locke-studio"
    },
    {
      "id": "https://www.prestigeapartments.co.uk/our-apartments/north/piccadilly-manchester-aparthotel-scmp/",
      "title": "Piccadilly Manchester Aparthotel | Manchester",
      "url": "https://www.prestigeapartments.co.uk/our-apartments/north/piccadilly-manchester-aparthotel-scmp/",
      "author": "Frontmedia Studio Limited",
      "image": "https://www.prestigeapartments.co.uk/images/twittercard.png"
    },
    {
      "id": "https://www.citysuites.com/en/",
      "title": "CitySuites Aparthotel | Your Place In The City | Manchester",
      "url": "https://www.citysuites.com/en/"
    },
    {
      "id": "https://www.supercityuk.com/manchester/",
      "title": "Serviced Apartments Manchester | Supercity Aparthotels",
      "url": "https://www.supercityuk.com/manchester/",
      "image": "https://www.supercityuk.com/wp-content/uploads/2024/01/manchester-landscape-1366x768.jpg"
    },
    {
      "id": "https://www.citysuites.com/en/citysuites-1/",
      "title": "CitySuites I - Luxury Apartments | CitySuites",
      "url": "https://www.citysuites.com/en/citysuites-1/"
    }
  ],
  "costDollars": {
    "total": 0.005
  }
}

## Cost

>>> EXA Balance - 0.005 USD
