import {
  useRef,
} from "react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
} from "swiper/modules";

import "swiper/css";

import "./Footer.css";


/* =========================================================
   REMOTE NOOR ASSETS
========================================================= */

const assets = {
  logo:
    "https://www.noorcapital.ae/images/about/footer-logo.png",

  awards: [
    {
      key: "award-2019-a",

      image:
        "https://admin.noorcapital.ae/media/images/awards_2019.original.png",

      alt:
        "Award 2019",
    },

    {
      key: "award-2020-a",

      image:
        "https://admin.noorcapital.ae/media/images/award_2020.original.png",

      alt:
        "Award 2020",
    },

    {
      key: "award-2019-b",

      image:
        "https://admin.noorcapital.ae/media/images/awards_2019.original.png",

      alt:
        "Award 2019",
    },

    {
      key: "award-2020-b",

      image:
        "https://admin.noorcapital.ae/media/images/award_2020.original.png",

      alt:
        "Award 2020",
    },
  ],

  social: {
    facebook:
      "https://www.noorcapital.ae/images/about/fb.png",

    x:
      "https://www.noorcapital.ae/images/about/x.png",

    instagram:
      "https://www.noorcapital.ae/images/about/insta.png",

    youtube:
      "https://www.noorcapital.ae/images/about/youtube.png",

    linkedin:
      "https://www.noorcapital.ae/images/about/linkdin.png",
  },
};


/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    key: "facebook",

    href:
      "https://www.facebook.com/noorcapitaluae",

    label:
      "Facebook",
  },

  {
    key: "x",

    href:
      "https://x.com/noor_capital",

    label:
      "X",
  },

  {
    key: "instagram",

    href:
      "https://instagram.com/noorcapital",

    label:
      "Instagram",
  },

  {
    key: "youtube",

    href:
      "https://www.youtube.com/NoorCapitaluae",

    label:
      "YouTube",
  },

  {
    key: "linkedin",

    href:
      "https://www.linkedin.com/company/noorcapitaluae/",

    label:
      "LinkedIn",
  },
];


/* =========================================================
   FOOTER LINKS
========================================================= */

const footerGroups = [
  {
    key: "company",

    links: [
      {
        key: "about",

        path:
          "about-us#about",
      },

      {
        key: "why",

        path:
          "about-us#why_noor_capital",
      },

      {
        key: "license",

        path:
          "about-us#license_and_regulations",
      },

      {
        key: "media",

        path:
          "learning-hub/media-center/press-release",
      },

      {
        key: "contact",

        path:
          "contact-us",
      },
    ],
  },


  {
    key: "services",

    links: [
      {
        key: "financial-advisory",

        path:
          "services/global-financial-advisory",
      },

      {
        key: "asset-management",

        path:
          "services/asset-management",
      },

      {
        key: "investment-services",

        path:
          "services/investment-services",
      },

      {
        key: "fund-administration",

        path:
          "services/funds-administration",
      },
    ],
  },


  {
    key: "products",

    links: [
      {
        key: "forex",

        path:
          "products/forex-trading",
      },

      {
        key: "commodities",

        path:
          "products/commodities",
      },

      {
        key: "indices",

        path:
          "products/indices",
      },

      {
        key: "energies",

        path:
          "products/energies",
      },

      {
        key: "shares",

        path:
          "products/shares-trading-cfds",
      },

      {
        key: "cash-equities",

        path:
          "products/cash-equities",
      },
    ],
  },


  {
    key: "trading",

    links: [
      {
        key: "mt4",

        path:
          "trading/mt4-platform",
      },

      {
        key: "mt5",

        path:
          "trading/mt5-platform",
      },

      {
        key: "mt4-web",

        path:
          "trading/mt4-web-trader",
      },

      {
        key: "mt5-web",

        path:
          "trading/mt5-web-trader",
      },

      {
        key: "funding",

        path:
          "trading/funding-and-withdrawals",
      },

      {
        key: "conditions",

        path:
          "trading/trading-condition",
      },
    ],
  },


  {
    key: "learning",

    links: [
      {
        key: "learn-invest",

        path:
          "learning-hub/education/learn-to-invest",
      },

      {
        key: "technical",

        path:
          "learning-hub/news-updates/technical-analysis",
      },

      {
        key: "videos",

        path:
          "learning-hub/education/video-tutorials",
      },

      {
        key: "reports",

        path:
          "learning-hub/news-updates/economic-reports",
      },

      {
        key: "webinars",

        path:
          "learning-hub/education/webinars",
      },

      {
        key: "workshops",

        path:
          "learning-hub/education/workshop",
      },
    ],
  },
];


