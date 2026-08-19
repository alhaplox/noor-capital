import MediaCenterTabs from "./components/MediaCenterTabs";

import {
  pressReleaseAssets,
  pressReleaseCopy,
  pressReleaseItems,
} from "./pressReleaseData";

import "./PressReleasePage.css";


export default function PressReleasePage({
  language = "en",
  navigate,
}) {
  const content =
    pressReleaseCopy[
    language
    ] ||
    pressReleaseCopy.en;


  function localUrl(path) {
    return `/${language}/${path}`;
  }


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


  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <main
      className="press-release-page"

      style={{
        "--press-release-hero":
          `url("${pressReleaseAssets.hero}")`,

        "--press-release-background":
          `url("${pressReleaseAssets.background}")`,

        "--press-release-cta-background":
          `url("${pressReleaseAssets.ctaBackground}")`,
      }}
    >


      {/* HERO */}

      <section className="press-release-hero">

        <div className="press-release-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* PRESS RELEASES */}

      <section className="press-release-main">

        <MediaCenterTabs
          language={language}

          activeTab="press"

          navigate={navigate}
        />


        <div className="press-release-container press-release-content">

          <div className="press-release-grid">

            {pressReleaseItems.map(
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
                    className="press-release-card"

                    key={
                      item.route
                    }
                  >

                    <div className="press-release-image">

                      <img
                        src={
                          item.image
                        }

                        alt={
                          title
                        }

                        loading="lazy"
                      />


                      <div className="press-release-image-shadow" />

                    </div>


                    <div className="press-release-card-content">

                      <span className="press-release-author">

                        {content.by}
                        {" "}
                        {item.author}

                      </span>


                      <div className="press-release-card-main">

                        <h2>
                          {title}
                        </h2>


                        <a
                          href={href}

                          className="press-release-read-more"

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


      {/* CTA */}

      <section className="press-release-cta">

        <div className="press-release-container press-release-cta-layout">

          <div className="press-release-cta-copy">

            <h2>
              {
                content.cta.title
              }
            </h2>


            <p>
              {
                content.cta
                  .description
              }
            </p>


            {/*
              Source contains an empty
              CTA button container.
            */}

          </div>


          <div className="press-release-cta-image">

            <img
              src={
                pressReleaseAssets
                  .ctaImage
              }

              alt=""
              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* BACK TO TOP */}

      <div className="press-release-back-top-shell">

        <button
          type="button"

          className="press-release-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              pressReleaseAssets
                .arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}