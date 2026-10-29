import { Link } from "react-router-dom";
import BorderBeam from "../components/BorderBeam";
import PageHero from "../components/PageHero";
import { APP_URL, portfolios } from "../content";
import { usePageTitle } from "../usePageTitle";

/*
  What changed: Portfolios opens with a photo mosaic, then the deep chapters.
  Why: six jump chips plus six identical media rows felt thinner than home.
  The mosaic matches the home portfolio section; chapters keep the full copy.
  Related: Home.jsx, content.js, styles.css
*/

export default function Portfolios() {
  usePageTitle("Portfolios");

  return (
    <article className="page">
      <PageHero
        image="/media/made/mixed-use.jpg"
        alt="Shops at street level and rooms above"
        eyebrow="Property portfolio"
        title="The kinds of property the platform holds."
        lede="A centralized view across residential, single-family, multifamily, mixed-use, commercial, and industrial properties."
      />

      <div className="wrap">
        <div className="folio-grid">
          {portfolios.map((item, index) => (
            <a
              key={item.id}
              className="folio-card"
              href={`#${item.id}`}
              data-reveal
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <img src={item.image} alt={item.alt} />
              <span>
                <small>{item.number}</small>
                <strong>{item.title}</strong>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="band-head" data-reveal>
          <p className="pill">In detail</p>
          <h2>Each property type, one chapter.</h2>
        </div>
        <div className="stack">
          {portfolios.map((item) => (
            <section key={item.id} id={item.id} className="media-card" data-reveal>
              <div className="media-card-still">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="media-card-copy">
                <p className="index">{item.number}</p>
                <h2>{item.title}</h2>
                <p className="chapter-lede">{item.lede}</p>
                <p>{item.body}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <div className="offer page-offer">
          <BorderBeam />
          <div>
            <p className="pill pill-light">One desk for every building type</p>
            <h2>See the tools behind this portfolio view.</h2>
            <p>
              Properties, tenants, leases, rent, and maintenance stay in the
              same place across every kind of building.
            </p>
          </div>
          <div className="actions">
            <Link className="btn btn-light" to="/features">
              See the tools
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
