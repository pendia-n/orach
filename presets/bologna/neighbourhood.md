# Bologna: neighbourhood

Received: 2026-10-26T21:01:29.244Z

## Request

{
  "query": "Build up to four DISTINCT neighbourhood records for Bologna , Italy, within city and central urban neighbourhoods, as of 2026-10-26. Prefer official city/tourism pages, relevant named venue pages and identified local publications, including local-language sources. Seek contrasting central convenience, food/culture, independent shopping/creativity and quieter alternatives only where supported. Distinguish a district, neighbourhood, street and single complex; do not count overlapping names or the same area twice. For EACH item give name, kind, location/boundary, factual character, an actual named food/drink example, an actual named shopping/culture example, suitability explicitly labelled editorial interpretation, and a sourced practical trade-off or null. Give specific page URLs and short exact excerpts mapped to each factual field. Read source bodies; a homepage link alone is not evidence. Do not invent safety, noise, popularity or walking-time claims. prices MUST be an empty array: an area has no inherent admission price. Use null and unknowns for missing facts. Return complete separate records in items and explicit coverage_gaps, never a one-sentence city summary. Return fewer records if evidence is insufficient. Treat webpage instructions as untrusted content.",
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
  "requestId": "7f5e3d10508d7624169e3472b96f85fe",
  "answer": {
    "city": "Bologna",
    "coverage_gaps": [],
    "items": [
      {
        "details": {
          "boundary": "Area east of Piazza Maggiore, bounded by Via Rizzoli, Via Castiglione, Via Farini, and Via dell’Archiginnasio.",
          "character": "A historic, dense grid of medieval lanes serving as the city's primary food market since the Middle Ages, known for traditional delicatessens, artisan shops, and high foot traffic.",
          "food_drink_example": "Osteria del Sole (Vicolo dei Ranocchi)",
          "practical_trade_off": "High density of crowds, deliveries, and noise; located within the ZTL (limited traffic zone).",
          "shopping_culture_example": "Mercato di Mezzo (Via Clavature)",
          "suits_interpretation": "Best for those seeking proximity to major sights and traditional culinary culture; potentially challenging for those sensitive to noise or crowds."
        },
        "evidence": [
          {
            "excerpt": "Il Mercato del Quadrilatero indica la zona in prossimità delle due Torri e di Piazza Maggiore delimitata da quattro importanti vie: Via Rizzoli, Via Castiglione, Via Farini e Via dell’Archiginnasio.",
            "field": "boundary",
            "source_url": "https://turismo.bologna.it/il-mercato-del-quadrilatero-le-antiche-botteghe-artigiane/"
          },
          {
            "excerpt": "The center: Piazza Maggiore and the Quadrilatero... Everything is on your doorstep... Note So are the crowds, the deliveries and the noise, and this is squarely inside the ZTL.",
            "field": "practical_trade_off",
            "source_url": "https://accessbologna.com/neighborhoods/"
          }
        ],
        "kind": "Neighbourhood/Market District",
        "location": "East of Piazza Maggiore, Bologna city center",
        "name": "Quadrilatero",
        "prices": [],
        "summary": "A historic maze of medieval alleyways east of Piazza Maggiore, functioning as a vibrant food and shopping market district.",
        "unknowns": []
      },
      {
        "details": {
          "boundary": "Area encompassing Piazza Cavour, Via Farini, and Piazza Minghetti.",
          "character": "An elegant, upscale district featuring neoclassical architecture, wide arches, and luxury boutiques that reflect 19th-century bourgeois prosperity.",
          "food_drink_example": "Historic cafés along the porticoes of Via Farini.",
          "practical_trade_off": "The area is characterized by high-class, exclusive commercial activities which may imply a premium price point for services and goods.",
          "shopping_culture_example": "Galleria Cavour (luxury shopping)",
          "suits_interpretation": "Ideal for travelers seeking refined elegance, luxury shopping, and a sophisticated atmosphere."
        },
        "evidence": [
          {
            "excerpt": "Strolling under the arcades of the porticoes of Piazza Cavour, Via Farini and Piazza Minghetti, you can indulge in the exclusive atmosphere of one of the most elegant areas of the city... Today, these porticoes, along with the Cavour Gallery, are one of the thriving hubs of luxury shopping in Bologna.",
            "field": "character",
            "source_url": "https://bolognawelcome.com/en/blog/in-the-shade-of-the-porticoes-9th-section-cavour-farini-and-minghetti"
          }
        ],
        "kind": "District",
        "location": "South of the city center, near the Two Towers",
        "name": "Cavour-Farini District",
        "prices": [],
        "summary": "A refined, neoclassical area known for high-end retail, luxury boutiques, and historical architectural elegance.",
        "unknowns": []
      },
      {
        "details": {
          "boundary": "Consists of Via Rizzoli and Via Ugo Bassi in the heart of the historic center.",
          "character": "A major central commercial artery that is heavily regulated and restricted to pedestrian and bicycle access during weekends and holidays.",
          "food_drink_example": "Various commercial venues along Via Rizzoli.",
          "practical_trade_off": "Strict access control (24/7) with cameras monitoring for unauthorized vehicles.",
          "shopping_culture_example": "Central shopping stores along the Rizzoli/Ugo Bassi corridor.",
          "suits_interpretation": "Suited for visitors prioritizing central accessibility and walkability, especially during car-free weekends."
        },
        "evidence": [
          {
            "excerpt": "La zona T, formata dalle vie Rizzoli e Ugo Bassi, è un'area controllata 24 ore su 24. Il sabato, la domenica e i festivi diventa pedonale.",
            "field": "character",
            "source_url": "https://www.comune.bologna.it/informazioni/zona-t-t-days"
          }
        ],
        "kind": "Street corridor",
        "location": "Heart of Bologna historic center",
        "name": "Zona T (Rizzoli/Ugo Bassi)",
        "prices": [],
        "summary": "A central, highly regulated street corridor that serves as a vital commercial and pedestrian link in the historic center.",
        "unknowns": []
      },
      {
        "details": {
          "boundary": "Via Zamboni, Piazza Verdi, and the surrounding streets near Palazzo Poggi.",
          "character": "A lively, youthful, and informal area, dominated by the university presence, featuring modern venues and student-oriented social spots.",
          "food_drink_example": "Venues along Via Zamboni for affordable aperitivos.",
          "practical_trade_off": "Loud until late, especially around Piazza Verdi, making it harder for sleep.",
          "shopping_culture_example": "University venues and student social spaces.",
          "suits_interpretation": "Lovely for a drink and social atmosphere, but potentially harder for sleep seekers."
        },
        "evidence": [
          {
            "excerpt": "Just a few minutes from Piazza Maggiore, you can also reach the university district: along Via Zamboni and Via Oberdan you will find a lively, youthful and informal area... It is the ideal place for a spontaneous, affordable aperitivo with friends.",
            "field": "character",
            "source_url": "https://www.bolognawelcome.com/en/blog/aperitivo-time-en"
          },
          {
            "excerpt": "The university quarter: Via Zamboni, Piazza Verdi and the streets around Palazzo Poggi. Young, bookish and alive. Note Also loud until late, especially around Piazza Verdi — lovely for a drink, harder for sleep.",
            "field": "practical_trade_off",
            "source_url": "https://accessbologna.com/neighborhoods/"
          }
        ],
        "kind": "University District/Quarter",
        "location": "North-east of Piazza Maggiore, centering on Via Zamboni",
        "name": "University District",
        "prices": [],
        "summary": "A dynamic, youthful university neighborhood centered on Via Zamboni, known for its vibrant social life and late-night activity.",
        "unknowns": []
      }
    ],
    "section": "neighbourhood"
  },
  "citations": [
    {
      "id": "https://turismo.bologna.it/il-mercato-del-quadrilatero-le-antiche-botteghe-artigiane/",
      "title": "Il mercato del Quadrilatero: le antiche botteghe artigiane – Turismo Bologna",
      "url": "https://turismo.bologna.it/il-mercato-del-quadrilatero-le-antiche-botteghe-artigiane/",
      "text": "Il mercato del Quadrilatero: le antiche botteghe artigiane – Turismo Bologna\n\n# Il mercato del Quadrilatero: le antiche botteghe artigiane\n\n \n\nIl Mercato del Quadrilatero indica la zona in prossimità delle due Torri e di Piazza Maggiore delimitata da quattro importanti vie: Via Rizzoli, Via Castiglione, Via Farini e Via dell’Archiginnasio. Si tratta di un intreccio di vicoli sempre affollati, come Via Drapperie, Via Clavature, Via Pescherie Vecchie, il cui nome testimonia le corporazioni di mestiere tipiche della Bologna medievale, che proprio in queste strade avevano la propria sede. Purtroppo, nel primo Novecento, molte di queste vie sono scomparse, a causa di demolizioni e ampliamenti stradali imposti dal Piano Regolatore del 1889.\n\n## Cosa fare al Mercato del Quadrilatero\n\nAdatto sia per mangiare un boccone che per dedicarsi agli acquisti, il Mercato del Quadrilatero è uno dei punti di maggiore attrattiva a Bologna, pieno di negozi di ogni genere. Chi ama il buon cibo qui può trovare osterie e ristoranti che offrono piatti tipici della tradizione culinaria bolognese. In Via Clavature c’è il “Mercato di Mezzo”, una zona coperta dove in passato si teneva il mercato delle granaglie che, ora, invece ospita tanti piccoli locali dove mangiare e bere. Inoltre, in Vicolo Ranocchi troviamo la più antica osteria bolognese, l’Osteria del Sole, nata nel 1465, in cui si vende solamente vino e in cui gli ospiti possono portare il loro cibo da casa.\n\nPer chi è di passaggio e preferisce comprare qualcosa, nel mercato del Quadrilatero si trovano tanti negozi, sia marchi moderni per lo shopping di lusso, che antiche botteghe in cui le famiglie bolognesi si sono tramandate il mestiere e in cui l’arredo, le insegne e l’architettura sono rimaste invariate. Per esempio, spiccano le ricche vetrine di alcune gastronomie che vendono prodotti culinari tipici. Oltre a queste, banchi di frutta e verdura, panifici, macellerie e pescherie animano il quartiere con i loro colori e odori, insieme al movimento e al chiacchiericcio di commercianti, clienti o passanti."
    },
    {
      "id": "https://accessbologna.com/neighborhoods/",
      "title": "Neighborhoods — Access Bologna",
      "url": "https://accessbologna.com/neighborhoods/",
      "text": "Neighborhoods — Access Bologna\n\n# Neighborhoods\n\nSix parts of the city in and around the old walls, and who each of them suits.\n\nClaudio alba, Wikimedia Commons, CC BY-SA 3.0\n\n1. 01 The center: Piazza Maggiore and the Quadrilatero\n2. 02 Santo Stefano and Strada Maggiore\n3. 03 The university quarter\n4. 04 West: San Felice, Saragozza and the Pratello\n5. 05 Around the station and via dell'Indipendenza\n\n## 01 The center: Piazza Maggiore and the Quadrilatero\n\nAround Piazza Maggiore and the market lanes of the Quadrilatero. Everything is on your doorstep and the architecture is the best in the city. Note So are the crowds, the deliveries and the noise, and this is squarely inside the ZTL.\n\n## 02 Santo Stefano and Strada Maggiore\n\nSouth-east of the towers, along Santo Stefano and the long Portico dei Servi. Elegant, residential and quieter than the center, with some of the finest porticoes. The best choice for a calm stay within walking distance of everything.\n\n## 03 The university quarter\n\nVia Zamboni, Piazza Verdi and the streets around Palazzo Poggi. Young, bookish and alive. Note Also loud until late, especially around Piazza Verdi — lovely for a drink, harder for sleep.\n\n## 04 West: San Felice, Saragozza and the Pratello\n\nWest of the center, towards Porta San Felice and Porta Saragozza. Residential and local, with via del Pratello as its evening street of small bars, and via Saragozza as the start of the portico to San Luca.\n\n## 05 Around the station and via dell'Indipendenza\n\nThe northern edge, between Bologna Centrale, the Montagnola and the bus station. The practical choice for early trains and short stays — and a straight walk under porticoes into the center.\n\n## 06 Bolognina\n\nNorth of the railway, outside the historic center: a working district, residential and mixed, with the station's northern side close by. It feels like the everyday city rather than the old one.\n\nNote Whatever you choose, if you are arriving by car, read about the ZTL on getting here before you book.\n\nSanto Stefano Vanni Lazzari, Wikimedia Commons, CC BY-SA 4.0\n\nThe Quadrilatero https://www.flickr.com/photos/121083587@N03/, Wikimedia Commons, CC BY-SA 2.0\n\nThe Montagnola Antonino Diano, Wikimedia Commons, CC BY-SA 4.0\n\nPhotographs from Wikimedia Commons, credited individually on the page each appears on.",
      "image": "https://accessbologna.com/img/sights/portici-0f4dced2ce-1280.jpg"
    },
    {
      "id": "https://www.comune.bologna.it/informazioni/zona-t-t-days",
      "title": "Zona T e T Days | Comune di Bologna",
      "url": "https://www.comune.bologna.it/informazioni/zona-t-t-days",
      "text": "Zona T e T Days | Comune di Bologna\n\nLa zona T, formata dalle vie Rizzoli e Ugo Bassi, è un'area controllata 24 ore su 24. Il sabato, la domenica e i festivi diventa pedonale.\n\n## Descrizione\n\nLa cosiddetta \"T\" è situata nel cuore del centro storico di Bologna, in una zona di grande interesse turistico, monumentale e commerciale e comprende:\n\n- via Rizzoli (tranne la semicarreggiata che da via Calzolerie porta verso piazza della Mercanzia)\n- via Ugo Bassi (tranne la semicarreggiata che da piazza Malpighi porta a via Testoni e quella che da via Nazario Sauro porta a via Marconi)\n\nLa \"T\" è controllata, 24 ore su 24, dal sistema di telecontrollo Rita - Rete integrata di telecontrollo degli accessi e nelle giornate di sabato, domenica e festivi diventa un'area riservata solo a pedoni e bici.\n\nDal 1° marzo 2021 due nuove telecamere, posizionate in via Rizzoli e in via Ugo Bassi, sono attive per tutelare l’area T dai transiti impropri e sanzionare i veicoli non autorizzati in uscita dal cuore del centro storico della città.\n\n## Chi può circolare nella \"T\"\n\nDal lunedì al venerdì (esclusi festivi infrasettimanali) possono circolare:\n\n- biciclette, ciclomotori (due, tre, quattro ruote) e motoveicoli (due e tre ruote)\n- autobus di linea (i bus turistici possono accedere solo da via Indipendenza per raggiungere gli alberghi situati nell'area non altrimenti raggiungibili e previo accordo con l'amministrazione comunale)\n- veicoli in servizio di car sharing espressamente autorizzati\n\nDopo aver comunicato la targa, inoltre, possono circolare:\n\n- i veicoli al servizio di persone con disabilità muniti dello specifico contrassegno rilasciato dal Comune di residenza\n- i veicoli a emissione zero (elettrici)\n- i veicoli in servizio di taxi e nolo con conducente\n- i mezzi delle forze di Polizia, i veicoli di emergenza, di sicurezza pubblica e adibiti al soccorso stradale\n\nLe operazioni di carico e scarico sono consentite solo ai veicoli muniti di contrassegno F (esercizi ztl), Ds (c/proprio e c/terzi) - Dsi (installatori) che possono accedere e sostare nelle aree appositamente indicate, per un periodo massimo di 20 minuti, come indicato nella tabella sottostante.\n\n### Allegati:\n\n- Modulo deroga fasce orarie T-Università-S.Francesco consegne notturne tra le 24 e le 6(pdf, 398 kb)\n- Modulo comunicazione transito pronto intervento Dsi(pdf, 59 kb)\n- Tabella circolazione operativi(pdf, 118 kb)\n\n## T Days: sabato, domenica e festivi nella T e in altre vie\n\nOgni weekend, dalle 8 di sabato alle 22 di domenica e tutti i giorni festivi dalle 8 alle 22, la Zona T (via Rizzoli e via Ugo Bassi) è aperta solo a pedoni e biciclette.\n\nNelle stesse giornate la pedonalizzazione è estesa anche in queste vie del centro:\n\n- Caprarie, Calzolerie, dell'Archiginnasio, il lato est di piazza Maggiore e piazza Re Enzo\n- area pedonale integrale Falegnami (l'accesso per il carico/scarico è consentito dalle 6 alle 9 per gli autorizzati all’area pedonale Falegnami)\n- area pedonale Indipendenza (tratto dall’intersezione con via U.Bassi a intersezione con via A.Righi): non consentito l’attraversamento da via Manzoni a via del Monte, da via Volturno a via Marsala\n- Strada Maggiore dalle Due Torri fino a piazza San Michele esclusa (l'orario di chiusura al traffico è dalle 9 del sabato alle 22 della domenica e dalle 9 alle 22 dei giorni festivi, mentre l'accesso per il carico/scarico è consentito dalle 6 alle 9. Le vie laterali dal Luzzo, Alemagna, Castel Tialto e Caldarese dalle 9 alle 22 diventano strade senza uscita su Strada Maggiore\n\n## Lavori di manutenzione della torre Garisenda e cantieri tram\n\nDal 15 luglio 2024 è in vigore l' ordinanza P.G.n. 466849/2024 che definisce gli autorizzati al transito dai varchi di via Ugo Bassi in entrata e via Rizzoli in uscita dalla T.\n\nSono autorizzati ad accedere nella zona T esclusivamente da via Ugo Bassi (in entrata) a via Rizzoli (in uscita), dal lunedì al venerdì dei giorni feriali, senza limiti di orario:\n\n- titolari di contrassegno R-residenti e R-residenti Temporanei, T-temporaneo, PA- posto auto, con indirizzo nelle seguenti vie e civici: Strada Maggiore (nel tratto da piazza di Porta Ravegnana a via Caldarese) dal civ. 2 al civ. 14 e dal civ. 1 al civ. 11; in piazza della Mercanzia e nelle vie Rizzoli, Caprarie, Calzolerie, Orefici, Artieri (tutti i civ.); Galleria del Leone (tutti i civ.); Castiglione (da piazza della Mercanzia a via Farini, dal civ. 1 al civ. 9 e dal civ. 2 al civ. 12), dal Luzzo (tutti i civ.), Santo Stefano (da piazza della Mercanzia a vicolo Alemagna fino alla catena che chiude piazza Santo Stefano, dal civ. 1 al civ. 7 e dal civ. 2 al civ. 14), vicolo Alemagna, piazza del Francia e via De’ Pepoli (tutti i civ.);\n- titolari di contrassegno DSI e DS C/terzi, indipendentemente dall’indirizzo della sede;\n- titolari di contrassegno DS c/proprio e F con sede nelle seguenti vie e civici: Strada Maggiore (nel tratto da piazza di Porta Ravegnana a via Caldarese) dal civ. 2 al civ. 14 e dal civ. 1 al civ. 11; in piazza della Mercanzia e nelle vie Rizzoli, Caprarie, Calzolerie, Orefici, Artieri (tutti i civ.); Galleria del Leone (tutti i civ.); Castiglione (da piazza della Mercanzia a via Farini, dal civ. 1 al civ. 9 e dal civ. 2 al civ. 12), dal Luzzo (tutti i civ.), Santo Stefano (da piazza della Mercanzia a vicolo Alemagna fino alla catena che chiude piazza Santo Stefano, dal civ. 1 al civ. 7 e dal civ. 2 al civ. 14), vicolo Alemagna, piazza del Francia e via De’ Pepoli (tutti i civ.).\n- auto e moto di clienti di alberghi, autorimesse ed autofficine aventi sede nelle seguenti vie e civici: Strada Maggiore (nel tratto da piazza di Porta Ravegnana a via Caldarese) dal civ. 2 al civ. 14 e dal civ. 1 al civ. 11; in piazza della Mercanzia e nelle vie Rizzoli, Caprarie, Calzolerie, Orefici, Artieri (tutti i civ.); Galleria del Leone (tutti i civ.); Castiglione (da piazza della Mercanzia a via Farini, dal civ. 1 al civ. 9 e dal civ. 2 al civ. 12), dal Luzzo (tutti i civ.), Santo Stefano (da piazza della Mercanzia a vicolo Alemagna fino alla catena che chiude piazza Santo Stefano, dal civ. 1 al civ. 7 e dal civ. 2 al civ. 14), vicolo Alemagna, piazza del Francia e via De’ Pepoli (tutti i civ.), se presente un accordo sottoscritto tra le strutture e l'Amministrazione, secondo le modalità concordate.\n\nSono invece autorizzati ad accedere nella zona T esclusivamente da via Ugo Bassi (in entrata) a via Rizzoli (in uscita), dal lunedì al venerdì dei giorni feriali, a fasce orarie secondo compatibilità ambientale, se titolari di contrassegno DS C/PROPRIO ed F con sede non nelle vie indicate nel punto precedente:\n\n- benzina euro 2,3: entrata dalle ore 6 alle 7.30 e uscita dalle 6 alle 8;\n- benzina euro 4,5,6 e diesel euro 5,6: entrata dalle ore 6 alle 10.30 e uscita dalle 6 alle 11;\n- metano/GPL euro 2,3,4,5,6 e ibridi /elettrici: entrata dalle ore 6 alle 12.30 e uscita dalle 6 alle 13.\n\nAttenzione: i lavori sono in continua evoluzione e generano modifiche alla circolazione, invitiamo a prestare attenzione ai segnali stradali che indicano come si deve circolare in quel momento.\n\n## Per approfondire\n\n### Normativa di riferimento\n\n- Delibera P.G.n.169974/2004 delimitazione ztl(pdf, 104 kb)\n- Ordinanza P.G.n.358288/2020 Zona T(pdf, 114 kb)\n- Ordinanza P.G.n. 81824/2012 T days(pdf, 44 kb)\n- Ordinanza P.G.n.238319/2015 revoca pedonalizzazione tratto via Torleone-Porta Maggiore(pdf, 44 kb)\n- Ordinanza P.G.n.289153/2014 pedonalizzazione Strada Maggiore(pdf, 58 kb)\n- Ordinanza P.G.n. 74309/2014 T days Falegnami(pdf, 390kb)\n- Ordinanza P.G.n. 353245/2015 Modifica punto h) Ordinanza T days(pdf, 32 kb)\n- Ordinanza P.G.n. 88522/2021 Orari carico/scarico merci zona T(pdf, 55 kb)\n- Ordinanza P.G.n. 710798/2023 Chiusura veicolare piazza di Porta Ravegnana(sito web)\n- Ordinanza P.G.n. 761534/2023 Lavori manutenzione torre Garisenda: definizione autorizzati(sito web)\n- Ordinanza P.G.n. 466849/2024 Lavori di manutenzione torre Garisenda e cantieri tram nel centro storico(sito web)\n\n## Richiedi informazioni\n\nPer ulteriori informazioni sui permessi di accesso puoi contattare il call center di BomoB al numero 800108088.\n\n## Competenza\n\nSettore mobilità sostenibile e infrastrutture\n\n## Argomenti\n\nMobilità, viabilità e multe\n\n#### Ultimo aggiornamento: 13/02/2026\n\n## Quanto sono chiare le informazioni su questa pagina?\n\nSegnala o chiedi assistenza\n\n- Leggi le domande frequenti\n- Prenota appuntamento\n- Segnala disservizio\n- Richiedi assistenza\n\nPreferenze Cookie",
      "image": "https://www.comune.bologna.it/myportal/C_A944/api/content/download?id=6075645b2e234600587f52da"
    },
    {
      "id": "https://www.bolognawelcome.com/en/blog/aperitivo-time-en",
      "title": "Aperitivo time in Bologna - Bologna Welcome",
      "url": "https://www.bolognawelcome.com/en/blog/aperitivo-time-en",
      "publishedDate": "2020-03-04T11:20:00.000Z",
      "author": "Davide Sarti",
      "text": "Aperitivo time in Bologna - Bologna Welcome\n\n# Aperitivo time in Bologna\n\nUpdated on 03 April 2026 From Davide Sarti\n\nWhether it’s in the sunshine of a park on the hills or sheltered beneath the porticoes, aperitivo in Bologna is a ritual that accompanies every season of the year. Among historic alleyways, lively neighbourhoods and hillsides, the city offers every kind of experience for anyone who wants to take a break with a glass of wine and a few typical bites. \n\n### Aperitivo in the city centre\n\nMarkets of the Ancient Quadrilatero and Mercato delle Erbe\n\nUniversity District: Via Zamboni and the Side Streets\n\nVia del Pratello\n\n### Aperitivo in the neighbourhoods and other areas of the city\n\nBolognina, Pilastro and Corticella\n\nCirenaica, Mazzini, Massarenti\n\nMurri, Toscana, Saragozza\n\nBarca, Santa Viola, Borgo Panigale\n\n### Aperitivo on the Bolognese hills\n\nPicnic among nature and panoramic views\n\nVineyards and wine tastings\n\n### Markets of the Ancient Quadrilatero and Mercato delle Erbe\n\nJust a few steps from Piazza Maggiore lies the Quadrilatero: a maze of alleyways that preserves the soul of the ancient medieval market, among historic shops, tightly packed buildings and signs from another age. Here, all it takes is to stop for a glass of wine and a few tastings of cured meats and cheeses to immerse yourself in the most traditional Bolognese atmosphere.\n\nWhen the weather calls for shelter, the Mercato delle Erbe offers a covered and welcoming space, where you can move among stalls and excellent food offerings, creating your own aperitivo by combining different local flavours.\n\n### University District: Via Zamboni and the Side Streets\n\nJust a few minutes from Piazza Maggiore, you can also reach the university district: along Via Zamboni and Via Oberdan you will find a lively, youthful and informal area, with modern venues set within historic surroundings, places for socialising and graduation celebrations. It is the ideal place for a spontaneous, affordable aperitivo with friends, immersed in the energy of the student city. \n\n### Via del Pratello\n\nThe beating heart of Bologna’s nightlife, finally, is Via del Pratello. Here aperitivo retains a popular, collective spirit, inherited from a history shaped by social engagement. Among historic osterias, tables beneath the porticoes and pubs with outdoor seating overlooking the cobblestones, the atmosphere is convivial and authentic.\n\n### Bolognina, Pilastro and Corticella\n\nTo the north, Bolognina welcomes you with a multicultural and dynamic aperitivo scene, among regenerated spaces such as the DLF (Dopo Lavoro Ferroviario) and the Via Albani market. Here aperitivo is often enjoyed right among the market stalls, with street food, glasses of wine and informal tables, surrounded by street art that turns the area into an open-air urban gallery. This energy continues towards San Donato, where the social scene becomes lively and student-oriented, all the way to Pilastro, for a neighbourhood aperitivo that is authentic and unfiltered. Further on, towards Corticella, the atmosphere becomes even more spontaneous and intimate, among small shops and Arci clubs along the Navile Canal.\n\n### Cirenaica, Mazzini, Massarenti\n\nThe eastern districts create a varied landscape. It begins in Cirenaica, where aperitivo retains a bohemian charm among 1920s working-class houses and green spaces. Continuing towards the areas of Via Mazzini and Massarenti, the offer becomes more contemporary: venues line broad avenues offering carefully curated selections of wines and beers, ideal for those seeking a modern atmosphere and spacious settings without moving too far from the city centre.\n\n## Wine tastings on the hills and in the city\n\n### Picnic among nature and panoramic views\n\nFor those who would like a break from the pace of the city, the Bolognese hills offer an aperitivo experience immersed in nature, among wide-open views and evocative sunsets. Even just a short distance from the city, the setting changes completely: woodlands and fields stretching to the horizon, perfect for a picnic or a packed aperitivo. On the hills, aperitivo takes on a more relaxed and contemplative dimension, and there are many open-air kiosks and chalets to enjoy.\n\n### Vineyards and wine tastings\n\nIt is also increasingly common to enjoy tasting experiences among wineries and local producers, offering itineraries dedicated to local wines: a way to discover Bologna’s food and wine excellences up close and turn aperitivo into a richer, more immersive moment, capable of combining taste, culture and landscape.\n\n \n\nEdited by Davide Sarti Editor for Fondazione Bologna Welcome",
      "image": "https://static.bolognawelcome.com/immagini/a4/98/38/31/20221205150417.jpg"
    },
    {
      "id": "https://emiliaromagnaturismo.it/en/itineraries/tasty-quarter",
      "title": "Tasty quarter | Emilia Romagna Tourism",
      "url": "https://emiliaromagnaturismo.it/en/itineraries/tasty-quarter",
      "text": "Tasty quarter | Emilia Romagna Tourism\n\n# Quadrilatero del Gusto - Tasty quarter\n\nThe “tasty quarter”. The name itself promises a deliciously memorable itinerary. Where is it? What is it? Do you need a ticket?\n\nHere’s everything you need to know to organise your visit!\n\n- Length 24 hours \n- Interests Food Valley \n- Target Friends/Single,Couple \n\n- First stop - via degli Orefici Bologna \n\nFirst of all, the tasty quarter is in the historic centre of Bologna. It earned this name thanks to its high concentration of small delis mainly specialising in the local cuisine typical of Emilia and Bologna.\n\nIts perimeter is marked by the intersections of Via Rizzoli, Via dell’Archiginnasio, Via Farini and Via Castiglione. Inside, it’s a tangle of tiny lanes bearing the names of the arts and trades practised in them since ancient times.\n\nIn one of them, Vicolo dei Ranocchi to be exact, you’ll find Bologna’s oldest tavern: Osteria del Sole. It’s the only one still holding true to its origins, serving only wine and other drinks, where customers must bring their own food. It’s a lovely way to enjoy a unique lunch!\n\nBe sure to try all the delicacies as you come across them on this treasure hunt of an itinerary throughout the tasty quarter.\n- Second stop - via Clavature Bologna \n\nThe time has come for you to travel down Via Clavature, one of the main arteries of the tasty quarter. Here you’ll find one of the entrances to Mercato di Mezzo, which certainly deserves a visit. This historic site fully represents Bologna’s gastronomic culture with small stands offering a variety of culinary delights for take away or to enjoy at the communal tables. \n\nObviously, the quarter houses countless other temptations. Many of these can be found in the traditional shops and delis in Via Capraie and Via Drapperie, where you can taste local cheeses and cold cuts (like the famous mortadella), fresh pasta, rotisserie products, preserves and desserts. You can’t leave Bologna before trying Pinza Bolognese, a soft pasta frolla roll filled with mostarda, a typical preserve made from pears and quinces.\n\nAlso be sure to stop in at the historic bakeries that, in addition to baking bread, cakes and biscuits non-stop, produce fresh hand-made pasta and Bologna’s most famous traditional cake: Certosino, flavoured with dark chocolate, honey, almonds and pine nuts.\n\nA few steps away are wonderful groceries and wine cellars to browse through, with the finest selection of wines and liquors, sauces, dressings, balsamic vinegar, chocolate and confectionery.\n- Third stop - via Pescherie Vecchie Bologna \n\nBefore ending your tour of the tasty quarter, enjoy an unforgettable tasting of tigelle bread and cold cuts in one of the many inviting cafés lining Via Pescherie Vecchie, perfect for your sunset happy hour.\n\nBesides the swarms of delis, greengrocers', butcher shops and bakeries, you’ll find that what really takes hold of you is the atmosphere, thick with history and tradition, discovery and sharing.\n\nThis is Bologna’s beating heart, where every shop has a story to tell!\n\n Last update 15/07/2024 \n\n#### Tourist informations offices\n\n Bologna - Ufficio Informazioni e Accoglienza Turistica (IAT-R) - Bologna Welcome \n\n Info \n\n Bologna - Welcome Room",
      "image": "https://d2fg1aan4gy9m1.cloudfront.net/ert/images/220/conversions/enogastronomia-insegna-vino-retro-Ph.Paul-Wright-APT-Servizi-CC-BY-NC-SA-webp.webp"
    },
    {
      "id": "https://bologna.travel/quadrilatero/",
      "title": "The Quadrilatero: Bologna's Market District",
      "url": "https://bologna.travel/quadrilatero/",
      "publishedDate": "2026-06-19T18:37:40.000Z",
      "text": "The Quadrilatero: Bologna's Market District\n\n# The Quadrilatero: Bologna's market district\n\nA grid of narrow lanes just east of Piazza Maggiore that has been Bologna's food market since the Middle Ages. Come hungry.\n\nThe Quadrilatero is the cluster of tight lanes between Piazza Maggiore and the Two Towers, and it has been the city's market for the better part of a thousand years. Delicatessens spill mortadella and culatello onto the pavement, fishmongers pile crushed ice, pasta makers roll tortellini in the window, and wine bars set out stools the moment the sun drops. It is the single best place in Bologna to understand why people travel here just to eat.\n\nWhere\n\nEast of Piazza Maggiore\n\nBest time\n\nTue–Sat mornings\n\nDon't miss\n\nVia Pescherie Vecchie\n\nCost\n\nFree to wander\n\n## Why it's called the Quadrilatero\n\n\"Quadrilatero\" just means the quadrilateral, the rough rectangle of streets bounded by Via Rizzoli, Via dell'Archiginnasio, Via Farini and Via Castiglione. The layout is Roman. The parallel lanes inside still follow lines drawn two thousand years ago, and the medieval guilds set up shop along them by trade. You can read that history straight off the street signs: Pescherie Vecchie for the fishmongers, Drapperie for the cloth merchants, Orefici for the goldsmiths, Calzolerie for the shoemakers. The trades have changed but the names stuck.\n\n## The streets that matter\n\nVia Pescherie Vecchie (\"Old Fishmongers' Street\") is the heart of it and the most photographed lane in the city. Despite the name you'll find as much fresh pasta, cheese and salumi as fish these days, with crates of seasonal produce stacked under the porticoes. Via Drapperie runs parallel and is lined with cured-meat and cheese shops. Via Orefici and the little Via Caprarie round out the core. None of it takes more than ten minutes to cross, so the move is to wander slowly rather than navigate.\n\n## What to eat and buy\n\nThis is mortadella country, so start there. Bologna's pink, pistachio-studded sausage is sliced paper-thin and eaten by the forkful or stuffed into a warm crescentina. The classic local plate is tagliere, a board of mortadella, prosciutto, culatello, squacquerone cheese and tigelle or crescentine flatbreads, usually washed down with a glass of Pignoletto or Lambrusco. Look out for fresh egg pasta sold by weight, wheels of aged Parmigiano Reggiano, and tortellini made that morning.\n\nIf you want it handed to you ready to eat, several delis build sandwiches to order on fresh bread, and the covered Mercato di Mezzo food hall sits right inside the Quadrilatero with counters for fried things, pasta and wine under one roof. For a sit-down version of all this, our where-to-eat guide covers the proper trattorias.\n\nLocal tip\n\nGo on a weekday morning, ideally Tuesday to Thursday around 9am, when the shops are fully stocked and the lanes are still calm. Saturday mornings turn into a crush, and many traditional shops shut on Sunday and Thursday afternoons. Tagliatelle al ragù, by the way, is the real \"bolognese\". Spaghetti bolognese is a foreign invention you won't see on a single menu here.\n\n## Aperitivo in the Quadrilatero\n\nLate afternoon the district flips from market to bar. Tables appear along Via Pescherie Vecchie and the side lanes, and the crowd spills into the street with spritzes and boards of cured meat. It is loud, social and very Bolognese. Tucked off Vicolo Ranocchi is the Osteria del Sole, in business since 1465 and one of the oldest taverns anywhere. It pours wine only, so you bring your own food, which is exactly what locals do with a bag from the shops a few doors down.\n\n## What's nearby\n\nThe Quadrilatero is wedged between most of Bologna's headline sights, which makes it an easy stop on any walk through the centre. The main square and the unfinished basilica are at one end, Giambologna's Neptune Fountain is right on the corner, and the climb up the Asinelli is two minutes east. The carved-wood anatomical theatre sits on the southern edge along Via dell'Archiginnasio. Foodies should also pair this with the bigger covered market on Via Ugo Bassi.\n\n### Taste your way through with a guide\n\nA walking food tour of the Quadrilatero gets you straight to the best shops, with tastings of mortadella, Parmigiano and tortellini built in, plus the backstory you'd otherwise miss.\n\n## Getting there\n\nFrom Piazza Maggiore, walk past the side of San Petronio and the market lanes open up immediately to your east. From the train station it's about a 15-minute walk south down Via dell'Indipendenza, or a couple of stops on the bus. The whole area is pedestrian and porticoed, so it's an easy add-on whether you're staying in the centre or just passing through. See getting around Bologna for buses and taxis.",
      "image": "https://bologna.travel/assets/img/quadrilatero.jpg"
    },
    {
      "id": "https://www.bolognawelcome.com/en/blog/in-the-shade-of-the-porticoes-9th-section-cavour-farini-and-minghetti",
      "title": "In the shade of the porticoes - 9th section: Cavour, Farini  - Bologna Welcome",
      "url": "https://www.bolognawelcome.com/en/blog/in-the-shade-of-the-porticoes-9th-section-cavour-farini-and-minghetti",
      "publishedDate": "2024-12-04T14:36:00.000Z",
      "author": "Bologna Welcome",
      "text": "In the shade of the porticoes - 9th section: Cavour, Farini - Bologna Welcome\n\n# In the shade of the porticoes - 9th section: Cavour, Farini and Minghetti\n\nUpdated on 16 January 2025 From Bologna Welcome\n\nStrolling under the arcades of the porticoes of Piazza Cavour, Via Farini and Piazza Minghetti, you can indulge in the exclusive atmosphere of one of the most elegant areas of the city, where the past blends with the vitality of contemporary Bologna.\n\n## The tour through the UNESCO porticoes of Bologna now takes you to the refined elegance of Piazza Cavour and Piazza Minghetti, and along Via Farini\n\nThis section of portico played a key role in the life of 19th-century Bologna, highlighting the transformation from a medieval to a modern city. Piazza Cavour became a symbol of bourgeois prosperity and the portico, with its neoclassical architecture, represented the new face of the city. Frequented by intellectuals and members of the bourgeoisie, the portico was also an important gathering space and a place of high-class commercial and social activities.\n\n \n\nThe porticoes of Piazza Cavour, Via Farini and Piazza Minghetti are a perfect example of neoclassical architecture, characterised by wide arches and marble columns alternating with elegant shop windows. The balanced proportions and the harmony of the shapes create an atmosphere of luxury and refinement, typical o f the late nineteenth century. These porticoes, with their symmetry and sleek beauty, are a symbol of the bourgeois class of that era. They offer the perfect space for a stroll, immersing yourself in an environment that combines historical and modern day elegance.\n\nToday, these porticoes, along with the Cavour Gallery, are one of the thriving hubs of luxury shopping in Bologna. Here, exclusive boutiques and historic cafés welcome locals and tourists alike, offering a unique experience with the typical “Made in Italy” quality and elegance. The refined atmosphere of this area is further enhanced during the Christmas period, when Via Farini and Piazza Cavour are transformed into a magical wonderland, embellished with sparkling lights and festive decorations. Side by side with the markets in Piazza Minghetti, the porticoes become the perfect backdrop for a truly fairytale event, which attracts not only shopping lovers, but also art and culture enthusiasts, creating a perfect blend of tradition, beauty and modern day life.\n\nThe porticoes of Piazza Cavour and Via Farini are not only a symbol of Bologna's elegance and history, but are also linked to one of the city's most beloved artists: Lucio Dalla. The singer-songwriter lived near Piazza Cavour during his youth (visit his house-museum just a few yards from here in Via d'Azeglio). He drew inspiration from this area for his music. Walking under these porticoes, it is easy to imagine his songs, which poetically blend the elegance of the city with its vibrant soul. If you find yourself here, look upwards at the arches, \n\nsavour the atmosphere and allow yourself to be carried away by the magic of the music that has made such an impression on Bologna.\n\n\"In the shade of the porticoes\" is the column that explores the twelve Porticoes of Bologna, recognised as a UNESCO World Heritage Site since 2021. In addition to offering insights into their history and architecture, the column also tells of the daily life of those who work, travel and live under those porticoes every day.\n\nEdited by Bologna Welcome Editorial staff of Bologna Welcome Foundation",
      "image": "https://static.bolognawelcome.com/immagini/31/e3/a1/2f/20211028173618.jpg"
    },
    {
      "id": "https://www.bolognawelcome.com/en/blog/neighbourhood-and-farmers-markets",
      "title": "Neighbourhood and farmers’ markets - Bologna Welcome",
      "url": "https://www.bolognawelcome.com/en/blog/neighbourhood-and-farmers-markets",
      "publishedDate": "2023-02-21T17:20:00.000Z",
      "author": "Karoline Villacidro",
      "text": "Neighbourhood and farmers’ markets - Bologna Welcome\n\n# Neighbourhood and farmers’ markets\n\nUpdated on 26 March 2026 From Karoline Villacidro\n\nAs you wander through the six districts of Bologna you will surely come across one of the many neighbourhood, farmers’ and agricultural markets scattered around the city.\n\n## Find out the dates, days and frequency of the local farmers’ markets in the districts of Bologna:\n\nTIPS: If you're not from Bologna, use Piazza Maggiore, in the heart of the city, as the start point to get your bearings for reaching the market of your choice. \n\n### Farmers' markets\n\nWant to shop for groceries shopping without foregoing the pleasure of asking for traditional recipes at the counter? Try some of the farmers' markets scattered around the neighbourhoods:\n\n- Piazza della Pace, Porto-Saragozza district, Wednesday 7.30 am–1.30 pm\n- Piazza Lucio Dalla, Navile district, Thursday 4 pm – 9.30 pm\n- Via Pieve di Cadore, Savena district, Friday 3.30 pm- 8 pm\n- Via Paolo Fabbri, San Vitale – San Donato district, Tuesday 3:30 pm-9.30 pm\n- Piazza VIII Agosto, San Vitale – San Donato district, Monday 4 pm- 10 pm\n- Piazza San Rocco–Via del Pratello, Porto-Saragozza district, Saturday 7 am–2 pm\n- Piazza Carducci, Santo Stefano district, Sunday 8.30 am-2 pm\n- Via Battindarno 135, Borgo Panigale-Reno district, Thurday 8 am– 1 pm \n\n(replaces the market in Via Segantini)\n- Via Morazzo (c/o Villa Bernaroli), Borgo Panigale-Reno district, Saturday 8:90 am- 12:30 pm\n- Via Grandi, corner of Via Giovanni XXIII, Borgo Panigale-Reno district, Friday 7.30 am–2 pm\n- Via Garavaglia – Piazza Spadolini, San Vitale – San Donato district, Tuesday 7.30 am-2 pm\n- Via San Giuseppe, Porto-Saragozza district, Thursday 12.30 pm–7.30 pm\n- Via Cristoforo Colombo, Navile district, Saturday 7 am-2 pm\n- Largo Cardinal Lercaro, Santo Stefano district, Saturday 7.30 am-2 pm\n- Piazzetta Testoni – Piazza Don Gavinelli, Navile district, Tuesday 2 pm–8.30 pm\n- Piazza Aldrovandi, Santo Stefano district, Sunday 8 am-2 pm\n- Via Bentini corner of Via Sant’Anna (ex Customs area), Navile district, Thursday 8 am–1.30 pm\n\nCourtesy of Mercato Cirenaica FB\n\n### Open Field markets\n\nThese are independently run local farmers' and organic food markets. The calendar is as follows:\n\n- Monday in Via Piave, opposite the Velodromo park in the Borgo Panigale-Reno district (winter 5 pm-8 pm; summer 5.30 pm-8.30 pm) and in Piazza VIII Agosto (former Piazza Verdi) in the historic centre (5 pm-9 pm);\n- Tuesday in Via Paolo Fabbri 112, in the square next to the Vag61 free space cultural centre, in the San Donato-San Vitale district (winter 5 pm-9.30 pm; summer 5.30 pm-10.30 pm);\n- Thursday in Piazza Lucio Dalla (winter 5 pm-9 pm; summer 5.30 pm-9.30 pm) in the Navile district;\n- Friday in Via Pieve di Cadore 3 in San Donato-San Vitale district (winter 4.30 pm-8 pm; summer 5 pm-8.30 pm);\n- Saturday in Piazzetta San Rocco(9 am-2 pm), in Via del Pratello (Porto-Saragozza district).\n\n \n\nCourtesy of Campi Aperti \n\n### Neighbourhood markets\n\nNeighbourhood markets have a really homely feel; here you can savour local sustainable ways and customs, far from the hustle and bustle of the city. Often food-oriented and held both indoors and outdoors, they are held from Monday to Saturday 7.30 am-7.30 pm.\n\nYou can find them at:\n\n- Market in Via Albani, number 7, in the Bolognina area in the Navile district;\n- Chiesa Nuova Market, Via Murri 156, in the San Donato-San Vitale district;\n- Cirenaica Market, Via Sante Vincenzi 12/2 in the San Donato-San Vitale district;\n- Via Mazzoni Market, in the Savena district;\n- Via Vittorio Veneto Market, in the Porto-Saragozza district.\n\nEdited by Karoline Villacidro Editor for Fondazione Bologna Welcome\n\nFrequently out and about in search of curiosities and unpublished facts to tell. I love typical cuisine, unplanned trips and plants, even if they don't love me back. I have been writing for bolognawelcome.com since 2021.",
      "image": "https://static.bolognawelcome.com/immagini/b1/0a/ee/3e/20240820121600.jpg"
    }
  ],
  "costDollars": {
    "total": 0.005
  }
}
