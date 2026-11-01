import { timingSafeEqual } from "crypto";

export const ADMIN_EMAIL = "umkmkauman01@gmail.com";
const ADMIN_PASSWORD = "garasiboost13";

export const ADMIN_SESSION_COOKIE = "garasiboost_admin_session";
const SESSION_VALUE = "authenticated";

export function hasValidAdminCredentials(email: string, password: string): boolean {
  const providedEmail = Buffer.from(email.trim().toLowerCase());
  const expectedEmail = Buffer.from(ADMIN_EMAIL);
  const providedPassword = Buffer.from(password);
  const expectedPassword = Buffer.from(ADMIN_PASSWORD);

  return (
    providedEmail.length === expectedEmail.length &&
    providedPassword.length === expectedPassword.length &&
    timingSafeEqual(providedEmail, expectedEmail) &&
    timingSafeEqual(providedPassword, expectedPassword)
  );
}

export function isAuthenticatedAdminSession(value?: string): boolean {
  return value === SESSION_VALUE;
}

export const adminSessionValue = SESSION_VALUE;
