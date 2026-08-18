import {
  useEffect,
  useMemo,
  useState,
} from "react";

import TopBar from "./components/TopBar/TopBar";

import Navbar from "./components/layout/Navbar/Navbar";

import Footer from "./components/layout/Footer/Footer";


/* =========================================================
   HOME
========================================================= */

import Hero from "./components/home/Hero/Hero";

import MarketTabs from "./components/home/MarketTabs/MarketTabs";

import About from "./components/home/About/About";

import WhyUs from "./components/home/WhyUs/WhyUs";

import TradingOffers from "./components/home/TradingOffers/TradingOffers";

import Markets from "./components/home/Markets/Markets";

import Platforms from "./components/home/Platforms/Platforms";

import Research from "./components/home/Research/Research";

import LatestUpdates from "./components/home/LatestUpdates/LatestUpdates";

import Collaborations from "./components/home/Collaborations/Collaborations";


/* =========================================================
   COMPANY
========================================================= */

import AboutUs from "./pages/AboutUs/AboutUs";

import ContactUs from "./pages/ContactUs/ContactUs";


/* =========================================================
   SERVICES
========================================================= */

import ServicesPage from "./pages/Services/ServicesPage";

import AssetManagementPage from "./pages/Services/AssetManagementPage";

import InvestmentServicesPage from "./pages/Services/InvestmentServicesPage";

import FundsAdministrationPage from "./pages/Services/FundsAdministrationPage";


/* =========================================================
   PRODUCTS
========================================================= */

import SharesCFDPage from "./pages/Products/SharesCFDPage";

import ForexTradingPage from "./pages/Products/ForexTradingPage";

import IndicesPage from "./pages/Products/IndicesPage";

import CommoditiesPage from "./pages/Products/CommoditiesPage";

import EnergiesPage from "./pages/Products/EnergiesPage";

import CryptoPage from "./pages/Products/CryptoPage";

import CashEquitiesPage from "./pages/Products/CashEquitiesPage";


/* =========================================================
   TRANSLATIONS
========================================================= */

import {
  languages,
  translations,
} from "./data/translations";


/* =========================================================
   LANGUAGES
========================================================= */

const supportedLanguages = [
  "tr",
  "en",
  "ar",
  "ru",
];


/* =========================================================
   GET LANGUAGE
========================================================= */

function getLanguageFromUrl() {
  const parts =
    window.location.pathname
      .split("/")
      .filter(Boolean);


  return supportedLanguages.includes(
    parts[0]
  )
    ? parts[0]
    : "en";
}


/* =========================================================
   GET ROUTE
========================================================= */

function getRouteFromUrl() {
  const parts =
    window.location.pathname
      .split("/")
      .filter(Boolean);


  if (
    supportedLanguages.includes(
      parts[0]
    )
  ) {
    parts.shift();
  }


  return parts.join("/");
}


/* =========================================================
   APP
========================================================= */

