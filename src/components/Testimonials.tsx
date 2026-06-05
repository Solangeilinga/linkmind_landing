"use client";
import { useReveal } from "./useReveal";

const P = "#77021D"; const S = "#F5B731";

const testimonials = [
  { avatar:"A", bg:"#9E1530", name:"Amara D.",  role:"L3 Droit, Paris",
    text:"La communauté LinkMind m'a sauvée pendant les partiels. Lire que d'autres galèrent aussi, ça m'a redonné de la force. Je me sentais moins seule dans ma bulle.", stars: 5 },
  { avatar:"K", bg:"#5BAD72", name:"Kofi M.",   role:"M1 Informatique, Lyon",
    text:"J'ai réservé une consultation avec un psy via l'app. C'était simple, sans jugement. En deux semaines j'avais déjà des outils concrets pour gérer mon stress.", stars: 5 },
  { avatar:"S", bg:P,         name:"Solène R.", role:"BTS Commerce, Bordeaux",
    text:"Mindo à 3h du mat quand je pouvais plus dormir. Pas de jugement, juste des questions qui m'ont aidée à poser les mots sur ce que je vivais. Ça change tout.", stars: 5 },
];

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref}
      style={{ background: "white", borderRadius: "1.75rem", padding: "clamp(1.25rem,3vw,2rem)", border: "1px solid #EDE5E3", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms` }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(119,2,29,.1)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
      <div style={{ color: S, letterSpacing: 2, marginBottom: "1rem", fontSize: "1rem" }}>{"★".repeat(t.stars)}</div>
      <p style={{ fontSize: "clamp(0.88rem,2vw,0.95rem)", color: "#1C1010", lineHeight: 1.75, marginBottom: "1.5rem", fontStyle: "italic", fontWeight: 500 }}>
        &ldquo;{t.text}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.85rem", fontWeight: 800, flexShrink: 0 }}>
          {t.avatar}
        </div>
        <div>
          <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1C1010" }}>{t.name}</div>
          <div style={{ fontSize: "0.78rem", color: "#8A7070", fontWeight: 500 }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useReveal();
  return (
    <section id="testimonials" className="section-pad" style={{ background: "#FAF7F5" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div ref={ref} className="reveal" style={{ textAlign: "center", ...(visible ? { opacity:1, transform:"none" } : {}) }}>
          <span style={{ fontSize: "0.73rem", fontWeight: 700, color: P, textTransform: "uppercase", letterSpacing: "0.12em" }}>Ils nous font confiance</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.6rem,4vw,2.8rem)", color: "#1C1010", marginTop: "0.7rem", letterSpacing: "-.02em" }}>
            Des jeunes qui ont testé,<br /><span style={{ color: P }}>et qui restent</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" style={{ marginTop: "3.5rem" }}>
          {testimonials.map((t, i) => <TestimonialCard key={t.name} t={t} delay={i * 100} />)}
        </div>
      </div>
    </section>
  );
}
