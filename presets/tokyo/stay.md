# Results

import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);

const result = await exa.answer(
  "Build a compact accommodation foundation for Tokyo, Japan,\nwithin downtown, using official sources accessible as of 2026-10-26.\n\nFind up to three distinct examples:\nONE hostel or guesthouse;\nONE ordinary hotel;\nONE serviced apartment or hotel.\n\nInvestigate each category within this task. Do not substitute hotels\nfor every category. If a category is unavailable or unsupported, say so.\n\nFor EACH property return these labelled fields:\nNAME:\nACCOMMODATION TYPE:\nLOCATION:\nOFFICIAL URL:\nROOM/UNIT TYPE: Where amenities vary by booking.\nKITCHEN: Private/shared/absent/unknown.\nLAUNDRY: Available/chargeable/absent/unknown.\nCHECK-IN: Published hours and late-arrival conditions, or unknown.\nFEES/DEPOSIT: Stated original-currency amounts and conditions, or unknown.\nMINIMUM STAY: Explicit requirement, or unknown.\nSUITS: Clearly labelled editorial interpretation.\nPRACTICAL LIMITATION: Source-supported, or unknown.\nEVIDENCE: URLs and short excerpts supporting amenities and restrictions.\nQUOTE STATUS:\n\nNo travel dates or occupancy have been supplied. Set room-price quote status\nto “Date-specific quote required.” Do not invent nightly rates.\nPublished fixed fees may be recorded with their conditions.\nUnstated amenities remain unknown, not absent.\nDistinguish hostel beds from private rooms and room prices from whole-unit prices.\n\nReturn separate property records and explicit coverage gaps.\nMaximum 1,000 words.",
  {
    outputSchema: {
      type: "text"
    }
  }
);

## json

