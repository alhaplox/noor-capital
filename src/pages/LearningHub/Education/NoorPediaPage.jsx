import {
  useState,
} from "react";

import EducationTabs from "./components/EducationTabs";

import {
  noorPediaAssets,
  noorPediaCopy,
  noorPediaGlossary,
} from "./noorPediaData";

import "./NoorPediaPage.css";


export default function NoorPediaPage({
  language = "en",
  navigate,
}) {
  const content =
    noorPediaCopy[
    language
    ] ||
    noorPediaCopy.en;


  const [
    openIndex,
    setOpenIndex,
  ] = useState(null);


  /* =======================================================
     ACCORDION
  ======================================================= */

  function toggleItem(index) {
    setOpenIndex(
      openIndex === index
        ? null
        : index
    );
  }


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <main
      className="noor-pedia-page"

      style={{
        "--noor-pedia-hero":
          `url("${noorPediaAssets.hero}")`,

        "--noor-pedia-background":
          `url("${noorPediaAssets.background}")`,
      }}
    >


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="noor-pedia-hero">

        <div className="noor-pedia-container">

          <h1>
            {content.hero}
          </h1>

        </div>

      </section>


      {/* ===================================================
          GLOSSARY
      =================================================== */}

      <section className="noor-pedia-main-section">


        <EducationTabs
          language={language}

          activeTab="pedia"

          navigate={navigate}
        />


        <div className="noor-pedia-container noor-pedia-content">

          <h2 className="noor-pedia-gradient-title">
            {content.glossaryTitle}
          </h2>


          <div className="noor-pedia-accordion">

            {noorPediaGlossary.map(
              (
                item,
                index
              ) => {

                const isOpen =
                  openIndex === index;


                return (
                  <article
                    className={
                      `noor-pedia-item${isOpen
                        ? " is-open"
                        : ""
                      }`
                    }

                    key={
                      item.term
                    }
                  >

                    <h3>

                      <button
                        type="button"

                        className="noor-pedia-trigger"

                        aria-expanded={
                          isOpen
                        }

                        onClick={() =>
                          toggleItem(
                            index
                          )
                        }
                      >

                        <span>
                          {item.term}
                        </span>


                        <span
                          className="noor-pedia-indicator"
                          aria-hidden="true"
                        >
                          {isOpen
                            ? "−"
                            : "+"}
                        </span>

                      </button>

                    </h3>


                    <div className="noor-pedia-answer-grid">

                      <div className="noor-pedia-answer-inner">

                        <p>
                          {item.definition}
                        </p>

                      </div>

                    </div>

                  </article>
                );
              }
            )}

          </div>

        </div>

      </section>


      {/* ===================================================
          BACK TO TOP
      =================================================== */}

      <div className="noor-pedia-back-top-shell">

        <button
          type="button"

          className="noor-pedia-back-top"

          aria-label={
            content.backTop
          }

          onClick={
            backToTop
          }
        >

          <img
            src={
              noorPediaAssets.arrowUp
            }

            alt=""
          />

        </button>

      </div>

    </main>
  );
}