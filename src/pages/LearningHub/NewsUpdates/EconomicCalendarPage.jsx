import {
  useMemo,
} from "react";

import NewsTabs from "./components/NewsTabs";

import {
  economicCalendarAssets,
  economicCalendarCopy,
} from "./economicCalendarData";

import "./EconomicCalendarPage.css";


export default function EconomicCalendarPage({
  language = "en",
  navigate,
}) {
  const content =
    economicCalendarCopy[
    language
    ] ||
    economicCalendarCopy.en;


  /* =======================================================
     TRADINGVIEW URL
  ======================================================= */

  const tradingViewUrl =
    useMemo(
      () => {
        const config = {
          width:
            "100%",

          height:
            600,

          isTransparent:
            false,

          colorTheme:
            "dark",

          utm_source:
            "www.noorcapital.ae",

          utm_medium:
            "widget",

          utm_campaign:
            "events",

          "page-uri":
            `www.noorcapital.ae/${language}/learning-hub/news-updates/economic-calendar`,
        };


        return (
          "https://www.tradingview-widget.com/embed-widget/events/#" +
          encodeURIComponent(
            JSON.stringify(
              config
            )
          )
        );
      },
      [
        language,
      ]
    );


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
      className="economic-calendar-page"

      style={{
        "--economic-calendar-hero":
          `url("${economicCalendarAssets.hero}")`,

        "--economic-calendar-background":
          `url("${economicCalendarAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="economic-calendar-hero">

        <div className="economic-calendar-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          MAIN
      =================================================== */}

      <section className="economic-calendar-main">


        <NewsTabs
          language={language}

          activeTab="calendar"

          navigate={navigate}
        />


        <div className="economic-calendar-container economic-calendar-content">


          {/* =================================================
              TITLE
          ================================================= */}

          <h2 className="economic-calendar-gradient-title">
            {content.title}
          </h2>


          {/* =================================================
              TRADINGVIEW
          ================================================= */}

          <div className="economic-calendar-widget">

            <div className="economic-calendar-widget-inner">

              <iframe
                src={tradingViewUrl}

                title="events TradingView widget"

                className="economic-calendar-iframe"

                scrolling="no"

                frameBorder="0"

                allowTransparency="true"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="economic-calendar-back-top-shell">

        <button
          type="button"

          className="economic-calendar-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              economicCalendarAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}