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
        url: "/petis-hero-memory.webp",
        width: 1536,
        height: 1024,
        alt: "Recuerdos cálidos de mascotas con fotos, calendario y marco",
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
