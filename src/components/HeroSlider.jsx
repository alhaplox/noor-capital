import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

import "./HeroSlider.css";

import { heroSlides } from "./heroSlides";

/* =====================================================
   LOCAL / EXTERNAL LINK
===================================================== */

function localHref(href, language) {
  if (!href) {
    return "#";
  }

  if (
    href.startsWith("http://") ||
    href.startsWith("https://")
  ) {
    return href;
  }

  /*
    Örnek:
    /trading/mt4-platform
    =>
    /en/trading/mt4-platform
  */

  const cleanHref = href.startsWith("/")
    ? href
    : `/${href}`;

  return `/${language}${cleanHref}`;
}

/* =====================================================
   HERO SLIDER
===================================================== */

export default function HeroSlider({
  language = "en",
}) {
  const isRTL = language === "ar";

  return (
    <section
      className="hm-banner-section"
      id="home-hero"
    >
      <div className="hm-banner">

        <Swiper
          /*
            Dil değiştiğinde Swiper yeniden oluşsun.
            RTL/LTR geçişinde özellikle faydalı.
          */
          key={language}
          dir={isRTL ? "rtl" : "ltr"}

          modules={[
            Autoplay,
            EffectCreative,
            Pagination,
          ]}

          effect="creative"

          creativeEffect={{
            prev: {
              shadow: true,
              translate: [
                "-100%",
                0,
                -1000,
              ],
            },

            next: {
              shadow: true,
              translate: [
                "100%",
                0,
                -1000,
              ],
            },
          }}

          slidesPerView={1}

          speed={1000}

          spaceBetween={50}

          loop={true}

          watchSlidesProgress={true}

          grabCursor={false}

          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}

          pagination={{
            clickable: true,
          }}

          className="home-hero-swiper"
        >

          {heroSlides.map(
            (slide, slideIndex) => (

              <SwiperSlide
                key={slide.id}
                className={[
                  "banner-fix-height",
                  "noor-home-slide",
                  slide.className || "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >

                {/* =====================================
                    SLIDE BACKGROUND
                ====================================== */}

                <div
                  className="hero-slide-background"
                  style={{
                    backgroundImage:
                      slide.background
                        ? `url("${slide.background}")`
                        : undefined,
                  }}
                >

                  <div className="container hero-slide-container">

                    <div className="hero-slide-grid">

                      {/* =================================
                          LEFT CONTENT
                      ================================== */}

                      <div className="banner-headings">

                        <div className="banner-content">

                          {/* TITLE */}

                          <h1 className="hero-slide-title">

                            {slide.title?.map(
                              (
                                line,
                                index
                              ) => (

                                <span
                                  key={`${slide.id}-title-${index}`}
                                  className={[
                                    "hero-title-line",
                                    "text_color",
                                    line.animation ||
                                    "",
                                  ]
                                    .filter(
                                      Boolean
                                    )
                                    .join(
                                      " "
                                    )}
                                >
                                  {
                                    line.text
                                  }
                                </span>

                              )
                            )}

                          </h1>

                          {/* DESCRIPTION */}

                          {slide.description && (

                            <div className="check-desc-html html-content hero-slide-description slide-bottom">

                              {slide.description
                                .type ===
                                "list" ? (

                                <ul>

                                  {slide.description.items?.map(
                                    (
                                      item,
                                      index
                                    ) => (

                                      <li
                                        key={`${slide.id}-feature-${index}`}
                                      >
                                        {
                                          item
                                        }
                                      </li>

                                    )
                                  )}

                                </ul>

                              ) : (

                                <p>
                                  {
                                    slide
                                      .description
                                      .text
                                  }
                                </p>

                              )}

                            </div>

                          )}

                          {/* BUTTONS */}

                          {slide.buttons
                            ?.length >
                            0 && (

                              <div className="hero-slide-actions slide-bottom">

                                {slide.buttons.map(
                                  (
                                    button,
                                    index
                                  ) => {

                                    const href =
                                      button.external
                                        ? button.href
                                        : localHref(
                                          button.href,
                                          language
                                        );

                                    return (

                                      <a
                                        key={`${slide.id}-button-${index}`}
                                        href={
                                          href
                                        }
                                        target={
                                          button.external
                                            ? "_blank"
                                            : undefined
                                        }
                                        rel={
                                          button.external
                                            ? "noopener noreferrer"
                                            : undefined
                                        }
                                        className={
                                          button.type ===
                                            "border"
                                            ? "border_btn_46"
                                            : "fill_btn_46"
                                        }
                                      >
                                        <p>
                                          {
                                            button.label
                                          }
                                        </p>
                                      </a>

                                    );
                                  }
                                )}

                              </div>

                            )}

                        </div>

                      </div>

                      {/* =================================
                          RIGHT IMAGE / LAYERS
                      ================================== */}

                      <div className="banner-img-screen banner_main_image_sec">

                        {/* BASE HOLDER */}

                        <img
                          src="/images/home/hm_banner_3_holder.png"
                          alt=""
                          width="560"
                          height="549"
                          className="banner-holder"
                          draggable="false"
                        />

                        {/* IMAGE LAYERS */}

                        {slide.layers?.map(
                          (
                            layer,
                            index
                          ) => (

                            <img
                              key={`${slide.id}-layer-${index}`}
                              src={
                                layer.src
                              }
                              alt=""
                              width="560"
                              height="549"
                              loading={
                                slideIndex ===
                                  0 &&
                                  index === 0
                                  ? "eager"
                                  : "lazy"
                              }
                              decoding="async"
                              draggable="false"
                              className={[
                                "banner_elements",
                                layer.className ||
                                "",
                              ]
                                .filter(
                                  Boolean
                                )
                                .join(
                                  " "
                                )}
                            />

                          )
                        )}

                      </div>

                    </div>

                  </div>

                </div>

              </SwiperSlide>

            )
          )}

        </Swiper>

      </div>
    </section>
  );
}