import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Download,
  FileText,
  type LucideIcon,
} from "lucide-react";
import { getProjectBySlug } from "../../data/projects";
import { Tag } from "../../components/ui/Tag";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { PlaceholderVisual } from "../../components/ui/PlaceholderVisual";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { siteMeta } from "../../data/siteConfig";
import { useState } from "react";
import { ImageLightbox } from "../../components/ImageScale/ImageLightbox";
import "./ProjectPage.css";

interface ProjectLink {
  href: string;
  label: string;
  Icon: LucideIcon;
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useDocumentMeta(
    project
      ? `${project.title} — ${siteMeta.brand}`
      : `Project not found — ${siteMeta.brand}`,
    project?.shortDescription,
  );

  if (!project) {
    return (
      <section className="section">
        <div className="container project-not-found">
          <h1 className="section-heading">Project not found</h1>
          <p>This one might have moved, or the URL isn't quite right.</p>
          <Link to="/work" className="btn btn--secondary">
            View all projects
          </Link>
        </div>
      </section>
    );
  }

  const links: ProjectLink[] = [
    project.liveDemo && {
      href: project.liveDemo,
      label: "Live demo",
      Icon: ArrowUpRight,
    },
    project.github && { href: project.github, label: "Source", Icon: Code2 },
    project.download && {
      href: project.download,
      label: "Download",
      Icon: Download,
    },
    project.documentation && {
      href: project.documentation,
      label: "Documentation",
      Icon: FileText,
    },
  ].filter((link): link is ProjectLink => Boolean(link));

  return (
    <article className="project-page">
      <ImageLightbox
        image={selectedImage}
        alt={project.title}
        onClose={() => setSelectedImage(null)}
      />
      <div className="background imageBG">


        <div className="background-overlay" />
      </div>
      <div className="container">
        <Link to="/work" className="project-page__back mono">
          <ArrowLeft size={14} strokeWidth={1.5} /> Back to work
        </Link>

        <header className="project-page__header">
          <div className="project-page__meta mono">
            <span>{project.category}</span>
            <span aria-hidden="true">/</span>
            <span>{project.year}</span>
          </div>
          <h1 className="project-page__title">{project.title}</h1>
          <p className="project-page__lede">{project.shortDescription}</p>

          <div className="project-page__facts">
            <StatusBadge status={project.status} />
            <ul className="project-page__tech" aria-label="Technologies used">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </div>

          {links.length > 0 && (
            <div className="project-page__links">
              {links.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--secondary btn--sm"
                >
                  <Icon size={14} strokeWidth={1.5} /> {label}
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="project-page__visual">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              onClick={() =>
                project?.image ? setSelectedImage(project.image) : null
              }
            />
          ) : (
            <PlaceholderVisual
              category={project.category}
              title={project.title}
            />
          )}
          {project?.Link && (
            <a
              target="_blank"
              style={{
                textDecoration: "underline",
                color: "blue",
                marginTop: "10px",
              }}
              href={project.Link}
            >
              {project.Link}
            </a>
          )}
        </div>

        <div className="project-page__body">
          <section className="project-page__block">
            <h2>Overview</h2>
            <p>{project.description}</p>
          </section>

          {project.motivation && (
            <section className="project-page__block">
              <h2>Why I built it</h2>
              <p>{project.motivation}</p>
            </section>
          )}

          {project.problem && (
            <section className="project-page__block">
              <h2>The problem</h2>
              <p>{project.problem}</p>
            </section>
          )}

          {project.solution && (
            <section className="project-page__block">
              <h2>The interesting part</h2>
              <p>{project.solution}</p>
            </section>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <section className="project-page__block">
              <h2>Challenges</h2>
              <ul className="project-page__list">
                {project.challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </section>
          )}

          {project.lessons && project.lessons.length > 0 && (
            <section className="project-page__block">
              <h2>What I learned</h2>
              <ul className="project-page__list">
                {project.lessons.map((lesson, i) => (
                  <li key={i}>{lesson}</li>
                ))}
              </ul>
            </section>
          )}

          {project.architecture && (
            <section className="project-page__block">
              <h2>Architecture</h2>
              <p>{project.architecture}</p>
            </section>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <section className="project-page__block">
              <h2>Gallery</h2>
              <div className="project-page__gallery">
                {project.gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    onClick={() => setSelectedImage(src)}
                  />
                ))}
              </div>
            </section>
          )}

          {project.metrics && project.metrics.length > 0 && (
            <section className="project-page__block">
              <h2>By the numbers</h2>
              <dl className="project-page__metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
