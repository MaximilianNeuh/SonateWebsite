import siteData from "../../data/site.json";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-text" aria-hidden="true">Sonate</div>
      <p className="hero-eyebrow">{siteData.hero_eyebrow}</p>
      <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: siteData.hero_titel }} />
      <p className="hero-sub">{siteData.hero_text}</p>
      <div className="hero-actions">
        <a href="/#veranstaltungen" className="btn-primary">Veranstaltungen</a>
        <a href="/#mitmachen" className="btn-ghost">Mitglied werden</a>
      </div>
      <span className="hero-scroll" aria-hidden="true">Entdecken</span>
    </section>
  );
}
