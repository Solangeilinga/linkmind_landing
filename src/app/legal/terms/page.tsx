"use client";
// app/legal/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Header avec animation */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#F5EFED] px-4 py-2 rounded-full mb-6 animate-floatBadge">
          <span className="w-2 h-2 bg-[#F5B731] rounded-full animate-pulseDot" />
          <span className="text-xs font-semibold text-[#77021D] uppercase tracking-wider">
            Document légal
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1C1010] mb-3 animate-fadeUp">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-[#8A7070] text-sm animate-fadeUp delay-200">
          Dernière mise à jour : Mai 2026 · Version 2025-01
        </p>
      </div>

      {/* Version badge */}
      <div className="bg-[#F5EFED] rounded-2xl p-4 mb-8 flex items-center justify-between flex-wrap gap-3 animate-fadeUp delay-350">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#77021D] rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">CGU</span>
          </div>
          <div>
            <div className="font-semibold text-[#1C1010]">Version 2025-01</div>
            <div className="text-xs text-[#8A7070]">En vigueur depuis Mai 2026</div>
          </div>
        </div>
        <Link 
          href="/legal/privacy" 
          className="text-sm text-[#77021D] font-semibold hover:text-[#E07B2A] transition-colors"
        >
          Voir aussi notre politique de confidentialité →
        </Link>
      </div>

      {/* Contenu des CGU */}
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
          .prose hr {
            margin: 2rem 0;
            border-color: #EDE5E3;
          }
        `}</style>

        <h2>Préambule</h2>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation (ci-après &quot;CGU&quot;) régissent l&apos;accès et l&apos;utilisation de l&apos;application mobile LinkMind (ci-après &quot;l&apos;Application&quot;), développée et exploitée par l&apos;équipe LinkMind (ci-après &quot;Nous&quot; ou &quot;LinkMind&quot;).
        </p>
        <p>
          En créant un compte et en utilisant l&apos;Application, vous reconnaissez avoir lu, compris et accepté sans réserve les présentes CGU. Si vous n&apos;acceptez pas ces conditions, vous ne devez pas utiliser l&apos;Application.
        </p>

        <h2>Article 1 — Objet</h2>
        <p>
          LinkMind est une application mobile de bien-être mental destinée aux jeunes âgés de 15 ans et plus. Elle propose des outils de suivi d&apos;humeur, un assistant conversationnel basé sur l&apos;intelligence artificielle, des défis de bien-être, une communauté d&apos;entraide anonyme, et un accès à des professionnels de santé mentale partenaires.
        </p>
        <p className="bg-[#F5EFED] p-4 rounded-xl italic">
          LinkMind est un outil de soutien au bien-être et ne constitue en aucun cas un service médical, un dispositif de diagnostic, ni un substitut à une consultation professionnelle.
        </p>

        <h2>Article 2 — Conditions d&apos;accès</h2>
        <h3>2.1 Âge minimum</h3>
        <p>
          L&apos;utilisation de LinkMind est réservée aux personnes âgées d&apos;au moins 15 ans. En créant un compte, vous certifiez avoir atteint cet âge. LinkMind se réserve le droit de suspendre tout compte dont l&apos;utilisateur s&apos;avèrerait être mineur en dessous de cet âge, sans préavis.
        </p>

        <h3>2.2 Création de compte</h3>
        <p>
          L&apos;accès à l&apos;Application requiert la création d&apos;un compte via une adresse email valide ou un numéro de téléphone. Vous vous engagez à fournir des informations exactes lors de l&apos;inscription et à les maintenir à jour. Chaque utilisateur ne peut détenir qu&apos;un seul compte actif.
        </p>

        <h3>2.3 Sécurité du compte</h3>
        <p>
          Vous êtes seul responsable de la confidentialité de vos identifiants de connexion. Toute activité réalisée depuis votre compte est réputée effectuée par vous. En cas de suspicion de compromission, vous devez en informer immédiatement LinkMind.
        </p>

        <h3>2.4 Vérification de l&apos;identité</h3>
        <p>
          Un code de vérification est envoyé par email ou SMS lors de la création du compte. La validation de ce code est obligatoire pour accéder à l&apos;ensemble des fonctionnalités de l&apos;Application.
        </p>

        <h2>Article 3 — Description des services</h2>
        <h3>3.1 Suivi d&apos;humeur</h3>
        <p>
          L&apos;Application permet à l&apos;utilisateur d&apos;enregistrer son état émotionnel quotidiennement, de visualiser son évolution sur plusieurs jours et d&apos;accéder à des recommandations personnalisées basées sur ses données.
        </p>

        <h3>3.2 Assistant Mindo</h3>
        <p>
          Mindo est un assistant conversationnel propulsé par l&apos;intelligence artificielle. Il est conçu pour offrir une écoute, des suggestions de bien-être et orienter l&apos;utilisateur vers des ressources appropriées. Mindo n&apos;est pas un professionnel de santé et ses réponses ne constituent pas un avis médical ou psychologique. En version gratuite, son utilisation est limitée à 10 messages par jour.
        </p>

        <h3>3.3 Défis bien-être</h3>
        <p>
          Des défis quotidiens sont proposés à l&apos;utilisateur en fonction de son humeur. Leur réalisation génère des points et contribue à la progression dans le système de gamification de l&apos;Application.
        </p>

        <h3>3.4 Communauté anonyme</h3>
        <p>
          L&apos;Application propose un espace communautaire où les utilisateurs peuvent partager leurs ressentis de manière anonyme, interagir avec les publications d&apos;autres membres et apporter leur soutien. Chaque utilisateur est identifié dans la communauté par un pseudonyme généré automatiquement.
        </p>

        <h3>3.5 Accès aux professionnels</h3>
        <p>
          LinkMind propose un annuaire de professionnels de santé mentale partenaires. La mise en relation avec ces professionnels est facilitée par l&apos;Application, mais LinkMind n&apos;est pas partie au contrat de prestation entre l&apos;utilisateur et le professionnel, et ne saurait être tenu responsable du contenu des consultations.
        </p>

        <h3>3.6 Fonctionnalités Premium</h3>
        <p>
          Certaines fonctionnalités avancées sont réservées aux abonnés Premium, notamment l&apos;accès illimité à Mindo, la génération de rapports PDF mensuels et la suppression des publicités. Les conditions tarifaires sont précisées dans l&apos;Application.
        </p>

        <h2>Article 4 — Règles de conduite et contenu interdit</h2>
        <p>En utilisant l&apos;Application, et notamment la fonctionnalité communautaire, vous vous engagez à respecter les règles suivantes.</p>

        <h3>4.1 Contenus interdits</h3>
        <p>Il est strictement interdit de publier, diffuser ou partager tout contenu qui :</p>
        <ul>
          <li>incite à la haine, à la discrimination ou à la violence fondées sur l&apos;origine, le sexe, la religion, l&apos;orientation sexuelle, le handicap ou toute autre caractéristique personnelle ;</li>
          <li>constitue du harcèlement, de l&apos;intimidation ou des menaces envers un autre utilisateur ;</li>
          <li>fait l&apos;apologie du suicide, de l&apos;automutilation ou de tout comportement dangereux pour soi ou pour autrui ;</li>
          <li>contient des informations personnelles identifiables sur des tiers sans leur consentement ;</li>
          <li>diffuse des contenus à caractère sexuel explicite ou violent ;</li>
          <li>constitue de la publicité, du spam ou de la sollicitation commerciale non autorisée ;</li>
          <li>porte atteinte aux droits de propriété intellectuelle de tiers.</li>
        </ul>

        <h3>4.2 Comportements interdits</h3>
        <p>Il est également interdit de :</p>
        <ul>
          <li>tenter de contourner les mécanismes d&apos;anonymat pour identifier d&apos;autres utilisateurs ;</li>
          <li>utiliser l&apos;Application à des fins de collecte de données sur d&apos;autres utilisateurs ;</li>
          <li>usurper l&apos;identité d&apos;un autre utilisateur, d&apos;un professionnel ou d&apos;un membre de l&apos;équipe LinkMind ;</li>
          <li>tenter d&apos;accéder de façon non autorisée aux systèmes informatiques de l&apos;Application.</li>
        </ul>

        <h3>4.3 Modération</h3>
        <p>
          LinkMind se réserve le droit de supprimer tout contenu contrevenant aux présentes règles et de suspendre ou clôturer tout compte dont le comportement serait incompatible avec les valeurs de bienveillance et de respect qui fondent la communauté LinkMind, sans préavis ni indemnité.
        </p>

        <h2>Article 5 — Avertissement médical et limites de l&apos;Application</h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl my-4">
          <p className="text-red-700 font-semibold mb-1">⚠️ Attention</p>
          <p className="text-red-600 text-sm">
            LinkMind n&apos;est PAS un service médical d&apos;urgence.
          </p>
        </div>
        
        <h3>5.1 Pas un service médical</h3>
        <p>
          LinkMind est un outil de soutien au bien-être général. L&apos;Application, ses contenus, son assistant IA et les informations qu&apos;elle fournit ne constituent en aucun cas un diagnostic médical, un traitement psychiatrique, ni un avis psychologique professionnel.
        </p>

        <h3>5.2 Situations d&apos;urgence</h3>
        <p>
          Si vous êtes en situation de détresse grave, de crise suicidaire ou si votre vie ou celle d&apos;autrui est en danger, ne vous fiez pas à l&apos;Application. Contactez immédiatement les services d&apos;urgence de votre pays :
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
          <div className="bg-[#77021D]/10 rounded-xl p-3 text-center">
            <div className="font-bold text-[#77021D]">SAMU</div>
            <div className="text-2xl font-black">15</div>
          </div>
          <div className="bg-[#77021D]/10 rounded-xl p-3 text-center">
            <div className="font-bold text-[#77021D]">Police</div>
            <div className="text-2xl font-black">17</div>
          </div>
          <div className="bg-[#77021D]/10 rounded-xl p-3 text-center">
            <div className="font-bold text-[#77021D]">Pompiers</div>
            <div className="text-2xl font-black">18</div>
          </div>
        </div>

        <h3>5.3 Consultation professionnelle</h3>
        <p>
          LinkMind encourage fortement ses utilisateurs à consulter un professionnel de santé mentale qualifié pour toute préoccupation sérieuse concernant leur santé psychologique.
        </p>

        <h2>Article 6 — Données personnelles et confidentialité</h2>
        <h3>6.1 Collecte des données</h3>
        <p>
          LinkMind collecte les données nécessaires au fonctionnement de l&apos;Application, notamment les informations de compte (email, téléphone, âge, ville), les données d&apos;humeur, les interactions avec l&apos;assistant, et les contenus publiés dans la communauté.
        </p>

        <h3>6.2 Anonymat dans la communauté</h3>
        <p>
          Les publications dans l&apos;espace communautaire sont associées à un pseudonyme anonyme et non à votre identité réelle. LinkMind s&apos;engage à ne pas divulguer votre identité réelle aux autres utilisateurs.
        </p>

        <h3>6.3 Droits des utilisateurs</h3>
        <p>
          Conformément aux principes du Règlement Général sur la Protection des Données (RGPD) et aux lois locales applicables, vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité et de suppression de vos données personnelles. Vous pouvez exercer ces droits directement depuis votre profil dans l&apos;Application (export JSON, suppression de compte).
        </p>

        <h3>6.4 Conservation des données</h3>
        <p>
          Vos données sont conservées pendant toute la durée de votre utilisation de l&apos;Application et pendant une période de 30 jours suivant la suppression de votre compte, à l&apos;exception des données rendues anonymes dans le cadre de la suppression de compte.
        </p>

        <h3>6.5 Sécurité</h3>
        <p>
          LinkMind met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute divulgation, modification ou destruction. Les mots de passe sont chiffrés et les communications sont sécurisées par protocole HTTPS.
        </p>

        <h2>Article 7 — Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des éléments constituant l&apos;Application — design, textes, illustrations, logos, code source, architecture et contenus générés par LinkMind — sont la propriété exclusive de LinkMind et sont protégés par les lois applicables en matière de propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification ou exploitation non autorisée de ces éléments est strictement interdite. Les contenus publiés par les utilisateurs dans la communauté restent leur propriété. En les publiant, l&apos;utilisateur accorde à LinkMind une licence non exclusive d&apos;utilisation à des fins de fonctionnement et d&apos;amélioration de l&apos;Application.
        </p>

        <h2>Article 8 — Disponibilité et modifications du service</h2>
        <h3>8.1 Disponibilité</h3>
        <p>
          LinkMind s&apos;efforce d&apos;assurer la disponibilité permanente de l&apos;Application mais ne peut garantir une disponibilité sans interruption. Des maintenances, mises à jour ou incidents techniques peuvent temporairement rendre l&apos;Application inaccessible.
        </p>

        <h3>8.2 Évolution du service</h3>
        <p>
          LinkMind se réserve le droit de modifier, suspendre ou interrompre tout ou partie des fonctionnalités de l&apos;Application à tout moment, avec ou sans préavis, notamment pour des raisons techniques, de sécurité ou commerciales.
        </p>

        <h3>8.3 Modification des CGU</h3>
        <p>
          Les présentes CGU peuvent être modifiées à tout moment. Les utilisateurs seront informés de toute modification substantielle via l&apos;Application. La poursuite de l&apos;utilisation de l&apos;Application après notification vaut acceptation des nouvelles conditions.
        </p>

        <h2>Article 9 — Résiliation</h2>
        <h3>9.1 Résiliation par l&apos;utilisateur</h3>
        <p>
          Vous pouvez supprimer votre compte à tout moment depuis votre profil dans l&apos;Application. La suppression entraîne l&apos;anonymisation de vos publications communautaires et la suppression de vos données personnelles dans les délais prévus à l&apos;article 6.4.
        </p>

        <h3>9.2 Résiliation par LinkMind</h3>
        <p>
          LinkMind se réserve le droit de suspendre ou supprimer tout compte en cas de violation des présentes CGU, d&apos;activité frauduleuse ou de comportement portant atteinte à l&apos;intégrité de la communauté, sans préavis ni indemnité.
        </p>

        <h2>Article 10 — Limitation de responsabilité</h2>
        <p>
          Dans les limites permises par la loi applicable, LinkMind ne saurait être tenu responsable des dommages directs ou indirects résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser l&apos;Application, des informations fournies par l&apos;assistant IA, des interactions entre utilisateurs dans la communauté, ou des prestations des professionnels partenaires.
        </p>
        <p>
          L&apos;utilisateur reconnaît utiliser l&apos;Application sous sa propre responsabilité et à ses risques.
        </p>

        <h2>Article 11 — Droit applicable et juridiction</h2>
        <p>
          Les présentes CGU sont soumises au droit burkinabè. En cas de litige relatif à leur interprétation ou à leur exécution, les parties s&apos;engagent à rechercher une résolution amiable avant tout recours judiciaire. À défaut d&apos;accord amiable, le litige sera soumis aux juridictions compétentes de Ouagadougou, Burkina Faso.
        </p>

        <h2>Article 12 — Contact</h2>
        <div className="bg-[#F5EFED] rounded-2xl p-6 my-4 text-center">
          <p className="font-semibold text-[#1C1010] mb-2">Pour toute question :</p>
          <a 
            href="mailto:contact@linkmind.app" 
            className="text-xl font-bold text-[#77021D] hover:text-[#E07B2A] transition-colors"
          >
            contact@linkmind.app
          </a>
        </div>

        <hr />

        <div className="text-center text-sm text-[#8A7070] py-8">
          <p>Dernière mise à jour : Mai 2026</p>
          <p>Version : 2025-01</p>
        </div>
      </div>

      {/* Bouton retour */}
      <div className="text-center mt-12 animate-fadeUp delay-800">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#77021D] font-semibold hover:text-[#E07B2A] transition-colors"
        >
          ← Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}