/* =========================================================
   MULTILINGUAL COPY
========================================================= */

const footerCopy = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    groupTitles: {
      company:
        "Company",

      services:
        "Services",

      products:
        "Products",

      trading:
        "Trading",

      learning:
        "Learning Hub",
    },

    links: {
      about:
        "About",

      why:
        "Why Noor Capital",

      license:
        "License & Regulations",

      media:
        "Media Center",

      contact:
        "Contact Us",

      "financial-advisory":
        "Global Financial Advisory",

      "asset-management":
        "Asset Management",

      "investment-services":
        "Investment Services",

      "fund-administration":
        "Fund Administration",

      forex:
        "Forex",

      commodities:
        "Commodities",

      indices:
        "Indices",

      energies:
        "Energies",

      shares:
        "Shares CFDs",

      "cash-equities":
        "Cash Equities",

      mt4:
        "MT4 Platform",

      mt5:
        "MT5 Platform",

      "mt4-web":
        "MT4 Web Trader",

      "mt5-web":
        "MT5 Web Trader",

      funding:
        "Funding & Withdrawals",

      conditions:
        "Trading Conditions",

      "learn-invest":
        "Learn to Invest",

      technical:
        "Technical Analysis",

      videos:
        "Video Tutorials",

      reports:
        "Economic Reports",

      webinars:
        "Webinars",

      workshops:
        "Workshops",
    },

    legal: {
      terms:
        "Terms & Condition",

      privacy:
        "Privacy Policy",

      contact:
        "Contact Us",

      fraud:
        "Fraud Warning",

      cookies:
        "Cookies Policy",
    },

    riskTitle:
      "Risk Disclosure:",

    riskText:
      "Foreign Exchange (Forex, FX) and Contracts for Difference (CFDs) on Currencies, Commodities, Indices, or Equities are all margin-traded products and thus inherently carry a high-risk level that may not be suitable for all investors. Before deciding to trade FX/CFD instruments offered by Noor Capital PSC, you should carefully consider your objectives, financial situation, needs, and experience level. You should not trade any margined product unless you fully understand all the risks involved and possess sufficient resources in case of adverse movement in a product's price. You will then be able to meet the financial obligations required of you concerning margin payments and losses.",

    riskLink:
      "Risk Disclosure",

    riskSuffix:
      "for further details.",

    copyright:
      "Noor Capital PSC, Est. 2005. Regulated by the SCA in the UAE",
  },


  /* =======================================================
     TÜRKÇE
  ======================================================= */

  tr: {
    groupTitles: {
      company:
        "Şirket",

      services:
        "Hizmetler",

      products:
        "Ürünler",

      trading:
        "İşlem",

      learning:
        "Eğitim Merkezi",
    },

    links: {
      about:
        "Hakkımızda",

      why:
        "Neden Noor Capital",

      license:
        "Lisans ve Düzenlemeler",

      media:
        "Medya Merkezi",

      contact:
        "İletişim",

      "financial-advisory":
        "Global Finansal Danışmanlık",

      "asset-management":
        "Varlık Yönetimi",

      "investment-services":
        "Yatırım Hizmetleri",

      "fund-administration":
        "Fon Yönetimi",

      forex:
        "Forex",

      commodities:
        "Emtialar",

      indices:
        "Endeksler",

      energies:
        "Enerjiler",

      shares:
        "Hisse CFD'leri",

      "cash-equities":
        "Nakit Hisseler",

      mt4:
        "MT4 Platformu",

      mt5:
        "MT5 Platformu",

      "mt4-web":
        "MT4 Web Trader",

      "mt5-web":
        "MT5 Web Trader",

      funding:
        "Para Yatırma ve Çekme",

      conditions:
        "İşlem Koşulları",

      "learn-invest":
        "Yatırım Yapmayı Öğrenin",

      technical:
        "Teknik Analiz",

      videos:
        "Video Eğitimleri",

      reports:
        "Ekonomik Raporlar",

      webinars:
        "Webinarlar",

      workshops:
        "Atölyeler",
    },

    legal: {
      terms:
        "Şartlar ve Koşullar",

      privacy:
        "Gizlilik Politikası",

      contact:
        "İletişim",

      fraud:
        "Dolandırıcılık Uyarısı",

      cookies:
        "Çerez Politikası",
    },

    riskTitle:
      "Risk Açıklaması:",

    riskText:
      "Döviz işlemleri (Forex, FX) ile para birimleri, emtialar, endeksler veya hisse senetleri üzerindeki Fark Sözleşmeleri (CFD), teminatla işlem gören ürünlerdir ve bu nedenle tüm yatırımcılar için uygun olmayabilecek yüksek düzeyde risk içerir. Noor Capital PSC tarafından sunulan FX/CFD araçlarında işlem yapmaya karar vermeden önce hedeflerinizi, finansal durumunuzu, ihtiyaçlarınızı ve deneyim seviyenizi dikkatle değerlendirmelisiniz. İlgili tüm riskleri tam olarak anlamadan ve olumsuz fiyat hareketlerini karşılayabilecek yeterli finansal kaynağa sahip olmadan teminatlı ürünlerde işlem yapmamalısınız.",

    riskLink:
      "Risk Açıklaması",

    riskSuffix:
      "sayfasından daha fazla bilgi edinebilirsiniz.",

    copyright:
      "Noor Capital PSC, 2005'te kurulmuştur. BAE'de SCA tarafından düzenlenmektedir.",
  },


  /* =======================================================
     RUSSIAN
  ======================================================= */

  ru: {
    groupTitles: {
      company:
        "Компания",

      services:
        "Услуги",

      products:
        "Продукты",

      trading:
        "Торговля",

      learning:
        "Учебный центр",
    },

    links: {
      about:
        "О компании",

      why:
        "Почему Noor Capital",

      license:
        "Лицензии и регулирование",

      media:
        "Медиацентр",

      contact:
        "Контакты",

      "financial-advisory":
        "Глобальный финансовый консалтинг",

      "asset-management":
        "Управление активами",

      "investment-services":
        "Инвестиционные услуги",

      "fund-administration":
        "Администрирование фондов",

      forex:
        "Форекс",

      commodities:
        "Сырьевые товары",

      indices:
        "Индексы",

      energies:
        "Энергоресурсы",

      shares:
        "CFD на акции",

      "cash-equities":
        "Акции",

      mt4:
        "Платформа MT4",

      mt5:
        "Платформа MT5",

      "mt4-web":
        "MT4 Web Trader",

      "mt5-web":
        "MT5 Web Trader",

      funding:
        "Пополнение и вывод средств",

      conditions:
        "Торговые условия",

      "learn-invest":
        "Обучение инвестициям",

      technical:
        "Технический анализ",

      videos:
        "Видеоуроки",

      reports:
        "Экономические отчеты",

      webinars:
        "Вебинары",

      workshops:
        "Семинары",
    },

    legal: {
      terms:
        "Условия использования",

      privacy:
        "Политика конфиденциальности",

      contact:
        "Контакты",

      fraud:
        "Предупреждение о мошенничестве",

      cookies:
        "Политика Cookies",
    },

    riskTitle:
      "Раскрытие рисков:",

    riskText:
      "Операции на валютном рынке Forex и контракты на разницу цен (CFD) на валюты, сырьевые товары, индексы и акции являются маржинальными продуктами и связаны с высоким уровнем риска, который подходит не всем инвесторам. Перед началом торговли инструментами FX/CFD Noor Capital PSC необходимо тщательно оценить свои цели, финансовое положение, потребности и уровень опыта. Не следует торговать маржинальными продуктами без полного понимания связанных с ними рисков и достаточных финансовых ресурсов.",

    riskLink:
      "Раскрытие рисков",

    riskSuffix:
      "содержит дополнительную информацию.",

    copyright:
      "Noor Capital PSC, основана в 2005 году. Регулируется SCA в ОАЭ.",
  },


  /* =======================================================
     ARABIC
  ======================================================= */

  ar: {
    groupTitles: {
      company:
        "الشركة",

      services:
        "الخدمات",

      products:
        "المنتجات",

      trading:
        "التداول",

      learning:
        "مركز التعلم",
    },

    links: {
      about:
        "من نحن",

      why:
        "لماذا نور كابيتال",

      license:
        "التراخيص واللوائح",

      media:
        "المركز الإعلامي",

      contact:
        "اتصل بنا",

      "financial-advisory":
        "الاستشارات المالية العالمية",

      "asset-management":
        "إدارة الأصول",

      "investment-services":
        "خدمات الاستثمار",

      "fund-administration":
        "إدارة الصناديق",

      forex:
        "الفوركس",

      commodities:
        "السلع",

      indices:
        "المؤشرات",

      energies:
        "الطاقة",

      shares:
        "عقود فروقات الأسهم",

      "cash-equities":
        "الأسهم النقدية",

      mt4:
        "منصة MT4",

      mt5:
        "منصة MT5",

      "mt4-web":
        "MT4 Web Trader",

      "mt5-web":
        "MT5 Web Trader",

      funding:
        "الإيداع والسحب",

      conditions:
        "شروط التداول",

      "learn-invest":
        "تعلم الاستثمار",

      technical:
        "التحليل الفني",

      videos:
        "الدروس المصورة",

      reports:
        "التقارير الاقتصادية",

      webinars:
        "الندوات الإلكترونية",

      workshops:
        "ورش العمل",
    },

    legal: {
      terms:
        "الشروط والأحكام",

      privacy:
        "سياسة الخصوصية",

      contact:
        "اتصل بنا",

      fraud:
        "تحذير الاحتيال",

      cookies:
        "سياسة ملفات تعريف الارتباط",
    },

    riskTitle:
      "الإفصاح عن المخاطر:",

    riskText:
      "تُعد معاملات العملات الأجنبية (الفوركس) وعقود الفروقات على العملات والسلع والمؤشرات والأسهم منتجات يتم تداولها بالهامش، ولذلك فإنها تنطوي بطبيعتها على مستوى مرتفع من المخاطر وقد لا تكون مناسبة لجميع المستثمرين. قبل اتخاذ قرار بالتداول في أدوات FX/CFD التي تقدمها نور كابيتال، يجب عليك تقييم أهدافك ووضعك المالي واحتياجاتك ومستوى خبرتك بعناية. يجب ألا تتداول أي منتج بالهامش ما لم تكن تفهم جميع المخاطر المرتبطة به وتمتلك الموارد المالية الكافية.",

    riskLink:
      "الإفصاح عن المخاطر",

    riskSuffix:
      "لمزيد من التفاصيل.",

    copyright:
      "نور كابيتال ش.م.خ، تأسست عام 2005، وتخضع لتنظيم هيئة الأوراق المالية والسلع في دولة الإمارات.",
  },
};


