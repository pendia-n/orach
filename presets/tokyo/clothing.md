# Results

## Query

> Find official sources for independent clothing designers, local makers, vintage/secondhand shops and public clothing markets in Toyko, Japan, within downtown. Seek both distinctive discoveries and practical affordable options. Prioritise actual product prices or category price lists, exact branches, public opening/event dates and purchase conditions. Include local-language sources. Distinguish ordinary shops, appointment-only warehouses, temporary sales and online-only stores. Keep event stock separate from online stock. Exclude delivery fees presented as garment prices and duplicate business pages unless they provide additional useful evidence.

## Provider

>> Exa

## Code

import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);

const result = await exa.search(
  "Find official sources for independent clothing designers, local makers, vintage/secondhand shops and public clothing markets in Toyko, Japan, within downtown. Seek both distinctive discoveries and practical affordable options. Prioritise actual product prices or category price lists, exact branches, public opening/event dates and purchase conditions. Include local-language sources. Distinguish ordinary shops, appointment-only warehouses, temporary sales and online-only stores. Keep event stock separate from online stock. Exclude delivery fees presented as garment prices and duplicate business pages unless they provide additional useful evidence.",
  {
    numResults: 10,
    type: "auto",
    contents: {
      highlights: {
        maxCharacters: 20000
      }
    }
  }
);

## JSON

