import "./HeroBanner.css";

const bannerLayers = [
  {
    src: "/images/home/hm_banner_3_holder.png",
    className: "banner-holder",
  },
  {
    src: "https://admin.noorcapital.ae/media/images/hm_banner_2.original.png",
    className: "banner-elements slide-right delay-1",
  },
  {
    src: "https://admin.noorcapital.ae/media/images/hm_banner_2_1.original.png",
    className: "banner-elements slide-left delay-1",
  },
  {
    src: "https://admin.noorcapital.ae/media/images/hm_banner_2_2.original.png",
    className: "banner-elements zoom-element delay-2",
  },
  {
    src: "https://admin.noorcapital.ae/media/images/hm_banner_2_3.original.png",
    className: "banner-elements slide-right delay-3",
  },
  {
    src: "https://admin.noorcapital.ae/media/images/hm_banner_2_4.original.png",
    className: "banner-elements slide-top delay-4",
  },
  {
    src: "https://admin.noorcapital.ae/media/images/hm_banner_2_6.original.png",
    className: "banner-elements slide-left-2 delay-5",
  },
  {
    src: "https://admin.noorcapital.ae/media/images/hm_banner_2_7_Lk0G93a.original.png",
    className: "banner-elements slide-left delay-6",
  },
];

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-container">
        <div className="hero-grid">

          {/* LEFT */}
          <div className="banner-headings">
            <div className="hero-content">
              <h1>
                <span className="heading-line heading-left">
                  Maximize Your Potential
                </span>

                <span className="heading-line heading-right">
                  In Forex Trading
                </span>
              </h1>

              <div className="hero-features">
                <ul>
                  <li>Competitive Spreads</li>
                  <li>0% Commission</li>
                  <li>Swap-Free Account</li>
                </ul>
              </div>

              <div className="hero-actions">
                <a
                  href="/en/trading/mt4-platform"
                  className="hero-btn hero-btn-outline"
                >
                  Try a Demo
                </a>

                <a
                  href="https://mynoor.noorcap.ae/en/mynoor-v2/register"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-btn hero-btn-fill"
                >
                  Open Live Account
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="banner-image-screen">
            {bannerLayers.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={index === 0 ? "Forex trading" : ""}
                width="560"
                height="549"
                className={image.className}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}