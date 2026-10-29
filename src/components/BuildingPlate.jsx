/*
  What changed: a transparent architectural plate, drawn in code.
  Why: premium property sites lay a line drawing over the page so a section
  is not only a photograph. This one echoes the logo: a simple building,
  navy lines, one orange window. No background, so it can sit on the film.
*/
export default function BuildingPlate() {
  return (
    <svg
      className="building-plate"
      viewBox="0 0 360 460"
      fill="none"
      aria-hidden="true"
    >
      <g className="plate-lines">
        <path d="M40 430 V150 L180 40 L320 150 V430" />
        <path d="M40 430 H320" />
        <path d="M110 430 V250 H250 V430" />
        <path d="M70 200 H150 M70 250 H150 M70 300 H150 M70 350 H150" />
        <path d="M210 200 H290 M210 250 H290 M210 300 H290" />
        <rect x="154" y="168" width="52" height="36" className="plate-window" />
      </g>
    </svg>
  );
}
