import Link from "next/link";
import StoreShareButton from "./StoreShareButton";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

async function fetchStores() {
  try {
    const res = await fetch(`${API}/stores?limit=8`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}

export default async function TopStores() {
  const stores = await fetchStores();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-28">
      <div className="rounded-[2.5rem] border border-sky-100/80 bg-white/55 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-6 lg:p-8">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="hero-enter" style={{ animationDelay: "120ms" }}>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
              Brand Highlights
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.3rem]">
              Top <span className="text-orange-500">Stores</span>
            </h2>
          </div>

          <Link
            href="/search?q=stores"
            className="hero-enter group inline-flex w-full items-center justify-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-600 sm:w-auto sm:justify-start sm:self-auto"
            style={{ animationDelay: "200ms" }}
          >
            See All Stores
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition duration-300 group-hover:translate-x-1">
              <path d="M4 10h12m0 0-4-4m4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div id="top-stores" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stores.length === 0 ? (
            <div className="col-span-full rounded-3xl border border-dashed border-slate-200 bg-white/60 px-8 py-16 text-center text-slate-400">
              No stores available right now.
            </div>
          ) : (
            stores.map((store, index) => (
              <StoreCard key={store.id} store={store} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function StoreCard({ store, index }) {
  return (
    <article
      className={`hero-enter group relative overflow-hidden rounded-[1.8rem] border bg-white/90 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_54px_rgba(15,23,42,0.09)] sm:p-5 ${store.featured ? "border-sky-200 ring-1 ring-sky-100" : "border-slate-100"}`}
      style={{ animationDelay: `${260 + index * 90}ms` }}
    >
      <div className="flex items-start gap-4">
        <Link href={`/stores/${store.id}`} className="min-h-15 flex-1 text-base font-semibold leading-7 tracking-[-0.03em] text-slate-900 transition hover:text-sky-600 sm:text-lg">
          {store.heading || store.name}
        </Link>
        <StoreShareButton storeId={store.id} storeName={store.name} />
      </div>

      {store.categories?.length > 0 && (
        <div className="mt-4 rounded-2xl border border-sky-100 bg-[linear-gradient(135deg,#f8fdff_0%,#eef8ff_100%)] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
          <div className="flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 ring-1 ring-sky-100/80">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sky-500 shadow-[0_8px_18px_rgba(14,165,233,0.15)]">
              <BrandMark />
            </span>
            <span className="truncate text-sm font-semibold text-slate-700">
              {store.categories[0].name}
            </span>
          </div>
        </div>
      )}

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-100">
          {store.logoUrl ? (
            <img src={store.logoUrl} alt={store.name} className="h-full w-full object-cover" />
          ) : (
            <StoreFallbackLogo name={store.name} />
          )}
        </div>
        <div className="min-w-0">
          <p className="truncate text-lg font-semibold tracking-[-0.03em] text-slate-900">
            {store.name}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            {store.couponsCount ?? 0} coupons
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.22),transparent)]" />
    </article>
  );
}

function StoreFallbackLogo({ name }) {
  const colors = [
    "bg-sky-600", "bg-orange-500", "bg-emerald-600",
    "bg-violet-600", "bg-rose-500", "bg-amber-500",
  ];
  const color = colors[(name?.charCodeAt(0) ?? 0) % colors.length];
  return (
    <div className={`flex h-full w-full items-center justify-center ${color} text-sm font-black uppercase tracking-wide text-white`}>
      {name?.slice(0, 2) ?? "??"}
    </div>
  );
}

function BrandMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <circle cx="12" cy="12" r="10" fill="#0ea5e9" opacity="0.18" />
      <path d="M6.5 12a5.5 5.5 0 1 1 5.5 5.5A5.5 5.5 0 0 1 6.5 12Z" fill="#0284c7" />
      <path d="M12 6.5A5.5 5.5 0 0 1 17.5 12" stroke="#f59e0b" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
