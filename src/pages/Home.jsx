import { Link } from "react-router-dom";
import BorderBeam from "../components/BorderBeam";
import BuildingPlate from "../components/BuildingPlate";
import Marquee from "../components/Marquee";
import { APP_URL, features, testimonials } from "../content";
import { usePageTitle } from "../usePageTitle";

/*
  What changed: home hero is a split — words on the left, film in its own frame.
  Why: text painted on the video was heavy and hid the home. Inner pages keep
  the full-bleed stage; home needs the film to stay clear.
  Related: styles.css, BuildingPlate.jsx, BorderBeam.jsx
*/

const lead = features.slice(0, 4);
const rest = features.slice(4);

const strip = [
  "E-check",
  "Credit card",
  "Debit card",
  "Zelle",
  "Cash App",
  "Phone",
  "SMS",
  "Email",
  "WhatsApp",
];

export default function Home() {
  usePageTitle("");
  const leadQuote = testimonials[3];

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-wash" aria-hidden="true" />
        <div className="wrap home-hero-grid">
          <div className="home-hero-copy">
            <p className="pill">Manhasset, New York</p>
            <h1>
              Property management made simple,{" "}
              <em>smart, and efficient.</em>
            </h1>
            <p className="ai-line">Powered by human-predictive AI teams.</p>
            <p className="lede">
              Use one centralized platform to automate property management,
              simplify rent collection, and gain complete financial visibility.
              The aim is to keep both owners and tenants happy.
            </p>
            <div className="actions">
              <a className="btn btn-glow" href={APP_URL}>
                Get Started
              </a>
              <Link className="btn btn-ghost" to="/pricing">
                See the price
              </Link>
            </div>
            <p className="hero-facts">
              <span>14-day free trial</span>
              <span>$10 a month when paid yearly</span>
              <span>$15 month to month</span>
              <span>No contracts</span>
            </p>
          </div>

          <div className="home-hero-stage">
            <div className="home-hero-film">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/media/apt.jpg"
              >
                <source src="/media/hero.mp4" type="video/mp4" />
              </video>
              <div className="home-hero-plate" aria-hidden="true">
                <BuildingPlate />
              </div>
              <BorderBeam />
            </div>
          </div>
        </div>
      </section>

      <Marquee items={strip} />

      <section className="band">
        <div className="wrap">
          <div className="band-head" data-reveal>
            <p className="pill">Inside the platform</p>
            <h2>The work, shown as it actually looks.</h2>
          </div>
          <div className="bento">
            {lead.map((item, index) => (
              <Link
                key={item.id}
                className="bento-card"
                to={`/features#${item.id}`}
                data-reveal
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <img src={item.image} alt={item.alt} />
                <span className="bento-copy">
                  <small>{item.kicker}</small>
                  <strong>{item.title}</strong>
                  <em>{item.summary}</em>
                </span>
              </Link>
            ))}
          </div>
          <p className="band-more">
            <Link to="/features">See all ten features</Link>
          </p>
        </div>
      </section>

      <section className="band band-shelf">
        <div className="wrap">
          <div className="band-head band-head-light" data-reveal>
            <p className="pill pill-light">Also in the platform</p>
            <h2>Leases, reports, messages, and the files.</h2>
          </div>
          <div className="feature-grid">
            {rest.map((item, index) => (
              <Link
                key={item.id}
                className="feature-tile"
                to={`/features#${item.id}`}
                data-reveal
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img src={item.image} alt="" />
                <span>
                  <small>{item.number}</small>
                  <strong>{item.title}</strong>
                  <em>{item.summary}</em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <article className="split" data-reveal>
            <div className="split-media">
              <img
                src="/media/made/single-family.jpg"
                alt="A shingle house with a porch, the owner's side"
              />
            </div>
            <div className="split-copy">
              <p className="pill">Owners</p>
              <h2>A clear desk for the people who run the property.</h2>
              <p>
                Owners and property managers keep properties, tenants, leases,
                rent, and maintenance together, with a view across the whole
                portfolio.
              </p>
            </div>
          </article>
          <article className="split split-flip" data-reveal>
            <div className="split-media">
              <img src="/media/living.jpg" alt="The inside of a rented home" />
            </div>
            <div className="split-copy">
              <p className="pill">Tenants</p>
              <h2>A straightforward way to pay and to be heard.</h2>
              <p>
                Tenants can pay by e-check, credit card, debit card, Zelle, or
                Cash App. Conversations can happen by phone, SMS, email, or
                WhatsApp.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="band band-quote">
        <div className="wrap">
          <figure className="statement" data-reveal>
            <div className="statement-copy">
              <span className="statement-mark" aria-hidden="true">
                “
              </span>
              <blockquote>
                <p>{leadQuote.quote}</p>
              </blockquote>
              <figcaption>
                <span>{leadQuote.role}</span>
                <Link to="/testimonials">All client notes</Link>
              </figcaption>
            </div>
            <div className="statement-still">
              <img
                src="/media/lounge.jpg"
                alt="A quiet meeting room above the city"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="band band-end">
        <div className="wrap">
          <div className="offer">
            <BorderBeam />
            <div>
              <p className="pill pill-light">Ready when you are</p>
              <h2>Start the trial, or talk to the Manhasset office.</h2>
              <p>
                A 14-day look first. Or call, email, or write — a person at the
                office can pick it up from there.
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
      </section>
    </>
  );
}
