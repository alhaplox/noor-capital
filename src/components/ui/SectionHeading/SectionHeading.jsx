import "./SectionHeading.css";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}) {
  return (
    <div
      className={`section-heading ${centered ? "section-heading-centered" : ""
        }`}
    >
      {eyebrow && (
        <p className="section-eyebrow">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className="section-title">
          {title}
        </h2>
      )}

      {text && (
        <p className="section-description">
          {text}
        </p>
      )}
    </div>
  );
}