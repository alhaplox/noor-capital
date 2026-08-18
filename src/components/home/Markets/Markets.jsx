import {
  useMemo,
  useState,
} from "react";

import "./Markets.css";


/* =========================================================
   MULTILINGUAL CONTENT
========================================================= */

const marketCopy = {
  en: {
    eyebrow:
      "A world of investment opportunities",

    title:
      "Access over 1,000 instruments across global markets through our advanced platforms, tailored for your global investment strategy",

    tabs: [
      "Forex",
      "Commodities",
      "Indices",
      "Energies",
      "Shares CFDs",
      "Cash Equities",
    ],

    headers: [
      "Symbol",
      "Bid",
      "Ask",
      "High",
      "Low",
      "GRA",
    ],
  },


  tr: {
    eyebrow:
      "Yatırım fırsatları dünyası",

    title:
      "Global yatırım stratejinize uygun gelişmiş platformlarımız üzerinden dünya piyasalarında 1.000'den fazla enstrümana erişin",

    tabs: [
      "Forex",
      "Emtialar",
      "Endeksler",
      "Enerjiler",
      "Hisse CFD'leri",
      "Nakit Hisseler",
    ],

    headers: [
      "Sembol",
      "Alış",
      "Satış",
      "En Yüksek",
      "En Düşük",
      "GRA",
    ],
  },


  ru: {
    eyebrow:
      "Мир инвестиционных возможностей",

    title:
      "Получите доступ к более чем 1 000 инструментам на мировых рынках через наши современные платформы, адаптированные под вашу глобальную инвестиционную стратегию",

    tabs: [
      "Форекс",
      "Сырьевые товары",
      "Индексы",
      "Энергоресурсы",
      "CFD на акции",
      "Акции",
    ],

    headers: [
      "Символ",
      "Bid",
      "Ask",
      "Макс.",
      "Мин.",
      "GRA",
    ],
  },


  ar: {
    eyebrow:
      "عالم من فرص الاستثمار",

    title:
      "تمتع بالوصول إلى أكثر من 1,000 أداة عبر الأسواق العالمية من خلال منصاتنا المتقدمة والمصممة لتناسب استراتيجيتك الاستثمارية العالمية",

    tabs: [
      "الفوركس",
      "السلع",
      "المؤشرات",
      "الطاقة",
      "عقود فروقات الأسهم",
      "الأسهم النقدية",
    ],

    headers: [
      "الرمز",
      "الشراء",
      "البيع",
      "الأعلى",
      "الأدنى",
      "GRA",
    ],
  },
};


/* =========================================================
   FRONTEND DEMO DATA
   Later replace with market-data API.
========================================================= */

const marketData = [
  /* FOREX */

  [
    {
      symbol: "EUR/USD",
      bid: "1.08410",
      ask: "1.08426",
      high: "1.08642",
      low: "1.08021",
      gra: "+0.21%",
    },

    {
      symbol: "GBP/USD",
      bid: "1.27680",
      ask: "1.27704",
      high: "1.27984",
      low: "1.27156",
      gra: "+0.14%",
    },

    {
      symbol: "USD/JPY",
      bid: "147.320",
      ask: "147.351",
      high: "148.020",
      low: "146.880",
      gra: "-0.18%",
    },

    {
      symbol: "AUD/USD",
      bid: "0.65820",
      ask: "0.65837",
      high: "0.66012",
      low: "0.65541",
      gra: "+0.09%",
    },

    {
      symbol: "USD/CAD",
      bid: "1.37241",
      ask: "1.37269",
      high: "1.37520",
      low: "1.36984",
      gra: "-0.12%",
    },

    {
      symbol: "USD/CHF",
      bid: "0.86618",
      ask: "0.86636",
      high: "0.86904",
      low: "0.86392",
      gra: "+0.07%",
    },
  ],


  /* COMMODITIES */

  [
    {
      symbol: "XAU/USD",
      bid: "2461.90",
      ask: "2462.40",
      high: "2478.10",
      low: "2438.70",
      gra: "+1.18%",
    },

    {
      symbol: "XAG/USD",
      bid: "28.740",
      ask: "28.781",
      high: "29.140",
      low: "28.210",
      gra: "+0.62%",
    },

    {
      symbol: "COPPER",
      bid: "4.120",
      ask: "4.126",
      high: "4.184",
      low: "4.082",
      gra: "-0.31%",
    },

    {
      symbol: "PLATINUM",
      bid: "986.40",
      ask: "987.10",
      high: "995.20",
      low: "975.60",
      gra: "+0.27%",
    },

    {
      symbol: "PALLADIUM",
      bid: "937.10",
      ask: "939.20",
      high: "948.70",
      low: "921.40",
      gra: "+0.19%",
    },
  ],


  /* INDICES */

  [
    {
      symbol: "NASDAQ",
      bid: "19474",
      ask: "19482",
      high: "19570",
      low: "19284",
      gra: "+0.73%",
    },

    {
      symbol: "S&P 500",
      bid: "5546",
      ask: "5548",
      high: "5561",
      low: "5512",
      gra: "+0.42%",
    },

    {
      symbol: "DOW JONES",
      bid: "40114",
      ask: "40126",
      high: "40284",
      low: "39861",
      gra: "-0.16%",
    },

    {
      symbol: "DAX",
      bid: "18492",
      ask: "18499",
      high: "18572",
      low: "18344",
      gra: "+0.34%",
    },

    {
      symbol: "FTSE 100",
      bid: "8294",
      ask: "8299",
      high: "8330",
      low: "8241",
      gra: "+0.11%",
    },
  ],


  /* ENERGIES */

  [
    {
      symbol: "BRENT",
      bid: "82.14",
      ask: "82.20",
      high: "82.91",
      low: "81.32",
      gra: "+0.58%",
    },

    {
      symbol: "WTI",
      bid: "78.82",
      ask: "78.88",
      high: "79.41",
      low: "77.94",
      gra: "+0.44%",
    },

    {
      symbol: "NAT GAS",
      bid: "2.180",
      ask: "2.191",
      high: "2.244",
      low: "2.142",
      gra: "-0.71%",
    },

    {
      symbol: "GASOIL",
      bid: "754.25",
      ask: "755.10",
      high: "761.40",
      low: "748.80",
      gra: "+0.19%",
    },
  ],


  /* SHARES CFDs */

  [
    {
      symbol: "AAPL",
      bid: "224.31",
      ask: "224.42",
      high: "226.18",
      low: "221.54",
      gra: "+0.64%",
    },

    {
      symbol: "NVDA",
      bid: "128.42",
      ask: "128.51",
      high: "131.02",
      low: "125.18",
      gra: "+1.92%",
    },

    {
      symbol: "TSLA",
      bid: "221.10",
      ask: "221.31",
      high: "225.84",
      low: "217.60",
      gra: "-0.53%",
    },

    {
      symbol: "AMZN",
      bid: "186.74",
      ask: "186.88",
      high: "188.49",
      low: "184.21",
      gra: "+0.82%",
    },

    {
      symbol: "META",
      bid: "526.44",
      ask: "526.71",
      high: "531.20",
      low: "520.80",
      gra: "+1.04%",
    },
  ],


  /* CASH EQUITIES */

  [
    {
      symbol: "MSFT",
      bid: "421.18",
      ask: "421.34",
      high: "424.20",
      low: "417.84",
      gra: "+0.38%",
    },

    {
      symbol: "GOOGL",
      bid: "163.72",
      ask: "163.81",
      high: "165.24",
      low: "162.70",
      gra: "-0.22%",
    },

    {
      symbol: "JPM",
      bid: "214.35",
      ask: "214.46",
      high: "216.10",
      low: "212.80",
      gra: "+0.47%",
    },

    {
      symbol: "V",
      bid: "267.81",
      ask: "267.96",
      high: "269.42",
      low: "265.18",
      gra: "+0.25%",
    },

    {
      symbol: "KO",
      bid: "68.42",
      ask: "68.47",
      high: "68.91",
      low: "67.82",
      gra: "+0.14%",
    },
  ],
];


