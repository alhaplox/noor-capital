import "./TradingOffers.css";


const content = {
  en: {
    items: [
      "Zero Commission",
      "Competitive Spreads",
      "Swap-Free Account",
    ],

    title:
      "Maximize Your Trading Potential with our Exclusive Offers",

    button:
      "Start Trading Now",
  },

  tr: {
    items: [
      "Sıfır Komisyon",
      "Rekabetçi Spreadler",
      "Swapsız Hesap",
    ],

    title:
      "Özel Avantajlarımızla İşlem Potansiyelinizi Maksimuma Çıkarın",

    button:
      "Şimdi İşleme Başlayın",
  },

  ru: {
    items: [
      "Нулевая комиссия",
      "Конкурентные спреды",
      "Счет без свопов",
    ],

    title:
      "Раскройте свой торговый потенциал с нашими специальными предложениями",

    button:
      "Начать торговлю",
  },

  ar: {
    items: [
      "بدون عمولة",
      "فروقات أسعار تنافسية",
      "حساب بدون فوائد تبييت",
    ],

    title:
      "عزّز إمكاناتك في التداول مع عروضنا الحصرية",

    button:
      "ابدأ التداول الآن",
  },
};


const offerImages = [
  "https://admin.noorcapital.ae/media/images/count-1.original.png",
  "https://admin.noorcapital.ae/media/images/count-2.original.png",
  "https://admin.noorcapital.ae/media/images/count-3.original.png",
];


export default function TradingOffers({
  language = "en",
}) {
  const current =
    content[language] ||
    content.en;


  return (
    <section
      className="trading-offers"
      id="trading-offers"
    >

      <div className="trading-offers-container">


        {/* =========================================
            CARDS
        ========================================== */}

        <div className="trading-offers-grid">

          {current.items.map(
            (
              item,
              index
            ) => (

              <article
                className="trading-offer-card"
                key={`${language}-${index}`}
              >

                <div className="trading-offer-image">

                  <img
                    src={
                      offerImages[
                      index
                      ]
                    }
                    alt=""
                    loading="lazy"
                  />

                </div>


                <h3>
                  {item}
                </h3>

              </article>

            )
          )}

        </div>


        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div className="trading-offers-bottom">

          <h2>
            {current.title}
          </h2>


          <a
            className="trading-offers-button"
            href="https://mynoor.noorcap.ae/en/mynoor-v2/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            {current.button}
          </a>

        </div>

      </div>

    </section>
  );
}