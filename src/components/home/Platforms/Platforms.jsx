import {
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
} from "swiper/modules";

import "swiper/css";

import "./Platforms.css";


/* =========================================================
   PLATFORM DEFINITIONS
========================================================= */

const platforms = [
  {
    key: "mt4-platform",

    path:
      "trading/mt4-platform",
  },

  {
    key: "mt5-platform",

    path:
      "trading/mt5-platform",
  },

  {
    key: "mt4-web-trader",

    path:
      "trading/mt4-web-trader",
  },

  {
    key: "mt5-web-trader",

    path:
      "trading/mt5-web-trader",
  },

  {
    key: "analysis-indicator",

    path:
      "trading/analysis-indicator",
  },
];


/* =========================================================
   MULTILINGUAL CONTENT
========================================================= */

const platformCopy = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    headingBefore:
      "Trade with Confidence on Noor Capital’s Premier",

    headingAccent:
      "Platforms",

    prefix:
      "Noor Capital's",

    labels: {
      "mt4-platform":
        "MT4 Platform",

      "mt5-platform":
        "MT5 Platform",

      "mt4-web-trader":
        "MT4 Web Trader",

      "mt5-web-trader":
        "MT5 Web Trader",

      "analysis-indicator":
        "Analysis Indicator",
    },

    descriptions: {
      "mt4-platform":
        "Access one of the world’s most recognized trading platforms with powerful charting tools, flexible order execution, and a reliable environment designed for global market trading.",

      "mt5-platform":
        "Experience a next-generation multi-asset trading platform with advanced analytical tools, enhanced order management, and a comprehensive trading environment.",

      "mt4-web-trader":
        "Trade directly from your browser with the familiar MT4 experience, giving you fast access to global markets without installing additional software.",

      "mt5-web-trader":
        "An advanced web-based trading platform delivering comprehensive analytics, multi-asset support, and real-time trading directly from your browser.",

      "analysis-indicator":
        "Strengthen your market analysis with advanced indicators and analytical tools designed to help identify trends, opportunities, and market movements.",
    },

    buttons: {
      "mt4-platform":
        "Start Trading on MT4",

      "mt5-platform":
        "Start Trading on MT5",

      "mt4-web-trader":
        "Start Trading on Web Trader",

      "mt5-web-trader":
        "Start Trading on Web Trader",

      "analysis-indicator":
        "Explore Analysis Tools",
    },

    previous:
      "Previous platform",

    next:
      "Next platform",
  },


  /* =======================================================
     TÜRKÇE
  ======================================================= */

  tr: {
    headingBefore:
      "Noor Capital’in Önde Gelen Platformlarında Güvenle İşlem Yapın",

    headingAccent:
      "Platformlar",

    prefix:
      "Noor Capital",

    labels: {
      "mt4-platform":
        "MT4 Platformu",

      "mt5-platform":
        "MT5 Platformu",

      "mt4-web-trader":
        "MT4 Web Trader",

      "mt5-web-trader":
        "MT5 Web Trader",

      "analysis-indicator":
        "Analiz Göstergeleri",
    },

    descriptions: {
      "mt4-platform":
        "Güçlü grafik araçları, esnek emir yönetimi ve küresel piyasalarda işlem yapmaya uygun güvenilir altyapısıyla dünyanın en bilinen işlem platformlarından biri olan MT4’e erişin.",

      "mt5-platform":
        "Gelişmiş analiz araçları, güçlü emir yönetimi ve çoklu varlık desteği sunan yeni nesil MT5 işlem platformuyla piyasaları daha kapsamlı şekilde takip edin.",

      "mt4-web-trader":
        "Herhangi bir ek yazılım yüklemeden MT4 deneyimini doğrudan tarayıcınız üzerinden kullanarak küresel piyasalara hızlı şekilde erişin.",

      "mt5-web-trader":
        "Kapsamlı analiz araçları, çoklu varlık desteği ve gerçek zamanlı işlem özellikleri sunan gelişmiş MT5 Web Trader ile doğrudan tarayıcınızdan işlem yapın.",

      "analysis-indicator":
        "Trendleri, fırsatları ve piyasa hareketlerini daha iyi değerlendirmek için gelişmiş analiz göstergeleri ve teknik araçlardan yararlanın.",
    },

    buttons: {
      "mt4-platform":
        "MT4 ile İşleme Başla",

      "mt5-platform":
        "MT5 ile İşleme Başla",

      "mt4-web-trader":
        "Web Trader ile İşleme Başla",

      "mt5-web-trader":
        "Web Trader ile İşleme Başla",

      "analysis-indicator":
        "Analiz Araçlarını Keşfet",
    },

    previous:
      "Önceki platform",

    next:
      "Sonraki platform",
  },


  /* =======================================================
     RUSSIAN
  ======================================================= */

  ru: {
    headingBefore:
      "Торгуйте уверенно на ведущих платформах Noor Capital",

    headingAccent:
      "Платформы",

    prefix:
      "Noor Capital",

    labels: {
      "mt4-platform":
        "Платформа MT4",

      "mt5-platform":
        "Платформа MT5",

      "mt4-web-trader":
        "MT4 Web Trader",

      "mt5-web-trader":
        "MT5 Web Trader",

      "analysis-indicator":
        "Индикаторы анализа",
    },

    descriptions: {
      "mt4-platform":
        "Используйте одну из самых известных торговых платформ в мире с мощными графическими инструментами, гибким исполнением ордеров и надежной торговой средой.",

      "mt5-platform":
        "Откройте для себя современную мультиактивную платформу с расширенными аналитическими инструментами, улучшенным управлением ордерами и широкими торговыми возможностями.",

      "mt4-web-trader":
        "Торгуйте непосредственно из браузера с привычными возможностями MT4 без необходимости устанавливать дополнительное программное обеспечение.",

      "mt5-web-trader":
        "Современная веб-платформа с расширенной аналитикой, поддержкой нескольких классов активов и торговлей в реальном времени прямо из браузера.",

      "analysis-indicator":
        "Используйте расширенные индикаторы и аналитические инструменты для выявления рыночных тенденций, возможностей и изменений движения цены.",
    },

    buttons: {
      "mt4-platform":
        "Начать торговлю на MT4",

      "mt5-platform":
        "Начать торговлю на MT5",

      "mt4-web-trader":
        "Начать торговлю в Web Trader",

      "mt5-web-trader":
        "Начать торговлю в Web Trader",

      "analysis-indicator":
        "Изучить инструменты анализа",
    },

    previous:
      "Предыдущая платформа",

    next:
      "Следующая платформа",
  },


  /* =======================================================
     ARABIC
  ======================================================= */

  ar: {
    headingBefore:
      "تداول بثقة عبر منصات نور كابيتال الرائدة",

    headingAccent:
      "المنصات",

    prefix:
      "نور كابيتال",

    labels: {
      "mt4-platform":
        "منصة MT4",

      "mt5-platform":
        "منصة MT5",

      "mt4-web-trader":
        "MT4 Web Trader",

      "mt5-web-trader":
        "MT5 Web Trader",

      "analysis-indicator":
        "مؤشرات التحليل",
    },

    descriptions: {
      "mt4-platform":
        "استخدم واحدة من أشهر منصات التداول عالمياً مع أدوات رسوم بيانية قوية وتنفيذ مرن للأوامر وبيئة موثوقة للتداول في الأسواق العالمية.",

      "mt5-platform":
        "استفد من منصة تداول متطورة متعددة الأصول توفر أدوات تحليل متقدمة وإدارة محسنة للأوامر وتجربة تداول شاملة.",

      "mt4-web-trader":
        "تداول مباشرة من متصفحك باستخدام تجربة MT4 المعروفة دون الحاجة إلى تثبيت أي برامج إضافية.",

      "mt5-web-trader":
        "منصة تداول متطورة عبر الويب توفر تحليلات شاملة ودعماً للأصول المتعددة وتداولاً فورياً مباشرة من متصفحك.",

      "analysis-indicator":
        "عزز تحليلك للأسواق باستخدام المؤشرات والأدوات المتقدمة المصممة لمساعدتك على تحديد الاتجاهات والفرص وتحركات السوق.",
    },

    buttons: {
      "mt4-platform":
        "ابدأ التداول عبر MT4",

      "mt5-platform":
        "ابدأ التداول عبر MT5",

      "mt4-web-trader":
        "ابدأ التداول عبر Web Trader",

      "mt5-web-trader":
        "ابدأ التداول عبر Web Trader",

      "analysis-indicator":
        "اكتشف أدوات التحليل",
    },

    previous:
      "المنصة السابقة",

    next:
      "المنصة التالية",
  },
};


