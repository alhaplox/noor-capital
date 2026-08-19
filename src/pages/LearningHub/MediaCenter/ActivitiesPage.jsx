import MediaCenterTabs from "./components/MediaCenterTabs";

import {
  activitiesAssets,
  activitiesCopy,
  activitiesItems,
} from "./activitiesData";

import "./ActivitiesPage.css";


export default function ActivitiesPage({
  language = "en",
  navigate,
}) {
  const content =
    activitiesCopy[
    language
    ] ||
    activitiesCopy.en;


  /* =======================================================
     LOCAL URL
  ======================================================= */

  function localUrl(path) {
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
      behavior: "smooth",
    });
  }


  return (
    <main
      className="activities-page"

      style={{
        "--activities-hero":
          `url("${activitiesAssets.hero}")`,

        "--activities-background":
          `url("${activitiesAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="activities-hero">

        <div className="activities-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          ACTIVITIES
      =================================================== */}

      <section className="activities-main">

        <MediaCenterTabs
          language={language}

          activeTab="activities"

          navigate={navigate}
        />


        <div className="activities-container activities-content">

          <div className="activities-grid">

            {activitiesItems.map(
              (
                item
              ) => {
                const href =
                  localUrl(
                    item.route
                  );


                const title =
                  item.title[
                  language
                  ] ||
                  item.title.en;


                return (
                  <article
                    className="activity-card"

                    key={
                      item.route
                    }
                  >

                    {/* IMAGE */}

                    <div className="activity-card-image">

                      <img
                        src={
                          item.image
                        }

                        alt={
                          title
                        }

                        loading="lazy"
                      />


                      <div className="activity-card-image-shadow" />

                    </div>


                    {/* CONTENT */}

                    <div className="activity-card-content">

                      <span className="activity-card-author">

                        {content.by}
                        {" "}
                        {item.author}

                      </span>


                      <div className="activity-card-main">

                        <h2>
                          {title}
                        </h2>


                        <a
                          href={href}

                          className="activity-read-more"

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
                            content.readMore
                          }
                        </a>

                      </div>

                    </div>

                  </article>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="activities-back-top-shell">

        <button
          type="button"

          className="activities-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              activitiesAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}