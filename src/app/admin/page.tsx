import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminClient from "./AdminClient";
import { ADMIN_SESSION_COOKIE, isAuthenticatedAdminSession } from "@/lib/adminAuth";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (!isAuthenticatedAdminSession(session)) {
    redirect("/admin/login");
  }

  return <AdminClient />;
}
