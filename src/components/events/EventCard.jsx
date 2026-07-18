import { formatDateDE } from "../../utils/formatDate";

export default function EventCard({ event, featured }) {
  return (
    <div className={`event-card${featured ? " featured" : ""}`}>
      <p className="event-date">
        {formatDateDE(event.datum)} &nbsp;·&nbsp; {event.uhrzeit} Uhr
      </p>
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
