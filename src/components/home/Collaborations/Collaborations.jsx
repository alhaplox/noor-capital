import "./Collaborations.css";


/* =========================================================
   REMOTE NOOR ASSETS
========================================================= */

const assets = {
  background:
    "https://www.noorcapital.ae/images/home/bg_collab.png",

  items: {
    "money-managers":
      "https://admin.noorcapital.ae/media/original_images/collab-1.059f246b.gif",

    "liquidity-solutions":
      "https://admin.noorcapital.ae/media/original_images/collab-2.ab93e14d.gif",

    "partnership-program":
      "https://admin.noorcapital.ae/media/original_images/collab-3.3740dadc.gif",
  },
};


/* =========================================================
   CARD DEFINITIONS
========================================================= */

const collaborationItems = [
  {
    key: "money-managers",

    path:
      "partnership/money-managers",
  },

  {
    key: "liquidity-solutions",

    path:
      "partnership/institutional-liquidity-solutions",
  },

  {
    key: "partnership-program",

    path:
      "partnership/partnership-program",
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
      "Strategic Collaborations with Noor Capital",

    subtitle:
      "Enhance your business by leveraging our expertise in strategic collaboration, ensuring tailored solutions that drive success and long-term value",

    items: {
      "money-managers": {
        title:
          "Money Managers",

        text:
          "Provide expert support to help our partners manage and optimize investment portfolios. Focus on maximizing returns while managing risks. Our services are designed to align closely with your clients' investment objectives.",
      },

      "liquidity-solutions": {
        title:
          "Liquidity Solutions",

        text:
          "Ensuring advanced financial solutions with effective liquidity management, designed specifically for businesses and financial brokers. We offer strategic planning to optimize your entity's offerings to obtain your clients' satisfaction with competitive rates.",
      },

      "partnership-program": {
        title:
          "Partnership Program",

        text:
          "Collaborate with Noor Capital to enhance your business through our strategic partnership opportunities. Our programs are tailored to foster mutual growth, driving success and value for both parties involved.",
      },
    },
  },


  /* =======================================================
     TÜRKÇE
  ======================================================= */

  tr: {
    title:
      "Noor Capital ile Stratejik İş Birlikleri",

    subtitle:
      "Stratejik iş birliği alanındaki uzmanlığımızdan yararlanarak işletmenizi geliştirin; başarınızı ve uzun vadeli değerinizi destekleyen size özel çözümlerden faydalanın.",

    items: {
      "money-managers": {
        title:
          "Portföy Yöneticileri",

        text:
          "İş ortaklarımızın yatırım portföylerini yönetmelerine ve optimize etmelerine yardımcı olmak için uzman desteği sunuyoruz. Riskleri etkin biçimde yönetirken getirilerin artırılmasına odaklanıyor ve çözümlerimizi müşterilerinizin yatırım hedefleriyle uyumlu hale getiriyoruz.",
      },

      "liquidity-solutions": {
        title:
          "Likidite Çözümleri",

        text:
          "İşletmeler ve finansal aracılar için özel olarak tasarlanmış etkin likidite yönetimi ve gelişmiş finansal çözümler sunuyoruz. Rekabetçi koşullarla müşterilerinizin memnuniyetini desteklemek için stratejik planlama sağlıyoruz.",
      },

      "partnership-program": {
        title:
          "İş Ortaklığı Programı",

        text:
          "Noor Capital'in stratejik iş ortaklığı fırsatlarıyla işletmenizi geliştirin. Programlarımız karşılıklı büyümeyi desteklemek, her iki taraf için sürdürülebilir başarı ve değer oluşturmak amacıyla tasarlanmıştır.",
      },
    },
  },


  /* =======================================================
     RUSSIAN
  ======================================================= */

  ru: {
    title:
      "Стратегическое сотрудничество с Noor Capital",

    subtitle:
      "Развивайте свой бизнес, используя наш опыт стратегического партнерства и индивидуальные решения, направленные на долгосрочный успех и устойчивую ценность.",

    items: {
      "money-managers": {
        title:
          "Управляющие капиталом",

        text:
          "Мы предоставляем профессиональную поддержку партнерам в управлении и оптимизации инвестиционных портфелей. Основное внимание уделяется повышению доходности при эффективном контроле рисков и соответствии инвестиционным целям клиентов.",
      },

      "liquidity-solutions": {
        title:
          "Решения по ликвидности",

        text:
          "Предлагаем современные финансовые решения и эффективное управление ликвидностью для компаний и финансовых брокеров. Стратегическое планирование помогает оптимизировать ваши предложения и обеспечивать конкурентные условия для клиентов.",
      },

      "partnership-program": {
        title:
          "Партнерская программа",

        text:
          "Развивайте свой бизнес вместе с Noor Capital благодаря нашим стратегическим партнерским возможностям. Программы созданы для взаимного роста, долгосрочного успеха и создания ценности для обеих сторон.",
      },
    },
  },


  /* =======================================================
     ARABIC
  ======================================================= */

  ar: {
    title:
      "شراكات استراتيجية مع نور كابيتال",

    subtitle:
      "عزز أعمالك من خلال الاستفادة من خبرتنا في التعاون الاستراتيجي والحلول المصممة خصيصاً لتحقيق النجاح والقيمة طويلة الأجل.",

    items: {
      "money-managers": {
        title:
          "مديرو الأموال",

        text:
          "نقدم دعماً متخصصاً لمساعدة شركائنا على إدارة المحافظ الاستثمارية وتحسينها، مع التركيز على تعزيز العوائد وإدارة المخاطر بما يتوافق مع الأهداف الاستثمارية لعملائكم.",
      },

      "liquidity-solutions": {
        title:
          "حلول السيولة",

        text:
          "نوفر حلولاً مالية متقدمة وإدارة فعالة للسيولة مصممة خصيصاً للشركات والوسطاء الماليين، إلى جانب التخطيط الاستراتيجي لتحسين عروضكم وتقديم شروط تنافسية للعملاء.",
      },

      "partnership-program": {
        title:
          "برنامج الشراكة",

        text:
          "تعاون مع نور كابيتال لتطوير أعمالك من خلال فرص الشراكة الاستراتيجية. صُممت برامجنا لدعم النمو المتبادل وتحقيق النجاح والقيمة المستدامة لجميع الأطراف.",
      },
    },
  },
};


