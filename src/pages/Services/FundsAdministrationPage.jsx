import {
  fundsAdministrationAssets,
  fundsAdministrationCopy,
  fundsAdministrationTabs,
} from "./fundsAdministrationData";

import "./FundsAdministrationPage.css";


/* =========================================================
   FUNDS ADMINISTRATION PAGE
========================================================= */

export default function FundsAdministrationPage({
  language = "en",
  navigate,
}) {
  const content =
    fundsAdministrationCopy[
    language
    ] ||
    fundsAdministrationCopy.en;


  /* =======================================================
     LOCAL URL
  ======================================================= */

  function localUrl(
    path
  ) {
    return `/${language}/${path}`;
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

    navigate(href);
  }


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  /* =======================================================
     RENDER OTHER SERVICE PARAGRAPH
  ======================================================= */

  function renderParagraph(
    paragraph,
    key
  ) {
    const separator =
      paragraph.indexOf(":");


    if (
      separator <= 0
    ) {
      return (
        <p key={key}>
          {paragraph}
        </p>
      );
    }


    const title =
      paragraph.slice(
        0,
        separator
      );


    const text =
      paragraph.slice(
        separator + 1
      );


    return (
      <p key={key}>
        <strong>
          {title}:
        </strong>

        {text}
      </p>
    );
  }


  return (
    <main
      className="funds-page"

      style={{
        "--funds-hero":
          `url("${fundsAdministrationAssets.hero}")`,

        "--funds-pattern":
          `url("${fundsAdministrationAssets.pattern}")`,

        "--funds-features-bg":
          `url("${fundsAdministrationAssets.featuresBackground}")`,

        "--funds-advisor-bg":
          `url("${fundsAdministrationAssets.advisorBackground}")`,

        "--funds-other-bg":
          `url("${fundsAdministrationAssets.otherServicesBackground}")`,

        "--funds-trading-bg":
          `url("${fundsAdministrationAssets.tradingBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="funds-hero">

        <div className="funds-container">

          <h1>
            {content.hero.title}
          </h1>

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="funds-intro-section">


        {/* ===============================================
            ROUTE TABS
        =============================================== */}

        <div className="funds-tabs-shell">

          <div className="funds-tabs">

            {fundsAdministrationTabs.map(
              (
                tab
              ) => {

                const href =
                  localUrl(
                    tab.path
                  );


                return (
                  <a
                    key={
                      tab.key
                    }

                    href={
                      href
                    }

                    className={
                      tab.key ===
                        "funds"
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
                      content.tabs[
                      tab.key
                      ]
                    }

                  </a>
                );
              }
            )}

          </div>

        </div>


        {/* ===============================================
            CONTENT
            SOURCE: IMAGE LEFT / TEXT RIGHT
        =============================================== */}

        <div className="funds-container funds-intro-layout">


          {/* IMAGE */}

          <div className="funds-main-image">

            <img
              src={
                fundsAdministrationAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>


          {/* COPY */}

          <div className="funds-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <p>
              {content.intro.text}
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          FUND ADMINISTRATION SERVICES
      =================================================== */}

      <section className="funds-features-section">

        <div className="funds-container">

          <h2 className="funds-features-title">
            {content.features.title}
          </h2>


          <div className="funds-features-grid">

            {content.features.items.map(
              (
                item
              ) => (

                <article
                  className="funds-feature-card"

                  key={
                    item.title
                  }
                >

                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.text}
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          ADVISOR CTA
      =================================================== */}

      <section className="funds-advisor-section">

        <div className="funds-container funds-cta-layout">


          {/* COPY */}

          <div className="funds-cta-copy">

            <h2>
              {content.advisor.title}
            </h2>


            <a
              href={
                localUrl(
                  "contact-us"
                )
              }

              className="funds-gold-button"

              onClick={(
                event
              ) =>
                handleInternalLink(
                  event,
                  localUrl(
                    "contact-us"
                  )
                )
              }
            >

              <span>
                {content.advisor.button}
              </span>


              <span
                aria-hidden="true"
              >
                ›
              </span>

            </a>

          </div>


          {/* IMAGE */}

          <div className="funds-cta-image">

            <img
              src={
                fundsAdministrationAssets.advisorImage
              }

              alt=""

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          OTHER SERVICES
      =================================================== */}

      <section className="funds-other-section">

        <div className="funds-container">

          <h2 className="funds-other-title">
            {content.otherServices.title}
          </h2>


          <div className="funds-other-grid">

            {content.otherServices.items.map(
              (
                item
              ) => {

                const href =
                  localUrl(
                    item.path
                  );


                return (
                  <article
                    className="funds-other-card"

                    key={
                      item.key
                    }
                  >


                    {/* IMAGE */}

                    <div className="funds-other-image">

                      <img
                        src={
                          fundsAdministrationAssets
                            .otherServices[
                          item.key
                          ]
                        }

                        alt={
                          item.title
                        }

                        loading="lazy"
                      />

                    </div>


                    {/* CONTENT */}

                    <div className="funds-other-content">

                      <h3>
                        {item.title}
                      </h3>


                      <div className="funds-other-paragraphs">

                        {item.paragraphs.map(
                          (
                            paragraph,
                            index
                          ) =>
                            renderParagraph(
                              paragraph,
                              `${item.key}-${index}`
                            )
                        )}

                      </div>


                      <div className="funds-other-bottom">

                        <a
                          href={
                            href
                          }

                          className="funds-border-button"

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
                              .otherServices
                              .learnMore
                          }
                        </a>

                      </div>

                    </div>

                  </article>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          TRADING CTA
      =================================================== */}

      <section className="funds-trading-section">

        <div className="funds-container funds-cta-layout">


          {/* COPY */}

          <div className="funds-cta-copy">

            <h2>
              {content.trading.title}
            </h2>


            <ul className="funds-benefits">

              {content.trading.benefits.map(
                (
                  benefit
                ) => (

                  <li
                    key={
                      benefit
                    }
                  >
                    {benefit}
                  </li>

                )
              )}

            </ul>


            <div className="funds-cta-buttons">

              <a
                href={
                  localUrl(
                    "trading/mt4-platform"
                  )
                }

                className="funds-gold-button"

                onClick={(
                  event
                ) =>
                  handleInternalLink(
                    event,
                    localUrl(
                      "trading/mt4-platform"
                    )
                  )
                }
              >

                <span>
                  {content.trading.demo}
                </span>

                <span
                  aria-hidden="true"
                >
                  ›
                </span>

              </a>


              <a
                href="https://mynoor.noorcap.ae/en/mynoor-v2/register"

                target="_blank"

                rel="noopener noreferrer"

                className="funds-gold-button"
              >

                <span>
                  {content.trading.live}
                </span>

                <span
                  aria-hidden="true"
                >
                  ›
                </span>

              </a>

            </div>

          </div>


          {/* IMAGE */}

          <div className="funds-cta-image">

            <img
              src={
                fundsAdministrationAssets.tradingImage
              }

              alt=""

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="funds-back-top-shell">

        <button
          type="button"

          className="funds-back-top"

          onClick={
            backToTop
          }

          aria-label={
            content.backToTop
          }
        >

          <img
            src={
              fundsAdministrationAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}