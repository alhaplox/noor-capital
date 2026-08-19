import {
  educationRoutes,
  educationTabLabels,
} from "../educationRoutes";

import "./EducationTabs.css";


export default function EducationTabs({
  language = "en",
  activeTab,
  navigate,
}) {
  const labels =
    educationTabLabels[language] ||
    educationTabLabels.en;


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
    <div className="education-tabs-shell">

      <div className="education-tabs">

        {educationRoutes.map(
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