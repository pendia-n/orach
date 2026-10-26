# Results

## Query

> Manchester UK casual restaurants local British food vegetarian affordable lunch dinner official menus prices

## Provider

>> Tavily

## Code

// To install: npm i @tavily/core
const { tavily } = require('@tavily/core');
const client = tavily({ apiKey: "tvly-dev-key" });
client.search("Manchester UK casual restaurants local British food vegetarian affordable lunch dinner official menus prices", {
    includeAnswer: "basic",
    searchDepth: "advanced",
    maxResults: 8,
    includePublishedDate: true,
    includeUsage: true
})
.then(console.log);

## JSON

{
  "query": "Manchester UK casual restaurants local British food vegetarian affordable lunch dinner official menus prices",
  "follow_up_questions": null,
  "answer": "In Manchester, UK, there are several casual restaurants offering local British food with vegetarian options at affordable prices. Pho No. 1 in the Northern Quarter serves Vietnamese pho and banh mi from £3 to £7. Bundobust in the city centre offers vegetarian and vegan Indian street food with dishes like the bhaji butty and vada pav veggie burger starting at £6. For a more traditional British menu, Albert's Shed provides a £16.50 lunch menu with two courses or a £20.50 menu with three courses. These options provide a variety of affordable and delicious meals for vegetarians and others looking for budget-friendly dining.",
  "images": [],
  "results": [
    {
      "url": "https://www.manchestertourism.org/cheap-eats-manchester",
      "title": "Best Cheap Eats in Manchester | Budget Food Guide",
      "content": "Lunch: This & That rice and three — £6.\n\nAfternoon snack: Chinatown bakery items — £3.\n\nDinner: Curry Mile main course — £10.\n\nLate drinks: Pint or cocktail in a budget pub — £6.\n\nTotal: ~£31 for a full day of food and drink — significantly cheaper than a single fine-dining meal.\n\n## Manchester Cheap Eats: Hidden Gems\n\nBeyond the famous spots, Manchester has dozens of cheap eats that locals love but tourists rarely find:\n\nKabana (Levenshulme) — Pakistani vegetarian curry house, full meal for £8.\n\nThe Pakistan Restaurant (Rusholme) — Old-school Curry Mile classic, lamb biryani £8.\n\nTasty Greek (Northern Quarter) — £6 gyros, fresh and authentic.\n\nBao + Bao (Northern Quarter) — £4 bao buns, £8 noodle bowls.\n\nRamen Tastebuds (Piccadilly) — £10 ramen bowls. [...] ### 2. Pho No. 1 (Northern Quarter)\n\nVietnamese pho and banh mi from £3 to £7. Authentic, fresh, fast. A proper full lunch for under £7.\n\nCost: £4–7 per person.\n\n### 3. Chorlton Food Store\n\nThe in-house baker makes lahmacun (Turkish pizza) for £3.49 small or £4.49 large. South Manchester’s best-value lunch.\n\nCost: £3.49–6 per person.\n\n### 4. Bundobust (city centre)\n\nVegetarian and vegan Indian street food. Bhaji butty £6, vada pav veggie burger £6. Excellent quality from one of the UK’s best-known Indian-vegetarian operations.\n\nCost: £6–12 per person.\n\n### 5. YES Pizza (Charles Street)\n\n£4 pizza slices from the Yes music venue’s pizzeria. Open during gig nights and lunch service.\n\nCost: £4 per slice.\n\n### 6. Nell’s (Northern Quarter) [...] ### Cheap Dinner\n\nCurry Mile (£8–12 curries); Nell’s pizza (£8 14″); Crazy Pedro’s pizza by slice (£3 each); Bundobust dinner (£8–10).\n\n### Cheap Late-Night Eating\n\nSlice Lever Street (until 4am, £4 slices); Crazy Pedro’s (until late); the Curry Mile (until 1am+); Chinatown (Tai Wu 24-hour).\n\n## Cheap Eats Manchester: Sample Itineraries\n\n### The Backpacker’s Cheap-Eats Day\n\nBreakfast: pastry and coffee at Foundation (£6).  \n Lunch: This & That rice and three (£6).  \n Snack: Chinatown bakery items (£3).  \n Dinner: £8 Curry Mile main course (£8).  \n Drinks: 2 pints at the Marble Arch (£8).  \n Total: ~£31.\n\n### The Couples’ Cheap-Eats Day",
      "score": 0.7274535,
      "raw_content": null,
      "published_date": "Sat, 23 May 2026 09:00:00 GMT",
      "favicon": "https://www.manchestertourism.org/favicon.ico",
      "id": "58873b-00"
    },
    {
      "url": "http://www.tigerlocal.co.uk/restaurants",
      "title": "Restaurants on TigerLocal.co.uk",
      "content": "Bistro 26 is a sophisticated contemporary restaurant that offers both traditional and modern quality English food. Welcome to Ciao Bella restaurant, we are located in Huddersfield town centre and provide authentic Italian food, we also serve coffees and alcohol with an option to eat and drink outside. More than 22 years of successful experience in restaurant business. We are a high class restaurant in the centre of China Town, Manchester that serves the finest Hunan and Cantonese cuisine. The Blue Bell is a delightful combination of a Traditional Village Pub and high quality Italian Restaurant. There is always an invitation to unwind and relax at The Italian Restaurant, where fine Italian and Mediterranean cuisine has been served to locals and visitors for over 12 years. The Victoria Restaurant offers a wide variety of traditional British menus for lunch and dinner and has a carefully selected wine list to accompany while the well-stocked bar is just the place to relax over a drink. A restaurant is a business that serves food, drink and dessert to customers for a price. All restaurants have some kind of theme, even if it is simply \"local cuisine at a low price\". Restaurants can specialise in seafood dishes, vegetarian dishes, or in a cuisine from a particular country or region. Casual dining refers to a restaurant that serves a range of moderately priced food in a generally casual atmosphere. **What is a Fast Food Restaurant?**. A fast food restaurant, above all else, emphasizes speed of service. Fine dining restaurants are the opposite of fast food restaurants in that they cater for those looking for a high quality dining experience. In metropolitan areas, there will be many choices, from local cuisine restaurants to restaurants offering fare from around the world. The most common types of restaurant in the UK, apart from those selling local fare, are those selling Indian, Chinese and Italian cuisine. Much of the food sold in these restaurants has taken on UK flair, and will be quite different from the original dishes of the country. Restaurants can be rated on a number of factors, such as cleanliness, ambience, price, quality of the food prepared, and service.",
      "score": 0.6158511,
      "raw_content": null,
      "published_date": null,
      "favicon": "http://www.tigerlocal.co.uk/favicon.ico",
      "id": "f6fb28-01"
    },
    {
      "url": "https://alberts-restaurants.com/shed",
      "title": "Albert's Shed - Iconic Canalside Restaurant in Manchester",
      "content": "#### Goats’ Cheese & Caramelised Onion\n\n  £14\n\n  tomato • fior di latte • red tapenade • basil • pine nuts [V] [VEO] [GFO +2]\n #### Hot Honey Chicken\n\n  £14.75\n\n  tomato • charred corn • spring onion • jalapeño [VEO] [GFO +2]\n #### ’Nduja & Pepperoni\n\n  £13.5\n\n  tomato • fior di latte • green chilli [GFO +2]\n #### Margherita\n\n  £10\n\n  tomato • fior di latte [V] [VEO] [GFO +2]\n #### Chicken Caesar\n\n  £14\n\n  fior di latte • garlic butter • cos lettuce • crispy serrano ham • parmesan\n   Sides \n\n #### Dauphinoise\n\n  £5\n\n  sliced potatoes • cream • thyme [V] [GF]\n #### Roasted Carrots & Parsnips\n\n  £4\n\n  toasted seeds • maple [VE] [GF]\n #### French Beans\n\n  £4.5\n\n  almonds • tarragon oil [V] [VEO] [GF]\n #### Skinny Fries\n\n  £4.75 [...] £4.75\n\n  [V] [VEO] [GFO] ADD TRUFFLE & PARMESAN +1.25\n #### Proper Chips\n\n  £4.75\n\n  [V]\n #### Creamed Leeks\n\n  £4.5\n\n  lemon & herb sourdough crumb • parmesan [V] [GFO]\n   Steak Sauces \n\n #### Peppercorn\n\n  £3\n\n  [GF]\n #### Chimichurri\n\n  £3\n\n  [VE] [GF]\n #### Blue Cheese\n\n  £3\n\n  [V]\n   Pizza Dips \n\n #### Hot Honey\n\n  £2\n\n  [V] [GF]\n #### Caesar\n\n  £2\n\n  [V]\n #### Sriracha Mayo\n\n  £2\n\n  [VE] [GF]\n\nV VegetarianVO Vegetarian option availableVE VeganVEO Vegan option availableGF Gluten freeGFO Gluten free option available\n\nChoose a menu\n\n### Lunch\n\n#### £16.50 Lunch Menu\n\nPrefer the full menu? Download PDF ↗\n\nMake time for lunch, with two courses for £16.50 or three for £20.50.\n\nTwo courses£16.50\n\nThree courses£20.50\n\nWhen it's available\n\nTuesday–Friday12pm–5pm\n\nSaturday12pm–3pm [...] £6.5\n\n  garlic dough balls [V]\n #### Fish & Chips\n\n  £7.25\n\n  fries • garden peas\n #### Katsu Chicken\n\n  £8.5\n\n  mild curry sauce • coconut rice • edamame beans\n #### Little Beef Pie\n\n  £9\n\n  fries • garden peas • gravy\n #### Smashed Burger\n\n  £9\n\n  cheese • ketchup • fries\n   Pizza \n\n #### Make Your Own\n\n  £7\n\n  we supply the base and the toppings and you make the pizza!\n #### Margherita\n\n  £5.5\n\n  [VEO] [GFO]\n   Sunday \n\n #### Little Beef Dinner\n\n  £11.5\n\n  yorkshire pud • mash • roasties • veggies • gravy [GFO]\n   Desserts \n\n #### Ice Cream Sundae\n\n  £4.75\n\n  raspberry sauce • mini marshmallows • squirty cream [GF]\n #### Sugared Dough Balls\n\n  £3.25\n\n  toffee sauce [V]\n #### Chocolate Brownie\n\n  £3.75\n\n  ice cream [V]",
      "score": 0.586926,
      "raw_content": null,
      "published_date": null,
      "favicon": "https://alberts-restaurants.com/favicon.ico",
      "id": "74f308-02"
    },
    {
      "url": "https://www.reddit.com/r/manchester/comments/1pou652/vegetarian_restaurants",
      "title": "Vegetarian restaurants : r/manchester",
      "content": "Not exclusively veggie restaurants, but with great veggie options - Fire House, Rudy's, 10 Tib Lane, House of Fu and Dishoom. If you want",
      "score": 0.49143207,
      "raw_content": null,
      "published_date": "Fri, 26 Dec 2025 16:00:00 GMT",
      "favicon": "https://www.redditstatic.com/shreddit/assets/favicon/152x152.png",
      "id": "272121-03"
    },
    {
      "url": "https://www.facebook.com/MCRfinest/videos/manchesters-best-cheap-eats/1200367408962182",
      "title": "manchester's best cheap eats",
      "content": "This post provides a food guide for affordable and reliable meals in Manchester, priced under £7. It features a list of recommended dishes",
      "score": 0.4906999,
      "raw_content": null,
      "published_date": "Tue, 24 Feb 2026 16:00:00 GMT",
      "favicon": "https://z-m-static.xx.fbcdn.net/rsrc.php/yj/r/rvjuhHLwc7B.ico",
      "id": "6a1d9e-04"
    },
    {
      "url": "https://manchestervt.org/restaurants",
      "title": "Manchester VT Restaurants: Dinner, Breakfast & Casual Food",
      "content": "Mother Myrick’s: use the confectionery for chocolate, baked treats, or a gift stop rather than expecting it to replace a full breakfast for every traveler.\n\nCasual meals\n\n## Match Manchester Center food to the day you actually had\n\n### The Crooked Ram\n\nThe Manchester Center restaurant serves a modern casual meal and drinks. Confirm current service days and whether the menu fits children or conservative eaters before making it the group’s only dinner plan.\n\n### Zoey’s Double Hex\n\nBurgers and familiar casual food make this a straightforward answer after outlets, skiing, or a long drive. It is better for ease than for a formal Manchester evening.\n\n### Pearl’s Place & Pantry [...] # Manchester Restaurants\n\nReserve a small dining room or inn restaurant for the important dinner, then use Manchester Center for breakfast, casual food, and provisions.\n\nDinner reservations\n\n## Reluctant Panther, Silver Fork, or Marsh Tavern\n\n### The Reluctant Panther Restaurant\n\nChoose this for an inn dining room, a polished menu, and a dinner that carries the evening. Reserve early for foliage, holiday, and ski weekends; check the current menu before treating it as a casual family stop.\n\n### Silver Fork\n\nThe small dining room suits a quieter chef-led dinner. Limited seating makes advance reservations more important here than at a large tavern, and the menu should determine whether it fits every diner in the group.\n\n### Marsh Tavern at the Equinox [...] Local icon✦\n\n### Mother Myrick's Confectionery\n\nFounded in 1977 as a small fudge shop, the confectionery makes buttercrunch toffee, Lemon Lulu cake, caramels, and chocolates in small, handmade batches.\n\nWebsiteOpen map\n\nBreakfast\n\n### The Works Bakery Cafe\n\n4.4 ★\n\nTraditional New York-style bagels, artisanal sandwiches, and organic quinoa bowls feature thoughtfully sourced ingredients, including local cage-free eggs and unbleached, unbromated flour.\n\nWebsiteOpen map",
      "score": 0.48689327,
      "raw_content": null,
      "published_date": null,
      "favicon": "https://manchestervt.org/favicon.ico",
      "id": "695200-05"
    },
    {
      "url": "https://guide.michelin.com/us/en/greater-manchester/manchester/restaurants",
      "title": "Manchester MICHELIN Restaurants - The MICHELIN Guide United Kingdom",
      "content": "Manchester, United Kingdom\n\n££ · Modern British\n\n### Erst\n\nManchester, United Kingdom\n\n££ · British Contemporary\n\n### Winsome\n\nManchester, United Kingdom\n\n£££ · Traditional British\n\n Reserve a table\n\n### mana\n\nManchester, United Kingdom\n\n££££ · Creative British\n\n### 10 Tib Lane\n\nManchester, United Kingdom\n\n££ · Modern Cuisine\n\n### Skof\n\nManchester, United Kingdom\n\n££££ · Creative\n\n### El Gato Negro\n\nManchester, United Kingdom\n\n££ · Spanish\n\n### Adam Reid at The French\n\nManchester, United Kingdom\n\n££££ · Modern British\n\n The Midland\n\n### Pip\n\nManchester, United Kingdom\n\n££ · Modern British\n\n### Stow\n\nManchester, United Kingdom\n\n££ · Modern British\n\n### Kallos Cafe & Wine Bar\n\nSalford, United Kingdom\n\n££ · Greek\n\n### The Spärrows\n\nManchester, United Kingdom\n\n££ · Modern Cuisine [...] Manchester, United Kingdom\n\n££ · Modern Cuisine\n\n### Where The Light Gets In\n\nStockport, United Kingdom\n\n£££ · Modern British\n\n### Restaurant ÖRME\n\nUrmston, United Kingdom\n\n£££ · Modern British\n\n### The White Hart\n\nOldham, United Kingdom\n\n££ · Traditional British\n\n### Almanac\n\nGlossop, United Kingdom\n\n££ · Seasonal Cuisine\n\n Reserve a table\n\n### The Spread Eagle by McLeod 9\n\nEdgworth, United Kingdom\n\n££ · Modern Cuisine\n\n### LI~LY by Aiden Byrne\n\nKnutsford, United Kingdom\n\n££££ · Modern British\n\n### The Pack Horse\n\nHayfield, United Kingdom\n\n££ · Modern British\n\n Reserve a table\n\n### Deacon's Bank\n\nChapel-en-le-Frith, United Kingdom\n\n£££ · Modern British\n\nThe areas covered by the MICHELIN Guide are increasing regularly so we may have some selection soon. [...] Restaurants\n Hotels\n MICHELIN Guide Plus\n Travel Guides\n Best-of Guides\n Magazine\n MICHELIN Guide Ceremony\n Contact us\n Subscribe to newsletter\n Booking partnership with OpenTable\n Booking partnership with Resy\n USA - English - USD\n\nGood for\n\nCuisine\n\nSpecial diets\n\nIn MICHELIN Hotels\n\nPrice\n\nDays open\n\nHours open\n\nBook Online\n\nServices / Facilities\n\n Notes\n Favorites\n Visited\n Lowest price\n Highest Price\n Distance\n\n# Manchester, Greater Manchester, United Kingdom and surroundings: 1-23 of 23 restaurants\n\n### Higher Ground\n\nManchester, United Kingdom\n\n££ · Modern British\n\n### Sampa\n\nManchester, United Kingdom\n\n£££ · Brazilian\n\nNew\n\n### posie\n\nManchester, United Kingdom\n\n££ · Mediterranean Cuisine\n\nNew\n\n### The Trof\n\nManchester, United Kingdom\n\n££ · Modern British\n\n### Erst",
      "score": 0.4833807,
      "raw_content": null,
      "published_date": null,
      "favicon": "https://guide.michelin.com/assets/favicon-b26fd77a3ae615a9e77be34bb7b0751c.svg",
      "id": "2d9656-06"
    },
    {
      "url": "https://www.restaurantsofmanchester.com/british.htm",
      "title": "British restaurants in Manchester",
      "content": "Manchester Restaurant Guide - comprehensive guide to British restaurants in Manchester serving local cuisine.",
      "score": 0.48030865,
      "raw_content": null,
      "published_date": null,
      "favicon": "https://www.restaurantsofmanchester.com/favicon.ico",
      "id": "b8f738-07"
    }
  ],
  "response_time": 7.17,
  "usage": {
    "credits": 2
  },
  "request_id": "316c36b5-3fbb-4b41-91be-fdcbb7ffb6e6"
}

## Cost

>>> Tavily Credit x 2 
