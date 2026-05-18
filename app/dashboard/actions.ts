"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function signOut() {
  const supabase = createClient(await cookies());
  await supabase.auth.signOut();
  redirect("/login?message=Sesi%C3%B3n%20cerrada.");
}

export async function createCalendar(formData: FormData) {
  const supabase = createClient(await cookies());
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?error=Ingresa%20para%20crear%20tu%20calendario.");
  }

  const petName = String(formData.get("petName") ?? "").trim();
  const petType = String(formData.get("petType") ?? "").trim();
  const story = String(formData.get("story") ?? "").trim();
  const specialDates = String(formData.get("dates") ?? "").trim();

  if (!petName || !petType) {
    redirect("/dashboard?error=Agrega%20el%20nombre%20y%20tipo%20de%20mascota.");
  }

  const { data: calendar, error } = await supabase
    .from("calendars")
    .insert({
      user_id: user.id,
      pet_name: petName,
      pet_type: petType,
      story,
      special_dates: specialDates,
      status: "draft",
    })
    .select("id")
    .single();

  if (error) {
    redirect("/dashboard?error=No%20pudimos%20guardar%20el%20borrador.%20Verifica%20que%20la%20migraci%C3%B3n%20de%20Supabase%20est%C3%A9%20aplicada.");
  }

  const files = formData
    .getAll("photos")
    .filter((file): file is File => file instanceof File && file.size > 0);

  if (calendar && files.length > 0) {
    for (const file of files) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
      const storagePath = `${user.id}/${calendar.id}/${crypto.randomUUID()}-${safeName}`;
      const { error: uploadError } = await supabase.storage
        .from("pet-calendar-photos")
        .upload(storagePath, file, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        redirect("/dashboard?error=Guardamos%20el%20borrador%2C%20pero%20no%20pudimos%20subir%20una%20foto.");
      }

      const { error: photoError } = await supabase.from("calendar_photos").insert({
        calendar_id: calendar.id,
        user_id: user.id,
        storage_path: storagePath,
      });

      if (photoError) {
        redirect("/dashboard?error=Guardamos%20la%20foto%2C%20pero%20no%20pudimos%20registrarla%20en%20el%20calendario.");
      }
    }
  }

  redirect("/dashboard?message=Borrador%20guardado.");
}
