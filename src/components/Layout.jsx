import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/*
  What changed: one shell wraps every public page.
  Why: header, footer, and the skip link must behave the same everywhere.
  Related: Header.jsx, Footer.jsx, styles.css
*/
export default function Layout() {
  const { pathname, hash } = useLocation();

  // A new page starts at the top. A link like /features#rent should land on that row,
  // not get pulled back to the top by the page change.
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
    const main = document.getElementById("content");
    if (main) main.focus();
  }, [pathname, hash]);

  // Sections marked data-reveal ease in once, the same way on every page.
  // If the reader prefers less motion, they appear immediately.
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-in"));
      return;
    }
    const watcher = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          watcher.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((node) => watcher.observe(node));
    // If the observer never fires, the words must still be readable.
    const failsafe = window.setTimeout(() => {
      nodes.forEach((node) => node.classList.add("is-in"));
    }, 1400);
    return () => {
      watcher.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
