import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "../../components/Hero/Hero";
import { ProjectArchive } from "../../components/ProjectArchive/ProjectArchive";
import { ExperimentCard } from "../../components/ExperimentCard/ExperimentCard";
import { Timeline } from "../../components/Timeline/Timeline";
import { TechStack } from "../../components/TechStack/TechStack";
import { CurrentlyExploring } from "../../components/CurrentlyExploring/CurrentlyExploring";
import { Contact } from "../../components/Contact/Contact";
import { projects } from "../../data/projects";
import { experiments } from "../../data/experiments";
import { siteMeta } from "../../data/siteConfig";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { scrollToId } from "../../utils/scroll";
import "./Home.css";

export function Home() {
  useDocumentMeta(siteMeta.title, siteMeta.description);
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    // Small delay lets the layout settle before we measure scroll position.
    const timeout = setTimeout(() => scrollToId(id), 60);
    return () => clearTimeout(timeout);
  }, [location.hash]);

  return (
    <>
      <div className="background">

        <div className="background-overlay" />
      </div>
      <Hero />

      <section className="section text-section">
        <div className="container text-section__grid">
          <h2 className="section-heading">A little context</h2>
          <div className="text-section__body">
            <p>
              I started learning computer science because I wanted to understand
              what was happening underneath the things I used every day.
            </p>
            <p>
              Since then, I've ended up building everything from mobile
              applications and backend systems to developer tools and small
              games.
            </p>
            <p>
              I don't like staying inside one ecosystem for too long. If
              something interests me, I usually end up taking it apart, figuring
              out how it works, and trying to build my own version.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <div className="section-intro">
            <div className="section-intro__title">
              <span className="eyebrow">Project index</span>
              <h2 className="section-heading">What I'm building</h2>
            </div>
            <p className="section-intro__meta">
              A selection of what I've shipped, broken, and rebuilt — across
              mobile, web, backend, and games.
            </p>
          </div>

          <ProjectArchive projects={projects} limit={2} />

          <div className="section-footer-action">
            <Link to="/work" className="btn btn--secondary">
              View full archive <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <section id="experiments" className="section">
        <div className="container">
          <div className="section-intro">
            <div className="section-intro__title">
              <span className="eyebrow">Running log</span>
              <h2 className="section-heading">Experiments</h2>
            </div>
            <p className="section-intro__meta">
              Smaller things built while learning — not every idea needs a full
              project page.
            </p>
          </div>

          <div className="experiments-grid">
            {experiments.map((experiment) => (
              <ExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">The build log</h2>
          <div className="section-body-offset">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Building with</h2>
          <div className="section-body-offset">
            <TechStack />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <h2 className="section-heading">Currently exploring</h2>
          <div className="section-body-offset">
            <CurrentlyExploring />
          </div>
        </div>
      </section>

      <section id="about" className="section text-section">
        <div className="container text-section__grid">
          <h2 className="section-heading">Behind the code</h2>
          <div className="text-section__body">
            <p>
              I'm a computer science student who spends a lot of time outside of
              coursework building things on my own — partly to learn faster than
              a syllabus allows, and partly because I like seeing an idea turn
              into something that actually runs.
            </p>
            <p>
              I don't have a specialty I'd point to, and I'm not trying to force
              one. I'm still learning most of what I work with, and I'd rather
              be upfront about that than pretend otherwise. What stays
              consistent is curiosity about how things work, and the habit of
              taking something apart to find out.
            </p>
          </div>
        </div>
      </section>

      <section className="section philosophy">
        <div className="container philosophy__inner">
          <p className="philosophy__statement">I learn best by building.</p>
          <p className="philosophy__support">
            Tutorials can explain how something works. Building it myself forces
            me to understand why.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-heading">Let's build something.</h2>
          <p className="contact-intro">
            Have an interesting idea, project, collaboration, or simply want to
            talk about development? Send me a message.
          </p>
          <div className="section-body-offset">
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
}
