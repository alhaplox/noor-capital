import {
  useEffect,
  useState,
} from "react";

import "./MarketTabs.css";


const fallbackTabs = {
  en: [
    "Popular",
    "Shares CFDs",
    "Forex",
    "Commodities",
    "Indices",
    "Metals",
  ],

  tr: [
    "Popüler",
    "Hisse CFD'leri",
    "Forex",
    "Emtialar",
    "Endeksler",
    "Metaller",
  ],

  ru: [
    "Популярное",
    "CFD на акции",
    "Форекс",
    "Сырьевые товары",
    "Индексы",
    "Металлы",
  ],

  ar: [
    "الأكثر تداولاً",
    "عقود فروقات الأسهم",
    "الفوركس",
    "السلع",
    "المؤشرات",
    "المعادن",
  ],
};


export default function MarketTabs({
  t,
  language = "en",
}) {
  /*
    Noor referans ekranında
    Metals aktif görünüyor.
  */

  const [
    activeTab,
    setActiveTab,
  ] = useState(5);


  const items =
    t?.homeTabs?.length
      ? t.homeTabs
      : fallbackTabs[
      language
      ] ||
      fallbackTabs.en;


  /*
    Dil değiştiğinde aktif
    index korunur.
  */

  useEffect(() => {
    if (
      activeTab >=
      items.length
    ) {
      setActiveTab(0);
    }
  }, [
    activeTab,
    items.length,
  ]);


  return (
    <section
      className="market-tabs-section"
      aria-label="Market categories"
    >

      <div className="market-tabs-container">

        <div
          className="market-tabs-list"
          role="tablist"
        >

          {items.map(
            (
              item,
              index
            ) => {

              const active =
                activeTab ===
                index;


              return (
                <button
                  key={`${item}-${index}`}

                  type="button"

                  role="tab"

                  aria-selected={
                    active
                  }

                  className={`market-tab ${active
                    ? "is-active"
                    : ""
                    }`}

                  onClick={() =>
                    setActiveTab(
                      index
                    )
                  }
                >
                  {item}
                </button>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}