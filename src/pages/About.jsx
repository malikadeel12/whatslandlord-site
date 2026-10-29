import { Link } from "react-router-dom";
import BorderBeam from "../components/BorderBeam";
import PageHero from "../components/PageHero";
import { APP_URL, company } from "../content";
import { usePageTitle } from "../usePageTitle";

/*
  What changed: About now has a clearer story band, a photo split, and the
  office on a navy shelf — still only facts already on the live site.
  Why: two thin text columns felt unfinished next to the redesigned home page.
  No founding year or team story was invented.
  Related: content.js, Contact.jsx, styles.css
*/

export default function About() {
  usePageTitle("About");

  return (
    <article className="page">
      <PageHero
        image="/media/nyc.jpg"
        alt="New York, where the office is based"
        eyebrow="About the company"
        title="Keeping owners and tenants happy."
        lede="WhatsLandlord is a property management platform. It gives owners, property managers, tenants, and property teams one centralized system for the work of running a property."
      />

      <section className="band">
        <div className="wrap">
          <article className="split" data-reveal>
            <div className="split-media">
              <img
                src="/media/multi.jpg"
                alt="A multifamily building the platform is built to manage"
              />
            </div>
            <div className="split-copy">
              <p className="pill">What the platform is for</p>
              <h2>One place for the property, the people, and the money.</h2>
              <p>
                Automate property management, simplify rent collection, and keep
                a complete view of the money. Properties, tenants, leases,
                maintenance, vendors, reports, and files sit in the same place.
              </p>
              <p>
                It is meant for portfolios of different sizes, from a single
                building to a wider set of residential, commercial, and
                industrial properties.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="band band-shelf">
        <div className="wrap about-office" data-reveal>
          <div>
            <p className="pill pill-light">Where we are</p>
            <h2>Manhasset, New York</h2>
            <p>
              The office is at {company.street}, {company.city}.
            </p>
            <div className="actions" style={{ marginTop: 18 }}>
              <a className="btn btn-light" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
              <a className="btn btn-line" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </div>
          </div>
          <div className="about-office-still">
            <img
              src="/media/made/single-family.jpg"
              alt="A shingle house, one of the property types on the platform"
            />
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="offer page-offer">
          <BorderBeam />
          <div>
            <p className="pill pill-light">Next step</p>
            <h2>Write to the office, or start the trial.</h2>
            <p>
              A person in Manhasset can pick up your note, or you can open the
              software and look for fourteen days.
            </p>
          </div>
          <div className="actions">
            <Link className="btn btn-light" to="/contact">
              Write to the office
            </Link>
            <a className="btn btn-line" href={APP_URL}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
