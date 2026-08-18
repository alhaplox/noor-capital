import "./About.css";


/* =========================================================
   COPY
========================================================= */

const aboutCopy = {
  en: {
    eyebrow:
      "About Us",

    text:
      "Noor Capital P.S.C. is a globally recognized investment and Forex brokerage firm in Dubai, committed to excellence, reliable service, and customer satisfaction. Established in 2005, it offers a diverse range of financial solutions under SCA regulation.",

    button:
      "Explore more",

    services: [
      "Global Financial Advisory",
      "Asset Management",
      "Investment",
      "Fund Administration",
    ],
  },


  tr: {
    eyebrow:
      "Hakkımızda",

    text:
      "Noor Capital P.S.C., Dubai merkezli, dünya çapında tanınan bir yatırım ve Forex aracılık kuruluşudur. Mükemmeliyet, güvenilir hizmet ve müşteri memnuniyetine odaklanan şirket, 2005 yılından bu yana SCA düzenlemeleri kapsamında geniş bir finansal çözüm yelpazesi sunmaktadır.",

    button:
      "Daha fazlasını keşfet",

    services: [
      "Global Finansal Danışmanlık",
      "Varlık Yönetimi",
      "Yatırım",
      "Fon Yönetimi",
    ],
  },


  ru: {
    eyebrow:
      "О нас",

    text:
      "Noor Capital P.S.C. — международно признанная инвестиционная и Forex-брокерская компания в Дубае, ориентированная на высокое качество, надежный сервис и удовлетворенность клиентов. Основанная в 2005 году, компания предлагает широкий спектр финансовых решений в соответствии с регулированием SCA.",

    button:
      "Узнать больше",

    services: [
      "Глобальный финансовый консалтинг",
      "Управление активами",
      "Инвестиции",
      "Администрирование фондов",
    ],
  },


  ar: {
    eyebrow:
      "من نحن",

    text:
      "نور كابيتال ش.م.خ هي شركة استثمار ووساطة فوركس معترف بها عالمياً ومقرها دبي، وتلتزم بالتميز والخدمة الموثوقة ورضا العملاء. تأسست عام 2005 وتقدم مجموعة متنوعة من الحلول المالية تحت إشراف هيئة الأوراق المالية والسلع.",

    button:
      "اكتشف المزيد",

    services: [
      "الاستشارات المالية العالمية",
      "إدارة الأصول",
      "الاستثمار",
      "إدارة الصناديق",
    ],
  },
};


/* =========================================================
   SERVICES
========================================================= */

const serviceDefinitions = [
  {
    path:
      "services/global-financial-advisory",

    icon:
      "https://admin.noorcapital.ae/media/original_images/Global_financial.gif",
  },

  {
    path:
      "services/asset-management",

    icon:
      "https://admin.noorcapital.ae/media/original_images/Asset_mangmnt.gif",
  },

  {
    path:
      "services/investment-services",

    icon:
      "https://admin.noorcapital.ae/media/original_images/investment-sln.gif",
  },

  {
    path:
      "services/funds-administration",

    icon:
      "https://admin.noorcapital.ae/media/original_images/Fund_admin.gif",
  },
];


/* =========================================================
   ABOUT
========================================================= */

export default function About({
  language = "en",
  navigate,
}) {

  const content =
    aboutCopy[language] ||
    aboutCopy.en;


  function createHref(
    path
  ) {
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


  return (
    <section
      className="about-section"
      id="about"
    >

      <div className="about-container">

        <div className="about-layout">


          {/* =========================================
              LEFT
          ========================================== */}

          <div className="about-copy">

            <p className="about-eyebrow">
              {
                content.eyebrow
              }
            </p>


            <p className="about-description">
              {
                content.text
              }
            </p>


            <a
              className="about-button"

              href={
                createHref(
                  "about-us"
                )
              }

              onClick={(
                event
              ) =>
                handleInternalLink(
                  event,
                  createHref(
                    "about-us"
                  )
                )
              }
            >
              {
                content.button
              }
            </a>

          </div>


          {/* =========================================
              SERVICES
          ========================================== */}

          <div className="about-services">

            {serviceDefinitions.map(
              (
                service,
                index
              ) => {

                const href =
                  createHref(
                    service.path
                  );


                return (
                  <a
                    className="about-service-link"

                    href={
                      href
                    }

                    key={
                      service.path
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

                    <div className="about-service-card">

                      <div className="about-service-icon">

                        <img
                          src={
                            service.icon
                          }

                          alt=""

                          loading="lazy"
                        />

                      </div>


                      <p>
                        {
                          content
                            .services[
                          index
                          ]
                        }
                      </p>

                    </div>

                  </a>
                );
              }
            )}

          </div>

        </div>

      </div>

    </section>
  );
} 