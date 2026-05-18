import type { Metadata } from "next";
import Link from "next/link";
import { PlatformAuthLayout } from "../components/PlatformAuthLayout";

export const metadata: Metadata = {
  title: "Crear cuenta | Petis",
  description: "Crea tu cuenta Petis para empezar un calendario personalizado de tu mascota.",
};

export default function CreateAccountPage() {
  return (
    <PlatformAuthLayout
      eyebrow="Crea tu cuenta"
      title="Empieza un recuerdo con calma y cariño."
      description="Déjanos tus datos para abrir tu espacio Petis y acompañarte en la creación de un calendario personalizado para tu mascota."
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef5366]">
          Registro
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#183e5b]">
          Datos para crear tu espacio
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#68707b]">
          Guardaremos esta información para contactarte y avanzar con el calendario.
        </p>
      </div>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-[#27384a]">Nombre</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Tu nombre"
              required
              className="mt-2 w-full rounded-lg border border-[#ead9c8] bg-[#fffaf3] px-4 py-3 text-base text-[#27384a] outline-none transition placeholder:text-[#9b8f86] focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-[#27384a]">WhatsApp</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="+57 300 000 0000"
              required
              className="mt-2 w-full rounded-lg border border-[#ead9c8] bg-[#fffaf3] px-4 py-3 text-base text-[#27384a] outline-none transition placeholder:text-[#9b8f86] focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-semibold text-[#27384a]">Correo electrónico</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="tu@email.com"
            required
            className="mt-2 w-full rounded-lg border border-[#ead9c8] bg-[#fffaf3] px-4 py-3 text-base text-[#27384a] outline-none transition placeholder:text-[#9b8f86] focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#27384a]">Nombre de tu mascota</span>
          <input
            type="text"
            name="petName"
            placeholder="Ej: Luna, Milo, Simona"
            required
            className="mt-2 w-full rounded-lg border border-[#ead9c8] bg-[#fffaf3] px-4 py-3 text-base text-[#27384a] outline-none transition placeholder:text-[#9b8f86] focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#27384a]">Contraseña</span>
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="Crea una contraseña"
            required
            className="mt-2 w-full rounded-lg border border-[#ead9c8] bg-[#fffaf3] px-4 py-3 text-base text-[#27384a] outline-none transition placeholder:text-[#9b8f86] focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
          />
        </label>

        <Link
          href="/dashboard"
          className="flex w-full justify-center rounded-full bg-[#ef5366] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(239,83,102,0.22)] transition hover:bg-[#dc4358] focus:outline-none focus:ring-4 focus:ring-[#ef5366]/25"
        >
          Crear mi cuenta Petis
        </Link>
      </form>

      <p className="mt-8 text-center text-sm text-[#68707b]">
        ¿Ya tienes cuenta?{" "}
        <Link href="/login" className="font-semibold text-[#183e5b]">
          Ingresar
        </Link>
      </p>
    </PlatformAuthLayout>
  );
}
