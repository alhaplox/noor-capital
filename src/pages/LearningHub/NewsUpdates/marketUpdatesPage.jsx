import {
  useState,
} from "react";

import NewsTabs from "./components/NewsTabs";

import {
  marketTimeline,
  marketUpdateArticles,
  marketUpdatesAssets,
  marketUpdatesCopy,
} from "./marketUpdatesData";

import "./MarketUpdatesPage.css";


export default function MarketUpdatesPage({
  language = "en",
  navigate,
}) {
  const content =
    marketUpdatesCopy[
    language
    ] ||
    marketUpdatesCopy.en;


  const [
    activeFilter,
    setActiveFilter,
  ] = useState(
    "recent"
  );


  /* =======================================================
     SOURCE GROUPS
  ======================================================= */

  const featuredArticles =
    marketUpdateArticles.slice(
      0,
      5
    );


  const sidebarArticles =
    marketUpdateArticles.slice(
      0,
      4
    );


  /* =======================================================
     BACK TOP
  ======================================================= */

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <main
      className="market-updates-page"

      style={{
        "--market-updates-hero":
          `url("${marketUpdatesAssets.hero}")`,

        "--market-updates-background":
          `url("${marketUpdatesAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="market-updates-hero">

        <div className="market-updates-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          MAIN
      =================================================== */}

      <section className="market-updates-main">


        <NewsTabs
          language={
            language
          }

          activeTab="market"

          navigate={
            navigate
          }
        />


        <div className="market-updates-container market-updates-content">


          {/* =================================================
              CATEGORY FILTERS
          ================================================= */}

          <div className="market-category-row">

            {content.categories.map(
              (
                category
              ) => (

                <button
                  type="button"

                  key={
                    category
                  }
                >
                  {category}
                </button>

              )
            )}

          </div>


          {/* =================================================
              FEATURED
          ================================================= */}

          <div className="market-featured-grid">

            {featuredArticles.map(
              (
                article
              ) => (

                <article
                  className="market-featured-card"

                  key={
                    article.title
                  }

                  style={{
                    backgroundImage:
                      `url("${article.image}")`,
                  }}
                >

                  <div className="market-featured-shadow" />


                  <div className="market-featured-copy">

                    <span className="market-gradient-text">
                      {article.date}
                    </span>


                    <h2>
                      {article.title}
                    </h2>


                    <p>
                      {article.author}
                    </p>

                  </div>

                </article>

              )
            )}

          </div>


          {/* =================================================
              BODY GRID
          ================================================= */}

          <div className="market-body-layout">


            {/* ===============================================
                SIDEBAR
            =============================================== */}

            <aside className="market-sidebar">


              {/* FILTER */}

              <div className="market-sidebar-card market-filter-card">

                <div className="market-filter-tabs">

                  <button
                    type="button"

                    className={
                      activeFilter ===
                        "recent"
                        ? "is-active"
                        : ""
                    }

                    onClick={() =>
                      setActiveFilter(
                        "recent"
                      )
                    }
                  >
                    {
                      content
                        .filters
                        .recent
                    }
                  </button>


                  <button
                    type="button"

                    className={
                      activeFilter ===
                        "popular"
                        ? "is-active"
                        : ""
                    }

                    onClick={() =>
                      setActiveFilter(
                        "popular"
                      )
                    }
                  >
                    {
                      content
                        .filters
                        .popular
                    }
                  </button>


                  <button
                    type="button"

                    className={
                      activeFilter ===
                        "comments"
                        ? "is-active"
                        : ""
                    }

                    onClick={() =>
                      setActiveFilter(
                        "comments"
                      )
                    }
                  >
                    {
                      content
                        .filters
                        .comments
                    }
                  </button>

                </div>


                <div className="market-sidebar-posts">

                  {sidebarArticles.map(
                    (
                      article
                    ) => (

                      <article
                        className="market-sidebar-post"

                        key={
                          article.title
                        }
                      >

                        <div className="market-sidebar-image">

                          <img
                            src={
                              article.image
                            }

                            alt={
                              article.title
                            }

                            loading="lazy"
                          />

                        </div>


                        <div className="market-sidebar-post-copy">

                          <span className="market-gradient-text">
                            {
                              article.date
                            }
                          </span>


                          <p
                            title={
                              article.title
                            }
                          >
                            {
                              article.title
                            }
                          </p>

                        </div>

                      </article>

                    )
                  )}

                </div>

              </div>


              {/* TIMELINE */}

              <div className="market-sidebar-card market-timeline">

                <h2>
                  {content.timeline}
                </h2>


                <div className="market-timeline-list">

                  {marketTimeline.map(
                    (
                      item
                    ) => (

                      <article
                        className="market-timeline-item"

                        key={
                          `${item.title}-${item.date}`
                        }
                      >

                        <p>
                          {item.title}
                        </p>


                        <span className="market-gradient-text">
                          {item.date}
                        </span>

                      </article>

                    )
                  )}

                </div>

              </div>

            </aside>


            {/* ===============================================
                ARTICLE LIST
            =============================================== */}

            <div className="market-grid-column">

              <div className="market-article-grid">

                {marketUpdateArticles.map(
                  (
                    article
                  ) => (

                    <article
                      className="market-article-card"

                      key={
                        article.title
                      }
                    >


                      {/* IMAGE */}

                      <div className="market-article-image">

                        <img
                          src={
                            article.image
                          }

                          alt={
                            article.title
                          }

                          loading="lazy"
                        />


                        <div className="market-article-image-shadow" />

                      </div>


                      {/* CONTENT */}

                      <div className="market-article-content">

                        <span className="market-gradient-text">
                          {
                            article.date
                          }
                        </span>


                        <div className="market-article-main">

                          <h3>
                            {
                              article.title
                            }
                          </h3>


                          {/*
                            Source HTML exposes a Read More
                            button but no article href.
                            Therefore we keep it visual only.
                          */}

                          <button
                            type="button"

                            className="market-read-more"
                          >
                            {
                              content.readMore
                            }
                          </button>

                        </div>

                      </div>

                    </article>

                  )
                )}

              </div>

            </div>

          </div>


          {/* =================================================
              PAGINATION
          ================================================= */}

          <div className="market-pagination">

            <button
              type="button"

              disabled

              className="market-pagination-arrow"
            >
              <img
                src={
                  marketUpdatesAssets.previous
                }

                alt="prev"
              />
            </button>


            <div className="market-pagination-pages">

              <button
                type="button"

                className="is-active"
              >
                1
              </button>


              {/*
                Page 2 is visible in the source pagination,
                but the source snapshot contains no page-2
                article dataset, so no content is invented.
              */}

              <button
                type="button"
              >
                2
              </button>

            </div>


            <button
              type="button"

              className="market-pagination-arrow"
            >
              <img
                src={
                  marketUpdatesAssets.next
                }

                alt="next"
              />
            </button>

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="market-back-top-shell">

        <button
          type="button"

          className="market-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              marketUpdatesAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}