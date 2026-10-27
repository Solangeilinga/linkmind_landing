"use client"
// app/legal/legal-notice/page.tsx
import Link from "next/link";

export default function LegalNoticePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#F5EFED] px-4 py-2 rounded-full mb-6 animate-floatBadge">
          <span className="w-2 h-2 bg-[#77021D] rounded-full animate-pulseDot" />
          <span className="text-xs font-semibold text-[#77021D] uppercase tracking-wider">
            Informations légales
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1010] mb-3 animate-fadeUp">
          Mentions Légales
        </h1>
        <p className="text-[#8A7070] text-sm animate-fadeUp delay-200">
          Dernière mise à jour : Octobre 2026
        </p>
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

        {/* À compléter avec les informations officielles de la structure éditrice (forme juridique, immatriculation, siège, directeur de la publication) lorsqu'elles seront disponibles. */}
        <h2>1. Éditeur de l&apos;application</h2>
        <div className="bg-[#FAF7F5] rounded-xl p-5 my-4 space-y-2">
          <p><span className="font-semibold">Nom :</span> BASYAM, application de bien-être mental</p>
          <p><span className="font-semibold">Contact :</span> <a href="mailto:support@basyam.com" className="text-[#77021D] hover:text-[#E07B2A] transition-colors">support@basyam.com</a></p>
        </div>

        <h2>2. Hébergement</h2>
        <p>
          L&apos;application BASYAM et ses sites sont hébergés auprès de prestataires d&apos;hébergement informatique en ligne. Le traitement des données personnelles est décrit dans notre{" "}
          <Link href="/legal/privacy" className="text-[#77021D] hover:text-[#E07B2A] transition-colors">politique de confidentialité</Link>.
        </p>

        <h2>3. Protection des données personnelles</h2>
        <p>
          Le traitement des données personnelles est régi par la loi burkinabè sur la protection des données personnelles. Pour toute demande concernant vos données, écrivez à{" "}
          <a href="mailto:support@basyam.com" className="text-[#77021D] hover:text-[#E07B2A] transition-colors">support@basyam.com</a>.
          Vos droits et les modalités de leur exercice sont détaillés dans la politique de confidentialité.
        </p>

        <h2>4. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble de l&apos;application BASYAM, notamment son design, ses textes, ses illustrations, ses logos, son code source et sa base de données, est la propriété exclusive de BASYAM. Toute reproduction, modification ou exploitation non autorisée est interdite.
        </p>

        <h2>5. Crédits</h2>
        <ul>
          <li>Polices : Nunito (Google Fonts, licence OFL)</li>
          <li>Illustrations : Freepik (licence premium) et illustrations personnalisées BASYAM</li>
        </ul>

        <h2>6. Conditions d&apos;utilisation</h2>
        <p>
          L&apos;utilisation de l&apos;application BASYAM est régie par nos{" "}
          <Link href="/legal/terms" className="text-[#77021D] hover:text-[#E07B2A] transition-colors">Conditions Générales d&apos;Utilisation</Link>{" "}
          et notre{" "}
          <Link href="/legal/privacy" className="text-[#77021D] hover:text-[#E07B2A] transition-colors">Politique de Confidentialité</Link>.
        </p>

        <h2>7. Contact</h2>
        <div className="bg-[#F5EFED] rounded-2xl p-6 my-4 text-center">
          <p className="font-semibold text-[#1C1010] mb-2">Pour toute question ou demande officielle :</p>
          <a
            href="mailto:support@basyam.com"
            className="text-xl font-bold text-[#77021D] hover:text-[#E07B2A] transition-colors"
          >
            support@basyam.com
          </a>
        </div>

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
          Confidentialité
        </Link>
        <Link href="/legal/cookies" className="text-sm text-[#77021D] hover:text-[#E07B2A] transition-colors">
          Cookies
        </Link>
      </div>
    </main>
  );
}
