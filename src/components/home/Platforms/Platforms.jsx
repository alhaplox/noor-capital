import "./Platforms.css";


/* =========================================================
   ASSETS
========================================================= */

const assets = {
  platformBackground:
    "https://www.noorcapital.ae/images/about/bg-platform.png",

  webPlatform:
    "/images/home/web-platform.png",
};


/* =========================================================
   MULTILINGUAL CONTENT
========================================================= */

const platformCopy = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    heading:
      "Noor Capital Web Trader",

    description:
      "Trade directly from your browser with Noor Capital Web Trader and access global markets without installing additional software.",

    button:
      "Start Trading",
  },


  /* =======================================================
     TÜRKÇE
  ======================================================= */

  tr: {
    heading:
      "Noor Capital Web Trader",

    description:
      "Noor Capital Web Trader ile herhangi bir ek yazılım yüklemeden doğrudan tarayıcınız üzerinden küresel piyasalara erişin ve işlem yapın.",

    button:
      "İşleme Başla",
  },


  /* =======================================================
     RUSSIAN
  ======================================================= */

  ru: {
    heading:
      "Noor Capital Web Trader",

    description:
      "Торгуйте напрямую из браузера через Noor Capital Web Trader и получайте доступ к мировым рынкам без установки дополнительного программного обеспечения.",

    button:
      "Начать торговлю",
  },


  /* =======================================================
     ARABIC
  ======================================================= */

  ar: {
    heading:
      "Noor Capital Web Trader",

    description:
      "تداول مباشرة من متصفحك عبر Noor Capital Web Trader واستفد من الوصول إلى الأسواق العالمية دون الحاجة إلى تثبيت برامج إضافية.",

    button:
      "ابدأ التداول",
  },
};


/* =========================================================
   PLATFORMS
========================================================= */

export default function Platforms({
  language = "en",
  navigate,
}) {
  const content =
    platformCopy[language] ||
    platformCopy.en;


  /*
    Şimdilik mevcut Web Trader route yapısını koruyoruz.
    Ayrı bir Noor Capital Web Trader sayfası tanımlandığında
    sadece bu path değiştirilebilir.
  */

  const href =
    `/${language}/trading/mt5-web-trader`;


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


  return (
    <section
      className="platforms-section"
      id="platforms"

      style={{
        "--platform-background":
          `url("${assets.platformBackground}")`,
      }}
    >

      <div className="platforms-container">


        {/* =========================================
            TITLE
        ========================================== */}

        <div className="platforms-heading">

          <h2>
            {content.heading}
          </h2>

        </div>


        {/* =========================================
            WEB PLATFORM IMAGE
        ========================================== */}

        <div className="platforms-showcase">

          <img
            src={
              assets.webPlatform
            }

            alt="Noor Capital Web Trader"

            className="platforms-showcase-image"

            loading="lazy"
          />

        </div>


        {/* =========================================
            PLATFORM DETAILS
        ========================================== */}

        <div className="platforms-bottom">

          <h3>
            Noor Capital Web Trader
          </h3>


          <p className="platforms-description">
            {content.description}
          </p>


          <a
            href={
              href
            }

            className="platforms-cta"

            onClick={
              handleLink
            }
          >
            {content.button}
          </a>

        </div>

      </div>

    </section>
  );
}