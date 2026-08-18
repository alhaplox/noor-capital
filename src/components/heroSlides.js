/* =========================================================
   SHARED SLIDE ASSETS
========================================================= */

const slideAssets = [
  {
    id: "company",
    className: "slide1",
    background: "/images/about/bg-banner-new.png",

    layers: [
      {
        src: "/images/home/slide1-main.png",
        className: "slide_right anim_delay_1",
      },
    ],
  },

  {
    id: "forex",
    className: "slide2",
    background: "/images/about/bg-banner-slide-3.png",

    layers: [
      {
        src: "/images/home/slide2-1.png",
        className: "slide_right anim_delay_1",
      },
      {
        src: "/images/home/slide2-2.png",
        className: "slide_left anim_delay_1",
      },
      {
        src: "/images/home/slide2-3.png",
        className: "zoom_element anim_delay_2",
      },
      {
        src: "/images/home/slide2-4.png",
        className: "slide_right anim_delay_3",
      },
      {
        src: "/images/home/slide2-5.png",
        className: "slide_top anim_delay_4",
      },
      {
        src: "/images/home/slide2-6.png",
        className: "slide_left_2 anim_delay_5",
      },
      {
        src: "/images/home/slide2-7.png",
        className: "slide_left anim_delay_6",
      },
    ],
  },

  {
    id: "stocks",
    className: "slide3",
    background: "/images/about/bg-banner-slide-2.png",

    layers: [
      {
        src: "/images/home/slide3-1.png",
        className: "slide_right anim_delay_1",
      },
      {
        src: "/images/home/slide3-2.png",
        className: "slide_left anim_delay_1",
      },
      {
        src: "/images/home/slide3-3.png",
        className: "zoom_element anim_delay_2",
      },
      {
        src: "/images/home/slide3-4.png",
        className: "slide_right anim_delay_3",
      },
      {
        src: "/images/home/slide3-5.png",
        className: "slide_top anim_delay_4",
      },
      {
        src: "/images/home/slide3-6.png",
        className: "slide_left_2 anim_delay_5",
      },
      {
        src: "/images/home/slide3-7.png",
        className: "slide_left anim_delay_6",
      },
      {
        src: "/images/home/slide3-8.png",
        className: "zoom_element anim_delay_7",
      },
      {
        src: "/images/home/slide3-9.png",
        className: "slide_right anim_delay_8",
      },
      {
        src: "/images/home/slide3-10.png",
        className: "slide_top anim_delay_9",
      },
    ],
  },

  {
    id: "learning",
    className: "slide4",
    background: "/images/about/bg-banner-slide-4.png",

    layers: [
      {
        src: "/images/home/slide4-1.png",
        className: "slide_right anim_delay_1",
      },
      {
        src: "/images/home/slide4-2.png",
        className: "slide_left anim_delay_1",
      },
      {
        src: "/images/home/slide4-3.png",
        className: "zoom_element anim_delay_2",
      },
      {
        src: "/images/home/slide4-4.png",
        className: "slide_right anim_delay_3",
      },
      {
        src: "/images/home/slide4-5.png",
        className: "slide_top anim_delay_4",
      },
      {
        src: "/images/home/slide4-6.png",
        className: "slide_left_2 anim_delay_5",
      },
      {
        src: "/images/home/slide4-7.png",
        className: "slide_left anim_delay_6",
      },
      {
        src: "/images/home/slide4-8.png",
        className: "zoom_element anim_delay_7",
      },
    ],
  },

  {
    id: "partnership",
    className: "slide5",
    background: "/images/about/bg-banner-slide-5.png",

    layers: [
      {
        src: "/images/home/slide5-main.png",
        className: "slide_right anim_delay_1",
      },
    ],
  },
];

/* =========================================================
   ENGLISH
========================================================= */

