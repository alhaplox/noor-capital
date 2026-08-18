import {
  useState,
} from "react";

import {
  Autoplay,
  Navigation,
} from "swiper/modules";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import ProductTabs from "./components/ProductTabs";

import {
  forexAssets,
  forexCopy,
  forexTableRows,
} from "./forexTradingData";

import "./ForexTradingPage.css";


const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  nationality: "",
  emirate: "",
  hear: "",
  agree: false,
};


export default function ForexTradingPage({
  language = "en",
  navigate,
}) {
  const content =
    forexCopy[
    language
    ] ||
    forexCopy.en;


  const [
    openFaq,
    setOpenFaq,
  ] = useState(null);


  const [
    form,
    setForm,
  ] = useState(
    initialForm
  );


  const [
    formStatus,
    setFormStatus,
  ] = useState("");


  function localUrl(
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


  function handleFormChange(
    event
  ) {
    const {
      name,
      value,
      checked,
      type,
    } = event.target;


    setForm(
      (
        previous
      ) => ({
        ...previous,

        [name]:
          type ===
            "checkbox"
            ? checked
            : value,
      })
    );


    setFormStatus("");
  }


  function submitForm(
    event
  ) {
    event.preventDefault();


    const valid =
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.email.trim() &&
      form.phone.trim() &&
      form.nationality.trim();


    if (!valid) {
      setFormStatus(
        "error"
      );

      return;
    }


    setFormStatus(
      "success"
    );


    setForm(
      initialForm
    );
  }


  function backToTop() {
    window.scrollTo({
      top: 0,

      behavior:
        "smooth",
    });
  }


  return (
    <main
      className="forex-page"

      style={{
        "--forex-hero":
          `url("${forexAssets.hero}")`,

        "--forex-intro-bg":
          `url("${forexAssets.introBackground}")`,

        "--forex-why-bg":
          `url("${forexAssets.whyBackground}")`,

        "--forex-icon-bg":
          `url("${forexAssets.iconBackground}")`,

        "--forex-table-bg":
          `url("${forexAssets.tableBackground}")`,

        "--forex-final-bg":
          `url("${forexAssets.finalBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="forex-hero">

        <div className="forex-container">

          <h1>
            {content.hero.title}
          </h1>


          <ul>

            {content.hero.bullets.map(
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

        </div>

      </section>


      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="forex-intro-section">

        <ProductTabs
          language={
            language
          }

          activeProduct="forex"

          navigate={
            navigate
          }
        />


        <div className="forex-container forex-intro-layout">


          {/* IMAGE */}

          <div className="forex-main-image">

            <img
              src={
                forexAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>


          {/* COPY */}

          <div className="forex-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <div className="forex-intro-paragraphs">

              {content.intro.paragraphs.map(
                (
                  paragraph
                ) => (

                  <p
                    key={
                      paragraph
                    }
                  >
                    {paragraph}
                  </p>

                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          REASONS
      =================================================== */}

      <section className="forex-reasons-section">

        <div className="forex-container">

          <h2 className="forex-gradient-title">
            {content.reasons.title}
          </h2>


          <div className="forex-reasons-slider">

            <Swiper
              modules={[
                Autoplay,
                Navigation,
              ]}

              spaceBetween={
                30
              }

              slidesPerView={
                1
              }

              loop

              autoplay={{
                delay: 3200,

                disableOnInteraction:
                  false,
              }}

              navigation={{
                nextEl:
                  ".forex-next",

                prevEl:
                  ".forex-prev",
              }}

              breakpoints={{
                700: {
                  slidesPerView:
                    2,
                },

                1050: {
                  slidesPerView:
                    3.25,
                },
              }}
            >

              {content.reasons.items.map(
                (
                  item,
                  index
                ) => (

                  <SwiperSlide
                    key={
                      item.title
                    }
                  >

                    <article className="forex-reason-card">

                      <div className="forex-reason-icon">

                        <img
                          src={
                            forexAssets
                              .reasons[
                            index
                            ]
                          }

                          alt=""

                          loading="lazy"
                        />

                      </div>


                      <h3>
                        {item.title}
                      </h3>


                      <p>
                        {item.text}
                      </p>

                    </article>

                  </SwiperSlide>

                )
              )}

            </Swiper>


            <button
              type="button"

              className="forex-slider-button forex-prev"

              aria-label="Previous"
            >

              <img
                src={
                  forexAssets.previous
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="forex-slider-button forex-next"

              aria-label="Next"
            >

              <img
                src={
                  forexAssets.next
                }

                alt=""
              />

            </button>

          </div>

        </div>

      </section>


      {/* ===================================================
          DEMO FORM
      =================================================== */}

      <section className="forex-demo-section">

        <div className="forex-container forex-demo-layout">


          {/* COPY */}

          <div className="forex-demo-copy">

            <h2>
              {content.demo.title}
            </h2>


            <strong>
              {content.demo.subtitle}
            </strong>


            <ol>

              {content.demo.benefits.map(
                (
                  item,
                  index
                ) => (

                  <li
                    key={
                      `${item.title}-${index}`
                    }
                  >

                    {item.title && (
                      <>
                        <strong>
                          {item.title}:
                        </strong>

                        {" "}
                      </>
                    )}


                    {item.text}

                  </li>

                )
              )}

            </ol>

          </div>


          {/* FORM */}

          <form
            className="forex-demo-form"

            autoComplete="off"

            onSubmit={
              submitForm
            }
          >

            <div className="forex-form-grid">

              <label>

                <span>
                  {
                    content.demo
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

                  placeholder={
                    content.demo
                      .form
                      .firstPlaceholder
                  }

                  onChange={
                    handleFormChange
                  }
                />

              </label>


              <label>

                <span>
                  {
                    content.demo
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

                  placeholder={
                    content.demo
                      .form
                      .lastPlaceholder
                  }

                  onChange={
                    handleFormChange
                  }
                />

              </label>


              <label>

                <span>
                  {
                    content.demo
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

                  placeholder={
                    content.demo
                      .form
                      .emailPlaceholder
                  }

                  onChange={
                    handleFormChange
                  }
                />

              </label>


              <label>

                <span>
                  {
                    content.demo
                      .form
                      .phone
                  }
                </span>

                <input
                  type="tel"

                  name="phone"

                  maxLength="15"

                  value={
                    form.phone
                  }

                  placeholder={
                    content.demo
                      .form
                      .phonePlaceholder
                  }

                  onChange={
                    handleFormChange
                  }
                />

              </label>


              <label>

                <span>
                  {
                    content.demo
                      .form
                      .nationality
                  }
                </span>

                <input
                  type="text"

                  name="nationality"

                  value={
                    form.nationality
                  }

                  placeholder={
                    content.demo
                      .form
                      .nationalityPlaceholder
                  }

                  onChange={
                    handleFormChange
                  }
                />

              </label>


              <label>

                <span>
                  {
                    content.demo
                      .form
                      .emirate
                  }
                </span>

                <input
                  type="text"

                  name="emirate"

                  value={
                    form.emirate
                  }

                  placeholder={
                    content.demo
                      .form
                      .emiratePlaceholder
                  }

                  onChange={
                    handleFormChange
                  }
                />

              </label>

            </div>


            <label className="forex-form-full">

              <span>
                {
                  content.demo
                    .form
                    .hear
                }
              </span>

              <input
                type="text"

                name="hear"

                value={
                  form.hear
                }

                placeholder={
                  content.demo
                    .form
                    .hearPlaceholder
                }

                onChange={
                  handleFormChange
                }
              />

            </label>


            <label className="forex-checkbox">

              <input
                type="checkbox"

                name="agree"

                checked={
                  form.agree
                }

                onChange={
                  handleFormChange
                }
              />


              <span>
                {
                  content.demo
                    .form
                    .agree
                }
              </span>

            </label>


            {formStatus && (
              <p
                className={`forex-form-status ${formStatus ===
                  "success"
                  ? "is-success"
                  : "is-error"
                  }`}
              >
                {
                  formStatus ===
                    "success"
                    ? content.demo
                      .form
                      .success
                    : content.demo
                      .form
                      .error
                }
              </p>
            )}


            <button
              type="submit"

              className="forex-gold-button"
            >

              {
                content.demo
                  .form
                  .submit
              }


              <span aria-hidden="true">
                ›
              </span>

            </button>

          </form>

        </div>

      </section>


      {/* ===================================================
          FOREX PLATFORMS
      =================================================== */}

      <section className="forex-platforms-section">

        <div className="forex-container">

          <h2 className="forex-gradient-title">
            {content.platforms.title}
          </h2>


          <div className="forex-platforms-layout">


            {/* PLATFORM NAMES */}

            <div className="forex-platform-tabs">

              {content.platforms.tabs.map(
                (
                  tab,
                  index
                ) => (

                  <button
                    type="button"

                    key={
                      tab
                    }

                    className={
                      index === 0
                        ? "is-active"
                        : ""
                    }
                  >
                    {tab}
                  </button>

                )
              )}

            </div>


            {/* CURRENT SOURCE CONTENT */}

            <div className="forex-platform-content">


              {/* IMAGE */}

              <div className="forex-platform-image">

                <img
                  src={
                    forexAssets.platformImage
                  }

                  alt={
                    content
                      .platforms
                      .mt4
                      .title
                  }

                  loading="lazy"
                />

              </div>


              {/* COPY */}

              <div className="forex-platform-copy">

                <h3>
                  {
                    content
                      .platforms
                      .mt4
                      .title
                  }
                </h3>


                <p>
                  {
                    content
                      .platforms
                      .mt4
                      .text
                  }
                </p>


                <ul>

                  {content.platforms.mt4.features.map(
                    (
                      item
                    ) => (

                      <li
                        key={
                          item.title
                        }
                      >

                        <strong>
                          {item.title}:
                        </strong>

                        {" "}

                        {item.text}

                      </li>

                    )
                  )}

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================
          TABLE
      =================================================== */}

      <section className="forex-table-section">

        <div className="forex-container">

          <h2 className="forex-gradient-title">
            {content.table.title}
          </h2>


          <div className="forex-table-wrapper">

            <table>

              <thead>

                <tr>

                  {content.table.headers.map(
                    (
                      header
                    ) => (

                      <th
                        key={
                          header
                        }
                      >
                        {header}
                      </th>

                    )
                  )}

                </tr>

              </thead>


              <tbody>

                {forexTableRows.map(
                  (
                    row,
                    rowIndex
                  ) => (

                    <tr
                      key={
                        `forex-row-${rowIndex}`
                      }
                    >

                      {row.map(
                        (
                          value,
                          cellIndex
                        ) => (

                          <td
                            key={
                              `${rowIndex}-${cellIndex}`
                            }
                          >
                            {value}
                          </td>

                        )
                      )}

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>


          <div className="forex-pagination">

            <button
              type="button"

              disabled
            >

              <img
                src={
                  forexAssets.arrowLeft
                }

                alt=""
              />

            </button>


            <span>
              {content.table.page}
            </span>


            <button
              type="button"
            >

              <img
                src={
                  forexAssets.arrowRight
                }

                alt=""
              />

            </button>

          </div>

        </div>

      </section>


      {/* ===================================================
          FAQ
      =================================================== */}

      <section className="forex-faq-section">

        <div className="forex-container forex-faq-layout">


          {/* HEADING */}

          <div className="forex-faq-heading">

            <h2>
              {content.faq.title}
            </h2>

          </div>


          {/* QUESTIONS */}

          <div className="forex-faq-list">

            {content.faq.items.map(
              (
                item,
                index
              ) => {

                const isOpen =
                  openFaq ===
                  index;


                return (
                  <article
                    className={`forex-faq-item ${isOpen
                      ? "is-open"
                      : ""
                      }`}

                    key={
                      item.question
                    }
                  >

                    <button
                      type="button"

                      onClick={() =>
                        setOpenFaq(
                          isOpen
                            ? null
                            : index
                        )
                      }
                    >

                      <span className="forex-faq-plus">
                        +
                      </span>


                      <span>
                        {
                          item.question
                        }
                      </span>

                    </button>


                    {isOpen && (
                      <div className="forex-faq-answer">

                        {item.paragraphs?.map(
                          (
                            paragraph
                          ) => (

                            <p
                              key={
                                paragraph
                              }
                            >
                              {paragraph}
                            </p>

                          )
                        )}


                        {item.bullets && (
                          <ol>

                            {item.bullets.map(
                              (
                                bullet
                              ) => (

                                <li
                                  key={
                                    bullet
                                  }
                                >
                                  {bullet}
                                </li>

                              )
                            )}

                          </ol>
                        )}

                      </div>
                    )}

                  </article>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          FINAL CTA
      =================================================== */}

      <section className="forex-final-section">

        <div className="forex-container forex-final-layout">


          {/* COPY */}

          <div className="forex-final-copy">

            <h2>
              {content.finalCta.title}
            </h2>


            <p>
              {content.finalCta.text}
            </p>


            <a
              href="tel:+97142795400"

              className="forex-phone"
            >
              {content.finalCta.phone}
            </a>


            <div className="forex-final-buttons">

              <a
                href={
                  localUrl(
                    "trading/mt4-platform"
                  )
                }

                className="forex-gold-button"

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

                {
                  content
                    .finalCta
                    .demo
                }

                <span>
                  ›
                </span>

              </a>


              <a
                href="https://mynoor.noorcap.ae/en/mynoor-v2/register"

                target="_blank"

                rel="noopener noreferrer"

                className="forex-gold-button"
              >

                {
                  content
                    .finalCta
                    .live
                }

                <span>
                  ›
                </span>

              </a>

            </div>

          </div>


          {/* IMAGE */}

          <div className="forex-final-image">

            <img
              src={
                forexAssets.finalImage
              }

              alt=""

              loading="lazy"
            />

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TOP
      =================================================== */}

      <div className="forex-back-top-shell">

        <button
          type="button"

          className="forex-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              forexAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}