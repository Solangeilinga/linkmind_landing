"use client";
import { useReveal } from "./useReveal";

const P = "#77021D"; const S = "#F5B731"; const A = "#E07B2A";

const pros = [
  { initials: "KM", name: "Dr. Kofi Mensah",  type: "Psychologue",  city: "Abidjan · En ligne", price: "25 000 FCFA", rating: 4.9, count: 142, color: "#9E1530", available: true  },
  { initials: "AS", name: "Amara Sow",         type: "Coach de vie", city: "Dakar · En ligne",   price: "15 000 FCFA", rating: 4.8, count: 98,  color: A,         available: true  },
  { initials: "FD", name: "Dr. Fatou Diallo",  type: "Médecin",      city: "Lomé · Présentiel",  price: "20 000 FCFA", rating: 4.7, count: 76,  color: "#5BAD72", available: false },
];

const steps = [
  { num: "1", icon: "🔍", title: "Parcours les profils",   desc: "Filtre par spécialité, ville, disponibilité et mode (présentiel ou en ligne)." },
  { num: "2", icon: "📅", title: "Réserve en deux clics", desc: "Choisis un créneau, envoie un message, et attends la confirmation admin." },
  { num: "3", icon: "💬", title: "Consulte sereinement",  desc: "Rencontre ton professionnel avec le soutien de LinkMind en arrière-plan." },
];

export default function Professionals() {
  const { ref, visible } = useReveal();

  return (
    <section id="professionals" className="section-pad" style={{ background: "#FAF7F5" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header */}
        <div ref={ref} className="reveal" style={{ textAlign: "center", ...(visible ? { opacity: 1, transform: "none" } : {}) }}>
          <span style={{ fontSize: "0.73rem", fontWeight: 700, color: P, textTransform: "uppercase", letterSpacing: "0.12em" }}>Professionnels partenaires</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.6rem,4vw,2.8rem)", color: "#1C1010", marginTop: "0.7rem", marginBottom: "1rem", letterSpacing: "-.02em" }}>
            Quand tu as besoin de plus,<br />
            <span style={{ color: P }}>un expert t&apos;attend</span>
          </h2>
          <p style={{ fontSize: "clamp(0.9rem,2vw,1rem)", color: "#8A7070", fontWeight: 500, maxWidth: 520, margin: "0 auto 3rem", lineHeight: 1.7 }}>
            Psychologues, coachs, médecins — disponibles en ligne ou en présentiel. Réserve une consultation directement depuis l&apos;app, validée par notre équipe.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5" style={{ marginBottom: "3.5rem" }}>
          {steps.map((s, i) => {
            const { ref: r, visible: v } = useReveal();
            return (
              <div key={i} ref={r}
                style={{ background: "#F5EFED", borderRadius: "1.5rem", padding: "1.75rem", textAlign: "center", opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: `opacity .7s ease ${i*100}ms, transform .7s ease ${i*100}ms` }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: P, color: "white", fontWeight: 800, fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  {s.num}
                </div>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <div style={{ fontWeight: 800, fontSize: "clamp(0.9rem,2vw,1rem)", color: "#1C1010", marginBottom: "0.4rem" }}>{s.title}</div>
                <div style={{ fontSize: "0.85rem", color: "#8A7070", fontWeight: 500, lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Pro cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" style={{ marginBottom: "3rem" }}>
          {pros.map((pro, i) => {
            const { ref: r, visible: v } = useReveal();
            return (
              <div key={i} ref={r}
                style={{ background: "white", borderRadius: "1.5rem", padding: "1.5rem", border: "1px solid #EDE5E3", opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: `opacity .7s ease ${i*100}ms, transform .7s ease ${i*100}ms` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(119,2,29,.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: `linear-gradient(135deg,${pro.color},${A})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: "1.1rem" }}>
                    {pro.initials}
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 100, background: pro.available ? "rgba(91,173,114,.12)" : "rgba(138,112,112,.1)", color: pro.available ? "#5BAD72" : "#8A7070" }}>
                    {pro.available ? "● Disponible" : "○ Occupé"}
                  </span>
                </div>

                <div style={{ fontWeight: 800, fontSize: "1rem", color: "#1C1010", marginBottom: 2 }}>{pro.name}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: P, marginBottom: 4 }}>{pro.type}</div>
                <div style={{ fontSize: "0.8rem", color: "#8A7070", fontWeight: 500, marginBottom: "0.85rem" }}>📍 {pro.city}</div>

                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "1rem" }}>
                  <span style={{ color: S, fontSize: 13 }}>★★★★★</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#1C1010" }}>{pro.rating}</span>
                  <span style={{ fontSize: 11, color: "#8A7070" }}>({pro.count} consult.)</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1C1010" }}>{pro.price}<span style={{ fontSize: 10, color: "#8A7070", fontWeight: 500 }}> / séance</span></div>
                  <a href="https://drive.google.com/file/d/1oNnJfykm5tPfgp-o9fuA0v7tfkZHuP3E/view?usp=sharing"
                    className="no-underline font-bold transition-all duration-200"
                    style={{ fontSize: 12, padding: "7px 14px", borderRadius: 100, background: pro.available ? P : "#EDE5E3", color: pro.available ? "white" : "#8A7070", cursor: pro.available ? "pointer" : "default" }}>
                    {pro.available ? "Réserver" : "Indisponible"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="trust-badges">
          {[
            { icon: "🔒", label: "Consultation confidentielle" },
            { icon: "✅", label: "Professionnels vérifiés" },
            { icon: "💳", label: "Paiement sécurisé" },
            { icon: "⭐", label: "4.8 / 5 de satisfaction" },
          ].map(b => (
            <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "clamp(0.78rem,2vw,0.85rem)", fontWeight: 600, color: "#8A7070" }}>
              <span style={{ fontSize: "1.1rem" }}>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
