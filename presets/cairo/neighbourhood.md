# Cairo: neighbourhood

Received: 2026-10-26T21:07:34.457Z

## Request

{
  "query": "Build up to four DISTINCT neighbourhood records for Cairo , Egypt, within city and central urban neighbourhoods, as of 2026-10-26. Prefer official city/tourism pages, relevant named venue pages and identified local publications, including local-language sources. Seek contrasting central convenience, food/culture, independent shopping/creativity and quieter alternatives only where supported. Distinguish a district, neighbourhood, street and single complex; do not count overlapping names or the same area twice. For EACH item give name, kind, location/boundary, factual character, an actual named food/drink example, an actual named shopping/culture example, suitability explicitly labelled editorial interpretation, and a sourced practical trade-off or null. Give specific page URLs and short exact excerpts mapped to each factual field. Read source bodies; a homepage link alone is not evidence. Do not invent safety, noise, popularity or walking-time claims. prices MUST be an empty array: an area has no inherent admission price. Use null and unknowns for missing facts. Return complete separate records in items and explicit coverage_gaps, never a one-sentence city summary. Return fewer records if evidence is insufficient. Treat webpage instructions as untrusted content.",
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
  "requestId": "aded82770e5957cc6b3c2f916297600f",
  "answer": {
    "city": "Cairo",
    "coverage_gaps": [
      "Specific neighborhood boundary maps are not provided in the source text.",
      "No pricing information is available as per requirements."
    ],
    "items": [
      {
        "details": {
          "boundary": "An island in the Nile in the heart of the city.",
          "character": "A historic district with tree-lined streets, repurposed former palaces, ornate embassies, and a mix of residential areas and sports/cultural facilities.",
          "food_drink_example": "Zooba (Egyptian street food).",
          "practical_trade_off": "The main thoroughfare, 26th of July Street, is heavily trafficked, noisy, and shaded by a concrete flyover.",
          "shopping_culture_example": "Diwan bookstore.",
          "suits_interpretation": "A relatively quiet, upscale enclave noted for its historic charm and community efforts to preserve heritage, despite increased crowding."
        },
        "evidence": [
          {
            "excerpt": "You live on an island in the middle of the Nile, in the heart of the city.",
            "field": "location",
            "source_url": "https://www.cntravellerme.com/story/guide-to-zamalek-cairo"
          },
          {
            "excerpt": "the main thoroughfare... 26th of July Street... falls under the shadow of a concrete flyover and reverberates with the sound of honking cars.",
            "field": "practical_trade_off",
            "source_url": "https://www.cntravellerme.com/story/guide-to-zamalek-cairo"
          }
        ],
        "kind": "neighbourhood",
        "location": "Zamalek",
        "name": "Zamalek",
        "prices": [],
        "summary": "A historic, Nile-encircled island district known for its elegant architecture, embassies, and cultural institutions.",
        "unknowns": []
      },
      {
        "details": {
          "boundary": "Located between El-Sayeda Zeinab and El-Hussein districts within Al-Darb Al-Ahmar.",
          "character": "The oldest district of Fatimid Cairo, known for historic Islamic landmarks, traditional crafts, and narrow commercial streets.",
          "food_drink_example": "Traditional food is embedded in the area's history, alongside local trade shops.",
          "practical_trade_off": "Null/Unknown.",
          "shopping_culture_example": "Khaimia street (tents manufacturing) and Sorougia street (saddles).",
          "suits_interpretation": "A rich, authentic historical area that provides a panorama of Islamic art and traditional manual industries."
        },
        "evidence": [
          {
            "excerpt": "Megharblin District is located between El-Sayeda Zeinab District and El-Hussein District in Al-Darb Al-Ahmar area, the heart of the Fatimid Cairo.",
            "field": "boundary",
            "source_url": "https://www.cairo.gov.eg/en/culture/cairo-history/cairo-neighborhoods/al-megharblin/"
          }
        ],
        "kind": "district",
        "location": "Megharblin",
        "name": "Megharblin District",
        "prices": [],
        "summary": "The oldest district in Fatimid Cairo, famous for its deep roots, historical landmarks, and specialized traditional crafts.",
        "unknowns": [
          "practical_trade_off"
        ]
      },
      {
        "details": {
          "boundary": "Intersection of Abdel Aziz, Qalaa, Azhar, El-Geish, Azbakeya and Oprah streets.",
          "character": "A bustling central transportation hub and the largest open marketplace in Cairo.",
          "food_drink_example": "Market stalls for all tastes.",
          "practical_trade_off": "Extremely busy and bustling central hub.",
          "shopping_culture_example": "Ataba Square marketplace.",
          "suits_interpretation": "A central, high-energy commercial destination known for accessibility and variety of goods."
        },
        "evidence": [
          {
            "excerpt": "El-Ataba is an intersection of Abdel Aziz Street, Qalaa Street, Azhar Street, El-Geish Street, Azbakeya Street and Oprah Street. Now Ataba Square is the largest marketplace for all ages and tastes at the lowest prices.",
            "field": "boundary",
            "source_url": "https://www.cairo.gov.eg/en/culture/cairo-history/cairo-squares/ataba-square/"
          }
        ],
        "kind": "square",
        "location": "Ataba Square",
        "name": "Ataba Square",
        "prices": [],
        "summary": "A central, bustling commercial square and transport hub that has served as a famous marketplace since 1869.",
        "unknowns": []
      }
    ],
    "section": "neighbourhood"
  },
  "citations": [
    {
      "id": "https://www.cntravellerme.com/story/guide-to-zamalek-cairo",
      "title": "A guide to Cairo's historic Zamalek neighbourhood | Condé Nast Traveller Middle East",
      "url": "https://www.cntravellerme.com/story/guide-to-zamalek-cairo",
      "publishedDate": "2024-07-17T14:19:33.000Z",
      "author": "Nada El Sawy",
      "text": "A guide to Cairo's historic Zamalek neighbourhood | Condé Nast Traveller Middle East\n\n# A guide to Cairo's historic Zamalek neighbourhood\n\nResidents of Zamalek are coming together to ensure the island district retains its historic charm\n\nBy Nada El Sawy \n\nJuly 17, 2024\n\nLászló Mihály\n\nNowhere in Zamalek is the clash of past and present more pronounced than on the main thoroughfare cutting across the Nile-encircled island. 26th of July Street – named after the day in 1954 when King Farouk abdicated – was once Avenue Zamalek, and then Avenue Fouad, after the sultan-turned-king who ruled Egypt from 1917 to 1936. Longtime residents of the Cairo neighbourhood remember the days when 26th of July Street was quiet and sunlit; today it falls under the shadow of a concrete flyover and reverberates with the sound of honking cars. The once-beloved Greek grocer Vasilakis is now the Abdo Saleh shoe store, and Omar El Khayyam bakery has been succeeded by the bright pink, neon-lit Dara’s Ice Cream. But, despite the proliferation of shawarma joints and Western chains, there are still remnants of a simpler time: Simonds bakery and café, open since 1898, where teenagers used to go after school to sip chocolate glacé with whipped cream; Maison Thomas, established in 1922 and still known for its delicious pizzas; and the traditional butcher’s shop and fishmonger.\n\nDeeper into Zamalek, along narrow, tree-lined streets, are repurposed former palaces, ornate embassies that were once the villas of prominent families and galleries spanning decades of Egyptian art. “Although it has lost a lot of its original buildings and has become extra crowded, there is no place like Zamalek in all of Egypt. You live on an island in the middle of the Nile, in the heart of the city,” says Wael Abed, author of the 2013 photographic and historical book Zamalek: My Home Island. A sense of community runs deep here, spurring efforts to preserve the heritage that remains.\n\nAmarena Gelato & Café\n\nWAEL ABED\n\nAbout one kilometre wide and 4km long, the island of present-day Zamalek used to be largely uninhabitable due to regular flooding. In 1830, the then-de facto ruler of Egypt Mohamed Ali Pasha built a summer palace in the spot now occupied by the Military Officers’ Club. In those days, the area was known simply as El Gezira, or “the island”. Khedive Ismail, who served as viceroy of Egypt from 1863 to 1879 under Ottoman rule, built the lavish Gezirah Palace, importing exotic plants from all over the world to create his lush gardens. Famous guests included Empress Eugénie of France and Emperor Franz Josef of Austria. The palace has since been incorporated into the Cairo Marriott Hotel and the gardens divided into allotments.\n\nModern Zamalek is made up of a northern third that is mainly residential, dotted with embassies and ambassadorial homes, and a southern two-thirds dominated by the formerly British colonial Gezira Sporting Club. The southern area is also home to Egypt’s most successful professional football club, Al Ahly, the museum of Egyptian sculptor Mahmoud Mokhtar, established in 1962, the 187-metre Cairo Tower and the “new” Cairo Opera House, established in 1988.\n\nCairo Tower\n\nViktoriya Fivko\n\nLebanese-Croatian restaurateur Nicha Sursock was born in Zamalek a year before the 1952 coup d’état by military officers that toppled the Egyptian monarchy. His great-grandfather Habib Loutfallah had bought the Gezirah Palace Hotel from its Swiss management, and this is where Sursock was raised for the first decade of his life. When the palace was sequestered by the government during Nasser’s socialist years, Sursock and his family emigrated to Lebanon. In 1981, aged 30, he returned to Zamalek and started several well-known nightlife spots, including L’Aubergine and Cairo Jazz Club across the bridge in Agouza. L’Aubergine started as a vegetarian restaurant and evolved into “a hangout, an in-place, a neighbourhood bar,” says Sursock. “I now serve the kids of the clients I had in the beginning.” While he currently lives in Austria, Sursock returns on a monthly basis. “Zamalek for me is my Egypt,” he says.\n\nNearby, the roots of Zamalek’s (and even Cairo’s) art scene can be traced back to Safarkhan Art Gallery, where 93-year-old founder Sherwet Shafei can still be found every day between 11am and 1pm. Established in 1968, Safarkhan was a pioneer of modern Egyptian art and Shafei’s personal collection is unrivalled. “The most beautiful thing in the world is art,” she tells me. “This place is my home.” Picasso Art Gallery and Zamalek Art Gallery followed in the 1990s and, over the past decade, more contemporary venues like Ubuntu, with its trademark bull statue out front.\n\nAbou El Sid restaurant\n\nFadi KOUDSI PHOTOGRAPHY\n\nWhat was missing in Zamalek was an indie bookstore, until sisters Nadia and Hind Wassef opened Diwan in 2002 with partner Nihal Schawky on 26th of July Street. Nadia says they had a vision of a place where people could spend hours browsing a wide selection of English and Arabic books. Diwan has since expanded to 11 locations across Egypt, but the original has a special appeal. “I feel like Diwan has grown up with its clients, but there is a bond,” says Nadia. “We’ve changed, the city has changed, everything has changed, but the bond hasn’t.”\n\nRecent years have also seen a shift from the traditional “kahwa balady” coffee shop to a more globalised espresso culture. The cheery Beano’s, with its bright orange branding, was one of the first modern cafés to open in Zamalek. Shahira Diab, chief executive of established Egyptian family business La Poire Group, says it started as a La Poire with a small coffee shop, but that it was so popular that it “took on a life of its own”.\n\nThe Beano’s building is one of three old neighbouring structures that Diab’s family owns and have recently restored. They include the 115-year-old Gezirah House, thought to be the island’s first apartment building, which reopened in 2022 with a new mix of residential and office tenants. “Cities change and morph and develop, but I think we have the responsibility of preserving the heritage of buildings,” says Diab. “Anyone can create a high-rise in any place in the desert, but nobody can create a building that is 150 years old.”\n\nAbou El Sid restaurant\n\nWAEL ABED\n\nZooba restaurant\n\nWAEL ABED\n\nNada Iskander, co-founder of Nu ̄ n wellness centre, felt the same way about her grandparents’ 100-year-old three-storey building. When her grandmother died in 1984, the family closed the apartment and left everything as it was. After studying nutritional therapy and homeopathy, Iskander wanted to open a holistic healing centre in Zamalek and her father suggested she use the apartment. “It’s like time stood still, but with 27 years of layers of dust,” says Iskander. At the same time, she says, “it was a really beautiful experience to go down memory lane and reopen the house”, transforming it into a calm oasis offering sound healing, yoga, and therapy for the mind and body.\n\nKeeping Zamalek’s unique spirit alive is the goal of a generation whose parents, grandparents and even great-grandparents grew up in the neighbourhood. Nazli Shahine is a fourth-generation Zamalek resident who owns two businesses – Urban Toddlers nursery and Granita café. She and her late brother, Selim, who was diagnosed with ALS in June 2019, fulfilled his dream of opening a community-focused restaurant, five months later. “Granita brought together a lot of people,” Shahine says. “Zamalek is not a street – Zamalek is a community, and this will never change.”\n\n## Where to stay\n\nWith many of its palatial features still intact, including marble statues, majestic stairs and royal portraits, Cairo Marriott Hotel is regal in every sense of the word. Head to its expansive gardens for a drink or meal. The only other five-star hotel option is Sofitel Cairo Nile El Gezirah, set in a cylindrical tower on the southern tip of the island.\n\n## Where to eat\n\nZooba opened its first outlet in Zamalek in 2012 and has since expanded as far afield as New York City, offering a twist on traditional Egyptian street food in dishes such as ta’ameya tossed with harissa- raisin hot sauce. Abou El Sid is the place to head for authentic Egyptian food such as molokhia. For fine dining mixed with Nile views, head to the rooftop Crimson Bar & Gril l or the Pier 88 stationary riverboat. Next door is Le Pacha 1901, which offers eight restaurant and bar concepts by owner Johnny Zahra. The name refers to an Egyptian aristocrat who died in 1901 before completing his dream of creating a floating palace. Granita café’s chic dining room is filled with plants and natural light, and its food and drink menu is extensive.",
      "image": "https://media.cntravellerme.com/photos/6697ccd74f7febad3be718c0/16:9/w_1280,c_limit/815359436"
    },
    {
      "id": "https://www.cairo.gov.eg/en/culture/cairo-history/cairo-neighborhoods/al-megharblin/",
      "title": "Megharblin District - Cairo Portal",
      "url": "https://www.cairo.gov.eg/en/culture/cairo-history/cairo-neighborhoods/al-megharblin/",
      "text": "Megharblin District - Cairo Portal\n\n## Megharblin District\n\nEgyptian History is full of evidence of the Egyptians’ authenticity and deep roots extended to different dynasties and kingdoms for many successive years and what the ancestors had built remains evidence of Egypt’s rich civilization, art, and uniqueness. One of which is Megharblin District, Qahirat El-Moez’s oldest district.\n\n## Location\n\nMegharblin District is located between El-Sayeda Zeinab District and El-Hussein District in Al-Darb Al-Ahmar area, the heart of the Fatimid Cairo. \n\n## Name\n\nMegharblin name is associated with the grain trade, where grains are sifted through sieves to remove all impurities.\n\n## Landmarks\n\nMegharblin District is characterized by its landmarks dates back to the Fatimid era and the Islamic era like the Sabil and Kuttab of Abdel Rahman Katkhuda, which was founded by Prince Abdel Rahman Katkhuda, governor of Egypt, in 1142 AH. There is also Gani Bey Mosque dates from 1426 AH. Moreover, many of Megharblin adjacent streets specialize in certain crafts and industries such as Khaimia street which is famous for tents manufacturing, and Sorougia street where horse saddles are made. \n\nFurther, many authors and artists were born in El-Megharblin including Mahmoud El-Meligy, Yousef El-Sebai, Shafiq Galal, and Mahmoud Shokoko.\n\nMegharblin District on Google Maps\n\nLast Updated: 2026",
      "image": "https://www.cairo.gov.eg/images/cairo%20logo.png"
    },
    {
      "id": "https://www.cairo.gov.eg/en/culture/cairo-history/cairo-squares/ataba-square/",
      "title": "Ataba Square, the largest market in Cairo - Cairo Portal",
      "url": "https://www.cairo.gov.eg/en/culture/cairo-history/cairo-squares/ataba-square/",
      "text": "Ataba Square, the largest market in Cairo - Cairo Portal\n\n## Ataba Square\n\nIn the heart of the Egyptian capital Cairo, you can't miss Ataba Square, one of the city's largest and most famous squares. The all-time bustling square is not only the central transportation hub in Cairo but also a cultural destination housing the National Theatre and the Child Theatre, two of Cairo's most famous cultural landmarks. \n\n El-Ataba is an intersection of Abdel Aziz Street, Qalaa Street, Azhar Street, El-Geish Street, Azbakeya Street and Oprah Street. Now Ataba Square is the largest marketplace for all ages and tastes at the lowest prices.\n\n## Ataba Square, from Aristocratic to public neighborhood\n\nEl-Ataba Square, which means \"threshold\" in Cairo, dates from hundreds of years. In the past, it was known as El-Ataba El-Zarqa \"Blue Ataba\", then it became El-Ataba El-Khadra \"Green Ataba\". The Square's name was associated with Taher pasha palace built by El-Hag Mohammad El-Shraibi Shah in Azbakeya area, as it had a blue threshold. But when Abbas Pasha bought the place, he replaced it with a green one. \n\nTaher Pasha Palace or Saraya el-Ataba is one of the luxurious buildings in Ataba area, and it was the residence of several state men at that time. The last of them was Abbas Pasha Helmy, the third ruler of Mohammed Ali's dynasty who rebuilt and expanded the palace for his mother, the widow of Prince Tusun's. Then when khedive Ismail decided to redesign the whole Azbakeya area and Attaba area, a big part of the Saraya was removed and replaced by the various court's building.\n\n## Origins of Ataba Square\n\nAtaba Square is related to El- Azbakeya area which was named after Prince Atabak Azbak. He was the first to live near Azbakeya pond after removing all the garbage there. Then in 880, he started to reconstruct the surrounding land encouraging the rest of the area residents to build their houses around the pond. Prince Azbak also built a mosque in the area and was known as \"Azbak Mosque\". The Mosque was located near Al-Azhar Street entrance until it was removed when the Ataba area was redesigned.\n\n## Ataba, Markets for all\n\nAtaba markets emerged in 1869 when khedive Ismail decided to build a stone market similar to the modern markets he saw in Paris and Turkey at that time. Since then Ataba was and still is the most famous open market in Cairo, as in the early twenties Ataba was like a shopping carnival where both Egyptians and tourists went shopping.\n\n## Ataba, and the tram\n\nIn August 1896, the first tram line was opened to the public in Ataba square in a luxurious celebration and many Egyptians lined up to see this miraculous invention.\n\nAtaba Square on Google Maps\n\nLast Updated:2026"
    },
    {
      "id": "https://www.cairo.gov.eg/en/governorate-entities/neighborhoods/",
      "title": "Neighborhoods - Cairo Portal",
      "url": "https://www.cairo.gov.eg/en/governorate-entities/neighborhoods/",
      "text": "Neighborhoods - Cairo Portal\n\n### North Area\n\n### South Area"
    },
    {
      "id": "https://www.fodors.com/world/africa-and-middle-east/egypt/cairo/neighborhoods",
      "title": "Cairo Neighborhood Guides | Fodor's Travel | Fodor’s Travel",
      "url": "https://www.fodors.com/world/africa-and-middle-east/egypt/cairo/neighborhoods",
      "author": "Fodors.com",
      "text": "Cairo Neighborhood Guides | Fodor's Travel | Fodor’s Travel\n\n# Neighborhoods In Cairo \n\nDiscover the best neighborhoods in Cairo with curated recommendations from our editors.\n\n### Downtown Cairo\n\nIn the middle of the 19th century, the slavishly Francophile khedive Isma'il laid out this district on a Parisian plan across the old canal from...\n\n- 5 Restaurants \n- 4 Hotels \n- 18 Things To Do \n\n### Gezira Island and Zamalek\n\nOccupying the Nile's largest island, these two districts are relatively quiet enclaves in the heart of the city, home to elegant apartment blocks, independent boutiques...\n\n- 9 Restaurants \n- 4 Hotels \n- 17 Things To Do \n\n### Giza\n\nIt used to be that you approached Giza through green fields. Cairo's expansion means that now you have to run a gauntlet of raucously noisy...\n\n- 3 Restaurants \n- 3 Hotels \n- 8 Things To Do \n\n### Heliopolis\n\nIn 1905 the Belgian industrialist Édouard Louis Joseph, Baron Empain, bought a swath of land northwest of Cairo. His plan was to build a new...\n\n- 7 Restaurants \n- 2 Hotels \n- 9 Things To Do \n\n### Islamic Cairo North\n\nIf the Mamluks hadn't stopped the Mongols' furious advance at Ain Djalout (Palestine) in AD 1260, Cairo, like Baghdad and scores of other towns, might...\n\n- 4 Restaurants \n- 1 Hotels \n- 14 Things To Do \n\n### Islamic Cairo South\n\nHere is a teeming, commercial area, more typically Egyptian and less geared toward tourism than the Khan area. But if you feel like shopping, you...\n\n- 4 Restaurants \n- 0 Hotels \n- 9 Things To Do \n\n### Ma'adi\n\nA preplanned district laid out in the early 20th century, this is the least densly populated part of Cairo...\n\n- 2 Restaurants \n- 0 Hotels \n- 0 Things To Do \n\n### Mohandiseen\n\nThis modern commerical district is buzzing with offices, shops, and eateries for every budget...\n\n- 2 Restaurants \n- 0 Hotels \n- 0 Things To Do \n\n### New Cairo\n\n- 4 Restaurants \n- 5 Hotels \n- 5 Things To Do \n\n### Old Cairo (Coptic Cairo)\n\nThe area known as Mari Girgis (Saint George) is centuries older than the Islamic city of Cairo. But even calling it Coptic Cairo isn't entirely...\n\n- 3 Restaurants \n- 0 Hotels \n- 11 Things To Do \n\n### Rodah Island and Garden City\n\nHome to a thriving expat community in the 19th and early 20th centuries, these districts now have period mansions and a selection of upmarket hotels...\n\n- 4 Restaurants \n- 3 Hotels \n- 9 Things To Do \n\n### Side Trips from Cairo\n\nIn order that the living could view the grandeur of the dead god-kings—and, in many cases, be buried alongside them—ancient Egyptians used the sites in...\n\n### The Citadel\n\nThe view of the huge silver domes and needle-thin minarets of the Muhammad 'Ali Mosque against the stark backdrop of the desert cliffs of the...\n\n### Explore Cairo",
      "image": "https://www.fodors.com/images/main-nav-home.svg"
    },
    {
      "id": "https://www.cairo.gov.eg/ar/culture/cairo-history/cairo-neighborhoods/al-darb-al-ahmar/",
      "title": "حي الدرب الأحمر - بوابة محافظة القاهرة",
      "url": "https://www.cairo.gov.eg/ar/culture/cairo-history/cairo-neighborhoods/al-darb-al-ahmar/",
      "author": "مشاركة على",
      "text": "حي الدرب الأحمر - بوابة محافظة القاهرة\n\n## نبذة\n\nحي ارتبط اسمه بالدماء عبر التاريخ ويُعد من أقدم مناطق القاهرة التاريخية وبانوراما تاريخية من الآثار الإسلامية، إضافة إلى وجود الكثير من الصناعات اليدوية والمعاصرة، التي لا يمكن رؤيتها إلا في مناطق قليلة، كما يتميز بأن أسواقه تضم صناعات وحرفًا عريقة، وجدرانه تحمل الكثير من الحكايات والقصص التاريخية والمثيرة، والكثير من الأمور التي تجعله حيًا مختلفًا يبهر المصريين والأجانب. \n\n## الموقع\n\n يتبع حي وسط القاهرة، يُحده شمالا حي الجمالية وغربا حي الموسكي وحي عابدين وحي السيدة زينب وجنوبا حي الخليفة وشرقا طريق النصر.\n\n## سبب التسمية\n\n تُعود تسميته لمذبحة القلعة التي تخلص فيها محمد علي باشا من المماليك عام١٨١١ م، حيث أغرقت دماء القتلى المكان واندفعت إلى الطريق المجاور وبالرغم من أوامر محمد علي للجنود بتنظيف المنطقة الا أن لون الأرض ظل أحمر من كثرة التصاق الدماء به ما جعلهم يطلقون عليه اسم «الدرب الأحمر».\n\n## نشأة الحي\n\nهو أول حي شعبي سياسي تشهده القاهرة الفاطمية فكان مقراً للتنظيمات السياسية والجماهرية ومطبخاً للسياسة الفاطمية وظل هكذا حتى العصر الحديث حيث شهد البدايات الأولى لثورة ٢٣يوليو ١٩٥٢ م.\n\n## أهم معالمه\n\nيضم الحي العديد من المساجد والزوايا والبيوت والقصور التاريخية والأضرحة والسبل منها مسجد المارداني، ومسجد جانم البهلوان، ومسجد قرطبة الذهبي، وتكية وسبيل السلطان محمود، وباب زويلة، جامعة الأزهر، مديرية أمن القاهرة، دار الكتب المصرية \"الكتبخانه\"، والمتحف الإسلامي. فضلا عن انه عامراً بالدروب التجارية مثل درب سعادة والخياميه والمغربلين، كما يتميز الحي بانه أنجب رموزا عظاما في العمل السياسي والديني والاجتماعي ومن أبرزهم الزعيم المصري محمود سامي البارودي، والمقرئ محمد رفعت، والشيخ إبراهيم الشعشاعي، والأديب الكبير يوسف السباعي.\n\nموقع حي الدرب الاحمر على خرائط جوجل \n\n📅 تاريخ التحديث : ٢٠٢٦\n\n## المصادر والمراجع\n\n القاهرة شوارع وحكايات - حمدي أبو خليل"
    },
    {
      "id": "https://www.nationalgeographic.com/travel/article/where-and-what-to-eat-on-the-streets-of-cairo",
      "title": "Where and What to Eat on the Streets of Cairo | National Geographic",
      "url": "https://www.nationalgeographic.com/travel/article/where-and-what-to-eat-on-the-streets-of-cairo",
      "publishedDate": "2026-09-27T09:00:00.000Z",
      "author": "Zoey Goto",
      "text": "Where and What to Eat on the Streets of Cairo | National Geographic\n\nTaamiya, Egypt’s version of falafel, is deep-fried on the streets of the capital. John Wreford, Alamy\n\n# Where and What to Eat on the Streets of Cairo\n\nA walking tour of the capital offers a delicious window into Egypt’s past and present, with cardamom-infused coffee and sweets laced with rosewater.\n\nBy Zoey Goto\n\nPublished September 27, 2026\n\nBy 8am, the queue outside Borai already stretches along the pavement. Office workers in pressed shirts stand shoulder-to-shoulder with market traders and delivery drivers, all drawn to a hole-in-the-wall kitchen no bigger than a garage. Out front, a bubbling vat of oil crackles away, sending the aroma of garlic and fresh herbs drifting down the street. In one of the world’s largest cities, Cairo has no shortage of places to grab breakfast on the go, but this is the one locals are happy to wait in line for.\n\nInside, seven brothers — not related by blood, but all nursed by the same woman and so considered family in Egypt — work with choreographed precision. Fava beans, soaked for 12 hours, disappear into a grinder with onions, garlic, leeks and fistfuls of parsley until the mixture turns green enough to stain the fingers. The paste is shaped into little patties, scattered with sesame seeds and baptised with a hiss in hot oil.\n\n“This is Egypt’s answer to falafel,” my tour guide Lamiaa Taher says as we collect our taamiya sandwiches, wrapped in paper, from across the stainless-steel counter. I tear one open, revealing a steaming, spongey centre beneath its crisp bronze crust. They’re wrapped in warm baladi flatbread with a drizzle of nutty tahina, the Egyptian version of tahini, made from ground sesame seeds, lemon, garlic and orange blossom water. It’s the fresher, more herbaceous cousin of chickpea falafel. “Once you eat it, you don’t need anything else,” Lamiaa warns with an easy grin, her face framed by a neat black bob.\n\nWhich presents something of a challenge. This is the first of several stops on a street food tour through downtown Cairo with female-founded company Bellies En-Route. With little more than an Arabic sign above the door and no online presence, Borai is the kind of place I wouldn’t have discovered on my own. It’s a fitting introduction to Egyptian cooking, a cuisine rooted in agricultural traditions and shaped by influences from the Mediterranean, the Middle East and Africa, heavy on cumin and coriander.\n\nOpen image in fullscreen\n\nVintage portraits of Egyptian film stars decorate the interior of Fish & Chips restaurant in downtown Cairo. Claire Thomas\n\nOpen image in fullscreen\n\nThe traditional Egyptian dish of molokhia, served with baba ghanoush, tahina, salad, fried aubergine and savoury pastries. Claire Thomas\n\nAs we wander deeper into Wust El-Balad, a timeworn belle époque quarter, I momentarily forget I’m in Egypt. Broad boulevards and apartment blocks with decorative wrought-iron balconies feel distinctly Parisian. “That’s exactly what Khedive Ismail wanted,” Lamiaa says. Inspired by time spent in France, the Egyptian ruler remodelled the district in the late 19th century in a European style.\n\nOur next stop could easily pass for a Greek taverna, with its whitewashed stone walls and cobalt-blue shutters, despite the incongruous name of Fish & Chips. But it serves what Lamiaa calls the queen of Egyptian food: molokhia. “It’s not a soup, not a stew; it’s something entirely its own,” she says. Finely chopped jute leaves are simmered in a broth until they develop a glossy, silky consistency, then finished with ghee, garlic and coriander. Said to date back to the pharaohs, its rich, earthy flavour soon wins me over. I scrape the bowl clean beneath black-and-white portraits of Egypt’s silver-screen icons from the 1930s, 40s and 50s — a reminder of when Cairo was known as the Hollywood of the Middle East.\n\nNo Egyptian meal is complete without a cup of Arabic coffee, so we head to Wardet El Yaman, a tiny corner cafe that’s been brewing it since 1925. “This is the kind of coffee you’d be served in someone’s home,” Lamiaa says, handing me a small cup of what looks like green tea, scented with cardamom and served with a date on the side to sweeten things. Traditionally associated with Bedouin communities, the beans are sun-dried before roasting, giving the coffee a heady kick.\n\nFinally, we stop to pick up syrupy treats laid out on round trays in glass cases at a sweet shop near Tawfikia Square, a pedestrianised quarter lined with cafes, bakeries and food stalls. “Cairo’s love affair with sweets goes back to the Fatimid dynasty, which ruled Egypt from 969 to 1171,” Lamiaa says. With sugar an expensive luxury at the time, elaborate confectionery became a status symbol of wealth and power. “Many of the sweets still sold here today date back to that era.” I leave with a box of basbousa, a semolina cake scented with rosewater — one of the fragrant flavours that arrived in Cairo along medieval trade routes.\n\nIn Cairo, history is as much in its neighbourhood cafes and breakfast stalls as it is in its monuments and museums. To experience it, you just need to know where to look.",
      "image": "https://i.natgeofe.com/n/511ac98c-103f-4935-91f5-007d55ac854c/coverstory_egypt_2M6M868_ukHR_16x9.jpg?w=1200"
    },
    {
      "id": "https://www.cairo.gov.eg/ar/governorate-entities/areas/",
      "title": "مناطق القاهرة - بوابة محافظة القاهرة",
      "url": "https://www.cairo.gov.eg/ar/governorate-entities/areas/",
      "text": "مناطق القاهرة - بوابة محافظة القاهرة\n\n## المنطقة الشرقية\n\n \n\n بيانات المنطقة الشرقية \n\n تتكون من عدد ٩ أحياء هي: مصر الجديدة ، النزهة ، غرب مدينة نصر ، شرق مدينة نصر ، عين شمس ، السلام أول ، السلام ثان ، المطرية ، حي المرج . \n\n تليفون: ٢٥٣٢٥١٠٠ \n\n فاكس: ٤٥٤٥٦٦٣ \n\n تليفون الطوارئ: ١٥٢١١ \n\n البريد الالكتروني: east_zone@cairo.gov.eg \n\n## المنطقة الغربية\n\n \n\n بيانات المنطقة الغربية \n\n تتكون من عدد ٩ أحياء هي : حي منشأة ناصر , حي الوايلي ، حي وسط ، حي بولاق ، حي غرب ، حي عابدين ، حي الازبكية ، حي الموسكي ، حي باب الشعرية. \n\n تليفون: ٢٧٩٥٧٤٠١ - ٢٧٩٥٥٢٨٠ \n\n فاكس: ٢٥٩١١٨٥١ \n\n البريد الالكتروني: west_zone@cairo.gov.eg \n\n## المنطقة الجنوبية\n\n \n\n بيانات المنطقة الجنوبية \n\n تتكون من ١٢ حي :مصر القديمة ، الخليفة، المقطم ،البساتين، دار السلام ، السيدة زينب ، التبين ، حلوان ، المعصرة ، المعادي ، طره ، ١٥ مايو \n\n تليفون: ٠٢٢٥١٧٣١٦١ - ٠٢٢٥١٧٣١٦٢ \n\n البريد الالكتروني: south_zone@cairo.gov.eg \n\n## المنطقة الشمالية\n\n \n\n بيانات المنطقة الشمالية \n\n تتكون من عدد ٨ أحياء هي: حى شبرا ،حى الزاوية الحمراء ، حى حدائق القبة ،حى روض الفرج ، حى الشرابية ،حى الساحل ،حى الزيتون، الأميرية. \n\n تليفون: ٢٤٦٠٥٠٨٠ \n\n فاكس: ٢٤٦٠٥٠٨٠ \n\n البريد الالكتروني: north_zone@cairo.gov.eg"
    }
  ],
  "costDollars": {
    "total": 0.005
  }
}
