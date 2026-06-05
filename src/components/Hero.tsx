"use client";
import { useEffect } from "react";
import PhoneMockup from "./PhoneMockup";

const P = "#77021D";
const S = "#F5B731";
const A = "#E07B2A";

export default function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden section-pad"
      style={{ background: "#FAF7F5", paddingTop: "7.5rem", paddingBottom: "5rem" }}>

      {/* Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute animate-float1" style={{ width: "clamp(200px,40vw,500px)", height: "clamp(200px,40vw,500px)", borderRadius: "50%", background: P, filter: "blur(100px)", opacity: .12, top: -120, right: -60 }} />
        <div className="absolute animate-float2" style={{ width: "clamp(160px,30vw,360px)", height: "clamp(160px,30vw,360px)", borderRadius: "50%", background: S, filter: "blur(100px)", opacity: .18, bottom: 0, left: -80 }} />
        <div className="absolute animate-float3" style={{ width: "clamp(120px,20vw,240px)", height: "clamp(120px,20vw,240px)", borderRadius: "50%", background: A, filter: "blur(80px)", opacity: .14, top: "45%", left: "38%" }} />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left */}
        <div>
          {/* Eyebrow */}
          <div className="animate-fadeUp delay-200 inline-flex items-center gap-2 mb-6 md:mb-7"
            style={{ opacity: 0, background: "rgba(119,2,29,.08)", border: `1px solid rgba(119,2,29,.2)`, borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: P }}>
            <span className="animate-pulseDot" style={{ width: 6, height: 6, borderRadius: "50%", background: P, display: "inline-block", flexShrink: 0 }} />
            <span className="hidden xs:inline">Santé mentale des jeunes · </span>Gratuit &amp; confidentiel
          </div>

          {/* Title */}
          <h1 className="animate-fadeUp delay-350"
            style={{ opacity: 0, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,6vw,4.6rem)", lineHeight: 1.1, letterSpacing: "-.02em", color: "#1C1010", marginBottom: "1.25rem" }}>
            Un espace pour<br />
            <span style={{ color: P }}>te sentir moins seul(e)</span>,<br />
            <span className="line-reveal">chaque jour</span>
          </h1>

          {/* Sub */}
          <p className="animate-fadeUp delay-500"
            style={{ opacity: 0, fontSize: "clamp(0.95rem,2vw,1.1rem)", fontWeight: 500, color: "#8A7070", maxWidth: 520, lineHeight: 1.7, marginBottom: "2rem" }}>
            Suis ton humeur, partage avec une communauté anonyme bienveillante, consulte un professionnel, et parle à <strong style={{ color: "#1C1010" }}>Mindo</strong> — ton assistant IA disponible 24h/24.
          </p>

          {/* CTAs */}
          <div className="animate-fadeUp delay-650 flex items-center gap-3 sm:gap-4 flex-wrap" style={{ opacity: 0 }}>
            <a href="https://drive.google.com/file/d/1VH4nOnXCjO4bZLO89LWBiSy1AKxyYdTm/view?usp=sharing"
              className="inline-flex items-center gap-2 no-underline font-bold transition-all duration-200"
              style={{ background: P, color: "white", padding: "13px 22px", borderRadius: 100, fontSize: "clamp(0.85rem,1.5vw,0.95rem)", boxShadow: "0 6px 20px rgba(119,2,29,.35)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="#550114"; el.style.transform="translateY(-2px)"; el.style.boxShadow="0 10px 30px rgba(119,2,29,.45)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background=P; el.style.transform="none"; el.style.boxShadow="0 6px 20px rgba(119,2,29,.35)"; }}>
              Télécharger gratuitement
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#community" className="no-underline font-semibold transition-all duration-200"
              style={{ color: "#8A7070", fontSize: "clamp(0.85rem,1.5vw,0.95rem)", padding: "13px 14px", borderRadius: 100 }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color=P; el.style.background="rgba(119,2,29,.06)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color="#8A7070"; el.style.background="transparent"; }}>
              Voir la communauté →
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fadeUp delay-800 hero-stats"
            style={{ opacity: 0, marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid #EDE5E3" }}>
            {[
              { num: "12k+",  label: "Jeunes actifs" },
              { num: "4.8 ⭐", label: "Note moyenne" },
              { num: "94%",   label: "Se sentent mieux" },
            ].map(s => (
              <div key={s.num}>
                <div style={{ fontWeight: 800, fontSize: "clamp(1.4rem,3vw,1.9rem)", color: P, letterSpacing: "-.03em", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#8A7070", fontWeight: 600, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone — visible from md */}
        <div className="phone-hero animate-fadeLeft delay-650" style={{ opacity: 0 }}>
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
