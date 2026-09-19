import { useState, type FormEvent } from "react";
import { contact } from "../../data/contact";
import "./ContactForm.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That doesn't look like a valid email.";
  }
  if (!values.message.trim()) errors.message = "Let me know what you have in mind.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // No backend is wired up here on purpose. The form validates, then
    // opens a pre-filled email as a working default so it's useful out
    // of the box. To connect a real backend or email service (Formspree,
    // Resend, your own API route) later, replace this block with a
    // fetch() call — `values` is already exactly what you'd send.
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    setValues(initialState);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
        />
        {errors.name && (
          <p className="contact-form__error" id="cf-name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => handleChange("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
        />
        {errors.email && (
          <p className="contact-form__error" id="cf-email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
        />
        {errors.message && (
          <p className="contact-form__error" id="cf-message-error">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn--primary">
        Send message
      </button>

      <p className="contact-form__status mono" role="status" aria-live="polite">
        {status === "sent" ? "Your email client should be open — thanks for reaching out." : ""}
      </p>
    </form>
  );
}
