import {
  productRoutes,
  productTabLabels,
} from "../productRoutes";

import "./ProductTabs.css";


export default function ProductTabs({
  language = "en",
  activeProduct,
  navigate,
}) {
  const labels =
    productTabLabels[
    language
    ] ||
    productTabLabels.en;


  function localUrl(
    path
  ) {
    return `/${language}/${path}`;
  }


  function handleLink(
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
    <div className="product-route-tabs-shell">

      <div className="product-route-tabs">

        {productRoutes.map(
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
                  activeProduct ===
                    item.key
                    ? "is-active"
                    : ""
                }

                onClick={(
                  event
                ) =>
                  handleLink(
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