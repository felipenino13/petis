"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

function authErrorMessage(message?: string) {
  if (!message) {
    return "No pudimos iniciar sesión. Inténtalo de nuevo.";
  }

  if (message.toLowerCase().includes("invalid login credentials")) {
    return "El correo o la contraseña no coinciden.";
  }

  if (message.toLowerCase().includes("email not confirmed")) {
    return "Revisa tu correo para confirmar la cuenta antes de ingresar.";
  }

  return "No pudimos iniciar sesión. Revisa tus datos e inténtalo de nuevo.";
}

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    redirect("/login?error=Completa%20tu%20correo%20y%20contrase%C3%B1a.");
  }

  const supabase = createClient(await cookies());
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(authErrorMessage(error.message))}`);
  }

  redirect("/dashboard");
}
