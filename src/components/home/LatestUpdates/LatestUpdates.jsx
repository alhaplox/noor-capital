import {
  useRef,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";

import "./LatestUpdates.css";


/* =========================================================
   REMOTE NOOR ASSETS
========================================================= */

const assets = {
  background:
    "https://www.noorcapital.ae/images/blog.png",

  arrowLeft:
    "https://www.noorcapital.ae/images/about/arrow-left.png",

  arrowRight:
    "https://www.noorcapital.ae/images/about/arrow-right.png",
};


/* =========================================================
   ARTICLE DEFINITIONS
========================================================= */

const articles = [
  {
    key: "fed-policy",

    date:
      "02-08-2024",

    readTime:
      10,

    image:
      "https://admin.noorcapital.ae/media/images/cut-1024x435.original.jpg",

    path:
      "learning-hub/news-updates/market-updates/market-drivers-us-session-july-23",
  },

  {
    key: "usdjpy",

    date:
      "02-08-2024",

    readTime:
      10,

    image:
      "https://admin.noorcapital.ae/media/images/USDJPY_2024-08-01_09-06-00-1024x435-1.original.png",

    path:
      "learning-hub/news-updates/technical-analysis/usd-jpy-suffers-heavy-losses-1-8-2024",
  },

  {
    key: "invest-smarter",

    date:
      "08-08-2024",

    readTime:
      null,

    image:
      "https://admin.noorcapital.ae/media/images/Webinar-08112023-Web.original.png",

    path:
      "learning-hub/education/webinars/invest-smarter-not-harder-tools-strategies",
  },

  {
    key: "powell",

    date:
      "20-08-2024",

    readTime:
      10,

    image:
      "https://admin.noorcapital.ae/media/images/Powell-2-1024x435.original.jpg",

    path:
      "learning-hub/news-updates/economic-reports/powell-jackson-hole-speech-poised-to-set-the-stage-for-september-rate-cut",
  },
];


/* =========================================================
   MULTILINGUAL COPY
========================================================= */

const copy = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    title:
      "Stay Connected with Our Latest Updates",

    readMore:
      "Read More",

    minuteRead:
      "min read",

    previous:
      "Previous article",

    next:
      "Next article",

    articles: {
      "fed-policy":
        "Fed Official Sees Room for Easing Policy",

      usdjpy:
        "USD/JPY suffers heavy losses 1/8/2024",

      "invest-smarter":
        "Invest Smarter Not Harder: Tools & Strategies",

      powell:
        "Powell Jackson Hole Speech Poised To Set the Stage for September Rate Cut",
    },
  },


  /* =======================================================
     TÜRKÇE
  ======================================================= */

  tr: {
    title:
      "En Son Güncellemelerimizle Bağlantıda Kalın",

    readMore:
      "Devamını Oku",

    minuteRead:
      "dk okuma",

    previous:
      "Önceki yazı",

    next:
      "Sonraki yazı",

    articles: {
      "fed-policy":
        "Fed Yetkilisi Para Politikasında Gevşeme İçin Alan Görüyor",

      usdjpy:
        "USD/JPY 1 Ağustos 2024'te Ağır Kayıplar Yaşadı",

      "invest-smarter":
        "Daha Akıllı Yatırım Yapın: Araçlar ve Stratejiler",

      powell:
        "Powell'ın Jackson Hole Konuşması Eylül Faiz İndirimi İçin Zemin Hazırlayabilir",
    },
  },


  /* =======================================================
     RUSSIAN
  ======================================================= */

  ru: {
    title:
      "Следите за нашими последними обновлениями",

    readMore:
      "Подробнее",

    minuteRead:
      "мин чтения",

    previous:
      "Предыдущая статья",

    next:
      "Следующая статья",

    articles: {
      "fed-policy":
        "Представитель ФРС видит возможности для смягчения политики",

      usdjpy:
        "USD/JPY понес значительные потери 1 августа 2024 года",

      "invest-smarter":
        "Инвестируйте разумнее: инструменты и стратегии",

      powell:
        "Выступление Пауэлла в Джексон-Хоуле может задать направление для снижения ставки в сентябре",
    },
  },


  /* =======================================================
     ARABIC
  ======================================================= */

  ar: {
    title:
      "ابقَ على اطلاع بأحدث تحديثاتنا",

    readMore:
      "اقرأ المزيد",

    minuteRead:
      "دقائق قراءة",

    previous:
      "المقال السابق",

    next:
      "المقال التالي",

    articles: {
      "fed-policy":
        "مسؤول في الاحتياطي الفيدرالي يرى مجالاً لتيسير السياسة",

      usdjpy:
        "زوج USD/JPY يتكبد خسائر كبيرة في 1 أغسطس 2024",

      "invest-smarter":
        "استثمر بذكاء أكبر: الأدوات والاستراتيجيات",

      powell:
        "خطاب باول في جاكسون هول قد يمهد الطريق لخفض الفائدة في سبتمبر",
    },
  },
};


