import { Link } from "react-router-dom";
import { usePageTitle } from "../usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");

  return (
    <article className="page">
      <header className="page-intro">
        <div className="wrap">
          <p className="eyebrow">
            <i aria-hidden="true" />
            Missing page
          </p>
          <h1>That page is not on this site.</h1>
          <p className="lede">
            The address may be old. The home page is the sure way back.
          </p>
          <Link className="btn" to="/">
            Back to the start
          </Link>
        </div>
      </header>
    </article>
  );
}
