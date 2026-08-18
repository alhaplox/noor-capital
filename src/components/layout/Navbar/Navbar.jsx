import {
  useEffect,
  useMemo,
  useState,
} from "react";

import "./Navbar.css";


/* =========================================================
   ASSETS
========================================================= */

const NAV_ASSETS = {
  logo:
    "https://www.noorcapital.ae/images/noor-logo.png",
};


/* =========================================================
   FALLBACK LANGUAGES
========================================================= */

const fallbackLanguages = [
  {
    code: "en",
    label: "EN",
  },

  {
    code: "tr",
    label: "TR",
  },

  {
    code: "ar",
    label: "AR",
  },

  {
    code: "ru",
    label: "RU",
  },
];


/* =========================================================
   NAVIGATION STRUCTURE
========================================================= */

const navigation = [
  {
    key: "company",
    type: "link",
    path: "about-us",
  },

  {
    key: "contact",
    type: "link",
    path: "contact-us",
  },

  {
    key: "services",
    type: "dropdown",

    groups: [
      {
        items: [
          {
            key: "globalFinancialAdvisory",
            path:
              "services/global-financial-advisory",
          },

          {
            key: "assetManagement",
            path:
              "services/asset-management",
          },

          {
            key: "investmentServices",
            path:
              "services/investment-services",
          },

          {
            key: "fundsAdministration",
            path:
              "services/funds-administration",
          },
        ],
      },
    ],
  },

  {
    key: "products",
    type: "dropdown",

    groups: [
      {
        items: [
          {
            key: "sharesCfd",
            path:
              "products/shares-trading-cfds",
          },

          {
            key: "forex",
            path:
              "products/forex-trading",
          },

          {
            key: "indices",
            path:
              "products/indices",
          },

          {
            key: "commodities",
            path:
              "products/commodities",
          },

          {
            key: "energies",
            path:
              "products/energies",
          },

          {
            key: "crypto",
            path:
              "products/crypto",
          },

          {
            key: "cashEquities",
            path:
              "products/cash-equities",
          },
        ],
      },
    ],
  },
  /* =========================================================
    {
      key: "trading",
      type: "dropdown",
  
      groups: [
        {
          items: [
            {
              key: "mt4Platform",
              path:
                "trading/mt4-platform",
            },
  
            {
              key: "mt5Platform",
              path:
                "trading/mt5-platform",
            },
  
            {
              key: "mt4WebTrader",
              path:
                "trading/mt4-web-trader",
            },
  
            {
              key: "mt5WebTrader",
              path:
                "trading/mt5-web-trader",
            },
  
            {
              key: "gtnPlatform",
              path:
                "trading/gtn-platform",
            },
          ],
        },
  
        {
          items: [
            {
              key: "accountFunding",
              path:
                "trading/account-funding",
            },
  
            {
              key: "legalDocuments",
              path:
                "trading/legal-documents",
            },
  
            {
              key: "tradingCondition",
              path:
                "trading/trading-condition",
            },
  
            {
              key: "accountSecurity",
              path:
                "trading/account-security",
            },
          ],
        },
      ],
    },
  */
  {
    key: "learningHub",
    type: "dropdown",
    wide: true,

    groups: [
      {
        titleKey: "education",

        items: [
          {
            key: "learnToInvest",
            path:
              "learning-hub/education/learn-to-invest",
          },

          {
            key: "videoTutorials",
            path:
              "learning-hub/education/video-tutorials",
          },

          {
            key: "webinars",
            path:
              "learning-hub/education/webinars",
          },

          {
            key: "workshop",
            path:
              "learning-hub/education/workshop",
          },

          {
            key: "noorPedia",
            path:
              "learning-hub/education/noor-pedia",
          },
        ],
      },

      {
        titleKey: "newsEvents",

        items: [
          {
            key: "marketUpdates",
            path:
              "learning-hub/news-updates/market-updates",
          },

          {
            key: "technicalAnalysis",
            path:
              "learning-hub/news-updates/technical-analysis",
          },

          {
            key: "economicReports",
            path:
              "learning-hub/news-updates/economic-reports",
          },

          {
            key: "economicCalendar",
            path:
              "learning-hub/news-updates/economic-calendar",
          },

          {
            key: "centralBankRates",
            path:
              "learning-hub/news-updates/central-bank-rates",
          },
        ],
      },

      {
        titleKey: "mediaCenter",

        items: [
          {
            key: "pressReleases",
            path:
              "learning-hub/media-center/press-release",
          },

          {
            key: "activities",
            path:
              "learning-hub/media-center/activities",
          },

          {
            key: "awards",
            path:
              "learning-hub/media-center/awards",
          },
        ],
      },
    ],
  },

  {
    key: "partnership",
    type: "dropdown",

    groups: [
      {
        items: [
          {
            key: "institutionalLiquidity",
            path:
              "partnership/institutional-liquidity-solutions",
          },

          {
            key: "moneyManagers",
            path:
              "partnership/money-managers",
          },

          {
            key: "partnershipProgram",
            path:
              "partnership/partnership-program",
          },

          {
            key: "whiteLabel",
            path:
              "partnership/white-label-solutions",
          },
        ],
      },
    ],
  },
];


