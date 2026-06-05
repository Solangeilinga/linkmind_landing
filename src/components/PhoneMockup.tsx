import Image from "next/image";

const P = "#77021D";
const S = "#F5B731";
const A = "#E07B2A";

export default function PhoneMockup() {
  return (
    <div className="relative" style={{ width: "clamp(220px,28vw,280px)" }}>
      {/* Badge top */}
      <div className="badge-float absolute z-10 animate-floatBadge badge-top-right"
        style={{ top: -14, right: -30, background: "white", borderRadius: 14, padding: "10px 14px", boxShadow: "0 8px 30px rgba(119,2,29,.18)", display: "flex", alignItems: "center", gap: 10, minWidth: 160 }}>
        <span style={{ fontSize: 20 }}>🔥</span>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1C1010", whiteSpace: "nowrap" }}>Streak 7 jours</div>
          <div style={{ fontSize: 11, color: "#8A7070", whiteSpace: "nowrap" }}>Continue comme ça !</div>
        </div>
      </div>

      {/* Phone frame */}
      <div style={{ background: "#1C1010", borderRadius: 44, padding: 14, boxShadow: "0 40px 80px rgba(119,2,29,.25), 0 0 0 1px rgba(255,255,255,.08) inset" }}>
        <div style={{ background: "#FAF7F5", borderRadius: 32, overflow: "hidden", height: 520, display: "flex", flexDirection: "column" }}>
          <div style={{ width: 96, height: 28, background: "#1C1010", borderRadius: "0 0 18px 18px", margin: "0 auto" }} />
          <div style={{ flex: 1, padding: "12px 12px 16px", display: "flex", flexDirection: "column", gap: 9, overflowY: "hidden" }}>

            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 11, color: "#8A7070", fontWeight: 600 }}>Bonjour,</div>
                <div style={{ fontWeight: 800, fontSize: 14, color: "#1C1010" }}>Amara 👋</div>
              </div>
              <Image src="/logo.png" alt="LinkMind" width={26} height={26} style={{ borderRadius: 8, objectFit: "contain" }} />
            </div>

            {/* Mood card */}
            <div style={{ background: `linear-gradient(135deg,${P},#9E1530)`, borderRadius: 16, padding: "11px 13px" }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.7)", fontWeight: 600, marginBottom: 6 }}>Comment tu te sens ?</div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {[{e:"😄",l:"Super"},{e:"🙂",l:"Bien"},{e:"😐",l:"Neutre"},{e:"😔",l:"Fatigué"}].map((m,i)=>(
                  <span key={i} style={{ padding: "4px 9px", borderRadius: 100, fontSize: 10, fontWeight: 700, background: i===0?"rgba(245,183,49,.9)":"rgba(255,255,255,.15)", color: i===0?"#1C1010":"white" }}>
                    {m.e} {m.l}
                  </span>
                ))}
              </div>
            </div>

            {/* Community card */}
            <div style={{ background: "#F5EFED", borderRadius: 13, padding: "9px 11px" }}>
              <div style={{ fontSize: 9, color: "#8A7070", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>Communauté</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#1C1010", marginBottom: 3 }}>💬 &quot;Quelqu&apos;un ressent la même chose&quot;</div>
              <div style={{ fontSize: 10, color: "#8A7070" }}>23 personnes ont réagi à ta publication</div>
            </div>

            {/* Pro card */}
            <div style={{ background: "white", borderRadius: 13, padding: "9px 11px", border: "1px solid #EDE5E3" }}>
              <div style={{ fontSize: 9, color: "#8A7070", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>Professionnel recommandé</div>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: `linear-gradient(135deg,${P},${A})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 13, flexShrink: 0 }}>👩‍⚕️</div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#1C1010" }}>Dr. Kofi Mensah</div>
                  <div style={{ fontSize: 10, color: "#8A7070" }}>Psychologue · En ligne dispo</div>
                </div>
                <span style={{ marginLeft: "auto", background: P, color: "white", fontSize: 9, fontWeight: 700, padding: "3px 7px", borderRadius: 100 }}>RDV</span>
              </div>
            </div>

            {/* Mindo bubble */}
            <div style={{ borderRadius: "13px 13px 13px 4px", padding: "9px 11px", background: "linear-gradient(135deg,rgba(119,2,29,.07),rgba(224,123,42,.07))", border: "1px solid rgba(119,2,29,.12)" }}>
              <div style={{ fontSize: 10, color: P, fontWeight: 700, marginBottom: 2 }}>✨ Mindo</div>
              <div style={{ fontSize: 11, color: "#8A7070", fontStyle: "italic", lineHeight: 1.6 }}>&quot;Je suis là si tu veux parler de ta journée.&quot;</div>
            </div>

            {/* Streak */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
              <span style={{ fontSize: 11, color: "#8A7070", fontWeight: 600 }}>Niveau Silver 🥈</span>
              <span style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 9px", borderRadius: 100, fontSize: 11, fontWeight: 700, color: "white", background: `linear-gradient(90deg,${P},${A})` }}>
                🔥 7 jours
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Badge bottom */}
      <div className="badge-float absolute z-10 animate-floatBadge2 badge-bottom-left"
        style={{ bottom: 52, left: -34, background: "white", borderRadius: 14, padding: "10px 14px", boxShadow: "0 8px 30px rgba(119,2,29,.18)", display: "flex", alignItems: "center", gap: 10, minWidth: 150 }}>
        <span style={{ fontSize: 20 }}>💙</span>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1C1010", whiteSpace: "nowrap" }}>Soutien reçu</div>
          <div style={{ fontSize: 11, color: "#8A7070", whiteSpace: "nowrap" }}>La communauté est là</div>
        </div>
      </div>
    </div>
  );
}
