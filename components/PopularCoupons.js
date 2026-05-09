import Link from "next/link";
import CouponActions from "./CouponActions";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

async function fetchCoupons() {
  try {
    const res = await fetch(`${API}/coupons?limit=3`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}

export default async function PopularCoupons() {
  const coupons = await fetchCoupons();

  return (
    <section
      id="popular-coupons"
      className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24"
    >
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="hero-enter" style={{ animationDelay: "120ms" }}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
            Handpicked Weekly Picks
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.35rem]">
            Popular <span className="text-orange-500">Coupons</span>
          </h2>
        </div>

        <Link
          href="/search?q=all"
          className="hero-enter group inline-flex w-full items-center justify-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-600 sm:w-auto sm:justify-start sm:self-auto"
          style={{ animationDelay: "200ms" }}
        >
          See All Coupons
          <ArrowIcon />
        </Link>
      </div>

      {coupons.length === 0 ? (
        <EmptyState message="No coupons available right now. Check back soon." />
      ) : (
        <div className="space-y-4 sm:space-y-5">
          {coupons.map((coupon, index) => (
            <CouponCard key={coupon.id} coupon={coupon} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}

function CouponCard({ coupon, index }) {
  const themes = [
    {
      card: "bg-[linear-gradient(145deg,#030712_0%,#111827_55%,#1f2937_100%)] text-white",
      btn: "bg-sky-500 text-white shadow-[0_16px_30px_rgba(14,165,233,0.28)] hover:bg-sky-600",
    },
    {
      card: "bg-[linear-gradient(145deg,#0284c7_0%,#0ea5e9_48%,#2563eb_100%)] text-white",
      btn: "bg-white text-sky-600 shadow-[0_16px_30px_rgba(255,255,255,0.18)] hover:bg-slate-50",
    },
    {
      card: "bg-[linear-gradient(145deg,#0891b2_0%,#0f766e_55%,#115e59_100%)] text-white",
      btn: "bg-sky-500 text-white shadow-[0_16px_30px_rgba(14,165,233,0.28)] hover:bg-sky-600",
    },
  ];
  const theme = themes[index % themes.length];

  const formattedDate = coupon.createdAt
    ? new Date(coupon.createdAt).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      })
    : "";

  return (
    <article
      className="hero-enter group relative overflow-hidden rounded-4xl border border-sky-100/90 bg-white/92 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_24px_56px_rgba(15,23,42,0.1)]"
      style={{ animationDelay: `${260 + index * 120}ms` }}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.3),transparent)]" />

      <div className="grid gap-0 xl:grid-cols-[16rem_minmax(0,1fr)_14rem]">
        {/* Logo panel */}
        <div className="p-4 sm:p-5">
          <div
            className={`relative flex min-h-36 items-center justify-center overflow-hidden rounded-[1.6rem] px-5 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:min-h-44 sm:px-6 sm:py-8 ${theme.card}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_24%)] opacity-70" />
            <div className="relative flex flex-col items-center gap-2 text-center">
              {coupon.storeLogo ? (
                <img
                  src={coupon.storeLogo}
                  alt={coupon.storeName}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <span className="text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
                  {coupon.storeName}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="border-slate-100 px-4 pb-5 sm:px-5 xl:border-l xl:border-r xl:py-5">
          <div className="flex flex-wrap items-center gap-2">
            {coupon.featured && (
              <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 ring-1 ring-sky-100">
                Exclusive
              </span>
            )}
            {formattedDate && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500 ring-1 ring-orange-100">
                <CalendarIcon />
                {formattedDate}
              </span>
            )}
          </div>

          <h3 className="mt-4 max-w-3xl text-xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-[2rem] lg:text-[2.1rem] lg:leading-[1.18]">
            {coupon.title}
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            {coupon.offerDetails}
          </p>

          <div className="mt-5 grid gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500 sm:grid-cols-2 xl:grid-cols-3">
            <StatChip icon={<ClaimIcon />} value={coupon.usesCount ?? 0} label="Uses" />
            <StatChip icon={<CommentIcon />} value={0} label="Comments" />
            <StatChip icon={<HeartIcon />} value={coupon.likesCount ?? 0} label="Likes" />
          </div>
        </div>

        {/* Actions panel */}
        <div className="flex flex-col justify-center gap-4 border-t border-slate-100 p-4 sm:p-5 xl:border-t-0">
          <div className="rounded-[1.5rem] bg-slate-50 px-4 py-4 ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Limited Offer
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {coupon.offerDetails}
            </p>
          </div>

          <CouponActions coupon={coupon} buttonTheme={theme.btn} />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/search?q=all"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
            >
              More Coupons
              <ArrowIcon />
            </Link>
            {coupon.couponCode && (
              <span className="inline-flex rounded-full border border-dashed border-sky-300 bg-sky-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                {coupon.couponCode}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function StatChip({ icon, value, label }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3 ring-1 ring-slate-100">
      <span className="text-slate-400">{icon}</span>
      <span className="font-semibold text-slate-700">{value}</span>
      <span className="text-slate-400">{label}</span>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="rounded-4xl border border-dashed border-slate-200 bg-white/60 px-8 py-16 text-center text-slate-400">
      {message}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition duration-300 group-hover:translate-x-1">
      <path d="M4 10h12m0 0-4-4m4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path d="M5.5 3.5v2M14.5 3.5v2M4.5 6.5h11m-9.5 9h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClaimIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path d="M6.5 6.5a2.5 2.5 0 1 1 5 0v1h1.5A1.5 1.5 0 0 1 14.5 9v5A1.5 1.5 0 0 1 13 15.5H5A1.5 1.5 0 0 1 3.5 14V9A1.5 1.5 0 0 1 5 7.5h1.5v-1Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path d="M4.5 5.5A1.5 1.5 0 0 1 6 4h8A1.5 1.5 0 0 1 15.5 5.5v5A1.5 1.5 0 0 1 14 12H9l-3.5 3V12H6A1.5 1.5 0 0 1 4.5 10.5v-5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path d="M10 15.2 4.8 10a3.3 3.3 0 1 1 4.7-4.7L10 5.8l.5-.5a3.3 3.3 0 1 1 4.7 4.7L10 15.2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
