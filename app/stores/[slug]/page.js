import { notFound } from "next/navigation";
import Link from "next/link";
import CouponActions from "@/components/CouponActions";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

async function fetchStore(slug) {
  try {
    const res = await fetch(`${API}/stores/${slug}`, { next: { revalidate: 60 } });
    if (res.status === 404) return null;
    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await fetchStore(slug);
  if (!data) return { title: "Store not found" };
  return {
    title: `${data.store.name} Coupons | Mubashar Don`,
    description: data.store.heading,
  };
}

export default async function StorePage({ params }) {
  const { slug } = await params;
  const data = await fetchStore(slug);
  if (!data) notFound();

  const { store, coupons } = data;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-sky-600">Home</Link>
        <span>/</span>
        <span className="text-slate-900">{store.name}</span>
      </nav>

      {/* Store header */}
      <div className="overflow-hidden rounded-4xl border border-sky-100 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.07)]">
        <div className="h-1.5 bg-[linear-gradient(90deg,#f59e0b,#fb923c,#38bdf8,#2563eb)]" />
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-slate-100 ring-1 ring-slate-100">
            {store.logoUrl ? (
              <img src={store.logoUrl} alt={store.name} className="h-full w-full object-cover" />
            ) : (
              <StoreFallback name={store.name} />
            )}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-3xl">
                {store.name}
              </h1>
              {store.featured && (
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500 ring-1 ring-orange-100">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-1 text-base text-slate-600">{store.heading}</p>
            {store.categories?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {store.categories.map((cat) => (
                  <span key={cat.id} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 ring-1 ring-sky-100">
                    {cat.name}
                  </span>
                ))}
              </div>
            )}
          </div>
          {store.affiliateUrl && (
            <a
              href={store.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-sky-500 px-6 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(14,165,233,0.3)] transition hover:bg-sky-600"
            >
              Visit Store
            </a>
          )}
        </div>
      </div>

      {/* Store description */}
      {store.descriptionShortHtml && (
        <div
          className="prose prose-slate mt-6 max-w-none rounded-3xl border border-slate-100 bg-white p-6"
          dangerouslySetInnerHTML={{ __html: store.descriptionShortHtml }}
        />
      )}

      {/* Coupons */}
      <div className="mt-10">
        <h2 className="mb-6 text-2xl font-semibold tracking-[-0.04em] text-slate-900">
          {store.name} <span className="text-orange-500">Coupons</span>
          <span className="ml-3 text-base font-normal text-slate-400">({coupons.length})</span>
        </h2>

        {coupons.length === 0 ? (
          <div className="rounded-4xl border border-dashed border-slate-200 bg-white/60 px-8 py-16 text-center text-slate-400">
            No active coupons for this store right now.
          </div>
        ) : (
          <div className="space-y-4">
            {coupons.map((coupon) => (
              <StoreCouponCard key={coupon.id} coupon={{ ...coupon, storeName: store.name, storeLogo: store.logoUrl }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StoreCouponCard({ coupon }) {
  return (
    <div className="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-[0_12px_36px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)]">
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {coupon.featured && (
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 ring-1 ring-sky-100">
                Featured
              </span>
            )}
            {coupon.couponCode && (
              <span className="rounded-full border border-dashed border-sky-300 bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                {coupon.couponCode}
              </span>
            )}
          </div>
          <h3 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-slate-900">
            {coupon.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{coupon.offerDetails}</p>
          <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
            <span>{coupon.usesCount ?? 0} uses</span>
            <span>{coupon.likesCount ?? 0} likes</span>
          </div>
        </div>
        <div className="w-full sm:w-48">
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
    <div className={`flex h-full w-full items-center justify-center ${color} text-lg font-black uppercase text-white`}>
      {name?.slice(0, 2) ?? "??"}
    </div>
  );
}
