import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BASYAM — Ton espace bien-être, chaque jour",
  description: "BASYAM accompagne les jeunes africains : suivi d'humeur, communauté anonyme et mise en relation avec des professionnels de santé mentale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Nunito', sans-serif" }}>{children}</body>
    </html>
  );
}