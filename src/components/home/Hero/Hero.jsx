import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Hero.css";
import { heroSlides } from "./heroSlides";


/* =========================================================
   LOCAL LINK HELPER
========================================================= */

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

  const cleanHref = href.startsWith("/")
    ? href
    : `/${href}`;

  return `/${language}${cleanHref}`;
}


/* =========================================================
   HERO
========================================================= */

export default function Hero({
  language = "en",
}) {
  const isRTL = language === "ar";

  return (
    <section
      className="hero"
      id="home-hero"
    >
      <Swiper
        key={language}
        dir={isRTL ? "rtl" : "ltr"}

        modules={[
          Autoplay,
          Pagination,
        ]}

        slidesPerView={1}
        slidesPerGroup={1}

        loop={true}

        speed={900}

        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}

        pagination={{
          clickable: true,
        }}

        className="hero-swiper"
      >

        {heroSlides.map(
          (slide, slideIndex) => (

            <SwiperSlide
              key={slide.id}
              className={`hero-slide ${slide.className || ""
                }`}
            >

              <div
                className="hero-slide-background"
                style={{
                  backgroundImage:
                    slide.background
                      ? `url("${slide.background}")`
                      : undefined,
                }}
              >

                <div className="hero-container">

                  <div className="hero-grid">

                    {/* =====================================
                        LEFT CONTENT
                    ====================================== */}

                    <div className="hero-copy">

                      {/* TITLE */}

                      <h1 className="hero-title">

                        {slide.title?.map(
                          (
                            line,
                            index
                          ) => (

                            <span
                              key={`${slide.id}-title-${index}`}
                              className={[
                                "hero-title-line",
                                line.animation || "",
                              ]
                                .filter(Boolean)
                                .join(" ")}
                            >
                              {line.text}
                            </span>

                          )
                        )}

                      </h1>


                      {/* DESCRIPTION */}

                      {slide.description && (

                        <div className="hero-description">

                          {slide.description.type ===
                            "list" ? (

                            <ul>

                              {slide.description.items?.map(
                                (
                                  item,
                                  index
                                ) => (

                                  <li
                                    key={`${slide.id}-description-${index}`}
                                  >
                                    {item}
                                  </li>

                                )
                              )}

                            </ul>

                          ) : (

                            <p>
                              {slide.description.text}
                            </p>

                          )}

                        </div>

                      )}


                      {/* BUTTONS */}

                      {slide.buttons?.length > 0 && (

                        <div className="hero-actions">

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

                                  href={href}

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

                                  className={[
                                    "hero-button",

                                    button.type ===
                                      "border"
                                      ? "hero-button-outline"
                                      : "hero-button-gold",
                                  ].join(" ")}
                                >
                                  {button.label}
                                </a>

                              );
                            }
                          )}

                        </div>

                      )}

                    </div>


                    {/* =====================================
                        RIGHT VISUAL
                    ====================================== */}

                    <div className="hero-visual">

                      {slide.layers?.map(
                        (
                          layer,
                          index
                        ) => (

                          <img
                            key={`${slide.id}-layer-${index}`}

                            src={layer.src}

                            alt=""

                            width="560"
                            height="549"

                            draggable="false"

                            decoding="async"

                            loading={
                              slideIndex === 0
                                ? "eager"
                                : "lazy"
                            }

                            className={[
                              "hero-layer",
                              layer.className || "",
                            ]
                              .filter(Boolean)
                              .join(" ")}
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
    </section>
  );
}