import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { APP_URL, nav } from "../content";

/*
  What changed: top nav matches desktop and mobile (About included once).
  Why: client asked for simple, consistent navigation for less tech-savvy users.
  Related: content.js nav, styles.css
*/
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile list whenever the reader moves to another page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // A hairline appears only after the page has moved, so the top stays quiet.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="header-bar">
        <Link to="/" className="logo" aria-label="WhatsLandlord home">
          <img
            src="/brand/logo.png"
            alt="WhatsLandlord. Keeping owners and tenants happy."
          />
        </Link>

        <nav className="desk-nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className="nav-link">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a className="login-link" href={APP_URL}>
            Login
          </a>
          <a className="btn btn-small btn-orange" href={APP_URL}>
            Get Started
          </a>
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className="nav-link">
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
