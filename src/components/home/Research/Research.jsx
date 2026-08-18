import {
  useRef,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
} from "swiper/modules";

import "swiper/css";

import "./Research.css";


/* =========================================================
   REMOTE NOOR ASSETS
========================================================= */

const assets = {
  background:
    "https://www.noorcapital.ae/images/home/explore_bg.png",

  arrowLeft:
    "https://www.noorcapital.ae/images/about/arrow-left.png",

  arrowRight:
    "https://www.noorcapital.ae/images/about/arrow-right.png",
};


/* =========================================================
   RESEARCH ITEMS
========================================================= */

const researchItems = [
  {
    key: "webinars",

    image:
      "https://admin.noorcapital.ae/media/original_images/invest-2.7b46eb3f.gif",

    path:
      "learning-hub/education/webinars",
  },

  {
    key: "market-updates",

    image:
      "https://admin.noorcapital.ae/media/original_images/invest-4.2de06773.gif",

    path:
      "learning-hub/news-updates/market-updates",
  },

  {
    key: "technical-analysis",

    image:
      "https://admin.noorcapital.ae/media/original_images/invest-5.ac77f68c.gif",

    path:
      "learning-hub/news-updates/technical-analysis",
  },

  {
    key: "video-tutorials",

    image:
      "https://admin.noorcapital.ae/media/original_images/invest-6.97339657.gif",

    path:
      "learning-hub/education/video-tutorials",
  },
];


/* =========================================================
   MULTILINGUAL CONTENT
========================================================= */

const researchCopy = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    title:
      "Research & Development",

    subtitle:
      "Education, market insights, webinars, workshops, and more to guide your investment journey",

    previous:
      "Previous",

    next:
      "Next",

    items: {
      webinars: {
        title:
          "Webinars",

        text:
          "Join our expert-led webinars to stay updated on the latest market trends and investment strategies",
      },

      "market-updates": {
        title:
          "Market Updates",

        text:
          "Stay informed with real-time market updates that provide insights into global financial movements and opportunities",
      },

      "technical-analysis": {
        title:
          "Technical Analysis",

        text:
          "Utilize our in-depth technical analysis to make informed trading decisions based on market data and trends",
      },

      "video-tutorials": {
        title:
          "Video Tutorials",

        text:
          "Watch our easy-to-follow video tutorials covering a wide range of topics to boost your trading knowledge",
      },
    },
  },


  /* =======================================================
     TÜRKÇE
  ======================================================= */

  tr: {
    title:
      "Araştırma & Geliştirme",

    subtitle:
      "Yatırım yolculuğunuza rehberlik edecek eğitimler, piyasa analizleri, webinarlar, atölyeler ve daha fazlası",

    previous:
      "Önceki",

    next:
      "Sonraki",

    items: {
      webinars: {
        title:
          "Webinarlar",

        text:
          "Uzmanlarımız tarafından düzenlenen webinarlara katılarak güncel piyasa trendleri ve yatırım stratejileri hakkında bilgi edinin",
      },

      "market-updates": {
        title:
          "Piyasa Güncellemeleri",

        text:
          "Küresel finansal hareketler ve yatırım fırsatları hakkında bilgi sunan gerçek zamanlı piyasa güncellemelerini takip edin",
      },

      "technical-analysis": {
        title:
          "Teknik Analiz",

        text:
          "Piyasa verileri ve trendlerine dayalı daha bilinçli işlem kararları vermek için kapsamlı teknik analizlerimizden yararlanın",
      },

      "video-tutorials": {
        title:
          "Video Eğitimleri",

        text:
          "İşlem bilginizi geliştirmek için farklı konuları kapsayan kolay takip edilebilir video eğitimlerimizi izleyin",
      },
    },
  },


  /* =======================================================
     RUSSIAN
  ======================================================= */

  ru: {
    title:
      "Исследования и развитие",

    subtitle:
      "Обучение, аналитика рынков, вебинары, практические семинары и другие материалы для вашего инвестиционного развития",

    previous:
      "Предыдущий",

    next:
      "Следующий",

    items: {
      webinars: {
        title:
          "Вебинары",

        text:
          "Участвуйте в вебинарах с экспертами, чтобы быть в курсе последних рыночных тенденций и инвестиционных стратегий",
      },

      "market-updates": {
        title:
          "Обзоры рынка",

        text:
          "Следите за актуальными рыночными обновлениями и получайте информацию о глобальных финансовых движениях и возможностях",
      },

      "technical-analysis": {
        title:
          "Технический анализ",

        text:
          "Используйте наш подробный технический анализ для принятия более обоснованных торговых решений на основе рыночных данных и тенденций",
      },

      "video-tutorials": {
        title:
          "Видеообучение",

        text:
          "Смотрите простые и понятные видеоуроки по различным темам и расширяйте свои знания о торговле",
      },
    },
  },


  /* =======================================================
     ARABIC
  ======================================================= */

  ar: {
    title:
      "البحث والتطوير",

    subtitle:
      "التعليم وتحليلات الأسواق والندوات وورش العمل والمزيد لدعم رحلتك الاستثمارية",

    previous:
      "السابق",

    next:
      "التالي",

    items: {
      webinars: {
        title:
          "الندوات الإلكترونية",

        text:
          "انضم إلى ندواتنا التي يقدمها الخبراء للبقاء على اطلاع بأحدث اتجاهات السوق واستراتيجيات الاستثمار",
      },

      "market-updates": {
        title:
          "تحديثات السوق",

        text:
          "ابقَ على اطلاع من خلال تحديثات السوق الفورية التي تقدم رؤى حول التحركات والفرص المالية العالمية",
      },

      "technical-analysis": {
        title:
          "التحليل الفني",

        text:
          "استفد من تحليلاتنا الفنية المتعمقة لاتخاذ قرارات تداول مدروسة استناداً إلى بيانات السوق واتجاهاته",
      },

      "video-tutorials": {
        title:
          "الدروس المصورة",

        text:
          "شاهد دروسنا المصورة سهلة المتابعة التي تغطي مجموعة واسعة من الموضوعات لتعزيز معرفتك بالتداول",
      },
    },
  },
};


