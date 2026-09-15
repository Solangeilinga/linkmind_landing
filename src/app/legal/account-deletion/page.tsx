// app/legal/account-deletion/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

// Exigence Google Play : une page web doit permettre de demander la
// suppression du compte et des données SANS avoir à réinstaller l'app ni
// s'y connecter — en plus de la suppression déjà possible dans l'app
// (Réglages > Supprimer mon compte, immédiate et en libre-service).
// Ici, la demande est transmise à l'équipe (comme le reset de mot de passe :
// réponse générique, jamais de confirmation que le compte existe) et
// traitée sous 30 jours max, cohérent avec la clause de rétention des CGU.
const API_URL = "https://api.basyam.com/api/auth/request-account-deletion";

export default function AccountDeletionPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), reason: reason.trim() || undefined }),
      });
      if (!res.ok && res.status !== 429) throw new Error("request_failed");
      if (res.status === 429) {
        setStatus("error");
        setErrorMsg("Trop de demandes envoyées récemment. Réessaie dans quelques minutes.");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMsg("Une erreur est survenue. Réessaie, ou écris-nous directement à support@basyam.com.");
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#F5EFED] px-4 py-2 rounded-full mb-6 animate-floatBadge">
          <span className="w-2 h-2 bg-[#F5B731] rounded-full animate-pulseDot" />
          <span className="text-xs font-semibold text-[#77021D] uppercase tracking-wider">
            Vos données
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1010] mb-3 animate-fadeUp">
          Suppression de compte
        </h1>
        <p className="text-[#8A7070] text-sm animate-fadeUp delay-200">
          Demande possible sans avoir besoin de réinstaller l&apos;application
        </p>
      </div>

      <div className="prose prose-lg max-w-none animate-fadeUp delay-350">
        <style jsx>{`
          .prose h2 {
            font-size: 1.4rem;
            font-weight: 800;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #77021d;
            border-left: 4px solid #f5b731;
            padding-left: 1rem;
          }
          .prose p {
            margin-bottom: 1rem;
            line-height: 1.7;
            color: #2d2d2d;
          }
          .prose ul {
            margin: 0.5rem 0 1rem 1.5rem;
            list-style-type: disc;
          }
          .prose li {
            margin: 0.25rem 0;
            line-height: 1.6;
            color: #2d2d2d;
          }
        `}</style>

        <h2>Ce qui est supprimé</h2>
        <p>Quand un compte BASYAM est supprimé (depuis l&apos;app ou via cette page) :</p>
        <ul>
          <li>Le compte lui-même (email, mot de passe, profil) est définitivement supprimé.</li>
          <li>Les données d&apos;humeur, défis et badges sont supprimés.</li>
          <li>Les publications et commentaires de la communauté sont anonymisés (contenu remplacé, plus aucun lien avec le compte) plutôt que supprimés purement — pour ne pas casser les fils de discussion d&apos;autres personnes.</li>
          <li>Les données restantes sont définitivement effacées sous 30 jours au plus.</li>
        </ul>

        <h2>Option 1 — Directement dans l&apos;app (le plus rapide)</h2>
        <p>
          Si tu as encore accès à ton compte : ouvre BASYAM → <strong>Profil</strong> → <strong>Réglages</strong> → <strong>Supprimer mon compte</strong>. C&apos;est immédiat, sans attendre de réponse de notre équipe.
        </p>

        <h2>Option 2 — Depuis cette page</h2>
        <p>
          Si tu n&apos;as plus l&apos;app installée, plus accès à ton compte, ou si tu préfères passer par ici : indique l&apos;email associé à ton compte ci-dessous. Notre équipe traite la demande et supprime le compte sous 30 jours maximum.
        </p>
      </div>

      {/* Formulaire */}
      <div className="bg-[#F5EFED] rounded-2xl p-6 md:p-8 my-8 animate-fadeUp delay-500">
        {status === "sent" ? (
          <div className="text-center py-4">
            <div className="text-3xl mb-3">✅</div>
            <p className="font-semibold text-[#1C1010] mb-1">Demande transmise</p>
            <p className="text-sm text-[#8A7070]">
              Si un compte existe avec cet email, notre équipe la traitera sous 30 jours maximum. Aucune autre action n&apos;est nécessaire de ton côté.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#1C1010] mb-1.5">
                Email associé à ton compte BASYAM *
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="toi@exemple.com"
                className="w-full px-4 py-3 rounded-xl border border-[#EDE5E3] focus:outline-none focus:ring-2 focus:ring-[#77021D]/20 bg-white"
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-semibold text-[#1C1010] mb-1.5">
                Précision (optionnel)
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Ex : je n'ai plus accès à mon téléphone d'origine..."
                rows={3}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl border border-[#EDE5E3] focus:outline-none focus:ring-2 focus:ring-[#77021D]/20 bg-white resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
                ⚠️ {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 bg-[#77021D] text-white rounded-xl font-semibold hover:bg-[#5a0116] transition disabled:opacity-50"
            >
              {status === "sending" ? "Envoi..." : "Demander la suppression de mon compte"}
            </button>
          </form>
        )}
      </div>

      <div className="text-center text-sm text-[#8A7070] mb-8">
        Une question avant de te décider ? Écris-nous à{" "}
        <a href="mailto:support@basyam.com" className="text-[#77021D] font-semibold hover:text-[#E07B2A]">
          support@basyam.com
        </a>
      </div>

      {/* Bouton retour */}
      <div className="text-center mt-12 animate-fadeUp delay-800">
        <Link
          href="/legal/privacy"
          className="inline-flex items-center gap-2 text-[#77021D] font-semibold hover:text-[#E07B2A] transition-colors"
        >
          ← Voir la politique de confidentialité
        </Link>
      </div>
    </main>
  );
}
