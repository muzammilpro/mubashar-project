import Link from "next/link";
import CouponActions from "@/components/CouponActions";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

async function fetchResults(q, category) {
  if (!q || q === "all" || q === "stores") {
    const url = q === "stores"
      ? `${API}/stores?limit=20${category ? `&category=${encodeURIComponent(category)}` : ""}`
      : `${API}/coupons?limit=20${category ? `&category=${encodeURIComponent(category)}` : ""}`;
    try {
      const res = await fetch(url, { next: { revalidate: 30 } });
      if (!res.ok) return { coupons: [], stores: [], totalResults: 0 };
      const json = await res.json();
      return q === "stores"
        ? { coupons: [], stores: json.data ?? [], totalResults: json.pagination?.total ?? 0 }
        : { coupons: json.data ?? [], stores: [], totalResults: json.pagination?.total ?? 0 };
    } catch {
      return { coupons: [], stores: [], totalResults: 0 };
    }
  }
  try {
    const params = new URLSearchParams({ q, limit: "20" });
    if (category) params.set("category", category);
    const res = await fetch(`${API}/search?${params}`, { next: { revalidate: 30 } });
    if (!res.ok) return { coupons: [], stores: [], totalResults: 0 };
    const json = await res.json();
    return json.data ?? { coupons: [], stores: [], totalResults: 0 };
  } catch {
    return { coupons: [], stores: [], totalResults: 0 };
  }
}

export async function generateMetadata({ searchParams }) {
  const { q } = await searchParams;
  return { title: q ? `"${q}" — Search | Mubashar Don` : "Browse All | Mubashar Don" };
}

export default async function SearchPage({ searchParams }) {
  const { q = "", category = "" } = await searchParams;
  const results = await fetchResults(q, category);

  const totalCoupons = results.coupons?.length ?? 0;
  const totalStores = results.stores?.length ?? 0;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Search Results</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
          {q && q !== "all" && q !== "stores" ? (
            <>Results for <span className="text-orange-500">&ldquo;{q}&rdquo;</span></>
          ) : q === "stores" ? (
            <>All <span className="text-orange-500">Stores</span></>
          ) : (
            <>All <span className="text-orange-500">Coupons</span></>
          )}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {totalCoupons + totalStores} result{totalCoupons + totalStores !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Stores section */}
      {totalStores > 0 && (
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-slate-800">
            Stores <span className="ml-2 text-sm font-normal text-slate-400">({totalStores})</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.stores.map((store) => (
              <Link
                key={store.id}
                href={`/stores/${store.id}`}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
                    {store.logoUrl ? (
                      <img src={store.logoUrl} alt={store.name} className="h-full w-full object-cover" />
                    ) : (
                      <StoreFallback name={store.name} />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-sky-600">{store.name}</p>
                    <p className="text-xs text-slate-500">{store.couponsCount ?? 0} coupons</p>
                  </div>
                </div>
                {store.heading && (
                  <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-2">{store.heading}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Coupons section */}
      {totalCoupons > 0 && (
        <div>
          <h2 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-slate-800">
            Coupons <span className="ml-2 text-sm font-normal text-slate-400">({totalCoupons})</span>
          </h2>
          <div className="space-y-4">
            {results.coupons.map((coupon) => (
              <SearchCouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        </div>
      )}

      {totalCoupons === 0 && totalStores === 0 && (
        <div className="rounded-4xl border border-dashed border-slate-200 bg-white/60 px-8 py-20 text-center">
          <p className="text-lg font-semibold text-slate-500">No results found</p>
          <p className="mt-2 text-sm text-slate-400">Try a different search term or browse all coupons.</p>
          <Link
            href="/search?q=all"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-sky-500 px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(14,165,233,0.3)] transition hover:bg-sky-600"
          >
            Browse All Coupons
          </Link>
        </div>
      )}
    </div>
  );
}

function SearchCouponCard({ coupon }) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-[0_12px_36px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)]">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-sky-600">{coupon.storeName}</span>
            {coupon.featured && (
              <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-500 ring-1 ring-orange-100">
                Exclusive
              </span>
            )}
          </div>
          <h3 className="mt-1 text-lg font-semibold tracking-[-0.03em] text-slate-900">{coupon.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{coupon.offerDetails}</p>
          <div className="mt-2 flex items-center gap-4 text-xs text-slate-400">
            <span>{coupon.usesCount ?? 0} uses</span>
            <span>{coupon.likesCount ?? 0} likes</span>
            {coupon.couponCode && (
              <span className="rounded-full border border-dashed border-sky-300 bg-sky-50 px-2.5 py-0.5 font-bold uppercase tracking-wide text-sky-600">
                {coupon.couponCode}
              </span>
            )}
          </div>
        </div>
        <div className="w-full sm:w-44">
          <CouponActions coupon={coupon} />
        </div>
      </div>
    </div>
  );
}

function StoreFallback({ name }) {
  const colors = ["bg-sky-600", "bg-orange-500", "bg-emerald-600", "bg-violet-600", "bg-rose-500"];
  const color = colors[(name?.charCodeAt(0) ?? 0) % colors.length];
  return (
    <div className={`flex h-full w-full items-center justify-center ${color} text-sm font-black uppercase text-white`}>
      {name?.slice(0, 2) ?? "??"}
    </div>
  );
}
