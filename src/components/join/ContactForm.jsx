import { useContactForm } from "../../hooks/useContactForm";

export default function ContactForm() {
  const { values, status, STATUS, handleChange, handleSubmit } = useContactForm();

  return (
    <div>
      <p
        style={{
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(245,240,232,0.35)",
          marginBottom: "1.25rem",
        }}
      >
        Schreiben Sie uns
      </p>
      <form
        className="contact-form"
        name="kontakt"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="kontakt" />
        <p style={{ display: "none" }}>
          <label>
            Nicht ausfüllen: <input name="bot-field" />
          </label>
        </p>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Ihr Name" value={values.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" name="email" placeholder="ihre@email.de" value={values.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Nachricht</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Wie können wir helfen?"
            value={values.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
          style={{ alignSelf: "flex-start" }}
          disabled={status === STATUS.SENDING}
        >
          {status === STATUS.SENDING ? "Wird gesendet…" : "Absenden"}
        </button>
        {status === STATUS.SUCCESS && (
          <p style={{ fontSize: "0.85rem", color: "var(--gold-lt)", marginTop: "0.5rem" }}>
            ✓ Vielen Dank – wir melden uns bald bei Ihnen.
          </p>
        )}
        {status === STATUS.ERROR && (
          <p style={{ fontSize: "0.85rem", color: "#e07070", marginTop: "0.5rem" }}>
            Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
          </p>
        )}
      </form>
    </div>
  );
}
