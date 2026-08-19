import {
  partnershipRoutes,
  partnershipTabLabels,
} from "../partnershipRoutes";

import "./PartnershipTabs.css";


export default function PartnershipTabs({
  language = "en",
  activeTab,
  navigate,
  fixed = true,
}) {
  const labels =
    partnershipTabLabels[
    language
    ] ||
    partnershipTabLabels.en;


  function getHref(
    path
  ) {
    return `/${language}/${path}`;
  }


  function handleClick(
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
    <>
      <div
        className={
          fixed
            ? "partnership-tabs-spacer"
            : "partnership-tabs-spacer partnership-tabs-spacer-inline"
        }
      />


      <div
        className={
          fixed
            ? "partnership-tabs-shell is-fixed"
            : "partnership-tabs-shell is-inline"
        }
      >

        <div className="partnership-tabs-container">

          {partnershipRoutes.map(
            (
              item
            ) => {
              const href =
                getHref(
                  item.path
                );


              return (
                <a
                  key={
                    item.key
                  }

                  href={
                    href
                  }

                  className={
                    activeTab ===
                      item.key
                      ? "is-active"
                      : ""
                  }

                  onClick={(
                    event
                  ) =>
                    handleClick(
                      event,
                      href
                    )
                  }
                >
                  {
                    labels[
                    item.key
                    ]
                  }
                </a>
              );
            }
          )}

        </div>

      </div>
    </>
  );
}