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
  sharesAssets,
  sharesCfdCopy,
  sharesStockRows,
} from "./sharesCfdData";

import "./SharesCFDPage.css";


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


export default function SharesCFDPage({
  language = "en",
  navigate,
}) {
  const content =
    sharesCfdCopy[
    language
    ] ||
    sharesCfdCopy.en;


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
          type === "checkbox"
            ? checked
            : value,
      })
    );

    setFormStatus("");
  }


  function submitDemo(
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
      behavior: "smooth",
    });
  }


  return (
    <main
      className="shares-page"

      style={{
        "--shares-hero":
          `url("${sharesAssets.hero}")`,

        "--shares-intro-bg":
          `url("${sharesAssets.introBackground}")`,

        "--shares-why-bg":
          `url("${sharesAssets.whyBackground}")`,

        "--shares-icon-bg":
          `url("${sharesAssets.iconBackground}")`,

        "--shares-trading-bg":
          `url("${sharesAssets.tradingBackground}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="shares-hero">

        <div className="shares-container">

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
          MAIN INTRO
      =================================================== */}

      <section className="shares-intro-section">


        <ProductTabs
          language={
            language
          }

          activeProduct="shares"

          navigate={
            navigate
          }
        />


        <div className="shares-container shares-intro-layout">


          {/* IMAGE */}

          <div className="shares-main-image">

            <img
              src={
                sharesAssets.mainImage
              }

              alt={
                content.intro.title
              }

              loading="lazy"
            />

          </div>


          {/* COPY */}

          <div className="shares-intro-copy">

            <h2>
              {content.intro.title}
            </h2>


            <p>
              {content.intro.text}
            </p>


            <strong className="shares-types-title">
              {
                content
                  .intro
                  .typesTitle
              }
            </strong>


            <ul className="shares-types">

              {content.intro.types.map(
                (
                  type
                ) => (

                  <li
                    key={
                      type.title
                    }
                  >

                    <strong>
                      {type.title}
                    </strong>

                    {" "}

                    {type.text}

                  </li>

                )
              )}

            </ul>

          </div>

        </div>

      </section>


      {/* ===================================================
          ADVANTAGES
      =================================================== */}

      <section className="shares-advantages-section">

        <div className="shares-container">

          <h2 className="shares-gradient-title">
            {
              content
                .advantages
                .title
            }
          </h2>


          <div className="shares-advantages-grid">

            {content.advantages.items.map(
              (
                item
              ) => (

                <article
                  className="shares-advantage-card"

                  key={
                    item.title
                  }
                >

                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.text}
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          7 REASONS
      =================================================== */}

      <section className="shares-reasons-section">

        <div className="shares-container">

          <h2 className="shares-gradient-title">
            {
              content
                .reasons
                .title
            }
          </h2>


          <div className="shares-reasons-slider">

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
                  ".shares-reasons-next",

                prevEl:
                  ".shares-reasons-prev",
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

                    <article className="shares-reason-card">


                      {/* ICON */}

                      <div className="shares-reason-icon">

                        <img
                          src={
                            sharesAssets
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


            {/* MOBILE CONTROLS */}

            <button
              type="button"

              className="shares-slider-button shares-reasons-prev"
            >

              <img
                src={
                  sharesAssets.previous
                }

                alt=""
              />

            </button>


            <button
              type="button"

              className="shares-slider-button shares-reasons-next"
            >

              <img
                src={
                  sharesAssets.next
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

      <section className="shares-demo-section">

        <div className="shares-container shares-demo-layout">


          {/* COPY */}

          <div className="shares-demo-copy">

            <h2>
              {content.demo.title}
            </h2>


            <strong>
              {
                content
                  .demo
                  .subtitle
              }
            </strong>


            <ul>

              {content.demo.benefits.map(
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


          {/* FORM */}

          <form
            className="shares-demo-form"

            onSubmit={
              submitDemo
            }

            autoComplete="off"
          >

            <div className="shares-form-grid">

              <label>

                <span>
                  {
                    content.demo
                      .form
                      .firstName
                  }
                </span>

                <input
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

                  placeholder="Email"

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

                  maxLength="15"

                  name="phone"

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


              {/* Source HTML doesn't expose actual dropdown options,
                  so these remain text-entry controls for now. */}

              <label>

                <span>
                  {
                    content.demo
                      .form
                      .nationality
                  }
                </span>

                <input
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


            <label className="shares-form-full">

              <span>
                {
                  content.demo
                    .form
                    .hear
                }
              </span>

              <input
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


            <label className="shares-checkbox">

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
                className={`shares-form-status ${formStatus ===
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

              className="shares-gold-button"
            >
              {
                content.demo
                  .form
                  .submit
              }

              <span>
                ›
              </span>
            </button>

          </form>

        </div>

      </section>


      {/* ===================================================
          SPECIFICATION TABLE
      =================================================== */}

      <section className="shares-table-section">

        <div className="shares-container">

          <h2 className="shares-gradient-title">
            {content.table.title}
          </h2>


          <div className="shares-table-wrapper">

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

                {sharesStockRows.map(
                  (
                    row,
                    rowIndex
                  ) => (

                    <tr
                      key={
                        `share-row-${rowIndex}`
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


          <div className="shares-table-pagination">

            <button
              type="button"

              disabled
            >

              <img
                src={
                  sharesAssets.arrowLeft
                }

                alt=""
              />

            </button>


            <span>
              {content.table.page}
            </span>


            <button
              type="button"

              aria-label="Next page"
            >

              <img
                src={
                  sharesAssets.arrowRight
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

      <section className="shares-faq-section">

        <div className="shares-container shares-faq-layout">


          {/* TITLE */}

          <div className="shares-faq-title">

            <h2>
              {content.faq.title}
            </h2>

          </div>


          {/* ACCORDION */}

          <div className="shares-faq-list">

            {content.faq.items.map(
              (
                item,
                index
              ) => {

                const open =
                  openFaq ===
                  index;


                return (
                  <article
                    className={`shares-faq-item ${open
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
                          open
                            ? null
                            : index
                        )
                      }
                    >

                      <span className="shares-faq-plus">
                        +
                      </span>


                      <span>
                        {
                          item.question
                        }
                      </span>

                    </button>


                    <div className="shares-faq-answer">

                      {item.paragraphs?.map(
                        (
                          paragraph,
                          paragraphIndex
                        ) => (

                          <p
                            key={
                              `${index}-p-${paragraphIndex}`
                            }
                          >
                            {paragraph}
                          </p>

                        )
                      )}


                      {item.bullets && (
                        <ul>

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

                        </ul>
                      )}

                    </div>

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

      <section className="shares-final-section">

        <div className="shares-container shares-final-layout">


          {/* COPY */}

          <div className="shares-final-copy">

            <h2>
              {
                content
                  .finalCta
                  .title
              }
            </h2>


            <div>

              {content.finalCta.paragraphs.map(
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


            <a
              href={
                localUrl(
                  "trading/mt4-platform"
                )
              }

              className="shares-gold-button"

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
                  .button
              }

              <span>
                ›
              </span>
            </a>

          </div>


          {/* IMAGE */}

          <div className="shares-final-image">

            <img
              src={
                sharesAssets.finalImage
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

      <div className="shares-back-top-shell">

        <button
          type="button"

          className="shares-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              sharesAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}