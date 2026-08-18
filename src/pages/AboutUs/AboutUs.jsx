import {
  useEffect,
} from "react";

import {
  aboutUsAssets,
  aboutUsCopy,
} from "./aboutUsData";

import "./AboutUs.css";


export default function AboutUs({
  language = "en",
  navigate,
}) {
  const content =
    aboutUsCopy[language] ||
    aboutUsCopy.en;


  /* =======================================================
     INITIAL HASH SCROLL
  ======================================================= */

  useEffect(() => {
    const hash =
      window.location.hash
        .replace("#", "");

    if (!hash) {
      return;
    }

    const timer =
      window.setTimeout(
        () => {
          const element =
            document.getElementById(
              hash
            );

          element?.scrollIntoView({
            behavior:
              "auto",

            block:
              "start",
          });
        },
        80
      );

    return () =>
      window.clearTimeout(
        timer
      );
  }, []);


  /* =======================================================
     INTERNAL URL
  ======================================================= */

  function localUrl(
    path
  ) {
    return `/${language}/${path}`;
  }


  /* =======================================================
     NAVIGATION
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
     SECTION TAB
  ======================================================= */

  function goToSection(
    sectionId
  ) {
    const href =
      `/${language}/about-us#${sectionId}`;

    window.history.pushState(
      {},
      "",
      href
    );

    document
      .getElementById(
        sectionId
      )
      ?.scrollIntoView({
        behavior:
          "smooth",

        block:
          "start",
      });
  }


  /* =======================================================
     BACK TO TOP
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
      className="about-us-page"

      style={{
        "--about-hero-bg":
          `url("${aboutUsAssets.heroBg}")`,

        "--about-section-bg":
          `url("${aboutUsAssets.aboutBg}")`,

        "--about-goals-bg":
          `url("${aboutUsAssets.goalsBg}")`,

        "--about-core-bg":
          `url("${aboutUsAssets.coreValuesBg}")`,

        "--about-why-bg":
          `url("${aboutUsAssets.whyBg}")`,

        "--about-marquee-bg":
          `url("${aboutUsAssets.marqueeBg}")`,

        "--about-license-bg":
          `url("${aboutUsAssets.licenseBg}")`,

        "--about-trading-bg":
          `url("${aboutUsAssets.tradingBg}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="about-page-hero">

        <div className="about-page-container">

          <h1>
            {content.pageTitle}
          </h1>

        </div>

      </section>


      {/* ===================================================
          ABOUT
      =================================================== */}

      <section
        className="about-page-intro"

        id="about"
      >

        {/* ===============================================
            STICKY NAV
        =============================================== */}

        <div className="about-page-tabs-shell">

          <div className="about-page-tabs">

            <button
              type="button"

              className="is-active"

              onClick={() =>
                goToSection(
                  "about"
                )
              }
            >
              {content.tabs.about}
            </button>


            <button
              type="button"

              onClick={() =>
                goToSection(
                  "why_noor_capital"
                )
              }
            >
              {content.tabs.why}
            </button>


            <button
              type="button"

              onClick={() =>
                goToSection(
                  "license_and_regulations"
                )
              }
            >
              {content.tabs.license}
            </button>

          </div>

        </div>


        <div className="about-page-container about-page-intro-content">

          {/* IMAGE */}

          <div className="about-page-main-image">

            <img
              src={
                aboutUsAssets.aboutImage
              }

              alt="Noor Capital"

              loading="lazy"
            />

          </div>


          {/* CONTENT */}

          <div className="about-page-copy">

            <h2>
              {content.about.title}
            </h2>


            <div className="about-page-paragraphs">

              {content.about.paragraphs.map(
                (
                  paragraph,
                  index
                ) => (

                  <p
                    key={
                      `about-p-${index}`
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
          VISION / MISSION / OBJECTIVES
      =================================================== */}

      <section className="about-goals-section">

        <div className="about-page-container">

          <div className="about-goals-grid">

            {content.goals.map(
              (
                goal,
                index
              ) => (

                <article
                  className="about-goal-card"
                  key={
                    goal.title
                  }
                >

                  <div className="about-goal-icon">

                    <img
                      src={
                        aboutUsAssets
                          .goalImages[
                        index
                        ]
                      }

                      alt=""

                      loading="lazy"
                    />

                  </div>


                  <h3>
                    {goal.title}
                  </h3>


                  <p>
                    {goal.text}
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          CORE VALUES
      =================================================== */}

      <section className="about-core-values">

        <div className="about-page-container">

          <h2 className="about-page-gradient-heading">
            {content.coreValuesTitle}
          </h2>


          <div className="about-core-grid">

            {content.coreValues.map(
              (
                value,
                index
              ) => (

                <article
                  className="about-core-item"
                  key={
                    value.title
                  }
                >

                  <img
                    src={
                      aboutUsAssets
                        .coreValueImages[
                      index
                      ]
                    }

                    alt=""

                    loading="lazy"
                  />


                  <h3>
                    {value.title}
                  </h3>


                  <p>
                    {value.text}
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          WHY NOOR
      =================================================== */}

      <section
        className="about-why-section"

        id="why_noor_capital"
      >

        <div className="about-page-container">

          <div className="about-why-heading">

            <h2>
              {content.why.title}
            </h2>

            <p>
              {content.why.subtitle}
            </p>

          </div>


          <div className="about-why-grid">

            {content.why.items.map(
              (
                item,
                index
              ) => (

                <article
                  className="about-why-card"
                  key={
                    item.title
                  }
                >

                  <div className="about-why-copy">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>


                  <div className="about-why-image">

                    <img
                      src={
                        aboutUsAssets
                          .whyImages[
                        index
                        ]
                      }

                      alt=""

                      loading="lazy"
                    />

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          MARQUEE
      =================================================== */}

      <section className="about-marquee-section">

        <div className="about-page-container">

          <h2 className="about-marquee-heading">
            {content.marquee.title}
          </h2>

        </div>


        <div className="about-marquee-row">

          <div className="about-marquee-track about-marquee-track-left">

            {[...content.marquee.items, ...content.marquee.items].map(
              (
                item,
                index
              ) => (

                <div
                  className="about-marquee-item"
                  key={
                    `left-${index}`
                  }
                >

                  <span>
                    {item}
                  </span>

                  <img
                    src={
                      aboutUsAssets
                        .marqueeDivider
                    }

                    alt=""
                  />

                </div>

              )
            )}

          </div>

        </div>


        <div className="about-marquee-row">

          <div className="about-marquee-track about-marquee-track-right">

            {[...content.marquee.items, ...content.marquee.items].map(
              (
                item,
                index
              ) => (

                <div
                  className="about-marquee-item"
                  key={
                    `right-${index}`
                  }
                >

                  <span>
                    {item}
                  </span>

                  <img
                    src={
                      aboutUsAssets
                        .marqueeDivider
                    }

                    alt=""
                  />

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          LICENSE
      =================================================== */}

      <section
        className="about-license-section"

        id="license_and_regulations"
      >

        <div className="about-page-container">

          <div className="about-license-heading">

            <h2>
              {content.license.title}
            </h2>

            <p>
              {content.license.intro}
            </p>

          </div>


          <div className="about-license-layout">

            {/* LIST */}

            <div className="about-license-list">

              {content.license.groups.map(
                (
                  group
                ) => (

                  <div
                    className="about-license-group"
                    key={
                      group.title
                    }
                  >

                    <div className="about-license-group-title">

                      <img
                        src={
                          aboutUsAssets
                            .greenTick
                        }

                        alt=""
                      />

                      <h3>
                        {group.title}
                      </h3>

                    </div>


                    <ul>

                      {group.items.map(
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

                  </div>

                )
              )}

            </div>


            {/* IMAGE */}

            <div className="about-license-image">

              <img
                src={
                  aboutUsAssets
                    .licenseImage
                }

                alt="Noor Capital License"

                loading="lazy"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          TRADING CTA
      =================================================== */}

      <section className="about-trading-section">

        <div className="about-page-container about-trading-layout">

          <div className="about-trading-copy">

            <h2>
              {content.trading.title}
            </h2>


            <ul>

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


            <a
              href={
                localUrl(
                  "trading/mt4-platform"
                )
              }

              className="about-demo-button"

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
                    .trading
                    .button
                }
              </span>

              <span aria-hidden="true">
                ›
              </span>

            </a>

          </div>


          <div className="about-trading-image">

            <img
              src={
                aboutUsAssets
                  .tradingImage
              }

              alt="Noor Capital Trading"

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="about-back-to-top-shell">

        <button
          type="button"

          className="about-back-to-top"

          onClick={
            backToTop
          }

          aria-label={
            content.backToTop
          }
        >

          <img
            src={
              aboutUsAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}