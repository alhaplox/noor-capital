import {
  investmentServicesAssets,
  investmentServicesCopy,
  investmentServicesTabs,
} from "./investmentServicesData";

import "./InvestmentServicesPage.css";


/* =========================================================
   INVESTMENT SERVICES PAGE
========================================================= */

export default function InvestmentServicesPage({
  language = "en",
  navigate,
}) {
  const content =
    investmentServicesCopy[
    language
    ] ||
    investmentServicesCopy.en;


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


  return (
    <main
      className="investment-services-page"

      style={{
        "--investment-hero":
          `url("${investmentServicesAssets.hero}")`,

        "--investment-pattern":
          `url("${investmentServicesAssets.pattern}")`,

        "--investment-advisor-bg":
          `url("${investmentServicesAssets.advisorBackground}")`,

        "--investment-other-bg":
          `url("${investmentServicesAssets.otherServicesBackground}")`,

        "--investment-trading-bg":
          `url("${investmentServicesAssets.tradingBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="investment-hero">

        <div className="investment-container">

          <h1>
            {content.hero.title}
          </h1>

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="investment-intro-section">


        {/* ===============================================
            SERVICES ROUTE TABS
        =============================================== */}

        <div className="investment-tabs-shell">

          <div className="investment-tabs">

            {investmentServicesTabs.map(
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
                        "investment"
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
            INVESTMENT SERVICES INTRO
        =============================================== */}

        <div className="investment-container investment-intro-layout">


          {/* COPY - LEFT */}

          <div className="investment-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <div className="investment-intro-paragraphs">

              {content.intro.paragraphs.map(
                (
                  paragraph,
                  index
                ) => {

                  const separator =
                    paragraph.indexOf(
                      ":"
                    );


                  if (
                    separator > 0
                  ) {
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
                      <p
                        key={
                          `investment-intro-${index}`
                        }
                      >
                        <strong>
                          {title}:
                        </strong>

                        {text}
                      </p>
                    );
                  }


                  return (
                    <p
                      key={
                        `investment-intro-${index}`
                      }
                    >
                      {paragraph}
                    </p>
                  );
                }
              )}

            </div>

          </div>


          {/* IMAGE - RIGHT */}

          <div className="investment-main-image">

            <img
              src={
                investmentServicesAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          NOOR CAPITAL INVESTMENT SERVICES
      =================================================== */}

      <section className="investment-features-section">

        <div className="investment-container">


          {/* HEADING */}

          <div className="investment-features-heading">

            <h2>
              {content.features.title}
            </h2>


            <p>
              {content.features.intro}
            </p>

          </div>


          {/* CARDS */}

          <div className="investment-features-grid">

            {content.features.items.map(
              (
                item
              ) => (

                <article
                  className="investment-feature-card"

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
          CONSULT EXPERTS CTA
      =================================================== */}

      <section className="investment-advisor-section">

        <div className="investment-container investment-cta-layout">


          {/* COPY */}

          <div className="investment-cta-copy">

            <h2>
              {content.advisor.title}
            </h2>


            <a
              href={
                localUrl(
                  "contact-us"
                )
              }

              className="investment-gold-button"

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

          <div className="investment-cta-image">

            <img
              src={
                investmentServicesAssets.advisorImage
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

      <section className="investment-other-section">

        <div className="investment-container">

          <h2 className="investment-other-title">
            {content.otherServices.title}
          </h2>


          <div className="investment-other-grid">

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
                    className="investment-other-card"

                    key={
                      item.key
                    }
                  >


                    {/* IMAGE */}

                    <div className="investment-other-image">

                      <img
                        src={
                          investmentServicesAssets
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

                    <div className="investment-other-content">

                      <h3>
                        {item.title}
                      </h3>


                      <div className="investment-other-paragraphs">

                        {item.paragraphs.map(
                          (
                            paragraph,
                            index
                          ) => {

                            const separator =
                              paragraph.indexOf(
                                ":"
                              );


                            if (
                              separator > 0
                            ) {
                              const heading =
                                paragraph.slice(
                                  0,
                                  separator
                                );

                              const text =
                                paragraph.slice(
                                  separator + 1
                                );


                              return (
                                <p
                                  key={
                                    `${item.key}-${index}`
                                  }
                                >

                                  <strong>
                                    {heading}:
                                  </strong>

                                  {text}

                                </p>
                              );
                            }


                            return (
                              <p
                                key={
                                  `${item.key}-${index}`
                                }
                              >
                                {paragraph}
                              </p>
                            );
                          }
                        )}

                      </div>


                      <div className="investment-other-bottom">

                        <a
                          href={
                            href
                          }

                          className="investment-border-button"

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

      <section className="investment-trading-section">

        <div className="investment-container investment-cta-layout">


          {/* COPY */}

          <div className="investment-cta-copy">

            <h2>
              {content.trading.title}
            </h2>


            <ul className="investment-benefits">

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


            <div className="investment-cta-buttons">

              <a
                href={
                  localUrl(
                    "trading/mt4-platform"
                  )
                }

                className="investment-gold-button"

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

                className="investment-gold-button"
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

          <div className="investment-cta-image">

            <img
              src={
                investmentServicesAssets.tradingImage
              }

              alt=""

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TOP
      =================================================== */}

      <div className="investment-back-top-shell">

        <button
          type="button"

          className="investment-back-top"

          onClick={
            backToTop
          }

          aria-label={
            content.backToTop
          }
        >

          <img
            src={
              investmentServicesAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}