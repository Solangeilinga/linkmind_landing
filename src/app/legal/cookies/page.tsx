// app/legal/cookies/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function CookiesPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false,
  });

  const savePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    alert("Vos préférences ont été enregistrées");
  };

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
          Dernière mise à jour : Mai 2026
        </p>
      </div>

      {/* Bannière d'information */}
      <div className="bg-gradient-to-r from-[#F5B731]/10 to-[#E07B2A]/10 rounded-2xl p-4 mb-8 animate-fadeUp delay-350">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🍪</div>
          <div>
            <div className="font-semibold text-[#1C1010]">Nous respectons votre vie privée</div>
            <div className="text-xs text-[#8A7070]">Seuls les cookies essentiels sont activés par défaut</div>
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
          .prose p, .prose li {
            line-height: 1.7;
            color: #2d2d2d;
          }
          .prose ul {
            margin: 0.5rem 0 1rem 1.5rem;
            list-style-type: disc;
          }
        `}</style>

        <h2>Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, tablette) lors de la visite d&apos;une application ou d&apos;un site web. Il permet de stocker des informations sur votre navigation pour vous offrir une expérience personnalisée.
        </p>

        <h2>Quels cookies utilisons-nous ?</h2>
        
        <div className="space-y-4 my-6">
          {/* Cookie Essential */}
          <div className="bg-[#FAF7F5] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#5BAD72] rounded-full"></span>
                <h3 className="text-lg font-semibold text-[#1C1010] m-0">Cookies essentiels</h3>
              </div>
              <span className="text-xs bg-[#5BAD72]/20 text-[#5BAD72] px-2 py-1 rounded-full">Toujours actifs</span>
            </div>
            <p className="text-sm text-[#8A7070] mb-2">
              Nécessaires au fonctionnement de base de l&apos;application. Ils ne peuvent pas être désactivés.
            </p>
            <p className="text-xs text-[#8A7070]">Exemples : session de connexion, sécurité, vérification d&apos;identité</p>
          </div>

          {/* Cookie Functional */}
          <div className="bg-[#FAF7F5] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#5B8FC4] rounded-full"></span>
                <h3 className="text-lg font-semibold text-[#1C1010] m-0">Cookies fonctionnels</h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={cookiePreferences.functional}
                  onChange={(e) => setCookiePreferences(prev => ({ ...prev, functional: e.target.checked }))}
                />
                <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#5B8FC4]"></div>
              </label>
            </div>
            <p className="text-sm text-[#8A7070]">
              Améliorent votre expérience en mémorisant vos préférences.
            </p>
          </div>

          {/* Cookie Analytics */}
          <div className="bg-[#FAF7F5] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#F5B731] rounded-full"></span>
                <h3 className="text-lg font-semibold text-[#1C1010] m-0">Cookies analytiques</h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={cookiePreferences.analytics}
                  onChange={(e) => setCookiePreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                />
                <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#F5B731]"></div>
              </label>
            </div>
            <p className="text-sm text-[#8A7070]">
              Nous aident à comprendre comment vous utilisez l&apos;application pour l&apos;améliorer.
            </p>
          </div>

          {/* Cookie Marketing */}
          <div className="bg-[#FAF7F5] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#E07B2A] rounded-full"></span>
                <h3 className="text-lg font-semibold text-[#1C1010] m-0">Cookies marketing</h3>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={cookiePreferences.marketing}
                  onChange={(e) => setCookiePreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                />
                <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#E07B2A]"></div>
              </label>
            </div>
            <p className="text-sm text-[#8A7070]">
              Utilisés pour vous proposer du contenu pertinent. Nous n&apos;en utilisons pas actuellement.
            </p>
          </div>
        </div>

        <div className="text-center my-6">
          <button 
            onClick={savePreferences}
            className="bg-[#77021D] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9E1530] transition-colors"
          >
            💾 Enregistrer mes préférences
          </button>
        </div>

        <h2>Cookies tiers</h2>
        <p>
          Nous n&apos;utilisons pas actuellement de cookies tiers. Si cela venait à changer, nous vous demanderions explicitement votre consentement.
        </p>

        <h2>Comment gérer vos cookies ?</h2>
        <p>
          Vous pouvez gérer vos préférences de cookies à tout moment :
        </p>
        <ul>
          <li><strong>Dans l&apos;application</strong> : via Paramètres &gt; Confidentialité &gt; Cookies</li>
          <li><strong>Dans votre navigateur</strong> : modifiez les paramètres de confidentialité</li>
          <li><strong>Sur iOS</strong> : Réglages &gt; Safari &gt; Bloquer tous les cookies</li>
          <li><strong>Sur Android</strong> : Chrome &gt; Paramètres &gt; Paramètres du site &gt; Cookies</li>
        </ul>

        <div className="bg-[#F5EFED] rounded-2xl p-6 my-4">
          <p className="text-sm text-[#1C1010]">
            <span className="font-semibold">🔍 Note importante :</span> La désactivation des cookies essentiels empêcherait le bon fonctionnement de l&apos;application (connexion, sauvegarde de votre humeur, etc.).
          </p>
        </div>

        <h2>Contact</h2>
        <p>
          Pour toute question relative aux cookies : <strong>contact@linkmind.app</strong>
        </p>

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
          Confidentialité →
        </Link>
      </div>
    </main>
  );
}