/* =========================================================
   MARKETS
========================================================= */

export default function Markets({
  language = "en",
}) {
  const [
    activeTab,
    setActiveTab,
  ] = useState(0);


  const content =
    marketCopy[language] ||
    marketCopy.en;


  const rows =
    useMemo(
      () =>
        marketData[
        activeTab
        ] ||
        marketData[0],
      [activeTab]
    );


  return (
    <section
      className="investment-section"
      id="markets"
    >

      <div className="investment-container">


        {/* =========================================
            HEADER
        ========================================== */}

        <div className="investment-heading">

          <h5>
            {content.eyebrow}
          </h5>

          <h2>
            {content.title}
          </h2>

        </div>


        {/* =========================================
            TABS
        ========================================== */}

        <div className="investment-tabs-wrapper">

          <div
            className="investment-tabs"
            role="tablist"
          >

            {content.tabs.map(
              (
                tab,
                index
              ) => {

                const active =
                  activeTab ===
                  index;


                return (
                  <button
                    key={`${language}-${index}`}

                    type="button"

                    role="tab"

                    aria-selected={
                      active
                    }

                    className={`investment-tab ${active
                      ? "is-active"
                      : ""
                      }`}

                    onClick={() =>
                      setActiveTab(
                        index
                      )
                    }
                  >
                    {tab}
                  </button>
                );
              }
            )}

          </div>

        </div>


        {/* =========================================
            DATA TABLE
        ========================================== */}

        <div className="investment-table-outer">

          <div className="investment-table-scroll">

            <table className="investment-table">

              <thead>

                <tr>

                  {content.headers.map(
                    (
                      header
                    ) => (
                      <th
                        key={header}
                      >
                        {header}
                      </th>
                    )
                  )}

                  <th
                    className="investment-action-heading"
                    aria-label="Action"
                  />

                </tr>

              </thead>


              <tbody>

                {rows.map(
                  (
                    row,
                    index
                  ) => {

                    const negative =
                      row.gra.startsWith(
                        "-"
                      );


                    return (
                      <tr
                        key={`${row.symbol}-${index}`}
                      >

                        <td className="investment-symbol">

                          <span className="investment-symbol-dot" />

                          <strong>
                            {
                              row.symbol
                            }
                          </strong>

                        </td>


                        <td>
                          {row.bid}
                        </td>


                        <td>
                          {row.ask}
                        </td>


                        <td>
                          {row.high}
                        </td>


                        <td>
                          {row.low}
                        </td>


                        <td
                          className={
                            negative
                              ? "investment-negative"
                              : "investment-positive"
                          }
                        >
                          {row.gra}
                        </td>


                        <td className="investment-row-action">

                          <span>
                            ↗
                          </span>

                        </td>

                      </tr>
                    );
                  }
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
}