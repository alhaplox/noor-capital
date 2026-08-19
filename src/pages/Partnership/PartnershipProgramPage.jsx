import {
  useRef,
} from "react";

import PartnershipTabs from "./components/PartnershipTabs";

import {
  partnershipFeaturedArticles,
  partnershipProgramAssets,
  partnershipProgramCopy,
} from "./partnershipProgramData";

import "./PartnershipProgramPage.css";


export default function PartnershipProgramPage({
  language = "en",
  navigate,
}) {
  const content =
    partnershipProgramCopy[
    language
    ] ||
    partnershipProgramCopy.en;


  const featuredRef =
    useRef(null);


  const featureIcons = [
    partnershipProgramAssets.rewards,
    partnershipProgramAssets.businessSupport,
    partnershipProgramAssets.investmentSolutions,
    partnershipProgramAssets.enrollment,
    partnershipProgramAssets.commissionTransfer,
    partnershipProgramAssets.productSupport,
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
    <main className="partnership-program-page">


      {/* ===================================================
          HERO
      =================================================== */}

      <section
        className="partnership-program-hero"

        style={{
          backgroundImage:
            `url("${partnershipProgramAssets.hero}")`,
        }}
      >

        <div className="partnership-program-container">

          <h1>
            {content.hero}
          </h1>


          <p className="partnership-program-hero-subtitle">
            {
              content.heroSubtitle
            }
          </p>

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section
        className="partnership-program-intro"

        style={{
          backgroundImage:
            `url("${partnershipProgramAssets.pattern}")`,
        }}
      >

        <div className="partnership-program-container">

          <PartnershipTabs
            language={language}

            activeTab="program"

            navigate={navigate}

            fixed={false}
          />


          <div className="partnership-program-intro-layout">

            <div className="partnership-program-intro-visual">

              <img
                src={
                  partnershipProgramAssets
                    .introImage
                }

                alt="marketing"

                loading="lazy"
              />


              <div className="partnership-program-intro-shadow" />

            </div>


            <div className="partnership-program-intro-copy">

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
        className="partnership-program-features"

        style={{
          backgroundImage:
            `url("${partnershipProgramAssets.featuresBackground}")`,
        }}
      >

        <div className="partnership-program-container">

          <h2 className="partnership-program-section-title">
            {
              content.featuresTitle
            }
          </h2>


          <div className="partnership-program-features-grid">

            {content.features.map(
              (
                feature,
                index
              ) => (

                <article
                  className="partnership-program-feature-card"

                  key={
                    feature.title
                  }
                >

                  <img
                    src={
                      featureIcons[
                      index
                      ]
                    }

                    alt=""

                    className="partnership-program-feature-icon"
                  />


                  <h3>
                    {
                      feature.title
                    }
                  </h3>


                  <p>
                    {
                      feature.description
                    }
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          ENQUIRE NOW
      =================================================== */}

      <section className="partnership-program-enquiry">

        <div className="partnership-program-container partnership-program-enquiry-layout">


          <div className="partnership-program-enquiry-copy">

            <h2>
              {
                content.enquiry.title
              }
            </h2>


            <p className="partnership-program-enquiry-subtitle">
              {
                content.enquiry.subtitle
              }
            </p>


            <p>
              {
                content.enquiry.description
              }
            </p>

          </div>


          <div className="partnership-program-form-shell">

            <form
              className="partnership-program-form"

              autoComplete="off"

              onSubmit={
                handleSubmit
              }
            >

              <div className="partnership-program-form-two">

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


              <div className="partnership-program-form-two">

                <label>

                  <span>
                    {
                      content.form.nationality
                    }
                  </span>


                  <div className="partnership-program-faux-select">

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


                  <div className="partnership-program-faux-select">

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


              <label className="partnership-program-checkbox">

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

                className="partnership-program-submit"
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

      <section className="partnership-program-featured">

        <div className="partnership-program-container">

          <h2 className="partnership-program-section-title">
            {
              content.featuredTitle
            }
          </h2>


          <div className="partnership-program-featured-shell">

            <div
              className="partnership-program-featured-slider"

              ref={
                featuredRef
              }
            >

              {partnershipFeaturedArticles.map(
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
                      className="partnership-program-featured-card"

                      key={
                        article.route
                      }
                    >

                      <div className="partnership-program-featured-image">

                        <img
                          src={
                            article.image
                          }

                          alt="Tutoring Services"

                          loading="lazy"
                        />

                      </div>


                      <div className="partnership-program-featured-content">

                        <span className="partnership-program-gradient-text">
                          {
                            article.date
                          }
                        </span>


                        <p>
                          {title}
                        </p>


                        <div className="partnership-program-featured-button-row">

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

              className="partnership-program-featured-arrow partnership-program-featured-arrow-left"

              onClick={() =>
                scrollFeatured(
                  -1
                )
              }
            >

              <img
                src={
                  partnershipProgramAssets
                    .arrowLeft
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="partnership-program-featured-arrow partnership-program-featured-arrow-right"

              onClick={() =>
                scrollFeatured(
                  1
                )
              }
            >

              <img
                src={
                  partnershipProgramAssets
                    .arrowRight
                }

                alt=""
              />

            </button>

          </div>


          <div className="partnership-program-view-all">

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

      <div className="partnership-program-back-top-shell">

        <button
          type="button"

          className="partnership-program-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              partnershipProgramAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}