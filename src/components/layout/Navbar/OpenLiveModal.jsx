import {
  useEffect,
  useState,
} from "react";

import "./OpenLiveModal.css";


const investmentOptions = [
  {
    value: "BIST",

    labels: {
      en: "BIST",
      tr: "BIST",
      ru: "BIST",
      ar: "BIST",
    },
  },

  {
    value: "NASDAQ",

    labels: {
      en: "NASDAQ",
      tr: "NASDAQ",
      ru: "NASDAQ",
      ar: "NASDAQ",
    },
  },

  {
    value: "COMMODITIES",

    labels: {
      en: "Commodities",
      tr: "Emtia",
      ru: "Сырьевые товары",
      ar: "السلع",
    },
  },

  {
    value: "FOREX",

    labels: {
      en: "Forex",
      tr: "Forex",
      ru: "Форекс",
      ar: "الفوركس",
    },
  },

  {
    value: "CRYPTO",

    labels: {
      en: "Crypto",
      tr: "Kripto",
      ru: "Криптовалюты",
      ar: "العملات الرقمية",
    },
  },
];


const copy = {
  en: {
    title:
      "Open Live Account",

    description:
      "Complete the form and our team will contact you.",

    fullName:
      "Full Name",

    fullNamePlaceholder:
      "Enter your full name",

    email:
      "Email",

    emailPlaceholder:
      "Enter your email",

    phone:
      "Phone",

    phonePlaceholder:
      "Enter your phone number",

    budget:
      "Budget",

    budgetPlaceholder:
      "Enter your investment budget",

    investment:
      "Investment Interest",

    investmentPlaceholder:
      "Select an investment",

    submit:
      "Submit",

    sending:
      "Sending...",

    success:
      "Your request has been received. We will contact you shortly.",

    error:
      "Your request could not be sent. Please try again.",

    close:
      "Close form",
  },


  tr: {
    title:
      "Gerçek Hesap Aç",

    description:
      "Formu doldurun, ekibimiz sizinle iletişime geçsin.",

    fullName:
      "İsim Soyisim",

    fullNamePlaceholder:
      "İsim ve soyisminizi girin",

    email:
      "E-posta",

    emailPlaceholder:
      "E-posta adresinizi girin",

    phone:
      "Telefon",

    phonePlaceholder:
      "Telefon numaranızı girin",

    budget:
      "Bütçe",

    budgetPlaceholder:
      "Yatırım bütçenizi girin",

    investment:
      "İlgilendiğiniz Yatırım",

    investmentPlaceholder:
      "Yatırım seçin",

    submit:
      "Gönder",

    sending:
      "Gönderiliyor...",

    success:
      "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",

    error:
      "Talebiniz gönderilemedi. Lütfen tekrar deneyin.",

    close:
      "Formu kapat",
  },


  ru: {
    title:
      "Открыть реальный счет",

    description:
      "Заполните форму, и наша команда свяжется с вами.",

    fullName:
      "Имя и фамилия",

    fullNamePlaceholder:
      "Введите имя и фамилию",

    email:
      "Email",

    emailPlaceholder:
      "Введите email",

    phone:
      "Телефон",

    phonePlaceholder:
      "Введите номер телефона",

    budget:
      "Бюджет",

    budgetPlaceholder:
      "Введите инвестиционный бюджет",

    investment:
      "Интересующий рынок",

    investmentPlaceholder:
      "Выберите рынок",

    submit:
      "Отправить",

    sending:
      "Отправка...",

    success:
      "Ваша заявка получена. Мы скоро свяжемся с вами.",

    error:
      "Не удалось отправить заявку. Попробуйте еще раз.",

    close:
      "Закрыть форму",
  },


  ar: {
    title:
      "افتح حساباً حقيقياً",

    description:
      "املأ النموذج وسيتواصل معك فريقنا.",

    fullName:
      "الاسم الكامل",

    fullNamePlaceholder:
      "أدخل الاسم الكامل",

    email:
      "البريد الإلكتروني",

    emailPlaceholder:
      "أدخل بريدك الإلكتروني",

    phone:
      "الهاتف",

    phonePlaceholder:
      "أدخل رقم الهاتف",

    budget:
      "الميزانية",

    budgetPlaceholder:
      "أدخل ميزانية الاستثمار",

    investment:
      "الاستثمار الذي تهتم به",

    investmentPlaceholder:
      "اختر الاستثمار",

    submit:
      "إرسال",

    sending:
      "جارٍ الإرسال...",

    success:
      "تم استلام طلبك. سنتواصل معك قريباً.",

    error:
      "تعذر إرسال طلبك. يرجى المحاولة مرة أخرى.",

    close:
      "إغلاق النموذج",
  },
};


const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  budget: "",
  investment: "",
  website: "",
};


