"use client";
import { useReveal } from "./useReveal";

const P = "#77021D"; const A = "#E07B2A";

const msgs = [
  { from: "mindo", text: "Bonsoir 🌙 Comment s'est passée ta journée ? Je sens que tu avais quelque chose à me dire." },
  { from: "user",  text: "Franchement dur. Les révisions + le boulot en parallèle, je suis épuisé(e)." },
  { from: "mindo", text: "C'est beaucoup à porter en même temps. Le surmenage crée souvent ce sentiment d'être coincé(e). Qu'est-ce qui te pèse le plus en ce moment ?" },
  { from: "user",  text: "L'impression que ça ne finira jamais..." },
];

const feats = [
  { icon: "🧠", title: "Mémoire contextuelle",     desc: "Mindo se souvient de tes échanges pour un accompagnement qui s'affine avec le temps." },
  { icon: "🔒", title: "100% privé",               desc: "Tes conversations sont chiffrées. Jamais partagées. C'est ton espace." },
  { icon: "🌙", title: "Disponible 24h/24",         desc: "À 3h du matin ou entre deux cours — Mindo est toujours là." },
  { icon: "💬", title: "10 messages/jour gratuits", desc: "Plan gratuit : 10 messages/jour. Illimité avec Premium." },
];

export default function Mindo() {
  const { ref: textRef, visible: tv } = useReveal();
  const { ref: chatRef, visible: cv } = useReveal();

  return (
    <section id="mindo" style={{ background: "#F5EFED", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
        className="grid-cols-1 lg:grid-cols-2">

        {/* Chat */}
        <div ref={chatRef} className="reveal" style={{ background: "white", borderRadius: "1.75rem", padding: "1.5rem", boxShadow: "0 4px 24px rgba(119,2,29,.08)", ...(cv ? { opacity:1, transform:"none" } : {}) }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: "1rem", borderBottom: "1px solid #EDE5E3", marginBottom: "1rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg,${P},${A})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>✨</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "0.95rem", color: "#1C1010" }}>Mindo</div>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5BAD72" }}>● En ligne — répond instantanément</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: "0.7rem", color: "#8A7070", textAlign: "center", marginBottom: 4 }}>Aujourd&apos;hui, 22:15</div>
            {msgs.map((m, i) => (
              <div key={i} className="animate-bubbleIn"
                style={{ padding: "10px 14px", borderRadius: m.from === "mindo" ? "16px 16px 16px 4px" : "16px 16px 4px 16px", fontSize: "0.85rem", lineHeight: 1.65, maxWidth: "88%", background: m.from === "mindo" ? "#F5EFED" : P, color: m.from === "mindo" ? "#1C1010" : "white", fontWeight: m.from === "user" ? 600 : 500, alignSelf: m.from === "user" ? "flex-end" : "flex-start", animationDelay: `${i * 0.25}s` }}>
                {m.text}
              </div>
            ))}
            <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "10px 14px", background: "#F5EFED", borderRadius: "16px 16px 16px 4px", width: "fit-content" }}>
              {[0, 200, 400].map(d => (
                <span key={d} className="animate-typingDot" style={{ width: 7, height: 7, background: P, borderRadius: "50%", display: "inline-block", animationDelay: `${d}ms`, opacity: .5 }} />
              ))}
            </div>
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className="reveal" style={tv ? { opacity:1, transform:"none" } : {}}>
          <span style={{ fontSize: "0.73rem", fontWeight: 700, color: P, textTransform: "uppercase", letterSpacing: "0.12em" }}>Mindo, ton IA bienveillante</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#1C1010", marginTop: "0.7rem", marginBottom: "1rem", letterSpacing: "-.02em" }}>
            Parler aide.<br />
            <span style={{ color: P }}>Mindo est là pour ça.</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#8A7070", fontWeight: 500, lineHeight: 1.75, marginBottom: "2rem" }}>
            Mindo n&apos;est pas un chatbot générique. Il complète la communauté et les professionnels — disponible à toute heure, sans rendez-vous, sans jugement.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {feats.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 14, opacity: tv ? 1 : 0, transform: tv ? "translateY(0)" : "translateY(16px)", transition: `opacity .6s ease ${(i+1)*100}ms, transform .6s ease ${(i+1)*100}ms` }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(119,2,29,.08)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1C1010", marginBottom: 2 }}>{f.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "#8A7070", fontWeight: 500, lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