/* =========================================================
   FOOTER
========================================================= */

export default function Footer({
  language = "en",
  navigate,
}) {
  const swiperRef =
    useRef(null);


  const content =
    footerCopy[language] ||
    footerCopy.en;


  /* =======================================================
     CREATE LOCALIZED URL
  ======================================================= */

  function localUrl(
    path = ""
  ) {
    return path
      ? `/${language}/${path}`
      : `/${language}`;
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
     LEGAL LINKS
  ======================================================= */

  const legalLinks = [
    {
      key: "terms",

      path:
        "terms-condition",
    },

    {
      key: "privacy",

      path:
        "privacy-policy",
    },

    {
      key: "contact",

      path:
        "contact-us",
    },

    {
      key: "fraud",

      path:
        "fraud-warning",
    },

    {
      key: "cookies",

      path:
        "cookies-policy",
    },
  ];


  return (
    <footer
      className="footer"
      id="footer"
    >

      <div className="footer-container">


        {/* =========================================
            TOP LINKS
        ========================================== */}

        <div className="footer-main-grid">


          {/* LOGO */}

          <div className="footer-brand">

            <a
              href={
                localUrl()
              }

              onClick={(
                event
              ) =>
                handleInternalLink(
                  event,
                  localUrl()
                )
              }
            >

              <img
                src={
                  assets.logo
                }

                alt="Noor Capital"
              />

            </a>

          </div>


          {/* GROUPS */}

          {footerGroups.map(
            (
              group
            ) => (

              <div
                className="footer-group"
                key={
                  group.key
                }
              >

                <h3>
                  {
                    content
                      .groupTitles[
                    group.key
                    ]
                  }
                </h3>


                <ul>

                  {group.links.map(
                    (
                      link
                    ) => {

                      const href =
                        localUrl(
                          link.path
                        );


                      return (
                        <li
                          key={
                            link.key
                          }
                        >

                          <a
                            href={
                              href
                            }

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
                              content
                                .links[
                              link.key
                              ]
                            }
                          </a>

                        </li>
                      );
                    }
                  )}

                </ul>

              </div>

            )
          )}

        </div>


        {/* =========================================
            MIDDLE ROW
        ========================================== */}

        <div className="footer-middle">


          {/* AWARDS */}

          <div className="footer-awards">

            <Swiper
              modules={[
                Autoplay,
              ]}

              loop={true}

              speed={600}

              slidesPerView={3}

              spaceBetween={15}

              autoplay={{
                delay: 2600,

                disableOnInteraction:
                  false,
              }}

              onSwiper={(
                swiper
              ) => {
                swiperRef.current =
                  swiper;
              }}

              className="footer-awards-swiper"
            >

              {assets.awards.map(
                (
                  award
                ) => {

                  const href =
                    localUrl(
                      "learning-hub/media-center/awards"
                    );


                  return (
                    <SwiperSlide
                      key={
                        award.key
                      }
                    >

                      <a
                        href={
                          href
                        }

                        onClick={(
                          event
                        ) =>
                          handleInternalLink(
                            event,
                            href
                          )
                        }
                      >

                        <img
                          src={
                            award.image
                          }

                          alt={
                            award.alt
                          }

                          loading="lazy"
                        />

                      </a>

                    </SwiperSlide>
                  );
                }
              )}

            </Swiper>

          </div>


          {/* SOCIAL */}

          <div className="footer-social">

            {socialLinks.map(
              (
                social
              ) => (

                <a
                  key={
                    social.key
                  }

                  href={
                    social.href
                  }

                  target="_blank"

                  rel="noopener noreferrer"

                  aria-label={
                    social.label
                  }
                >

                  <img
                    src={
                      assets.social[
                      social.key
                      ]
                    }

                    alt=""

                    loading="lazy"
                  />

                </a>

              )
            )}

          </div>


          {/* LEGAL */}

          <div className="footer-legal-links">

            {legalLinks.map(
              (
                item
              ) => {

                const href =
                  localUrl(
                    item.path
                  );


                return (
                  <a
                    key={
                      item.key
                    }

                    href={
                      href
                    }

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
                      content
                        .legal[
                      item.key
                      ]
                    }
                  </a>
                );
              }
            )}

          </div>

        </div>


        {/* =========================================
            RISK DISCLOSURE
        ========================================== */}

        <div className="footer-risk">

          <p>

            <strong>
              {
                content.riskTitle
              }
            </strong>

            {" "}

            {
              content.riskText
            }

            {" "}

            <a
              href={
                localUrl(
                  "risk-and-disclosure-statement"
                )
              }

              onClick={(
                event
              ) =>
                handleInternalLink(
                  event,
                  localUrl(
                    "risk-and-disclosure-statement"
                  )
                )
              }
            >
              {
                content.riskLink
              }
            </a>

            {" "}

            {
              content.riskSuffix
            }

          </p>

        </div>


        {/* =========================================
            COPYRIGHT
        ========================================== */}

        <div className="footer-copyright">

          <p>
            {content.copyright}
          </p>

        </div>

      </div>

    </footer>
  );
}