"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://petis.club").replace(/\/$/, "");
}

function signUpErrorMessage(message?: string) {
  if (!message) {
    return "No pudimos crear tu cuenta. Inténtalo de nuevo.";
  }

  const normalized = message.toLowerCase();

  if (normalized.includes("already registered") || normalized.includes("already been registered")) {
    return "Ya existe una cuenta con este correo. Intenta ingresar.";
  }

  if (normalized.includes("password")) {
    return "La contraseña debe tener al menos 6 caracteres.";
  }

  if (normalized.includes("email address") && normalized.includes("invalid")) {
    return "Usa un correo válido para crear tu cuenta.";
  }

  if (normalized.includes("rate limit")) {
    return "Supabase limitó temporalmente el envío de correos. Intenta de nuevo en unos minutos.";
  }

  return "No pudimos crear tu cuenta. Revisa tus datos e inténtalo de nuevo.";
}

export async function signUp(formData: FormData) {
  const fullName = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const petName = String(formData.get("petName") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!fullName || !phone || !email || !petName || !password) {
    redirect("/crear-cuenta?error=Completa%20todos%20los%20datos%20para%20crear%20tu%20cuenta.");
  }

  const supabase = createClient(await cookies());
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${getSiteUrl()}/auth/callback?next=/dashboard`,
      data: {
        full_name: fullName,
        phone,
        first_pet_name: petName,
      },
    },
  });

  if (error) {
    redirect(`/crear-cuenta?error=${encodeURIComponent(signUpErrorMessage(error.message))}`);
  }

  if (data.session) {
    redirect("/dashboard?message=Tu%20cuenta%20Petis%20qued%C3%B3%20creada.");
  }

  redirect("/login?message=Cuenta%20creada.%20Si%20Supabase%20pide%20confirmaci%C3%B3n%2C%20revisa%20tu%20correo%20antes%20de%20ingresar.");
}
