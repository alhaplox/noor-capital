import {
  mediaCenterRoutes,
  mediaCenterTabLabels,
} from "../mediaCenterRoutes";

import "./MediaCenterTabs.css";


export default function MediaCenterTabs({
  language = "en",
  activeTab,
  navigate,
}) {
  const labels =
    mediaCenterTabLabels[
    language
    ] ||
    mediaCenterTabLabels.en;


  function localUrl(path) {
    return `/${language}/${path}`;
  }


  function handleNavigation(
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
    <div className="media-center-tabs-shell">

      <div className="media-center-tabs">

        {mediaCenterRoutes.map(
          (
            item
          ) => {
            const href =
              localUrl(
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
                  handleNavigation(
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
  );
}