const en = {
  company: {
    title: ["Take your", "investments forward"],

    description: {
      type: "text",
      text: "Since 2005, driven by expertise and regulatory trust, we empower your financial growth",
    },

    buttons: [
      {
        label: "Why Noor Capital",
        type: "fill",
        href: "/about-us",
      },
    ],
  },

  forex: {
    title: ["Maximize Your Potential", "In Forex Trading"],

    description: {
      type: "list",
      items: ["Competitive Spreads", "0% Commission", "Swap-Free Account"],
    },

    buttons: [
      {
        label: "Try a Demo",
        type: "border",
        href: "/trading/mt4-platform",
      },
      {
        label: "Open Live Account",
        type: "fill",
        href: "https://mynoor.noorcap.ae/en/mynoor-v2/register",
        external: true,
      },
    ],
  },

  stocks: {
    title: ["Trade U.S Stocks", "On Noor Capital's", "Multi-Asset Platform"],

    description: {
      type: "list",
      items: [
        "Competitive commissions starting at $0.01/share",
        "Fractional Shares for diversity",
      ],
    },

    buttons: [
      {
        label: "Try a Demo",
        type: "border",
        href: "/trading/mt4-platform",
      },
      {
        label: "Open Live Account",
        type: "fill",
        href: "https://mynoor.noorcap.ae/en/mynoor-v2/register",
        external: true,
      },
    ],
  },

  learning: {
    title: ["Stay Ahead with", "Interactive Learning Hub"],

    description: {
      type: "list",
      items: [
        "Comprehensive Training, Market Updates",
        "Webinars, Workshops",
        "Essential tools to enhance your investment journey",
      ],
    },

    buttons: [
      {
        label: "Discover Resources",
        type: "fill",
        href: "/learning-hub/news-updates/market-updates",
      },
    ],
  },

  partnership: {
    title: ["Strategic Partnerships", "For Sustainable Mutual", "Growth"],

    description: {
      type: "list",
      items: [
        "Benefit from our institutional Liquidity",
        "Explore Our Money Management Solutions",
      ],
    },

    buttons: [
      {
        label: "Become a Partner",
        type: "fill",
        href: "/partnership/institutional-liquidity-solutions",
      },
    ],
  },
};

/* =========================================================
   TÜRKÇE
========================================================= */

const tr = {
  company: {
    title: ["Yatırımlarınızı", "bir adım ileri taşıyın"],

    description: {
      type: "text",
      text: "2005 yılından bu yana uzmanlık ve düzenleyici güvenle finansal büyümenizi destekliyoruz.",
    },

    buttons: [
      {
        label: "Neden Noor Capital?",
        type: "fill",
        href: "/about-us",
      },
    ],
  },

  forex: {
    title: ["Forex İşlemlerinde", "Potansiyelinizi Artırın"],

    description: {
      type: "list",
      items: ["Rekabetçi spread oranları", "%0 komisyon", "Swapsız hesap"],
    },

    buttons: [
      {
        label: "Demo Dene",
        type: "border",
        href: "/trading/mt4-platform",
      },
      {
        label: "Canlı Hesap Aç",
        type: "fill",
        href: "https://mynoor.noorcap.ae/en/mynoor-v2/register",
        external: true,
      },
    ],
  },

  stocks: {
    title: [
      "ABD Hisselerinde İşlem Yapın",
      "Noor Capital",
      "Çoklu Varlık Platformunda",
    ],

    description: {
      type: "list",
      items: [
        "Hisse başına $0,01'den başlayan rekabetçi komisyonlar",
        "Portföy çeşitlendirmesi için kesirli hisseler",
      ],
    },

    buttons: [
      {
        label: "Demo Dene",
        type: "border",
        href: "/trading/mt4-platform",
      },
      {
        label: "Canlı Hesap Aç",
        type: "fill",
        href: "https://mynoor.noorcap.ae/en/mynoor-v2/register",
        external: true,
      },
    ],
  },

  learning: {
    title: ["Bir Adım Önde Kalın", "İnteraktif Eğitim Merkezi"],

    description: {
      type: "list",
      items: [
        "Kapsamlı eğitim ve piyasa güncellemeleri",
        "Webinarlar ve atölyeler",
        "Yatırım yolculuğunuzu geliştirecek temel araçlar",
      ],
    },

    buttons: [
      {
        label: "Kaynakları Keşfet",
        type: "fill",
        href: "/learning-hub/news-updates/market-updates",
      },
    ],
  },

  partnership: {
    title: [
      "Stratejik Ortaklıklar",
      "Sürdürülebilir Karşılıklı",
      "Büyüme İçin",
    ],

    description: {
      type: "list",
      items: [
        "Kurumsal likidite çözümlerimizden yararlanın",
        "Varlık yönetimi çözümlerimizi keşfedin",
      ],
    },

    buttons: [
      {
        label: "İş Ortağımız Olun",
        type: "fill",
        href: "/partnership/institutional-liquidity-solutions",
      },
    ],
  },
};

/* =========================================================
   РУССКИЙ
========================================================= */

