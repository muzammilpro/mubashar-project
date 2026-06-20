"use client";

import { useState } from "react";
import api from "@/lib/api";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setStatus(null);
    try {
      await api.post("/newsletter/subscribe", { email: email.trim() });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      {status === "success" && (
        <p className="mb-3 rounded-xl bg-green-900/30 px-4 py-2 text-sm text-green-300 ring-1 ring-green-700/40">
          Subscribed! Thank you.
        </p>
      )}
      {status === "error" && (
        <p className="mb-3 rounded-xl bg-red-900/30 px-4 py-2 text-sm text-red-300 ring-1 ring-red-700/40">
          Something went wrong. Please try again.
        </p>
      )}
      <div className="flex rounded-full border border-white/10 bg-white/5 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <label className="min-w-0 flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="h-11 w-full min-w-0 rounded-full bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          aria-label="Subscribe to newsletter"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-400 text-slate-950 transition duration-300 hover:bg-orange-300 disabled:opacity-60"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
          ) : (
            <SendIcon />
          )}
        </button>
      </div>
    </form>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-none">
      <path d="M3 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
