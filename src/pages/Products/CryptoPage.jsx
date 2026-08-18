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
  cryptoArticleRoutes,
  cryptoAssets,
  cryptoCopy,
  cryptoTableRows,
} from "./cryptoData";

import "./CryptoPage.css";


export default function CryptoPage({
  language = "en",
  navigate,
}) {
  const content =
    cryptoCopy[
    language
    ] ||
    cryptoCopy.en;


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
      className="crypto-page"

      style={{
        "--crypto-hero":
          `url("${cryptoAssets.hero}")`,

        "--crypto-intro-bg":
          `url("${cryptoAssets.introBackground}")`,

        "--crypto-why-bg":
          `url("${cryptoAssets.whyBackground}")`,

        "--crypto-icon-bg":
          `url("${cryptoAssets.iconBackground}")`,

        "--crypto-final-bg":
          `url("${cryptoAssets.finalBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="crypto-hero">

        <div className="crypto-container">

          <h1>
            {content.hero.title}
          </h1>

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="crypto-intro-section">

        <ProductTabs
          language={
            language
          }

          activeProduct="crypto"

          navigate={
            navigate
          }
        />


        <div className="crypto-container crypto-intro-layout">


          {/* IMAGE */}

          <div className="crypto-main-image">

            <img
              src={
                cryptoAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>


          {/* COPY */}

          <div className="crypto-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <div className="crypto-intro-paragraphs">

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
          CRYPTO MANAGEMENT FEES
      =================================================== */}

      <section className="crypto-table-section">

        <div className="crypto-container">

          <h2 className="crypto-gradient-title">
            {content.table.title}
          </h2>


          <div className="crypto-table-wrapper">

            <table>

              <thead>

                <tr>

                  <th
                    rowSpan="2"
                    className="crypto-item-heading"
                  >
                    {content.table.item}
                  </th>


                  <th
                    colSpan="2"
                    className="crypto-management-heading"
                  >
                    {
                      content.table
                        .managementFees
                    }
                  </th>

                </tr>


                <tr>

                  <th>
                    {content.table.buy}
                  </th>


                  <th>
                    {content.table.sell}
                  </th>

                </tr>

              </thead>


              <tbody>

                {cryptoTableRows.map(
                  (
                    row,
                    rowIndex
                  ) => (

                    <tr
                      key={
                        `crypto-row-${rowIndex}`
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
          WHY TRADE CRYPTO
      =================================================== */}

      <section className="crypto-reasons-section">

        <div className="crypto-container">

          <h2 className="crypto-gradient-title">
            {content.reasons.title}
          </h2>


          <div className="crypto-reasons-slider">

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
                  ".crypto-reasons-next",

                prevEl:
                  ".crypto-reasons-prev",
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

                    <article className="crypto-reason-card">


                      {/* ICON */}

                      <div className="crypto-reason-icon">

                        <img
                          src={
                            cryptoAssets
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


            {/* MOBILE ARROWS */}

            <button
              type="button"

              className="crypto-reason-arrow crypto-reasons-prev"

              aria-label="Previous"
            >

              <img
                src={
                  cryptoAssets.previous
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="crypto-reason-arrow crypto-reasons-next"

              aria-label="Next"
            >

              <img
                src={
                  cryptoAssets.next
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

      <section className="crypto-articles-section">

        <div className="crypto-container">

          <h2 className="crypto-gradient-title">
            {content.articles.title}
          </h2>


          <div className="crypto-articles-slider">

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
                  ".crypto-articles-next",

                prevEl:
                  ".crypto-articles-prev",
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
                      cryptoArticleRoutes[
                      index
                      ]
                    );


                  return (
                    <SwiperSlide
                      key={
                        article.title
                      }
                    >

                      <article className="crypto-article-card">


                        {/* IMAGE */}

                        <div className="crypto-article-image">

                          <img
                            src={
                              cryptoAssets
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

                        <div className="crypto-article-content">

                          <span className="crypto-article-date">
                            {article.date}
                          </span>


                          <p>
                            {article.title}
                          </p>


                          <div className="crypto-article-bottom">

                            <a
                              href={
                                href
                              }

                              className="crypto-outline-button"

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

              className="crypto-article-arrow crypto-articles-prev"

              aria-label="Previous articles"
            >

              <img
                src={
                  cryptoAssets.arrowLeft
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="crypto-article-arrow crypto-articles-next"

              aria-label="Next articles"
            >

              <img
                src={
                  cryptoAssets.arrowRight
                }

                alt=""
              />

            </button>

          </div>


          {/* VIEW ALL */}

          <div className="crypto-view-all">

            <a
              href={
                localUrl(
                  "learning-hub/news-updates/market-updates"
                )
              }

              className="crypto-gold-button"

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

      <section className="crypto-final-section">

        <div className="crypto-container crypto-final-layout">


          {/* COPY */}

          <div className="crypto-final-copy">

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

              className="crypto-gold-button"

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

          <div className="crypto-final-image">

            <img
              src={
                cryptoAssets.finalImage
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

      <div className="crypto-back-top-shell">

        <button
          type="button"

          className="crypto-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              cryptoAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}