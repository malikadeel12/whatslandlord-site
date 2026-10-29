import { Link } from "react-router-dom";
import BorderBeam from "../components/BorderBeam";
import PageHero from "../components/PageHero";
import { APP_URL, features } from "../content";
import { usePageTitle } from "../usePageTitle";

/*
  What changed: Features no longer repeats ten identical left-right rows.
  Why: that stack felt older than the home page. The four main jobs open as a
  bento, the other six sit as tiles, then each feature still has a deep row
  for hash links like /features#maintenance.
  Related: Home.jsx, content.js, styles.css
*/

const lead = features.slice(0, 4);
const rest = features.slice(4);

export default function Features() {
  usePageTitle("Features");

  return (
    <article className="page">
      <PageHero
        image="/media/made/reports-model.jpg"
        alt="A model of several properties seen in one view"
        eyebrow="The platform"
        title="Powerful features. Owners and tenants, both in mind."
        lede="Manage the property, the people, the lease, the money, and the paperwork from one centralized platform."
      />

      <div className="wrap">
        <div className="band-head" data-reveal>
          <p className="pill">The main desk</p>
          <h2>Four jobs that run every day.</h2>
        </div>
        <div className="bento">
          {lead.map((item, index) => (
            <a
              key={item.id}
              className="bento-card"
              href={`#${item.id}`}
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <img src={item.image} alt={item.alt} />
              <span className="bento-copy">
                <small>{item.kicker}</small>
                <strong>{item.title}</strong>
                <em>{item.summary}</em>
              </span>
            </a>
          ))}
        </div>
      </div>

      <section className="band band-shelf">
        <div className="wrap">
          <div className="band-head band-head-light" data-reveal>
            <p className="pill pill-light">Also on the desk</p>
            <h2>Leases, reports, messages, and the files.</h2>
          </div>
          <div className="feature-grid">
            {rest.map((item, index) => (
              <a
                key={item.id}
                className="feature-tile"
                href={`#${item.id}`}
                data-reveal
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img src={item.image} alt="" />
                <span>
                  <small>{item.number}</small>
                  <strong>{item.title}</strong>
                  <em>{item.summary}</em>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="band-head" data-reveal>
          <p className="pill">In detail</p>
          <h2>Every feature, one by one.</h2>
        </div>
        <ol className="stack">
          {features.map((item) => (
            <li key={item.id} id={item.id} className="media-card" data-reveal>
              <div className="media-card-still">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="media-card-copy">
                <p className="index">{item.number}</p>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="offer page-offer">
          <BorderBeam />
          <div>
            <p className="pill pill-light">Ready when you are</p>
            <h2>Start the trial, or see the three ways to pay.</h2>
            <p>
              Unlimited properties, buildings, and units. A 14-day look first if
              you want.
            </p>
          </div>
          <div className="actions">
            <a className="btn btn-light" href={APP_URL}>
              Get Started
            </a>
            <Link className="btn btn-line" to="/pricing">
              See the price
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
