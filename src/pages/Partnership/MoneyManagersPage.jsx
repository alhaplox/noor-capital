import {
  useRef,
} from "react";

import PartnershipTabs from "./components/PartnershipTabs";

import {
  moneyManagersAssets,
  moneyManagersCopy,
  moneyManagersFeaturedArticles,
} from "./moneyManagersData";

import "./MoneyManagersPage.css";


export default function MoneyManagersPage({
  language = "en",
  navigate,
}) {
  const content =
    moneyManagersCopy[
    language
    ] ||
    moneyManagersCopy.en;


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


  const roleIcons = [
    moneyManagersAssets.prepareBudget,
    moneyManagersAssets.tax,
    moneyManagersAssets.monitorAsset,
    moneyManagersAssets.assistInvest,
    moneyManagersAssets.financialAdvice,
  ];


  return (
    <main className="money-managers-page">


      {/* ===================================================
          HERO
      =================================================== */}

      <section
        className="money-managers-hero"

        style={{
          backgroundImage:
            `url("${moneyManagersAssets.hero}")`,
        }}
      >

        <div className="money-managers-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section
        className="money-managers-intro"

        style={{
          backgroundImage:
            `url("${moneyManagersAssets.pattern}")`,
        }}
      >

        <div className="money-managers-container">

          <PartnershipTabs
            language={language}

            activeTab="managers"

            navigate={navigate}
          />


          <div className="money-managers-intro-layout">


            <div className="money-managers-intro-visual">

              <img
                src={
                  moneyManagersAssets
                    .introImage
                }

                alt="marketing"

                loading="lazy"
              />


              <div className="money-managers-intro-shadow" />

            </div>


            <div className="money-managers-intro-copy">

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
                    {paragraph}
                  </p>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          ROLE OF MONEY MANAGERS
      =================================================== */}

      <section
        className="money-managers-roles"

        style={{
          backgroundImage:
            `url("${moneyManagersAssets.roleBackground}")`,
        }}
      >

        <div className="money-managers-container">

          <h2 className="money-managers-section-title">
            {
              content.rolesTitle
            }
          </h2>


          <div className="money-managers-roles-grid">

            {content.roles.map(
              (
                role,
                index
              ) => (

                <article
                  className="money-managers-role-card"

                  key={
                    role.title
                  }
                >

                  <img
                    src={
                      roleIcons[
                      index
                      ]
                    }

                    alt=""

                    className="money-managers-role-icon"
                  />


                  <h3>
                    {
                      role.title
                    }
                  </h3>


                  <p>
                    {
                      role.description
                    }
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          REQUEST CALL BACK
      =================================================== */}

      <section
        className="money-managers-callback"

        style={{
          backgroundImage:
            `url("${moneyManagersAssets.requestBackground}")`,
        }}
      >

        <div className="money-managers-container money-managers-callback-layout">


          <div className="money-managers-callback-copy">

            <h2>
              {
                content.callback.title
              }
            </h2>


            <p className="money-managers-callback-subtitle">
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


          <div className="money-managers-form-shell">

            <form
              className="money-managers-form"

              autoComplete="off"

              onSubmit={
                handleSubmit
              }
            >

              <div className="money-managers-form-two">

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


              <div className="money-managers-form-two">

                <label>

                  <span>
                    {
                      content.form.nationality
                    }
                  </span>


                  <div className="money-managers-faux-select">

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


                  <div className="money-managers-faux-select">

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


              <label className="money-managers-checkbox">

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

                className="money-managers-submit"
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

      <section className="money-managers-featured">

        <div className="money-managers-container">

          <h2 className="money-managers-section-title">
            {
              content.featuredTitle
            }
          </h2>


          <div className="money-managers-featured-shell">

            <div
              className="money-managers-featured-slider"

              ref={
                featuredRef
              }
            >

              {moneyManagersFeaturedArticles.map(
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
                      className="money-managers-featured-card"

                      key={
                        article.route
                      }
                    >

                      <div className="money-managers-featured-image">

                        <img
                          src={
                            article.image
                          }

                          alt="Tutoring Services"

                          loading="lazy"
                        />

                      </div>


                      <div className="money-managers-featured-content">

                        <span className="money-managers-gradient-text">
                          {
                            article.date
                          }
                        </span>


                        <p>
                          {title}
                        </p>


                        <div className="money-managers-featured-button-row">

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

              className="money-managers-featured-arrow money-managers-featured-arrow-left"

              onClick={() =>
                scrollFeatured(
                  -1
                )
              }
            >

              <img
                src={
                  moneyManagersAssets
                    .arrowLeft
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="money-managers-featured-arrow money-managers-featured-arrow-right"

              onClick={() =>
                scrollFeatured(
                  1
                )
              }
            >

              <img
                src={
                  moneyManagersAssets
                    .arrowRight
                }

                alt=""
              />

            </button>

          </div>


          <div className="money-managers-view-all">

            <a
              href="https://noorcapital-dev.vercel.app/"

              target="_blank"

              rel="noreferrer"
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

      <div className="money-managers-back-top-shell">

        <button
          type="button"

          className="money-managers-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              moneyManagersAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}