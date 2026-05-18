import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PlatformAuthLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PlatformAuthLayout({
  eyebrow,
  title,
  description,
  children,
}: PlatformAuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[#fffaf3] px-5 py-8 text-[#27384a] sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:min-h-[calc(100vh-64px)] lg:flex-row lg:items-center">
        <section className="w-full lg:w-[48%]">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Volver a Petis">
            <Image
              src="/petis-logo.jpg"
              alt="Petis"
              width={48}
              height={48}
              className="rounded-full border border-[#f0c9b6] shadow-sm"
            />
            <span className="text-lg font-semibold tracking-[0.08em] text-[#183e5b]">
              PETIS
            </span>
          </Link>

          <div className="mt-12 max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ef5366]">
              {eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-[#183e5b] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#68707b]">{description}</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg bg-[#183e5b] shadow-[0_28px_80px_rgba(24,62,91,0.18)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/calendario-escritorio-01.webp"
                alt="Calendario de escritorio Petis con una mascota en portada"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183e5b]/74 via-[#183e5b]/18 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-[#fffaf3]/92 p-5 shadow-2xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef5366]">
                  Calendario Petis
                </p>
                <p className="mt-2 text-xl font-semibold text-[#183e5b]">
                  Un espacio para ordenar fotos, fechas y recuerdos especiales.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full lg:flex-1">
          <div className="rounded-lg border border-[#ead9c8] bg-white p-6 shadow-[0_24px_70px_rgba(39,56,74,0.10)] sm:p-8">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
