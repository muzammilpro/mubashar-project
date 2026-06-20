"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";

export default function CouponActions({ coupon, buttonTheme }) {
  const { user } = useAuth();
  const router = useRouter();

  const [liked, setLiked] = useState(coupon.userLiked ?? false);
  const [likesCount, setLikesCount] = useState(coupon.likesCount ?? 0);
  const [revealedCode, setRevealedCode] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowCoupon = async () => {
    if (!user) { router.push("/login"); return; }
    if (revealedCode !== null) { setShowModal(true); return; }
    setLoading(true);
    try {
      const { data } = await api.post(`/coupons/${coupon.id}/use`);
      setRevealedCode(data.data.couponCode ?? "NO CODE NEEDED");
      setShowModal(true);
    } catch {
      setRevealedCode(coupon.couponCode ?? "NO CODE NEEDED");
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    if (!user) { router.push("/login"); return; }
    try {
      const { data } = await api.post(`/coupons/${coupon.id}/like`);
      setLiked(data.data.liked);
      setLikesCount(data.data.likesCount);
    } catch { /* ignore */ }
  };

  const defaultTheme = "bg-sky-500 text-white shadow-[0_16px_30px_rgba(14,165,233,0.28)] hover:bg-sky-600";

  return (
    <>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleShowCoupon}
          disabled={loading}
          className={`inline-flex h-12 flex-1 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-300 hover:-translate-y-1 disabled:opacity-60 ${buttonTheme ?? defaultTheme}`}
        >
          {loading ? "Loading…" : "Show Coupon"}
        </button>
        <button
          type="button"
          onClick={handleLike}
          aria-label={liked ? "Unlike coupon" : "Like coupon"}
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-1 ${liked ? "border-orange-300 bg-orange-50 text-orange-500" : "border-slate-200 bg-white text-slate-400 hover:border-orange-200 hover:text-orange-400"}`}
        >
          <HeartIcon filled={liked} />
        </button>
      </div>

      {showModal && (
        <CouponModal
          coupon={coupon}
          code={revealedCode}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

function CouponModal({ coupon, code, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code || code === "NO CODE NEEDED") return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-4xl bg-white shadow-[0_32px_80px_rgba(15,23,42,0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 bg-[linear-gradient(90deg,#f59e0b,#fb923c,#38bdf8,#2563eb)]" />
        <div className="px-8 py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
                {coupon.storeName}
              </p>
              <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em] text-slate-900">
                {coupon.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M5 5l10 10M15 5 5 15" />
              </svg>
            </button>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Your Coupon Code
            </p>
            {code === "NO CODE NEEDED" ? (
              <div className="rounded-2xl bg-green-50 px-5 py-4 text-center text-sm font-semibold text-green-700 ring-1 ring-green-100">
                No code needed — discount applied automatically at checkout.
              </div>
            ) : (
              <button
                type="button"
                onClick={handleCopy}
                className="group flex w-full items-center justify-between gap-4 rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50 px-5 py-4 transition hover:border-sky-400 hover:bg-sky-100"
              >
                <span className="text-xl font-black uppercase tracking-[0.18em] text-sky-700">
                  {code}
                </span>
                <span className="text-xs font-semibold text-sky-500 transition group-hover:text-sky-700">
                  {copied ? "Copied!" : "Tap to copy"}
                </span>
              </button>
            )}
          </div>

          {coupon.destinationUrl && (
            <a
              href={coupon.destinationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(14,165,233,0.3)] transition hover:bg-sky-600"
            >
              Shop Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function HeartIcon({ filled }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M10 15.2 4.8 10a3.3 3.3 0 1 1 4.7-4.7L10 5.8l.5-.5a3.3 3.3 0 1 1 4.7 4.7L10 15.2Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
