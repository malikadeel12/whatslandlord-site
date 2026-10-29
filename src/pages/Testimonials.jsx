import { Link } from "react-router-dom";
import BorderBeam from "../components/BorderBeam";
import PageHero from "../components/PageHero";
import { APP_URL, testimonials } from "../content";
import { usePageTitle } from "../usePageTitle";

/*
  What changed: the first client note is a dark stage like home; the rest stay
  as readable cards. A closing CTA was added.
  Why: a flat grid of white quote boxes looked quieter than the rest of the site.
  Roles are kept. No fake names or faces were added.
  Related: Home.jsx, content.js, styles.css
*/

export default function Testimonials() {
  usePageTitle("Testimonials");
  const [lead, ...rest] = testimonials;

  return (
    <article className="page">
      <PageHero
        image="/media/made/tenant-hands.jpg"
        alt="A folder and a key, the work clients describe"
        eyebrow="Client notes"
        title="What owners and teams say about the day to day."
        lede="From property owners, management teams, and the people running operations. The same work: stay organized, see the portfolio, keep things moving."
      />

      <div className="wrap">
        <figure className="statement" data-reveal>
          <div className="statement-copy">
            <span className="statement-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              <p>{lead.quote}</p>
            </blockquote>
            {lead.role ? <figcaption>{lead.role}</figcaption> : null}
          </div>
          <div className="statement-still">
            <img
              src="/media/lounge.jpg"
              alt="A quiet meeting room above the city"
            />
          </div>
        </figure>

        <div className="quotes">
          {rest.map((item) => (
            <figure key={item.quote} className="quote" data-reveal>
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              {item.role ? <figcaption>{item.role}</figcaption> : null}
            </figure>
          ))}
        </div>

        <div className="offer page-offer">
          <BorderBeam />
          <div>
            <p className="pill pill-light">See the desk yourself</p>
            <h2>Start the 14-day trial when you are ready.</h2>
            <p>
              Or write to the office if you want a person to walk you through it.
            </p>
          </div>
          <div className="actions">
            <a className="btn btn-light" href={APP_URL}>
              Get Started
            </a>
            <Link className="btn btn-line" to="/contact">
              Contact the office
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
