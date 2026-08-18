import {
  useState,
} from "react";

import {
  contactOffices,
  contactSocialLinks,
  contactUsAssets,
  contactUsCopy,
  departmentOptions,
  nationalityOptions,
} from "./contactUsData";

import "./ContactUs.css";


/* =========================================================
   INITIAL FORM
========================================================= */

const initialForm = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  nationality: "",
  department: "",
  message: "",
};


/* =========================================================
   CONTACT US
========================================================= */

export default function ContactUs({
  language = "en",
  navigate,
}) {
  const content =
    contactUsCopy[language] ||
    contactUsCopy.en;


  const [
    form,
    setForm,
  ] = useState(initialForm);


  const [
    status,
    setStatus,
  ] = useState("");


  /* =======================================================
     LOCAL URL
  ======================================================= */

  function localUrl(
    path
  ) {
    return `/${language}/${path}`;
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
     FORM CHANGE
  ======================================================= */

  function handleChange(
    event
  ) {
    const {
      name,
      value,
    } = event.target;


    setForm(
      (
        previous
      ) => ({
        ...previous,

        [name]:
          value,
      })
    );


    if (status) {
      setStatus("");
    }
  }


  /* =======================================================
     SUBMIT
  ======================================================= */

  function handleSubmit(
    event
  ) {
    event.preventDefault();


    const requiredFields = [
      form.firstName,
      form.lastName,
      form.company,
      form.email,
      form.phone,
      form.nationality,
      form.department,
    ];


    const complete =
      requiredFields.every(
        (
          value
        ) =>
          value.trim()
      );


    if (!complete) {
      setStatus("error");

      return;
    }


    setStatus("success");

    setForm(initialForm);
  }


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  function backToTop() {
    window.scrollTo({
      top: 0,

      behavior:
        "smooth",
    });
  }


  return (
    <main
      className="contact-page"

      style={{
        "--contact-hero":
          `url("${contactUsAssets.hero}")`,

        "--contact-office-bg":
          `url("${contactUsAssets.contactBackground}")`,

        "--contact-info-bg":
          `url("${contactUsAssets.infoBackground}")`,

        "--contact-form-bg":
          `url("${contactUsAssets.formBackground}")`,

        "--contact-trading-bg":
          `url("${contactUsAssets.tradingBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="contact-page-hero">

        <div className="contact-page-container">

          <h1>
            {content.pageTitle}
          </h1>

        </div>

      </section>


      {/* ===================================================
          LOCATIONS
      =================================================== */}

      <section className="contact-offices-section">

        <div className="contact-page-container">

          <div className="contact-offices-grid">

            {contactOffices.map(
              (
                office
              ) => (

                <article
                  className="contact-office-card"

                  key={
                    office.key
                  }
                >

                  <div className="contact-office-content">

                    <h2>
                      {office.name}
                    </h2>


                    {/* LOCATION */}

                    <div className="contact-office-row">

                      <div className="contact-office-icon">

                        <img
                          src={
                            contactUsAssets.location
                          }

                          alt=""

                          loading="lazy"
                        />

                      </div>


                      <p>
                        {office.address}
                      </p>

                    </div>


                    {/* PHONE */}

                    <div className="contact-office-row">

                      <div className="contact-office-icon">

                        <img
                          src={
                            contactUsAssets.call
                          }

                          alt=""

                          loading="lazy"
                        />

                      </div>


                      <a
                        href={
                          office.phoneHref
                        }
                      >
                        {office.phone}
                      </a>

                    </div>

                  </div>


                  {/* BUTTON */}

                  <div className="contact-office-button-shell">

                    <a
                      href={
                        office.map
                      }

                      target="_blank"

                      rel="noopener noreferrer"

                      className="contact-gold-button"
                    >

                      <span>
                        {content.direction}
                      </span>


                      <span
                        className="contact-button-arrow"

                        aria-hidden="true"
                      >
                        ›
                      </span>

                    </a>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          CONTACT DEPARTMENTS
      =================================================== */}

      <section className="contact-departments-section">

        <div className="contact-page-container">

          <div className="contact-departments-grid">

            {content.inquiryCards.map(
              (
                card,
                index
              ) => (

                <article
                  className="contact-department-card"

                  key={
                    card.title
                  }
                >

                  <div className="contact-department-icon">

                    <img
                      src={
                        contactUsAssets
                          .inquiryIcons[
                        index
                        ]
                      }

                      alt=""

                      loading="lazy"
                    />

                  </div>


                  <h3>
                    {card.title}
                  </h3>


                  <a
                    href={
                      `mailto:${card.email}`
                    }
                  >
                    <span>
                      {card.email}
                    </span>


                    <img
                      src={
                        contactUsAssets.smallArrow
                      }

                      alt=""
                    />

                  </a>

                </article>

              )
            )}

          </div>


          {/* OPERATING INFO */}

          <div className="contact-operating-info">

            <p>
              <span>
                {
                  content.operatingDaysLabel
                }
              </span>

              <strong>
                {
                  content.operatingDays
                }
              </strong>
            </p>


            <p>
              <span>
                {
                  content.customerSupportLabel
                }
              </span>

              <strong>
                {
                  content.customerSupport
                }
              </strong>
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          FORM SECTION
      =================================================== */}

      <section className="contact-form-section">

        <div className="contact-page-container contact-form-layout">


          {/* ===============================================
              COPY
          =============================================== */}

          <div className="contact-form-intro">

            <h2>
              {
                content
                  .formIntro
                  .title
              }
            </h2>


            <p>
              {
                content
                  .formIntro
                  .text
              }
            </p>


            {/* SOCIAL */}

            <div className="contact-social">

              {contactSocialLinks.map(
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
                        contactUsAssets
                          .social[
                        social.key
                        ]
                      }

                      alt=""
                    />

                  </a>

                )
              )}

            </div>

          </div>


          {/* ===============================================
              FORM
          =============================================== */}

          <div className="contact-form-card">

            <form
              autoComplete="off"

              onSubmit={
                handleSubmit
              }
            >


              {/* FIRST / LAST */}

              <div className="contact-form-two">

                <label className="contact-field">

                  <span>
                    {
                      content
                        .form
                        .firstName
                    }
                  </span>

                  <input
                    type="text"

                    name="firstName"

                    value={
                      form.firstName
                    }

                    onChange={
                      handleChange
                    }

                    placeholder={
                      content
                        .form
                        .firstNamePlaceholder
                    }
                  />

                </label>


                <label className="contact-field">

                  <span>
                    {
                      content
                        .form
                        .lastName
                    }
                  </span>

                  <input
                    type="text"

                    name="lastName"

                    value={
                      form.lastName
                    }

                    onChange={
                      handleChange
                    }

                    placeholder={
                      content
                        .form
                        .lastNamePlaceholder
                    }
                  />

                </label>

              </div>


              {/* COMPANY */}

              <label className="contact-field">

                <span>
                  {
                    content
                      .form
                      .company
                  }
                </span>

                <input
                  type="text"

                  name="company"

                  value={
                    form.company
                  }

                  onChange={
                    handleChange
                  }

                  placeholder={
                    content
                      .form
                      .companyPlaceholder
                  }
                />

              </label>


              {/* EMAIL */}

              <label className="contact-field">

                <span>
                  {
                    content
                      .form
                      .email
                  }
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
                    content
                      .form
                      .emailPlaceholder
                  }
                />

              </label>


              {/* PHONE */}

              <label className="contact-field">

                <span>
                  {
                    content
                      .form
                      .phone
                  }
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
                    content
                      .form
                      .phonePlaceholder
                  }
                />

              </label>


              {/* NATIONALITY / DEPARTMENT */}

              <div className="contact-form-two">

                <label className="contact-field">

                  <span>
                    {
                      content
                        .form
                        .nationality
                    }
                  </span>

                  <select
                    name="nationality"

                    value={
                      form.nationality
                    }

                    onChange={
                      handleChange
                    }
                  >

                    <option value="">
                      {
                        content
                          .form
                          .nationalityPlaceholder
                      }
                    </option>


                    {nationalityOptions.map(
                      (
                        option
                      ) => (

                        <option
                          key={
                            option
                          }

                          value={
                            option
                          }
                        >
                          {option}
                        </option>

                      )
                    )}

                  </select>

                </label>


                <label className="contact-field">

                  <span>
                    {
                      content
                        .form
                        .department
                    }
                  </span>

                  <select
                    name="department"

                    value={
                      form.department
                    }

                    onChange={
                      handleChange
                    }
                  >

                    <option value="">
                      {
                        content
                          .form
                          .departmentPlaceholder
                      }
                    </option>


                    {departmentOptions.map(
                      (
                        option
                      ) => (

                        <option
                          key={
                            option
                          }

                          value={
                            option
                          }
                        >
                          {option}
                        </option>

                      )
                    )}

                  </select>

                </label>

              </div>


              {/* MESSAGE */}

              <label className="contact-field">

                <textarea
                  name="message"

                  value={
                    form.message
                  }

                  onChange={
                    handleChange
                  }

                  placeholder={
                    content
                      .form
                      .messagePlaceholder
                  }

                  rows="5"
                />

              </label>


              {/* STATUS */}

              {status && (
                <p
                  className={`contact-form-status ${status ===
                    "success"
                    ? "is-success"
                    : "is-error"
                    }`}
                >
                  {
                    status ===
                      "success"
                      ? content
                        .form
                        .success
                      : content
                        .form
                        .error
                  }
                </p>
              )}


              {/* SUBMIT */}

              <button
                type="submit"

                className="contact-submit"
              >

                <span>
                  {
                    content
                      .form
                      .submit
                  }
                </span>

                <span
                  aria-hidden="true"
                >
                  ›
                </span>

              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ===================================================
          TRADING CTA
      =================================================== */}

      <section className="contact-trading-section">

        <div className="contact-page-container contact-trading-layout">


          {/* COPY */}

          <div className="contact-trading-copy">

            <h2>
              {
                content
                  .trading
                  .title
              }
            </h2>


            <ul>

              {content.trading.benefits.map(
                (
                  item
                ) => (

                  <li
                    key={
                      item
                    }
                  >
                    {item}
                  </li>

                )
              )}

            </ul>


            <div className="contact-trading-buttons">

              {/* DEMO */}

              <a
                href={
                  localUrl(
                    "trading/mt4-platform"
                  )
                }

                className="contact-gold-button"

                onClick={(
                  event
                ) =>
                  handleInternalLink(
                    event,
                    localUrl(
                      "trading/mt4-platform"
                    )
                  )
                }
              >

                <span>
                  {
                    content
                      .trading
                      .demo
                  }
                </span>

                <span
                  aria-hidden="true"
                >
                  ›
                </span>

              </a>


              {/* LIVE */}

              <a
                href="https://mynoor.noorcap.ae/en/mynoor-v2/register"

                target="_blank"

                rel="noopener noreferrer"

                className="contact-gold-button"
              >

                <span>
                  {
                    content
                      .trading
                      .live
                  }
                </span>

                <span
                  aria-hidden="true"
                >
                  ›
                </span>

              </a>

            </div>

          </div>


          {/* IMAGE */}

          <div className="contact-trading-image">

            <img
              src={
                contactUsAssets
                  .tradingImage
              }

              alt="Noor Capital Trading"

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="contact-back-top-shell">

        <button
          type="button"

          className="contact-back-top"

          onClick={
            backToTop
          }

          aria-label={
            content.backToTop
          }
        >

          <img
            src={
              contactUsAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}