import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://petis.club"),
  title: "Petis | Recuerdos especiales para mascotas",
  description:
    "Crea recuerdos únicos y emocionales para celebrar la historia de tu mascota con Petis.",
  openGraph: {
    title: "Petis | Recuerdos especiales para mascotas",
    description:
      "Crea recuerdos únicos y emocionales para celebrar la historia de tu mascota con Petis.",
    url: "https://petis.club",
    siteName: "Petis",
    images: [
      {
        url: "/petis-logo.jpg",
        width: 1080,
        height: 1080,
        alt: "Logo de Petis con un perro y un gato frente a un corazón",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
