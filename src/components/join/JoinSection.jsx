import siteData from "../../data/site.json";
import MembershipTiers from "./MembershipTiers";
import ContactForm from "./ContactForm";
import "./Join.css";

export default function JoinSection() {
  return (
    <section id="mitmachen">
      <p className="section-eyebrow" style={{ color: "var(--gold)" }}>Mitmachen</p>
      <h2 className="section-title">
        Werden Sie Teil
        <br />
        unserer <em>Gemeinschaft</em>
      </h2>
      <div className="divider" />
      <div className="mitmachen-grid">
        <div>
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "rgba(245,240,232,0.55)",
              marginBottom: "1.75rem",
              lineHeight: 1.8,
            }}
          >
            {siteData.mitmachen_text}
          </p>
          <MembershipTiers />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
