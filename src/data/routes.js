export const pageGroups = {
  company: {
    labels: { tr: 'Şirket', en: 'Company', ar: 'الشركة', ru: 'Компания' },
    routes: [
      ['about-us', { tr: 'Hakkımızda', en: 'About Us', ar: 'من نحن', ru: 'О компании' }],
      ['career-opportunities', { tr: 'Kariyer Fırsatları', en: 'Career Opportunities', ar: 'فرص العمل', ru: 'Карьера' }],
      ['contact-us', { tr: 'İletişim', en: 'Contact Us', ar: 'اتصل بنا', ru: 'Контакты' }],
    ],
  },
  services: {
    labels: { tr: 'Hizmetler', en: 'Services', ar: 'الخدمات', ru: 'Услуги' },
    routes: [
      ['services/global-financial-advisory', { tr: 'Global Finansal Danışmanlık', en: 'Global Financial Advisory', ar: 'الاستشارات المالية العالمية', ru: 'Глобальный финансовый консалтинг' }],
      ['services/asset-management', { tr: 'Varlık Yönetimi', en: 'Asset Management', ar: 'إدارة الأصول', ru: 'Управление активами' }],
      ['services/investment-services', { tr: 'Yatırım Hizmetleri', en: 'Investment Services', ar: 'خدمات الاستثمار', ru: 'Инвестиционные услуги' }],
      ['services/funds-administration', { tr: 'Fon Yönetimi', en: 'Funds Administration', ar: 'إدارة الصناديق', ru: 'Администрирование фондов' }],
    ],
  },
  products: {
    labels: { tr: 'Ürünler', en: 'Products', ar: 'المنتجات', ru: 'Продукты' },
    routes: [
      ['products/shares-trading-cfds', { tr: 'Hisse CFD', en: 'Shares CFD', ar: 'عقود فروقات الأسهم', ru: 'CFD на акции' }],
      ['products/forex-trading', { tr: 'Forex', en: 'Forex', ar: 'الفوركس', ru: 'Forex' }],
      ['products/indices', { tr: 'Endeksler', en: 'Indices', ar: 'المؤشرات', ru: 'Индексы' }],
      ['products/commodities', { tr: 'Emtialar', en: 'Commodities', ar: 'السلع', ru: 'Сырьевые товары' }],
      ['products/energies', { tr: 'Enerji', en: 'Energies', ar: 'الطاقة', ru: 'Энергоресурсы' }],
      ['products/crypto', { tr: 'Kripto', en: 'Crypto', ar: 'العملات الرقمية', ru: 'Криптовалюты' }],
      ['products/cash-equities', { tr: 'Nakit Hisseler', en: 'Cash Equities', ar: 'الأسهم النقدية', ru: 'Акции' }],
    ],
  },
  trading: {
    labels: { tr: 'İşlem', en: 'Trading', ar: 'التداول', ru: 'Торговля' },
    routes: [
      ['trading/mt4-platform', { tr: 'MT4 Platformu', en: 'MT4 Platform', ar: 'منصة MT4', ru: 'Платформа MT4' }],
      ['trading/mt5-platform', { tr: 'MT5 Platformu', en: 'MT5 Platform', ar: 'منصة MT5', ru: 'Платформа MT5' }],
      ['trading/mt4-web-trader', { tr: 'MT4 Web Trader', en: 'MT4 Web Trader', ar: 'ويب تريدر MT4', ru: 'MT4 Web Trader' }],
      ['trading/mt5-web-trader', { tr: 'MT5 Web Trader', en: 'MT5 Web Trader', ar: 'ويب تريدر MT5', ru: 'MT5 Web Trader' }],
      ['trading/gtn-platform', { tr: 'GTN Platformu', en: 'GTN Platform', ar: 'منصة GTN', ru: 'Платформа GTN' }],
      ['trading/account-funding', { tr: 'Hesap Fonlama', en: 'Account Funding', ar: 'تمويل الحساب', ru: 'Пополнение счёта' }],
      ['trading/legal-documents', { tr: 'Yasal Belgeler', en: 'Legal Documents', ar: 'المستندات القانونية', ru: 'Юридические документы' }],
      ['trading/trading-condition', { tr: 'İşlem Koşulları', en: 'Trading Conditions', ar: 'شروط التداول', ru: 'Торговые условия' }],
      ['trading/account-security', { tr: 'Hesap Güvenliği', en: 'Account Security', ar: 'أمان الحساب', ru: 'Безопасность счёта' }],
    ],
  },
  learning: {
    labels: { tr: 'Öğrenme Merkezi', en: 'Learning Hub', ar: 'مركز التعلم', ru: 'Обучение' },
    routes: [
      ['learning-hub/education/learn-to-invest', { tr: 'Yatırım Yapmayı Öğren', en: 'Learn to Invest', ar: 'تعلم الاستثمار', ru: 'Учимся инвестировать' }],
      ['learning-hub/education/video-tutorials', { tr: 'Video Eğitimler', en: 'Video Tutorials', ar: 'دروس الفيديو', ru: 'Видео-уроки' }],
      ['learning-hub/education/webinars', { tr: 'Webinarlar', en: 'Webinars', ar: 'الندوات عبر الإنترنت', ru: 'Вебинары' }],
      ['learning-hub/education/workshop', { tr: 'Atölyeler', en: 'Workshops', ar: 'ورش العمل', ru: 'Воркшопы' }],
      ['learning-hub/education/noor-pedia', { tr: 'Noor Pedia', en: 'Noor Pedia', ar: 'نور بيديا', ru: 'Noor Pedia' }],
      ['learning-hub/news-updates/market-updates', { tr: 'Piyasa Güncellemeleri', en: 'Market Updates', ar: 'تحديثات السوق', ru: 'Обзор рынка' }],
      ['learning-hub/news-updates/technical-analysis', { tr: 'Teknik Analiz', en: 'Technical Analysis', ar: 'التحليل الفني', ru: 'Технический анализ' }],
      ['learning-hub/news-updates/economic-reports', { tr: 'Ekonomik Raporlar', en: 'Economic Reports', ar: 'التقارير الاقتصادية', ru: 'Экономические отчёты' }],
      ['learning-hub/news-updates/economic-calendar', { tr: 'Ekonomik Takvim', en: 'Economic Calendar', ar: 'التقويم الاقتصادي', ru: 'Экономический календарь' }],
      ['learning-hub/news-updates/central-bank-rates', { tr: 'Merkez Bankası Faizleri', en: 'Central Bank Rates', ar: 'أسعار البنوك المركزية', ru: 'Ставки центробанков' }],
      ['learning-hub/media-center/press-release', { tr: 'Basın Bültenleri', en: 'Press Releases', ar: 'البيانات الصحفية', ru: 'Пресс-релизы' }],
      ['learning-hub/media-center/activities', { tr: 'Etkinlikler', en: 'Activities', ar: 'الأنشطة', ru: 'События' }],
      ['learning-hub/media-center/awards', { tr: 'Ödüller', en: 'Awards', ar: 'الجوائز', ru: 'Награды' }],
    ],
  },
  partnership: {
    labels: { tr: 'Ortaklık', en: 'Partnership', ar: 'الشراكات', ru: 'Партнёрство' },
    routes: [
      ['partnership/institutional-liquidity-solutions', { tr: 'Kurumsal Likidite Çözümleri', en: 'Institutional Liquidity Solutions', ar: 'حلول السيولة المؤسسية', ru: 'Институциональная ликвидность' }],
      ['partnership/money-managers', { tr: 'Portföy Yöneticileri', en: 'Money Managers', ar: 'مديرو الأموال', ru: 'Управляющие капиталом' }],
      ['partnership/partnership-program', { tr: 'Ortaklık Programı', en: 'Partnership Program', ar: 'برنامج الشراكة', ru: 'Партнёрская программа' }],
      ['partnership/white-label-solution', { tr: 'White Label Çözümü', en: 'White Label Solution', ar: 'حل العلامة البيضاء', ru: 'White Label решение' }],
    ],
  },
  legal: {
    labels: { tr: 'Destek & Yasal', en: 'Support & Legal', ar: 'الدعم والقانوني', ru: 'Поддержка и документы' },
    routes: [
      ['faq', { tr: 'Sık Sorulan Sorular', en: 'FAQ', ar: 'الأسئلة الشائعة', ru: 'FAQ' }],
      ['support', { tr: 'Destek', en: 'Support', ar: 'الدعم', ru: 'Поддержка' }],
      ['terms-condition', { tr: 'Şartlar ve Koşullar', en: 'Terms & Conditions', ar: 'الشروط والأحكام', ru: 'Условия' }],
      ['privacy-policy', { tr: 'Gizlilik Politikası', en: 'Privacy Policy', ar: 'سياسة الخصوصية', ru: 'Политика конфиденциальности' }],
      ['disclaimer', { tr: 'Sorumluluk Reddi', en: 'Disclaimer', ar: 'إخلاء المسؤولية', ru: 'Отказ от ответственности' }],
      ['fraud-warning', { tr: 'Dolandırıcılık Uyarısı', en: 'Fraud Warning', ar: 'تحذير الاحتيال', ru: 'Предупреждение о мошенничестве' }],
      ['cookies-policy', { tr: 'Çerez Politikası', en: 'Cookies Policy', ar: 'سياسة ملفات تعريف الارتباط', ru: 'Политика cookies' }],
    ],
  },
};

