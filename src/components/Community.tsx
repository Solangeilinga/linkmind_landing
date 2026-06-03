"use client";
import { useReveal } from "./useReveal";

const P = "#77021D"; const S = "#F5B731"; const A = "#E07B2A";

const posts = [
  { emoji: "😔", text: "Les partiels m'écrasent cette semaine. J'arrive plus à dormir avant 3h du mat...", likes: 34, reactions: "💙 💪 🤝", time: "Il y a 12 min" },
  { emoji: "🙂", text: "J'ai enfin osé parler à mon psy de mes angoisses. Ça m'a pris du courage mais ça valait le coup.", likes: 87, reactions: "💙 🙌 ✨", time: "Il y a 28 min" },
  { emoji: "😰", text: "Je me sens tellement décalé(e) par rapport aux autres. Vous aussi vous avez ce sentiment parfois ?", likes: 61, reactions: "💙 🤝 😢", time: "Il y a 45 min" },
];

export default function Community() {
  const { ref, visible } = useReveal();
  return (
    <section id="community" style={{ background: "#F5EFED", padding: "7rem 1.5rem" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
        className="grid-cols-1 lg:grid-cols-2">

        {/* Posts preview */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {posts.map((p, i) => {
            const { ref: r, visible: v } = useReveal();
            return (
              <div key={i} ref={r}
                style={{ background: "white", borderRadius: "1.25rem", padding: "1.25rem 1.5rem", opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(20px)", transition: `opacity .6s ease ${i*100}ms, transform .6s ease ${i*100}ms`, boxShadow: "0 2px 12px rgba(119,2,29,.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(119,2,29,.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
                    {p.emoji}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: P }}>🔒 Anonyme</div>
                    <div style={{ fontSize: 10, color: "#8A7070" }}>{p.time}</div>
                  </div>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#1C1010", lineHeight: 1.65, fontWeight: 500, margin: "0 0 12px" }}>
                  {p.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 14, letterSpacing: 2 }}>{p.reactions}</span>
                  <span style={{ fontSize: 11, color: "#8A7070", fontWeight: 600 }}>💙 {p.likes} soutiens</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Text */}
        <div ref={ref} className="reveal" style={visible ? { opacity: 1, transform: "none" } : {}}>
          <span style={{ fontSize: "0.73rem", fontWeight: 700, color: P, textTransform: "uppercase", letterSpacing: "0.12em" }}>Communauté anonyme</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#1C1010", marginTop: "0.7rem", marginBottom: "1rem", letterSpacing: "-.02em" }}>
            Tu n&apos;es pas seul(e).<br />
            <span style={{ color: P }}>Des milliers pensent comme toi.</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#8A7070", fontWeight: 500, lineHeight: 1.75, marginBottom: "2rem" }}>
            La communauté LinkMind te permet de partager ce que tu ressens, sans révéler ton identité. Lis les expériences des autres, réponds avec bienveillance, et réalise que beaucoup traversent les mêmes choses.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: "2rem" }}>
            {[
              { icon: "🔒", title: "Anonymat total", desc: "Ton nom n'apparaît jamais. Parle librement, sans jugement." },
              { icon: "💙", title: "Soutien mutuel",  desc: "Réactions, réponses, soutiens — une chaleur humaine authentique." },
              { icon: "🛡️", title: "Espace sécurisé", desc: "Modération active pour garder un espace bienveillant et sûr." },
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 14, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: `opacity .6s ease ${(i+1)*120}ms, transform .6s ease ${(i+1)*120}ms` }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(119,2,29,.08)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#1C1010", marginBottom: 2 }}>{f.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "#8A7070", fontWeight: 500, lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="#download" className="inline-flex items-center gap-2 no-underline font-bold transition-all duration-200"
            style={{ background: P, color: "white", padding: "13px 24px", borderRadius: 100, fontSize: "0.9rem", boxShadow: "0 6px 20px rgba(119,2,29,.3)" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="#550114"; el.style.transform="translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background=P; el.style.transform="none"; }}>
            Rejoindre la communauté →
          </a>
        </div>
      </div>
    </section>
  );
}
