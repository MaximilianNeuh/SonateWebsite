const eventModules = import.meta.glob("../data/events/*.json", { eager: true });

const events = Object.values(eventModules)
  .map((mod) => mod.default)
  .sort((a, b) => a.datum.localeCompare(b.datum));

function heute() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const t = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${t}`;
}

export function useEvents() {
  return events;
}

// Kommende: alles ab heute – plus Termine, deren Datum noch offen ist
// (erkennbar an datum_anzeige), damit geplante Projekte nicht ins Archiv rutschen.
export function useUpcomingEvents() {
  const stichtag = heute();
  return events.filter((e) => e.datum_anzeige || e.datum >= stichtag);
}

// Archiv: neueste zuerst
export function usePastEvents() {
  const stichtag = heute();
  return events
    .filter((e) => !e.datum_anzeige && e.datum < stichtag)
    .sort((a, b) => b.datum.localeCompare(a.datum));
}
