"use client";
import Image from "next/image";
import { useReveal } from "./useReveal";
import Link from "next/link";

const P = "#77021D"; const S = "#F5B731"; const A = "#E07B2A";

export function CTABanner() {
  const { ref, visible } = useReveal();
  return (
    <section id="download" style={{ background: `linear-gradient(135deg,${P} 0%,#550114 50%,#1C1010 100%)`, padding: "7rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Orbs déco */}
      <div style={{ position:"absolute", top:-100, right:-60, width:500, height:500, borderRadius:"50%", background:S, filter:"blur(100px)", opacity:.1, pointerEvents:"none" }} className="animate-float1" />
      <div style={{ position:"absolute", bottom:-80, left:-80, width:380, height:380, borderRadius:"50%", background:A, filter:"blur(100px)", opacity:.1, pointerEvents:"none" }} className="animate-float2" />

      <div ref={ref} style={{ position:"relative", zIndex:1, maxWidth:680, margin:"0 auto" }}>
        {/* Logo */}
        <div className="reveal" style={{ display:"flex", justifyContent:"center", marginBottom:"1.5rem", ...(visible?{opacity:1,transform:"none"}:{}) }}>
          <div style={{ width:72, height:72, borderRadius:20, background:"rgba(250,247,245,.15)", display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(10px)" }}>
            <Image src="/logo.png" alt="LinkMind" width={48} height={48} style={{ borderRadius:12, objectFit:"contain" }} />
          </div>
        </div>

        <h2 className="reveal" style={{ fontWeight:800, fontSize:"clamp(2rem,5vw,3.4rem)", color:"#FAF7F5", letterSpacing:"-.02em", marginBottom:"1rem", ...(visible?{opacity:1,transform:"none"}:{}), transitionDelay:".1s" }}>
          Ton bien-être commence<br />
          <span style={{ color:S }}>maintenant</span>
        </h2>

        <p className="reveal" style={{ fontSize:"1.05rem", color:"rgba(250,247,245,.65)", fontWeight:500, marginBottom:"2.5rem", ...(visible?{opacity:1,transform:"none"}:{}), transitionDelay:".2s" }}>
          Rejoins 12 000+ jeunes qui prennent soin d&apos;eux chaque jour.<br/>
          Communauté · Professionnels · IA Mindo · 100% gratuit pour commencer.
        </p>

        <div className="reveal" style={{ ...(visible?{opacity:1,transform:"none"}:{}), transitionDelay:".3s" }}>
          <a href="#" className="inline-flex items-center gap-2 no-underline font-bold transition-all duration-200"
            style={{ background:"#FAF7F5", color:P, padding:"14px 30px", borderRadius:100, fontSize:"0.95rem", boxShadow:"0 6px 20px rgba(0,0,0,.3)" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform="translateY(-2px)"; el.style.boxShadow="0 10px 30px rgba(0,0,0,.4)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform="none"; el.style.boxShadow="0 6px 20px rgba(0,0,0,.3)"; }}>
            📱 Télécharger LinkMind — C&apos;est gratuit
          </a>
        </div>

        <div className="reveal flex justify-center gap-3 flex-wrap" style={{ marginTop:"1.5rem", ...(visible?{opacity:1,transform:"none"}:{}), transitionDelay:".4s" }}>
          {[{icon:"🍎",label:"App Store"},{icon:"🤖",label:"Google Play"}].map(s=>(
            <a key={s.label} href="#" className="no-underline font-semibold transition-all duration-200"
              style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 20px", borderRadius:100, border:"1px solid rgba(250,247,245,.2)", background:"rgba(250,247,245,.1)", color:"rgba(250,247,245,.75)", fontSize:"0.85rem" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(250,247,245,.2)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(250,247,245,.1)";}}>
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const footerLinks = [
    { group: "Produit",       links: [
      { name: "Fonctionnalités", href: "/features" },
      { name: "Communauté", href: "/community" },
      { name: "Professionnels", href: "/professionals" },
      { name: "Mindo IA", href: "/mindo" }
    ]},
    { group: "Ressources",    links: [
      { name: "Aide", href: "/help" },

    ]},
    { group: "Légal",         links: [
      { name: "Confidentialité", href: "/legal/privacy" },
      { name: "CGU", href: "/legal/terms" },
    ]},
  ];

  return (
    <footer style={{ background:"#1C1010", padding:"3.5rem 1.5rem 2rem" }}>
      <div style={{ maxWidth:1160, margin:"0 auto" }}>
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10" style={{ paddingBottom:"2.5rem", borderBottom:"1px solid rgba(250,247,245,.07)" }}>
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"1rem" }}>
              <Image src="/logo.png" alt="LinkMind" width={32} height={32} style={{ borderRadius:8, objectFit:"contain" }} />
              <span style={{ fontWeight:800, fontSize:"1.1rem", color:"#FAF7F5" }}>LinkMind</span>
            </div>
            <p style={{ fontSize:"0.85rem", color:"rgba(250,247,245,.45)", fontWeight:500, lineHeight:1.7 }}>
              L&apos;application de santé mentale pensée pour les jeunes. Gratuit, bienveillant, confidentiel.
            </p>
            {/* Badge version CGU */}
            <div style={{ marginTop:"1rem", fontSize:"0.7rem", color:"rgba(250,247,245,.25)", fontWeight:500 }}>
              CGU v.2025-01 · Mai 2026
            </div>
          </div>

          {/* Links */}
          {footerLinks.map(g => (
            <div key={g.group}>
              <div style={{ fontSize:"0.73rem", fontWeight:700, color:"rgba(250,247,245,.35)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"1rem" }}>
                {g.group}
              </div>
              <ul style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:10 }}>
                {g.links.map(l => (
                  <li key={l.name}>
                    <Link href={l.href} className="no-underline transition-colors duration-200"
                      style={{ fontSize:"0.85rem", color:"rgba(250,247,245,.5)", fontWeight:500 }}
                      onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color="#FAF7F5";}}
                      onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color="rgba(250,247,245,.5)";}}>
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ paddingTop:"1.5rem", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
          <div style={{ fontSize:"0.78rem", color:"rgba(250,247,245,.25)", fontWeight:500 }}>
            © 2026 LinkMind — Fait avec 💙 pour le bien-être des jeunes
          </div>
          <div style={{ display:"flex", gap:"1.5rem" }}>
            {["Twitter","Instagram","LinkedIn"].map(s=>(
              <a key={s} href="#" className="no-underline transition-colors duration-200"
                style={{ fontSize:"0.78rem", color:"rgba(250,247,245,.25)", fontWeight:500 }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color="rgba(250,247,245,.6)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color="rgba(250,247,245,.25)";}}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}