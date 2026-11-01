"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Unable to sign in.");
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Unable to connect to the authentication service.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md glass-card rounded-2xl border border-white/20 shadow-xl p-8">
        <Link href="/" className="text-2xl font-extrabold text-primary tracking-tight">
          GarasiBoost
        </Link>
        <h1 className="mt-8 font-headline-lg text-headline-lg text-on-surface">Admin Login</h1>
        <p className="mt-2 text-on-surface-variant">Sign in with the authorized administrator account.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="font-label-bold text-label-bold text-on-surface-variant">Gmail address</label>
            <input id="email" type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full bg-surface-container/50 border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="admin@gmail.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="font-label-bold text-label-bold text-on-surface-variant">Password</label>
            <input id="password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="w-full bg-surface-container/50 border border-outline-variant/30 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter your password" />
          </div>
          {error && <p role="alert" className="rounded-lg bg-error-container/30 px-4 py-3 text-sm text-error">{error}</p>}
          <button type="submit" disabled={submitting} className="w-full bg-primary text-on-primary px-6 py-3 rounded-xl font-label-bold disabled:opacity-60 disabled:cursor-not-allowed">
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <Link href="/" className="mt-6 block text-center text-sm text-on-surface-variant hover:text-primary">Return to marketplace</Link>
      </div>
    </main>
  );
}
