import Link from "next/link";

const stores = [
  {
    title: "20% Off All Device - Limited Offer",
    voucher: "Up to 57% Voucher",
    brand: "FedEx",
    country: "England",
    logo: FedExLogo,
    featured: false,
  },
  {
    title: "Save 15% On Your First Online Today",
    voucher: "Up to 38% Voucher",
    brand: "Canon",
    country: "China",
    logo: CanonLogo,
    featured: true,
  },
  {
    title: "Buy One, Get One Free on Select Shoes",
    voucher: "Up to 25% Voucher",
    brand: "Philips",
    country: "Russia",
    logo: PhilipsLogo,
    featured: false,
  },
  {
    title: "25% Off All Home Furnishings",
    voucher: "Up to 37% Voucher",
    brand: "Siemens",
    country: "France",
    logo: SiemensLogo,
    featured: false,
  },
  {
    title: "$30 Off Orders Over $150 - Use Code",
    voucher: "Up to 15% Voucher",
    brand: "LinkedIn",
    country: "Canada",
    logo: LinkedInLogo,
    featured: false,
  },
  {
    title: "10% Off All Summer Apparel - Limited",
    voucher: "Up to 30% Voucher",
    brand: "Al Huda",
    country: "Bangladesh",
    logo: AlHudaLogo,
    featured: false,
  },
  {
    title: "Free Shipping on Orders Over $50",
    voucher: "Up to 75% Voucher",
    brand: "Amazon",
    country: "Brazil",
    logo: AmazonLogo,
    featured: false,
  },
  {
    title: "30% Off All Beauty Products - Stocks",
    voucher: "Up to 45% Voucher",
    brand: "Alibaba",
    country: "USA",
    logo: AlibabaLogo,
    featured: false,
  },
];

export default function TopStores() {
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
            href="#top-stores"
            className="hero-enter group inline-flex w-full items-center justify-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-600 sm:w-auto sm:justify-start sm:self-auto"
            style={{ animationDelay: "200ms" }}
          >
            See All Stores
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
            >
              <path
                d="M4 10h12m0 0-4-4m4 4-4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div
          id="top-stores"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {stores.map((store, index) => {
            const Logo = store.logo;

            return (
              <article
                key={`${store.brand}-${store.title}`}
                className={`hero-enter group relative overflow-hidden rounded-[1.8rem] border bg-white/90 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_54px_rgba(15,23,42,0.09)] sm:p-5 ${
                  store.featured
                    ? "border-sky-200 ring-1 ring-sky-100"
                    : "border-slate-100"
                }`}
                style={{ animationDelay: `${260 + index * 90}ms` }}
              >
                <div className="flex items-start gap-4">
                  <h3 className="min-h-[3.75rem] flex-1 text-base font-semibold leading-7 tracking-[-0.03em] text-slate-900 sm:text-lg">
                    {store.title}
                  </h3>
                  <button
                    type="button"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-400 ring-1 ring-orange-100 transition duration-300 hover:rotate-6 hover:bg-orange-100 hover:text-orange-500"
                    aria-label={`Share ${store.brand} coupon`}
                  >
                    <ShareIcon />
                  </button>
                </div>

                <div className="mt-4 rounded-2xl border border-sky-100 bg-[linear-gradient(135deg,#f8fdff_0%,#eef8ff_100%)] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                  <div className="flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 ring-1 ring-sky-100/80">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sky-500 shadow-[0_8px_18px_rgba(14,165,233,0.15)]">
                      <BrandMark />
                    </span>
                    <span className="truncate text-sm font-semibold text-slate-700">
                      {store.voucher}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-100">
                    <Logo />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-lg font-semibold tracking-[-0.03em] text-slate-900">
                      {store.brand}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                      <PinIcon />
                      {store.country}
                    </p>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.22),transparent)]" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ShareIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M12.2 5.4a2.1 2.1 0 1 0 0-1.8l-4.9 2.9a2.1 2.1 0 1 0 0 6.9l4.9 2.9a2.1 2.1 0 1 0 .7-1.5L8 11.9a2.1 2.1 0 0 0 0-3.8l4.9-2.9c.2.1.4.2.7.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M10 17s4-4.3 4-8a4 4 0 1 0-8 0c0 3.7 4 8 4 8Zm0-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <circle cx="12" cy="12" r="10" fill="#0ea5e9" opacity="0.18" />
      <path
        d="M6.5 12a5.5 5.5 0 1 1 5.5 5.5A5.5 5.5 0 0 1 6.5 12Z"
        fill="#0284c7"
      />
      <path
        d="M12 6.5A5.5 5.5 0 0 1 17.5 12"
        stroke="#f59e0b"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FedExLogo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#55228d] text-sm font-black tracking-[-0.04em] text-white">
      <span className="text-white">Fed</span>
      <span className="text-orange-400">Ex</span>
    </div>
  );
}

function CanonLogo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#d91c1c] text-sm font-black uppercase tracking-[0.04em] text-white">
      Canon
    </div>
  );
}

function PhilipsLogo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#1386d1] text-[0.8rem] font-black uppercase tracking-[0.08em] text-white">
      Philips
    </div>
  );
}

function SiemensLogo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#11a7a7] text-[0.74rem] font-black uppercase tracking-[0.08em] text-white">
      Siemens
    </div>
  );
}

function LinkedInLogo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0a66c2] text-[0.78rem] font-black text-white">
      Linked
      <span className="rounded-sm bg-white px-1 py-0.5 text-[#0a66c2]">in</span>
    </div>
  );
}

function AlHudaLogo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black text-[0.78rem] font-bold italic tracking-[0.02em] text-white">
      Al Huda
    </div>
  );
}

function AmazonLogo() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#1f2937] text-white">
      <span className="text-[0.78rem] font-semibold tracking-[0.02em]">
        amazon
      </span>
      <span className="mt-1 h-1 w-8 rounded-full bg-orange-400" />
    </div>
  );
}

function AlibabaLogo() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#f97316] text-[0.8rem] font-black italic tracking-[0.02em] text-white">
      Alibaba
    </div>
  );
}
