import { contact } from "../../data/contact";
import { siteMeta } from "../../data/siteConfig";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import "./RedditTerms.css";

export function RedditTermsOfService() {
  useDocumentMeta(`SagePoster Terms of Service — ${siteMeta.brand}`, "Terms governing use of SagePoster for Reddit community management.");
  const emailLink = <a href={`mailto:${contact.email}`}>{contact.email}</a>;

  return (
    <article className="reddit-terms section">
      <div className="container reddit-terms__container">
        <p className="reddit-terms__eyebrow mono">SAGEPOSTER / TERMS</p>
        <h1 className="section-heading">Terms of Service</h1>
        <p className="reddit-terms__updated"><strong>Last updated:</strong> November 16, 2026</p>
        <p className="reddit-terms__intro">These Terms govern your use of SagePoster, a service that helps an authorized owner manage a Reddit community through Reddit’s Devvit platform and related external services. By using SagePoster, you agree to these Terms.</p>

        <section className="reddit-terms__section"><h2>1. What SagePoster does</h2>
          <p>SagePoster connects a Reddit community’s Devvit app to an external backend. It can retrieve community posts, comments, and rules; process Reddit activity events; schedule community-management tasks; and carry out enabled actions such as publishing posts, replying to comments, or removing content.</p>
          <p>SagePoster is intended for communities you own or are authorized to manage. You are responsible for choosing the community, enabling management features, and configuring the actions the service may perform.</p>
        </section>

        <section className="reddit-terms__section"><h2>2. Your responsibilities</h2>
          <p>You agree to:</p><ul>
            <li>Use SagePoster only with communities you own or have permission to manage.</li>
            <li>Follow Reddit’s User Agreement, Developer Terms, applicable Data API Terms, subreddit rules, and applicable laws.</li>
            <li>Keep your account credentials and service tokens secure.</li>
            <li>Review SagePoster’s settings and disable any management feature you no longer want.</li>
            <li>Ensure that any notices required for your community are provided to its members.</li>
          </ul><p>You remain responsible for content published or actions taken through your Reddit account or community.</p>
        </section>

        <section className="reddit-terms__section"><h2>3. Reddit data and external services</h2>
          <p>To provide its functions, SagePoster may receive Reddit post and comment IDs, titles and text, author names, timestamps, subreddit names, community rules, and action results. The Devvit app communicates with SagePoster’s backend over HTTPS to process requested operations.</p>
          <p>SagePoster may use external infrastructure providers to operate its backend, database, and queues. Reddit data is used to provide and maintain the requested community-management functions. SagePoster does not sell Reddit data or provide it as a general content feed.</p>
        </section>

        <section className="reddit-terms__section"><h2>4. Storage and deletion</h2>
          <p>SagePoster stores selected post and operational records in PostgreSQL and uses Redis for activity events, queues, and temporary operational data. Some processed Redis events are removed as they are handled; events awaiting processing or retry may remain in the stream.</p>
          <p>PostgreSQL records may remain until deleted by the community owner or under SagePoster’s data-retention process. For deletion requests or questions about stored data, contact {emailLink}.</p>
        </section>

        <section className="reddit-terms__section"><h2>5. Automated and scheduled actions</h2>
          <p>When enabled by the owner, SagePoster may process community events and schedule actions, including creating or publishing posts, replying to comments, and removing content that violates configured community rules. Scheduled actions may be delayed or fail because of service outages, Reddit API limits, or other technical issues.</p>
          <p>You can disable management features through the available controls or by contacting {emailLink}. Disabling a feature may not cancel actions already sent to Reddit or already in progress.</p>
        </section>

        <section className="reddit-terms__section"><h2>6. Availability and changes</h2>
          <p>SagePoster is provided subject to availability. Reddit or its service providers may change, limit, suspend, or discontinue APIs or platform features that SagePoster depends on. SagePoster may also change or suspend features to maintain the service or comply with applicable requirements.</p>
        </section>

        <section className="reddit-terms__section"><h2>7. Suspension and termination</h2>
          <p>You may stop using SagePoster at any time. SagePoster may suspend access if needed to address misuse, security issues, violations of these Terms, or changes to Reddit platform requirements.</p>
        </section>

        <section className="reddit-terms__section"><h2>8. Disclaimer and liability</h2>
          <p>SagePoster is provided “as is” and “as available,” to the extent permitted by law. To the extent permitted by law, SagePoster is not responsible for Reddit’s availability, API limits, moderation decisions, or actions taken by Reddit or its users. Nothing in these Terms limits rights or liabilities that cannot legally be limited.</p>
        </section>

        <section className="reddit-terms__section"><h2>9. Changes to these Terms</h2>
          <p>These Terms may be updated as SagePoster changes. The “Last updated” date will show when the latest version was published. Continued use after an update means you accept the revised Terms.</p>
        </section>

        <section className="reddit-terms__section"><h2>10. Contact</h2>
          <p>Questions about these Terms or SagePoster can be sent to {emailLink}.</p>
        </section>

        <p className="reddit-terms__source">Reddit’s Developer Terms and Data API Terms also apply to use of Reddit’s developer services; these Terms do not replace them. <a href="https://redditinc.com/policies/developer-terms" target="_blank" rel="noreferrer">Reddit Developer Terms</a> · <a href="https://redditinc.com/policies/data-api-terms" target="_blank" rel="noreferrer">Reddit Data API Terms</a></p>
      </div>
    </article>
  );
}