/* =========================================================
   TRY DEMO MENU
========================================================= */

const demoItems = [
  {
    key: "fxTrading",
    path:
      "trading/mt4-platform",
  },

  {
    key: "mt5CashEquities",
    path:
      "trading/mt5-platform",
  },

  {
    key: "gtnCashEquities",
    path:
      "trading/gtn-platform",
  },

  {
    key: "institutionalLiquidityShort",
    path:
      "partnership/institutional-liquidity-solutions",
  },
];


/* =========================================================
   OPEN LIVE MENU
========================================================= */

const liveItems = [
  {
    key: "fxTrading",

    href:
      "https://mynoor.noorcap.ae/en/mynoor-v2/register",

    external: true,
  },

  {
    key: "cashEquities",
    path:
      "products/cash-equities",
  },

  {
    key: "gtnCashEquities",
    path:
      "trading/gtn-platform",
  },

  {
    key: "institutionalLiquidityShort",
    path:
      "partnership/institutional-liquidity-solutions",
  },
];


/* =========================================================
   TRANSLATIONS
========================================================= */

const navCopy = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    labels: {
      company:
        "Company",

      contact:
        "Contact Us",

      services:
        "Services",

      products:
        "Products",

      trading:
        "Trading",

      learningHub:
        "Learning Hub",

      partnership:
        "Partnership",

      globalFinancialAdvisory:
        "Global Financial Advisory",

      assetManagement:
        "Asset Management",

      investmentServices:
        "Investment Services",

      fundsAdministration:
        "Funds Administration",

      sharesCfd:
        "Shares CFD",

      forex:
        "Forex",

      indices:
        "Indices",

      commodities:
        "Commodities",

      energies:
        "Energies",

      crypto:
        "Crypto",

      cashEquities:
        "Cash Equities",

      mt4Platform:
        "MT4 Platform",

      mt5Platform:
        "MT5 Platform",

      mt4WebTrader:
        "MT4 Web Trader",

      mt5WebTrader:
        "MT5 Web Trader",

      gtnPlatform:
        "GTN Platform",

      accountFunding:
        "Account Funding",

      legalDocuments:
        "Legal Documents",

      tradingCondition:
        "Trading Condition",

      accountSecurity:
        "Account Security",

      education:
        "Education",

      learnToInvest:
        "Learn to invest",

      videoTutorials:
        "Video Tutorials",

      webinars:
        "Webinars",

      workshop:
        "Workshop",

      noorPedia:
        "Noor Pedia",

      newsEvents:
        "News & Events",

      marketUpdates:
        "Market Updates",

      technicalAnalysis:
        "Technical Analysis",

      economicReports:
        "Economic Reports",

      economicCalendar:
        "Economic Calendar",

      centralBankRates:
        "Central Bank Rates",

      mediaCenter:
        "Media Center",

      pressReleases:
        "Press Releases",

      activities:
        "Activities",

      awards:
        "Awards",

      institutionalLiquidity:
        "Institutional Liquidity Solutions",

      moneyManagers:
        "Money Managers",

      partnershipProgram:
        "Partnership Program",

      whiteLabel:
        "White Label Solution",

      fxTrading:
        "FX Trading",

      mt5CashEquities:
        "MT5 - Cash Equities",

      gtnCashEquities:
        "GTN - Cash Equities",

      institutionalLiquidityShort:
        "Institutional Liquidity",
    },

    tryDemo:
      "Try a Demo",

    openLive:
      "Open Live",

    myNoor:
      "MyNoor",

    agents:
      "Agents",

    menu:
      "Open menu",

    close:
      "Close menu",

    language:
      "Language",
  },


  /* =======================================================
     TURKISH
  ======================================================= */

  tr: {
    labels: {
      company:
        "Şirket",

      contact:
        "İletişim",

      services:
        "Hizmetler",

      products:
        "Ürünler",

      trading:
        "İşlem",

      learningHub:
        "Eğitim Merkezi",

      partnership:
        "İş Ortaklığı",

      globalFinancialAdvisory:
        "Global Finansal Danışmanlık",

      assetManagement:
        "Varlık Yönetimi",

      investmentServices:
        "Yatırım Hizmetleri",

      fundsAdministration:
        "Fon Yönetimi",

      sharesCfd:
        "Hisse CFD",

      forex:
        "Forex",

      indices:
        "Endeksler",

      commodities:
        "Emtialar",

      energies:
        "Enerjiler",

      crypto:
        "Kripto",

      cashEquities:
        "Nakit Hisseler",

      mt4Platform:
        "MT4 Platformu",

      mt5Platform:
        "MT5 Platformu",

      mt4WebTrader:
        "MT4 Web Trader",

      mt5WebTrader:
        "MT5 Web Trader",

      gtnPlatform:
        "GTN Platformu",

      accountFunding:
        "Hesap Fonlama",

      legalDocuments:
        "Yasal Belgeler",

      tradingCondition:
        "İşlem Koşulları",

      accountSecurity:
        "Hesap Güvenliği",

      education:
        "Eğitim",

      learnToInvest:
        "Yatırım Yapmayı Öğrenin",

      videoTutorials:
        "Video Eğitimleri",

      webinars:
        "Webinarlar",

      workshop:
        "Atölyeler",

      noorPedia:
        "Noor Pedia",

      newsEvents:
        "Haberler & Etkinlikler",

      marketUpdates:
        "Piyasa Güncellemeleri",

      technicalAnalysis:
        "Teknik Analiz",

      economicReports:
        "Ekonomik Raporlar",

      economicCalendar:
        "Ekonomik Takvim",

      centralBankRates:
        "Merkez Bankası Faizleri",

      mediaCenter:
        "Medya Merkezi",

      pressReleases:
        "Basın Bültenleri",

      activities:
        "Etkinlikler",

      awards:
        "Ödüller",

      institutionalLiquidity:
        "Kurumsal Likidite Çözümleri",

      moneyManagers:
        "Portföy Yöneticileri",

      partnershipProgram:
        "İş Ortaklığı Programı",

      whiteLabel:
        "White Label Çözümü",

      fxTrading:
        "FX İşlemleri",

      mt5CashEquities:
        "MT5 - Nakit Hisseler",

      gtnCashEquities:
        "GTN - Nakit Hisseler",

      institutionalLiquidityShort:
        "Kurumsal Likidite",
    },

    tryDemo:
      "Demo Deneyin",

    openLive:
      "Gerçek Hesap Aç",

    myNoor:
      "MyNoor",

    agents:
      "Temsilciler",

    menu:
      "Menüyü aç",

    close:
      "Menüyü kapat",

    language:
      "Dil",
  },


  /* =======================================================
     RUSSIAN
  ======================================================= */

  ru: {
    labels: {
      company:
        "Компания",

      contact:
        "Контакты",

      services:
        "Услуги",

      products:
        "Продукты",

      trading:
        "Торговля",

      learningHub:
        "Учебный центр",

      partnership:
        "Партнерство",

      globalFinancialAdvisory:
        "Глобальный финансовый консалтинг",

      assetManagement:
        "Управление активами",

      investmentServices:
        "Инвестиционные услуги",

      fundsAdministration:
        "Администрирование фондов",

      sharesCfd:
        "CFD на акции",

      forex:
        "Форекс",

      indices:
        "Индексы",

      commodities:
        "Сырьевые товары",

      energies:
        "Энергоресурсы",

      crypto:
        "Криптовалюты",

      cashEquities:
        "Акции",

      mt4Platform:
        "Платформа MT4",

      mt5Platform:
        "Платформа MT5",

      mt4WebTrader:
        "MT4 Web Trader",

      mt5WebTrader:
        "MT5 Web Trader",

      gtnPlatform:
        "Платформа GTN",

      accountFunding:
        "Пополнение счета",

      legalDocuments:
        "Юридические документы",

      tradingCondition:
        "Торговые условия",

      accountSecurity:
        "Безопасность счета",

      education:
        "Обучение",

      learnToInvest:
        "Научиться инвестировать",

      videoTutorials:
        "Видеоуроки",

      webinars:
        "Вебинары",

      workshop:
        "Семинары",

      noorPedia:
        "Noor Pedia",

      newsEvents:
        "Новости и события",

      marketUpdates:
        "Обзоры рынка",

      technicalAnalysis:
        "Технический анализ",

      economicReports:
        "Экономические отчеты",

      economicCalendar:
        "Экономический календарь",

      centralBankRates:
        "Ставки центральных банков",

      mediaCenter:
        "Медиацентр",

      pressReleases:
        "Пресс-релизы",

      activities:
        "Мероприятия",

      awards:
        "Награды",

      institutionalLiquidity:
        "Институциональная ликвидность",

      moneyManagers:
        "Управляющие капиталом",

      partnershipProgram:
        "Партнерская программа",

      whiteLabel:
        "White Label",

      fxTrading:
        "FX Trading",

      mt5CashEquities:
        "MT5 - Акции",

      gtnCashEquities:
        "GTN - Акции",

      institutionalLiquidityShort:
        "Институциональная ликвидность",
    },

    tryDemo:
      "Попробовать демо",

    openLive:
      "Открыть счет",

    myNoor:
      "MyNoor",

    agents:
      "Агенты",

    menu:
      "Открыть меню",

    close:
      "Закрыть меню",

    language:
      "Язык",
  },


  /* =======================================================
     ARABIC
  ======================================================= */

  ar: {
    labels: {
      company:
        "الشركة",

      contact:
        "اتصل بنا",

      services:
        "الخدمات",

      products:
        "المنتجات",

      trading:
        "التداول",

      learningHub:
        "مركز التعلم",

      partnership:
        "الشراكات",

      globalFinancialAdvisory:
        "الاستشارات المالية العالمية",

      assetManagement:
        "إدارة الأصول",

      investmentServices:
        "خدمات الاستثمار",

      fundsAdministration:
        "إدارة الصناديق",

      sharesCfd:
        "عقود فروقات الأسهم",

      forex:
        "الفوركس",

      indices:
        "المؤشرات",

      commodities:
        "السلع",

      energies:
        "الطاقة",

      crypto:
        "العملات الرقمية",

      cashEquities:
        "الأسهم النقدية",

      mt4Platform:
        "منصة MT4",

      mt5Platform:
        "منصة MT5",

      mt4WebTrader:
        "MT4 Web Trader",

      mt5WebTrader:
        "MT5 Web Trader",

      gtnPlatform:
        "منصة GTN",

      accountFunding:
        "تمويل الحساب",

      legalDocuments:
        "المستندات القانونية",

      tradingCondition:
        "شروط التداول",

      accountSecurity:
        "أمان الحساب",

      education:
        "التعليم",

      learnToInvest:
        "تعلم الاستثمار",

      videoTutorials:
        "الدروس المصورة",

      webinars:
        "الندوات الإلكترونية",

      workshop:
        "ورش العمل",

      noorPedia:
        "Noor Pedia",

      newsEvents:
        "الأخبار والفعاليات",

      marketUpdates:
        "تحديثات السوق",

      technicalAnalysis:
        "التحليل الفني",

      economicReports:
        "التقارير الاقتصادية",

      economicCalendar:
        "التقويم الاقتصادي",

      centralBankRates:
        "أسعار البنوك المركزية",

      mediaCenter:
        "المركز الإعلامي",

      pressReleases:
        "البيانات الصحفية",

      activities:
        "الفعاليات",

      awards:
        "الجوائز",

      institutionalLiquidity:
        "حلول السيولة المؤسسية",

      moneyManagers:
        "مديرو الأموال",

      partnershipProgram:
        "برنامج الشراكة",

      whiteLabel:
        "حلول White Label",

      fxTrading:
        "تداول الفوركس",

      mt5CashEquities:
        "MT5 - الأسهم النقدية",

      gtnCashEquities:
        "GTN - الأسهم النقدية",

      institutionalLiquidityShort:
        "السيولة المؤسسية",
    },

    tryDemo:
      "جرب الحساب التجريبي",

    openLive:
      "افتح حساباً",

    myNoor:
      "MyNoor",

    agents:
      "الوكلاء",

    menu:
      "فتح القائمة",

    close:
      "إغلاق القائمة",

    language:
      "اللغة",
  },
};


