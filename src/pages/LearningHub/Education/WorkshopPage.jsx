import EducationTabs from "./components/EducationTabs";

import {
  workshopAssets,
  workshopCopy,
  workshopItems,
} from "./workshopData";

import "./WorkshopPage.css";


export default function WorkshopPage({
  language = "en",
  navigate,
}) {
  const content =
    workshopCopy[
    language
    ] ||
    workshopCopy.en;


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
      className="workshop-page"

      style={{
        "--workshop-hero":
          `url("${workshopAssets.hero}")`,

        "--workshop-background":
          `url("${workshopAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="workshop-hero">

        <div className="workshop-container">

          <h1>
            {content.hero.title}
          </h1>

        </div>

      </section>


      {/* ===================================================
          WORKSHOP SECTION
      =================================================== */}

      <section className="workshop-main-section">


        <EducationTabs
          language={language}

          activeTab="workshop"

          navigate={navigate}
        />


        <div className="workshop-container workshop-content">

          <h2 className="workshop-gradient-title">
            {content.sectionTitle}
          </h2>


          <div className="workshop-list">

            {workshopItems.map(
              (
                workshop
              ) => {

                const href =
                  localUrl(
                    workshop.route
                  );


                return (
                  <article
                    className="workshop-card"

                    key={
                      workshop.title
                    }
                  >


                    {/* IMAGE */}

                    <div className="workshop-image">

                      <img
                        src={
                          workshop.image
                        }

                        alt={
                          workshop.title
                        }

                        loading="lazy"
                      />

                    </div>


                    {/* CONTENT */}

                    <div className="workshop-card-content">

                      <span className="workshop-schedule">
                        {workshop.schedule}
                      </span>


                      <h3>
                        {workshop.title}
                      </h3>


                      <div className="workshop-description">

                        <p>
                          {
                            workshop
                              .description
                              .before
                          }

                          <strong>
                            {
                              workshop
                                .description
                                .bold
                            }
                          </strong>

                          {
                            workshop
                              .description
                              .after
                          }
                        </p>


                        {workshop.description.secondParagraph && (
                          <p>
                            {
                              workshop
                                .description
                                .secondParagraph
                            }
                          </p>
                        )}

                      </div>


                      <div className="workshop-card-bottom">

                        <a
                          href={href}

                          className="workshop-register-button"

                          onClick={(event) =>
                            handleInternalLink(
                              event,
                              href
                            )
                          }
                        >
                          {content.register}
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

      <div className="workshop-back-top-shell">

        <button
          type="button"

          className="workshop-back-top"

          aria-label={
            content.backTop
          }

          onClick={backToTop}
        >

          <img
            src={
              workshopAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}