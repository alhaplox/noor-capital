import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { heroSlides } from "./heroSlides";

function localHref(href, lang) {
  if (!href || href.startsWith("http")) return href;
  return `/${lang}${href}`;
}

export default function HeroSlider({ lang = "en" }) {
  return (
    <section className="w-full hm-banner-section">
      <div className="hm-banner">
        <Swiper
          modules={[Autoplay, EffectCreative, Pagination]}
          effect="creative"
          creativeEffect={{
            prev: { shadow: true, translate: ["-100%", 0, -1000] },
            next: { shadow: true, translate: ["100%", 0, -1000] },
          }}
          speed={1000}
          spaceBetween={50}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="home-hero-swiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className={`banner-fix-height ${slide.className}`}
              style={{
                backgroundImage: `url(${slide.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container h-full">
                <div className="hero-slide-grid h-full">
                  <div className="banner-headings">
                    <div>
                      <h1 className="hero-slide-title">
                        {slide.title.map((line, index) => (
                          <span
                            key={`${slide.id}-${index}`}
                            className={`block ${line.animation} text_color`}
                          >
                            {line.text}
                          </span>
                        ))}
                      </h1>

                      <div className="check-desc-html html-content text-white hero-slide-description slide-bottom">
                        {slide.description.type === "list" ? (
                          <ul>
                            {slide.description.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{slide.description.text}</p>
                        )}
                      </div>

                      <div className="hero-slide-actions">
                        {slide.buttons.map((button) => (
                          <a
                            key={button.label}
                            href={localHref(button.href, lang)}
                            target={button.external ? "_blank" : undefined}
                            rel={button.external ? "noreferrer" : undefined}
                            className={
                              button.type === "border"
                                ? "border_btn_46"
                                : "fill_btn_46"
                            }
                          >
                            <p>{button.label}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="banner-img-screen from-right banner_main_image_sec h-full">
                    <img
                      alt=""
                      width="560"
                      height="549"
                      className="banner-holder"
                      src="/images/home/hm_banner_3_holder.png"
                    />

                    {slide.layers.map((layer) => (
                      <img
                        key={layer.src}
                        alt=""
                        loading="lazy"
                        width="560"
                        height="549"
                        className={layer.className}
                        src={layer.src}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
