import { authenticate } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const user = authenticate(body.email, body.password);

  if (!user) {
    return NextResponse.json({ message: "Credenciais inválidas" }, { status: 401 });
  }

  const response = NextResponse.json({ user });
  response.cookies.set("crm_session", JSON.stringify(user), {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 60 * 8
  });

  return response;
}
