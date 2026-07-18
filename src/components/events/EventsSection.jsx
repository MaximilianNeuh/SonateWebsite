import { useEvents } from "../../hooks/useEvents";
import EventCard from "./EventCard";
import "./Events.css";

export default function EventsSection() {
  const events = useEvents();

  return (
    <section id="veranstaltungen">
      <div className="events-header">
        <div>
          <p className="section-eyebrow">Programm</p>
          <h2 className="section-title">
            Kommende <em>Veranstaltungen</em>
          </h2>
        </div>
      </div>
      <div className="events-grid">
        {events.length === 0 ? (
          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Aktuell keine Veranstaltungen geplant.</p>
        ) : (
          events.map((event, i) => <EventCard key={event.title} event={event} featured={i === 0} />)
        )}
      </div>
    </section>
  );
}
