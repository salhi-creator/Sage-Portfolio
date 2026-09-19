import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteMeta, siteConfig } from "../../data/siteConfig";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useActiveSection } from "../../hooks/useActiveSection";
import { scrollToId } from "../../utils/scroll";
import "./Navigation.css";

const SECTION_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experiments", label: "Experiments" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useActiveSection(SECTION_LINKS.map((l) => l.id));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(location.pathname);

  // Close the mobile menu whenever the route changes. Adjusting state
  // during render (rather than in an effect) avoids an extra paint.
  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleSectionClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      scrollToId(id);
      window.history.replaceState(null, "", `/#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  }

  return (
    <header className="nav">
      <div className="nav__inner container">
        <Link to="/" className="nav__brand mono" onClick={() => setMobileOpen(false)}>
          {siteMeta.brand.toUpperCase()}
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {SECTION_LINKS.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              className={activeSection === link.id ? "is-active" : ""}
              onClick={(event) => handleSectionClick(event, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__meta">
          {siteConfig.availability.open && (
            <span className="nav__status mono">
              <span className="status-dot" aria-hidden="true" />
              {siteConfig.availability.label}
            </span>
          )}
          <ThemeToggle />
          <button
            type="button"
            className="nav__menu-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`nav__mobile ${mobileOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile primary">
          {SECTION_LINKS.map((link) => (
            <a key={link.id} href={`/#${link.id}`} onClick={(event) => handleSectionClick(event, link.id)}>
              {link.label}
            </a>
          ))}
        </nav>
        {siteConfig.availability.open && (
          <span className="nav__status mono">
            <span className="status-dot" aria-hidden="true" />
            {siteConfig.availability.label}
          </span>
        )}
      </div>
    </header>
  );
}
