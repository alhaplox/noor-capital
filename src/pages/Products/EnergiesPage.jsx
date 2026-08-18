import {
  Autoplay,
  Navigation,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import ProductTabs from "./components/ProductTabs";

import {
  energiesArticleRoutes,
  energiesAssets,
  energiesCopy,
  energiesTableRows,
} from "./energiesData";

import "./EnergiesPage.css";


export default function EnergiesPage({
  language = "en",
  navigate,
}) {
  const content =
    energiesCopy[
    language
    ] ||
    energiesCopy.en;


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

      behavior:
        "smooth",
    });
  }


  return (
    <main
      className="energies-page"

      style={{
        "--energies-hero":
          `url("${energiesAssets.hero}")`,

        "--energies-intro-bg":
          `url("${energiesAssets.introBackground}")`,

        "--energies-why-bg":
          `url("${energiesAssets.whyBackground}")`,

        "--energies-icon-bg":
          `url("${energiesAssets.iconBackground}")`,

        "--energies-final-bg":
          `url("${energiesAssets.finalBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="energies-hero">

        <div className="energies-container">

          <h1>
            {content.hero.title}
          </h1>


          <ul>

            {content.hero.bullets.map(
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

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="energies-intro-section">

        <ProductTabs
          language={
            language
          }

          activeProduct="energies"

          navigate={
            navigate
          }
        />


        <div className="energies-container energies-intro-layout">


          {/* IMAGE */}

          <div className="energies-main-image">

            <img
              src={
                energiesAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>


          {/* COPY */}

          <div className="energies-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <div className="energies-intro-paragraphs">

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
          SPECIFICATIONS
      =================================================== */}

      <section className="energies-table-section">

        <div className="energies-container">

          <h2 className="energies-gradient-title">
            {content.table.title}
          </h2>


          <div className="energies-table-wrapper">

            <table>

              <thead>

                <tr>

                  {content.table.headers.map(
                    (
                      header
                    ) => (

                      <th
                        key={
                          header
                        }
                      >
                        {header}
                      </th>

                    )
                  )}

                </tr>

              </thead>


              <tbody>

                {energiesTableRows.map(
                  (
                    row,
                    rowIndex
                  ) => (

                    <tr
                      key={
                        `energy-row-${rowIndex}`
                      }
                    >

                      {row.map(
                        (
                          value,
                          cellIndex
                        ) => (

                          <td
                            key={
                              `${rowIndex}-${cellIndex}`
                            }
                          >
                            {value}
                          </td>

                        )
                      )}

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* ===================================================
          WHY NOOR
      =================================================== */}

      <section className="energies-reasons-section">

        <div className="energies-container">

          <h2 className="energies-gradient-title">
            {content.reasons.title}
          </h2>


          <div className="energies-reasons-slider">

            <Swiper
              modules={[
                Autoplay,
                Navigation,
              ]}

              slidesPerView={
                1
              }

              spaceBetween={
                30
              }

              autoplay={{
                delay: 3500,

                disableOnInteraction:
                  false,
              }}

              navigation={{
                nextEl:
                  ".energies-reasons-next",

                prevEl:
                  ".energies-reasons-prev",
              }}

              breakpoints={{
                700: {
                  slidesPerView:
                    2,
                },

                1050: {
                  slidesPerView:
                    3,
                },
              }}
            >

              {content.reasons.items.map(
                (
                  item,
                  index
                ) => (

                  <SwiperSlide
                    key={
                      item.title
                    }
                  >

                    <article className="energies-reason-card">


                      {/* ICON */}

                      <div className="energies-reason-icon">

                        <img
                          src={
                            energiesAssets
                              .reasons[
                            index
                            ]
                          }

                          alt=""

                          loading="lazy"
                        />

                      </div>


                      {/* TITLE */}

                      <h3>
                        {item.title}
                      </h3>


                      {/* TEXT */}

                      <p>
                        {item.text}
                      </p>

                    </article>

                  </SwiperSlide>

                )
              )}

            </Swiper>


            {/* MOBILE NAV */}

            <button
              type="button"

              className="energies-reason-arrow energies-reasons-prev"

              aria-label="Previous"
            >

              <img
                src={
                  energiesAssets.previous
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="energies-reason-arrow energies-reasons-next"

              aria-label="Next"
            >

              <img
                src={
                  energiesAssets.next
                }

                alt=""
              />

            </button>

          </div>

        </div>

      </section>


      {/* ===================================================
          FEATURED ARTICLES
      =================================================== */}

      <section className="energies-articles-section">

        <div className="energies-container">

          <h2 className="energies-gradient-title">
            {content.articles.title}
          </h2>


          <div className="energies-articles-slider">

            <Swiper
              modules={[
                Navigation,
              ]}

              slidesPerView={
                1
              }

              spaceBetween={
                25
              }

              navigation={{
                nextEl:
                  ".energies-articles-next",

                prevEl:
                  ".energies-articles-prev",
              }}

              breakpoints={{
                650: {
                  slidesPerView:
                    2,
                },

                1000: {
                  slidesPerView:
                    3,
                },

                1250: {
                  slidesPerView:
                    4,
                },
              }}
            >

              {content.articles.items.map(
                (
                  article,
                  index
                ) => {

                  const href =
                    localUrl(
                      energiesArticleRoutes[
                      index
                      ]
                    );


                  return (
                    <SwiperSlide
                      key={
                        article.title
                      }
                    >

                      <article className="energies-article-card">


                        {/* IMAGE */}

                        <div className="energies-article-image">

                          <img
                            src={
                              energiesAssets
                                .articles[
                              index
                              ]
                            }

                            alt={
                              article.title
                            }

                            loading="lazy"
                          />

                        </div>


                        {/* CONTENT */}

                        <div className="energies-article-content">

                          <span className="energies-article-date">
                            {article.date}
                          </span>


                          <p>
                            {article.title}
                          </p>


                          <div className="energies-article-bottom">

                            <a
                              href={
                                href
                              }

                              className="energies-outline-button"

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
                                  .articles
                                  .readMore
                              }
                            </a>

                          </div>

                        </div>

                      </article>

                    </SwiperSlide>
                  );
                }
              )}

            </Swiper>


            {/* ARROWS */}

            <button
              type="button"

              className="energies-article-arrow energies-articles-prev"

              aria-label="Previous articles"
            >

              <img
                src={
                  energiesAssets.arrowLeft
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="energies-article-arrow energies-articles-next"

              aria-label="Next articles"
            >

              <img
                src={
                  energiesAssets.arrowRight
                }

                alt=""
              />

            </button>

          </div>


          {/* VIEW ALL */}

          <div className="energies-view-all">

            <a
              href={
                localUrl(
                  "learning-hub/news-updates/market-updates"
                )
              }

              className="energies-gold-button"

              onClick={(
                event
              ) =>
                handleInternalLink(
                  event,

                  localUrl(
                    "learning-hub/news-updates/market-updates"
                  )
                )
              }
            >

              {content.articles.viewAll}

              <span aria-hidden="true">
                ›
              </span>

            </a>

          </div>

        </div>

      </section>


      {/* ===================================================
          FINAL CTA
      =================================================== */}

      <section className="energies-final-section">

        <div className="energies-container energies-final-layout">


          {/* COPY */}

          <div className="energies-final-copy">

            <h2>
              {content.finalCta.title}
            </h2>


            <p>
              {content.finalCta.text}
            </p>


            <a
              href={
                localUrl(
                  "trading/mt4-platform"
                )
              }

              className="energies-gold-button"

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

              {content.finalCta.demo}

              <span aria-hidden="true">
                ›
              </span>

            </a>

          </div>


          {/* IMAGE */}

          <div className="energies-final-image">

            <img
              src={
                energiesAssets.finalImage
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

      <div className="energies-back-top-shell">

        <button
          type="button"

          className="energies-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              energiesAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}