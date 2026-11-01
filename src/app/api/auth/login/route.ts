import { NextResponse } from "next/server";
import {
  adminSessionValue,
  ADMIN_SESSION_COOKIE,
  hasValidAdminCredentials,
} from "@/lib/adminAuth";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);

  if (
    !body ||
    typeof body !== "object" ||
    !("email" in body) ||
    !("password" in body) ||
    typeof body.email !== "string" ||
    typeof body.password !== "string"
  ) {
    return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
  }

  if (!hasValidAdminCredentials(body.email, body.password)) {
    return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, adminSessionValue, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
