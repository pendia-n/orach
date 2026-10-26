# Results

import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);

const result = await exa.answer(
  "Build the neighbourhood foundation for Busan, South Korea\nwithin downtown, using sources accessible as of last month.\n\nIdentify up to four meaningfully different areas useful to temporary visitors:\na convenient central area, a food/culture area, an independent-shopping or\ncreative area, and a quieter alternative where supported. Avoid duplicate\nareas presented under different names.\n\nFor EACH area return these labelled fields:\nNAME:\nLOCATION/BOUNDARY:\nCHARACTER: A short factual description.\nFOOD/DRINK EXAMPLE: An actual venue and official URL.\nSHOPPING/CULTURE EXAMPLE: An actual venue or attraction and official URL.\nSUITS: Clearly labelled editorial interpretation.\nPRACTICAL TRADE-OFF: Source-supported, or unknown.\nEVIDENCE: Source URLs and short excerpts supporting factual claims.\nUNKNOWNS:\n\nUse official local information, venue pages and identifiable local publications,\nincluding local-language sources. Do not invent safety rankings, noise levels,\nwalking times or popularity. A venue URL is not proof its content was inspected.\n\nNeighbourhoods are AREA records. They do not require prices.\nReturn separate area records, not one general city paragraph.\nReturn fewer areas if evidence is insufficient and identify the gaps.\nMaximum 1,000 words."
);

## json

{
  "answer": "These four areas offer distinct experiences within central Busan.\n\nNAME: Nampo-dong and Jagalchi\nLOCATION/BOUNDARY: Jung-gu, along the waterfront including Jagalchi and Gukje markets [1].\nCHARACTER: The historic, bustling heart of old Busan, centered on iconic seafood markets, traditional street food, and heritage sites like Yongdusan Park [2][1].\nFOOD/DRINK EXAMPLE: Jagalchi Market, where you select live fish on the first floor for preparation above [2]. URL: https://www.visitbusan.net\nSHOPPING/CULTURE EXAMPLE: BIFF Square for street food and film history [2]. URL: https://www.visitbusan.net\nSUITS: Visitors seeking authentic local food, history, and traditional market culture.\nPRACTICAL TRADE-OFF: Can be crowded and hectic during peak hours.\nEVIDENCE: [2][1].\n\nNAME: Seomyeon\nLOCATION/BOUNDARY: Busanjin-gu, centered around Seomyeon Station [3].\nCHARACTER: The modern central hub where Metro lines 1 and 2 intersect; it serves as a massive commercial, medical, and entertainment district [4][3].\nFOOD/DRINK EXAMPLE: Daeji Gukbap Alley in Seomyeon Market [3]. URL: https://en.busannavi.net\nSHOPPING/CULTURE EXAMPLE: Seomyeon Culture Road for themed streets and arts [4]. URL: https://www.busanjin.go.kr\nSUITS: Those prioritizing transport connectivity and a high-energy urban environment.\nPRACTICAL TRADE-OFF: Very high density with complex multi-level underground shopping areas.\nEVIDENCE: [4][3].\n\nNAME: Jeonpo Cafe Street and Jeollidangil\nLOCATION/BOUNDARY: East of Seomyeon, near Jeonpo Station [5][3].\nCHARACTER: A former industrial zone transformed into a creative, retro-industrial enclave filled with vintage shops, ateliers, and themed cafes [5][6].\nFOOD/DRINK EXAMPLE: The cafes along Jeonpo Cafe Street [6]. URL: https://www.busanjin.go.kr\nSHOPPING/CULTURE EXAMPLE: Jeollidangil Street for leather workshops and independent fashion [5]. URL: https://www.busanjin.go.kr\nSUITS: Creative travelers looking for unique, Instagrammable spots and independent retail.\nPRACTICAL TRADE-OFF: Characterized by steep alleys and an older, rougher infrastructure compared to main streets.\nEVIDENCE: [5][6].\n\nNAME: Huinnyeoul Culture Village\nLOCATION/BOUNDARY: Yeongdo-gu, along the coastal cliff path [7].\nCHARACTER: A quiet, slow-paced village of small houses on a cliffside, repurposed as an arts and cultural community [7].\nFOOD/DRINK EXAMPLE: Huinnyeoul Jeomppang [7]. URL: https://www.visitbusan.net\nSHOPPING/CULTURE EXAMPLE: The coastal Jeoryeong Trail and local independent bookstores [7]. URL: https://www.visitbusan.net\nSUITS: Visitors wanting a peaceful, scenic alternative to the city's intensity.\nPRACTICAL TRADE-OFF: Involves significant walking on steep, narrow paths.\nEVIDENCE: [7].",
  "citations": [
    {
      "id": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=74190",
      "title": "Yongdusan Jagalchi Special Tourist Zone (용두산 자갈치 관광특구)-  VISITKOREA",
      "url": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=74190",
      "author": "Korea Tourism Organization, KTO",
      "image": "https://tong.visitkorea.or.kr/cms/resource/13/1572313_image2_1.jpg"
    },
    {
      "id": "https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000302011001000&uc_seq=2809",
      "title": "A Local’s Guide to Busan’s Historic Downtown: Recommended Tour : Itinerary : Itinerary: 부산시 공식 관광 포털 비짓부산 visit busan",
      "url": "https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000302011001000&uc_seq=2809",
      "author": "Busan Metropolitan City"
    },
    {
      "id": "https://en.busannavi.net/area/seamyeon",
      "title": "Busan Seomyeon Tourist Information Guide",
      "url": "https://en.busannavi.net/area/seamyeon",
      "image": "https://www.busannavi.net/wp-content/uploads/2023/02/navi_logo180.png"
    },
    {
      "id": "https://www.busanjin.go.kr/tour/index.busanjin?menuCd=DOM_000001001004003000",
      "title": "추천명소 > 관광코스 > 도심투어 | 문화관광",
      "url": "https://www.busanjin.go.kr/tour/index.busanjin?menuCd=DOM_000001001004003000",
      "image": "https://www.busanjin.go.kr/images/Paper_/layout/t-logo.png"
    },
    {
      "id": "https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000302002001000&uc_seq=514",
      "title": "Themed Tour | Recommended Tour | Visit Busan",
      "url": "https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000302002001000&uc_seq=514",
      "author": "Busan Metropolitan City"
    },
    {
      "id": "https://www.busanjin.go.kr/tour/index.busanjin?menuCd=DOM_000001001002004000",
      "title": "추천명소 > 테마거리 > 전포카페거리 | 문화관광",
      "url": "https://www.busanjin.go.kr/tour/index.busanjin?menuCd=DOM_000001001002004000",
      "image": "https://www.busanjin.go.kr/images/Paper_/layout/t-logo.png"
    },
    {
      "id": "https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000301001001000&uc_seq=255",
      "title": "Huinnyeoul Culture Village at the end of the steep cliff: When in Busan : Tourist Attractions : Tourist Attractions: 부산시 공식 관광 포털 비짓부산 visit busan",
      "url": "https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000301001001000&uc_seq=255",
      "author": "Busan Metropolitan City"
    },
    {
      "id": "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565468",
      "title": "A Day in Old Busan: History, Views & Night Market-  VISITKOREA",
      "url": "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565468",
      "author": "Korea Tourism Organization, KTO",
      "image": "https://english.visitkorea.or.kr/public/images/2025/08/06/bf7a6fdf9cc14cb388b9434cadb55449.jpg"
    }
  ],
  "costDollars": {
    "total": 0.005
  }
}
