import type { Metadata } from "next";
import Link from "next/link";
import { PlatformAuthLayout } from "../components/PlatformAuthLayout";
import { signIn } from "./actions";

export const metadata: Metadata = {
  title: "Ingresar | Petis",
  description: "Accede a tu espacio Petis para crear y revisar calendarios de mascotas.",
};

type LoginPageProps = {
  searchParams?: Promise<{
    error?: string;
    message?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <PlatformAuthLayout
      eyebrow="Plataforma Petis"
      title="Ingresa para continuar tu calendario."
      description="Vuelve a tu espacio de creación para organizar las fotos, fechas y detalles que harán especial el recuerdo de tu mascota."
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ef5366]">
          Iniciar sesión
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#183e5b]">
          Bienvenido de nuevo
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#68707b]">
          Usa el correo con el que empezaste tu calendario Petis.
        </p>
      </div>

      {params?.error ? (
        <p className="mt-6 rounded-lg border border-[#ef5366]/25 bg-[#ef5366]/10 px-4 py-3 text-sm font-medium text-[#9d2f3c]">
          {params.error}
        </p>
      ) : null}

      {params?.message ? (
        <p className="mt-6 rounded-lg border border-[#25d366]/25 bg-[#25d366]/10 px-4 py-3 text-sm font-medium text-[#226044]">
          {params.message}
        </p>
      ) : null}

      <form action={signIn} className="mt-8 space-y-5">
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
          <span className="text-sm font-semibold text-[#27384a]">Contraseña</span>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Tu contraseña"
            required
            className="mt-2 w-full rounded-lg border border-[#ead9c8] bg-[#fffaf3] px-4 py-3 text-base text-[#27384a] outline-none transition placeholder:text-[#9b8f86] focus:border-[#ef5366] focus:ring-4 focus:ring-[#ef5366]/12"
          />
        </label>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-[#68707b]">
            <input
              type="checkbox"
              name="remember"
              className="h-4 w-4 rounded border-[#d8c3b2] accent-[#ef5366]"
            />
            Recordarme
          </label>
          <a href="mailto:petis.club@gmail.com" className="font-semibold text-[#183e5b]">
            Necesito ayuda
          </a>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-[#ef5366] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(239,83,102,0.22)] transition hover:bg-[#dc4358] focus:outline-none focus:ring-4 focus:ring-[#ef5366]/25"
        >
          Entrar a mi espacio
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-[#68707b]">
        ¿Aún no tienes cuenta?{" "}
        <Link href="/crear-cuenta" className="font-semibold text-[#183e5b]">
          Crear cuenta
        </Link>
      </p>
    </PlatformAuthLayout>
  );
}
