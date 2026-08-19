import {
  useState,
} from "react";

import NewsTabs from "./components/NewsTabs";

import {
  technicalAnalysisAssets,
  technicalAnalysisCopy,
  technicalAnalysisItems,
  technicalAnalysisTimeline,
} from "./technicalAnalysisData";

import "./TechnicalAnalysisPage.css";


export default function TechnicalAnalysisPage({
  language = "en",
  navigate,
}) {
  const content =
    technicalAnalysisCopy[
    language
    ] ||
    technicalAnalysisCopy.en;


  const [
    activeFilter,
    setActiveFilter,
  ] = useState(
    "recent"
  );


  const sidebarItems =
    technicalAnalysisItems.slice(
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
      className="technical-analysis-page"

      style={{
        "--technical-hero":
          `url("${technicalAnalysisAssets.hero}")`,

        "--technical-background":
          `url("${technicalAnalysisAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="technical-analysis-hero">

        <div className="technical-analysis-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          MAIN
      =================================================== */}

      <section className="technical-analysis-main">


        <NewsTabs
          language={language}
          activeTab="technical"
          navigate={navigate}
        />


        <div className="technical-analysis-container technical-analysis-content">


          {/* =================================================
              TYPE FILTERS
          ================================================= */}

          <div className="technical-category-row">

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

          <div className="technical-body-layout">


            {/* ===============================================
                SIDEBAR
            =============================================== */}

            <aside className="technical-sidebar">


              {/* FILTER */}

              <div className="technical-sidebar-card technical-filter-card">

                <div className="technical-filter-tabs">

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
                      content.filters
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
                      content.filters
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
                      content.filters
                        .comments
                    }
                  </button>

                </div>


                <div className="technical-sidebar-posts">

                  {sidebarItems.map(
                    (
                      article
                    ) => (

                      <article
                        className="technical-sidebar-post"

                        key={
                          article.title
                        }
                      >

                        <div className="technical-sidebar-image">

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


                        <div className="technical-sidebar-copy">

                          <span className="technical-gradient-text">
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

              <div className="technical-sidebar-card technical-timeline">

                <h2>
                  {content.timeline}
                </h2>


                <div className="technical-timeline-list">

                  {technicalAnalysisTimeline.map(
                    (
                      item
                    ) => (

                      <article
                        className="technical-timeline-item"

                        key={
                          `${item.title}-${item.date}`
                        }
                      >

                        <p>
                          {item.title}
                        </p>


                        <span className="technical-gradient-text">
                          {item.date}
                        </span>

                      </article>

                    )
                  )}

                </div>

              </div>

            </aside>


            {/* ===============================================
                ARTICLE GRID
            =============================================== */}

            <div className="technical-grid-column">

              <div className="technical-article-grid">

                {technicalAnalysisItems.map(
                  (
                    article
                  ) => (

                    <article
                      className="technical-article-card"

                      key={
                        article.title
                      }
                    >

                      <div className="technical-article-image">

                        <img
                          src={
                            article.image
                          }

                          alt={
                            article.title
                          }

                          loading="lazy"
                        />


                        <div className="technical-image-shadow" />

                      </div>


                      <div className="technical-article-content">

                        <span className="technical-gradient-text">
                          {article.date}
                        </span>


                        <div className="technical-article-main">

                          <h3>
                            {
                              article.title
                            }
                          </h3>


                          {/*
                            Source snapshot contains a
                            Read More button but does not
                            expose an article href.
                          */}

                          <button
                            type="button"
                            className="technical-read-more"
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

      <div className="technical-back-top-shell">

        <button
          type="button"

          className="technical-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              technicalAnalysisAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}