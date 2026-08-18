import {
  globalFinancialAdvisoryCopy,
  serviceTabs,
  servicesAssets,
} from "./servicesData";

import "./ServicesPage.css";


/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage({
  language = "en",
  navigate,
}) {
  const content =
    globalFinancialAdvisoryCopy[
    language
    ] ||
    globalFinancialAdvisoryCopy.en;


  const currentService =
    "global-financial-advisory";


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
     BACK TOP
  ======================================================= */

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main
      className="services-page"
      style={{
        "--services-hero":
          `url("${servicesAssets.hero}")`,

        "--services-pattern":
          `url("${servicesAssets.pattern}")`,

        "--services-equity-bg":
          `url("${servicesAssets.equityBackground}")`,

        "--services-advisor-bg":
          `url("${servicesAssets.advisorBackground}")`,

        "--services-other-bg":
          `url("${servicesAssets.otherServicesBackground}")`,

        "--services-trading-bg":
          `url("${servicesAssets.tradingBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="services-hero">

        <div className="services-container">

          <h1>
            {content.hero.title}
          </h1>

          <p>
            {content.hero.subtitle}
          </p>

        </div>

      </section>


      {/* ===================================================
          FINANCIAL ADVISORY
      =================================================== */}

      <section className="services-intro-section">


        {/* ===============================================
            ROUTE TABS
        =============================================== */}

        <div className="services-tabs-shell">

          <div className="services-tabs">

            {serviceTabs.map(
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
                        currentService
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
            INTRO CONTENT
        =============================================== */}

        <div className="services-container services-media-layout">

          <div className="services-feature-image">

            <img
              src={
                servicesAssets
                  .financialAdvisory
              }

              alt="Financial Advisory"

              loading="lazy"
            />

          </div>


          <div className="services-feature-copy">

            <h2>
              {
                content
                  .financialAdvisory
                  .title
              }
            </h2>


            <p>
              {
                content
                  .financialAdvisory
                  .intro
              }
            </p>


            <div className="services-financial-list">

              {content
                .financialAdvisory
                .items
                .map(
                  (
                    item
                  ) => (

                    <p
                      key={
                        item.title
                      }
                    >
                      <strong>
                        {item.title}:
                      </strong>

                      {" "}

                      {item.text}
                    </p>

                  )
                )}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          DEBT ADVISORY
      =================================================== */}

      <section className="services-debt-section">

        <div className="services-container">

          <div className="services-section-heading">

            <h2>
              {content.debt.title}
            </h2>

            <p>
              {content.debt.intro}
            </p>

          </div>


          <div className="services-debt-grid">

            {content.debt.items.map(
              (
                item
              ) => (

                <article
                  className="services-debt-card"

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
          EQUITY CAPITAL MARKETS
      =================================================== */}

      <section className="services-equity-section">

        <div className="services-container services-media-layout">

          <div className="services-feature-image">

            <img
              src={
                servicesAssets
                  .equityCapitalMarkets
              }

              alt="Equity Capital Markets"

              loading="lazy"
            />

          </div>


          <div className="services-feature-copy">

            <h2>
              {content.equity.title}
            </h2>


            <p>
              {content.equity.text}
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          FINANCIAL ADVISORS CTA
      =================================================== */}

      <section className="services-advisor-cta">

        <div className="services-container services-cta-layout">

          <div className="services-cta-copy">

            <h2>
              {
                content
                  .advisorCta
                  .title
              }
            </h2>


            <a
              href={
                localUrl(
                  "contact-us"
                )
              }

              className="services-gold-button"

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
                {
                  content
                    .advisorCta
                    .button
                }
              </span>

              <span
                aria-hidden="true"
              >
                ›
              </span>
            </a>

          </div>


          <div className="services-cta-image">

            <img
              src={
                servicesAssets
                  .advisorCta
              }

              alt="Financial Advisors"

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          OTHER SERVICES
      =================================================== */}

      <section className="services-other-section">

        <div className="services-container">

          <h2 className="services-other-title">
            {
              content
                .otherServices
                .title
            }
          </h2>


          <div className="services-other-grid">

            {content
              .otherServices
              .items
              .map(
                (
                  item
                ) => {

                  const href =
                    localUrl(
                      item.path
                    );


                  return (
                    <article
                      className="services-other-card"

                      key={
                        item.key
                      }
                    >

                      <div className="services-other-image">

                        <img
                          src={
                            servicesAssets
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


                      <div className="services-other-copy">

                        <h3>
                          {
                            item.title
                          }
                        </h3>


                        {item.text && (
                          <p>
                            {
                              item.text
                            }
                          </p>
                        )}


                        {item.paragraphs && (
                          <div className="services-other-paragraphs">

                            {item.paragraphs.map(
                              (
                                paragraph,
                                index
                              ) => (

                                <p
                                  key={
                                    `${item.key}-${index}`
                                  }
                                >
                                  {
                                    paragraph
                                  }
                                </p>

                              )
                            )}

                          </div>
                        )}


                        <div className="services-other-bottom">

                          <a
                            href={
                              href
                            }

                            className="services-border-button"

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

      <section className="services-trading-cta">

        <div className="services-container services-cta-layout">

          <div className="services-cta-copy">

            <h2>
              {
                content
                  .tradingCta
                  .title
              }
            </h2>


            <ul>

              {content
                .tradingCta
                .benefits
                .map(
                  (
                    benefit
                  ) => (

                    <li
                      key={
                        benefit
                      }
                    >
                      {
                        benefit
                      }
                    </li>

                  )
                )}

            </ul>


            <div className="services-cta-buttons">

              <a
                href={
                  localUrl(
                    "trading/mt4-platform"
                  )
                }

                className="services-gold-button"

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
                  {
                    content
                      .tradingCta
                      .demo
                  }
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

                className="services-gold-button"
              >
                <span>
                  {
                    content
                      .tradingCta
                      .live
                  }
                </span>

                <span
                  aria-hidden="true"
                >
                  ›
                </span>
              </a>

            </div>

          </div>


          <div className="services-cta-image">

            <img
              src={
                servicesAssets
                  .tradingCta
              }

              alt="Noor Capital Trading"

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TOP
      =================================================== */}

      <div className="services-back-top-shell">

        <button
          type="button"

          className="services-back-top"

          onClick={
            backToTop
          }

          aria-label={
            content.backToTop
          }
        >

          <img
            src={
              servicesAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}