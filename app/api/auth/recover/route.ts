import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.email) {
    return NextResponse.json({ message: "Informe um email válido" }, { status: 400 });
  }

  return NextResponse.json({
    message: "Se o email existir, você receberá instruções para recuperação de senha."
  });
}
