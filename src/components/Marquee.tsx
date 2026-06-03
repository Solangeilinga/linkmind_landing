const items = [
  "Suivi d'humeur quotidien",
  "Communauté anonyme",
  "Consultations pro",
  "Assistant IA Mindo",
  "Défis bien-être",
  "100% confidentiel",
  "Gratuit pour commencer",
  "Streaks & récompenses",
];

export default function Marquee() {
  const all = [...items, ...items];
  return (
    <div style={{ overflow:"hidden", background:"#F5EFED", borderTop:"1px solid #EDE5E3", borderBottom:"1px solid #EDE5E3", padding:"16px 0" }}>
      <div className="animate-marquee" style={{ display:"flex", gap:48, width:"max-content" }}>
        {all.map((item,i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", gap:10, whiteSpace:"nowrap", fontSize:13, color:"#8A7070", fontWeight:600 }}>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#77021D", flexShrink:0, display:"inline-block" }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
