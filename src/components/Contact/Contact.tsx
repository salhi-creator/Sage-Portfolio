import { Mail, Code2, Briefcase, Camera, type LucideIcon } from "lucide-react";
import { contact } from "../../data/contact";
import { ContactForm } from "./ContactForm";
import "./Contact.css";

interface ContactLink {
  key: string;
  href: string;
  label: string;
  Icon: LucideIcon;
  external: boolean;
}

const LINKS: ContactLink[] = [
  { key: "email", href: `mailto:${contact.email}`, label: contact.email, Icon: Mail, external: false },
  { key: "github", href: contact.github, label: "GitHub", Icon: Code2, external: true },
  { key: "linkedin", href: contact.linkedin, label: "LinkedIn", Icon: Briefcase, external: true },
  ...(contact.instagram
    ? [{ key: "instagram", href: contact.instagram, label: "Instagram", Icon: Camera, external: true }]
    : []),
].filter((link) => Boolean(link.href));

export function Contact() {
  return (
    <div className="contact">
      <ul className="contact__links">
        {LINKS.map(({ key, href, label, Icon, external }) => (
          <li key={key}>
            <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="contact__link">
              <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <ContactForm />
    </div>
  );
}
