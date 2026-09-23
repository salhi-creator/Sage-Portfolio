import { NodeNetwork } from "../NodeNetwork/NodeNetwork";
import { SystemPanel } from "../SystemPanel/SystemPanel";
import { scrollToId } from "../../utils/scroll";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        {/* Main introduction */}
        <div className="hero__content">
          {/* Profile */}
          <div className="hero__profile">
            <div className="hero__profile-image">
              <img src="/me.jpg" alt="Profile" />
            </div>

            <div className="hero__profile-info">
              <span className="hero__role hero__role--name">
                Salhi akim 
              </span>
              <span className="hero__role hero__role--primary">
                Software Developer
              </span>

              <span className="hero__role hero__role--secondary">
                Mobile Applications
              </span>

              <span className="hero__role hero__role--tertiary">
                Backend Systems
              </span>
            </div>
          </div>
          <h1 className="hero__title">
            I build systems, applications, and tools that solve real problems.
          </h1>

          <div className="hero__actions">
            <a
              href="/#work"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("work");
              }}
            >
              View the work
            </a>

            <a
              href="/#contact"
              className="btn btn--secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Technical visual */}
        <div className="hero__visual">
          <NodeNetwork />
          <SystemPanel />
        </div>
      </div>
    </section>
  );
}
