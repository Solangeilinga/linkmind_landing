// app/legal/cookies/page.tsx
"use client";

import Link from "next/link";

export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#F5EFED] px-4 py-2 rounded-full mb-6 animate-floatBadge">
          <span className="w-2 h-2 bg-[#E07B2A] rounded-full animate-pulseDot" />
          <span className="text-xs font-semibold text-[#77021D] uppercase tracking-wider">
            Transparence
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1010] mb-3 animate-fadeUp">
          Politique des Cookies
        </h1>
        <p className="text-[#8A7070] text-sm animate-fadeUp delay-200">
          Dernière mise à jour : Octobre 2026
        </p>
      </div>

      {/* Bannière d'information */}
      <div className="bg-gradient-to-r from-[#F5B731]/10 to-[#E07B2A]/10 rounded-2xl p-4 mb-8 animate-fadeUp delay-350">
        <div className="font-semibold text-[#1C1010]">Aucun cookie publicitaire, aucune mesure d&apos;audience</div>
        <div className="text-sm text-[#8A7070] mt-1">
          BASYAM utilise uniquement le stockage nécessaire à son fonctionnement.
        </div>
      </div>

      {/* Contenu */}
      <div className="prose prose-lg max-w-none animate-fadeUp delay-500">
        <style jsx>{`
          .prose h2 {
            font-size: 1.5rem;
            font-weight: 800;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #77021D;
            border-left: 4px solid #F5B731;
            padding-left: 1rem;
          }
          .prose p, .prose li {
            line-height: 1.7;
            color: #2d2d2d;
          }
          .prose p {
            margin-bottom: 1rem;
          }
          .prose ul {
            margin: 0.5rem 0 1rem 1.5rem;
            list-style-type: disc;
          }
        `}</style>

        <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier déposé sur votre appareil lorsque vous utilisez un site ou une application. Des technologies voisines, comme le stockage local du navigateur, remplissent un rôle comparable. Cette page décrit ce que BASYAM enregistre sur votre appareil, qu&apos;il s&apos;agisse de l&apos;application mobile, de la version web ou du site vitrine.
        </p>

        <h2>2. Ce que nous enregistrons sur votre appareil</h2>
        <p>
          Tout ce que nous enregistrons est strictement nécessaire au fonctionnement du service. Pour cette raison, ce stockage ne demande pas de consentement préalable.
        </p>
        <ul>
          <li>Votre jeton de connexion, qui vous évite de saisir votre mot de passe à chaque ouverture.</li>
          <li>Vos préférences, comme le thème, la taille du texte et l&apos;heure de votre rappel.</li>
          <li>Un cache de données et de fichiers de l&apos;application, qui la rend plus rapide.</li>
          <li>Si vous avez autorisé les notifications, un jeton technique qui permet de vous les envoyer.</li>
        </ul>

        <h2>3. Ce que nous n&apos;utilisons pas</h2>
        <ul>
          <li>Aucun cookie publicitaire ni outil de ciblage.</li>
          <li>Aucun outil de mesure d&apos;audience tiers.</li>
          <li>Aucun pixel de suivi ni bouton de réseau social.</li>
        </ul>
        <p>
          Si cela venait à changer, nous mettrions cette page à jour et nous vous demanderions votre accord avant toute utilisation.
        </p>

        <h2>4. Le site vitrine</h2>
        <p>
          Le site vitrine charge la police Nunito depuis le service Google Fonts. Lors de ce chargement, Google reçoit votre adresse IP et des informations techniques sur votre navigateur, comme pour toute ressource hébergée par un tiers. Nous ne déposons aucun cookie sur ce site.
        </p>

        <h2>5. Comment gérer ou effacer ces données ?</h2>
        <ul>
          <li>Dans l&apos;application, vous pouvez vous déconnecter, ce qui supprime votre jeton de connexion. Désinstaller l&apos;application efface aussi les données enregistrées sur l&apos;appareil.</li>
          <li>Dans votre navigateur, vous pouvez supprimer les données du site basyam.com depuis les réglages de confidentialité.</li>
          <li>Vous pouvez désactiver les notifications à tout moment dans les réglages de l&apos;application, de votre appareil ou de votre navigateur.</li>
        </ul>

        <div className="bg-[#F5EFED] rounded-2xl p-6 my-4">
          <p className="text-sm text-[#1C1010] mb-0">
            Bloquer le stockage nécessaire empêcherait le bon fonctionnement de BASYAM, notamment la connexion et l&apos;enregistrement de votre humeur.
          </p>
        </div>

        <h2>6. Pour en savoir plus</h2>
        <p>
          Le traitement de vos données personnelles est décrit dans notre{" "}
          <Link href="/legal/privacy" className="text-[#77021D] font-semibold underline">politique de confidentialité</Link>.
          Pour toute question relative aux cookies, écrivez à <strong>support@basyam.com</strong>.
        </p>

        <div className="text-center text-sm text-[#8A7070] pt-8 border-t border-[#EDE5E3]">
          <p>Dernière mise à jour : Octobre 2026</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-[#EDE5E3] animate-fadeUp delay-800">
        <Link href="/legal/terms" className="text-sm text-[#77021D] hover:text-[#E07B2A] transition-colors">
          ← CGU
        </Link>
        <Link href="/legal/privacy" className="text-sm text-[#77021D] hover:text-[#E07B2A] transition-colors">
          Confidentialité →
        </Link>
      </div>
    </main>
  );
}
