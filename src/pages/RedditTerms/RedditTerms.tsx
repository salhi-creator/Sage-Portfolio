import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { siteMeta } from "../../data/siteConfig";
import { contact } from "../../data/contact";
import "./RedditTerms.css";

export function RedditTerms() {
  useDocumentMeta(`SagePoster Terms & Privacy — ${siteMeta.brand}`, "How SagePoster uses Reddit data to manage the community it serves.");

  return (
    <article className="reddit-terms section">
      <div className="container reddit-terms__container">
        <p className="reddit-terms__eyebrow mono">SAGEPOSTER / REDDIT</p>
        <h1 className="section-heading">Terms &amp; Privacy</h1>
        <p className="reddit-terms__intro">
          This page explains how SagePoster handles Reddit data while helping the owner manage and moderate the Reddit community they control.
        </p>

        <section className="reddit-terms__section">
          <h2>Purpose and external service</h2>
          <p>SagePoster helps the owner manage and moderate the Reddit community they control. The Devvit app receives Reddit activity events and sends the minimum required data to SagePoster’s backend so it can review community activity, prepare owner-authorized actions, and return those actions to Reddit through the Devvit app.</p>
          <p>The external backend is used for scheduling, processing events, keeping operational records, and coordinating actions. Devvit remains the connection to Reddit for retrieving Reddit content and rules, and for carrying out actions such as publishing posts, replying to comments, or removing content when the owner has enabled that function.</p>
        </section>

        <section className="reddit-terms__section">
          <h2>Data accessed and transmitted</h2>
          <p>Depending on the requested operation, the app may access or process subreddit names, post and comment IDs, post titles and text, comment text, authors, timestamps, subreddit rules, and action results. The Devvit app sends only the information needed for that operation to the SagePoster backend over HTTPS.</p>
        </section>

        <section className="reddit-terms__section">
          <h2>Storage and retention</h2>
          <p>SagePoster uses Redis for queued events and short-lived operational data, and PostgreSQL for selected records such as published posts, drafts, action history, and engagement status.</p>
          <p><strong>Retention and deletion:</strong> SagePoster stores selected Reddit post records and operational records in PostgreSQL. These records are retained until the community owner deletes them or SagePoster removes them under its data-retention process. Reddit activity events are processed through Redis; processed entries may be removed, while entries awaiting processing or retry may remain until resolved. To request deletion or ask questions about stored data, contact <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
          <p>Reddit content is not sold or made available as a general content feed. Access is limited to operating SagePoster and the community management functions described above.</p>
        </section>

        <section className="reddit-terms__section">
          <h2>Use and safeguards</h2>
          <p>SagePoster uses Reddit data only to operate the requested community-management functions. It does not use Reddit data for advertising, user profiling, surveillance, or unrelated purposes. The service uses access controls and HTTPS for requests between Devvit and the backend, and honors Reddit’s API limits and applicable policies.</p>
          <p>Actions that publish, reply, or remove content are limited to the configured community and the owner’s enabled management settings. The owner can disable community management, and the app checks those settings before carrying out owner-mode actions.</p>
        </section>

        <section className="reddit-terms__section">
          <h2>User notice and contact</h2>
          <p>The owner is responsible for ensuring that community members receive any notices required for the app’s operation. For questions or data requests, contact <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
        </section>

        <p className="reddit-terms__source">
          Related policies: <a href="https://redditinc.com/policies/developer-terms" target="_blank" rel="noreferrer">Reddit Developer Terms</a> · <a href="https://redditinc.com/policies/data-api-terms" target="_blank" rel="noreferrer">Reddit Data API Terms</a>
        </p>
      </div>
    </article>
  );
}
