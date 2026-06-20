"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form.username.trim(), form.password);
      router.push("/");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="overflow-hidden rounded-[2rem] border border-sky-100 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.08)]">
          <div className="h-1.5 bg-[linear-gradient(90deg,#f59e0b,#fb923c,#38bdf8,#2563eb)]" />

          <div className="px-8 py-10">
            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f59e0b_0%,#fbbf24_48%,#38bdf8_52%,#2563eb_100%)] shadow-[0_10px_24px_rgba(37,99,235,0.18)]">
                  <span className="h-6 w-6 rounded-full border-[5px] border-white" />
                  <span className="absolute right-[9px] top-1/2 h-3 w-2 -translate-y-1/2 rounded-full bg-white" />
                </span>
                <span className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                  Mubashar Don
                </span>
              </Link>
              <h1 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-slate-900">
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-slate-500">Sign in to access your account</p>
            </div>

            {error && (
              <div className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 ring-1 ring-red-100">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 px-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-full border border-slate-200 bg-slate-50 px-5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white focus:ring-2 focus:ring-sky-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(14,165,233,0.3)] transition hover:bg-sky-600 disabled:opacity-60"
              >
                {loading ? "Signing in…" : "Sign In"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold text-sky-600 hover:text-sky-700">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
