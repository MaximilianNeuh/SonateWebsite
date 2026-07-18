export default function Pillar({ label, text }) {
  return (
    <div className="pillar">
      <p className="pillar-label">{label}</p>
      <p className="pillar-text">{text}</p>
    </div>
  );
}