{
  "requestId": "e9aefd2ca9ff84a0e2df4145c0cf4317",
  "answer": "NAME: Little Japan\nACCOMMODATION TYPE: Hostel/Guesthouse\nLOCATION: 3-10-8 Asakusabashi, Taito-ku, Tokyo\nOFFICIAL URL: https://www.littlejapan.jp/hotel\nROOM/UNIT TYPE: Mixed/gender-specific dorms and private rooms (twin, 4-person, 6-person).\nKITCHEN: Shared (available to guests on 2F).\nLAUNDRY: Chargeable (300 JPY per wash/dry cycle).\nCHECK-IN: 15:00 to 22:00.\nFEES/DEPOSIT: None stated beyond rates; date-specific quote required. Late check-in service is currently suspended.\nMINIMUM STAY: Unknown.\nSUITS: Budget-conscious travelers and groups preferring social, shared-facility environments.\nPRACTICAL LIMITATION: Late check-in is not currently supported.\nEVIDENCE: Website states kitchen and lounge are on 2F and laundry/dryer are 300 JPY each [1].\n\nNAME: Nest Hotel Tokyo Yaesu\nACCOMMODATION TYPE: Ordinary Hotel\nLOCATION: 18-3 Kabutocho, Nihonbashi, Chuo-ku, Tokyo\nOFFICIAL URL: https://www.nesthotel.co.jp/tokyoyaesu/en/\nROOM/UNIT TYPE: Double, Twin, Deluxe Twin, and Universal rooms.\nKITCHEN: Absent.\nLAUNDRY: Available (coin laundry).\nCHECK-IN: After 15:00.\nFEES/DEPOSIT: Unknown; date-specific quote required.\nMINIMUM STAY: Unknown.\nSUITS: Short-term travelers prioritizing central location near Tokyo Station and standardized hotel services.\nPRACTICAL LIMITATION: No onsite parking.\nEVIDENCE: Website confirms coin laundry availability and hotel room types [2].\n\nNAME: Atinn Nihonbashi 10\nACCOMMODATION TYPE: Serviced Apartment Hotel\nLOCATION: 2-5-2 Nihonbashikayabacho, Chuo-ku, Tokyo\nOFFICIAL URL: https://en.at-inn.com/atinn-nihonbashi-10/\nROOM/UNIT TYPE: Studio apartment.\nKITCHEN: Private (equipped with 2-burner stove).\nLAUNDRY: Available (in-unit washing machine).\nCHECK-IN: Unknown.\nFEES/DEPOSIT: Mandatory 48,400 JPY cleaning fee per contract; date-specific quote required for stay.\nMINIMUM STAY: Unknown (inquire for stays under 1 month).\nSUITS: Individuals requiring long-term, self-catering facilities with domestic amenities.\nPRACTICAL LIMITATION: Primarily designed for single occupancy; additional fee for a second person.\nEVIDENCE: Listing specifies full kitchen, washing machine, and cleaning fee [3].",
  "citations": [
    {
      "id": "https://www.littlejapan.jp/hotel",
      "title": "【公式】Little Japan|東京ゲストハウス|ホステル・シェアハウス・カフェ&バー",
      "url": "https://www.littlejapan.jp/hotel",
      "image": "https://storage.googleapis.com/production-os-assets/assets/c3ed5bf8-66c8-4c21-9baf-e30330671d45"
    },
    {
      "id": "https://www.nesthotel.co.jp/tokyoyaesu/en/",
      "title": "NEST HOTEL TOKYO YAESU",
      "url": "https://www.nesthotel.co.jp/tokyoyaesu/en/",
      "image": "https://www.nesthotel.co.jp/tokyoyaesu/en/images/og-icon.jpg"
    },
    {
      "id": "https://en.at-inn.com/atinn-nihonbashi-10/",
      "title": "Atinn Nihonbashi 10 | atinn",
      "url": "https://en.at-inn.com/atinn-nihonbashi-10/"
    },
    {
      "id": "https://www.yumenoyahotel.com/en",
      "title": "【Official】Yumenoya Tokyo Apartment Hotel",
      "url": "https://www.yumenoyahotel.com/en",
      "image": "https://static.wixstatic.com/media/14e2d7_7e0bdcff5d674931b5a2d9f0c9ae665f~mv2.jpg/v1/fill/w_2000,h_1333,al_c/14e2d7_7e0bdcff5d674931b5a2d9f0c9ae665f~mv2.jpg"
    },
    {
      "id": "https://www.frasershospitality.com/en/japan/tokyo/fraser-place-roppongi-tokyo/",
      "title": "Fraser Place Roppongi Tokyo",
      "url": "https://www.frasershospitality.com/en/japan/tokyo/fraser-place-roppongi-tokyo/",
      "image": "https://www.frasersproperty.com/content/dam/frasers-hospitality/english/properties/japan/tokyo/frasers-place-roppongi-tokyo/rooms/one-bedroom-premier/fh_en_fprtjp_roomldetail_masthead_onebedroompremier_1v1.png"
    },
    {
      "id": "https://www.agora.jp/assets/pdf/one_EN.pdf",
      "title": "ONE@Tokyo",
      "url": "https://www.agora.jp/assets/pdf/one_EN.pdf"
    },
    {
      "id": "https://www.kitanohotel.co.jp/tokyo/en/stay/",
      "title": "STAY | THE KITANO HOTEL TOKYO",
      "url": "https://www.kitanohotel.co.jp/tokyo/en/stay/",
      "image": "https://www.kitanohotel.co.jp/wp2021/wp-content/uploads/2021/06/ogp.jpg"
    },
    {
      "id": "https://hoshinoresorts.com/en/hotels/hoshinoyatokyo/",
      "title": "HOSHINOYA Tokyo - Official Site",
      "url": "https://hoshinoresorts.com/en/hotels/hoshinoyatokyo/",
      "image": "https://media.hoshinoresorts.com/image/authenticated/s--0YXBUbk4--/c_fill,g_auto,h_630,w_1200/f_auto,q_auto/v1744974389/OGP%E6%9D%B1%E4%BA%AC_en_nwqkqb.png"
    }
  ],
  "costDollars": {
    "total": 0.005
  }
}
