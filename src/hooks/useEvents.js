const eventModules = import.meta.glob("../data/events/*.json", { eager: true });

const events = Object.values(eventModules)
  .map((mod) => mod.default)
  .sort((a, b) => a.datum.localeCompare(b.datum));

export function useEvents() {
  return events;
}
