"use client";
import { useReveal } from "./useReveal";

const free = [
  "Suivi d'humeur quotidien",
  "10 messages Mindo / jour",
  "Défis bien-être basiques",
  "Communauté anonyme",
  "Rapport hebdomadaire",
];
const premium = [
  "Tout le plan Gratuit",
  "Messages Mindo illimités",
  "Mémoire Mindo avancée",
  "Défis premium & exclusifs",
  "Consultations pro",
  "Export PDF de ton journal",
  "Support prioritaire",
];

export default function Pricing() {
  const { ref, visible } = useReveal();
  return (
    <section id="pricing" className="section-pad" style={{ background: "#faf8f5" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div ref={ref} className="reveal" style={{ textAlign: "center", ...(visible ? { opacity: 1, transform: "none" } : {}) }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#9b8ec4", textTransform: "uppercase", letterSpacing: "0.1em" }}>Tarifs</span>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(1.6rem,4vw,2.8rem)", color: "#1a1625", marginTop: "0.75rem", marginBottom: "0.75rem", letterSpacing: "-.03em" }}>
            Simple et transparent
          </h2>
          <p style={{ fontSize: "clamp(0.9rem,2vw,1rem)", color: "#4a4460", fontWeight: 300, maxWidth: 420, margin: "0 auto" }}>
            Commence gratuitement. Passe Premium si tu veux aller plus loin — jamais de pression.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Free */}
          <div className="reveal" style={{ background: "#f5f3f0", borderRadius: "2rem", padding: "clamp(1.75rem,4vw,2.5rem) clamp(1.25rem,3vw,2rem)", ...(visible ? { opacity: 1, transform: "none" } : {}) }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#9b8ec4", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Gratuit</div>
            <div style={{ fontWeight: 700, fontSize: "clamp(2.2rem,5vw,3rem)", letterSpacing: "-.04em", color: "#1a1625", lineHeight: 1 }}>0€</div>
            <div style={{ fontSize: "0.85rem", color: "#4a4460", marginTop: "0.25rem", marginBottom: "1.5rem" }}>Pour toujours</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: 10 }}>
              {free.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.88rem", color: "#4a4460", fontWeight: 300 }}>
                  <span style={{ color: "#7a9e8a", fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="https://drive.google.com/file/d/1VH4nOnXCjO4bZLO89LWBiSy1AKxyYdTm/view?usp=sharing"
              className="block text-center no-underline transition-colors duration-200"
              style={{ padding: "12px", borderRadius: 100, border: "1.5px solid rgba(26,22,37,.15)", color: "#1a1625", fontSize: "0.9rem", fontWeight: 500 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#ede9e4"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              Commencer gratuitement
            </a>
          </div>

          {/* Premium */}
          <div className="reveal" style={{ background: "#1a1625", borderRadius: "2rem", padding: "clamp(1.75rem,4vw,2.5rem) clamp(1.25rem,3vw,2rem)", position: "relative", transform: visible ? "scale(1.03) translateY(0)" : "scale(1.03) translateY(20px)", opacity: visible ? 1 : 0, transition: "opacity .7s ease 200ms, transform .7s ease 200ms" }}>
            <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(90deg,#9b8ec4,#7ab3cc)", color: "white", fontSize: "0.75rem", fontWeight: 600, padding: "4px 14px", borderRadius: 100, whiteSpace: "nowrap" }}>
              ⭐ Recommandé
            </div>
            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#9b8ec4", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>Premium</div>
            <div style={{ fontWeight: 700, fontSize: "clamp(2.2rem,5vw,3rem)", letterSpacing: "-.04em", color: "#faf8f5", lineHeight: 1 }}>4€</div>
            <div style={{ fontSize: "0.85rem", color: "rgba(250,248,245,.45)", marginTop: "0.25rem", marginBottom: "1.5rem" }}>par mois · sans engagement</div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: 10 }}>
              {premium.map(f => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.88rem", color: "rgba(250,248,245,.65)", fontWeight: 300 }}>
                  <span style={{ color: "#a8c5b5", fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="https://drive.google.com/file/d/1VH4nOnXCjO4bZLO89LWBiSy1AKxyYdTm/view?usp=sharing"
              className="block text-center no-underline transition-all duration-200"
              style={{ padding: "12px", borderRadius: 100, background: "#9b8ec4", color: "white", fontSize: "0.9rem", fontWeight: 500, boxShadow: "0 4px 20px rgba(155,142,196,.4)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#8a7db4"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#9b8ec4"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Passer Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
