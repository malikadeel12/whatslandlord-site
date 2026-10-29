/*
  What changed: a light that walks the edge of a framed block.
  Why: premium product sites use a moving edge highlight so a section feels
  alive without needing a new photograph. Brand colors only: orange into blue.
  Adapted from Magic UI Border Beam as plain CSS, no motion library.
  Related: Home.jsx, styles.css
*/

export default function BorderBeam() {
  return <span className="border-beam" aria-hidden="true" />;
}