export default function OpenLiveModal({
  open,
  onClose,
  language = "en",
}) {
  const text =
    copy[language] ||
    copy.en;


  const [
    form,
    setForm,
  ] = useState(
    initialForm
  );


  const [
    status,
    setStatus,
  ] = useState(
    "idle"
  );


  useEffect(
    () => {
      if (
        !open
      ) {
        return undefined;
      }


      function handleEscape(
        event
      ) {
        if (
          event.key ===
          "Escape"
        ) {
          onClose();
        }
      }


      document.addEventListener(
        "keydown",
        handleEscape
      );


      return () => {
        document.removeEventListener(
          "keydown",
          handleEscape
        );
      };
    },
    [
      open,
      onClose,
    ]
  );


  useEffect(
    () => {
      if (
        open
      ) {
        document.body.style.overflow =
          "hidden";
      }


      return () => {
        document.body.style.overflow =
          "";
      };
    },
    [
      open,
    ]
  );


  if (
    !open
  ) {
    return null;
  }


  function handleChange(
    event
  ) {
    const {
      name,
      value,
    } =
      event.target;


    setForm(
      (
        current
      ) => ({
        ...current,
        [name]:
          value,
      })
    );
  }


  async function handleSubmit(
    event
  ) {
    event.preventDefault();


    if (
      status ===
      "sending"
    ) {
      return;
    }


    setStatus(
      "sending"
    );


    try {
      const response =
        await fetch(
          "/api/telegram-lead",
          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                ...form,

                language,
              }),
          }
        );


      if (
        !response.ok
      ) {
        throw new Error(
          "Request failed"
        );
      }


      setStatus(
        "success"
      );


      setForm(
        initialForm
      );
    } catch {
      setStatus(
        "error"
      );
    }
  }


  return (
    <div
      className="open-live-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="open-live-title"
      onMouseDown={(
        event
      ) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >

      <div className="open-live-modal-card">

        <button
          type="button"
          className="open-live-modal-close"
          aria-label={
            text.close
          }
          onClick={
            onClose
          }
        >
          ×
        </button>


        <div className="open-live-modal-heading">

          <h2 id="open-live-title">
            {text.title}
          </h2>

          <p>
            {text.description}
          </p>

        </div>


        <form
          className="open-live-form"
          onSubmit={
            handleSubmit
          }
        >

          {/* BOT HONEYPOT */}

          <input
            className="open-live-honeypot"
            type="text"
            name="website"
            value={
              form.website
            }
            onChange={
              handleChange
            }
            tabIndex="-1"
            autoComplete="off"
          />


          <label>

            <span>
              {text.fullName}
            </span>

            <input
              type="text"
              name="fullName"
              value={
                form.fullName
              }
              onChange={
                handleChange
              }
              placeholder={
                text.fullNamePlaceholder
              }
              required
            />

          </label>


          <label>

            <span>
              {text.email}
            </span>

            <input
              type="email"
              name="email"
              value={
                form.email
              }
              onChange={
                handleChange
              }
              placeholder={
                text.emailPlaceholder
              }
              required
            />

          </label>


          <label>

            <span>
              {text.phone}
            </span>

            <input
              type="tel"
              name="phone"
              value={
                form.phone
              }
              onChange={
                handleChange
              }
              placeholder={
                text.phonePlaceholder
              }
              required
            />

          </label>


          <label>

            <span>
              {text.budget}
            </span>

            <input
              type="text"
              inputMode="decimal"
              name="budget"
              value={
                form.budget
              }
              onChange={
                handleChange
              }
              placeholder={
                text.budgetPlaceholder
              }
              required
            />

          </label>


          <label>

            <span>
              {text.investment}
            </span>

            <select
              name="investment"
              value={
                form.investment
              }
              onChange={
                handleChange
              }
              required
            >

              <option
                value=""
                disabled
              >
                {
                  text.investmentPlaceholder
                }
              </option>


              {investmentOptions.map(
                (
                  item
                ) => (
                  <option
                    key={
                      item.value
                    }
                    value={
                      item.value
                    }
                  >
                    {
                      item.labels[
                      language
                      ] ||
                      item.labels.en
                    }
                  </option>
                )
              )}

            </select>

          </label>


          {status ===
            "success" && (
              <p className="open-live-form-message is-success">
                {
                  text.success
                }
              </p>
            )}


          {status ===
            "error" && (
              <p className="open-live-form-message is-error">
                {
                  text.error
                }
              </p>
            )}


          <button
            type="submit"
            className="open-live-form-submit"
            disabled={
              status ===
              "sending"
            }
          >
            {
              status ===
                "sending"
                ? text.sending
                : text.submit
            }
          </button>

        </form>

      </div>

    </div>
  );
}