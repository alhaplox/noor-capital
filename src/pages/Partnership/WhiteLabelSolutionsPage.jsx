import {
  useRef,
} from "react";

import PartnershipTabs from "./components/PartnershipTabs";

import {
  whiteLabelAssets,
  whiteLabelCopy,
  whiteLabelFeaturedArticles,
} from "./whiteLabelData";

import "./WhiteLabelSolutionsPage.css";


export default function WhiteLabelSolutionsPage({
  language = "en",
  navigate,
}) {
  const content =
    whiteLabelCopy[
    language
    ] ||
    whiteLabelCopy.en;


  const featuredRef =
    useRef(null);


  const featureIcons = [
    whiteLabelAssets.rewards,
    whiteLabelAssets.businessSupport,
    whiteLabelAssets.investmentSolutions,
    whiteLabelAssets.enrollment,
    whiteLabelAssets.commissionTransfer,
    whiteLabelAssets.productSupport,
  ];


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
    <main className="white-label-page">


      {/* ===================================================
          HERO
      =================================================== */}

      <section
        className="white-label-hero"

        style={{
          backgroundImage:
            `url("${whiteLabelAssets.hero}")`,
        }}
      >

        <div className="white-label-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section
        className="white-label-intro"

        style={{
          backgroundImage:
            `url("${whiteLabelAssets.pattern}")`,
        }}
      >

        <div className="white-label-container">

          <PartnershipTabs
            language={language}

            activeTab="whiteLabel"

            navigate={navigate}
          />


          <div className="white-label-intro-layout">


            <div className="white-label-intro-visual">

              <img
                src={
                  whiteLabelAssets
                    .introImage
                }

                alt="marketing"

                loading="lazy"
              />


              <div className="white-label-intro-shadow" />

            </div>


            <div className="white-label-intro-copy">

              <h2>
                {
                  content.intro.title
                }
              </h2>


              {content.intro.paragraphs.map(
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

          </div>

        </div>

      </section>


      {/* ===================================================
          FEATURES & BENEFITS
      =================================================== */}

      <section
        className="white-label-features"

        style={{
          backgroundImage:
            `url("${whiteLabelAssets.featuresBackground}")`,
        }}
      >

        <div className="white-label-container">

          <h2 className="white-label-section-title">
            {
              content.featuresTitle
            }
          </h2>


          <div className="white-label-features-grid">

            {content.features.map(
              (
                feature,
                index
              ) => (

                <article
                  className="white-label-feature-card"

                  key={
                    feature
                  }
                >

                  <img
                    src={
                      featureIcons[
                      index
                      ]
                    }

                    alt=""

                    className="white-label-feature-icon"
                  />


                  <h3>
                    {feature}
                  </h3>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          REQUEST A CALL BACK
      =================================================== */}

      <section
        className="white-label-callback"

        style={{
          backgroundImage:
            `url("${whiteLabelAssets.callbackBackground}")`,
        }}
      >

        <div className="white-label-container white-label-callback-layout">


          <div className="white-label-callback-copy">

            <h2>
              {
                content.callback.title
              }
            </h2>


            <p className="white-label-callback-subtitle">
              {
                content.callback.subtitle
              }
            </p>


            <p>
              {
                content.callback.description
              }
            </p>

          </div>


          <div className="white-label-form-shell">

            <form
              className="white-label-form"

              autoComplete="off"

              onSubmit={
                handleSubmit
              }
            >

              <div className="white-label-form-two">

                <label>

                  <span>
                    {
                      content.form.firstName
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
                      content.form.lastName
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
                    content.form.company
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
                    content.form.email
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
                    content.form.phone
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


              <div className="white-label-form-two">

                <label>

                  <span>
                    {
                      content.form.nationality
                    }
                  </span>


                  <div className="white-label-faux-select">

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
                      content.form.interest
                    }
                  </span>


                  <div className="white-label-faux-select">

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


              <label className="white-label-checkbox">

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

                className="white-label-submit"
              >

                <span>
                  {
                    content.form.submit
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

      <section className="white-label-featured">

        <div className="white-label-container">

          <h2 className="white-label-section-title">
            {
              content.featuredTitle
            }
          </h2>


          <div className="white-label-featured-shell">

            <div
              className="white-label-featured-slider"

              ref={
                featuredRef
              }
            >

              {whiteLabelFeaturedArticles.map(
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
                      className="white-label-featured-card"

                      key={
                        article.route
                      }
                    >

                      <div className="white-label-featured-image">

                        <img
                          src={
                            article.image
                          }

                          alt="Tutoring Services"

                          loading="lazy"
                        />

                      </div>


                      <div className="white-label-featured-content">

                        <span className="white-label-gradient-text">
                          {
                            article.date
                          }
                        </span>


                        <p>
                          {title}
                        </p>


                        <div className="white-label-featured-button-row">

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

              className="white-label-featured-arrow white-label-featured-arrow-left"

              onClick={() =>
                scrollFeatured(
                  -1
                )
              }
            >

              <img
                src={
                  whiteLabelAssets
                    .arrowLeft
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="white-label-featured-arrow white-label-featured-arrow-right"

              onClick={() =>
                scrollFeatured(
                  1
                )
              }
            >

              <img
                src={
                  whiteLabelAssets
                    .arrowRight
                }

                alt=""
              />

            </button>

          </div>


          <div className="white-label-view-all">

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

      <div className="white-label-back-top-shell">

        <button
          type="button"

          className="white-label-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              whiteLabelAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}