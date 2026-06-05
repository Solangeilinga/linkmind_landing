"use client";
import { useReveal } from "./useReveal";

const P = "#77021D"; const S = "#F5B731"; const A = "#E07B2A";

const features = [
  { icon: "💬", title: "Communauté anonyme",
    desc: "Partage ce que tu ressens avec des milliers de jeunes qui comprennent. Poste anonymement, reçois du soutien, et réalise que tu n'es pas seul(e).",
    tag: "Anonymat total · Modération bienveillante", large: true, dark: false, bg: "rgba(119,2,29,.07)", tagColor: P },
  { icon: "👨‍⚕️", title: "Mise en relation avec des pros",
    desc: "Trouve et réserve une consultation avec un psychologue, coach ou médecin partenaire. Directement depuis l'app, en quelques secondes.",
    tag: "Prise de RDV simplifiée · Présentiel & en ligne", large: false, dark: true, bg: "", tagColor: "rgba(250,247,245,.6)" },
  { icon: "✨", title: "Mindo — ton IA bienveillante",
    desc: "Un assistant entraîné pour écouter sans juger et t'accompagner 24h/24.",
    tag: "10 messages/jour gratuits · Mémoire contextuelle", large: false, dark: false, bg: "rgba(224,123,42,.08)", tagColor: A },
  { icon: "🌙", title: "Suivi d'humeur quotidien",
    desc: "10 secondes par jour pour noter comment tu te sens. Visualise tes patterns, reçois des insights, et comprends mieux tes émotions semaine après semaine.",
    tag: "Daily check-in · Historique · Tendances", large: false, dark: false, bg: "rgba(91,143,196,.1)", tagColor: "#5B8FC4" },
  { icon: "🏆", title: "Défis bien-être",
    desc: "Des micro-défis quotidiens (respiration, gratitude, pleine conscience) pour construire de bonnes habitudes progressivement et gagner des badges.",
    tag: "Streaks · Badges · Niveaux", large: false, dark: false, bg: "rgba(245,183,49,.1)", tagColor: "#B08010" },
  { icon: "📊", title: "Rapports & mémoire émotionnelle",
    desc: "Chaque semaine, un résumé de ton évolution. Mindo mémorise tes échanges pour un accompagnement qui s'affine avec le temps.",
    tag: "Rapport hebdo · Export PDF · Mémoire IA", large: true, dark: false, bg: "rgba(91,168,168,.1)", tagColor: "#5BA8A8" },
];

function FeatureCard({ f, delay }: { f: typeof features[0]; delay: number }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref}
      className={f.large ? "md:col-span-2" : ""}
      style={{
        background: f.dark ? "#1C1010" : f.bg || "#F5EFED",
        borderRadius: "1.75rem",
        padding: "clamp(1.5rem,3vw,2.2rem) clamp(1.25rem,2.5vw,2rem)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
        cursor: "default",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(119,2,29,.12)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
      <div style={{ width: 50, height: 50, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1.25rem", background: f.dark ? "rgba(250,247,245,.1)" : "rgba(119,2,29,.08)", flexShrink: 0 }}>
        {f.icon}
      </div>
      <h3 style={{ fontWeight: 800, fontSize: "clamp(1rem,2vw,1.2rem)", color: f.dark ? "#FAF7F5" : "#1C1010", marginBottom: "0.6rem" }}>
        {f.title}
      </h3>
      <p style={{ fontSize: "clamp(0.82rem,1.5vw,0.9rem)", color: f.dark ? "rgba(250,247,245,.6)" : "#8A7070", fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
        {f.desc}
      </p>
      <span style={{ display: "inline-block", marginTop: "1rem", fontSize: "0.73rem", fontWeight: 700, background: f.dark ? "rgba(250,247,245,.1)" : "rgba(119,2,29,.08)", color: f.tagColor, padding: "4px 12px", borderRadius: 100 }}>
        {f.tag}
      </span>
    </div>
  );
}

export default function Features() {
  const { ref, visible } = useReveal();
  return (
    <section id="features" className="section-pad" style={{ background: "#FAF7F5" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div ref={ref} className="reveal" style={visible ? { opacity: 1, transform: "none" } : {}}>
          <span style={{ fontSize: "0.73rem", fontWeight: 700, color: P, textTransform: "uppercase", letterSpacing: "0.12em" }}>Ce qu&apos;on t&apos;offre</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.6rem,4vw,2.8rem)", color: "#1C1010", marginTop: "0.7rem", marginBottom: "0.75rem", letterSpacing: "-.02em" }}>
            Tout ce dont ton mental a besoin,{" "}
            <span style={{ color: P }}>en un seul endroit</span>
          </h2>
        </div>
        {/* Bento grid : 3 cols desktop, 2 cols tablette, 1 col mobile */}
        <div className="features-bento grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" style={{ marginTop: "3rem" }}>
          {features.map((f, i) => <FeatureCard key={f.title} f={f} delay={i * 80} />)}
        </div>
      </div>
    </section>
  );
}
