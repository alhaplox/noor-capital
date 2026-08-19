import {
  newsRoutes,
  newsTabLabels,
} from "../newsRoutes";

import "./NewsTabs.css";


export default function NewsTabs({
  language = "en",
  activeTab,
  navigate,
}) {
  const labels =
    newsTabLabels[language] ||
    newsTabLabels.en;


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
    <div className="news-tabs-shell">

      <div className="news-tabs">

        {newsRoutes.map(
          (item) => {
            const href =
              localUrl(
                item.path
              );


            return (
              <a
                key={item.key}

                href={href}

                className={
                  activeTab === item.key
                    ? "is-active"
                    : ""
                }

                onClick={(event) =>
                  handleNavigation(
                    event,
                    href
                  )
                }
              >
                {labels[item.key]}
              </a>
            );
          }
        )}

      </div>

    </div>
  );
}