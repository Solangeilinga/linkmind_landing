"use client";
// app/legal/privacy/page.tsx
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#F5EFED] px-4 py-2 rounded-full mb-6 animate-floatBadge">
          <span className="w-2 h-2 bg-[#5BAD72] rounded-full animate-pulseDot" />
          <span className="text-xs font-semibold text-[#77021D] uppercase tracking-wider">
            Protection des données
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1010] mb-3 animate-fadeUp">
          Politique de Confidentialité
        </h1>
        <p className="text-[#8A7070] text-sm animate-fadeUp delay-200">
          Dernière mise à jour : Mai 2026
        </p>
      </div>

      {/* Badge RGPD */}
      <div className="bg-gradient-to-r from-[#5BAD72]/10 to-[#5B8FC4]/10 rounded-2xl p-4 mb-8 animate-fadeUp delay-350">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#5BAD72] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">RGPD</span>
          </div>
          <div>
            <div className="font-semibold text-[#1C1010]">Conforme au RGPD</div>
            <div className="text-xs text-[#8A7070]">Nous respectons vos droits sur vos données personnelles</div>
          </div>
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

        <h2>1. Qui sommes-nous ?</h2>
        <p>
          LinkMind est une application mobile de bien-être mental éditée par l&apos;équipe LinkMind. La présente politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez notre application.
        </p>
        <p>
          Pour toute question relative à vos données personnelles, vous pouvez nous contacter à : <strong>contact@linkmind.app</strong>
        </p>

        <h2>2. Quelles données collectons-nous ?</h2>
        
        <h3>2.1 Données d&apos;identification</h3>
        <ul>
          <li>Adresse email ou numéro de téléphone</li>
          <li>Âge (uniquement pour vérifier l&apos;âge minimum de 15 ans)</li>
          <li>Ville (optionnelle)</li>
        </ul>

        <h3>2.2 Données d&apos;activité</h3>
        <ul>
          <li>Suivi d&apos;humeur quotidien (émotions enregistrées)</li>
          <li>Interactions avec l&apos;assistant IA Mindo</li>
          <li>Participation aux défis bien-être</li>
          <li>Progression dans le système de gamification (points, niveaux)</li>
        </ul>

        <h3>2.3 Données communautaires</h3>
        <ul>
          <li>Publications dans l&apos;espace communautaire (anonymisées)</li>
          <li>Interactions avec les publications d&apos;autres utilisateurs</li>
          <li>Pseudonyme généré automatiquement</li>
        </ul>

        <h3>2.4 Données techniques</h3>
        <ul>
          <li>Type d&apos;appareil et système d&apos;exploitation</li>
          <li>Version de l&apos;application</li>
          <li>Données d&apos;utilisation anonymisées pour améliorer le service</li>
        </ul>

        <div className="bg-[#F5EFED] p-4 rounded-xl my-4">
          <p className="text-sm font-semibold text-[#77021D] mb-2">🔒 Ce que nous NE collectons PAS :</p>
          <ul className="text-sm mb-0">
            <li>Nom et prénom réels</li>
            <li>Adresse postale précise</li>
            <li>Données bancaires (les paiements sont gérés par des prestataires tiers sécurisés)</li>
            <li>Contenu des messages privés (nous n&apos;avons pas de messagerie privée)</li>
          </ul>
        </div>

        <h2>3. Comment utilisons-nous vos données ?</h2>
        <p>Nous utilisons vos données personnelles uniquement pour :</p>
        <ul>
          <li><strong>Fournir le service</strong> : permettre le fonctionnement de l&apos;application, le suivi d&apos;humeur, les recommandations personnalisées</li>
          <li><strong>Améliorer l&apos;expérience</strong> : personnaliser les défis, adapter les suggestions de bien-être</li>
          <li><strong>Analyser et optimiser</strong> : comprendre comment l&apos;application est utilisée pour l&apos;améliorer</li>
          <li><strong>Assurer la sécurité</strong> : détecter et prévenir les comportements abusifs ou frauduleux</li>
          <li><strong>Communiquer</strong> : vous envoyer des notifications importantes (rarement, uniquement liées au service)</li>
        </ul>

        <h2>4. Base légale du traitement</h2>
        <p>Conformément au RGPD, nous traitons vos données sur les bases légales suivantes :</p>
        <ul>
          <li><strong>Exécution du contrat</strong> : utilisation des fonctionnalités de l&apos;application (suivi d&apos;humeur, assistant IA)</li>
          <li><strong>Consentement</strong> : pour certaines fonctionnalités optionnelles (notifications, partage de données anonymes pour la recherche)</li>
          <li><strong>Intérêt légitime</strong> : pour améliorer nos services, analyser l&apos;utilisation, et assurer la sécurité</li>
          <li><strong>Obligation légale</strong> : pour répondre aux autorités judiciaires si requis</li>
        </ul>

        <h2>5. Combien de temps conservons-nous vos données ?</h2>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#F5EFED]">
                <th className="border border-[#EDE5E3] p-2 text-left">Type de données</th>
                <th className="border border-[#EDE5E3] p-2 text-left">Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Données de compte</td>
                <td className="border border-[#EDE5E3] p-2">Jusqu&apos;à suppression du compte + 30 jours</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Données d&apos;humeur et activité</td>
                <td className="border border-[#EDE5E3] p-2">Pendant toute la durée d&apos;utilisation active</td>
              </tr>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Publications communautaires</td>
                <td className="border border-[#EDE5E3] p-2">Anonymisées après suppression du compte</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Données anonymisées</td>
                <td className="border border-[#EDE5E3] p-2">Conservées indéfiniment à des fins statistiques</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>6. Partageons-nous vos données ?</h2>
        <p>Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données uniquement dans les cas suivants :</p>
        <ul>
          <li><strong>Prestataires techniques</strong> : hébergement (OVH, AWS, etc.), envoi d&apos;emails, analyse de données (tous signataires d&apos;accords de confidentialité)</li>
          <li><strong>Professionnels partenaires</strong> : uniquement si vous demandez explicitement une mise en relation (avec votre consentement)</li>
          <li><strong>Obligation légale</strong> : pour répondre à une injonction judiciaire ou administrative</li>
          <li><strong>Protection des droits</strong> : pour faire respecter nos CGU ou protéger la sécurité de nos utilisateurs</li>
        </ul>

        <div className="bg-[#5B8FC4]/10 border-l-4 border-[#5B8FC4] p-4 rounded-r-xl my-4">
          <p className="text-sm">
            <span className="font-semibold">🌍 Transferts internationaux :</span> Vos données sont hébergées au Burkina Faso et en France (UE), garantissant un niveau de protection conforme au RGPD.
          </p>
        </div>

        <h2>7. Quels sont vos droits ?</h2>
        <p>Conformément au RGPD et à la loi burkinabè sur la protection des données, vous disposez des droits suivants :</p>
        
        <div className="grid gap-3 my-4">
          <div className="bg-[#FAF7F5] rounded-xl p-3 flex items-start gap-3">
            <span className="text-xl">📖</span>
            <div>
              <div className="font-semibold">Droit d&apos;accès</div>
              <div className="text-sm text-[#8A7070]">Obtenir une copie de toutes vos données personnelles</div>
            </div>
          </div>
          <div className="bg-[#FAF7F5] rounded-xl p-3 flex items-start gap-3">
            <span className="text-xl">✏️</span>
            <div>
              <div className="font-semibold">Droit de rectification</div>
              <div className="text-sm text-[#8A7070]">Modifier vos informations inexactes</div>
            </div>
          </div>
          <div className="bg-[#FAF7F5] rounded-xl p-3 flex items-start gap-3">
            <span className="text-xl">🗑️</span>
            <div>
              <div className="font-semibold">Droit à l&apos;effacement (droit à l&apos;oubli)</div>
              <div className="text-sm text-[#8A7070]">Supprimer votre compte et vos données</div>
            </div>
          </div>
          <div className="bg-[#FAF7F5] rounded-xl p-3 flex items-start gap-3">
            <span className="text-xl">📦</span>
            <div>
              <div className="font-semibold">Droit à la portabilité</div>
              <div className="text-sm text-[#8A7070]">Récupérer vos données au format JSON</div>
            </div>
          </div>
          <div className="bg-[#FAF7F5] rounded-xl p-3 flex items-start gap-3">
            <span className="text-xl">⏸️</span>
            <div>
              <div className="font-semibold">Droit d&apos;opposition et limitation</div>
              <div className="text-sm text-[#8A7070]">Vous opposer à certains traitements de données</div>
            </div>
          </div>
        </div>

        <p>
          Pour exercer ces droits, rendez-vous dans votre <strong>Profil &gt; Paramètres &gt; Mes données</strong> dans l&apos;application, ou contactez-nous à <strong>contact@linkmind.app</strong>.
        </p>

        <h2>8. Sécurité des données</h2>
        <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles :</p>
        <ul>
          <li><strong>Chiffrement</strong> : tous les mots de passe sont hachés (bcrypt)</li>
          <li><strong>HTTPS/TLS</strong> : toutes les communications sont chiffrées</li>
          <li><strong>Authentification</strong> : code de vérification par email/SMS</li>
          <li><strong>Accès restreint</strong> : seuls les membres autorisés de l&apos;équipe accèdent aux données</li>
          <li><strong>Audits réguliers</strong> : nous vérifions régulièrement nos pratiques de sécurité</li>
        </ul>

        <h2>9. Cookies et technologies similaires</h2>
        <p>
          L&apos;application mobile LinkMind utilise très peu de cookies. Nous utilisons uniquement :
        </p>
        <ul>
          <li><strong>Cookies essentiels</strong> : pour maintenir votre session de connexion</li>
          <li><strong>Préférences</strong> : pour mémoriser vos paramètres (thème, notifications)</li>
          <li><strong>Analytiques anonymes</strong> : pour comprendre comment l&apos;application est utilisée (opt-out possible)</li>
        </ul>
        <p>
          Vous pouvez gérer vos préférences de cookies dans les paramètres de votre appareil.
        </p>

        <h2>10. Mineurs</h2>
        <p>
          LinkMind est destiné aux personnes âgées d&apos;au moins 15 ans. Nous ne collectons pas sciemment les données d&apos;enfants de moins de 15 ans. Si nous apprenons qu&apos;un utilisateur a moins de 15 ans, nous supprimons immédiatement son compte et ses données.
        </p>

        <h2>11. Modifications de cette politique</h2>
        <p>
          Nous pouvons mettre à jour cette politique de confidentialité. Toute modification substantielle vous sera notifiée via l&apos;application (notification push ou email). La poursuite de l&apos;utilisation de LinkMind après notification vaut acceptation des nouvelles conditions.
        </p>

        <h2>12. Nous contacter</h2>
        <div className="bg-[#F5EFED] rounded-2xl p-6 my-4">
          <p className="font-semibold mb-2">Pour toute question relative à vos données personnelles :</p>
          <p className="mb-1">📧 <a href="mailto:contact@linkmind.app" className="text-[#77021D] font-semibold hover:text-[#E07B2A] transition-colors">contact@linkmind.app</a></p>
          <p className="text-sm text-[#8A7070]">📮 Ou via notre formulaire de contact dans l&apos;application</p>
        </div>

        <div className="text-center text-sm text-[#8A7070] pt-8 border-t border-[#EDE5E3]">
          <p>Dernière mise à jour : Mai 2026</p>
        </div>
      </div>

      {/* Navigation entre pages légales */}
      <div className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-[#EDE5E3] animate-fadeUp delay-800">
        <Link href="/legal/terms" className="text-sm text-[#77021D] hover:text-[#E07B2A] transition-colors">
          ← CGU
        </Link>
        <Link href="/legal/cookies" className="text-sm text-[#77021D] hover:text-[#E07B2A] transition-colors">
          Politique des cookies →
        </Link>
      </div>
    </main>
  );
}