const ru = {
  company: {
    title: ["Выведите свои", "инвестиции на новый уровень"],

    description: {
      type: "text",
      text: "С 2005 года мы поддерживаем ваш финансовый рост благодаря профессиональной экспертизе и надежному регулированию.",
    },

    buttons: [
      {
        label: "Почему Noor Capital",
        type: "fill",
        href: "/about-us",
      },
    ],
  },

  forex: {
    title: ["Раскройте свой потенциал", "в торговле Forex"],

    description: {
      type: "list",
      items: ["Конкурентные спреды", "0% комиссии", "Счет без свопов"],
    },

    buttons: [
      {
        label: "Попробовать демо",
        type: "border",
        href: "/trading/mt4-platform",
      },
      {
        label: "Открыть реальный счет",
        type: "fill",
        href: "https://mynoor.noorcap.ae/en/mynoor-v2/register",
        external: true,
      },
    ],
  },

  stocks: {
    title: [
      "Торгуйте акциями США",
      "на мультиактивной",
      "платформе Noor Capital",
    ],

    description: {
      type: "list",
      items: [
        "Конкурентные комиссии от $0,01 за акцию",
        "Дробные акции для диверсификации",
      ],
    },

    buttons: [
      {
        label: "Попробовать демо",
        type: "border",
        href: "/trading/mt4-platform",
      },
      {
        label: "Открыть реальный счет",
        type: "fill",
        href: "https://mynoor.noorcap.ae/en/mynoor-v2/register",
        external: true,
      },
    ],
  },

  learning: {
    title: ["Будьте на шаг впереди", "с интерактивным центром обучения"],

    description: {
      type: "list",
      items: [
        "Комплексное обучение и обзоры рынков",
        "Вебинары и практические семинары",
        "Инструменты для развития вашего инвестиционного опыта",
      ],
    },

    buttons: [
      {
        label: "Изучить материалы",
        type: "fill",
        href: "/learning-hub/news-updates/market-updates",
      },
    ],
  },

  partnership: {
    title: ["Стратегические партнерства", "для устойчивого взаимного", "роста"],

    description: {
      type: "list",
      items: [
        "Используйте нашу институциональную ликвидность",
        "Откройте для себя наши решения по управлению капиталом",
      ],
    },

    buttons: [
      {
        label: "Стать партнером",
        type: "fill",
        href: "/partnership/institutional-liquidity-solutions",
      },
    ],
  },
};

/* =========================================================
   العربية
========================================================= */

const ar = {
  company: {
    title: ["ارتقِ", "باستثماراتك إلى الأمام"],

    description: {
      type: "text",
      text: "منذ عام 2005، ندعم نموك المالي بخبرات متخصصة وثقة تنظيمية راسخة.",
    },

    buttons: [
      {
        label: "لماذا نور كابيتال",
        type: "fill",
        href: "/about-us",
      },
    ],
  },

  forex: {
    title: ["عزّز إمكاناتك", "في تداول الفوركس"],

    description: {
      type: "list",
      items: ["فروقات أسعار تنافسية", "عمولة 0%", "حساب بدون فوائد تبييت"],
    },

    buttons: [
      {
        label: "جرّب الحساب التجريبي",
        type: "border",
        href: "/trading/mt4-platform",
      },
      {
        label: "افتح حساباً حقيقياً",
        type: "fill",
        href: "https://mynoor.noorcap.ae/en/mynoor-v2/register",
        external: true,
      },
    ],
  },

  stocks: {
    title: ["تداول الأسهم الأمريكية", "على منصة نور كابيتال", "متعددة الأصول"],

    description: {
      type: "list",
      items: [
        "عمولات تنافسية تبدأ من 0.01 دولار للسهم",
        "أسهم جزئية لتنويع المحفظة",
      ],
    },

    buttons: [
      {
        label: "جرّب الحساب التجريبي",
        type: "border",
        href: "/trading/mt4-platform",
      },
      {
        label: "افتح حساباً حقيقياً",
        type: "fill",
        href: "https://mynoor.noorcap.ae/en/mynoor-v2/register",
        external: true,
      },
    ],
  },

  learning: {
    title: ["ابقَ في المقدمة", "مع مركز التعلم التفاعلي"],

    description: {
      type: "list",
      items: [
        "تدريب شامل وتحديثات السوق",
        "ندوات إلكترونية وورش عمل",
        "أدوات أساسية لتعزيز رحلتك الاستثمارية",
      ],
    },

    buttons: [
      {
        label: "اكتشف الموارد",
        type: "fill",
        href: "/learning-hub/news-updates/market-updates",
      },
    ],
  },

  partnership: {
    title: ["شراكات استراتيجية", "من أجل نمو متبادل", "ومستدام"],

    description: {
      type: "list",
      items: [
        "استفد من السيولة المؤسسية لدينا",
        "اكتشف حلول إدارة الأموال لدينا",
      ],
    },

    buttons: [
      {
        label: "كن شريكاً",
        type: "fill",
        href: "/partnership/institutional-liquidity-solutions",
      },
    ],
  },
};

/* =========================================================
   LANGUAGE MAP
========================================================= */

const contentByLanguage = {
  en,
  tr,
  ru,
  ar,
};

/* =========================================================
   GET HERO SLIDES
========================================================= */

export function getHeroSlides(language = "en") {
  const copy = contentByLanguage[language] || contentByLanguage.en;

  return slideAssets.map((asset) => {
    const content = copy[asset.id] || en[asset.id];

    return {
      ...asset,

      title: content.title.map((text, index) => ({
        text,

        animation: index % 2 === 0 ? "from-left" : "from-right",
      })),

      description: content.description,

      buttons: content.buttons,
    };
  });
}