export const primaryNavGroups = ['company', 'services', 'products', 'trading', 'learning', 'partnership'];

export const routeIndex = Object.entries(pageGroups).reduce((acc, [groupKey, group]) => {
  group.routes.forEach(([path, titles]) => {
    acc[path] = { path, titles, group: groupKey };
  });
  return acc;
}, {});

export const contentText = {
  tr: {
    breadcrumbHome: 'Ana Sayfa',
    intro: 'Bu sayfa Noor Capital referans alınarak çok dilli frontend clone mimarisi içinde hazırlanmıştır.',
    sectionTitle: 'Öne çıkan içerikler',
    body: 'Sayfanın özgün görsel düzeni, kart yapıları, CTA alanları, tabloları ve formları sonraki UI katmanında bu template üzerine yerleştirilebilir.',
    cta: 'İletişime Geç',
    demo: 'Demo Dene',
    related: 'İlgili sayfalar',
    notFound: 'Sayfa bulunamadı',
    notFoundText: 'Bu route henüz sitemap eşlemesine eklenmedi.',
    backHome: 'Ana sayfaya dön',
  },
  en: {
    breadcrumbHome: 'Home',
    intro: 'This page is part of the multilingual frontend clone architecture based on the Noor Capital reference.',
    sectionTitle: 'Key content',
    body: 'The original page layout, cards, CTA blocks, tables and forms can be layered onto this reusable template in the next UI pass.',
    cta: 'Contact Us',
    demo: 'Try a Demo',
    related: 'Related pages',
    notFound: 'Page not found',
    notFoundText: 'This route has not yet been mapped from the sitemap.',
    backHome: 'Back to home',
  },
  ar: {
    breadcrumbHome: 'الرئيسية',
    intro: 'هذه الصفحة جزء من بنية النسخة الأمامية متعددة اللغات المبنية على مرجع نور كابيتال.',
    sectionTitle: 'المحتوى الرئيسي',
    body: 'يمكن إضافة تخطيط الصفحة الأصلي والبطاقات وأقسام الدعوة إلى الإجراء والجداول والنماذج فوق هذا القالب القابل لإعادة الاستخدام.',
    cta: 'اتصل بنا',
    demo: 'جرّب الحساب التجريبي',
    related: 'صفحات ذات صلة',
    notFound: 'الصفحة غير موجودة',
    notFoundText: 'لم تتم إضافة هذا المسار إلى خريطة الموقع بعد.',
    backHome: 'العودة للرئيسية',
  },
  ru: {
    breadcrumbHome: 'Главная',
    intro: 'Эта страница является частью многоязычной архитектуры frontend-клона на основе Noor Capital.',
    sectionTitle: 'Основной контент',
    body: 'Оригинальная компоновка, карточки, CTA-блоки, таблицы и формы могут быть добавлены поверх этого переиспользуемого шаблона.',
    cta: 'Связаться',
    demo: 'Демо-счёт',
    related: 'Связанные страницы',
    notFound: 'Страница не найдена',
    notFoundText: 'Этот маршрут пока не добавлен в карту сайта.',
    backHome: 'На главную',
  },
};

export function localizedPath(language, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${language}/${clean}` : `/${language}`;
}

export function findPage(path) {
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (routeIndex[clean]) return routeIndex[clean];

  // Article/detail routes under Learning Hub use a common article template.
  const detailPrefixes = [
    'learning-hub/education/webinars/',
    'learning-hub/education/learn-to-invest/',
    'learning-hub/news-updates/market-updates/',
    'learning-hub/news-updates/technical-analysis/',
    'learning-hub/news-updates/economic-reports/',
    'learning-hub/media-center/press-release/',
    'learning-hub/media-center/activities/',
    'learning-hub/media-center/awards/',
  ];
  const prefix = detailPrefixes.find((item) => clean.startsWith(item));
  if (prefix) {
    const slug = clean.slice(prefix.length);
    const title = slug.split('-').filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    return {
      path: clean,
      titles: { tr: title, en: title, ar: title, ru: title },
      group: 'learning',
      article: true,
    };
  }
  return null;
}
