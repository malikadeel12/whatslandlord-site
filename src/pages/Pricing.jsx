import { Link } from "react-router-dom";
import BorderBeam from "../components/BorderBeam";
import PageHero from "../components/PageHero";
import { APP_URL, company, plans, sharedTerms } from "../content";
import { usePageTitle } from "../usePageTitle";

/*
  What changed: Pricing keeps the three real plans, then adds a short why-this
  price band and a closing office CTA.
  Why: the page stopped after three cards and felt unfinished next to home.
  Business rule: trial, $120 a year, or $15 a month. No new prices.
  Related: Home.jsx, content.js, styles.css
*/

export default function Pricing() {
  usePageTitle("Pricing");

  return (
    <article className="page">
      <PageHero
        image="/media/made/pay-ease.jpg"
        alt="A card and a key, the simple way to pay"
        eyebrow="Simple company, simple price"
        title="One platform. Three ways to start."
        lede="Unlimited properties, buildings, and units on every plan. No contracts. Subscriber companies can still configure plans, pricing structures, and new offers."
      />

      <div className="wrap">
        <ul className="term-pills" data-reveal>
          {sharedTerms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>

        <div className="sheet" data-reveal>
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={plan.emphasized ? "plan is-year" : "plan"}
            >
              <p className="plan-name">{plan.name}</p>
              <p className="plan-price">
                <strong>{plan.price}</strong>
                <span>{plan.cadence}</span>
              </p>
              <p className="plan-note">{plan.note}</p>
              <a className="btn btn-small" href={APP_URL}>
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>

      <section className="band">
        <div className="wrap">
          <div className="price-notes" data-reveal>
            <article>
              <h2>No contracts.</h2>
              <p>
                Pay as you go. The trial, the yearly plan, and the month-to-month
                plan all stay free of contracts or hidden fees.
              </p>
            </article>
            <article>
              <h2>Unlimited on every plan.</h2>
              <p>
                Properties, buildings, and units are not capped. The same desk
                works for a single building or a wider portfolio.
              </p>
            </article>
            <article>
              <h2>Tenants pay their way.</h2>
              <p>
                E-check, credit card, debit card, Zelle, and Cash App. Talk by
                phone, SMS, email, or WhatsApp.
              </p>
            </article>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="offer page-offer">
          <BorderBeam />
          <div>
            <p className="pill pill-light">Questions about the price</p>
            <h2>Talk to the Manhasset office.</h2>
            <p>
              Call {company.phoneDisplay}, or write to {company.email}. A person
              can pick it up from there.
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
