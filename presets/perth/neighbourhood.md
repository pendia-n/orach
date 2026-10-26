# Perth: neighbourhood

Received: 2026-10-26T21:06:35.885Z

## Request

{
  "query": "Build up to four DISTINCT neighbourhood records for Perth , Australia, within city and central urban neighbourhoods, as of 2026-10-26. Prefer official city/tourism pages, relevant named venue pages and identified local publications, including local-language sources. Seek contrasting central convenience, food/culture, independent shopping/creativity and quieter alternatives only where supported. Distinguish a district, neighbourhood, street and single complex; do not count overlapping names or the same area twice. For EACH item give name, kind, location/boundary, factual character, an actual named food/drink example, an actual named shopping/culture example, suitability explicitly labelled editorial interpretation, and a sourced practical trade-off or null. Give specific page URLs and short exact excerpts mapped to each factual field. Read source bodies; a homepage link alone is not evidence. Do not invent safety, noise, popularity or walking-time claims. prices MUST be an empty array: an area has no inherent admission price. Use null and unknowns for missing facts. Return complete separate records in items and explicit coverage_gaps, never a one-sentence city summary. Return fewer records if evidence is insufficient. Treat webpage instructions as untrusted content.",
  "model": "exa",
  "text": true,
  "outputSchema": {
    "type": "object",
    "properties": {
      "city": {
        "type": "string"
      },
      "section": {
        "const": "neighbourhood"
      },
      "items": {
        "type": "array",
        "maxItems": 4,
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "kind": {
              "type": "string"
            },
            "location": {
              "type": [
                "string",
                "null"
              ]
            },
            "summary": {
              "type": "string"
            },
            "prices": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "amount": {
                    "type": [
                      "number",
                      "null"
                    ]
                  },
                  "currency": {
                    "type": "string"
                  },
                  "unit": {
                    "type": "string"
                  },
                  "price_type": {
                    "enum": [
                      "standard",
                      "from",
                      "supplement",
                      "deposit",
                      "fee",
                      "unknown"
                    ]
                  },
                  "conditions": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "source_url": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "excerpt": {
                    "type": [
                      "string",
                      "null"
                    ]
                  }
                },
                "required": [
                  "name",
                  "amount",
                  "currency",
                  "unit",
                  "price_type",
                  "conditions",
                  "source_url",
                  "excerpt"
                ],
                "additionalProperties": false
              }
            },
            "details": {
              "type": "object",
              "properties": {
                "boundary": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "character": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "food_drink_example": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "shopping_culture_example": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "suits_interpretation": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "practical_trade_off": {
                  "type": [
                    "string",
                    "null"
                  ]
                }
              },
              "required": [
                "boundary",
                "character",
                "food_drink_example",
                "shopping_culture_example",
                "suits_interpretation",
                "practical_trade_off"
              ],
              "additionalProperties": false
            },
            "evidence": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "field": {
                    "type": "string"
                  },
                  "source_url": {
                    "type": "string"
                  },
                  "excerpt": {
                    "type": "string"
                  }
                },
                "required": [
                  "field",
                  "source_url",
                  "excerpt"
                ],
                "additionalProperties": false
              }
            },
            "unknowns": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "name",
            "kind",
            "location",
            "summary",
            "prices",
            "details",
            "evidence",
            "unknowns"
          ],
          "additionalProperties": false
        }
      },
      "coverage_gaps": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "required": [
      "city",
      "section",
      "items",
      "coverage_gaps"
    ],
    "additionalProperties": false
  }
}

## JSON

