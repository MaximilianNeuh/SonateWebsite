const TIERS = [
  { name: "Fördermitglied", desc: "Finanzielle Unterstützung, kein Stimmrecht", price: "2 € / Mo." },
  { name: "Ordentliches Mitglied", desc: "Vollmitgliedschaft mit Stimmrecht", price: "2 € / Mo." },
];

export default function MembershipTiers() {
  return (
    <div className="membership-tiers">
      {TIERS.map((tier) => (
        <div className="tier" key={tier.name}>
          <div>
            <p className="tier-name">{tier.name}</p>
            <p className="tier-desc">{tier.desc}</p>
          </div>
          <p className="tier-price">{tier.price}</p>
        </div>
      ))}
    </div>
  );
}