export default function App() {
  const [
    language,
    setLanguage,
  ] = useState(
    getLanguageFromUrl
  );


  const [
    route,
    setRoute,
  ] = useState(
    getRouteFromUrl
  );


  const t =
    useMemo(
      () =>
        translations[
        language
        ] ||
        translations.en,
      [language]
    );


  /* =======================================================
     HTML LANG / RTL
  ======================================================= */

  useEffect(() => {
    document.documentElement.lang =
      language;


    document.documentElement.dir =
      language === "ar"
        ? "rtl"
        : "ltr";


    document.body.dataset.lang =
      language;
  }, [
    language,
  ]);


  /* =======================================================
     POPSTATE
  ======================================================= */

  useEffect(() => {
    function handlePopState() {
      setLanguage(
        getLanguageFromUrl()
      );


      setRoute(
        getRouteFromUrl()
      );
    }


    window.addEventListener(
      "popstate",
      handlePopState
    );


    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );
    };
  }, []);


  /* =======================================================
     NAVIGATE
  ======================================================= */

  function navigate(
    href
  ) {
    window.history.pushState(
      {},
      "",
      href
    );


    setLanguage(
      getLanguageFromUrl()
    );


    setRoute(
      getRouteFromUrl()
    );


    if (
      !window.location.hash
    ) {
      window.scrollTo({
        top: 0,

        behavior:
          "auto",
      });
    }
  }


  /* =======================================================
     CHANGE LANGUAGE
  ======================================================= */

  function changeLanguage(
    nextLanguage
  ) {
    if (
      !supportedLanguages.includes(
        nextLanguage
      )
    ) {
      return;
    }


    const currentPath =
      getRouteFromUrl();


    const hash =
      window.location.hash ||
      "";


    const nextUrl =
      currentPath
        ? `/${nextLanguage}/${currentPath}${hash}`
        : `/${nextLanguage}${hash}`;


    window.history.pushState(
      {},
      "",
      nextUrl
    );


    setLanguage(
      nextLanguage
    );


    setRoute(
      getRouteFromUrl()
    );
  }


  /* =======================================================
     HOME
  ======================================================= */

  function renderHome() {
    return (
      <main>

        <Hero
          language={
            language
          }
        />


        <MarketTabs
          language={
            language
          }

          t={
            t
          }
        />


        <About
          language={
            language
          }

          t={
            t
          }

          navigate={
            navigate
          }
        />


        <WhyUs
          language={
            language
          }
        />


        <TradingOffers
          language={
            language
          }
        />


        <Markets
          language={
            language
          }
        />


        <Platforms
          language={
            language
          }

          navigate={
            navigate
          }
        />


        <Research
          language={
            language
          }

          navigate={
            navigate
          }
        />


        <LatestUpdates
          language={
            language
          }

          navigate={
            navigate
          }
        />


        <Collaborations
          language={
            language
          }

          navigate={
            navigate
          }
        />

      </main>
    );
  }


  /* =======================================================
     EMPTY
  ======================================================= */

  function renderEmptyPage() {
    return (
      <main
        style={{
          minHeight:
            "70vh",

          background:
            "#06152f",
        }}
      />
    );
  }


  /* =======================================================
     ROUTER
  ======================================================= */

  function renderPage() {
    if (
      route === ""
    ) {
      return renderHome();
    }


    /* =====================================================
       COMPANY
    ===================================================== */

    if (
      route === "about-us"
    ) {
      return (
        <AboutUs
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    if (
      route === "contact-us"
    ) {
      return (
        <ContactUs
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    /* =====================================================
       SERVICES
    ===================================================== */

    if (
      route ===
      "services/global-financial-advisory"
    ) {
      return (
        <ServicesPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    if (
      route ===
      "services/asset-management"
    ) {
      return (
        <AssetManagementPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    if (
      route ===
      "services/investment-services"
    ) {
      return (
        <InvestmentServicesPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    if (
      route ===
      "services/funds-administration"
    ) {
      return (
        <FundsAdministrationPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    /* =====================================================
       PRODUCTS
    ===================================================== */

    if (
      route ===
      "products/shares-trading-cfds"
    ) {
      return (
        <SharesCFDPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    if (
      route ===
      "products/forex-trading"
    ) {
      return (
        <ForexTradingPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    if (
      route ===
      "products/indices"
    ) {
      return (
        <IndicesPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    if (
      route ===
      "products/commodities"
    ) {
      return (
        <CommoditiesPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    if (
      route ===
      "products/energies"
    ) {
      return (
        <EnergiesPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    if (
      route ===
      "products/crypto"
    ) {
      return (
        <CryptoPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    /* =====================================================
       NEXT PRODUCT
    ===================================================== */

    if (
      route ===
      "products/cash-equities"
    ) {
      return (
        <CashEquitiesPage
          language={
            language
          }

          navigate={
            navigate
          }
        />
      );
    }


    return renderEmptyPage();
  }


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <TopBar />


      <Navbar
        language={
          language
        }

        languages={
          languages
        }

        changeLanguage={
          changeLanguage
        }

        t={
          t
        }

        navigate={
          navigate
        }
      />


      {renderPage()}


      <Footer
        language={
          language
        }

        navigate={
          navigate
        }
      />

    </>
  );
}