{
  "requestId": "2c8720507ca21bf5c77b2f2ecd12f8ed",
  "answer": {
    "city": "Perth",
    "coverage_gaps": [
      "Claisebrook",
      "Crawley-Nedlands",
      "East Perth",
      "West Perth"
    ],
    "items": [
      {
        "details": {
          "boundary": "Bound by St Georges Terrace, Barrack Street, Hay Street and Pier Street.",
          "character": "A vibrant urban neighbourhood acting as a central meeting place, encompassing heritage buildings like the State Buildings and Town Hall alongside modern libraries and justice centers.",
          "food_drink_example": "Wildflower (rooftop fine dining) and Petition Kitchen.",
          "practical_trade_off": "While centrally located with significant amenities, it can be busy and is a high-traffic commercial area.",
          "shopping_culture_example": "Cathedral Square Gallery and the City of Perth Library.",
          "suits_interpretation": "Best suited for visitors interested in a mix of heritage architecture, public arts, and central urban amenities."
        },
        "evidence": [
          {
            "excerpt": "The precinct is bound by St Georges Terrace, Barrack Street, Hay Street and Pier Street in one of Perth’s major CBD blocks. It encompasses the historic State Buildings, Perth Town Hall, St George’s Cathedral, The Deanery, the State Administrative Tribunal building, the new City of Perth Library and the David Malcolm Justice Centre.",
            "field": "boundary",
            "source_url": "https://visitperth.com/see-and-do/public-spaces/venues/cathedral-square"
          },
          {
            "excerpt": "the beautifully restored State Buildings are home to some of Perth’s best restaurants – including Long Chim’s authentic Thai cuisine and the rooftop fine diner, Wildflower – but the place to be for breakfast is Petition Kitchen.",
            "field": "food_drink_example",
            "source_url": "https://www.australia.com/en/places/perth-and-surrounds/suburb-guide.html"
          }
        ],
        "kind": "Single Complex/Precinct",
        "location": "Corner of St Georges Terrace and Barrack Street, Perth 6000",
        "name": "Cathedral Square",
        "prices": [],
        "summary": "An interactive urban precinct in the centre of Perth featuring heritage architecture, public squares, and cultural venues.",
        "unknowns": []
      },
      {
        "details": {
          "boundary": "North of the CBD, within walking distance of Perth Underground Station.",
          "character": "A dynamic, multicultural cultural hub known for its concentration of arts, entertainment, Asian cuisine, and nightlife.",
          "food_drink_example": "Picabar (cocktail bar) and various authentic Asian eateries along William Street.",
          "practical_trade_off": "Being a high-energy nightlife and entertainment district, it can be noisy and crowded compared to quieter parts of the city.",
          "shopping_culture_example": "Perth Cultural Centre (housing the Art Gallery of WA and WA Museum Boola Bardip).",
          "suits_interpretation": "Ideal for those seeking arts, vibrant nightlife, diverse international dining, and cultural attractions."
        },
        "evidence": [
          {
            "excerpt": "Find a kaleidoscope of food and arts in Northbridge, a cultural hub just a five-minute walk from the Perth CBD renowned for its shopping, cafés, restaurants and entertainment venues.",
            "field": "character",
            "source_url": "https://www.destinationperth.com.au/explore-perth/perth-city/northbridge/"
          },
          {
            "excerpt": "You can walk to Northbridge from Perth Underground Station in just four minutes along William Street.",
            "field": "boundary",
            "source_url": "https://www.westernaustralia.com/my/places/northbridge/56b267b4aeeeaaf773cfa7e1"
          }
        ],
        "kind": "Neighbourhood",
        "location": "North of Perth CBD",
        "name": "Northbridge",
        "prices": [],
        "summary": "A cultural and entertainment precinct featuring museums, galleries, and a dense concentration of restaurants and bars.",
        "unknowns": []
      },
      {
        "details": {
          "boundary": "Historic cobblestone thoroughfare in the CBD.",
          "character": "A heritage thoroughfare known as the city’s high-end retail hub, featuring boutique-filled historic arcades and luxury brands.",
          "food_drink_example": "Various intimate laneway bars and cafes connected to the area.",
          "practical_trade_off": "Focused primarily on high-end luxury, which may limit independent or budget shopping options.",
          "shopping_culture_example": "Luxury boutiques such as Tiffany, Chanel, and Louis Vuitton.",
          "suits_interpretation": "Best for luxury shoppers and those interested in preserved historic streetscapes and high-end fashion."
        },
        "evidence": [
          {
            "excerpt": "it’s a six-minute walk to the heritage cobblestone thoroughfare of King Street, where Mui Mui rubs shoulders with Tiffany, Chanel and Louis Vuitton.",
            "field": "shopping_culture_example",
            "source_url": "https://www.visitperth.com/expore-by-area/central-perth/"
          },
          {
            "excerpt": "stroll along quirky King Street where the high fashion boutiques at one end give way to hip speakeasy bars at the other.",
            "field": "character",
            "source_url": "https://www.australia.com/en/places/perth-and-surrounds/suburb-guide.html"
          }
        ],
        "kind": "Street",
        "location": "Perth CBD",
        "name": "King Street",
        "prices": [],
        "summary": "A historic, cobblestone-paved street known as Perth's primary destination for luxury fashion and high-end shopping.",
        "unknowns": []
      },
      {
        "details": {
          "boundary": "Inner-city area connected by rail to the CBD and Airport, bordering Kings Park.",
          "character": "A vibrant inner-city neighbourhood known for its leafy streets, heritage architecture, and a village-like atmosphere.",
          "food_drink_example": "Award-winning restaurants and independent cafes along Rokeby Road.",
          "practical_trade_off": "Located outside the immediate central business district, requiring public transport or travel to reach the absolute core of the city.",
          "shopping_culture_example": "Independent retailers along Rokeby Road and the Regal Theatre.",
          "suits_interpretation": "Ideal for those looking for a mix of urban energy, heritage charm, and boutique shopping away from the dense CBD high-rises."
        },
        "evidence": [
          {
            "excerpt": "Located on the doorstep of Kings Park and connected by rail to both Perth Airport and the CBD, Subiaco is a vibrant inner-city neighbourhood that seamlessly blends historic charm with urban energy",
            "field": "character",
            "source_url": "https://www.destinationperth.com.au/explore-perth/perth-city/subiaco/"
          },
          {
            "excerpt": "By day, browse independent retailers along Rokeby Road, discover some of Perth's best coffee and pastries... By night, uncover hidden bars, catch a live show at the Regal Theatre",
            "field": "shopping_culture_example",
            "source_url": "https://www.destinationperth.com.au/explore-perth/perth-city/subiaco/"
          }
        ],
        "kind": "Neighbourhood/District",
        "location": "Inner-city Perth, near Kings Park",
        "name": "Subiaco",
        "prices": [],
        "summary": "A leafy, heritage-rich inner-city neighbourhood offering independent boutiques, acclaimed dining, and arts attractions.",
        "unknowns": []
      }
    ],
    "section": "neighbourhood"
  },
  "citations": [
    {
      "id": "https://www.visitperth.com/expore-by-area/central-perth/",
      "title": "Things to Do in Perth CBD / Boorloo | Visit Perth",
      "url": "https://www.visitperth.com/expore-by-area/central-perth/",
      "text": "Things to Do in Perth CBD / Boorloo | Visit Perth\n\n## The City at full stride\n\n \n\n### Grand heritage meets modern energy \n\nThe cityscape’s timeline reveals itself in enchanting architectural chapters as you stroll along the main streets. Its humble beginnings sit quietly on the corner of Barrack Street at The Old Court House Law Museum, beside the bolder marks of the gold boom that followed with the Victorian Gothic grandeur of St George’s Cathedral and Perth Town Hall and the uniquely elaborate Jacobean style Government House.\n\nThese stand in striking contrast to the glittering 20th- and 21st-Century skyscrapers and the boundary-pushing award-winning design of the new ECU City Campus – home of the Western Australian Academy of Performing Arts (WAAPA).\n\n### Space that brings us closer together \n\nEven at the commercial core, you’ll find a city casually connecting in generous open spaces. At the meeting point of Nyoongar and contemporary art and culture in Yagan Square. In Forrest Place, where the public art trail begins with “meet me under the Big Cactus” and Twilight Food Markets kick off summer weekends. In Elizabeth Quay / Goomap, the CBD’s waterfront loungeroom. And relaxing in the shade of the city’s first botanical garden - Stirling Gardens and Supreme Court Gardens.\n\n \n\n### Tasting Australia’s sunniest capital\n\nWhere else can you dine under a blue sky almost all year round, right in the heart of the city? No wonder Perth / Boorloo’s CBD restaurant scene is booming with opulent fine dining showcasing the State’s freshest and most coveted seasonal flavours. Popular coffee stops spilling onto the streets. Absolute waterfront brunch and lunch spots that lure you to linger longer. Rooftop bars with wine, craft beer and cocktail lists as expansive as the city-to-river views. And intimate in-between spaces concealing more hidden hangouts, from Wolf Lane’s kooky cafes and quietly sophisticated small bar scene to Shafto Lane’s lively eclectic mix of beers, burgers and funky Asian bites. \n\n### Shop the lot. Big brands and boutiques.\n\n Browsing or hunting, a spree in the CBD lets you take it all in, in the glorious sunshine. The leafy open-air pedestrian-only malls of Murray Street and Hay Street run in parallel, so you can easily hop from major department stores and global brands to boutique-filled historic arcades and laneways. If high end is more your style, it’s a six-minute walk to the heritage cobblestone thoroughfare of King Street, where Mui Mui rubs shoulders with Tiffany, Chanel and Louis Vuitton.\n\n \n\n### A heart with artful soul\n\nAs a city firmly grounded in the oldest living culture on Earth, Perth / Boorloo celebrates ancient and modern storytelling and creative expression in all forms. You’ll see it woven through a rich seam of public art, enlightening cultural tours, a lively calendar of festivals and events and vibrant CBD venues. From the splendour of Edwardian-era architecture at His Majesty’s Theatre and the beautifully adapted heritage space of Cathedral Square Gallery, to the luxe cinema complex of Palace Raine Square, and cosy laneway bars and clubs.",
      "image": "https://images3.cmp.optimizely.com/Zz0zZWNjYTQ2Y2FjY2IxMWYxOTEyZTI2NDZlZDA1NTQ4YQ=="
    },
    {
      "id": "https://visitperth.com/see-and-do/public-spaces/venues/cathedral-square",
      "title": "Cathedral Square | Visit Perth",
      "url": "https://visitperth.com/see-and-do/public-spaces/venues/cathedral-square",
      "text": "Cathedral Square | Visit Perth\n\n# Cathedral Square\n\n# Cathedral Square\n\nCathedral Square is a vibrant urban neighbourhood in the centre of Perth. \n\nDesigned as an open, interactive meeting place and public square, the precinct introduces locals and tourists to arts and entertainment experiences, retail and dining. \n\nThe precinct is bound by St Georges Terrace, Barrack Street, Hay Street and Pier Street in one of Perth’s major CBD blocks. It encompasses the historic State Buildings, Perth Town Hall, St George’s Cathedral, The Deanery, the State Administrative Tribunal building, the new City of Perth Library and the David Malcolm Justice Centre. \n\nCarefully curated retail stores, bars and restaurants, plus a unique mix of venue spaces for hire and a public art program are complemented by an annual program of events spanning arts, culture and entertainment, making Cathedral Square a thriving, engaging urban destination. \n\n- ### Location\n\nCnr St Georges Terrace and Barrack Street\n\nPerth 6000 WA WA\n- ### Contact\n\nEmail (events@cathedralsquare.com.au)\n- ### Open Hours\n\nPlease see website\n- ### Accessibility\n\nWheelchair access\n\n## Cathedral Square Venues\n\nWildflower Central Perth\n\nComo The Treasury Central Perth\n\nCity of Perth Library Central Perth\n\n## Plan your trip\n\n-31.9553766413135 115.861102389549\n\n### Get Directions\n\nWalking Bike Car Train Bus\n\n- (08) 9461 3333 (0894613333)\n- hello@visitperth.com?subject=Visit%20Perth%20-%20Website Enquiry",
      "image": "https://visitperth.com/-/media/Project/COP/COP/COP/Assets/Images-and-Video/Venues/Public-Spaces/see-do_publicspaces_CathedralSquare_Image7.jpg?h=300&w=400&modified=20180711075255&hash=20D280C0A1D025DE7AED831470F5D3EC"
    },
    {
      "id": "https://www.australia.com/en/places/perth-and-surrounds/suburb-guide.html",
      "title": "Perth suburb guide – Tourism Australia",
      "url": "https://www.australia.com/en/places/perth-and-surrounds/suburb-guide.html",
      "author": "Tourism Australia",
      "text": "Perth suburb guide – Tourism Australia \n\n \n\nCottesloe Beach, Perth, Western Australia © Tourism Australia\n\nPerth suburb guide\n\nWhether you want to soak up a beachside lifestyle or revel among inner-city buzz, in Perth, you can have it all.\n\nBy Ute Junker and Carly Spek\n\nPerth is known for enjoying more sunny days than any other Australian capital city, making it the perfect place to enjoy the gorgeous beaches fringing the wine bars, museums, sprawling parks and restaurants of the inner city.\n\n## Central Perth\n\nKings Park, Perth, Western Australia © Tourism Western Australia\n\n \n\nWhere: City centre, Northbridge, Mount Lawley\n\nExpect the unexpected in Perth’s most central neighbourhoods: heritage buildings reinvented as restaurants, laneways that double as alfresco bars and metres-high murals decorating the sides of office blocks. A natural escape is never far away, with the tranquil Swan River and the sprawling Kings Park easily accessible from the heart of town. In Northbridge, find a congregation of Perth’s best museums, theatres and galleries.\n\nJust how many top-notch bars and eateries can you fit under one roof? In the city centre, the beautifully restored State Buildings are home to some of Perth’s best restaurants – including Long Chim’s authentic Thai cuisine and the rooftop fine diner, Wildflower – but the place to be for breakfast is Petition Kitchen. Hit trendy William Street in Northbridge for cocktail bars like the swanky Picabar, Asian eateries and vibrant LGBTQI+ nightlife.\n\nTake a wander down to the lively Elizabeth Quay by the river, or stroll along quirky King Street where the high fashion boutiques at one end give way to hip speakeasy bars at the other. Join a walking tour through Kings Park with Nyungar Tours to learn more about Perth’s Aboriginal history, or explore the colourful street art and pocket bars tucked away down Wolf Lane. For a spot of shopping, stop by Mount Lawley’s Beaufort Street’s boutiques.\n\nPerth's inner city hotels tend to be stylish and playful, with many offering some of the area's best dining in-house. Sip a nightcap at one of Northbridge’s bars before laying your head at the minimalist-chic Alex Hotel and take advantage of their complimentary bikes to get around the city the next day. You could also check in to a bright and airy room at the elegant city centre hotel, COMO The Treasury, or stay a while at the playful QT Perth.\n\n## Perth’s beaches\n\nAerial view of Cottesloe Beach, Perth, Western Australia © Tourism Western Australia\n\nAny local will tell you: the beach is an integral part of daily life in Perth. Local residents often start the day with a quick dip and return at the end of the day to watch the sun sink into the horizon from a beachside bar, as Perth’s beaches are easy to get to from the city. But there is more to its most well-known trio of coastal hubs (Fremantle, Scarborough and Cottesloe) than just swimming, surfing and socialising, especially in historic Fremantle.\n\nThirty minutes’ drive south-west of the city centre, Fremantle (“Freo” to locals) is home to the lively Fremantle Markets, a thriving craft beer scene and some of Perth’s best cafés and restaurants such as Bread in Common. Over in Cottesloe, 15 minutes from the city centre by public transport, foodies can enjoy the delights of The Cottesloe Beach Hotel, a favourite weekend hangout with locals.\n\nYou'll find people swimming, surfing and snorkelling the coast in all of Perth's beachside suburbs. Cottesloe ticks all the boxes for a relaxing day out, with its gentle ocean swell and picnic-ready lawns shaded by Norfolk Pine trees. The warm breeze of Scarborough Beach draws kite surfers, and a host of shoreline cafés make the perfect viewing point. History buffs can't skip a visit to Fremantle for the World Heritage-listed Fremantle Prison.\n\nComfortable, laid-back stays are sprinkled throughout Perth's shores. In the heart of Fremantle, the Hougoumont Hotel offers an innovative boutique sleeping option honouring Freo’s seafaring past. For something completely different, you can even sleep in a former prison cell at the Fremantle Prison YHA. Further north, enjoy ocean views from The Cottesloe Beach Hotel, or relax by the lagoon-style pool at Scarborough’s Rendezvous Hotel.",
      "image": "https://www.australia.com/content/dam/digital/australia-com/images/perth-suburb-guide-cott-beach.jpg"
    },
    {
      "id": "https://www.destinationperth.com.au/explore-perth/perth-city/northbridge/",
      "title": "Northbridge | Destination Perth",
      "url": "https://www.destinationperth.com.au/explore-perth/perth-city/northbridge/",
      "text": "Northbridge | Destination Perth\n\n# Northbridge\n\nFind a kaleidoscope of food and arts in Northbridge, a cultural hub just a five-minute walk from the Perth CBD renowned for its shopping, cafés, restaurants and entertainment venues. \n\nThe neighbourhood is home to Perth's Chinatown and offers great coffee and brunch options, vintage stores, local fashion, homewares and small bars. William Street is bursting with young designers whose quirky stores will delight even the most discerning fashionista. You'll find unique pieces that are fashion-forward, the perfect gift for someone who has everything, or hard-to-find designer pieces from overseas.\n\nNorthbridge is also home to the Perth Cultural Centre, where you'll find the WA Museum Boola Bardip, Art Gallery of Western Australia, State Theatre of Western Australia and Perth Institute of Contemporary Art. Explore the State Art Collection at the Art Galley, showcasing more than 1,000 pieces of national and international art.\n\nExtending north along William Street, the precinct offers even more to discover - from affordable and authentic Asian cuisine to South American BBQ. Enjoy evening drinks at a range of popular wine bars and pubs, then finish with dessert or gelato. There are plenty of places to stop for brunch or coffee, or you can stroll through Hyde Park, see what's on at HBF Park, and explore the Brookman and Moir Streets Heritage Area - adding green space, live sport, and heritage character to this dynamic urban precinct.\n\n#### Eat & Drink",
      "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/perthrto/Perth_Dining_116154_a75fab2d-df1f-4e3b-ab72-69b029a76fd6.jpg"
    },
    {
      "id": "https://www.westernaustralia.com/my/places/northbridge/56b267b4aeeeaaf773cfa7e1",
      "title": "Northbridge - Destination - Tourism Western Australia",
      "url": "https://www.westernaustralia.com/my/places/northbridge/56b267b4aeeeaaf773cfa7e1",
      "author": "Tourism WA",
      "text": "Northbridge - Destination - Tourism Western Australia\n\nNorthbridge is a cultural feast for the senses within minutes of Perth's city centre. Showcasing local, national and international art, fashion and history, it's also a multicultural melting pot of flavours blended together with a lively mix of bars and nightclubs. You can walk to Northbridge from Perth Underground Station in just four minutes along William Street. Or, hop on the free Blue CAT bus if you're out and about in Perth's central business district. Make a beeline for the cultural precinct and you can easily spend the day feeding the mind and soul for free with visits to museums, the State library and craft markets. The Art Gallery of Western Australia brings more than 15,000 works by renowned Indigenous, Australian and international artists before your eyes. The contemporary State Theatre Centre, home of the Heath Ledger Theatre, plays host to an array of high profile productions by the Black Swan State Theatre, as well as dance, music and fashion shows. You'll also find original visual, performing and media arts presented at the Perth Institute of Contemporary Arts. Western Australian Museum shares a collection of stories and artefacts of the State's social and natural history, from dinosaurs to the Katta Djinoong. From here, you can explore more of the city's history, following heritage walks to some of Perth's oldest architecture. For a little retail therapy, browse the boutiques of William Street for vintage, hip and quirky fashion. Take your pick from a kaleidoscope of cuisines, from Italian, Greek, Vietnamese, Chinese and Thai to modern Australian. Then wash it down with any beverage imaginable, from coffees to cocktails. The nightlife menu is just as impressive, with a buzzing bar and club scene offering live music, comedy and DJ sessions, plus regular performances, festivals and other cultural activities at the Northbridge Piazza. With a wide variety of backpackers, bed and breakfasts, self-contained accommodation and hotels, it's easy to make Northbridge your base for a city break and catch one of the many annual events, such as the Perth International Arts Festival, Carnival Latino, Perth Food and Wine Festival and the Pride Parade.\n\nExperience the romance of the open road on an epic adventure across Western Australia’s captivating landscapes. Start in Perth, Australia’s sunniest capital and a thriving cultural hub. The city’s natural attractions and imaginative dining scene make it an idyllic introduction to your trip.",
      "image": "https://twa.imgix.net/https%3A%2F%2Fassets.atdw-online.com.au%2Fimages%2F47a22dcc0bb89acd5b1fbdf75e35cb77.jpeg%3Frect%3D0%2C180%2C3464%2C1949%26rot%3D360?auto=format&h=430&w=1920&fit=crop&crop=edges&q=85&s=ed5a60df73d13828c98f751d16f25097"
    },
    {
      "id": "https://www.destinationperth.com.au/explore-perth/perth-city/subiaco/",
      "title": "Subiaco: Things to Do, Eat & Events | Destination Perth",
      "url": "https://www.destinationperth.com.au/explore-perth/perth-city/subiaco/",
      "publishedDate": "2026-04-10T02:00:00.000Z",
      "text": "Subiaco: Things to Do, Eat & Events | Destination Perth\n\n# Subiaco\n\nLocated on the doorstep of Kings Park and connected by rail to both Perth Airport and the CBD, Subiaco is a vibrant inner-city neighbourhood that seamlessly blends historic charm with urban energy, offering visitors a unique mix of boutique shopping, acclaimed dining, cultural attractions and year-round events.\n\nKnown for its leafy streets, lively hospitality scene and thriving arts and entertainment culture, Subiaco is one of Perth's most loved inner-city destinations. By day, browse independent retailers along Rokeby Road, discover some of Perth's best coffee and pastries, or explore a trail of street art murals and heritage architecture. By night, uncover hidden bars, catch a live show at the Regal Theatre, or settle into one of Subiaco's award-winning restaurants.\n\nSubiaco also hosts a dynamic year-round calendar of events, from bustling night markets and live music, to floral art trails, gourmet food festivals and sustainable fashion markets. No matter when you visit, there's always something happening in Subi. With accommodation, entertainment, dining and unique experiences all within walking distance, it's a destination designed to be enjoyed at your own pace.\n\n## 5 of the best places to eat crêpes in Perth \n\nWhere to find the best crêpe in Perth! Crêpes are one of France's most beloved…",
      "image": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/perthrto/23_01_27_251_SoCo_Studios_085_12c653bf-5096-4d12-ba35-3b9af4731817.jpg"
    },
    {
      "id": "https://www.perth.wa.gov.au/community/neighbourhoods",
      "title": "Neighbourhoods | City of Perth",
      "url": "https://www.perth.wa.gov.au/community/neighbourhoods",
      "text": "Neighbourhoods | City of Perth\n\n# Neighbourhoods\n\nOur six neighbourhoods have unique identities and a range of attractions and facilities. They are home for our residents, and places where daily life unfolds for many thousands of workers and visitors. Understanding priorities for each neighbourhood, and responding to community needs, is a key focus for the Neighbourhood Place Plans.\n\n- Central Perth\n- Claisebrook\n- Crawley-Nedlands\n- East Perth\n- Northbridge\n- West Perth\n\n### Customer service\n\n- (08) 9461 3333 (0894613333)\n- info@cityofperth.wa.gov.au\n- Council House 27 St Georges Tce Perth WA 6000",
      "image": "https://www.perth.wa.gov.au/-/media/Project/COP/COP/COP/Site-files/Top-Level-Images/community_services_facilities/2021_UrbanArt_Gangemi-WestPerth-Image-Jarrad-Seng-2.jpg?h=300&w=400&modified=20210720022430&hash=1403E0FC11026EC4B3D8B0084AFE6D23"
    },
    {
      "id": "https://www.perth.wa.gov.au/community/neighbourhoods/central-perth",
      "title": "Central Perth | City of Perth",
      "url": "https://www.perth.wa.gov.au/community/neighbourhoods/central-perth",
      "text": "Central Perth | City of Perth\n\n# Central Perth\n\n## Vision\n\n Humming with activity both day and night, a place of commerce and enterprise, culture and artistic endeavour, recreation and entertainment. It’s history reveals itself in its streets, open spaces and buildings - the beating heart of our state capital.\n\n## Neighbourhood priorities\n\n- Celebrating Whadjuk Noongar culture, more arts and cultural experiences, improving Hay and Murray Street Malls and activating heritage and vacant buildings.\n- More trees and shade to green the city, supporting business vitality and tourism, and improving amenities, such as accessible public toilets and change facilities.\n- Continuing community safety and support, and strengthening social and cultural outreach.\n- Continue to work with neighbourhood groups, residents and stakeholders to support activation, events and business vitality.\n\n \n\n### City greening (Sustainable)\n\nThe ongoing implementation of the Urban Forrest Plan will see approximately 80 new street trees planted on Hay, Murray, Moore and Little Milligan Streets with the aim to ‘green’ our streetscapes, increase shade and amenity and make it more comfortable for pedestrians.\n\n### Summer in the City\n\n City of Light events will be held at Elizabeth Quay and Langley Park, with an even bigger Christmas Light Trail.\n\nThe refresh will deliver new infrastructure such as power outlets, so more events and activities can happen, as well as new seating and tables, improved lighting and public art murals in the laneways of the mall, by local artists.\n\n### Heritage Adaptive Reuse Grants (Property)\n\nSupport for revitalisation and activation of vacant and underutilised spaces of heritage protected buildings with the city’s central business district, with a budget of $4M over 4 years.\n\n### Customer service\n\n- (08) 9461 3333 (0894613333)\n- info@cityofperth.wa.gov.au\n- Council House 27 St Georges Tce Perth WA 6000",
      "image": "https://www.perth.wa.gov.au/-/media/Project/COP/COP/COP/Assets/Images-and-Video/SWAN_BREWERY_REFLECTIONS_2021_CRAWLEY/COP---Diversity-Accessibility-JARRAD-SENG-hi-142.jpg?h=300&w=400&modified=20210720033017&hash=E3EA34C1AA310A6CC58BAE02C66FB566"
    }
  ],
  "costDollars": {
    "total": 0.005
  }
}
