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
  commoditiesArticleRoutes,
  commoditiesAssets,
  commoditiesCopy,
} from "./commoditiesData";

import "./CommoditiesPage.css";


export default function CommoditiesPage({
  language = "en",
  navigate,
}) {
  const content =
    commoditiesCopy[
    language
    ] ||
    commoditiesCopy.en;


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
      className="commodities-page"

      style={{
        "--commodities-hero":
          `url("${commoditiesAssets.hero}")`,

        "--commodities-intro-bg":
          `url("${commoditiesAssets.introBackground}")`,

        "--commodities-table-bg":
          `url("${commoditiesAssets.tableBackground}")`,

        "--commodities-why-bg":
          `url("${commoditiesAssets.whyBackground}")`,

        "--commodities-icon-bg":
          `url("${commoditiesAssets.iconBackground}")`,

        "--commodities-final-bg":
          `url("${commoditiesAssets.finalBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="commodities-hero">

        <div className="commodities-container">

          <h1>
            {content.hero.title}
          </h1>

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="commodities-intro-section">

        <ProductTabs
          language={
            language
          }

          activeProduct="commodities"

          navigate={
            navigate
          }
        />


        <div className="commodities-container commodities-intro-layout">


          {/* IMAGE */}

          <div className="commodities-main-image">

            <img
              src={
                commoditiesAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>


          {/* COPY */}

          <div className="commodities-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <div className="commodities-intro-paragraphs">

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

      <section className="commodities-table-section">

        <div className="commodities-container">

          <h2 className="commodities-gradient-title">
            {content.table.title}
          </h2>


          <div className="commodities-table-wrapper">

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

                <tr>

                  <td
                    colSpan={
                      content.table.headers.length
                    }

                    className="commodities-empty-cell"
                  >
                    {content.table.empty}
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* ===================================================
          COMMODITIES TYPES
      =================================================== */}

      <section className="commodities-types-section">

        <div className="commodities-container">

          <h2 className="commodities-gradient-title">
            {content.types.title}
          </h2>


          <div className="commodities-types-slider">

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
                  ".commodities-types-next",

                prevEl:
                  ".commodities-types-prev",
              }}

              breakpoints={{
                700: {
                  slidesPerView:
                    2,
                },
              }}
            >

              {content.types.items.map(
                (
                  item,
                  index
                ) => (

                  <SwiperSlide
                    key={
                      item.title
                    }
                  >

                    <article className="commodities-type-card">


                      {/* ICON */}

                      <div className="commodities-type-icon">

                        <img
                          src={
                            commoditiesAssets
                              .commodityTypes[
                            index
                            ]
                          }

                          alt=""

                          loading="lazy"
                        />

                      </div>


                      {/* CONTENT */}

                      <h3>
                        {item.title}
                      </h3>


                      <p>
                        {item.text}
                      </p>

                    </article>

                  </SwiperSlide>

                )
              )}

            </Swiper>


            {/* MOBILE CONTROLS */}

            <button
              type="button"

              className="commodities-type-arrow commodities-types-prev"

              aria-label="Previous"
            >

              <img
                src={
                  commoditiesAssets.previous
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="commodities-type-arrow commodities-types-next"

              aria-label="Next"
            >

              <img
                src={
                  commoditiesAssets.next
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

      <section className="commodities-articles-section">

        <div className="commodities-container">

          <h2 className="commodities-gradient-title">
            {content.articles.title}
          </h2>


          <div className="commodities-articles-slider">

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
                  ".commodities-articles-next",

                prevEl:
                  ".commodities-articles-prev",
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
                      commoditiesArticleRoutes[
                      index
                      ]
                    );


                  return (
                    <SwiperSlide
                      key={
                        article.title
                      }
                    >

                      <article className="commodities-article-card">


                        {/* IMAGE */}

                        <div className="commodities-article-image">

                          <img
                            src={
                              commoditiesAssets
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

                        <div className="commodities-article-content">

                          <span className="commodities-article-date">
                            {article.date}
                          </span>


                          <p>
                            {article.title}
                          </p>


                          <div className="commodities-article-bottom">

                            <a
                              href={
                                href
                              }

                              className="commodities-outline-button"

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

              className="commodities-article-arrow commodities-articles-prev"

              aria-label="Previous articles"
            >

              <img
                src={
                  commoditiesAssets.arrowLeft
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="commodities-article-arrow commodities-articles-next"

              aria-label="Next articles"
            >

              <img
                src={
                  commoditiesAssets.arrowRight
                }

                alt=""
              />

            </button>

          </div>


          {/* VIEW ALL */}

          <div className="commodities-view-all">

            <a
              href={
                localUrl(
                  "learning-hub/news-updates/market-updates"
                )
              }

              className="commodities-gold-button"

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

      <section className="commodities-final-section">

        <div className="commodities-container commodities-final-layout">


          {/* COPY */}

          <div className="commodities-final-copy">

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

              className="commodities-gold-button"

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

          <div className="commodities-final-image">

            <img
              src={
                commoditiesAssets.finalImage
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

      <div className="commodities-back-top-shell">

        <button
          type="button"

          className="commodities-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              commoditiesAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}