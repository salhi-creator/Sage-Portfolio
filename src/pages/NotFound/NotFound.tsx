import { Link } from "react-router-dom";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { siteMeta } from "../../data/siteConfig";
import "./NotFound.css";

export function NotFound() {
  useDocumentMeta(`Page not found — ${siteMeta.brand}`);

  return (
    <section className="section not-found">
      <div className="container not-found__inner">
        <p className="not-found__code mono">404</p>
        <h1 className="section-heading">This page doesn't exist yet.</h1>
        <p className="not-found__text">Maybe it's still being built.</p>
        <Link to="/" className="btn btn--primary">
          Back home
        </Link>
      </div>
    </section>
  );
}
