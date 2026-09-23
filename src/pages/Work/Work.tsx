import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ProjectArchive } from "../../components/ProjectArchive/ProjectArchive";
import { projects } from "../../data/projects";
import { siteMeta } from "../../data/siteConfig";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import "./Work.css";

export function Work() {
  useDocumentMeta(
    `Work — ${siteMeta.brand}`,
    "The full project archive — mobile, web, backend, games, tools, and AI.",
  );

  return (
    <section className="section work-page">
      <div className="background imageBG">

        <div className="background-overlay" />
      </div>
      <div className="container">
        <Link to="/" className="work-page__back mono">
          <ArrowLeft size={14} strokeWidth={1.5} /> Back home
        </Link>

        <div className="section-intro">
          <div className="section-intro__title">
            <span className="eyebrow">Project index</span>
            <h1 className="section-heading">The full archive</h1>
          </div>
          <p className="section-intro__meta">
            Everything I've built, filtered however you'd like to browse it.
          </p>
        </div>

        <ProjectArchive projects={projects} showFilter />
      </div>
    </section>
  );
}
