import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import BorderBeam from "../components/BorderBeam";
import PageHero from "../components/PageHero";
import { APP_URL, company } from "../content";
import { usePageTitle } from "../usePageTitle";

/*
  What changed: a map of the Manhasset office fills the empty space in the left
  contact panel so that column matches the form height.
  Why: phone, email, and address left a short card next to a tall form.
  The map uses the real office address already in content.js. No API key.
  Related: content.js, styles.css
*/

const officeQuery = encodeURIComponent(`${company.street}, ${company.city}`);
const officeMapSrc = `https://maps.google.com/maps?q=${officeQuery}&z=15&output=embed`;

export default function Contact() {
  usePageTitle("Contact");
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  function sendMessage(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setReady(false);
      setError("Please add your name, email, and a short message.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setReady(false);
      setError("That email does not look complete.");
      return;
    }

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not given"}\n\n${message}`
    );
    setError("");
    setReady(true);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <article className="page">
      <PageHero
        image="/media/made/comms-phone.jpg"
        alt="A telephone and a note, the way to reach the office"
        eyebrow="The office"
        title="We would like to hear from you."
        lede="Call, email, or send a note about your properties. A person at the Manhasset office can pick it up from there."
      />

      <div className="wrap contact-grid">
        <div className="contact-facts" data-reveal>
          <a className="fact" href={company.phoneHref}>
            <Phone size={20} strokeWidth={1.75} aria-hidden="true" />
            <span>
              <small>Call</small>
              {company.phoneDisplay}
            </span>
          </a>
          <a className="fact" href={`mailto:${company.email}`}>
            <Mail size={20} strokeWidth={1.75} aria-hidden="true" />
            <span>
              <small>Email</small>
              {company.email}
            </span>
          </a>
          <p className="fact">
            <MapPin size={20} strokeWidth={1.75} aria-hidden="true" />
            <span>
              <small>Visit</small>
              {company.street}
              <br />
              {company.city}
            </span>
          </p>

          {/* Fills the leftover height so the left panel matches the form. */}
          <div className="contact-map">
            <iframe
              title={`Map of ${company.street}, ${company.city}`}
              src={officeMapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <form className="letter" onSubmit={sendMessage} noValidate data-reveal>
          <p className="form-help">
            This opens your email app with the message ready. Nothing is stored
            on this website.
          </p>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Phone <span className="optional">optional</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            Message
            <textarea name="message" rows={6} />
          </label>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          {ready && (
            <p className="form-ok" role="status">
              Your email app should open now. If it does not, call or email the
              office directly.
            </p>
          )}
          <button className="btn btn-glow" type="submit">
            Send message
          </button>
        </form>
      </div>

      <div className="wrap">
        <div className="offer page-offer">
          <BorderBeam />
          <div>
            <p className="pill pill-light">Prefer to look first</p>
            <h2>Start the 14-day trial anytime.</h2>
            <p>
              Or open the pricing page if you want to compare the three ways to
              pay before you write.
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
