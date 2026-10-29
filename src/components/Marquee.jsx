/*
  What changed: two copies of the strip are built separately.
  Why: one shared list placed twice can confuse React about which node is which.
  The motion is the Magic UI marquee idea: move the row by half its width, forever.
  Related: Home.jsx, styles.css
*/

export default function Marquee({ items }) {
  const row = (copy) =>
    items.map((item) => (
      <span className="marquee-item" key={`${copy}-${item}`} aria-hidden={copy === "b" || undefined}>
        {item}
      </span>
    ));

  return (
    <div className="marquee" aria-label={items.join(", ")}>
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
