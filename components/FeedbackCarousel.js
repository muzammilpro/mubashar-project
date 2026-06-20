"use client";

import { useState } from "react";

export default function FeedbackCarousel({ items }) {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <div className="relative">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((item, index) => (
          <FeedbackCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <>
          <div className="mt-5 flex items-center justify-center gap-3 xl:hidden">
            <ArrowButton direction="left" onClick={prev} disabled={page === 0} />
            <span className="text-xs text-slate-400">{page + 1} / {totalPages}</span>
            <ArrowButton direction="right" primary onClick={next} disabled={page === totalPages - 1} />
          </div>

          <div className="pointer-events-none absolute inset-x-3 inset-y-1/2 hidden -translate-y-1/2 xl:block">
            <div className="relative flex items-center justify-between">
              <div className="pointer-events-auto">
                <ArrowButton direction="left" onClick={prev} disabled={page === 0} />
              </div>
              <div className="pointer-events-auto">
                <ArrowButton direction="right" primary onClick={next} disabled={page === totalPages - 1} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function FeedbackCard({ item, index }) {
  return (
    <article
      className={`hero-enter group relative overflow-hidden rounded-4xl border bg-white/90 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_58px_rgba(15,23,42,0.1)] sm:p-6 ${item.featured ? "border-sky-200 ring-1 ring-sky-100" : "border-slate-100"}`}
      style={{ animationDelay: `${220 + index * 120}ms` }}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.24),transparent)]" />

      <div className="flex items-start justify-between gap-4">
        <AvatarBadge avatar={item.avatar} name={item.name} />
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-500 text-white shadow-[0_16px_30px_rgba(14,165,233,0.28)]">
          <QuoteIcon />
        </span>
      </div>

      <p className="mt-5 max-w-[30ch] text-lg leading-8 text-slate-700">{item.quote}</p>

      <div className="mt-5 flex items-center gap-1 text-orange-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} half={i + 1 > (item.rating ?? 5)} />
        ))}
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-900">{item.name}</h3>
        {item.role && <p className="mt-1 text-sm font-medium text-slate-500">{item.role}</p>}
      </div>
    </article>
  );
}

function AvatarBadge({ avatar, name }) {
  return (
    <div className="overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-[0_14px_36px_rgba(15,23,42,0.12)]">
      {avatar ? (
        <AvatarVisual avatar={avatar} />
      ) : (
        <div className="flex h-16 w-16 items-center justify-center bg-sky-100 text-2xl font-bold text-sky-600 sm:h-[4.5rem] sm:w-[4.5rem]">
          {name?.[0]?.toUpperCase() ?? "?"}
        </div>
      )}
    </div>
  );
}

function AvatarVisual({ avatar }) {
  const patternId = `clip-${avatar.pattern ?? "default"}-${Math.random().toString(36).slice(2, 6)}`;
  return (
    <svg aria-hidden="true" viewBox="0 0 72 72" className="h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]">
      <defs>
        <clipPath id={patternId}>
          <circle cx="36" cy="36" r="36" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${patternId})`}>
        <rect width="72" height="72" fill="#eaf6ff" />
        {avatar.pattern === "dots" && (
          <>
            <circle cx="12" cy="12" r="2" fill="#cbd5e1" />
            <circle cx="20" cy="18" r="2" fill="#cbd5e1" />
            <circle cx="60" cy="15" r="2" fill="#cbd5e1" />
            <circle cx="56" cy="24" r="2" fill="#cbd5e1" />
          </>
        )}
        {avatar.pattern === "ring" && (
          <>
            <circle cx="56" cy="16" r="10" fill="none" stroke="#dbeafe" strokeWidth="5" />
            <circle cx="14" cy="58" r="8" fill="none" stroke="#dbeafe" strokeWidth="4" />
          </>
        )}
        {avatar.pattern === "stripes" && (
          <rect x="0" y="0" width="72" height="72" fill="#dbeafe" opacity="0.4" />
        )}
        <circle cx="36" cy="30" r="15" fill={avatar.skin ?? "#f1c7a4"} />
        <path d="M18 28c1-12 9-22 20-22 12 0 20 10 20 22v10c-4-6-9-10-16-13-9 5-15 6-24 7Z" fill={avatar.hair ?? "#6f4b2e"} />
        <path d="M20 76V55c5-8 12-12 16-12s11 4 16 12v21H20Z" fill={avatar.shirt ?? "#93c5fd"} />
        <circle cx="30.5" cy="27" r="1.2" fill="#1f2937" />
        <circle cx="41.5" cy="27" r="1.2" fill="#1f2937" />
        <path d="M31 35c1.8 1.6 3.5 2.2 5 2.2 1.6 0 3.3-.6 5-2.2" stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <circle cx="56" cy="56" r="8.5" fill={avatar.accent ?? "#0ea5e9"} />
    </svg>
  );
}

function ArrowButton({ direction, primary = false, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous feedback" : "Next feedback"}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition duration-300 hover:-translate-y-1 disabled:pointer-events-none disabled:opacity-40 ${primary ? "border-sky-500 bg-sky-500 text-white shadow-[0_16px_30px_rgba(14,165,233,0.28)] hover:bg-sky-600" : "border-slate-200 bg-white text-slate-500 shadow-[0_10px_24px_rgba(15,23,42,0.08)] hover:border-sky-200 hover:text-sky-600"}`}
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className={`h-4 w-4 ${direction === "right" ? "rotate-180" : ""}`}>
        <path d="M4 10h12m-12 0 4-4m-4 4 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function QuoteIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path d="M5 12.5c0-2.8 1.5-4.6 4-5.5M10 12.5c0-2.8 1.5-4.6 4-5.5M4.8 13.8A2.2 2.2 0 1 0 7 16a2.2 2.2 0 0 0-2.2-2.2Zm5 0A2.2 2.2 0 1 0 12 16a2.2 2.2 0 0 0-2.2-2.2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ half = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`h-4 w-4 fill-current ${half ? "opacity-40" : ""}`}>
      <path d="m10 2.8 2 4.2 4.6.7-3.3 3.2.8 4.6-4.1-2.2-4.1 2.2.8-4.6L3.4 7.7 8 7l2-4.2Z" />
    </svg>
  );
}
