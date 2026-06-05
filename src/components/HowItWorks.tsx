"use client";
import { useState, useEffect } from "react";
import { useReveal } from "./useReveal";

const P = "#77021D"; const S = "#F5B731";

const steps = [
  { num:"1", title:"Crée ton compte en 30 secondes", desc:"Email ou numéro de téléphone, c'est tout. Pas de carte de crédit, pas de formulaire à rallonge.", emoji:"👋", screen:"Bienvenue !", sub:"Inscription en 30 secondes" },
  { num:"2", title:"Note ton humeur du jour",         desc:"Chaque jour, 10 secondes. C'est ça qui construit ta mémoire émotionnelle et tes insights.", emoji:"😊", screen:"Comment tu te sens ?", sub:"Un emoji, quelques mots" },
  { num:"3", title:"Rejoins la communauté",           desc:"Poste anonymement, lis les expériences des autres, reçois du soutien. Tu n'es pas seul(e).", emoji:"💬", screen:"La communauté t'attend", sub:"Anonymat total · Bienveillance" },
  { num:"4", title:"Réserve un professionnel",        desc:"Trouve un psy ou coach partenaire, réserve en 2 clics, et consulte sereinement.", emoji:"👨‍⚕️", screen:"Un pro disponible pour toi", sub:"Validé par notre équipe" },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal();

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="how" className="section-pad" style={{ background: "#F5EFED" }}>
      <div className="two-col-grid" style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div>
          <div ref={ref} className="reveal" style={visible ? { opacity:1, transform:"none" } : {}}>
            <span style={{ fontSize:"0.73rem", fontWeight:700, color:P, textTransform:"uppercase", letterSpacing:"0.12em" }}>Comment ça marche</span>
            <h2 style={{ fontWeight:800, fontSize:"clamp(1.6rem,4vw,2.8rem)", color:"#1C1010", marginTop:"0.7rem", marginBottom:"1rem", letterSpacing:"-.02em" }}>
              Commencer, c&apos;est<br /><span style={{ color:P }}>plus simple que tu crois</span>
            </h2>
            <p style={{ fontSize:"clamp(0.9rem,2vw,1rem)", color:"#8A7070", fontWeight:500, lineHeight:1.75, maxWidth:460 }}>
              Pas de formulaire interminable. Pas de rendez-vous à attendre. Juste toi et un espace qui t&apos;appartient.
            </p>
          </div>

          <div style={{ marginTop:"2.5rem" }}>
            {steps.map((s, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{ display:"flex", gap:"1.25rem", padding:"1.25rem 0", width:"100%", textAlign:"left", background:"none", border:"none", borderBottom:i<steps.length-1?"1px solid rgba(28,16,16,.07)":"none", cursor:"pointer", opacity:active===i?1:0.4, transition:"opacity .25s" }}>
                <div style={{ width:40, height:40, borderRadius:"50%", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:"0.9rem", background:active===i?P:"#EDE5E3", color:active===i?"white":"#8A7070", transition:"background .3s, color .3s" }}>
                  {s.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight:800, fontSize:"clamp(0.9rem,2vw,1rem)", color:"#1C1010", marginBottom:"0.3rem" }}>{s.title}</div>
                  <div style={{ fontSize:"0.85rem", color:"#8A7070", fontWeight:500, lineHeight:1.65 }}>{s.desc}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile screen panel (visible only on small screens) */}
          <div className="lg:hidden mt-8" style={{ background:"#1C1010", borderRadius:"1.5rem", height:280, position:"relative", overflow:"hidden" }}>
            {steps.map((s, i) => (
              <div key={i} style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"1rem", padding:"2rem", opacity:active===i?1:0, transition:"opacity .5s" }}>
                <div className="animate-bounceSoft" style={{ fontSize:"3rem" }}>{s.emoji}</div>
                <div style={{ fontWeight:800, fontSize:"1.15rem", color:"#FAF7F5", textAlign:"center" }}>{s.screen}</div>
                <div style={{ fontSize:"0.8rem", color:"rgba(250,247,245,.4)", textAlign:"center", fontWeight:500 }}>{s.sub}</div>
                <div style={{ display:"flex", gap:8, marginTop:"0.25rem" }}>
                  {steps.map((_,j) => (
                    <div key={j} style={{ width:j===i?20:6, height:6, borderRadius:3, background:j===i?S:"rgba(250,247,245,.2)", transition:"width .3s, background .3s" }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop screen panel */}
        <div className="how-screen" style={{ background:"#1C1010", borderRadius:"2rem", height:420, position:"relative", overflow:"hidden" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"1.25rem", padding:"2.5rem", opacity:active===i?1:0, transition:"opacity .5s" }}>
              <div className="animate-bounceSoft" style={{ fontSize:"4rem" }}>{s.emoji}</div>
              <div style={{ fontWeight:800, fontSize:"1.3rem", color:"#FAF7F5", textAlign:"center", lineHeight:1.3 }}>{s.screen}</div>
              <div style={{ fontSize:"0.85rem", color:"rgba(250,247,245,.4)", textAlign:"center", fontWeight:500 }}>{s.sub}</div>
              <div style={{ display:"flex", gap:8, marginTop:"0.5rem" }}>
                {steps.map((_,j) => (
                  <div key={j} style={{ width:j===i?20:6, height:6, borderRadius:3, background:j===i?S:"rgba(250,247,245,.2)", transition:"width .3s, background .3s" }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
