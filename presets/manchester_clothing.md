# Results

## Query

> Manchester UK independent clothing shops local fashion brands vintage secondhand clothing markets official websites prices

## Provider

>> Exa

## Code

import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);

const result = await exa.search(
  "Manchester UK independent clothing shops local fashion brands vintage secondhand clothing markets official websites prices",
  {
    numResults: 5,
    outputSchema: {
      type: "text"
    },
    stream: false,
    type: "auto",
    contents: {
      highlights: true,
      maxAgeHours: 0,
      extras: {
        links: 3
      }
    }
  }
);

## JSON

{
  "requestId": "7bb5597423e9c8e4fc771d48b837fecf",
  "output": {
    "content": "Manchester features several independent vintage and secondhand retailers with online storefronts. WE ARE COW offers curated vintage and reworked items at wearecow.com [1]. Beg, Steal & Borrow operates a clothing exchange with stores in Afflecks Palace and Withington, allowing trade-ins for store credit [2]. ReMarket provides a retail space for 30+ independent makers and vintage curators located near Piccadilly Station [3]. Vintage Folk hosts warehouse events near Piccadilly Station every last weekend of the month with fixed pricing from £3 to £25 [4][5], and sells pre-loved designer goods online at vintage-folk.com [4].",
    "grounding": [
      {
        "field": "content",
        "citations": [
          {
            "url": "https://wearecow.com/pages/faq",
            "title": "Got A Question? Then Read Our FAQ’s | We Are Cow – WEARECOW"
          },
          {
            "url": "https://begstealborrow.co.uk/",
            "title": "Second Hand Clothes Online | Beg, Steal & Borrow"
          },
          {
            "url": "https://re-markets.com/",
            "title": "ReMarket - Home of Pre-Loved"
          },
          {
            "url": "https://www.vintage-folk.com/",
            "title": "Vintage Clothing | Pre-Loved Designer Brands Online\n– VintageFolk"
          },
          {
            "url": "https://www.vintage-folk.com/pages/thrift",
            "title": "Vintage Folk Thrift Events\n– VintageFolk"
          }
        ],
        "confidence": "high"
      }
    ]
  },
  "results": [
    {
      "id": "https://re-markets.com/",
      "title": "ReMarket - Home of Pre-Loved",
      "url": "https://re-markets.com/",
      "highlights": [
        "ReMarket - Home of Pre-Loved \n\n## Manchester's Preloved Market for Independent Brands \n\n ReMarket is a creative retail space championing secondhand style, circular fashion, and independent makers.Based in Manchester, we bring together 30+ small businesses, from vintage curators to upcyclers and artists — all under one roof. Whether you're just starting out or building your brand, ReMarket offers an affordable and flexible space to grow, connect, and sell sustainably. \n\n## Manchester's City Centre FleaMarket \n\n \n\n📍 ReMarket Manchester 4–10 London Road Piccadilly, Manchester M1 3AN (Just a 4-minute walk from Piccadilly Station)"
      ],
      "image": "https://re-markets.com/cdn/shop/files/ReMarket_FleaMarket_1.png?v=1751125857&width=80",
      "favicon": "https://re-markets.com/cdn/shop/files/ReMarket_FleaMarket_1.png?v=1751125857&width=32",
      "extras": {
        "links": []
      }
    },
    {
      "id": "https://begstealborrow.co.uk/",
      "title": "Second Hand Clothes Online | Beg, Steal & Borrow",
      "url": "https://begstealborrow.co.uk/",
      "highlights": [
        "Second Hand Clothes Online | Beg, Steal & Borrow \n\n## Beg, Steal & Borrow is a Clothing Exchange & Thrift Shop based across two locations in Manchester, UK. \n\nOur flagship store is in Afflecks Palace in the City Centre and our sister store is in Withington, South Manchester. We trade funky gently used fashion pieces for a gift card thats useable in-store or online!\n\nContact us: admin@begstealborrow.co.uk\n\n## Afflecks Location & Hours \n\nBeg, Steal & Borrow 52 Church Street, 2nd floor Manchester, M4 1PW\n\nMonday - 10:30-18:00 Tuesday - 10:30-18:00 Wednesday - 10:30-18:00 Thursday - 10:30-18:00 Friday - 10:30-18:00 Saturday - 10:00-18:00 Sunday - Closed\n\n## Withington Location & Hours \n\nBeg, Steal & Borrow Rippingham Rd, Withington, Manchester M20 3FU\n\nMonday - Closed Tuesday - Closed Wednesday - 10:30-18:00 Thursday - 10:30-18:00 Friday - 10:30-18:00 Saturday - 10:30-18:00 Sunday - 12:00-17:00"
      ],
      "image": "https://begstealborrow.co.uk/cdn/shop/files/Beg_Steal_Borrow_120_x_80cm_Poster_A3_Landscape_Desktop_Wallpaper_594_x_420_mm_Logo_5.png?v=1705707466&width=500",
      "favicon": "https://begstealborrow.co.uk/cdn/shop/files/Beg_Steal_Borrow_120_x_80cm_Poster_A3_Landscape_Desktop_Wallpaper_594_x_420_mm_Logo_5.png?crop=center&height=32&v=1705707466&width=32",
      "extras": {
        "links": []
      }
    },
    {
      "id": "https://wearecow.com/pages/faq",
      "title": "Got A Question? Then Read Our FAQ’s | We Are Cow – WEARECOW",
      "url": "https://wearecow.com/pages/faq",
      "highlights": [
        "### Who are we?\n\nCOW is an independent British retailer of vintage clothing, offering a selection of menswear and womenswear sourced from around the world as a sustainable alternative to fast fashion.\n\nWe have five unique stores in Manchester, Nottingham, Liverpool, Birmingham, Sheffield and Thrift stores in Bristol and Manchester. We aim to promote sustainable shopping and are proud to create our colourful store interiors using recycled materials and sell an eco alternative to fast fashion with our vintage and handmade products.\n\n...\n\n### What is a reworked item? \n\nOur rework range offers the latest styles and cuts. sustainably made from vintage garments and materials. We make design and create all of our reworked pieces in-house in the UK.\n\n...\n\n### How much does Delivery cost?\n\nPlease note that we use Royal Mail and delays are expected for the Christmas period. The recommended dates for orders to arrive before Christmas is 12.12.22 for standard orders and 16.12.22 for express delivery. Please keep this in mind when ordering.\n\n UK Standard: £4, or FREE when you spend over £50! Express UK: £8 (orders must be placed before 3pm, Monday-Thursday)\n\n Europe: £8 - £14 USA & Canada: £15 Australia & New Zealand: £15 - £20\n\nWe also offer FREE international shipping on orders over £100\n\nInternational orders may be subject to custom charges which we are not liable for - this is due to the recent Brexit policy and we cannot dispute this.\n\n...\n\n### Why can't I buy an item in different sizes? \n\nSelling vintage means we only have one of every item.\n\nOur rework collection offers the latest styles made from vintage garments and materials, although sizes are limited to the amount of fabric available from the original item we are working to offer a wide range of sizes.\n\n...\n\n### Having problem with our website?\n\nYou can phone 0161 832 2183 to speak to a member of staff or email cow@wearecow.com with an enquiry and we will get back to you as soon as possible.\n\n...\n\n### How do I return something to you?\n\nWe hope you love your WE ARE COW purchases, however if you change your mind about an order we offer a 14 days returns policy for a refund or exchange on any item (excluding hosiery, swimwear and pierced jewellery) provided that you post it back to us in a securely wrapped parcel, in saleable condition with the return form completed and enclosed in your return parcel within 14 working days of receipt of your goods. The post office date stamp or franked date will be proof of your posting within the 14 working days time policy. Once you have completed your returns form please ensure that you have included it in your return parcel along with your return item/s then post to the following address: \n\nAddress for returns: RETURNS\n\n Cow Vintage 61 Church Street Manchester M4 1PD"
      ],
      "image": "http://wearecow.com/cdn/shop/files/logo_866d58e3-8048-4a0b-bd3a-0ba7408bf58b_1200x1200.png?v=1614309384",
      "extras": {
        "links": [
          "https://www.royalmail.com/track-your-item#/"
        ]
      }
    },
    {
      "id": "https://www.vintage-folk.com/",
      "title": "Vintage Clothing | Pre-Loved Designer Brands Online\n– VintageFolk",
      "url": "https://www.vintage-folk.com/",
      "highlights": [
        "Vintage Clothing | Pre-Loved Designer Brands Online\n\n# Iconic Vintage Jackets \n\n Find that one-of-a-kind jacket that elevates every outfit. \n\n# Vintage Football Shirts \n\n Explore classic football shirts from rare club kits to legendary players. \n\n# Vintage Y2K \n\n Dive into Y2K vintage clothing featuring Diesel and Miss Sixty. \n\n# Vintage Workwear \n\n Discover vintage workwear from brands like Carhartt, Dickies and Levis. \n\n## THRIFT EVENTS \n\n Attend our legendary Vintage Folk Thrift Events at our Manchester warehouse and universities nationwide. Prices from £3-£25 per item. \n\n## About Us \n\n Since 2017, we’ve been rescuing the best vintage clothing from top brands and offering them at affordable prices, all from our warehouse in Manchester.\n\n...\n\nAs Seen On You\n\n...\n\nDM us your pics @VintageF\n\n...\n\n@barber_j.rose \n\n \n\n @novasistas \n\n \n\n @hvlly \n\n \n\n @saint.law_ \n\n \n\n @starr_clare \n\n \n\n @error.ferdi \n\n \n\n @lookheywoodstyle\n\n...\n\n@ ... _ewelina\n\n...\n\n@joshlrobinson\n\n...\n\nshun\n\n...\n\ncole"
      ],
      "image": "http://www.vintage-folk.com/cdn/shop/files/Vintage_Folk_logo-02_62f56dd9-df38-49ad-8d97-793d59ac1502.png?v=1694443546",
      "favicon": "https://www.vintage-folk.com/cdn/shop/files/Vintage-Folk-favicon-white_32x32.png?v=1739891709",
      "extras": {
        "links": [
          "https://www.instagram.com/p/DUINSsGCFWM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
          "https://www.instagram.com/novasistas/",
          "https://www.instagram.com/novasistas/"
        ]
      },
      "entities": [
        {
          "id": "https://exa.ai/library/organization/cc90rk00cc0",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "Vintage Folk Ltd",
            "foundedYear": 2017,
            "description": "VINTAGE AND PRE LOVED CLOTHING ONLINE, WHOLESALE AND POP UPS",
            "workforce": {
              "total": 5
            },
            "headquarters": {
              "address": "16 Giddings Road, PICADILLY TRADING ESTATE, Manchester, England M1 2NP, GB",
              "city": "Manchester",
              "postalCode": null,
              "country": "United Kingdom"
            },
            "financials": null,
            "webTraffic": {
              "visitsMonthly": 43024,
              "countryRank": 54074,
              "avgDurationSeconds": 104,
              "history": [
                {
                  "value": 104035,
                  "dateFrom": "2026-04",
                  "dateTo": "2026-04"
                },
                {
                  "value": 98989,
                  "dateFrom": "2026-05",
                  "dateTo": "2026-05"
                },
                {
                  "value": 88295,
                  "dateFrom": "2026-06",
                  "dateTo": "2026-06"
                },
                {
                  "value": 54295,
                  "dateFrom": "2026-07",
                  "dateTo": "2026-07"
                },
                {
                  "value": 42927,
                  "dateFrom": "2026-08",
                  "dateTo": "2026-08"
                },
                {
                  "value": 43024,
                  "dateFrom": "2026-10",
                  "dateTo": "2026-10"
                }
              ]
            },
            "research": null
          }
        }
      ]
    },
    {
      "id": "https://www.vintage-folk.com/pages/thrift",
      "title": "Vintage Folk Thrift Events\n– VintageFolk",
      "url": "https://www.vintage-folk.com/pages/thrift",
      "highlights": [
        "Vintage Folk Thrift Events\n\n# Vintage Folk Thrift Events\n\nDiscover Manchester's most affordable thrift sales at Vintage Folk!\n\n Browse up to 50+ rails of second-hand clothing from £3-£25, featuring Carhartt, North Face, and Y2K styles. FREE entry to all our warehouse events near Piccadilly Station and university pop-ups across Bristol, Edinburgh, and beyond.\n\nFind your next thrift event date now!\n\nPRICE LIST\n\n £3 BANDANAS \n\n £5 BAGS/ HATS \n\n £5 TOPS/ T-SHIRTS \n\n £10 SHORTS/ SKIRTS £10 SHIRTS £10 DRESSES \n\n £25 COATS\n\n...\n\nWhen and where are your Manchester Warehouse thrift events? \n\nOur Manchester Warehouse events take place every last weekend of the month. We open from 11am to 4pm Saturday and Sunday. Our warehouse is located just behind Piccadilly Station, making it easily accessible by public transport. Check our events listings for specific dates and times. Our warehouse is only open to the public on the warehouse sale weekend.\n\n...\n\nCan I buy web stock at the event? \n\nNo. Our warehouse sale stock and our website stock are completely separate. If you would like to collect an online order at our event please email hello@vintage-folk and arrange the collection before the event. \n\n How are Vintage Folk events different from kilo sales? \n\nUnlike kilo sales where prices depend on weight (and heavy items like denim jackets or winter coats can cost a fortune), we offer clearly marked individual prices with no surprises at checkout. Our pricing structure (£3-£25 per item) often works out cheaper than kilo sales, especially for heavier premium items.\n\n What brands can I find at Vintage Folk events? \n\nWe specialise in premium brands including Carhartt, Levi's, The North Face, Patagonia, and popular Y2K era items. All at a fraction of their original retail price, with most items between £3-£25.\n\n...\n\nDo I need to book tickets for Vintage Folk thrift events? \n\nNo, all our events offer free entry with no booking required. Simply turn up on the day during opening hours. For university events, student ID may be required depending on the venue policy.\n\n...\n\nWhich universities do you visit regularly? \n\nWe host events across the UK, with our most popular locations being Manchester and Bristol universities. We have a particularly strong presence during Freshers periods. Check out our events listings and use the 'filter by location' drop down to see which Universities we will be at next.\n\n...\n\nHow can resellers work with Vintage Folk? \n\nWe welcome resellers at our Vintage Folk Warehouse events! Many of our customers resell on platforms like Vinted, Instagram, and Depop. \n\nHowever, we also sell directly to businesses via wholesale, with even lower prices than you'll find at our events. Find out more about buying wholesale here.\n\n...\n\n! While we host many ... our Manchester Warehouse ... , including the general public and resellers. ... ."
      ],
      "image": "http://www.vintage-folk.com/cdn/shop/files/Vintage_Folk_logo-02_62f56dd9-df38-49ad-8d97-793d59ac1502.png?v=1694443546",
      "favicon": "https://www.vintage-folk.com/cdn/shop/files/Vintage-Folk-favicon-white_32x32.png?v=1739891709",
      "extras": {
        "links": [
          "/pages/wholesale",
          "https://www.instagram.com/vintagefolkltd/"
        ]
      }
    }
  ],
  "searchTime": 11932.3,
  "costDollars": {
    "total": 0.007,
    "search": {
      "neural": 0.007
    }
  },
  "resolvedSearchType": ""
}

## Cost

>>> Exa Balance - 0.007 USD
