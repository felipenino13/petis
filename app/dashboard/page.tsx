import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const calendarSteps = [
  {
    title: "Fotos",
    text: "Sube las imágenes que quieres ver durante el año.",
    status: "Pendiente",
  },
  {
    title: "Historia",
    text: "Cuéntanos fechas, frases y momentos importantes.",
    status: "Pendiente",
  },
  {
    title: "Diseño",
    text: "Revisaremos el estilo antes de preparar tu calendario.",
    status: "Por revisar",
  },
];

const monthIdeas = ["Portada", "Enero", "Febrero", "Marzo", "Abril", "Mayo"];

export const metadata: Metadata = {
  title: "Dashboard | Petis",
  description: "Crea y organiza el calendario personalizado de tu mascota en Petis.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#27384a]">
      <header className="border-b border-[#ead9c8]/75 bg-white/86 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="Volver a Petis">
            <Image
              src="/petis-logo.jpg"
              alt="Petis"
              width={44}
              height={44}
              className="rounded-full border border-[#f0c9b6] shadow-sm"
            />
            <span className="text-lg font-semibold tracking-[0.08em] text-[#183e5b]">
              PETIS
            </span>
          </Link>
          <nav className="flex items-center gap-3 text-sm font-semibold">
            <a
              href="https://wa.me/573208921784"
              className="hidden rounded-full border border-[#d8c3b2] bg-white px-4 py-2 text-[#183e5b] transition hover:border-[#183e5b]/35 sm:inline-flex"
            >
              WhatsApp
            </a>
            <Link
              href="/login"
              className="rounded-full bg-[#183e5b] px-4 py-2 text-white transition hover:bg-[#245476]"
            >
              Salir
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="rounded-lg border border-[#ead9c8] bg-white p-5 shadow-[0_18px_45px_rgba(39,56,74,0.06)] lg:sticky lg:top-8 lg:h-fit">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef5366]">
            Mi espacio
          </p>
          <h1 className="mt-3 text-2xl font-semibold leading-tight text-[#183e5b]">
            Calendario de escritorio
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#68707b]">
            Organiza el material para que Petis pueda crear un recuerdo sensible y bonito.
          </p>

          <div className="mt-6 space-y-3">
            {calendarSteps.map((step) => (
              <article key={step.title} className="rounded-lg bg-[#fffaf3] p-4">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-semibold text-[#183e5b]">{step.title}</h2>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#b24f48]">
                    {step.status}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#68707b]">{step.text}</p>
              </article>
            ))}
          </div>
        </aside>

        <section className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <section className="rounded-lg border border-[#ead9c8] bg-white p-6 shadow-[0_24px_70px_rgba(39,56,74,0.08)] sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef5366]">
                    Nuevo calendario
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#183e5b]">
                    Crea el recuerdo de tu mascota
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#68707b]">
                    Completa estos datos iniciales. Luego podrás enviar fotos y notas para cada mes.
                  </p>
                </div>
                <span className="w-fit rounded-full bg-[#ffc62a] px-4 py-2 text-sm font-bold text-[#183e5b]">
                  En borrador
                </span>
              </div>

              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-[#27384a]">Nombre de la mascota</span>
                    <input
                      type="text"
                      name="petName"
                      placeholder="Ej: Bruno"
                      className="mt-2 w-full rounded-lg border border-[#ead9c8] bg-[#fffaf3] px-4 py-3 text-base text-[#27384a] outline-none transition placeholder:text-[#9b8f86] focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-semibold text-[#27384a]">Tipo de mascota</span>
                    <select
                      name="petType"
                      className="mt-2 w-full rounded-lg border border-[#ead9c8] bg-[#fffaf3] px-4 py-3 text-base text-[#27384a] outline-none transition focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
                    >
                      <option>Perro</option>
                      <option>Gato</option>
                      <option>Otra mascota</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-semibold text-[#27384a]">Historia o intención del calendario</span>
                  <textarea
                    name="story"
                    rows={5}
                    placeholder="Cuéntanos qué quieres recordar, celebrar o conservar de su historia."
                    className="mt-2 w-full resize-none rounded-lg border border-[#ead9c8] bg-[#fffaf3] px-4 py-3 text-base text-[#27384a] outline-none transition placeholder:text-[#9b8f86] focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block rounded-lg border border-dashed border-[#d8c3b2] bg-[#fffaf3] p-5">
                    <span className="text-sm font-semibold text-[#183e5b]">Fotos principales</span>
                    <span className="mt-2 block text-sm leading-6 text-[#68707b]">
                      Sube portada, fotos favoritas y detalles que quieras incluir.
                    </span>
                    <input type="file" name="photos" multiple className="mt-4 w-full text-sm text-[#68707b]" />
                  </label>
                  <label className="block rounded-lg border border-dashed border-[#d8c3b2] bg-[#fffaf3] p-5">
                    <span className="text-sm font-semibold text-[#183e5b]">Fechas especiales</span>
                    <span className="mt-2 block text-sm leading-6 text-[#68707b]">
                      Cumpleaños, adopción, despedida o momentos que quieras guardar.
                    </span>
                    <input
                      type="text"
                      name="dates"
                      placeholder="Ej: 12 de mayo, su cumpleaños"
                      className="mt-4 w-full rounded-lg border border-[#ead9c8] bg-white px-4 py-3 text-sm outline-none focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="rounded-full bg-[#ef5366] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(239,83,102,0.22)] transition hover:bg-[#dc4358] focus:outline-none focus:ring-4 focus:ring-[#ef5366]/25"
                  >
                    Guardar borrador
                  </button>
                  <a
                    href="https://wa.me/573208921784?text=Hola%20Petis%2C%20quiero%20avanzar%20con%20mi%20calendario"
                    className="rounded-full border border-[#d8c3b2] bg-white px-6 py-4 text-center text-base font-semibold text-[#183e5b] transition hover:border-[#183e5b]/35"
                  >
                    Pedir ayuda por WhatsApp
                  </a>
                </div>
              </form>
            </section>

            <section className="rounded-lg border border-[#ead9c8] bg-[#183e5b] p-5 text-white shadow-[0_24px_70px_rgba(24,62,91,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffc62a]">
                Vista previa
              </p>
              <div className="relative mt-5 aspect-[4/5] overflow-hidden rounded-lg bg-[#f5dccd]">
                <Image
                  src="/calendario-escritorio-04.webp"
                  alt="Vista previa de calendario de escritorio Petis"
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-5 text-2xl font-semibold">Tu calendario toma forma aquí.</h2>
              <p className="mt-3 text-sm leading-6 text-[#dce7ec]">
                A medida que agregues fotos e historias, esta sección puede mostrar el avance del diseño.
              </p>
            </section>
          </div>

          <section className="rounded-lg border border-[#ead9c8] bg-white p-6 shadow-[0_18px_45px_rgba(39,56,74,0.06)] sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef5366]">
                  Organización mensual
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#183e5b]">
                  Empieza por las fotos más importantes
                </h2>
              </div>
              <button
                type="button"
                className="w-full rounded-full border border-[#d8c3b2] bg-[#fffaf3] px-5 py-3 text-sm font-semibold text-[#183e5b] transition hover:border-[#183e5b]/35 sm:w-auto"
              >
                Agregar otro mes
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {monthIdeas.map((month) => (
                <article key={month} className="rounded-lg border border-[#ead9c8] bg-[#fffaf3] p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[#183e5b]">{month}</h3>
                    <span className="h-3 w-3 rounded-full bg-[#ffc62a]" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#68707b]">
                    Sin foto asignada todavía. Elige una imagen y una frase breve para este espacio.
                  </p>
                </article>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
