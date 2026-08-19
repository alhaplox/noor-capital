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

import EducationTabs from "./components/EducationTabs";

import {
  videoTutorialItems,
  videoTutorialsAssets,
  videoTutorialsCopy,
  whyNoorItems,
} from "./videoTutorialsData";

import "./VideoTutorialsPage.css";


export default function VideoTutorialsPage({
  language = "en",
  navigate,
}) {
  const content =
    videoTutorialsCopy[
    language
    ] ||
    videoTutorialsCopy.en;


  /* =======================================================
     URL
  ======================================================= */

  function localUrl(path) {
    return `/${language}/${path}`;
  }


  /* =======================================================
     SPA LINK
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
      className="video-tutorials-page"

      style={{
        "--video-hero":
          `url("${videoTutorialsAssets.hero}")`,

        "--video-background":
          `url("${videoTutorialsAssets.background}")`,

        "--video-why-background":
          `url("${videoTutorialsAssets.whyBackground}")`,

        "--video-icon-background":
          `url("${videoTutorialsAssets.iconBackground}")`,

        "--video-final-background":
          `url("${videoTutorialsAssets.finalBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="video-tutorials-hero">

        <div className="video-tutorials-container">

          <h1>
            {content.hero.title}
          </h1>


          <p>
            {content.hero.subtitle}
          </p>

        </div>

      </section>


      {/* ===================================================
          VIDEOS SECTION
      =================================================== */}

      <section className="video-tutorials-main-section">


        <EducationTabs
          language={language}
          activeTab="videos"
          navigate={navigate}
        />


        <div className="video-tutorials-container video-tutorials-content">

          <h2 className="video-tutorials-gradient-title">
            {content.sectionTitle}
          </h2>


          <div className="video-tutorials-grid">

            {videoTutorialItems.map(
              (
                video,
                index
              ) => (

                <article
                  className="video-tutorial-card"
                  key={`${video.title}-${index}`}
                >


                  {/* THUMBNAIL */}

                  <div
                    className="video-tutorial-thumbnail"

                    style={{
                      backgroundImage:
                        `url("${videoTutorialsAssets.thumbnail}")`,
                    }}
                  >

                    <div className="video-tutorial-overlay" />


                    <div className="video-tutorial-play-icon">

                      <img
                        src={
                          videoTutorialsAssets.videoPlay
                        }

                        alt=""
                      />

                    </div>

                  </div>


                  {/* CARD COPY */}

                  <div className="video-tutorial-card-content">

                    <span className="video-tutorial-level">
                      {video.level}
                    </span>


                    <h3>
                      {video.title}
                    </h3>


                    <div className="video-tutorial-card-bottom">

                      {/*
                        Source HTML does not expose the
                        actual video URL, href or modal id.
                        Button remains visual only until
                        the real target is available.
                      */}

                      <button
                        type="button"
                        className="video-tutorial-play-button"
                      >
                        {content.playNow}
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
          WHY NOOR CAPITAL
      =================================================== */}

      <section className="video-why-section">

        <div className="video-tutorials-container">

          <h2 className="video-tutorials-gradient-title">
            {content.whyTitle}
          </h2>


          <div className="video-why-slider">

            <Swiper
              modules={[
                Autoplay,
                Navigation,
              ]}

              slidesPerView={1}

              spaceBetween={30}

              loop={true}

              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}

              navigation={{
                nextEl:
                  ".video-why-next",

                prevEl:
                  ".video-why-prev",
              }}

              breakpoints={{
                700: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },

                1050: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },

                1450: {
                  slidesPerView: 3.2,
                  spaceBetween: 56,
                },
              }}
            >

              {whyNoorItems.map(
                (
                  item,
                  index
                ) => (

                  <SwiperSlide
                    key={`${item.title}-${index}`}
                  >

                    <article className="video-why-card">


                      <div className="video-why-icon">

                        <img
                          src={item.icon}
                          alt=""
                          loading="lazy"
                        />

                      </div>


                      <h3>
                        {item.title}
                      </h3>

                    </article>

                  </SwiperSlide>

                )
              )}

            </Swiper>


            <button
              type="button"
              className="video-why-arrow video-why-prev"
              aria-label="Previous"
            >
              <img
                src={
                  videoTutorialsAssets.previous
                }
                alt=""
              />
            </button>


            <button
              type="button"
              className="video-why-arrow video-why-next"
              aria-label="Next"
            >
              <img
                src={
                  videoTutorialsAssets.next
                }
                alt=""
              />
            </button>

          </div>

        </div>

      </section>


      {/* ===================================================
          FINAL CTA
      =================================================== */}

      <section className="video-final-section">

        <div className="video-tutorials-container video-final-layout">


          {/* TEXT */}

          <div className="video-final-copy">

            <h2>
              {content.finalCta.title}
            </h2>


            <ul>

              {content.finalCta.bullets.map(
                (bullet) => (

                  <li key={bullet}>
                    {bullet}
                  </li>

                )
              )}

            </ul>


            <div className="video-final-buttons">


              {/* DEMO */}

              <a
                href={
                  localUrl(
                    "trading/mt4-platform"
                  )
                }

                className="video-gold-button"

                onClick={(event) =>
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


              {/* REAL ACCOUNT */}

              <a
                href="https://mynoor.noorcap.ae/en/mynoor-v2/register"

                target="_blank"

                rel="noreferrer"

                className="video-gold-button"
              >
                {content.finalCta.real}

                <span aria-hidden="true">
                  ›
                </span>
              </a>

            </div>

          </div>


          {/* IMAGE */}

          <div className="video-final-image">

            <img
              src={
                videoTutorialsAssets.finalImage
              }

              alt=""
              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="video-back-top-shell">

        <button
          type="button"

          className="video-back-top"

          aria-label={
            content.backTop
          }

          onClick={backToTop}
        >

          <img
            src={
              videoTutorialsAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}