import { useState, type FormEvent } from "react";

import "./ContactForm.css";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That doesn't look like a valid email.";
  }

  if (!values.message.trim()) {
    errors.message = "Let me know what you have in mind.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear the error for this field as the user fixes it.
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("Missing VITE_WEB3FORMS_ACCESS_KEY environment variable.");

      setStatus("error");
      return;
    }

    setStatus("sending");

    const formData = new FormData();

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    // Optional: controls the subject you receive in your inbox.
    formData.append("subject", `Portfolio message from ${values.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setValues(initialState);
        setErrors({});
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to send contact form:", error);
      setStatus("error");
    }
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

      <button
        type="submit"
        className="btn btn--primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <p className="contact-form__status mono" role="status" aria-live="polite">
        {status === "sent" &&
          "Message sent successfully. Thanks for reaching out!"}

        {status === "error" && "Something went wrong. Please try again."}
      </p>
    </form>
  );
}