/* =========================================================
   LATEST UPDATES
========================================================= */

export default function LatestUpdates({
  language = "en",
  navigate,
}) {
  const swiperRef =
    useRef(null);


  const content =
    copy[language] ||
    copy.en;


  /* =======================================================
     INTERNAL LINK
  ======================================================= */

  function handleLink(
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
     PREVIOUS
  ======================================================= */

  function previousSlide() {
    swiperRef.current?.slidePrev();
  }


  /* =======================================================
     NEXT
  ======================================================= */

  function nextSlide() {
    swiperRef.current?.slideNext();
  }


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      className="latest-updates"
      id="latest-updates"

      style={{
        "--latest-background":
          `url("${assets.background}")`,
      }}
    >

      <div className="latest-updates-container">


        {/* =========================================
            TITLE
        ========================================== */}

        <div className="latest-updates-heading">

          <h2>
            {content.title}
          </h2>

        </div>


        {/* =========================================
            SLIDER
        ========================================== */}

        <div className="latest-updates-slider">

          <Swiper
            key={language}

            dir={
              language === "ar"
                ? "rtl"
                : "ltr"
            }

            loop={true}

            spaceBetween={25}

            slidesPerView={1.08}

            breakpoints={{
              540: {
                slidesPerView:
                  1.7,
              },

              760: {
                slidesPerView:
                  2.25,
              },

              1000: {
                slidesPerView:
                  3,
              },

              1250: {
                slidesPerView:
                  4,
              },
            }}

            onSwiper={(
              swiper
            ) => {
              swiperRef.current =
                swiper;
            }}

            className="latest-updates-swiper"
          >

            {articles.map(
              (
                article
              ) => {

                const href =
                  `/${language}/${article.path}`;


                return (
                  <SwiperSlide
                    key={
                      article.key
                    }
                  >

                    <article className="latest-card">

                      {/* IMAGE */}

                      <a
                        href={href}

                        className="latest-card-image"

                        onClick={(
                          event
                        ) =>
                          handleLink(
                            event,
                            href
                          )
                        }
                      >

                        <img
                          src={
                            article.image
                          }

                          alt={
                            content
                              .articles[
                            article.key
                            ]
                          }

                          loading="lazy"
                        />

                      </a>


                      {/* CONTENT */}

                      <div className="latest-card-content">


                        {/* DATE */}

                        <div className="latest-card-meta">

                          <span>
                            {
                              article.date
                            }

                            {article.readTime && (
                              <>
                                {" | "}

                                {
                                  article.readTime
                                }

                                {" "}

                                {
                                  content.minuteRead
                                }
                              </>
                            )}

                          </span>

                        </div>


                        {/* TITLE */}

                        <h3>

                          <a
                            href={href}

                            onClick={(
                              event
                            ) =>
                              handleLink(
                                event,
                                href
                              )
                            }
                          >
                            {
                              content
                                .articles[
                              article.key
                              ]
                            }
                          </a>

                        </h3>


                        {/* CTA */}

                        <div className="latest-card-bottom">

                          <a
                            href={href}

                            className="latest-card-button"

                            onClick={(
                              event
                            ) =>
                              handleLink(
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

                  </SwiperSlide>
                );
              }
            )}

          </Swiper>

        </div>


        {/* =========================================
            ARROWS
        ========================================== */}

        <div className="latest-updates-navigation">

          <button
            type="button"

            onClick={
              previousSlide
            }

            aria-label={
              content.previous
            }
          >

            <img
              src={
                assets.arrowLeft
              }

              alt=""
            />

          </button>


          <button
            type="button"

            onClick={
              nextSlide
            }

            aria-label={
              content.next
            }
          >

            <img
              src={
                assets.arrowRight
              }

              alt=""
            />

          </button>

        </div>

      </div>

    </section>
  );
}