import siteData from "../../data/site.json";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <img src="/assets/logo.svg" alt={siteData.site_titel} style={{ height: 64, width: "auto", opacity: 0.75 }} />
      <div className="footer-meta">
        <p>
          Halle (Saale) &nbsp;·&nbsp; <a href={`mailto:${siteData.kontakt_email}`}>{siteData.kontakt_email}</a>
        </p>
        <p style={{ marginTop: "0.3rem" }}>
          <a href="/impressum">Impressum</a> &nbsp;·&nbsp; <a href="#">Datenschutz</a>
        </p>
      </div>
    </footer>
  );
}
