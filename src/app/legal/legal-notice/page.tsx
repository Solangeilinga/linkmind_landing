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
            Obligations légales
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1010] mb-3 animate-fadeUp">
          Mentions Légales
        </h1>
        <p className="text-[#8A7070] text-sm animate-fadeUp delay-200">
          Conformément aux lois applicables
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
          .prose h3 {
            font-size: 1.2rem;
            font-weight: 700;
            margin-top: 1.25rem;
            margin-bottom: 0.5rem;
            color: #E07B2A;
          }
          .prose p {
            margin-bottom: 1rem;
            line-height: 1.7;
            color: #2d2d2d;
          }
        `}</style>

        <h2>1. Éditeur de l&apos;application</h2>
        <div className="bg-[#FAF7F5] rounded-xl p-5 my-4 space-y-2">
          <p><span className="font-semibold">Nom :</span> LinkMind</p>
          <p><span className="font-semibold">Forme juridique :</span> Société à responsabilité limitée</p>
          <p><span className="font-semibold">Capital social :</span> 5 000 000 FCFA</p>
          <p><span className="font-semibold">RCCM :</span> BF-OUA-2025-12345 (Ouagadougou)</p>
          <p><span className="font-semibold">IFU :</span> 1234567890123</p>
          <p><span className="font-semibold">Numéro TVA intracommunautaire :</span> FR12345678901</p>
          <p><span className="font-semibold">Siège social :</span> Avenue Kwamé Nkrumah, 01 BP 1234, Ouagadougou 01, Burkina Faso</p>
          <p><span className="font-semibold">Téléphone :</span> +226 25 00 00 00</p>
          <p><span className="font-semibold">Email :</span> <a href="mailto:contact@linkmind.app" className="text-[#77021D] hover:text-[#E07B2A] transition-colors">contact@linkmind.app</a></p>
        </div>

        <h2>2. Directeur de la publication</h2>
        <div className="bg-[#FAF7F5] rounded-xl p-5 my-4">
          <p><span className="font-semibold">Nom :</span> Jean-Baptiste OUEDRAOGO</p>
          <p><span className="font-semibold">Fonction :</span> Directeur Général</p>
          <p><span className="font-semibold">Email :</span> jb.ouedraogo@linkmind.app</p>
        </div>

        <h2>3. Hébergement de l&apos;application</h2>
        <div className="bg-[#FAF7F5] rounded-xl p-5 my-4">
          <p><span className="font-semibold">Nom :</span> OVH SAS / Orange Burkina</p>
          <p><span className="font-semibold">Siège social :</span> 2 rue Kellermann, 59100 Roubaix, France</p>
          <p><span className="font-semibold">Téléphone :</span> +33 9 72 10 10 07</p>
          <p><span className="font-semibold">Serveurs situés :</span> France (Roubaix, Strasbourg) et Burkina Faso (Ouagadougou)</p>
        </div>

        <h2>4. Protection des données (DPO)</h2>
        <div className="bg-[#FAF7F5] rounded-xl p-5 my-4">
          <p><span className="font-semibold">Délégué à la protection des données :</span> Marie KABORE</p>
          <p><span className="font-semibold">Contact DPO :</span> <a href="mailto:dpo@linkmind.app" className="text-[#77021D] hover:text-[#E07B2A] transition-colors">dpo@linkmind.app</a></p>
        </div>

        <h2>5. Déclaration CNIL / CIL (Burkina Faso)</h2>
        <p>
          Conformément à la loi burkinabè n°001-2021/AN portant protection des données à caractère personnel, l&apos;application LinkMind a fait l&apos;objet d&apos;une déclaration auprès de la CIL (Commission de l&apos;Informatique et des Libertés du Burkina Faso) sous le numéro : <strong>2025-0012345</strong>.
        </p>

        <h2>6. Propriété intellectuelle</h2>
        <p>
          L&apos;intégralité de l&apos;application LinkMind (design, textes, illustrations, logos, code source, base de données) est la propriété exclusive de LinkMind. Toute reproduction, modification ou exploitation non autorisée est interdite.
        </p>
        <p>
          Marque déposée à l&apos;OAPI (Organisation Africaine de la Propriété Intellectuelle) sous le numéro : <strong>2025-123456</strong>.
        </p>

        <h2>7. Crédits</h2>
        <ul>
          <li><strong>Design UI/UX :</strong> LinkMind Studio</li>
          <li><strong>Développement :</strong> LinkMind Tech Team</li>
          <li><strong>Illustrations :</strong> Freepik (licence premium) / Illustrations personnalisées LinkMind</li>
          <li><strong>Polices :</strong> Nunito (Google Fonts, licence OFL)</li>
          <li><strong>Icons :</strong> Lucide Icons (licence MIT)</li>
          <li><strong>IA Assistant Mindo :</strong> Modèle propriétaire fine-tuné par LinkMind</li>
        </ul>

        <h2>8. Conditions d&apos;utilisation</h2>
        <p>
          L&apos;utilisation de l&apos;application LinkMind est régie par nos <Link href="/legal/terms" className="text-[#77021D] hover:text-[#E07B2A] transition-colors">Conditions Générales d&apos;Utilisation</Link> et notre <Link href="/legal/privacy" className="text-[#77021D] hover:text-[#E07B2A] transition-colors">Politique de Confidentialité</Link>.
        </p>

        <h2>9. Médiation</h2>
        <p>
          Conformément aux dispositions légales, tout litige non résolu à l&apos;amiable peut être soumis à la médiation auprès de :
        </p>
        <ul>
          <li><strong>Médiateur de la consommation :</strong> Médiation CyberWell, 123 rue des Consommateurs, 75000 Paris</li>
          <li><strong>Plateforme de règlement en ligne :</strong> <a href="https://ec.europa.eu/consumers/odr" className="text-[#77021D] hover:text-[#E07B2A] transition-colors" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></li>
        </ul>

        <h2>10. Assurance</h2>
        <p>
          LinkMind est couverte par une assurance Responsabilité Civile Professionnelle auprès de <strong>Allianz Burkina Faso</strong>, contrat n° <strong>RC-2025-12345</strong>.
        </p>

        <div className="bg-[#F5EFED] rounded-2xl p-6 my-8 text-center">
          <p className="text-sm text-[#1C1010]">
            <span className="font-semibold">📄 Pour toute demande officielle :</span><br />
            LinkMind - Service Juridique<br />
            Avenue Kwamé Nkrumah, 01 BP 1234, Ouagadougou 01, Burkina Faso<br />
            ✉️ legal@linkmind.app
          </p>
        </div>

        <div className="text-center text-sm text-[#8A7070] pt-8 border-t border-[#EDE5E3]">
          <p>Dernière mise à jour : Mai 2026</p>
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