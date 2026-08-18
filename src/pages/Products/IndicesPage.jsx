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
  indicesAssets,
  indicesArticleRoutes,
  indicesCopy,
  indicesTableRows,
} from "./indicesData";

import "./IndicesPage.css";


export default function IndicesPage({
  language = "en",
  navigate,
}) {
  const content =
    indicesCopy[
    language
    ] ||
    indicesCopy.en;


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


  function backToTop() {
    window.scrollTo({
      top: 0,

      behavior:
        "smooth",
    });
  }


  return (
    <main
      className="indices-page"

      style={{
        "--indices-hero":
          `url("${indicesAssets.hero}")`,

        "--indices-intro-bg":
          `url("${indicesAssets.introBackground}")`,

        "--indices-why-bg":
          `url("${indicesAssets.whyBackground}")`,

        "--indices-icon-bg":
          `url("${indicesAssets.iconBackground}")`,

        "--indices-final-bg":
          `url("${indicesAssets.finalBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="indices-hero">

        <div className="indices-container">

          <h1>
            {content.hero.title}
          </h1>

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="indices-intro-section">

        <ProductTabs
          language={
            language
          }

          activeProduct="indices"

          navigate={
            navigate
          }
        />


        <div className="indices-container indices-intro-layout">


          {/* IMAGE */}

          <div className="indices-main-image">

            <img
              src={
                indicesAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>


          {/* TEXT */}

          <div className="indices-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <div className="indices-intro-paragraphs">

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

      <section className="indices-table-section">

        <div className="indices-container">

          <h2 className="indices-gradient-title">
            {content.table.title}
          </h2>


          <div className="indices-table-wrapper">

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

                {indicesTableRows.map(
                  (
                    row,
                    rowIndex
                  ) => (

                    <tr
                      key={
                        `indices-row-${rowIndex}`
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

      <section className="indices-reasons-section">

        <div className="indices-container">

          <h2 className="indices-gradient-title">
            {content.reasons.title}
          </h2>


          <div className="indices-reasons-slider">

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
                  ".indices-reasons-next",

                prevEl:
                  ".indices-reasons-prev",
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

                    <article className="indices-reason-card">


                      {/* ICON */}

                      <div className="indices-reason-icon">

                        <img
                          src={
                            indicesAssets
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

              className="indices-reason-arrow indices-reasons-prev"

              aria-label="Previous"
            >

              <img
                src={
                  indicesAssets.previous
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="indices-reason-arrow indices-reasons-next"

              aria-label="Next"
            >

              <img
                src={
                  indicesAssets.next
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

      <section className="indices-articles-section">

        <div className="indices-container">

          <h2 className="indices-gradient-title">
            {content.articles.title}
          </h2>


          <div className="indices-articles-slider">

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
                  ".indices-articles-next",

                prevEl:
                  ".indices-articles-prev",
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
                      indicesArticleRoutes[
                      index
                      ]
                    );


                  return (
                    <SwiperSlide
                      key={
                        article.title
                      }
                    >

                      <article className="indices-article-card">


                        {/* IMAGE */}

                        <div className="indices-article-image">

                          <img
                            src={
                              indicesAssets
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

                        <div className="indices-article-content">

                          <span className="indices-article-date">
                            {article.date}
                          </span>


                          <p>
                            {article.title}
                          </p>


                          <div className="indices-article-bottom">

                            <a
                              href={
                                href
                              }

                              className="indices-outline-button"

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


            {/* ARTICLE ARROWS */}

            <button
              type="button"

              className="indices-article-arrow indices-articles-prev"

              aria-label="Previous articles"
            >

              <img
                src={
                  indicesAssets.arrowLeft
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="indices-article-arrow indices-articles-next"

              aria-label="Next articles"
            >

              <img
                src={
                  indicesAssets.arrowRight
                }

                alt=""
              />

            </button>

          </div>


          {/* VIEW ALL */}

          <div className="indices-view-all">

            <a
              href={
                localUrl(
                  "learning-hub/news-updates/market-updates"
                )
              }

              className="indices-gold-button"

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

      <section className="indices-final-section">

        <div className="indices-container indices-final-layout">


          {/* COPY */}

          <div className="indices-final-copy">

            <h2>
              {content.finalCta.title}
            </h2>


            <div className="indices-final-paragraphs">

              {content.finalCta.paragraphs.map(
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


            <a
              href={
                localUrl(
                  "trading/mt4-platform"
                )
              }

              className="indices-gold-button"

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

          <div className="indices-final-image">

            <img
              src={
                indicesAssets.finalImage
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

      <div className="indices-back-top-shell">

        <button
          type="button"

          className="indices-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              indicesAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}