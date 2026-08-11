import { NextResponse } from "next/server";
import { checkAndRegisterSubscriber, InvalidEmailError } from "@/lib/subscribers";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email : "";

  if (!email) {
    return NextResponse.json({ error: "E-posta gerekli." }, { status: 400 });
  }

  try {
    const result = await checkAndRegisterSubscriber(email);
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof InvalidEmailError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error("Abonelik kontrolü başarısız oldu:", error);
    return NextResponse.json({ error: "Abonelik kontrolü şu anda yapılamıyor." }, { status: 500 });
  }
}