/* =========================================================
   COLLABORATIONS
========================================================= */

export default function Collaborations({
  language = "en",
  navigate,
}) {
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


  return (
    <section
      className="collaborations-section"
      id="collaborations"

      style={{
        "--collaboration-background":
          `url("${assets.background}")`,
      }}
    >

      <div className="collaborations-container">


        {/* =========================================
            HEADING
        ========================================== */}

        <div className="collaborations-heading">

          <h2>
            {content.title}
          </h2>

          <p>
            {content.subtitle}
          </p>

        </div>


        {/* =========================================
            CARDS
        ========================================== */}

        <div className="collaborations-grid">

          {collaborationItems.map(
            (
              item
            ) => {

              const itemCopy =
                content.items[
                item.key
                ];


              const href =
                `/${language}/${item.path}`;


              return (
                <a
                  key={
                    item.key
                  }

                  href={
                    href
                  }

                  className="collaboration-card-wrap"

                  onClick={(
                    event
                  ) =>
                    handleLink(
                      event,
                      href
                    )
                  }
                >

                  <article className="collaboration-card">


                    {/* ICON */}

                    <div className="collaboration-icon">

                      <img
                        src={
                          assets.items[
                          item.key
                          ]
                        }

                        alt=""

                        loading="lazy"
                      />

                    </div>


                    {/* TITLE */}

                    <h3>
                      {
                        itemCopy.title
                      }
                    </h3>


                    {/* DESCRIPTION */}

                    <p>
                      {
                        itemCopy.text
                      }
                    </p>

                  </article>

                </a>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}