/* =========================================================
   RESEARCH
========================================================= */

export default function Research({
  language = "en",
  navigate,
}) {
  const swiperRef =
    useRef(null);


  const content =
    researchCopy[language] ||
    researchCopy.en;


  /* =======================================================
     INTERNAL NAVIGATION
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
      className="research-section"
      id="research"

      style={{
        "--research-background":
          `url("${assets.background}")`,
      }}
    >

      <div className="research-container">


        {/* =========================================
            HEADING
        ========================================== */}

        <div className="research-heading">

          <h2>
            {content.title}
          </h2>

          <p>
            {content.subtitle}
          </p>

        </div>


        {/* =========================================
            SLIDER
        ========================================== */}

        <div className="research-slider">

          <Swiper
            key={language}

            dir={
              language === "ar"
                ? "rtl"
                : "ltr"
            }

            modules={[
              Navigation,
            ]}

            loop={true}

            spaceBetween={21}

            slidesPerView={1.08}

            breakpoints={{
              560: {
                slidesPerView:
                  1.65,
              },

              760: {
                slidesPerView:
                  2.15,
              },

              1000: {
                slidesPerView:
                  3,
              },

              1300: {
                slidesPerView:
                  3.5,
              },

              1500: {
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

            className="research-swiper"
          >

            {researchItems.map(
              (
                item
              ) => {

                const copy =
                  content.items[
                  item.key
                  ];


                const href =
                  `/${language}/${item.path}`;


                return (
                  <SwiperSlide
                    key={
                      item.key
                    }
                  >

                    <a
                      href={
                        href
                      }

                      className="research-card"

                      onClick={(
                        event
                      ) =>
                        handleLink(
                          event,
                          href
                        )
                      }
                    >

                      <div className="research-card-inner">


                        {/* =============================
                            ICON
                        ============================== */}

                        <div className="research-card-icon">

                          <img
                            src={
                              item.image
                            }

                            alt=""

                            loading="lazy"
                          />

                        </div>


                        {/* =============================
                            COPY
                        ============================== */}

                        <div className="research-card-copy">

                          <h3>
                            {
                              copy.title
                            }
                          </h3>

                          <p>
                            {
                              copy.text
                            }
                          </p>

                        </div>

                      </div>

                    </a>

                  </SwiperSlide>
                );
              }
            )}

          </Swiper>

        </div>


        {/* =========================================
            NAVIGATION
        ========================================== */}

        <div className="research-navigation">

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

              loading="lazy"
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

              loading="lazy"
            />

          </button>

        </div>

      </div>

    </section>
  );
}