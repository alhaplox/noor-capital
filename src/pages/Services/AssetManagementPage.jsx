import {
  assetManagementAssets,
  assetManagementCopy,
  assetManagementTabs,
} from "./assetManagementData";

import "./AssetManagementPage.css";


/* =========================================================
   ASSET MANAGEMENT PAGE
========================================================= */

export default function AssetManagementPage({
  language = "en",
  navigate,
}) {
  const content =
    assetManagementCopy[
    language
    ] ||
    assetManagementCopy.en;


  /* =======================================================
     LOCAL URL
  ======================================================= */

  function localUrl(
    path
  ) {
    return `/${language}/${path}`;
  }


  /* =======================================================
     INTERNAL LINK
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
     TOP
  ======================================================= */

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior:
        "smooth",
    });
  }


  return (
    <main
      className="asset-management-page"

      style={{
        "--asset-hero":
          `url("${assetManagementAssets.hero}")`,

        "--asset-pattern":
          `url("${assetManagementAssets.pattern}")`,

        "--asset-products-bg":
          `url("${assetManagementAssets.productsBackground}")`,

        "--asset-advisor-bg":
          `url("${assetManagementAssets.advisorBackground}")`,

        "--asset-other-bg":
          `url("${assetManagementAssets.otherServicesBackground}")`,

        "--asset-trading-bg":
          `url("${assetManagementAssets.tradingBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="asset-hero">

        <div className="asset-container">

          <h1>
            {content.hero.title}
          </h1>

        </div>

      </section>


      {/* ===================================================
          INTRO SECTION
      =================================================== */}

      <section className="asset-intro-section">


        {/* ===============================================
            SERVICES TABS
        =============================================== */}

        <div className="asset-tabs-shell">

          <div className="asset-tabs">

            {assetManagementTabs.map(
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
                        "asset"
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
            ASSET MANAGEMENT
        =============================================== */}

        <div className="asset-container asset-intro-layout">


          {/* IMAGE */}

          <div className="asset-main-image">

            <img
              src={
                assetManagementAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>


          {/* COPY */}

          <div className="asset-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <div className="asset-intro-paragraphs">

              {content.intro.paragraphs.map(
                (
                  paragraph,
                  index
                ) => (

                  <p
                    key={
                      `intro-${index}`
                    }
                  >
                    {paragraph}
                  </p>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          PRODUCTS & SERVICES
      =================================================== */}

      <section className="asset-products-section">

        <div className="asset-container">

          <h2 className="asset-gradient-title asset-products-title">
            {content.products.title}
          </h2>


          <div className="asset-products-grid">

            {content.products.items.map(
              (
                item
              ) => (

                <article
                  className="asset-product-card"

                  key={
                    item.key
                  }

                  style={{
                    "--product-image":
                      `url("${assetManagementAssets.productImages[item.key]}")`,
                  }}
                >

                  <div className="asset-product-overlay" />


                  <div className="asset-product-content">

                    <h3>
                      {item.title}
                    </h3>


                    <ul>

                      {item.bullets.map(
                        (
                          bullet
                        ) => (

                          <li
                            key={
                              bullet
                            }
                          >
                            {bullet}
                          </li>

                        )
                      )}

                    </ul>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          ASSET MANAGER CTA
      =================================================== */}

      <section className="asset-advisor-section">

        <div className="asset-container asset-cta-layout">


          {/* COPY */}

          <div className="asset-cta-copy">

            <h2>
              {content.advisor.title}
            </h2>


            <a
              href={
                localUrl(
                  "contact-us"
                )
              }

              className="asset-gold-button"

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

          <div className="asset-cta-image">

            <img
              src={
                assetManagementAssets.advisor
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

      <section className="asset-other-section">

        <div className="asset-container">

          <h2 className="asset-gradient-title asset-other-title">
            {
              content
                .otherServices
                .title
            }
          </h2>


          <div className="asset-other-grid">

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
                      className="asset-other-card"

                      key={
                        item.key
                      }
                    >


                      {/* IMAGE */}

                      <div className="asset-other-image">

                        <img
                          src={
                            assetManagementAssets
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


                      {/* COPY */}

                      <div className="asset-other-copy">

                        <h3>
                          {item.title}
                        </h3>


                        <div className="asset-other-paragraphs">

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
                                {paragraph}
                              </p>

                            )
                          )}

                        </div>


                        <div className="asset-other-bottom">

                          <a
                            href={
                              href
                            }

                            className="asset-border-button"

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

      <section className="asset-trading-section">

        <div className="asset-container asset-cta-layout">


          {/* COPY */}

          <div className="asset-cta-copy">

            <h2>
              {content.trading.title}
            </h2>


            <ul className="asset-benefits">

              {content
                .trading
                .benefits
                .map(
                  (
                    item
                  ) => (

                    <li
                      key={
                        item
                      }
                    >
                      {item}
                    </li>

                  )
                )}

            </ul>


            <div className="asset-cta-buttons">

              <a
                href={
                  localUrl(
                    "trading/mt4-platform"
                  )
                }

                className="asset-gold-button"

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

                <span aria-hidden="true">
                  ›
                </span>

              </a>


              <a
                href="https://mynoor.noorcap.ae/en/mynoor-v2/register"

                target="_blank"

                rel="noopener noreferrer"

                className="asset-gold-button"
              >

                <span>
                  {content.trading.live}
                </span>

                <span aria-hidden="true">
                  ›
                </span>

              </a>

            </div>

          </div>


          {/* IMAGE */}

          <div className="asset-cta-image">

            <img
              src={
                assetManagementAssets.trading
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

      <div className="asset-back-top-shell">

        <button
          type="button"

          className="asset-back-top"

          onClick={
            backToTop
          }

          aria-label={
            content.backToTop
          }
        >

          <img
            src={
              assetManagementAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}