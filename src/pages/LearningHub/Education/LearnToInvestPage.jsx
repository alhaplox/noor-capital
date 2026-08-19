import {
  useState,
} from "react";

import EducationTabs from "./components/EducationTabs";

import {
  learnToInvestArticles,
  learnToInvestAssets,
  learnToInvestCopy,
  learnToInvestTimeline,
} from "./learnToInvestData";

import "./LearnToInvestPage.css";


export default function LearnToInvestPage({
  language = "en",
  navigate,
}) {
  const content =
    learnToInvestCopy[language] ||
    learnToInvestCopy.en;


  const [
    activeFilter,
    setActiveFilter,
  ] = useState("recent");


  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  /*
    Source HTML exposes only one list of sidebar
    articles. Therefore the three filter buttons
    change active visual state only; no alternative
    datasets are invented.
  */

  const sidebarArticles =
    learnToInvestArticles.slice(
      0,
      4
    );


  return (
    <main
      className="learn-page"

      style={{
        "--learn-hero":
          `url("${learnToInvestAssets.hero}")`,

        "--learn-background":
          `url("${learnToInvestAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="learn-hero">

        <div className="learn-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          MAIN
      =================================================== */}

      <section className="learn-main-section">


        <EducationTabs
          language={language}

          activeTab="learn"

          navigate={navigate}
        />


        <div className="learn-container learn-content-layout">


          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="learn-sidebar">


            {/* FILTER CARD */}

            <div className="learn-sidebar-card learn-filter-card">


              <div className="learn-filter-tabs">

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


              <div className="learn-sidebar-posts">

                {sidebarArticles.map(
                  (
                    article
                  ) => (

                    <article
                      className="learn-sidebar-post"

                      key={
                        article.title
                      }
                    >

                      <div className="learn-sidebar-post-image">

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


                      <div className="learn-sidebar-post-copy">

                        <span>
                          {article.date}
                        </span>


                        <p title={article.title}>
                          {article.title}
                        </p>

                      </div>

                    </article>

                  )
                )}

              </div>

            </div>


            {/* TIMELINE */}

            <div className="learn-sidebar-card learn-timeline">

              <h2>
                {content.timeline}
              </h2>


              <div className="learn-timeline-list">

                {learnToInvestTimeline.map(
                  (
                    item
                  ) => (

                    <article
                      className="learn-timeline-item"

                      key={
                        `${item.title}-${item.date}`
                      }
                    >

                      <p>
                        {item.title}
                      </p>


                      <span>
                        {item.date}
                      </span>

                    </article>

                  )
                )}

              </div>

            </div>

          </aside>


          {/* =================================================
              ARTICLE GRID
          ================================================= */}

          <div className="learn-article-grid">

            {learnToInvestArticles.map(
              (
                article
              ) => (

                <article
                  className="learn-article-card"

                  key={
                    article.title
                  }
                >


                  {/* IMAGE */}

                  <div className="learn-article-image">

                    <img
                      src={
                        article.image
                      }

                      alt={
                        article.title
                      }

                      loading="lazy"
                    />

                    <div className="learn-article-image-shadow" />

                  </div>


                  {/* CONTENT */}

                  <div className="learn-article-content">

                    <span className="learn-gradient-text">
                      {article.date}
                    </span>


                    <h3>
                      {article.title}
                    </h3>


                    <div className="learn-card-bottom">

                      <button
                        type="button"

                        className="learn-outline-button"
                      >
                        {content.readMore}
                      </button>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="learn-back-top-shell">

        <button
          type="button"

          className="learn-back-top"

          onClick={backToTop}

          aria-label="Back to top"
        >

          <img
            src={
              learnToInvestAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}