"use client";

export default function LogoutButton() {
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        window.location.href = "/admin/login";
      }}
      className="px-4 py-2 rounded-lg text-sm font-semibold text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors"
    >
      Sign out
    </button>
  );
}
