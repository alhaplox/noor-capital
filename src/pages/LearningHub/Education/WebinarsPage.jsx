import EducationTabs from "./components/EducationTabs";

import {
  webinarItems,
  webinarsAssets,
  webinarsCopy,
} from "./webinarsData";

import "./WebinarsPage.css";


export default function WebinarsPage({
  language = "en",
  navigate,
}) {
  const content =
    webinarsCopy[
    language
    ] ||
    webinarsCopy.en;


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
      className="webinars-page"

      style={{
        "--webinars-hero":
          `url("${webinarsAssets.hero}")`,

        "--webinars-background":
          `url("${webinarsAssets.background}")`,

        "--webinars-final-background":
          `url("${webinarsAssets.finalBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="webinars-hero">

        <div className="webinars-container">

          <h1>
            {content.hero.title}
          </h1>


          {content.hero.subtitle && (
            <p>
              {content.hero.subtitle}
            </p>
          )}

        </div>

      </section>


      {/* ===================================================
          WEBINARS
      =================================================== */}

      <section className="webinars-main-section">


        <EducationTabs
          language={language}
          activeTab="webinars"
          navigate={navigate}
        />


        <div className="webinars-container webinars-content">

          <h2 className="webinars-gradient-title">
            {content.sectionTitle}
          </h2>


          <div className="webinars-list">

            {webinarItems.map(
              (
                webinar
              ) => {

                const href =
                  localUrl(
                    webinar.route
                  );


                return (
                  <article
                    className="webinar-card"

                    key={
                      webinar.title
                    }
                  >


                    {/* IMAGE */}

                    <div className="webinar-image">

                      <img
                        src={
                          webinar.image
                        }

                        alt={
                          webinar.title
                        }

                        loading="lazy"
                      />

                    </div>


                    {/* CONTENT */}

                    <div className="webinar-card-content">

                      <span className="webinar-schedule">
                        {webinar.schedule}
                      </span>


                      <h3>
                        {webinar.title}
                      </h3>


                      <div className="webinar-description">

                        {webinar.descriptionLabel && (
                          <strong>
                            {
                              webinar.descriptionLabel
                            }
                          </strong>
                        )}


                        <p>
                          {webinar.description}
                        </p>

                      </div>


                      <div className="webinar-card-bottom">

                        <a
                          href={href}

                          className="webinar-register-button"

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
          FINAL CTA
      =================================================== */}

      <section className="webinars-final-section">

        <div className="webinars-container webinars-final-layout">


          {/* COPY */}

          <div className="webinars-final-copy">

            <h2>
              {content.finalCta.title}
            </h2>


            <ul>

              {content.finalCta.bullets.map(
                (
                  bullet
                ) => (

                  <li
                    key={
                      bullet
                    }
                  >
                    {bullet}
                  </li>

                )
              )}

            </ul>


            {/*
              Source HTML contains an empty button
              container here. No CTA buttons are
              rendered on this Webinars page.
            */}

          </div>


          {/* IMAGE */}

          <div className="webinars-final-image">

            <img
              src={
                webinarsAssets.finalImage
              }

              alt="trading banner"

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="webinars-back-top-shell">

        <button
          type="button"

          className="webinars-back-top"

          aria-label={
            content.backTop
          }

          onClick={backToTop}
        >

          <img
            src={
              webinarsAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}