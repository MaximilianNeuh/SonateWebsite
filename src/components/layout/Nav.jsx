import siteData from "../../data/site.json";
import "./Nav.css";

const LINKS = [
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#veranstaltungen", label: "Veranstaltungen" },
  { href: "/#mitmachen", label: "Mitmachen" },
  { href: "/#mitmachen", label: "Kontakt" },
];

export default function Nav() {
  return (
    <nav>
      <a href="/" className="nav-logo">
        <img src="/assets/logo.svg" alt={siteData.site_titel} style={{ height: 52, width: "auto", display: "block" }} />
      </a>
      <ul className="nav-links">
        {LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
