import { siteMeta } from "../../data/siteConfig";
import { Link } from "react-router-dom";
import { contact } from "../../data/contact";
import "./Footer.css";

const YEAR = new Date().getFullYear();

const FOOTER_LINKS = [
  { key: "github", href: contact.github, label: "GitHub" },
  { key: "linkedin", href: contact.linkedin, label: "LinkedIn" },
  ...(contact.instagram ? [{ key: "instagram", href: contact.instagram, label: "Instagram" }] : []),
  { key: "email", href: `mailto:${contact.email}`, label: "Email" },
].filter((link) => Boolean(link.href));

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <p className="footer__brand mono">{siteMeta.brand.toUpperCase()}</p>
          <p className="footer__tagline">Building things. Learning things. Breaking things.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <Link to="/reddit-terms">SagePoster terms &amp; privacy</Link>
          <Link to="/reddit-terms-of-service">SagePoster Terms of Service</Link>
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target={link.key === "email" ? undefined : "_blank"}
              rel={link.key === "email" ? undefined : "noreferrer"}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__copyright mono">© {YEAR}</p>
      </div>
    </footer>
  );
}
