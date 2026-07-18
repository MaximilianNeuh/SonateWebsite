import siteData from "../../data/site.json";
import Pillar from "./Pillar";
import "./About.css";

const PILLARS = [
  { label: "Musik", text: "Konzerte, Workshops und musikalische Bildung für alle Altersgruppen." },
  { label: "Bildung", text: "Kulturelle Bildungsarbeit mit Kindern, Jugendlichen und Erwachsenen." },
  { label: "Vielfalt", text: "Interkulturelle Projekte, die Toleranz und Verständigung fördern." },
  { label: "Community", text: "Vernetzung von Künstler·innen und Kulturschaffenden in der Region." },
];

export default function About() {
  const paragraphs = siteData.ueber_uns_text.split("\n\n");

  return (
    <section id="ueber-uns">
      <p className="section-eyebrow">Über uns</p>
      <h2 className="section-title">
        Ein Ort für <em>Kultur</em>
        <br />
        und Gemeinschaft
      </h2>
      <div className="divider" />
      <div className="about-grid">
        <div>
          <p className="about-lead">{siteData.ueber_uns_lead}</p>
          <div className="pillars">
            {PILLARS.map((pillar) => (
              <Pillar key={pillar.label} {...pillar} />
            ))}
          </div>
        </div>
        <div className="about-body">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
