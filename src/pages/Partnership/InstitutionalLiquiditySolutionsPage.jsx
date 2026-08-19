import {
  useRef,
} from "react";

import PartnershipTabs from "./components/PartnershipTabs";

import {
  institutionalFeaturedArticles,
  institutionalLiquidityAssets,
  institutionalLiquidityCopy,
} from "./institutionalLiquidityData";

import "./InstitutionalLiquiditySolutionsPage.css";


export default function InstitutionalLiquiditySolutionsPage({
  language = "en",
  navigate,
}) {
  const content =
    institutionalLiquidityCopy[
    language
    ] ||
    institutionalLiquidityCopy.en;


  const featuredRef =
    useRef(null);


  function localUrl(
    path
  ) {
    return `/${language}/${path}`;
  }


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


  function scrollFeatured(
    direction
  ) {
    if (
      !featuredRef.current
    ) {
      return;
    }


    featuredRef.current.scrollBy({
      left:
        direction * 300,

      behavior:
        "smooth",
    });
  }


  function handleSubmit(
    event
  ) {
    event.preventDefault();
  }


  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <main className="institutional-liquidity-page">


      {/* ===================================================
          HERO
      =================================================== */}

      <section
        className="institutional-liquidity-hero"

        style={{
          backgroundImage:
            `url("${institutionalLiquidityAssets.hero}")`,
        }}
      >

        <div className="institutional-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          LIQUIDITY MANAGEMENT
      =================================================== */}

      <section
        className="institutional-liquidity-intro"

        style={{
          backgroundImage:
            `url("${institutionalLiquidityAssets.pattern}")`,
        }}
      >

        <div className="institutional-container">

          <PartnershipTabs
            language={
              language
            }

            activeTab="liquidity"

            navigate={
              navigate
            }
          />


          <div className="institutional-liquidity-intro-layout">


            <div className="institutional-liquidity-visual">

              <img
                src={
                  institutionalLiquidityAssets
                    .liquidityImage
                }

                alt="marketing"

                loading="lazy"
              />


              <div className="institutional-liquidity-image-shadow" />

            </div>


            <div className="institutional-liquidity-copy">

              <h2>
                {
                  content.liquidity
                    .title
                }
              </h2>


              {content.liquidity.paragraphs.map(
                (
                  paragraph
                ) => (

                  <p
                    key={
                      paragraph
                    }
                  >
                    {paragraph}
                  </p>

                )
              )}


              <p className="institutional-email-line">

                {
                  content.liquidity
                    .emailPrefix
                }
                {" "}

                <a
                  href="mailto:institutions@noorcapital.ae"
                >
                  institutions@noorcapital.ae
                </a>

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          CORE PILLARS
      =================================================== */}

      <section
        className="institutional-pillars"

        style={{
          backgroundImage:
            `url("${institutionalLiquidityAssets.pillarsBackground}")`,
        }}
      >

        <div className="institutional-container">

          <h2 className="institutional-section-title">
            {
              content.pillarsTitle
            }
          </h2>


          <div className="institutional-pillars-grid">

            {content.pillars.map(
              (
                pillar,
                index
              ) => {
                const icons = [
                  institutionalLiquidityAssets.history,
                  institutionalLiquidityAssets.financial,
                  institutionalLiquidityAssets.client,
                ];


                return (
                  <article
                    className="institutional-pillar-card"

                    key={
                      pillar.title
                    }
                  >

                    <img
                      src={
                        icons[
                        index
                        ]
                      }

                      alt=""

                      className="institutional-pillar-icon"
                    />


                    <h3>
                      {
                        pillar.title
                      }
                    </h3>


                    <p>
                      {
                        pillar.description
                      }
                    </p>

                  </article>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          REQUEST DEMO
      =================================================== */}

      <section
        className="institutional-demo"

        style={{
          backgroundImage:
            `url("${institutionalLiquidityAssets.requestBackground}")`,
        }}
      >

        <div className="institutional-container institutional-demo-layout">


          <div className="institutional-demo-copy">

            <h2>
              {
                content.demo.title
              }
            </h2>


            <p className="institutional-demo-subtitle">
              {
                content.demo
                  .subtitle
              }
            </p>


            {content.demo.paragraphs.map(
              (
                paragraph
              ) => (

                <p
                  key={
                    paragraph
                  }
                >
                  {
                    paragraph
                  }
                </p>

              )
            )}

          </div>


          {/* FORM */}

          <div className="institutional-demo-form-shell">

            <form
              className="institutional-demo-form"

              autoComplete="off"

              onSubmit={
                handleSubmit
              }
            >

              <div className="institutional-form-two">

                <label>

                  <span>
                    {
                      content.form
                        .firstName
                    }
                  </span>

                  <input
                    type="text"

                    name="first_name"

                    placeholder={
                      content.form
                        .firstNamePlaceholder
                    }
                  />

                </label>


                <label>

                  <span>
                    {
                      content.form
                        .lastName
                    }
                  </span>

                  <input
                    type="text"

                    name="last_name"

                    placeholder={
                      content.form
                        .lastNamePlaceholder
                    }
                  />

                </label>

              </div>


              <label>

                <span>
                  {
                    content.form
                      .company
                  }
                </span>

                <input
                  type="text"

                  name="company_name"

                  placeholder={
                    content.form
                      .companyPlaceholder
                  }
                />

              </label>


              <label>

                <span>
                  {
                    content.form
                      .email
                  }
                </span>

                <input
                  type="email"

                  name="email"

                  placeholder={
                    content.form
                      .emailPlaceholder
                  }
                />

              </label>


              <label>

                <span>
                  {
                    content.form
                      .phone
                  }
                </span>

                <input
                  type="text"

                  name="phone"

                  placeholder={
                    content.form
                      .phonePlaceholder
                  }
                />

              </label>


              <div className="institutional-form-two">

                <label>

                  <span>
                    {
                      content.form
                        .nationality
                    }
                  </span>


                  <div className="institutional-faux-select">

                    <span>
                      {
                        content.form
                          .nationalityPlaceholder
                      }
                    </span>


                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.71429 1.5L6.35714 6.5L11 1.5"
                        stroke="#F3B62E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </div>

                </label>


                <label>

                  <span>
                    {
                      content.form
                        .interest
                    }
                  </span>


                  <div className="institutional-faux-select">

                    <span>
                      {
                        content.form
                          .interestPlaceholder
                      }
                    </span>


                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.71429 1.5L6.35714 6.5L11 1.5"
                        stroke="#F3B62E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </div>

                </label>

              </div>


              <label className="institutional-checkbox">

                <input
                  type="checkbox"

                  name="agree"
                />


                <span>
                  {
                    content.form.agree
                  }
                </span>

              </label>


              <button
                type="submit"

                className="institutional-submit"
              >

                <span>
                  {
                    content.form
                      .submit
                  }
                </span>


                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0.159912 9.54792L2.15324 11.4824L7.95202 5.85479L2.15324 0.227158L0.159912 2.16166L3.96536 5.85479L0.159912 9.54792Z"
                    fill="#0C2E6D"
                  />
                </svg>

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ===================================================
          FEATURED ARTICLES
      =================================================== */}

      <section className="institutional-featured">

        <div className="institutional-container">

          <h2 className="institutional-section-title">
            {
              content.featuredTitle
            }
          </h2>


          <div className="institutional-featured-slider-shell">

            <div
              className="institutional-featured-slider"

              ref={
                featuredRef
              }
            >

              {institutionalFeaturedArticles.map(
                (
                  article
                ) => {
                  const href =
                    localUrl(
                      article.route
                    );


                  const title =
                    article.title[
                    language
                    ] ||
                    article.title.en;


                  return (
                    <article
                      className="institutional-featured-card"

                      key={
                        article.route
                      }
                    >

                      <div className="institutional-featured-image">

                        <img
                          src={
                            article.image
                          }

                          alt="Tutoring Services"

                          loading="lazy"
                        />

                      </div>


                      <div className="institutional-featured-card-content">

                        <span className="institutional-gradient-text">
                          {
                            article.date
                          }
                        </span>


                        <p>
                          {title}
                        </p>


                        <div className="institutional-featured-button-row">

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
                              content.readMore
                            }
                          </a>

                        </div>

                      </div>

                    </article>
                  );
                }
              )}

            </div>


            <button
              type="button"

              className="institutional-featured-arrow institutional-featured-arrow-left"

              onClick={() =>
                scrollFeatured(
                  -1
                )
              }
            >

              <img
                src={
                  institutionalLiquidityAssets
                    .arrowLeft
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="institutional-featured-arrow institutional-featured-arrow-right"

              onClick={() =>
                scrollFeatured(
                  1
                )
              }
            >

              <img
                src={
                  institutionalLiquidityAssets
                    .arrowRight
                }

                alt=""
              />

            </button>

          </div>


          <div className="institutional-featured-view-all">

            <a
              href={
                `/${language}/learning-hub/news-updates/market-updates`
              }

              onClick={(
                event
              ) =>
                handleInternalLink(
                  event,
                  `/${language}/learning-hub/news-updates/market-updates`
                )
              }
            >
              {
                content.viewAll
              }
            </a>

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="institutional-back-top-shell">

        <button
          type="button"

          className="institutional-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              institutionalLiquidityAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}