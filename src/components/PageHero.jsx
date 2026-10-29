import BuildingPlate from "./BuildingPlate";

/*
  What changed: inner-page heroes are now a full-bleed photo stage, not a
  side-by-side text + rounded card.
  Why: the old intro used the same shape as the media cards below it, so the
  top of every page looked like another content section. A cinematic stage
  makes the hero feel like an opening, and the white sections feel like the
  body of the page.
  Related: every public page, styles.css, BuildingPlate.jsx
*/

export default function PageHero({ image, alt, eyebrow, title, lede, children }) {
  return (
    <header className="stage-hero">
      <div className="stage-hero-media" aria-hidden={!alt}>
        <img src={image} alt={alt || ""} />
        <div className="stage-hero-shade" />
      </div>

      <div className="wrap stage-hero-copy">
        <p className="pill pill-light">{eyebrow}</p>
        <h1>{title}</h1>
        {lede ? <p className="stage-hero-lede">{lede}</p> : null}
        {children}
      </div>

      <div className="stage-hero-plate" aria-hidden="true">
        <BuildingPlate />
      </div>
    </header>
  );
}
