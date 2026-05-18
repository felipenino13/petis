import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

function getSafeNextPath(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/dashboard";
  }

  return value;
}

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = getSafeNextPath(requestUrl.searchParams.get("next"));
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? requestUrl.origin;

  if (!code) {
    return NextResponse.redirect(
      new URL("/login?error=El%20enlace%20de%20confirmaci%C3%B3n%20no%20es%20v%C3%A1lido.", origin),
    );
  }

  const supabase = createClient(await cookies());
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL("/login?error=No%20pudimos%20confirmar%20tu%20cuenta.%20Intenta%20ingresar%20de%20nuevo.", origin),
    );
  }

  return NextResponse.redirect(new URL(next, origin));
}
