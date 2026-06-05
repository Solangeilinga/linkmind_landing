"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const P = "#77021D";

const links = [
  { label: "Fonctionnalités", href: "#features"      },
  { label: "Communauté",      href: "#community"     },
  { label: "Professionnels",  href: "#professionals" },
  { label: "Mindo",        href: "#mindo"         },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    const h = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300"
        style={scrolled || open ? { background: "rgba(250,247,245,.97)", backdropFilter: "blur(16px)", boxShadow: "0 1px 0 rgba(28,16,16,.06)" } : {}}>

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <Image src="/logo.png" alt="LinkMind" width={34} height={34} style={{ borderRadius: 8, objectFit: "contain" }} />
          <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "1.15rem", color: P, letterSpacing: "-.01em" }}>
            LinkMind
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-semibold no-underline transition-colors duration-200"
                style={{ color: "#8A7070" }}
                onMouseEnter={e => (e.currentTarget.style.color = P)}
                onMouseLeave={e => (e.currentTarget.style.color = "#8A7070")}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://drive.google.com/file/d/1VH4nOnXCjO4bZLO89LWBiSy1AKxyYdTm/view?usp=sharing"
              className="text-sm font-bold no-underline px-5 py-2.5 rounded-full transition-all duration-200"
              style={{ background: P, color: "white", boxShadow: "0 4px 14px rgba(119,2,29,.3)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background="#550114"; el.style.transform="translateY(-1px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background=P; el.style.transform="none"; }}>
              Télécharger
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)} aria-label="Menu">
          {[
            open ? "rotate(45deg) translate(0,7px)" : "none",
            "none",
            open ? "rotate(-45deg) translate(0,-7px)" : "none",
          ].map((t, i) => (
            <span key={i} className="block w-[22px] h-[2px] rounded transition-all duration-300"
              style={{ background: P, transform: t, opacity: i === 1 && open ? 0 : 1 }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu — full-width dropdown */}
      <div className={`md:hidden fixed top-[57px] left-0 right-0 z-40 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}`}
        style={{ background: "rgba(250,247,245,.97)", backdropFilter: "blur(16px)", borderTop: "1px solid #EDE5E3" }}>
        <div className="flex flex-col px-6 py-5 gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-semibold no-underline py-1"
              style={{ color: "#8A7070" }} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="https://drive.google.com/file/d/1VH4nOnXCjO4bZLO89LWBiSy1AKxyYdTm/view?usp=sharing"
            className="text-sm font-bold no-underline px-5 py-3.5 rounded-full text-center mt-1"
            style={{ background: P, color: "white" }} onClick={() => setOpen(false)}>
            Télécharger
          </a>
        </div>
      </div>
    </>
  );
}
