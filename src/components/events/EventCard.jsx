import { formatDateDE } from "../../utils/formatDate";

export default function EventCard({ event, featured }) {
  const dateLine = event.datum_anzeige
    ? event.datum_anzeige
    : `${formatDateDE(event.datum)}${event.uhrzeit ? ` · ${event.uhrzeit} Uhr` : ""}`;

  return (
    <div className={`event-card${featured ? " featured" : ""}`}>
      <p className="event-date">{dateLine}</p>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-desc">{event.beschreibung}</p>
      <div className="event-meta">
        <span className="event-tag">{event.kategorie}</span>
        {event.ort && <span>{event.ort}</span>}
        {event.eintritt && <span>{event.eintritt}</span>}
      </div>
    </div>
  );
}