/* =========================================================
   REMOTE NOOR ASSETS
========================================================= */

const assets = {
  platformBackground:
    "https://www.noorcapital.ae/images/about/bg-platform.png",

  showcase:
    "https://admin.noorcapital.ae/media/images/mt-5.original.png",

  arrowLeft:
    "https://www.noorcapital.ae/images/about/arrow-left.png",

  arrowRight:
    "https://www.noorcapital.ae/images/about/arrow-right.png",
};


/* =========================================================
   PLATFORMS
========================================================= */

export default function Platforms({
  language = "en",
  navigate,
}) {
  const swiperRef =
    useRef(null);


  /*
    Noor reference shows MT5 Web Trader
    as the selected platform.
  */

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(3);


  const content =
    platformCopy[language] ||
    platformCopy.en;


  const activePlatform =
    useMemo(
      () =>
        platforms[
        activeIndex
        ] ||
        platforms[0],
      [activeIndex]
    );


  const activeTitle =
    content.labels[
    activePlatform.key
    ];


  const href =
    `/${language}/${activePlatform.path}`;


  /* =======================================================
     INTERNAL LINK
  ======================================================= */

  function handleLink(
    event
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

  function goPrevious() {
    swiperRef.current?.slidePrev();
  }


  /* =======================================================
     NEXT
  ======================================================= */

  function goNext() {
    swiperRef.current?.slideNext();
  }


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      className="platforms-section"
      id="platforms"

      style={{
        "--platform-background":
          `url("${assets.platformBackground}")`,

        "--platform-showcase":
          `url("${assets.showcase}")`,
      }}
    >

      {/* =========================================
          TOP HEADING
      ========================================== */}

      <div className="platforms-container">

        <div className="platforms-heading">

          <h2>

            <span>
              {
                content.headingBefore
              }
            </span>

            <strong>
              {
                content.headingAccent
              }
            </strong>

          </h2>

        </div>

      </div>


      {/* =========================================
          PLATFORM SHOWCASE
      ========================================== */}

      <div className="platforms-showcase">

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

          initialSlide={
            activeIndex
          }

          loop={true}

          centeredSlides={
            true
          }

          spaceBetween={
            10
          }

          slidesPerView={
            1.25
          }

          breakpoints={{
            600: {
              slidesPerView:
                2.1,
            },

            900: {
              slidesPerView:
                3.2,
            },

            1200: {
              slidesPerView:
                4.6,
            },

            1500: {
              slidesPerView:
                5.2,
            },
          }}

          onSwiper={(
            swiper
          ) => {
            swiperRef.current =
              swiper;
          }}

          onRealIndexChange={(
            swiper
          ) => {
            setActiveIndex(
              swiper.realIndex
            );
          }}

          className="platforms-swiper"
        >

          {platforms.map(
            (
              platform,
              index
            ) => {

              const label =
                content.labels[
                platform.key
                ];


              return (
                <SwiperSlide
                  key={
                    platform.key
                  }
                >

                  <button
                    type="button"

                    className="platform-slide"

                    aria-label={
                      label
                    }

                    onClick={() => {
                      swiperRef.current?.slideToLoop(
                        index
                      );
                    }}
                  >

                    <h3>
                      {label}
                    </h3>

                  </button>

                </SwiperSlide>
              );
            }
          )}

        </Swiper>

      </div>


      {/* =========================================
          ACTIVE PLATFORM DETAILS
      ========================================== */}

      <div className="platforms-container">

        <div className="platforms-bottom">

          <h3>
            <span>
              {
                content.prefix
              }
            </span>

            {" "}

            <strong>
              {
                activeTitle
              }
            </strong>
          </h3>


          {/* =====================================
              DESCRIPTION + ARROWS
          ====================================== */}

          <div className="platforms-description-row">

            <button
              type="button"

              className="platform-arrow platform-arrow-left"

              onClick={
                goPrevious
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


            <p>
              {
                content
                  .descriptions[
                activePlatform.key
                ]
              }
            </p>


            <button
              type="button"

              className="platform-arrow platform-arrow-right"

              onClick={
                goNext
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


          {/* =====================================
              CTA
          ====================================== */}

          <a
            href={
              href
            }

            className="platforms-cta"

            onClick={
              handleLink
            }
          >
            {
              content.buttons[
              activePlatform.key
              ]
            }
          </a>

        </div>

      </div>

    </section>
  );
}