{
  "requestId": "02ffea121e93912646277eb41bb1f686",
  "output": {
    "content": "Tokyo offers diverse clothing options ranging from wholesale-priced vintage to independent designer selections.\n\nBakuyasu in Koenji operates a permanent vintage warehouse (Sakaiya Bldg 2F/3F) selling items from 1,000 to 4,500 yen excluding tax [1]. It is open daily from 12:00 to 20:00, requiring no membership [1].\n\nDancing Mood in Shimotakaido is an independent hub featuring local brands and curated vintage [2]. It is located at 3-29-20 Matsubara and typically opens 13:00–20:00 (irregular holidays) [2].\n\nMagazines in Ueno (4-8-1 Ueno) is a select shop offering vintage and original items, with prices starting at 1,200 yen for masks [3]. Hours are 12:00–19:30 on weekdays and 11:00–20:00 on weekends/holidays [3].\n\nRenga Clothing Store operates two branches in Koenji with 14:00–21:00 hours [4]. Swank in Setagaya (1-17-4 Setagaya) is an independent vintage shop open 14:00–21:00 weekdays and 13:00–21:00 Saturdays [5]. \n\nKimono Sennenn holds recurring pop-up markets for vintage kimonos, typically priced from 1,100 yen [6]. Schedules are available on their official site; upcoming events include locations in Nakano and Omotesando [6].",
    "grounding": [
      {
        "field": "content",
        "citations": [
          {
            "url": "https://mujinvintage.jp/pages/bakuyasu-koenji",
            "title": "古着卸倉庫BAKUYASU 古着卸直売所 高円寺店\n– 無尽/MUJIN"
          },
          {
            "url": "https://www.houyhnhnm.jp/news/781165/",
            "title": "インディペンデントブランド・古着・服の縫製の三拍子が揃う！ 下高井戸にできた新スポットへ。 | news | HOUYHNHNM（フイナム）"
          },
          {
            "url": "https://inoichi.tokyo/magazines/",
            "title": "マガジンズ | 上野亥の日ゐの市"
          },
          {
            "url": "https://rengatokyo.official.ec/",
            "title": "RENGA CLOTHING STORE"
          },
          {
            "url": "https://swank-online.com/",
            "title": "SWANK online store"
          },
          {
            "url": "https://kimonosennenn.com/",
            "title": "キモノセンエン公式サイト｜リユース着物のポップアップストア"
          }
        ],
        "confidence": "high"
      }
    ]
  },
  "results": [
    {
      "id": "https://mujinvintage.jp/pages/bakuyasu-koenji",
      "title": "古着卸倉庫BAKUYASU 古着卸直売所 高円寺店\n– 無尽/MUJIN",
      "url": "https://mujinvintage.jp/pages/bakuyasu-koenji",
      "highlights": [
        "古着卸倉庫BAKUYASU 古着卸直売所 高円寺店 – 無尽/MUJIN \n\n# 高円寺80坪 特大直売所 9.19(土) GRAND OPEN\n\n¥1,000 〜 ¥4,500（税別） \n\n業者と同じ卸直売価格を一般のお客様もこの価格でご購入いただけます\n\n常設店舗・どなたでもご入場OK\n\n \n\n \n\n### 西日暮里の倉庫でも卸直売会を 定期開催中！\n\n東京・西日暮里の古着卸倉庫BAKUYASU本体でも、卸直売会を定期開催しています。高円寺にお越しになれない方はこちらもチェックしてください。\n\n## 開催情報\n\n【9/19(土) GRAND OPEN・常設店舗】 【営業時間】12:00〜20:00 【会場】さかいやビル 2F&3F（80坪） 【価格】卸直売価格 ¥1,000〜¥4,500（税別・カテゴリ別、一部¥10,000〜）\n\n \n\n## 古着卸直売所 卸直売価格リスト\n\nすべて税別価格です。海外のお客様は免税(TAX FREE)にてご購入いただけます\n\n| カテゴリ | 卸直売価格（税別） |\n| --- | --- |\n| ネクタイ＆マフラー | ¥1,000 |\n| シャツ＆アロハシャツ | ¥2,000 |\n| ネルシャツ | ¥2,500 |\n| ラルフシャツ | ¥3,500 |\n| Tシャツ＆ポロシャツ | ¥2,200 |\n| ハーレーTシャツ | ¥4,000 |\n| スウェット | ¥3,300 |\n| ハーレー＆ラルフスウェット | ¥4,400 |\n| セーター | ¥2,500 |\n| ラルフメンズセーター | ¥4,400 |\n| パンツ | ¥2,800 |\n| ジャケット | ¥3,500 |\n| レザー＆ダックジャケット | ¥4,500 |\n| カーハートダックジャケット | ¥10,000〜 |\n\n## 商品ラインナップ\n\n会場の一部をご紹介。毎日入荷があるので、来るたびに違う出会いがあります。\n\n## 古着卸直売所 高円寺が選ばれる理由\n\n🏷️ 業者と同じ卸直売価格を一般開放\n\n📅 9/19 GRAND OPEN・常設営業\n\n🙌 会員登録不要・どなたでもOK\n\n📍 高円寺駅南口から徒歩3分\n\n大量購入・継続的な卸取引をご希望の業者様は、個別ピック・合同ピックのご案内ページもあわせてご覧ください。\n\n## アクセス\n\n会場\n: 古着卸倉庫BAKUYASU 古着卸直売所（さかいやビル 2F&3F）\n住所\n: 東京都杉並区高円寺南４-24-9 さかいやビル2F&3F\nアクセス\n: 高円寺駅（JR中央線・総武線）南口より徒歩約3分\n営業時間\n: 12:00〜20:00（9/19より常設営業）\n電話番号\n: 080-4878-2538 (08048782538)\n\n※さかいやビル2F・3Fが会場です\n\n...\n\n## よくある質問\n\n一般の客でも卸直売価格で購入できますか？\n\nはい。古物商許可の有無に関わらず、どなたでも卸直売価格（¥1,000〜¥4,500、一部カテゴリは異なります）でご購入いただけます。\n\n会員登録は必要ですか？\n\n不要です。どなたでもご入場・お買い物いただけます。\n\nお支払い方法は何が使えますか？\n\n現金・クレジットカード・QRコード決済（PayPayなど）・交通系ICカードなど、各種キャッシュレス決済に幅広く対応しております。\n\n海外のお客様も免税で購入できますか？\n\nはい。パスポートをご提示いただくことで、免税（TAX FREE）にてご購入いただけます。"
      ],
      "image": "http://mujinvintage.jp/cdn/shop/files/F7087C1F-1968-4E11-8279-6317101896BC.png?v=1789489430"
    },
    {
      "id": "https://inoichi.tokyo/magazines/",
      "title": "マガジンズ | 上野亥の日ゐの市",
      "url": "https://inoichi.tokyo/magazines/",
      "highlights": [
        "マガジンズ | 上野亥の日ゐの市\n\n \n\nマガジンズです！\n\n新品も古着も両方楽しめちゃう！衣料品および小物雑貨を扱うセレクトショップです。 1995年に古着100％でスタートしその後洋服のシルエットの変化とともに現在新品の取扱いが半分になっております。 元々アメリカより直接古着を仕入れることもあり商品の根幹にはアメカジテイスト、ビンテージテイストが流れています。\n\nそんなマガジンズならではのセレクト商品やオリジナル商品が沢山！ アニマル柄など上野ならではの商品もお楽しみください！\n\n換気\n\n密接回避\n\n会話自粛推奨\n\n手洗い推奨\n\n店舗情報\n\n店名\n\nマガジンズ\n\nお問い合わせ\n\n03-3836-9565\n\n営業時間・定休日\n\n平日 12：00 ~ 19：30 土日祭日 11：00 ~ 20：00\n\n支払方法\n\n現金 クレジットカード 各種 その他（iD、ALIPAY、WeChatPay）\n\n住所\n\n東京都台東区上野4-8-1\n\nホームページ\n\nhttp://www.magazines.co.jp\n\nGo To イート\n\nオススメ\n\nFASHION MASK ￥1,200（税抜き）\n\nシャツからマスクにしている メイドインジャパン オリジナル商品です。\n\n動物のガラシャツ 各種\n\n上野という土地柄動物ものが大人気！ 犬猫をはじめ、 パンダはもちろん！ 特に人気なのが、なんと！ハシビロコウ！ オリジナルハシビロコウ商品も多数取り揃えています。\n\nブランド古着 各種\n\n・ミリタリー系 ・バーバリー ・ハリスツィード その他、綺麗で価値が高いブランド古着を多数取り揃えています。\n\n和装古着 各種\n\n帯や羽織も！ 仕入れによるカラーや柄のチョイスなどはマガジンズならではのセンスが光る逸品です！"
      ]
    },
    {
      "id": "https://mixto.tokyo/",
      "title": "MIXTO",
      "url": "https://mixto.tokyo/",
      "highlights": [
        "MIXTO \n\n## NEW ARRIVALS\n\n## iot reverse\n\n 1980-90s C.P.company loose cotton rib knit ¥31,680 1980-90s SAXONY leather combi henry neck 3D knit pull ¥50,380 1990s big collar leather coat ¥75,680 2010s Acne Studios london stripe shirt ¥31,680 1940s vintage U.S.ARMY M-38 mackinaw coat ¥65,780 late 2010s COACH1941 linen wool check CPO shirt jacket ¥33,880 1990s ortega pattern knit gown coat ¥36,080 1990s ST JOHN'S BAY leather bomber jacket ¥47,080 1980s Columbia nylon anorak parka ¥31,680 2000s CLOSED black quilting knit blouson ¥21,780 2000s HUGO BOSS straight denim pants ¥22,880 2000s A/X black hoodie knit jacket ¥20,680 \n\n## iot\n\n chemical-wash denim shop coat ¥37,180 metal-clip heavy leather fireman jaket ¥69,080 california angels quilted-lined varsity jacket ¥44,880 side panel zip-up hoodie ¥27,280 birdseye pattern turtle neck knit ¥17,380 zebra pattern linen wide pants ¥22,880 geometric pattern skipper knit ¥18,480 tyrolean suede work jacket ¥30,580 two-tone half zip pullover ¥18,480 “KENZO”orange quilted lining wool chester coat ¥58,080 leather collar dark torn hunting blouson ¥47,080 houndstooth puttern a-2 type blouson ¥31,680 \n\n## SELEN\n\n “Pierre Cardin” smooth poly texture zip up blouson ¥21,780 “POAL SMITH” black wide tapered trouser ¥25,080 “Burberry’s” gray stripe wool trouser ¥27,280 “POLO RALPH LAUREN” beige cotton-linen twill tailored jacket ¥27,280 “Polo by Ralph Lauren” single 3B corduroy tailored jacket ¥31,680 charcoal gray no-tuck checked slacks ¥16,280 black watch tartan check double breasted blazer ¥23,980 “IZOD LACOSTE” ivory zip up blouson ¥21,780 black wool acryl knit cardigan ¥18,480 “CERRUTI” blue fine wool knit ¥18,480 \"Cristian Dior SPORTS\"marine blue color fly front shirt ¥22,880 \"EMPORIO ARMANI\" soft twill wool pin stripe no tuck trousers ¥28,380\n\n...\n\n## Auld Lang Sun\n\n linen 100% shawl collar long gown coat ¥58,080 multi color patchwork embroidery leather jacket ¥36,080 \"KENZO\" dark navy slim fit two button tailored jacket ¥30,580 90's \"MARITHÉ + FRANÇOIS GIRBAUD\" mustard yellow velcro strap wide baggy shuttle denim pants ¥42,680 italian military dark navy wool melton lace-up sailor shirt ¥22,880 00's \"tommy hilfiger\" faded light blue wide tapered denim pants ¥20,680 black leather double riders jacket ¥33,880 multicolor patchwork ramie cotton textured knit half button pullover ¥19,580 khaki olive military rib knit sweater ¥18,480 70-80s \"winchester\" vintage indigo denim wide straight pants ¥31,680 herringbone linen cotton zip-up blouson jacket ¥27,280 90s ”SAXONY COLLECTION” two tone leather × boucle wool switching jacket ¥44,880\n\n...\n\n\"Re:make\" rug cargo pants ¥61,380 \"Re:make\" M-51 damaged graphic military parka ¥65,780 \"Re:make\" M-51 leather patchwork fishtail parka ¥130,680 \"Re:make\" lace docking track jacket ¥60,280 \"Re:make\" denim patchwork work jacket ¥63,580 \"Re:make\" rosario leather patchwork denim pants ¥80,080 \"Re:make\" 羽織 docking track jacket ¥47,080 \"Re:make\" reverse docking slacks pants ¥22,880 ''Re:make'' random track jacket ¥44,880 ''Re:make\" patchwork design black flare pants ¥47,080 ''Re:make'' random check shirt hoodie ¥36,080 ''Re:make'' patchwork design shirt ¥25,080\n\n...\n\n## iot replay\n\n black sheer silk embroidered china shirt ¥22,880 “DKNY JEANS” golden satin wide straight cargo pants ¥21,780 “GAP” olive m-51 style military hooded jacket ¥27,280 ivory henley neck cotton denim hoodie ¥20,680 tyrolean embroidered brown leather jacket ¥42,680 \"DOLCE&GABBANA\"panel design hoodie ¥25,080 navy stitch pants ¥14,080 flower zip jaket ¥27,280 “RED HEAD” gore-tex technical nylon pants ¥25,080 camel brown double-breasted tailored jacket ¥31,680 linen rayon ivory wide cargo pants ¥26,180 black glitter diamond open-knit v-neck sweater ¥20,680\n\n...\n\n## ÉTO\n\n 00s GAP military sampling half jacket ¥26,180 1990-00s Columbia reversible hunting jacket ¥26,180 MacGregor double face zip hoodie ¥15,180 Patagonia Los Gatos hooded pullover ¥25,080 1980-90s shawl collar leather jacket ¥38,280 1990s Polo by Ralph Lauren 2tone down jacket ¥44,880 FILA wide velours pants ¥19,580 1990s flower pattern pile shirt made in usa ¥17,380 1990s Banana Republic cotton nylon light jacket ¥21,780 Calvin Klein flyfront open collar check shirt ¥18,480 1990s Polo by Ralph Lauren notuck striped cotton slacks ¥15,180 1990-00s notuck striped slacks ¥14,080\n\n...\n\npattern ... jacket ... 0,68 ... m51 style ... field jacket ¥37,180 mustard yellow check flannel shirt ¥14,080 lame wide easy pants ¥20,680 bordeaux double spencer jacket ¥22,880 studs design lamb leather riders jacket ¥44,880 deformation decadent design cardigan ¥21,780 \"Harley-Davidson\" black double rider leather jacket ¥54,780 \"DIESEL” over size denim ... jacket ¥23,980 \"Remy\" deformation leather jacket ¥41,580 leaf patchwork olive-beige leather jacket ¥38,280 cropped deformation wool jacket ¥32,780"
      ],
      "image": "https://cdn.shopify.com/s/files/1/0639/3862/5759/files/OGPimage_MIXTO.png?v=1656466363"
    },
    {
      "id": "https://taishidoshotengai.com/shop/nanyosya/",
      "title": "南洋舎 - 太子堂商店街振興組合",
      "url": "https://taishidoshotengai.com/shop/nanyosya/",
      "highlights": [
        "南洋舎 - 太子堂商店街振興組合\n\n## 南洋舎\n\nご挨拶\n\n手仕上げです。ひとつひとつ丁寧に仕上げます。 一度来てもらえば分ります！\n\n店舗情報\n\n営業時間：8：00～20：00 定休日；日曜日・祝日 住所：世田谷区太子堂5-28-1 電話番号：03-3421-4063\n\n概要\n\n・背広上下 1300円より ・背広上衣 800円より ・ワイシャツ 280円より ・婦人上下 1300円より ・婦人上衣 800円より ・ワンピース 1100円より ・セーター 500円より ・オーバーコート1300円より などその他承ります。\n\n当商店街は地域の活性化と安全安心活動に取り組んでいます。 お問合せ 03-5787-8998 / 商店街事務所"
      ],
      "image": "https://taishidoshotengai.com/wp-content/uploads/2023/12/header-chara.png"
    },
    {
      "id": "https://www.houyhnhnm.jp/news/781165/",
      "title": "インディペンデントブランド・古着・服の縫製の三拍子が揃う！ 下高井戸にできた新スポットへ。 | news | HOUYHNHNM（フイナム）",
      "url": "https://www.houyhnhnm.jp/news/781165/",
      "publishedDate": "2023-10-19T08:07:23.000Z",
      "highlights": [
        "インディペンデントブランド・古着・服の縫製の三拍子が揃う！ 下高井戸にできた新スポットへ。 | news | HOUYHNHNM（フイナム）\n\n 2023.10.19 UP \n\n# インディペンデントブランド・古着・服の縫製の三拍子が揃う！ 下高井戸にできた新スポットへ。 \n\n行き慣れたお店で買い物を楽しむのは最高ですが、はじめましてのお店に足を運び、ちょっと緊張しながら買い物をするなんて瞬間も楽しいはず。それがはじめて降りる駅だったりしたら尚更です。そんな感じで足を運んでみたくなるお店が、都心から少しだけ離れた街に8月にオープンしました。ちょっと散歩がてら、新スポットへ買い物を楽しみに行ってみてはいかがでしょうか？\n\n...\n\n先週の『出没! アド街ック天国』でも取り上げられた下高井戸駅。新宿から京王線に揺られることおよそ10分、来年3月に幕を閉じる戦後のバラック期を得てできた駅前市場があったり、昔ながらのお店が並ぶ商店街に、少し歩けば閑静な住宅街がある街です。\n\nフイナムの読者の方には「トラスムンド（TRASMUNDO）」や「バーバー サコタ（BARBER SAKOTA）」に「ハトス アウトサイド（HATOS OUTSIDE）」といった、店主の個性がそのままスタイルに投影されたお店がある街といった印象が強いかもしれません。\n\n \n\n \n\nそんなローカルエリアに新たな注目のディープスポットが誕生しました。場所は下高井戸駅の北口を出て徒歩30秒ほど。「ダンシング ムード（DANCING MOOD）」と名付けられたお店は、〈キリメ（Kirime）〉〈ソーラスビーイング（SauRasBeing）〉〈ワンダーマン（WANDERMAN）〉〈エスティーエス バッグ（STS Bags）〉〈ビーアイブイ（BiV）〉といった、店主のつながりで集まったインディペンデントなブランドに、「トップショット（TOPSHOT）」の買い付けによる厳選された古着がラインナップ。服の販売だけでなく、持ち込みでお気に入りの洋服のリサイズやリメイクも行ってくれ、三拍子が揃います。\n\n \n\n \n\n不定期でリリースされるショップのオリジナルアイテム。現在は CHANG YUUによるMIX CD付きのロゴキャップなども販売中なので、オンラインもチェックしてみてください。\n\n取扱ブランドのひとつであるアイウェアブランドの〈オウン（OWN）〉のホームページでは、「ダンシング ムード」の店主のインタビューも掲載中です。\n\n...\n\nDJ HIGHSCHOOLプロデュースによりリリースされた、ラッパーのCENJUとYAHIKOによるアルバム『NEIGHBORHOOD』と、〈ソーラスビーイング〉によるMIX CDがさりげなくディスプレイ。\n\n...\n\nショップオリジナルのアイテムにキッズウェア、さらに店名からも伺えるように7incのレゲエのレコードがレジ前に並んだりと、店主のキャラクターを感じずにはいられません。ラッパーやDJにスケーターなど、ローカルコミュニティが集まり古き良き時代のストリートショップを彷彿とさせる空気感は、SNSやネットでは知れない情報やそこでしか経験できないことがたくさんあるはず。\n\n...\n\n急行の停まらない、メロウな空気が流れる下高井戸駅にできた「ダンシング ムード」。店主の目が行き届いた、レゲエのリズムのようなゆったりと居心地のいい空間での買い物は、わざわざ訪れる価値ありです。会話が弾みすぎ、ついつい長居しすぎてしまうなんてのもいいのではないでしょうか？\n\n## DANCING MOOD\n\n 住所：東京都世田谷区松原3-29-20 営業時間：13:00〜20:00 定休日：不定休 Instagram：@dancingmood_shimotakaido"
      ],
      "image": "https://www.houyhnhnm.jp/wp-content/uploads/2024/09/common_ogp.jpg"
    },
    {
      "id": "https://kimonosennenn.com/",
      "title": "キモノセンエン公式サイト｜リユース着物のポップアップストア",
      "url": "https://kimonosennenn.com/",
      "highlights": [
        "キモノセンエン公式サイト｜リユース着物のポップアップストア\n\n# 掘り出し物との出会いを、吉祥寺で。\n\n## 毎日、新しい着物や帯が入荷します。\n\n「キモノセンエン」が、吉祥寺に帰ってきます。 会場には、1,100円（税込）の着物・帯をふんだんにご用意。さらに、状態や品質にこだわって選んだ2,200円（税込）以上の商品や、毎回人気の110円（税込）コーナーも並びます。 会期中は毎日、新しい商品を追加します。訪れる日によって少しずつ表情を変える売り場で、掘り出し物を見つけるワクワクをお楽しみください。 「これから着物を始めてみたい」という初心者の方も大歓迎です。着物や帯はもちろん、これから揃えたい着付け用の小物もご用意しています。 何から選べばよいか分からない方も、どうぞ気軽にお越しください。たくさんの商品を手に取り、比べながら、ご自身にぴったりの一枚を探していただけます。 見つける楽しさ、選ぶよろこび。 吉祥寺で、新しい着物との出会いをお楽しみください。 \n\n## キモノセンエン in 吉祥寺\n\n キモノセンエンの原点、吉祥寺へ。 今回の会場は、吉祥寺駅から徒歩圏内の「Gallery KAZE」です。 吉祥寺散策とあわせて、掘り出し物を探すワクワクをお楽しみください。 価値ある キモノセンエン in 吉祥寺 \n\n 会場：Gallery KAZE 会期：2026年9月22日（火）〜27日（日） 営業時間： ・初日 11:00〜18:00 ・初日以外 12:00〜18:00 ・最終日 12:00〜17:00 ※初日・通常日・最終日で営業時間が異なります。ご注意ください。 所在地：〒180-0003 東京都武蔵野市吉祥寺南町1丁目18−23 Minamicho Garden B1 Googleマップを見る \n\n 掘り出し物が多数あります！ これから着物を始めようと考えている方から、すでに着物をたっぷり楽しんでいる方まで、時間を忘れて着物選びを楽しめるイベントです。 1,100円（税込）の商品を中心に、一点物の着物や帯をたっぷりご用意して、皆さまをお待ちしております。 ※一部、2,200円（税込）以上の商品もございます。 ※商品はすべて一点物のため、売り切れの際はご了承ください。\n\n...\n\n## キモノセンエンとは\n\nなぜ着物が1000円なのか？ これまで、たくさんのお客様から「なんで着物が1,100円なの？」と驚きのお声をいただきました。 「着物や帯が1000円(税込1,100円)で買えるなら、気軽に着物が始められる」そんなお声をたくさんいただきます。 まさにそれがキモノセンエンのコンセプト。 一人でも多く着物を着る人を増やしたいと言う着物業界の願いが結集したイベントです。\n\n## 開催予定スケジュール\n\n| 日時 | 場所 | 詳細 |\n| --- | --- | --- |\n| 2026年9月22日(火)〜27日(日) | 吉祥寺 Gallery KAZE | 地図を見る |\n| 2026年10月6日(火)ー13日(火) | 中野マルイ | 地図を見る |\n| 2026年10月28日(水)〜11月2日(月) | 表参道(WAnocoto 9階) | 地図を見る |\n\n...\n\n4"
      ]
    },
    {
      "id": "https://endvintage.jp/",
      "title": "endvintage",
      "url": "https://endvintage.jp/",
      "author": "endvintage",
      "highlights": [
        "endvintage\n\n## INFORMATION\n\n 海外買付に伴う営業のお知らせ 10/20(火) ~ 11/12(木)の期間 海外買付に伴い、代官山店舗はclose ONLINE発送も一時停止いたします。 11/13(金)より買付新入荷を一挙迎えて 通常営業と、ONLINE商品発送を 再開いたします。 今回はいつもより長く 新たなエリアへの挑戦もしてきます。 楽しみに帰国をお待ちいただけたら 励みになります🌹 ▶買付前ONLINEご注文最終発送日 10/19(月) 14時までのご入金 : 当日発送 以降のご入金は 帰国後 11/13(金) から発送再開 ▶店舗営業日 10/16(金) ~ 10/19(月) OPEN 12:00-19:00 10/20(火) ~ 11/12(木) CLOSE 11/13(金) ~ 新入荷営業,発送再開 open : 12:00 ~ 19:00 close : Tuesdays 東京都渋谷区代官山町14-11 ホリイビルNo.5 3階 代官山駅徒歩3分 恵比寿駅徒歩10分 *19時以降にご来店をご希望の方は Instagram DMもしくはGmailからご希望日時をお送り下さい \n\n### SHIPPING 配送・送料について \n\n サガワキュウビン \n: お買い上げの合計金額が20,000円以上で送料無料。 ※海外買付に伴い 10/19(月) 14:00 以降のご注文は 帰国後の 11/13(金) の発送となります。 【地帯別配送料金】 北海道,九州：1,270円 北東北,関西：940円 関東,南東北,信越,北陸,中部：830円 中国,四国：1,050円 沖縄：1,270円 【ご指定可能配送時間】 午前中・12:00〜14:00・14:00～16:00・16:00～18:00・18:00～20:00・19:00～21:00 その他配送日のご指定に関しましては、備考欄にてお問い合わせください。都道府県の関係や連休中など運送会社の都合により必ずともご希望に添えない場合がございますのでご了承ください。 ※ご希望日時指定は上部配送設定の入力よりご指定ください。"
      ]
    },
    {
      "id": "https://www.todaysspecial.jp/",
      "title": "TODAY'S SPECIAL トゥデイズスペシャル",
      "url": "https://www.todaysspecial.jp/",
      "highlights": [
        "TOD ... SPECIAL トゥ ... スペシャル\n\n...\n\n# TODAY'S SPECIAL \n\nTODAY'S SPECIAL Nagoya 10月9日（金）オープン\n\n秋の食卓、炊き立てごはんと 9.10 THU - 10.27 TUE\n\nうつわも衣替え うつわを温かみのある素材や色合いに衣替え\n\nRECIPE 秋の旬を味わいつくすレシピ\n\n...\n\n2026.10.14 【POP UP】SNOW SHOVELING 10/23～\n\n「ヒト・モノ・コトとの出会いを楽しめる場所」がコンセプトの本屋さん SNOW SHOVELING（スノーショベリング）より オーナー中村さんが選んだ本 そして、本にまつわる素敵なものたちが今年も自由が丘にやってきます。 例年大好評の1冊1冊のキャッチフレーズがおもしろい 「BLIND DATE WITH A BOOK」（中身のわからない覆面本）も並びます。 新しい本との出会いを楽しみながら、読書の秋の1冊を探しにきませんか。\n\nSNOW SHOVELING 2026年10月23日（金）～11月19日（木） Jiyugaoka 2F *Jiyugaoka のみの開催です。 *最終日は15:00までとなります。\n\n...\n\n2026.10.02 【INFO】TODAY’S SPECIAL Nagoya 10/9 オープン\n\n10月9日（金）名古屋市栄の「LACHIC」地下1階にOPEN 東海地区初となる「TODAY’S SPECIAL Nagoya」を名古屋市栄にある複合商業施設 「LACHIC（ラシック）」地下１階にオープンいたします。 2つの島にまたがる広々とした店内に、国内外から集められた、 約5,000品目におよぶこだわりのアイテムが並びます。 また、オープンを記念して名古屋店限定のマルシェバッグを数量限定で販売いたします。\n\nぜひお立ち寄りください。\n\n...\n\n2026.10.01 【POP UP】grün アクセサリーの販売\n\nドイツ語でグリーンの意味のgrün(グリュン)、 常に心地良く、自身が自然体でいられるような肌馴染みの良い 華奢なアイテムが多いアクセサリーブランド。 ひとつひとつ丁寧にハンドメイドで作られています。 種類が豊富で大人気の華奢リングやピアスを中心に 普段取り扱いのないアイテムや新作のラインナップも予定しております。 また10/10（土）~10/12（祝）の3日間、 デザイナーの RIE TAKAHASHI がお越しくださいます！ 毎年大好評で直接サイズ調整やコーディネートの相談をしていただける機会ですので、 ぜひお楽しみください。\n\ngrün アクセサリー 2026年10月10日(土)～10月13日(火) TODAY’S SPECIAL Kyoto *Kyoto のみの開催です。 @ grün\n\n...\n\n2026.09.21\n\n【INFO】台風による自由が丘店 営業時間変更のお知らせ\n\nいつもTODAY’S SPECIAL 自由が丘店をご利用頂きまことにありがとうございます。\n\n本日9月21日(火）は、台風25号の影響により風雨が強まってくることが予想されております。 そのため、通常の営業は20時ですが、本日の営業は17時までとさせていただきます。\n\nお客様には大変ご迷惑をお掛け致しまして申し訳ございませんが、 今後とも宜しくお願い申し上げます。\n\n2026.09.17 【POP UP】Vintage Flea Market by MOTHER LIP\n\n代官山のヴィンテージセレクトショップ「MOTHER LIP」さんより、たくさんの素敵なヨーロッパヴィンテージのアイテムが届きました。 刺繍のクロスや後染めがシックな色合いのクロス、キリムなどのラグ、ヨーロッパ各国のスカーフ、いろいろな柄のエコバッグなど選んで楽しくなるものばかり。 カレンダークロスはご自分やお友達の生まれ年を見つけて、ギフトにも。 ヨーロッパの蚤の市のような空間をぜひ楽しみにいらしてください。 Vintage Flea Market by MOTHER LIP 2026年9月25日（金）～10月22日(木) TODAY’S SPECIAL Jiyugaoka 2F *Jiyugaokaのみの開催です。\n\n...\n\n店舗\n\nJiyugaoka\n\n アクセス： 152-0035 東京都目黒区自由が丘2-17-8 1F/2F \n\n GoogleMapで見る \n\n 営業時間： 11:00-20:00 \n\nTEL：03-5729-7131\n\nShibuya\n\n アクセス： 150-8509 東京都渋谷区渋谷2-21-1 渋谷ヒカリエ ShinQs 内 4F \n\n 営業時間： 平日・土 11:00-21:00 / 日祝 11:00-20:00 \n\nTEL：03-6434-1671\n\nShinjuku\n\n アクセス： 160-0022 東京都新宿区新宿3-38-2 ルミネ新宿2 1F \n\n 営業時間： 11:00-21:00 \n\nTEL：03-6911-0201\n\nHibiya\n\n アクセス： 100-0006 東京都千代田区有楽町1-1-2 東京ミッドタウン日比谷 3F \n\n 営業時間： 11:00-20:00 \n\nTEL：03-5521-1054\n\nEbisu\n\n アクセス： 150-0013 東京都渋谷区恵比寿4-20-7 恵比寿ガーデンプレイス センタープラザ B1 \n\n 営業時間： 10:00-20:00 \n\nTEL：03-6721-6481\n\nFutakotamagawa\n\n アクセス： 158-0094 東京都世田谷区玉川3-17-1 玉川髙島屋S･C 本館2F \n\n 営業時間： 10:00-20:00 \n\nTEL：03-6805-7812\n\nKyoto\n\n アクセス： 604-8032 京都府京都市中京区河原町通三条下ル山崎町251 京都BAL 4F \n\n 営業時間： 11:00-20:00 \n\nTEL：075-229-6861\n\nKobe\n\n アクセス： 650-0021 兵庫県神戸市中央区三宮町3-6-1 神戸BAL 3F \n\n 営業時間： 11:00-20:00 \n\nTEL：078-325-1780\n\nNagoya\n\n アクセス： 460-0008 愛知県名古屋市中区栄3-6-1 ラシック B1 \n\n 営業時間： 11:00-21:00 \n\nTEL：052-228-3551\n\n...\n\nTODAY'S SPECIALは、 「今日が特別になるような発見」 「旬を贈る楽しみ」に出会える “食と暮らしの商店” です。 マーケットのようなにぎやかな店内で、今日使いたくなるものから、 明日が楽しみになるもの、ずっと一緒に居たいものまで、 うつわや食材、衣料品、本や植物など、さまざまな生活道具を扱っています。"
      ],
      "entities": [
        {
          "id": "https://exa.ai/library/organization/2yp67gzqdqh",
          "type": "company",
          "version": 1,
          "properties": {
            "name": "Today's Special",
            "foundedYear": null,
            "description": "innovative food products with wonderful flavors specially selected to create a different and enjoyable experience.\n\n\n\nToday's special is a registered trademark\nCreated by World's top",
            "workforce": {
              "total": 10
            },
            "headquarters": {
              "address": "RIYADH KSA, al olaya district, RIYADH, Ar Riyad 12313, SA",
              "city": null,
              "postalCode": null,
              "country": "Saudi Arabia"
            },
            "financials": {
              "revenueAnnual": 5790053,
              "fundingTotal": null,
              "fundingLatestRound": null
            },
            "webTraffic": {
              "visitsMonthly": 0,
              "countryRank": 0,
              "avgDurationSeconds": 0,
              "history": [
                {
                  "value": 304,
                  "dateFrom": "2025-02",
                  "dateTo": "2025-02"
                },
                {
                  "value": 215,
                  "dateFrom": "2025-03",
                  "dateTo": "2025-03"
                },
                {
                  "value": 215,
                  "dateFrom": "2025-04",
                  "dateTo": "2025-04"
                },
                {
                  "value": 1200,
                  "dateFrom": "2025-05",
                  "dateTo": "2025-05"
                },
                {
                  "value": 555,
                  "dateFrom": "2025-06",
                  "dateTo": "2025-06"
                },
                {
                  "value": 0,
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
      "id": "https://rengatokyo.official.ec/",
      "title": "RENGA CLOTHING STORE",
      "url": "https://rengatokyo.official.ec/",
      "highlights": [
        "RENGA CLOTHING STORE\n\n高円寺に2店舗ある古着屋 RENGA CLOTHING STOREです\n\n【南口店】\n\n高円寺駅から徒歩1分\n\n〒166-0003\n\n杉並区高円寺南4-43-9宮澤ビル1階\n\n03-6310-6099\n\nOPEN 14:00-21:00 \n\n【北口店】\n\n高円寺駅から徒歩6分\n\n〒166-0002\n\n杉並区高円寺北3-10-3酒井荘1階\n\nOPEN 14:00-21:00 どちらの店舗も【Instagramのフォロワー様10%OFF】させて頂きます。 ※店頭販売のみ ※お会計時にフォロー中の画面をご提示ください ※WEB SHOPの10%OFFは現在行っておりません。\n\n- \n\n「通販の注意事項」必ずお読みください。\n\n¥7,777($49.58)\n\nSOLD OUT\n\n当店の通販ご利用の際の注意事項になります。 必ずお読み頂きご理解いただいた上でご購入お願い致します。 ※ご注文確定後のキャンセルは出来ません。 ※ご注文確定後のお支払い方法の変更は出来ません。 ※古着の為、返品交換は出来ません。 ※店頭でも販売している為、時間差で売り切れてしまう場合もございます。 ※お取り置きは出来ません。 ※お届け希望日の指定は選択出来る日付以外は受け付けておりません。 ※置き配は対応しておりません。 ※掲載商品の画像は、ご覧になられている端末や周囲の環境により実際の色と異なる場合がございます。 ※商品代引をご希望の方はInstagramのメッセージにてご連絡をお願い致します。 以上をご了承いただき、ご不明点は事前にお問い合わせいただき、ご納得いただいた上でご購入をお願い致します。 ※9,999円以下の場合は以下の送料が発生致します 【配送料】 北海道 860円 東北 720円 関東 660円 信越 700円 東海 北陸 700円 関西 700円 中国、四国 830円 九州 850円 沖縄、離島は別途料金がかかる場合がございますので事前にお問い合わせください。\n-\n\n...\n\n”TIME AND TRU“ Oversized Quilting Jacket\n\n¥9,900($63.11)\n\n【こちらは北口店の入荷商品となります】 ※通販をご利用の際はWEB SHOPのHOMEトップにある《通販の注意事項》を必ずお読みください 【商品詳細】 ”TIME AND TRU“ Oversized Quilting Jacket ¥9900 tax in オールドのキルティングジャケット 落ち着いたサーモンピンクカラーに丸みのあるステッチパターンが特徴的な1着 スタンドカラー仕様でフロントにはボタン付きのパッチポケットを配置 ゆとりのあるシルエットでさまざまなスタイリングに取り入れやすいアイテムです 〈素材〉 表地､裏地 100%コットン 中綿 100%ポリエステル 〈ダメージ等〉 特になし サイズ表記:2X 実寸 肩幅:72.5cm 身幅:79.5cm 着丈:78.5cm 袖丈:56cm\n- \n\n80s ”FILA Magic Line“ Reversible Vest THERMORE\n\n¥7,900($50.36)\n\n【こちらは北口店の入荷商品となります】 ※通販をご利用の際はWEB SHOPのHOMEトップにある《通販の注意事項》を必ずお読みください 【商品詳細】 80s ”FILA Magic Line“ Reversible Vest THERMORE ¥7900 tax in 80年代にフィラが展開していたプロダクトライン､マジックラインのリバーシブルベスト 抽象的な総柄のフリース面とシンプルなキルティング面で構成された1着 防寒性に長けているイタリアの高機能中綿メーカー､サーモアを使用しています 〈素材〉 キルティング面 65%コットン 35%ナイロン フリース面 100%ポリエステル 〈ダメージ等〉 特になし サイズ表記:USA 44 実寸 肩幅:57.5cm 身幅:66cm 着丈:71cm\n-\n\n...\n\n”C.E.SCHMIDT WORK WEAR“ L/S Ombré Heavy Flannel Shirt\n\n¥6,900($43.99)\n\n【こちらは北口店の入荷商品となります】 ※通販をご利用の際はWEB SHOPのHOMEトップにある《通販の注意事項》を必ずお読みください 【商品詳細】 ”C.E.SCHMIDT WORK WEAR“ L/S Ombré Heavy Flannel Shirt ¥6900 tax in アメリカの農耕･資材用品チェーンストア「Tractor Supply Co.」がかつて展開していたハウスブランド､C.E.シュミットワークウェアのオンブレヘビーフランネル くすんだブルー×ブラックのオンブレチェックにホワイトとイエローのラインが入る1着 ゆったりしたサイズ感なのでインナーにスウェットやニットを仕込んでも◎ 〈素材〉 表記なし 〈ダメージ等〉 特になし サイズ表記:なし 実寸 肩幅:55.5cm 身幅:73.5cm 着丈:76cm 袖丈:63cm\n-\n\n...\n\n“SONOMA” L/S Ombré Flannel Shirt\n\n...\n\n¥6,900($43.99)\n\n...\n\n【こちらは北口店の入荷商品となります】 ※通販をご利用の際はWEB SHOPのHOMEトップにある《通販の注意事項》を必ずお読みください 【商品詳細】 “SONOMA” L/S Ombré Flannel Shirt ¥6900 tax in アメリカの大型デパートチェーンであるコールズが展開するプライベートブランド､ソノマのネルシャツ ブラック×グレーのオンブレが目を引くアメカジスタイルに欠かせない1着 古くはないですがお手頃なオンブレアイテムです 〈素材〉 100%コットン 〈ダメージ等〉 特になし サイズ表記:L 実寸 肩幅:51.5cm 身幅:63.5cm 着丈:81cm 袖丈:69cm\n-\n\n...\n\n. ... B ... CL ... ING ... in B ... OTHING ... を ... ながらセンスを感じ ... 下 ... の ... の違い ... になっています ... 60%コットン ... 4 ... % ... ダメージ ... にな ... M ... 肩 ... 5 ... 5 ... 着 ... an ... 416"
      ],
      "image": "https://baseec-img-mng.akamaized.net/images/user/logo/9a60ca611a0851ab1629ae0d5837a59b.jpeg?imformat=generic&q=90&im=Resize,width=1200,height=1200,aspect=fit,type=normal;Crop,width=1200,height=1200,gravity=Center,allowExpansion"
    },
    {
      "id": "https://swank-online.com/",
      "title": "SWANK online store",
      "url": "https://swank-online.com/",
      "highlights": [
        "SWANK online store \n\n \n\n \n\n \n\n \n\n \n\n## NEW STUFF \n\n \n\n \n\n1960s USA made pinstripe tailored jacket\n\n¥33,000 ¥33,000 \n\n \n\n \n\n1970s \"CAMPUS\" argyle mohair knit\n\n¥55,000 ¥55,000 \n\n \n\n \n\n1980-90s \"ST.JOHN'S BAY\" tartan shirt\n\n¥14,300 ¥14,300 \n\n \n\n \n\n1970s \"Woolrich\" brown beige check wool shirt\n\n¥20,900 ¥20,900 \n\n \n\n \n\n1980-90s cocoa brown suede leather × knitting jacket\n\n¥27,500 ¥27,500 \n\n \n\n \n\n1970s suede leather laceup pullover\n\n¥32,500 ¥32,500 \n\n \n\n \n\n1950-60s mustard letterd knit cardigan\n\n¥38,500 ¥38,500 \n\n \n\n \n\n1960-70s \"CAMPUS\" double breasted tailored jacket\n\n¥38,500 ¥38,500 \n\n## ABOUT\n\nMen's & Ladies,Unisex SWANK=イケてる、洒落てる、粋な SWANKは、2021年8月にECショップからSTARTし、イベント出店を中心に活動。2024年8月に実店舗をOPENしました。 アイテムは、US物を軸としながらも、年代やブランドなどのいわゆる希少性や付加価値に拘らず、ヴィンテージからレギュラーまで、クラシカルな物、はたまたカルチャーを感じる物からデザイナーズブランドまで幅広く、その時々の気分を尊重したセレクトを心掛けています。 素材や形、サイズ、柄、ディテールなどが一風変わった、何か気になるアイテムと、多種多様なジャンルをMIXしながらも統一感のあるスタイリングを提案、発信し、より多くの方に、古着の面白さは勿論、古着を通してファッションの楽しさをお伝えできればと思います。 年齢、性別等の垣根にとらわれず 個々のスタイルを尊重し 各々が\"イケてる\"と思うアイテムが必ず見つかる筈です。 一点ずつハンドピックで買い付けた商品は、丁寧に検品した後、基本全商品クリーニングし、可能な限りのシミ抜き、プレス、リペアを施し販売しております。 ダメージなどあるものは出来る限り記載しておりますが、文章ではお伝えしきれない古着特有の使用感や経年変化等もございますので、味のある良い雰囲気としてご理解の上ご購入頂きますようお願い致します。\n\n住所\n\n東京都世田谷区世田谷1-17-4\n\n東急世田谷線世田谷駅から徒歩5分\n\n営業時間\n\n月-金 14:00-21:00\n\n土 13:00-21:00\n\n日、祝 13:00-20:00"
      ]
    }
  ],
  "searchTime": 1373.3,
  "costDollars": {
    "total": 0.007,
    "search": {
      "neural": 0.007
    }
  },
  "resolvedSearchType": ""
}
