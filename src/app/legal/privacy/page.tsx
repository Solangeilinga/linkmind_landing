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
          Dernière mise à jour : Octobre 2026 · Version 2026-10
        </p>
      </div>

      {/* En bref */}
      <div className="bg-gradient-to-r from-[#5BAD72]/10 to-[#5B8FC4]/10 rounded-2xl p-5 mb-8 animate-fadeUp delay-350">
        <div className="font-semibold text-[#1C1010] mb-2">En bref</div>
        <ul className="text-sm text-[#2d2d2d] list-disc ml-5 space-y-1">
          <li>BASYAM est une application de bien-être mental réservée aux personnes de 18 ans et plus.</li>
          <li>Votre humeur et vos notes sont des données sensibles. Nous les utilisons uniquement pour faire fonctionner le service, jamais pour de la publicité, et nous ne les vendons pas.</li>
          <li>Dans la communauté, les autres membres vous voient uniquement sous un pseudo.</li>
          <li>Vous pouvez accéder à vos données, les exporter, les corriger ou supprimer votre compte à tout moment.</li>
          <li>Pour toute question, écrivez-nous à support@basyam.com.</li>
        </ul>
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

        <h2>1. Qui est responsable de vos données ?</h2>
        <p>
          Le responsable du traitement est BASYAM, éditeur de l&apos;application, dont les coordonnées figurent dans nos{" "}
          <Link href="/legal/legal-notice" className="text-[#77021D] font-semibold underline">mentions légales</Link>.
          Pour toute question ou demande concernant vos données personnelles, écrivez à <strong>support@basyam.com</strong>.
        </p>

        <h2>2. Quelles données collectons-nous ?</h2>

        <h3>2.1 Données de compte</h3>
        <ul>
          <li>Adresse email ou numéro de téléphone</li>
          <li>Mot de passe, conservé sous forme hachée et jamais en clair</li>
          <li>Pseudo anonyme, choisi par vous ou généré automatiquement</li>
          <li>Âge, ville et pays</li>
          <li>Genre, de manière facultative</li>
        </ul>

        <h3>2.2 Données de bien-être (données sensibles)</h3>
        <ul>
          <li>Humeur quotidienne, niveau de stress et facteurs que vous indiquez</li>
          <li>Notes personnelles que vous ajoutez, qui sont chiffrées</li>
          <li>Objectifs choisis, défis réalisés, points, badges et séries de jours</li>
        </ul>

        <h3>2.3 Bouton « Besoin d&apos;aide maintenant »</h3>
        <p>
          Lorsque vous utilisez ce bouton, une alerte est transmise à l&apos;équipe de suivi, accompagnée le cas échéant d&apos;un court extrait (200 caractères au maximum) du message que vous avez saisi. Un membre de l&apos;équipe peut ainsi réagir et suivre la situation.
        </p>

        <h3>2.4 Communauté</h3>
        <ul>
          <li>Publications, commentaires et réactions</li>
          <li>Signalements effectués ou reçus</li>
        </ul>

        <h3>2.5 Rendez-vous avec les professionnels</h3>
        <ul>
          <li>Demandes de rendez-vous, créneaux et mode de consultation (en ligne ou en personne)</li>
          <li>Informations que vous choisissez de communiquer au professionnel</li>
          <li>Avis laissé après une consultation</li>
        </ul>

        <h3>2.6 Données techniques et de sécurité</h3>
        <ul>
          <li>Type d&apos;appareil ou de navigateur, système d&apos;exploitation et version de l&apos;application</li>
          <li>Identifiant d&apos;appareil, adresse IP de connexion et dates de connexion</li>
          <li>Jeton de notification, nécessaire à l&apos;envoi des notifications</li>
          <li>Journaux techniques et indicateurs de sécurité, comme les tentatives de connexion échouées ou les signalements d&apos;abus</li>
        </ul>

        <h3>2.7 Préférences</h3>
        <ul>
          <li>Heure du rappel quotidien, notifications, thème et taille du texte</li>
        </ul>

        <div className="bg-[#F5EFED] p-4 rounded-xl my-4">
          <p className="text-sm font-semibold text-[#77021D] mb-2">Ce que nous ne collectons pas</p>
          <ul className="text-sm mb-0">
            <li>Votre nom et prénom réels</li>
            <li>Votre adresse postale</li>
            <li>Vos coordonnées bancaires</li>
            <li>Votre position géographique précise</li>
            <li>Vos contacts, votre micro ou votre caméra</li>
            <li>Des messages privés, car l&apos;application n&apos;en propose pas</li>
          </ul>
        </div>

        <h2>3. Pourquoi utilisons-nous vos données, et sur quelle base ?</h2>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#F5EFED]">
                <th className="border border-[#EDE5E3] p-2 text-left">Finalité</th>
                <th className="border border-[#EDE5E3] p-2 text-left">Base légale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Créer et gérer votre compte, faire fonctionner l&apos;application</td>
                <td className="border border-[#EDE5E3] p-2">Exécution du contrat (les CGU)</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Traiter vos données de bien-être (humeur, stress, notes, objectifs)</td>
                <td className="border border-[#EDE5E3] p-2">Votre consentement explicite</td>
              </tr>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Transmettre une alerte quand vous utilisez « Besoin d&apos;aide maintenant »</td>
                <td className="border border-[#EDE5E3] p-2">Votre demande volontaire, qui vaut consentement</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Personnaliser les défis et les rappels</td>
                <td className="border border-[#EDE5E3] p-2">Exécution du contrat et votre consentement</td>
              </tr>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Envoyer des notifications</td>
                <td className="border border-[#EDE5E3] p-2">Votre autorisation, donnée dans votre appareil ou navigateur</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Vous mettre en relation avec un professionnel</td>
                <td className="border border-[#EDE5E3] p-2">Votre demande et l&apos;exécution du contrat</td>
              </tr>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Assurer la sécurité, prévenir les abus et modérer la communauté</td>
                <td className="border border-[#EDE5E3] p-2">Notre intérêt légitime à protéger les utilisateurs et la plateforme</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Répondre à une demande des autorités</td>
                <td className="border border-[#EDE5E3] p-2">Obligation légale</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          En créant votre compte puis en renseignant votre humeur, vous consentez expressément au traitement de vos données de bien-être. Vous pouvez retirer ce consentement à tout moment en supprimant les données concernées ou votre compte, sans que cela remette en cause ce qui a été fait auparavant.
        </p>
        <p>
          Nous ne vendons pas vos données et nous ne les utilisons pas à des fins publicitaires. Elles ne sont jamais transmises à des assureurs ni à des employeurs.
        </p>

        <h2>4. Personnalisation et mesures automatiques</h2>
        <ul>
          <li>Les défis proposés s&apos;adaptent à votre humeur et à votre historique.</li>
          <li>Certains rappels et notifications tiennent compte de vos habitudes, par exemple une invitation à faire un défi après des journées difficiles.</li>
          <li>Des mesures de sécurité automatiques peuvent limiter temporairement un compte en cas d&apos;activité anormale, comme des tentatives de connexion répétées ou du spam.</li>
        </ul>
        <p>
          Ces mécanismes n&apos;établissent aucun diagnostic et ne produisent aucun effet juridique. Si votre compte est restreint, vous pouvez demander à un membre de l&apos;équipe de réexaminer la situation en écrivant à support@basyam.com.
        </p>

        <h2>5. Communauté et anonymat</h2>
        <p>
          Les autres membres, ainsi que les professionnels qui participent à la communauté, voient uniquement votre pseudo et le contenu que vous publiez. Votre email et les informations de votre compte ne sont jamais affichés.
        </p>
        <p>
          Les personnes habilitées de l&apos;équipe peuvent consulter les contenus signalés pour assurer la modération, ainsi que les données de compte nécessaires au support et à la sécurité. Cet accès est limité à ces besoins.
        </p>
        <p>
          Évitez de publier des informations qui permettraient de vous identifier ou d&apos;identifier un tiers, car un texte libre peut contenir de telles informations. Lorsque vous supprimez votre compte, vos publications sont anonymisées, c&apos;est-à-dire détachées de votre compte. Vous pouvez aussi les supprimer vous-même avant.
        </p>

        <h2>6. Rendez-vous avec un professionnel</h2>
        <p>
          Lorsque vous demandez un rendez-vous, nous transmettons au professionnel les informations nécessaires à la consultation, ainsi que celles que vous choisissez de lui communiquer. Le professionnel est responsable de son propre suivi et soumis aux obligations de confidentialité de sa profession.
        </p>
        <p>
          Les consultations en ligne peuvent passer par un outil de visioconférence choisi par le professionnel. La politique de confidentialité de cet outil s&apos;applique alors à la séance.
        </p>

        <h2>7. Avec qui partageons-nous vos données ?</h2>
        <ul>
          <li>Nos prestataires techniques, qui agissent sur nos instructions et sont tenus à la confidentialité : hébergement et base de données, envoi d&apos;emails, stockage d&apos;images, et notifications via Firebase Cloud Messaging de Google.</li>
          <li>Le professionnel que vous avez choisi, dans les conditions décrites à la section 6.</li>
          <li>Les autorités, lorsque la loi nous y oblige.</li>
          <li>Toute personne concernée, lorsque cela est nécessaire pour protéger nos droits ou la sécurité des utilisateurs.</li>
        </ul>
        <div className="bg-[#5B8FC4]/10 border-l-4 border-[#5B8FC4] p-4 rounded-r-xl my-4">
          <p className="text-sm">
            Certains prestataires peuvent traiter des données en dehors du pays où vous vivez. Nous veillons à ce que ces transferts soient encadrés par des garanties appropriées, conformes à la loi applicable.
          </p>
        </div>

        <h2>8. Combien de temps conservons-nous vos données ?</h2>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#F5EFED]">
                <th className="border border-[#EDE5E3] p-2 text-left">Données</th>
                <th className="border border-[#EDE5E3] p-2 text-left">Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Compte et profil</td>
                <td className="border border-[#EDE5E3] p-2">Durée du compte, puis suppression dans les 30 jours qui suivent votre demande</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Données de bien-être, défis, points et badges</td>
                <td className="border border-[#EDE5E3] p-2">Durée du compte, puis suppression dans les 30 jours qui suivent la suppression du compte</td>
              </tr>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Alertes « Besoin d&apos;aide maintenant »</td>
                <td className="border border-[#EDE5E3] p-2">12 mois au maximum, puis suppression</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Publications communautaires</td>
                <td className="border border-[#EDE5E3] p-2">Anonymisées lors de la suppression du compte</td>
              </tr>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Rendez-vous</td>
                <td className="border border-[#EDE5E3] p-2">Le temps nécessaire à la gestion du rendez-vous et au suivi de votre compte. Le professionnel conserve son propre dossier selon ses obligations.</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Journaux techniques et adresses IP</td>
                <td className="border border-[#EDE5E3] p-2">12 mois au maximum</td>
              </tr>
              <tr>
                <td className="border border-[#EDE5E3] p-2">Compte inactif</td>
                <td className="border border-[#EDE5E3] p-2">Un compte inactif depuis plus de 24 mois peut être supprimé, après un préavis par email</td>
              </tr>
              <tr className="bg-[#FAF7F5]">
                <td className="border border-[#EDE5E3] p-2">Statistiques anonymisées</td>
                <td className="border border-[#EDE5E3] p-2">Sans limite de durée, car elles ne permettent plus de vous identifier</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Les copies de sauvegarde sont renouvelées régulièrement. Une donnée supprimée peut donc subsister quelque temps dans une sauvegarde avant d&apos;être définitivement effacée.
        </p>

        <h2>9. Quels sont vos droits ?</h2>
        <p>Conformément à la loi burkinabè sur la protection des données personnelles et, lorsqu&apos;il s&apos;applique, au RGPD, vous disposez des droits suivants.</p>
        <ul>
          <li>Le droit d&apos;accéder à vos données et d&apos;en obtenir une copie.</li>
          <li>Le droit de corriger les informations inexactes.</li>
          <li>
            Le droit à l&apos;effacement : vous pouvez supprimer votre compte et vos données directement dans l&apos;application, dans les réglages, ou, si vous n&apos;y avez plus accès,{" "}
            <Link href="/legal/account-deletion" className="text-[#77021D] font-semibold underline">
              via cette page
            </Link>
            .
          </li>
          <li>Le droit à la portabilité : vous pouvez récupérer vos données dans un format structuré (JSON).</li>
          <li>Le droit de vous opposer à certains traitements ou d&apos;en demander la limitation.</li>
          <li>Le droit de retirer votre consentement à tout moment.</li>
        </ul>
        <p>
          Pour exercer ces droits, rendez-vous dans <strong>Profil, Paramètres, puis Mes données</strong>, ou écrivez à <strong>support@basyam.com</strong> depuis l&apos;adresse de votre compte. Nous répondons dans un délai d&apos;un mois. Pour protéger votre compte, nous pouvons vous demander de confirmer votre identité.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la Commission de l&apos;informatique et des libertés (CIL) du Burkina Faso, ou l&apos;autorité de protection des données de votre pays de résidence.
        </p>

        <h2>10. Comment protégeons-nous vos données ?</h2>
        <ul>
          <li>Les échanges entre l&apos;application et nos serveurs sont chiffrés (HTTPS).</li>
          <li>Les mots de passe sont hachés et vos notes d&apos;humeur sont chiffrées.</li>
          <li>L&apos;accès aux données est limité aux personnes habilitées.</li>
          <li>Un code de vérification est envoyé par email à la création du compte.</li>
          <li>Les tentatives de connexion répétées entraînent un verrouillage temporaire, et une nouvelle connexion sur un autre appareil déconnecte l&apos;ancien.</li>
        </ul>
        <p>
          En cas de violation de données présentant un risque pour vous, nous vous en informons, ainsi que l&apos;autorité compétente, dans les délais prévus par la loi.
        </p>

        <h2>11. Stockage sur votre appareil et notifications</h2>
        <p>
          L&apos;application mobile et la version web enregistrent sur votre appareil uniquement des données nécessaires à leur fonctionnement : votre jeton de connexion, vos préférences et un cache. Nous n&apos;utilisons ni cookies publicitaires ni outil de mesure d&apos;audience tiers.
        </p>
        <p>
          Les notifications ne sont envoyées qu&apos;avec votre autorisation. Vous pouvez les désactiver à tout moment dans les réglages de l&apos;application, de votre appareil ou de votre navigateur.
        </p>

        <h2>12. Mineurs</h2>
        <p>
          BASYAM est réservé aux personnes âgées d&apos;au moins 18 ans, ce que vous déclarez à l&apos;inscription. Si nous apprenons qu&apos;un utilisateur est mineur, nous suspendons son compte puis le supprimons avec ses données. Si vous pensez qu&apos;un mineur utilise BASYAM, écrivez-nous à support@basyam.com.
        </p>

        <h2>13. Modifications de cette politique</h2>
        <p>
          Nous pouvons mettre à jour cette politique. La date et la version figurent en haut de cette page. Toute modification importante vous est signalée dans l&apos;application ou par email. Si vous continuez à utiliser BASYAM après cette information, les nouvelles conditions s&apos;appliquent.
        </p>

        <h2>14. Nous contacter</h2>
        <div className="bg-[#F5EFED] rounded-2xl p-6 my-4">
          <p className="font-semibold mb-2">Pour toute question relative à vos données personnelles :</p>
          <p className="mb-1"><a href="mailto:support@basyam.com" className="text-[#77021D] font-semibold hover:text-[#E07B2A] transition-colors">support@basyam.com</a></p>
          <p className="text-sm text-[#8A7070]">Indiquez « Données personnelles » dans l&apos;objet de votre message.</p>
        </div>

        <div className="text-center text-sm text-[#8A7070] pt-8 border-t border-[#EDE5E3]">
          <p>Dernière mise à jour : Octobre 2026 · Version 2026-10</p>
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
