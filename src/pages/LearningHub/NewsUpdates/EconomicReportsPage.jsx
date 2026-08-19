import {
  useState,
} from "react";

import NewsTabs from "./components/NewsTabs";

import {
  economicReportItems,
  economicReportsAssets,
  economicReportsCopy,
  economicReportsTimeline,
} from "./economicReportsData";

import "./EconomicReportsPage.css";


export default function EconomicReportsPage({
  language = "en",
  navigate,
}) {
  const content =
    economicReportsCopy[
    language
    ] ||
    economicReportsCopy.en;


  const [
    activeFilter,
    setActiveFilter,
  ] = useState(
    "recent"
  );


  const sidebarItems =
    economicReportItems.slice(
      0,
      4
    );


  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <main
      className="economic-reports-page"

      style={{
        "--economic-reports-hero":
          `url("${economicReportsAssets.hero}")`,

        "--economic-reports-background":
          `url("${economicReportsAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="economic-reports-hero">

        <div className="economic-reports-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          MAIN
      =================================================== */}

      <section className="economic-reports-main">


        <NewsTabs
          language={language}
          activeTab="reports"
          navigate={navigate}
        />


        <div className="economic-reports-container economic-reports-content">


          {/* =================================================
              REPORT TYPE FILTERS
          ================================================= */}

          <div className="economic-report-category-row">

            {content.categories.map(
              (
                category
              ) => (

                <button
                  type="button"
                  key={category}
                >
                  {category}
                </button>

              )
            )}

          </div>


          {/* =================================================
              BODY
          ================================================= */}

          <div className="economic-reports-body">


            {/* ===============================================
                SIDEBAR
            =============================================== */}

            <aside className="economic-reports-sidebar">


              <div className="economic-sidebar-card economic-filter-card">

                <div className="economic-filter-tabs">

                  <button
                    type="button"

                    className={
                      activeFilter === "recent"
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
                      content.filters
                        .recent
                    }
                  </button>


                  <button
                    type="button"

                    className={
                      activeFilter === "popular"
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
                      content.filters
                        .popular
                    }
                  </button>


                  <button
                    type="button"

                    className={
                      activeFilter === "comments"
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
                      content.filters
                        .comments
                    }
                  </button>

                </div>


                <div className="economic-sidebar-posts">

                  {sidebarItems.map(
                    (
                      article
                    ) => (

                      <article
                        className="economic-sidebar-post"

                        key={
                          article.title
                        }
                      >

                        <div className="economic-sidebar-image">

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


                        <div className="economic-sidebar-copy">

                          <span className="economic-gradient-text">
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


              {/* =============================================
                  TIMELINE
              ============================================= */}

              <div className="economic-sidebar-card economic-timeline">

                <h2>
                  {content.timeline}
                </h2>


                <div className="economic-timeline-list">

                  {economicReportsTimeline.map(
                    (
                      item
                    ) => (

                      <article
                        className="economic-timeline-item"

                        key={
                          `${item.title}-${item.date}`
                        }
                      >

                        <p>
                          {item.title}
                        </p>


                        <span className="economic-gradient-text">
                          {item.date}
                        </span>

                      </article>

                    )
                  )}

                </div>

              </div>

            </aside>


            {/* ===============================================
                REPORT GRID
            =============================================== */}

            <div className="economic-reports-grid-column">

              <div className="economic-reports-grid">

                {economicReportItems.map(
                  (
                    article
                  ) => (

                    <article
                      className="economic-report-card"

                      key={
                        article.title
                      }
                    >

                      <div className="economic-report-image">

                        <img
                          src={
                            article.image
                          }

                          alt={
                            article.title
                          }

                          loading="lazy"
                        />


                        <div className="economic-report-image-shadow" />

                      </div>


                      <div className="economic-report-content">

                        <span className="economic-gradient-text">
                          {
                            article.date
                          }
                        </span>


                        <div className="economic-report-main">

                          <h3>
                            {
                              article.title
                            }
                          </h3>


                          {/*
                            Source contains Read More buttons
                            but does not expose article hrefs.
                          */}

                          <button
                            type="button"

                            className="economic-read-more"
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

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="economic-back-top-shell">

        <button
          type="button"

          className="economic-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              economicReportsAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}