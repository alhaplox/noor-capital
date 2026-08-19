import MediaCenterTabs from "./components/MediaCenterTabs";

import {
  awardsAssets,
  awardsCopy,
  awardsItems,
} from "./awardsData";

import "./AwardsPage.css";


export default function AwardsPage({
  language = "en",
  navigate,
}) {
  const content =
    awardsCopy[
    language
    ] ||
    awardsCopy.en;


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
      className="awards-page"

      style={{
        "--awards-hero":
          `url("${awardsAssets.hero}")`,

        "--awards-background":
          `url("${awardsAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="awards-hero">

        <div className="awards-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          AWARDS
      =================================================== */}

      <section className="awards-main">

        <MediaCenterTabs
          language={language}
          activeTab="awards"
          navigate={navigate}
        />


        <div className="awards-container awards-content">

          <div className="awards-grid">

            {awardsItems.map(
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
                    className="award-card"

                    key={
                      item.route
                    }
                  >

                    <div className="award-card-image">

                      <img
                        src={
                          item.image
                        }

                        alt={
                          title
                        }

                        loading="lazy"
                      />


                      <div className="award-card-image-shadow" />

                    </div>


                    <div className="award-card-content">

                      <span className="award-card-author">

                        {content.by}
                        {" "}
                        {item.author}

                      </span>


                      <div className="award-card-main">

                        <h2>
                          {title}
                        </h2>


                        <a
                          href={href}

                          className="award-read-more"

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

      <div className="awards-back-top-shell">

        <button
          type="button"

          className="awards-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              awardsAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}