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
  cashEquitiesArticleRoutes,
  cashEquitiesAssets,
  cashEquitiesCopy,
} from "./cashEquitiesData";

import "./CashEquitiesPage.css";


export default function CashEquitiesPage({
  language = "en",
  navigate,
}) {
  const content =
    cashEquitiesCopy[
    language
    ] ||
    cashEquitiesCopy.en;


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
     BACK TOP
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
      className="cash-equities-page"

      style={{
        "--cash-hero":
          `url("${cashEquitiesAssets.hero}")`,

        "--cash-intro-bg":
          `url("${cashEquitiesAssets.introBackground}")`,

        "--cash-why-bg":
          `url("${cashEquitiesAssets.whyBackground}")`,

        "--cash-icon-bg":
          `url("${cashEquitiesAssets.iconBackground}")`,

        "--cash-final-bg":
          `url("${cashEquitiesAssets.finalBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="cash-hero">

        <div className="cash-container">

          <h1>
            {content.hero.title}
          </h1>

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="cash-intro-section">

        <ProductTabs
          language={
            language
          }

          activeProduct="cashEquities"

          navigate={
            navigate
          }
        />


        <div className="cash-container cash-intro-layout">


          {/* IMAGE */}

          <div className="cash-main-image">

            <img
              src={
                cashEquitiesAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>


          {/* COPY */}

          <div className="cash-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <div className="cash-intro-paragraphs">

              {content.intro.paragraphs.map(
                (
                  paragraph,
                  index
                ) => {

                  if (
                    paragraph.bold
                  ) {
                    return (
                      <p
                        key={
                          `cash-intro-${index}`
                        }
                      >
                        {paragraph.before}

                        <strong>
                          {paragraph.bold}
                        </strong>

                        {paragraph.after}
                      </p>
                    );
                  }


                  return (
                    <p
                      key={
                        `cash-intro-${index}`
                      }
                    >
                      {paragraph.text}
                    </p>
                  );
                }
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          WHY TRADE
      =================================================== */}

      <section className="cash-reasons-section">

        <div className="cash-container">

          <h2 className="cash-gradient-title">
            {content.reasons.title}
          </h2>


          <div className="cash-reasons-slider">

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
                  ".cash-reasons-next",

                prevEl:
                  ".cash-reasons-prev",
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

                    <article className="cash-reason-card">


                      {/* ICON */}

                      <div className="cash-reason-icon">

                        <img
                          src={
                            cashEquitiesAssets
                              .reasons[
                            index
                            ]
                          }

                          alt=""

                          loading="lazy"
                        />

                      </div>


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

              className="cash-reason-arrow cash-reasons-prev"

              aria-label="Previous"
            >

              <img
                src={
                  cashEquitiesAssets.previous
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="cash-reason-arrow cash-reasons-next"

              aria-label="Next"
            >

              <img
                src={
                  cashEquitiesAssets.next
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

      <section className="cash-articles-section">

        <div className="cash-container">

          <h2 className="cash-gradient-title">
            {content.articles.title}
          </h2>


          <div className="cash-articles-slider">

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
                  ".cash-articles-next",

                prevEl:
                  ".cash-articles-prev",
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
                      cashEquitiesArticleRoutes[
                      index
                      ]
                    );


                  return (
                    <SwiperSlide
                      key={
                        article.title
                      }
                    >

                      <article className="cash-article-card">


                        <div className="cash-article-image">

                          <img
                            src={
                              cashEquitiesAssets
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


                        <div className="cash-article-content">

                          <span className="cash-article-date">
                            {article.date}
                          </span>


                          <p>
                            {article.title}
                          </p>


                          <div className="cash-article-bottom">

                            <a
                              href={
                                href
                              }

                              className="cash-outline-button"

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

              className="cash-article-arrow cash-articles-prev"

              aria-label="Previous articles"
            >

              <img
                src={
                  cashEquitiesAssets.arrowLeft
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="cash-article-arrow cash-articles-next"

              aria-label="Next articles"
            >

              <img
                src={
                  cashEquitiesAssets.arrowRight
                }

                alt=""
              />

            </button>

          </div>


          {/* VIEW ALL */}

          <div className="cash-view-all">

            <a
              href={
                localUrl(
                  "learning-hub/news-updates/market-updates"
                )
              }

              className="cash-gold-button"

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

      <section className="cash-final-section">

        <div className="cash-container cash-final-layout">


          {/* COPY */}

          <div className="cash-final-copy">

            <h2>
              {content.finalCta.title}
            </h2>


            <div className="cash-final-paragraphs">

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

              className="cash-gold-button"

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

          <div className="cash-final-image">

            <img
              src={
                cashEquitiesAssets.finalImage
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

      <div className="cash-back-top-shell">

        <button
          type="button"

          className="cash-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              cashEquitiesAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}