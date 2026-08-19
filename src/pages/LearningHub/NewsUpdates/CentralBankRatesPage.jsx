import NewsTabs from "./components/NewsTabs";

import {
  centralBankRatesAssets,
  centralBankRatesCopy,
  centralBankRatesWidgetUrl,
} from "./centralBankRatesData";

import "./CentralBankRatesPage.css";


export default function CentralBankRatesPage({
  language = "en",
  navigate,
}) {
  const content =
    centralBankRatesCopy[
    language
    ] ||
    centralBankRatesCopy.en;


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <main
      className="central-bank-rates-page"

      style={{
        "--central-bank-rates-hero":
          `url("${centralBankRatesAssets.hero}")`,

        "--central-bank-rates-background":
          `url("${centralBankRatesAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="central-bank-rates-hero">

        <div className="central-bank-rates-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          MAIN
      =================================================== */}

      <section className="central-bank-rates-main">


        <NewsTabs
          language={language}

          activeTab="rates"

          navigate={navigate}
        />


        <div className="central-bank-rates-container central-bank-rates-content">


          {/* =================================================
              TITLE
          ================================================= */}

          <h2 className="central-bank-rates-title">
            {content.title}
          </h2>


          {/* =================================================
              DUKASCOPY WIDGET
          ================================================= */}

          <div className="central-bank-rates-widget">

            <iframe
              src={
                centralBankRatesWidgetUrl
              }

              title="Central Bank Rates"

              frameBorder="0"

              scrolling="auto"

              className="central-bank-rates-iframe"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="central-bank-rates-back-top-shell">

        <button
          type="button"

          className="central-bank-rates-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              centralBankRatesAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}