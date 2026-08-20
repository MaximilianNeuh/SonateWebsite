import { useState } from "react";
import { useUpcomingEvents, usePastEvents } from "../../hooks/useEvents";
import EventCard from "./EventCard";
import "./Events.css";

export default function EventsSection() {
  const upcoming = useUpcomingEvents();
  const past = usePastEvents();
  const [archivOffen, setArchivOffen] = useState(false);

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
        {upcoming.length === 0 ? (
          <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
            Aktuell keine Veranstaltungen geplant.
          </p>
        ) : (
          upcoming.map((event, i) => (
            <EventCard key={event.title} event={event} featured={i === 0} />
          ))
        )}
      </div>

      {past.length > 0 && (
        <div className="events-archive">
          <button
            type="button"
            className="archive-toggle"
            onClick={() => setArchivOffen((o) => !o)}
            aria-expanded={archivOffen}
          >
            {archivOffen ? "Archiv schließen" : `Archiv ansehen (${past.length})`}
          </button>

          {archivOffen && (
            <div className="events-grid archive-grid">
              {past.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
