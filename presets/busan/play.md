# Results

import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);

const result = await exa.search(
  "Find varied official sources for worthwhile experiences in Busan, South Korea, within downtown, relevant as of last 3 weeks. Include free cultural visits, locally distinctive attractions, beginner creative workshops and participatory activities. Seek named experiences with admission/session prices, duration, materials or equipment inclusions, age/experience requirements and booking conditions. Include local-language operator sources and independent discoveries, not only famous attractions. Identify excursions outside the boundary separately. Preserve conditions distinguishing free admission, paid extras, single sessions, courses and memberships. Only recent",
  {
    numResults: 10,
    type: "auto",
    contents: {
      highlights: true
    }
  }
);

{
  "requestId": "7238f4c4aaa7760a069f49bc3e3abf24",
  "results": [
    {
      "id": "https://reserve.busan.go.kr/exprn/list.do",
      "title": "견학/체험 : 부산광역시 통합예약",
      "url": "https://reserve.busan.go.kr/exprn/list.do",
      "highlights": [
        "견학/체험 : 부산광역시 통합예약\n\n- \n\n[해운대수목원] 숲속건축가 거미_숲에서 채우GO\n\n대기중\n\n기관\n: 푸른도시가꾸기사업소\n대상\n: 가족\n장소\n: 해운대수목원\n일자\n: [신청] 2026-10-12 ~ 2026-10-25 [행사] 2026-10-31 ~ 2026-10-31\n방법\n: 온라인\n문의\n: 051-888-7146\n- \n\n구석구석 시민공원 미션 탐험대\n\n대기중\n\n기관\n: 부산시민공원역사관\n대상\n: 초등 1~6학년(보호자 1인 동반 필수)\n장소\n: 부산시민공원 일대 및 시민공원역사관\n일자\n: [신청] 2026-10-01 ~ 2026-10-29 [행사] 2026-10-10 ~ 2026-10-31\n방법\n: 온라인\n문의\n: 051-888-6851\n- \n\n【화명수목원】주말-테마가있는숲이야기(초등가족)\n\n대기중\n\n기관\n: 푸른도시가꾸기사업소\n대상\n: 초등학생 동반가족\n장소\n: 화명수목원\n일자\n: [신청] 2026-10-01 ~ 2026-10-23 [행사] 2026-10-01 ~ 2026-10-31\n방법\n: 온라인\n문의\n: 051-362-7328\n- \n\n[소소풍프로그램] 부산, 재즈에 물들다2\n\n 신청불가\n\n기관\n: 도모헌\n대상\n: 제한없음 \n장소\n: 소소풍정원(우천 시 장소 변경)\n일자\n: [신청] 2026-09-26 ~ 2026-09-26 [행사] 2026-09-26 ~ 2026-09-26\n방법\n: 방문접수\n문의\n: 051-888-8705\n- \n\n[산림복지] 힐링드林\n\n대기중\n\n기관\n: 부산치유의숲\n대상\n: 성인\n장소\n: 부산 치유의 숲\n일자\n: [신청] 2026-09-21 ~ 2026-10-26 [행사] 2026-10-02 ~ 2026-10-30\n방법\n: 온라인\n문의\n: 051-976-2833\n- \n\n[해운대수목원] 가을숲 곤충탐험대_ 숲에서 자라GO\n\n대기중\n\n기관\n: 푸른도시가꾸기사업소\n대상\n: 어린이 \n장소\n: 해운대수목원\n일자\n: [신청] 2026-09-21 ~ 2026-10-02 [행사] 2026-10-08 ~ 2026-10-29\n방법\n: 온라인\n문의\n: 051-888-7146\n- \n\n(10/4) 비밀의정원 탈출게임\n\n접수마감\n\n기관\n: 낙동강하구에코센터\n대상\n: 2021년생(6세) 이상 동반가족\n장소\n: 낙동강하구탐방체험장\n일자\n: [신청] 2026-09-20 ~ 2026-10-01 [행사] 2026-10-04 ~ 2026-10-04\n방법\n: 온라인\n문의\n: 051-209-2063\n- \n\n(10/4) 응답하라 2026 푸른별\n\n접수중\n\n기관\n: 낙동강하구에코센터\n대상\n: 초등이상 동반가족\n장소\n: 낙동강하구탐방체험장\n일자\n: [신청] 2026-09-20 ~ 2026-10-01 [행사] 2026-10-04 ~ 2026-10-04\n방법\n: 온라인\n문의\n: 051-209-2063\n- \n\n(10/4) 씨앗이 여행을 떠나요(20~21년생 대상)\n\n접수중\n\n기관\n: 낙동강하구에코센터\n대상\n: 20~21년생 동반가족\n장소\n: 낙동강하구에코센터 1층 교육실, 을숙도생태공원\n일자\n: [신청] 2026-09-20 ~ 2026-10-01 [행사] 2026-10-04 ~ 2026-10-04\n방법\n: 온라인\n문의\n: 051-209-2055\n- \n\n(10/4) 생명을 품은 낙동강하구 습지탐사\n\n접수중\n\n기관\n: 낙동강하구에코센터\n대상\n: 초등학생 이상 동반 가족\n장소\n: 낙동강하구에코센터 1층 교육실, 을숙도생태공원\n일자\n: [신청] 2026-09-20 ~ 2026-10-01 [행사] 2026-10-04 ~ 2026-10-04\n방법\n: 온라인\n문의\n: 051-209-2055\n\n...\n\n부산시 120 콜센터 (지역번호 051)\n\n평일 08:30 ~ 18:30 야간·공휴일 당직실 전환\n\n(우 47545) 부산광역시 연제구 중앙대로 1001(연산동)"
      ]
    },
    {
      "id": "https://www.busan.go.kr/domoheon/sosopungProgram",
      "title": "도모헌(옛 부산시장 관사)",
      "url": "https://www.busan.go.kr/domoheon/sosopungProgram",
      "highlights": [
        "도모헌(옛 부산시장 관사)\n\n# 도모헌 부산열린행사장\n\n## 프로그램 program\n\n- 스토리知\n- 소소풍 프로그램\n- 들락날락 프로그램\n- 이벤트\n\n \n\n소소풍정원 프로그램(가을 향기는 바람에 날리고)(성인)\n\n 허브 식물의 향과 쓰임을 배우고, 가을 허브 스머지, 맟춤형 체험(팔찌/립밤), 허브차 블린딩을 통해 식물이 주는 정서적 안정 체득\n\n 2026-10-18 ~ 2026-10-25 (일) \n\n \n\n소소풍정원 프로그램(가을 향기는 바람에 날리고)(유아 및 어린이)\n\n 허브 식물의 향과 쓰임을 배우고, 가을 허브 스머지, 맟춤형 체험(팔찌/립밤), 허브차 블린딩을 통해 식물이 주는 정서적 안정 체득\n\n 2026-10-11 ~ 2026-10-17 (토,일) \n\n \n\n 소소풍 정원놀이터\n\n \n\n부산광역시 수영구 황령산로7번길 60\n\n☎ 051-888-8711 (점심시간 13:00~14:00)\n\n부산시 120콜센터 : 051-120"
      ],
      "image": "https://www.busan.go.kr/humanframe/theme/domoheon/assets/img/common/ogimg.jpg"
    },
    {
      "id": "https://museum.busan.go.kr/eng/bsmexhibit05",
      "title": "Culture Experience Hall : Busan Museum",
      "url": "https://museum.busan.go.kr/eng/bsmexhibit05",
      "highlights": [
        "#### Cultural Experience Center (Hands-on Experience of Rubbing of Stone Inscription and Traditional Costumes) \n\n \n\nThe ground floor of the 1st exhibition hall is a Culture Experience Center. You could experience various cultural histories through printing a rubbed copy, putting on the traditional wedding and court dress, tea ceremony. \n\nOpening Hours: 10:00~17:00\n\n#### Experience of Printing a rubbed copy \n\n \n\nYou may participate in this program only after you have purchased ink, Chinese drawing paper, cotton wool stick, etc. from the souvenir corner. These are necessary items in this program.\n\n※ Necessary things for this program: 2,000won(They are available in the museum shop in Busan Exhibition Hall)\n\n#### Hands-on Experience of Rubbing of Stone Inscription and Traditional Costumes\n\n \n\nYou may experience putting on the clothes like Gonryongpo, Ikseongwan, Hwalot, Wosam, etc. As it may be difficult to experience it when there are too many applicants, you may receive better service with an advance reservation.\n\n※ Operation Hours: 10 am - 5 pm (Admission: Until 4:30 pm) \n\n [Notice] \n\n- 1) In order to serve as many visitors as possible, we are strictly limited the numbers of the participants for the clothing experience. There are also limited numbers in group visiting(only two members of the group can participate the experience) \n\n- If your members want to try the clothes more, please wait until other participants who book the experience finishes their turn. Only two participants can try the clothes at a time.\n- Time for experience : 30mins(per team)\n- 2) The clothing experience is only permitted to the adult.\n- 3) There are ten minutes changing time between each experience.\n\n [Hands-on Experience of Rubbing of Stone Inscription and Traditional Costumes] \n\n- 1) Busan Culture and Tourism commentators are available at the site\n- 2) Operation Hours: 10 am - 5 pm (Admission: Until 4:30 pm)\n\n...\n\n#### Experience of Tea Ceremony \n\n \n\nThis is a corner where you may have a first-hand experience of tea ceremony in the presence of an instructor for tea ceremony.\n\nThis program is available 4 times a day(10:30, 13:30, 15:00, 16:30) only to those who have made reservation in advance through the homepage of Busan Museum.\n\nExperience of the Tea Ceremony for the Foreigners\n\n 1) For the Tea Ceremony, you must have certificate of alien registration or residential passport in order to register the Busan Metropolitan Homepage System. With these available documents, you can process to log in the system to the homepage of Busan Metropolitan Government and then book the Tea Ceremony of Busan Museum. 2) For the general Tourists : Tea ceremony is only available with on-site reservation unless the internet reservation is fully booked on the day. Also the phone reservation is not available."
      ]
    },
    {
      "id": "https://www.busan.go.kr/eng/park09",
      "title": "Visit > Attractions > Parks and Arboretums > Yongdusan Park",
      "url": "https://www.busan.go.kr/eng/park09",
      "highlights": [
        "### Yongdusan Park\n\n#### Yongdusan Park\n\nThe park is located on a hillside called Yongdusan in Jung-gu and has Busan Tower on the top. The 120 meter high Busan Tower is a famous landmark in Busan and loved by tourists. Busan’s unique beauty below is able to be viewed from the observatory. This park has been praised by Busan’s citizen for a long time as a tranquil downtown rest area.\n\n- Address: 37-55, Yongdusan-gil, Jung-gu, Busan\n- Area: 70,812㎡\n- Free admission\n- Directions: Take Metro Line No. 1 to Jungang Station (Exit 5) and then walk about 5 minutes towards Yongdusan Park.\n- Facilities: Busan Tower (Paid), Octagonal Pavilion, flower clock, the bell of the citizens, statue of Yi Sun-sin, duty free shop and more.\n- Nearby attractions: Jagalchi Market, Gukje Market, Busan Museum of Movies and more.\n- Website: http://yongdusanpark.bisco.or.kr/\n- Management Institute: Busan Infrastructure Corporation\n\n- 1001, Jungang-daero, Yeonje-gu, Busan, 47545, Republic of Korea\n- Phone: +82 (51) 120"
      ],
      "image": "https://www.busan.go.kr/humanframe/theme/global_dev/assets/img/common/thumb_v01.jpg"
    },
    {
      "id": "https://reserve.busan.go.kr/exprn/view?progrmSn=3189&resveGroupSn=526",
      "title": "견학/체험 : 부산광역시 통합예약",
      "url": "https://reserve.busan.go.kr/exprn/view?progrmSn=3189&resveGroupSn=526",
      "highlights": [
        "## 통합 예약\n\n현재 본문 위치 :\n\n### [소소풍프로그램] 도모헌 소소풍 정원 가을 가드닝 프로그램(종료) 완료 \n\n운영기간\n: 2025-09-20(토) ~ 2025-10-26(일)\n\n신청기간\n: 2025-09-10(수) 10:00 ~ 2025-10-25(토) 17:00\n\n취소기간\n: 이용일을 미포함 이용일로부터 1일 전 \n\n신청방법\n: 온라인, 방문접수\n\n수강료\n: 예약 접수시 회차 정보에서 확인 가능\n\n프로그램 운영요일\n: 토, 일\n\n문의전화\n: 051-888-8704\n\n운영기관\n: 도모헌\n\n대상\n: 성인 (※ 9/27, 9/28 프로그램만 자녀동반 가능)\n\n#### 소개\n\n 가을 도모헌 산책과 정원 가드닝을 통해 자연을 느끼고 생태 감수성을 키우는 힐링 프로그램입니다.\n\n#### 상세정보\n\n*(변경사항 공지)\n\n - 9월 28일 우천취소 -> 10월12일 14: 30분으로 변경\n\n - 10월 25일 내부행사로 일정 변경 -> 11월 1일 14:30분으로 변경\n\n - 10월 26일 내부행사로 일정 변경 -> 11월 2일 14:30분으로 변경\n\n* 변경된 일자로 인터넷 예약자 개별 통보 및 현장 접수 진행함을 알려 드립니다.\n\n보다 많은 시민분들이 참여하실 수 있도록, 총 8회차 중 1인 1회차만 신청 가능합니다.\n\n접수 후 확정 문자를 받으셔야 참여가 가능합니다.\n\n○ 일 자 : 2025년 9월 20일~10월 26일 매주 토,일 (9/20, 9/21, 9/27, 9/28, 10/18, 10/19, 10/25, 10/26)\n\n 14:30 ~ 16:30 (2시간) \n\n○ 장 소 : 도모헌 소소풍정원\n\n○ 금 액 : 무료\n\n○ 대 상 : 성인 (※ 9/27, 9/28(10/12) 프로그램만 자녀동반 가능)\n\n○ 참여인원 : 회차당 20명(사전예약 10명, 선착순 현장접수 10명)\n\n○ 내 용 : 가을 도모헌 산책과 정원 가드닝을 통해 자연을 느끼고 생태 감수성을 키우는 힐링 프로그램입니다.\n\n○ 예약방법 : 홈페이지 사전예약, 선착순 현장접수\n\n○ 유의사항 - 차량 이용시 외부 도모헌 주차장에서 하차후 도보로 이동바랍니다. - 주차장이 협소하오니 가급적 대중교통을 이용하여 주시기 바랍니다. - 야외활동이 편한 복장과 운동화를 준비해주세요 - 당일 날씨나 잔디 상태 등 현장 상황에 따라 일정 변경 또는 프로그램이 취소될 수 있습니다.\n\n○ 홈페이지 : https://www.busan.go.kr/domoheon/index\n\n ○ 회차별 세부 프로그램\n\n| 회차 | 날짜 | 프로그램명 | 주요활동 |\n| --- | --- | --- | --- |\n| 1,2회차 | 9/20, 9/21 | 씨앗이 익어가는 도모헌 | 씨앗카나페를 만들어 시식 도모헌의 가을숲 산책 열매놀이, 익어가는 씨앗 찾기스톤 디퓨져 만들기 |\n| 3,4회차 (자녀 동반 가능) | 9/27, 9/28(우천취소) 10/12(변경) | 단풍이 물들어 가는 도모헌 | 도모헌 가을 정원 산책단풍잎 찾아서 관찰하기단풍잎에 시 한줄이끼테라리움 만들기 |\n| 5,6회차 | 10/18, 10/19 | 가을향기 나는 도모헌 | 도모헌 향기 산책향기나는 잎 찾기오일 맛사지시나몬로즈마리걸이 만들기 |\n| 7,8회차 | 10/25, 10/26(행사로 일정변경) 11/1, 11/2(변경) | 가을색에 물든 도모헌 | 도모의 정원 산책가을꽃에서 자연색 찾기드라이플라워 리스 만들기 |\n\n##### 주소\n\n 부산 수영구 황령산로7번길 60 (남천동)\n\n##### 전화번호\n\n 051-888-8704\n\n##### 승인조건\n\n 보다 많은 시민분들이 참여하실 수 있도록, 총 8회차 중 1인 1회차만 신청 가능합니다. ​ 접수 후 확정 문자를 받으셔야 참여가 가능합니다. - 차량 이용시 외부 도모헌 주차장에서 하차후 도보로 이동바랍니다. - 주차장이 협소하오니 가급적 대중교통을 이용하여 주시기 바랍니다. - 야외활동이 편한 복장과 운동화를 준비해주세요 - 당일 날씨나 잔디 상태 등 현장 상황에 따라 일정 변경 또는 프로그램이 취소될 수 있습니다."
      ]
    },
    {
      "id": "https://museum.busan.go.kr/busan/expmun",
      "title": "문화체험관 : 부산광역시 부산박물관",
      "url": "https://museum.busan.go.kr/busan/expmun",
      "highlights": [
        "문화체험관 : 부산광역시 부산박물관\n\n#### 이용안내\n\n 2009년에 개관한 문화체험관은 부산을 방문하는 국내·외 관광객들에게 우리의 전통문화를 체험할 수 있는 다양한 기회를 제공하고 있으며 다도, 전통복식, 탁본, 유물퍼즐 체험 등을 운영하고 있습니다. \n\n- 위치 : 부산박물관 정문 출입계단 왼편\n- 문의전화 : 051-610-7156 \n- 다도 체험 및 전통복식(궁중복식, 일반복식) 체험은 홈페이지 예약 후 참여 가능합니다.\n- 점심시간(12시~13시)에는 문화체험관 관람만 가능합니다.\n\n#### 다도 체험\n\n다도 체험에서는 전통차의 특성과 유래 등에 관한 설명을 듣고 ‘행다법(行茶法)’을 직접 배워볼 수 있습니다. ‘행다법’은 차를 우리는 방법과 그에 따른 모든 예절을 포함한 것으로, 문화체험관에서는 초보자도 쉽게 따라 할 수 있도록 체험을 진행하고 있습니다.\n\n \n\n체험 내용\n: 다도지도사와 함께 하는 차(茶) 문화 체험 차의 유래 등 다도 역사 설명, 차 우리기·차 마시기 등 개인별 다도체험\n\n체험 시간\n: 1회 10:30~11:10 / 2회 13:30~14:10 / 3회 15:00~15:40 / 4회 16:30~17:10 (40분 소요)\n\n참여 방법\n: 홈페이지 사전 예약 필수 \n\n- 부산박물관 홈페이지 > [행사/체험] > 다도체험 > 예약하기\n- 부산광역시 통합예약시스템 > 견학/체험, 부산박물관 > 예약하기\n\n체험 인원\n: 회당 최대 20명\n\n유의 사항\n: - 초등학교 4학년(만 10세) 이상 참여 가능합니다.\n- 체험 시작시간 10분 전까지 문화체험관에 도착하셔야 합니다.\n\n...\n\n#### 궁중복식 체험\n\n곤룡포, 익선관, 활옷, 원삼 등 우리나라 궁중 복식을 착용하는 체험입니다. 한복의 특성과 착용 방법에 대한 문화관광해설사의 설명을 듣고, 직접 한복을 입어보며 우리의 전통복식인 한복의 아름다움을 체험할 수 있습니다.\n\n \n\n체험 내용\n: 곤룡포, 익선관, 활옷, 원삼 등 우리나라 궁중 복식을 착용하는 체험\n\n체험 시간\n: 1회 10:10~10:30 / 2회 11:30~11:50 / 3회 14:00~14:20 / 4회 15:20~15:40 (20분 소요)\n\n참여 방법\n: 홈페이지 사전 예약 필수 \n\n- 부산박물관 홈페이지 > [행사/체험] > 궁중복식체험 > 예약하기\n- 부산광역시 통합예약시스템 > 견학/체험, 부산박물관 > 예약하기\n\n체험 인원\n: 회당 2명\n\n유의 사항\n: - 성인만 체험 가능합니다.\n- 체험 시작시간 10분 전까지 문화체험관에 도착하셔야 합니다.\n\n#### 일반복식 체험\n\n저고리, 치마, 도포, 갓 등 우리나라 일반 복식을 착용하는 체험입니다. 한복의 특성과 착용 방법에 대한 문화관광해설사의 설명을 듣고, 직접 한복을 입어보며 우리의 전통복식인 한복의 아름다움을 체험할 수 있습니다.\n\n \n\n체험 내용\n: 저고리, 치마, 도포, 갓 등 우리나라 일반 복식을 착용하는 체험\n\n체험 시간\n: 1회 10:40~11:20 / 2회 13:10~13:50 / 3회 14:30~15:10 / 4회 15:50~16:30 (40분 소요)\n\n참여 방법\n: 홈페이지 사전 예약 필수 \n\n- 부산박물관 홈페이지 > [행사/체험] > 일반복식체험 > 예약하기\n- 부산광역시 통합예약시스템 > 견학/체험, 부산박물관 > 예약하기\n\n체험 인원\n: 회당 6명 ※ 회차별 여러 팀이 함께 체험할 수도 있으니, 예약 시 참고하시기 바랍니다.\n\n유의 사항\n: - 누구나 참여 가능합니다.\n- 체험 시작시간 10분 전까지 문화체험관에 도착하셔야 합니다.\n\n...\n\n#### 탁본 체험\n\n먹물, 한지, 솜방망이 등을 이용하여 기와 무늬를 찍어보는 습탁 체험과 크레용을 이용하여 기와 무늬를 찍어보는 건탁 체험을 통해 우리 문화유산을 손끝으로 직접 느끼며 체험할 수 있습니다.\n\n \n\n체험 내용\n: - 습탁 : 먹물, 화선지, 솜방망이 등을 이용하여 기와무늬를 찍어보는 체험\n- 건탁 : 크레용을 이용하여 기와무늬를 찍어보는 체험\n\n체험 시간\n: 10:00 ~ 17:00\n\n참여 방법\n: 당일 현장방문(예약 불필요)\n\n체험 인원\n: 회당 2명(건탁), 4명(습탁)\n\n#### 유물퍼즐 체험\n\n문화유산의 퍼즐 조각을 모아 그 원형을 완성하는 활동을 통해 우리 문화유산에 대한 이해를 넓히고 전통문화를 배울 수 있는 기회를 제공합니다.\n\n \n\n체험 내용\n: - 입체 퍼즐: 전 산청 석남암사지 납석사리호, 백자철화용문호\n- 평면 퍼즐: 금동보살입상, 칠태부인경수연도\n\n체험 시간\n: 10:00 ~ 17:00\n\n참여 방법\n: 당일 현장방문(예약 불필요)\n\n체험 인원\n: 회당 4명"
      ]
    },
    {
      "id": "https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000009&dataSid=6294&menuCd=DOM_000000204019000000",
      "title": "공연·전시 | 유용한정보 | Visit Busan",
      "url": "https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000009&dataSid=6294&menuCd=DOM_000000204019000000",
      "author": "부산광역시",
      "highlights": [
        "공 ... 시\n\n...\n\n#### 공연·전시\n\n해녀와 함께 바다를 배우다\n\n- 기간 2026.08.04.(화) ~ 2026.09.19.(토) \n\n \n\n부산 바다의 숨겨진 이야기를 만나는 특별한 체험! 해녀에게 직접 듣는 숨비소리와 바다 이야기\n\n스노클링과 해양생물 관찰을 통해부산 해녀문화와 바다를 가까이에서 경험해보세요\n\n체험 안내 대상 : 초등학교 4학년 이상 누구나 운영 : 8월 4일(화) ~ 9월 초 / 총 20회 참가비 : 1인 30,000원\n\n포함사항 ✔ 슈트 · 스노클 · 핀(오리발) · 구명조끼 ✔ K-Food 김밥 & 해물라면 준비물수영복(또는 래쉬가드), 수건, 샤워용품\n\n예약 방법 네이버 스마트스토어 ‘부산마린파파’ 검색→ 「해녀와 함께 바다를 즐기다」 선택 후 예약\n\n문의 : 1855-1364\n\n※ 한정 인원 운영으로 조기 마감될 수 있습니다!\n\n해녀와 함께 만나는 진짜 부산 바다 이야기\n\n- 일자\n\n 2026.08.04.(화) ~ 2026.09.19.(토) \n\n- 문의처\n\n 1855-1364"
      ],
      "image": "https://www.visitbusan.net/images/common/logo.png"
    },
    {
      "id": "https://www.busan.go.kr/domoheon/sosopungEvent",
      "title": "도모헌(옛 부산시장 관사)",
      "url": "https://www.busan.go.kr/domoheon/sosopungEvent",
      "highlights": [
        "도모헌(옛 부산시장 관사)\n\n## 프로그램 program\n\n \n\n (1명 추가모집)도모헌 들락날락 '영어랑 놀자'(초등반) 2기\n\n 스토리텔링, 만들기 수업 등 어린이들이 주도하며 흥미를 느낄 수 있는 놀이형 원어민 영어교육(총 16주 과정)\n\n 2026-08-13 ~ 2026-12-03 (화,목) \n\n \n\n 그림책 속으로 풍덩 (유아6-7세)\n\n 그림책 읽기와 체험활동을 통해 상상하고 놀이하며 그림책 읽기의 즐거움을 경험할 수 있는 프로그램입니다.\n\n 2026-03-21 ~ 2026-12-05 (토) \n\n \n\n 영어그림책 속으로 (초등 1~3학년)\n\n 영어 그림책을 동화구연으로 듣고, 그림책에 나온 영어 표현들을 배우고, 그림책을 읽고 난 느낌을 공유하며 독후 활동을 하는 프로그램입니다.\n\n 2026-03-14 ~ 2026-11-28 (토) \n\n \n\n 2026년 들락날락 독서놀이터\n\n 어린이집, 유치원에서 온라인 예약 후 자유롭게 단체로 들락날락 어린이도서관을 즐길 수 있습니다. * 화~금요일 이용 가능 (월, 공휴일 휴관) \n\n \n\n (종료)2026년 도모헌 들락날락 '맘껏놀자(8~12세)'\n\n \n\n (종료)도모헌 들락날락 여름특강 독서프로그램\n\n부산광역시 수영구 황령산로7번길 60\n\n☎ 051-888-8711 (점심시간 13:00~14:00)\n\n부산시 120콜센터 : 051-120"
      ],
      "image": "https://www.busan.go.kr/humanframe/theme/domoheon/assets/img/common/ogimg.jpg"
    },
    {
      "id": "http://www.bsjeontong.org/?pagecode=P000000007",
      "title": "부산전통문화체험관 홈 >프로그램>프로그램 신청",
      "url": "http://www.bsjeontong.org/?pagecode=P000000007",
      "highlights": [
        "부산전통문화체험관 홈 >프로그램>프로그램 신청\n\n...\n\n## 프로그램 신청\n\n- 운영 및 신청기간 : 2026년 1월 ~ 2026년 12월\n- 신청방법 : 전화접수, 부산전통문화체험관 홈페이지 접수 \n\n- 단체예약은 전화접수만 가능\n- 토요가족체험 예약은 매월 1일 오전10시 익월 토요일 전체 예약 오픈 (1일이 토,일,월인 경우 화요일 오픈. 1일이 공휴일인 경우 다음날 오픈) \n- 전화 접수 : 부산전통문화체험관 ☎ 240-4161~4\n- 홈페이지 접수 : www.bsjeontong.org/?pagecode=P000000007\n- 대 상 : 학생, 주민, 시민 누구나\n- 장 소 : 부산전통문화체험관\n- 수 강 료 : 무료(단, 재료비는 본인부담)\n\n### 프로그램\n\n※본 일정표는 예시입니다.시간은 프로그램 선택에 따라 조정 가능합니다.\n\n| NO | 구분 | 프로그램명 | 교육시간 | 인원 | 장소 | 비고 |\n| --- | --- | --- | --- | --- | --- | --- |\n| 1 | 일일 체험 프로그램 | 택견 | 화.목.금 10:00~13:00 | 20 | 2층 다도예절실 | 양말착용필수 |\n| | | 다도 | 화~금 10:00~13:00 체험시간 협의 | 20 | 2층 다도예절실 | |\n| | | 전통놀이 | | 20 | 2층 생활예절실 | |\n| | | 국악놀이 | | 20 | 2층 생활예절실 | |\n| | | 한복체험 | | 20 | 2층 생활예절실 | |\n| | | 효예절체험 | | 20 | 2층 생활예절실 | |\n| | | 전통떡 | | 20 | 1층 음식체험실 | 재료비 10,000~15,000원 |\n| | | 전통공예 | | 20 | 2층 생활예절실 | 재료비 10,000원 |\n| | | Taste Korea K-food *비빔밥+불고기 *잡채+계란말이 *동래파전+도토리묵 *김밥+떡볶이 *김치+두부김치 (택1) | | 18 | 1층 음식체험실 | 외국인 전용체험 재료비 25,000원 |\n| 2 | 토요 가족 프로그램 | (오전)A 전통떡 다도 전통놀이 | 토요일 10:00~13:00 | 20 | 1층 음식체험실 2층 다도예절실 2층 다도예절실 | 음식체험(전통떡) ,전통공예 재료비 가족당 10,000원 본인부담 ※ 취소 시, 3일전까지 연락 |\n| | | (오전)B 케이팝데몬헌터스 전통어드벤처 | 토요일 10:00~13:00 | 20 | 자개갓키링 2층 생활예절실 소다팝 가야금 2층 생활예절실 K-김밥 만들기 1층 음식체험실 | |\n| | | (오후)효예절 전통떡 전통놀이(오징어게임) | 토요일 13:00~16:00 | 20 | 2층 생활예절실 1층 음식체험실 2층 생활예절실 | |\n| 3 | 정규반 | 사물놀이 | 5. 26. ~ 7. 28. 매주 화 14시~16시 | 15 | 2층 생활예절실 | |\n| | | 전통사찰음식 | 5. 27. ~ 8. 5. 매주 수 14시~16시 | 18 | 1층 음식체험실 | 재료비 150,000원 |\n| | | 민요와 판소리 | 5. 28. ~ 7. 30. 매주 목 14시~16시 | 15 | 2층 생활예절실 | |\n| | | 치유발효음식 | 5. 29. ~ 8. 7. 매주 금 14시~16시 | 18 | 1층 음식체험실 | 재료비 150,000원 |\n| 4 | 특강반 | K-헤리티지공예 | 3. 12. ~ 5. 14. 매주 목 14시~16시 | 12 | 2층 생활예절실 | 재료비 150,000원 |\n| | | 나도,흑백셰프 | 3. 13. ~ 5. 15. 매주 금 14시~16시 | 18 | 1층 음식체험실 | 재료비 200,000원 |\n\n희망하시는 일일체험 프로그램과 토요가족 프로그램을 클릭하세요! \n\n※프로그램신청은 최소 1주일전에 하셔야합니다.\n\n※선착순 마감으로 진행하며, 수강인원 50% 미만시 폐강될 수 있습니다. \n\n (우49200)부산광역시 서구 꽃마을로 163번길 71(서대신동3가, 부산전통문화체험관) 대표전화 Tel. 240-4161~4 (051-240-4161) ... 0 ... 7 (c) 부산전통문화체험관. ... rights reserved."
      ],
      "image": "http://www.bsjeontong.org/common/images/cmm/logo.png"
    },
    {
      "id": "https://art.busan.go.kr/lecetuxre2/view.nm?programno=2273",
      "title": "프로그램 어린이 미술관 탐색 프로그램 <사이사이>| 교육/행사 | 부산시립미술관",
      "url": "https://art.busan.go.kr/lecetuxre2/view.nm?programno=2273",
      "highlights": [
        "| ... 관\n\n...\n\n## 어린이 미술관 탐색 프로그램 <사이사이>\n\n접수기간\n: 2026-10-01 15:00 ~ 2026-10-31 18:00\n기간\n: 2026-10-10 ~ 2026-10-31\n강사\n대상\n: 초등 3~5학년\n요일\n: 매주 토요일\n접수여부\n: 인터넷접수\n\n카테고리\n: 어린이/청소년\n시간\n: 10:00~12:00, 14:00~16:00\n수강료\n: 무료\n장소\n: 부산시립미술관 지하 1층 어린이체험실\n\n## 접수신청\n\n| 신청기간 | 기간 | 시간 | 신청가능인원 | 예약여부 |\n| --- | --- | --- | --- | --- |\n| {{rowsItem.enr_begindate}}~{{rowsItem.enr_enddate}} | {{rowsItem.begindate}}~{{rowsItem.enddate}} | {{rowsItem.time_val}} | {{rowsItem.cnt_summary_text}} | {{setTextEnr(rowsItem.chkDueRoundDate, rowsItem.chkEnrPosb)}} |\n\n어린이 미술관 탐색 프로그램 <사이사이> 신청 안내\n\n부산시립미술관에서는 어린이가 수동적인 관람에서 벗어나, 미술관이라는 공간과 작품을 주체적으로 탐색해 보는 교육 프로그램 <사이사이>를 운영합니다.\n\n우리는 같은 미술관을 걸어도 저마다 다르게 보고, 다른 생각과 장면을 마음에 담습니다.\n\n<사이사이>는 정답을 찾는 관람이 아니라, '잠시 멈춰 서기', '자리를 바꾸어 보기', '주변 풍경과 함께 바라보기', '질문 남기기'와 같은 탐색 방법을 통해 나만의 시선을 발견하는 프로그램입니다.\n\n실내 전시실부터 야외 조각공원까지 미술관 구석구석을 자유롭게 다르게 바라보며, 친구들과 서로 다른 발견과 시선을 다정하게 나눠보는 소중한 경험에 어린이 여러분을 초대합니다.\n\n#### ■ 프로그램 개요\n\n- 프로그램명: 어린이 미술관 탐색 프로그램 <사이사이>\n- 교육 대상: 초등학교 3~5학년 (회당 20명) *선착순 마감\n- 교육 장소: 부산시립미술관 어린이갤러리(체험실, 안전기지) 및 야외 조각공원\n- 참가비: 무료\n- 주요 내용:\n\n- 미술관 실내/야외 공간을 이동하며 나만의 탐색 방법 선택하기\n- 공간과 작품에 머물며 관찰하고 사진으로 기록하기\n- 사진과 활동지를 통해 서로의 발견과 이야기 나누기\n\n- #### ■ 신청 안내\n- 신청 방법: 부산시립미술관 홈페이지 선착순 접수\n- 신청 기간: 2026. 10. 1. 16:00 ~ \n- 신청 유의사항:\n\n- 어린이 대상 프로그램으로 대상 연령(초등 3~5학년) 확인 후 신청해 주시기 바랍니다.\n- 원활한 교육 진행을 위해 정시에 시작하오니 시작 10분 전까지 도착해 주시기 바랍니다.\n- 부득이하게 참석이 어려운 경우, 대기자와 다른 어린이들을 위해 반드시 사전에 취소 신청 또는 전화 연락을 주시기 바랍니다. (사전 연락 필수)\n\n...\n\n박그루 동화작가\n\n어린이의 일상과 공간에서 이야기를 발견해 온 동화작가로, 『미술관 추격 사건』, 『편의점 도난 사건』, 『도서관 낙서 사건』, 『비밀 일기장과 카피캣』 등 동화 10권을 출간했다. 부산아동문학 신인상과 김유정 신인문학상을 수상했다.\n\n 『미술관 추격 사건』에서는 부산시립미술관을 주요 배경으로 실제 미술관의 공간과 작품, 그곳에서 마주치는 사람과 장면을 어린이의 시선으로 바라보고 한 편의 이야기로 펼쳐냈다.\n\n이번 프로그램에서는 작품을 창작한 경험을 바탕으로 어린이들과 함께 미술관의 장면을 새롭게 바라보고, 그 안에서 자신만의 질문과 이야기의 단서를 발견해보는 시간을 갖는다.\n\n...\n\n주소\n: 부산광역시 ... 구 APEC로 58"
      ],
      "image": "https://art.busan.go.kr/img/logo.png"
    }
  ],
  "searchTime": 1411.7,
  "costDollars": {
    "total": 0.007,
    "search": {
      "neural": 0.007
    }
  },
  "resolvedSearchType": ""
}

