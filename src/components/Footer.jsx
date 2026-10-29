import { Link } from "react-router-dom";
import { company, footerNav } from "../content";

/*
  What changed: footer reads like the bottom of a letter, not a link dump.
  Why: the old footer social icons pointed nowhere, so they are not shown.
  The address, phone, and email are the real ways to reach the office.
*/
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-mark">WhatsLandlord</p>
          <p className="footer-tag">{company.tagline}</p>
          <p className="footer-note">
            A property management platform for owners, property managers,
            tenants, and property teams. One system for the day-to-day work.
          </p>
        </div>

        <div>
          <p className="footer-label">The office</p>
          <address>
            {company.street}
            <br />
            {company.city}
          </address>
          <p>
            <a href={company.phoneHref}>{company.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>

        <div>
          <p className="footer-label">On this site</p>
          <ul className="footer-links">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <p>Copyright © {new Date().getFullYear()} WhatsLandlord</p>
        <p>Manhasset, New York</p>
      </div>
    </footer>
  );
}