/* =========================================================
   CHEVRON
========================================================= */

function Chevron({
  open = false,
}) {
  return (
    <svg
      className={`navbar-chevron ${open
        ? "is-open"
        : ""
        }`}
      viewBox="0 0 12 8"
      aria-hidden="true"
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* =========================================================
   PLUS
========================================================= */

function Plus({
  open = false,
}) {
  return (
    <span
      className={`navbar-mobile-plus ${open
        ? "is-open"
        : ""
        }`}
      aria-hidden="true"
    >
      <span />
      <span />
    </span>
  );
}


/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar({
  language = "en",
  languages = fallbackLanguages,
  changeLanguage,
  navigate,
}) {
  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);


  const [
    mobileAccordion,
    setMobileAccordion,
  ] = useState(null);


  const [
    mobileDemoOpen,
    setMobileDemoOpen,
  ] = useState(false);


  const [
    mobileLiveOpen,
    setMobileLiveOpen,
  ] = useState(false);


  const content =
    navCopy[language] ||
    navCopy.en;


  /* =======================================================
     LANGUAGE OPTIONS
  ======================================================= */

  const languageOptions =
    useMemo(
      () => {
        if (
          !Array.isArray(
            languages
          ) ||
          !languages.length
        ) {
          return fallbackLanguages;
        }


        return languages.map(
          (
            item
          ) => {
            if (
              typeof item ===
              "string"
            ) {
              return {
                code: item,
                label:
                  item.toUpperCase(),
              };
            }


            return {
              code:
                item.code ||
                item.value ||
                item.key ||
                item.id,

              label:
                item.label ||
                item.name ||
                (
                  item.code ||
                  item.value ||
                  ""
                ).toUpperCase(),
            };
          }
        );
      },
      [
        languages,
      ]
    );


  /* =======================================================
     CURRENT PATH
  ======================================================= */

  const currentPath =
    window.location.pathname
      .split("/")
      .filter(Boolean)
      .filter(
        (
          part,
          index
        ) =>
          !(
            index === 0 &&
            [
              "en",
              "tr",
              "ru",
              "ar",
            ].includes(
              part
            )
          )
      )
      .join("/");


  /* =======================================================
     BODY LOCK
  ======================================================= */

  useEffect(
    () => {
      if (
        !mobileOpen
      ) {
        document.body.style.overflow =
          "";

        return undefined;
      }


      document.body.style.overflow =
        "hidden";


      return () => {
        document.body.style.overflow =
          "";
      };
    },
    [
      mobileOpen,
    ]
  );


  /* =======================================================
     LOCAL URL
  ======================================================= */

  function localUrl(
    path = ""
  ) {
    return path
      ? `/${language}/${path}`
      : `/${language}`;
  }


  /* =======================================================
     INTERNAL NAVIGATION
  ======================================================= */

  function handleInternalLink(
    event,
    href
  ) {
    if (
      !navigate ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }


    event.preventDefault();


    setMobileOpen(false);

    setMobileAccordion(
      null
    );


    navigate(href);
  }


  /* =======================================================
     ACTIVE PATH
  ======================================================= */

  function isPathActive(
    path
  ) {
    return (
      currentPath ===
      path ||
      currentPath.startsWith(
        `${path}/`
      )
    );
  }


  /* =======================================================
     ACTIVE SECTION
  ======================================================= */

  function isSectionActive(
    item
  ) {
    if (
      item.type ===
      "link"
    ) {
      return isPathActive(
        item.path
      );
    }


    return item.groups.some(
      (
        group
      ) =>
        group.items.some(
          (
            subItem
          ) =>
            isPathActive(
              subItem.path
            )
        )
    );
  }


  /* =======================================================
     MOBILE ACCORDION
  ======================================================= */

  function toggleMobileAccordion(
    key
  ) {
    setMobileAccordion(
      (
        current
      ) =>
        current === key
          ? null
          : key
    );
  }


  /* =======================================================
     LANGUAGE
  ======================================================= */

  function handleLanguageChange(
    event
  ) {
    const nextLanguage =
      event.target.value;


    changeLanguage?.(
      nextLanguage
    );


    setMobileOpen(false);
  }


  /* =======================================================
     MOBILE ITEMS
  ======================================================= */

  function getFlatItems(
    navItem
  ) {
    return navItem.groups.flatMap(
      (
        group
      ) =>
        group.items
    );
  }


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <header className="navbar-shell">

      <div className="navbar-container">


        {/* =========================================
            LOGO
        ========================================== */}

        <a
          href={
            localUrl()
          }

          className="navbar-logo"

          onClick={(
            event
          ) =>
            handleInternalLink(
              event,
              localUrl()
            )
          }
        >

          <img
            src={
              NAV_ASSETS.logo
            }

            alt="Noor Capital"
          />

        </a>


        {/* =========================================
            DESKTOP NAVIGATION
        ========================================== */}

        <nav className="navbar-desktop">

          <ul className="navbar-desktop-list">

            {navigation.map(
              (
                navItem
              ) => {

                const active =
                  isSectionActive(
                    navItem
                  );


                /* ================================
                   DIRECT LINK
                ================================= */

                if (
                  navItem.type ===
                  "link"
                ) {
                  const href =
                    localUrl(
                      navItem.path
                    );


                  return (
                    <li
                      className="navbar-item"
                      key={
                        navItem.key
                      }
                    >

                      <a
                        href={
                          href
                        }

                        className={`navbar-main-link ${active
                          ? "is-active"
                          : ""
                          }`}

                        onClick={(
                          event
                        ) =>
                          handleInternalLink(
                            event,
                            href
                          )
                        }
                      >
                        {
                          content
                            .labels[
                          navItem.key
                          ]
                        }
                      </a>

                    </li>
                  );
                }


                /* ================================
                   DROPDOWN
                ================================= */

                return (
                  <li
                    className={`navbar-item has-dropdown ${active
                      ? "is-active"
                      : ""
                      }`}
                    key={
                      navItem.key
                    }
                  >

                    <button
                      type="button"

                      className="navbar-main-link navbar-main-button"
                    >

                      <span>
                        {
                          content
                            .labels[
                          navItem.key
                          ]
                        }
                      </span>

                      <Chevron />

                    </button>


                    <div
                      className={`navbar-dropdown ${navItem.wide
                        ? "is-wide"
                        : ""
                        } ${navItem.groups.length >
                          1
                          ? "is-multi"
                          : ""
                        }`}
                    >

                      <div className="navbar-dropdown-inner">

                        {navItem.groups.map(
                          (
                            group,
                            groupIndex
                          ) => (

                            <div
                              className="navbar-dropdown-column"

                              key={
                                `${navItem.key}-${groupIndex}`
                              }
                            >

                              {group.titleKey && (
                                <h3>
                                  {
                                    content
                                      .labels[
                                    group
                                      .titleKey
                                    ]
                                  }
                                </h3>
                              )}


                              <ul>

                                {group.items.map(
                                  (
                                    subItem
                                  ) => {

                                    const href =
                                      localUrl(
                                        subItem.path
                                      );


                                    return (
                                      <li
                                        key={
                                          subItem.key
                                        }
                                      >

                                        <a
                                          href={
                                            href
                                          }

                                          className={
                                            isPathActive(
                                              subItem.path
                                            )
                                              ? "is-active"
                                              : ""
                                          }

                                          onClick={(
                                            event
                                          ) =>
                                            handleInternalLink(
                                              event,
                                              href
                                            )
                                          }
                                        >
                                          {
                                            content
                                              .labels[
                                            subItem
                                              .key
                                            ]
                                          }
                                        </a>

                                      </li>
                                    );
                                  }
                                )}

                              </ul>

                            </div>

                          )
                        )}

                      </div>

                    </div>

                  </li>
                );
              }
            )}

          </ul>

        </nav>


        {/* =========================================
            DESKTOP ACTIONS
        ========================================== */}

        <div className="navbar-actions">


          {/* LANGUAGE */}

          <div className="navbar-language">

            <select
              value={
                language
              }

              onChange={
                handleLanguageChange
              }

              aria-label={
                content.language
              }
            >

              {languageOptions.map(
                (
                  option
                ) => (

                  <option
                    key={
                      option.code
                    }

                    value={
                      option.code
                    }
                  >
                    {
                      option.label
                    }
                  </option>

                )
              )}

            </select>

            <Chevron />

          </div>


          {/* TRY DEMO */}

          <div className="navbar-action-dropdown">

            <button
              type="button"

              className="navbar-demo-button"
            >

              <span>
                {
                  content.tryDemo
                }
              </span>

              <Chevron />

            </button>


            <div className="navbar-action-menu">

              <div className="navbar-action-menu-inner">

                <ul>

                  {demoItems.map(
                    (
                      item
                    ) => {

                      const href =
                        localUrl(
                          item.path
                        );


                      return (
                        <li
                          key={
                            item.key
                          }
                        >

                          <a
                            href={
                              href
                            }

                            onClick={(
                              event
                            ) =>
                              handleInternalLink(
                                event,
                                href
                              )
                            }
                          >
                            {
                              content
                                .labels[
                              item.key
                              ]
                            }
                          </a>

                        </li>
                      );
                    }
                  )}

                </ul>

              </div>

            </div>

          </div>


          {/* OPEN LIVE */}

          <div className="navbar-action-dropdown">

            <button
              type="button"

              className="navbar-live-button"
            >

              <span>
                {
                  content.openLive
                }
              </span>

              <Chevron />

            </button>


            <div className="navbar-action-menu">

              <div className="navbar-action-menu-inner">

                <ul>

                  {liveItems.map(
                    (
                      item
                    ) => {

                      if (
                        item.external
                      ) {
                        return (
                          <li
                            key={
                              item.key
                            }
                          >

                            <a
                              href={
                                item.href
                              }

                              target="_blank"

                              rel="noopener noreferrer"
                            >
                              {
                                content
                                  .labels[
                                item.key
                                ]
                              }
                            </a>

                          </li>
                        );
                      }


                      const href =
                        localUrl(
                          item.path
                        );


                      return (
                        <li
                          key={
                            item.key
                          }
                        >

                          <a
                            href={
                              href
                            }

                            onClick={(
                              event
                            ) =>
                              handleInternalLink(
                                event,
                                href
                              )
                            }
                          >
                            {
                              content
                                .labels[
                              item.key
                              ]
                            }
                          </a>

                        </li>
                      );
                    }
                  )}

                </ul>

              </div>

            </div>

          </div>


          {/* MOBILE HAMBURGER */}

          <button
            type="button"

            className="navbar-hamburger"

            onClick={() =>
              setMobileOpen(
                true
              )
            }

            aria-label={
              content.menu
            }
          >
            <span />
            <span />
            <span />
          </button>

        </div>

      </div>


      {/* =========================================
          MOBILE OVERLAY
      ========================================== */}

      <button
        type="button"

        className={`navbar-mobile-overlay ${mobileOpen
          ? "is-open"
          : ""
          }`}

        onClick={() =>
          setMobileOpen(
            false
          )
        }

        aria-label={
          content.close
        }
      />


      {/* =========================================
          MOBILE DRAWER
      ========================================== */}

      <aside
        className={`navbar-mobile-drawer ${mobileOpen
          ? "is-open"
          : ""
          }`}
      >

        {/* MOBILE HEADER */}

        <div className="navbar-mobile-header">

          <a
            href={
              localUrl()
            }

            className="navbar-mobile-logo"

            onClick={(
              event
            ) =>
              handleInternalLink(
                event,
                localUrl()
              )
            }
          >

            <img
              src={
                NAV_ASSETS.logo
              }

              alt="Noor Capital"
            />

          </a>


          <button
            type="button"

            className="navbar-mobile-close"

            onClick={() =>
              setMobileOpen(
                false
              )
            }

            aria-label={
              content.close
            }
          >
            ×
          </button>

        </div>


        {/* MOBILE LANGUAGE */}

        <div className="navbar-mobile-language">

          <span>
            {content.language}
          </span>


          <select
            value={
              language
            }

            onChange={
              handleLanguageChange
            }
          >

            {languageOptions.map(
              (
                option
              ) => (

                <option
                  key={
                    option.code
                  }

                  value={
                    option.code
                  }
                >
                  {
                    option.label
                  }
                </option>

              )
            )}

          </select>

        </div>


        {/* MOBILE NAV */}

        <nav className="navbar-mobile-nav">

          <ul>

            {navigation.map(
              (
                navItem
              ) => {

                /* ================================
                   MOBILE DIRECT LINK
                ================================= */

                if (
                  navItem.type ===
                  "link"
                ) {
                  const href =
                    localUrl(
                      navItem.path
                    );


                  return (
                    <li
                      key={
                        navItem.key
                      }
                    >

                      <a
                        href={
                          href
                        }

                        className={`navbar-mobile-main-link ${isPathActive(
                          navItem.path
                        )
                          ? "is-active"
                          : ""
                          }`}

                        onClick={(
                          event
                        ) =>
                          handleInternalLink(
                            event,
                            href
                          )
                        }
                      >
                        <span>
                          {
                            content
                              .labels[
                            navItem.key
                            ]
                          }
                        </span>
                      </a>

                    </li>
                  );
                }


                const isOpen =
                  mobileAccordion ===
                  navItem.key;


                const items =
                  getFlatItems(
                    navItem
                  );


                /* ================================
                   MOBILE DROPDOWN
                ================================= */

                return (
                  <li
                    key={
                      navItem.key
                    }
                  >

                    <button
                      type="button"

                      className={`navbar-mobile-main-link navbar-mobile-main-button ${isSectionActive(
                        navItem
                      )
                        ? "is-active"
                        : ""
                        }`}

                      onClick={() =>
                        toggleMobileAccordion(
                          navItem.key
                        )
                      }

                      aria-expanded={
                        isOpen
                      }
                    >

                      <span>
                        {
                          content
                            .labels[
                          navItem.key
                          ]
                        }
                      </span>

                      <Plus
                        open={
                          isOpen
                        }
                      />

                    </button>


                    <div
                      className={`navbar-mobile-submenu ${isOpen
                        ? "is-open"
                        : ""
                        }`}
                    >

                      <ul>

                        {items.map(
                          (
                            subItem
                          ) => {

                            const href =
                              localUrl(
                                subItem.path
                              );


                            return (
                              <li
                                key={
                                  subItem.key
                                }
                              >

                                <a
                                  href={
                                    href
                                  }

                                  className={
                                    isPathActive(
                                      subItem.path
                                    )
                                      ? "is-active"
                                      : ""
                                  }

                                  onClick={(
                                    event
                                  ) =>
                                    handleInternalLink(
                                      event,
                                      href
                                    )
                                  }
                                >
                                  {
                                    content
                                      .labels[
                                    subItem.key
                                    ]
                                  }
                                </a>

                              </li>
                            );
                          }
                        )}

                      </ul>

                    </div>

                  </li>
                );
              }
            )}

          </ul>

        </nav>


        {/* =========================================
            MOBILE ACTIONS
        ========================================== */}

        <div className="navbar-mobile-actions">


          {/* DEMO */}

          <div>

            <button
              type="button"

              className="navbar-mobile-demo-button"

              onClick={() =>
                setMobileDemoOpen(
                  (
                    current
                  ) =>
                    !current
                )
              }
            >

              <span>
                {
                  content.tryDemo
                }
              </span>

              <Chevron
                open={
                  mobileDemoOpen
                }
              />

            </button>


            <div
              className={`navbar-mobile-action-submenu ${mobileDemoOpen
                ? "is-open"
                : ""
                }`}
            >

              {demoItems.map(
                (
                  item
                ) => {

                  const href =
                    localUrl(
                      item.path
                    );


                  return (
                    <a
                      key={
                        item.key
                      }

                      href={
                        href
                      }

                      onClick={(
                        event
                      ) =>
                        handleInternalLink(
                          event,
                          href
                        )
                      }
                    >
                      {
                        content
                          .labels[
                        item.key
                        ]
                      }
                    </a>
                  );
                }
              )}

            </div>

          </div>


          {/* LIVE */}

          <div>

            <button
              type="button"

              className="navbar-mobile-live-button"

              onClick={() =>
                setMobileLiveOpen(
                  (
                    current
                  ) =>
                    !current
                )
              }
            >

              <span>
                {
                  content.openLive
                }
              </span>

              <Chevron
                open={
                  mobileLiveOpen
                }
              />

            </button>


            <div
              className={`navbar-mobile-action-submenu ${mobileLiveOpen
                ? "is-open"
                : ""
                }`}
            >

              {liveItems.map(
                (
                  item
                ) => {

                  if (
                    item.external
                  ) {
                    return (
                      <a
                        key={
                          item.key
                        }

                        href={
                          item.href
                        }

                        target="_blank"

                        rel="noopener noreferrer"
                      >
                        {
                          content
                            .labels[
                          item.key
                          ]
                        }
                      </a>
                    );
                  }


                  const href =
                    localUrl(
                      item.path
                    );


                  return (
                    <a
                      key={
                        item.key
                      }

                      href={
                        href
                      }

                      onClick={(
                        event
                      ) =>
                        handleInternalLink(
                          event,
                          href
                        )
                      }
                    >
                      {
                        content
                          .labels[
                        item.key
                        ]
                      }
                    </a>
                  );
                }
              )}

            </div>

          </div>

        </div>


        {/* =========================================
            MOBILE BOTTOM LINKS
        ========================================== */}

        <div className="navbar-mobile-bottom">

          <a
            href="https://mynoor.noorcap.ae/en/traders/login"

            target="_blank"

            rel="noopener noreferrer"
          >
            {content.myNoor}
          </a>

          <span>
            |
          </span>

          <a
            href="https://agent.noorcap.ae"

            target="_blank"

            rel="noopener noreferrer"
          >
            {content.agents}
          </a>

        </div>

      </aside>

    </header>
  );
}