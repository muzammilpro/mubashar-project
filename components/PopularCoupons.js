import Link from "next/link";

const coupons = [
  {
    brand: "Microsoft",
    title: "20% Off All Electronics - Limited Time Offer",
    description:
      "Stack your coupon with cashback and unlock extra savings on laptops, accessories, and office gear.",
    date: "25 Nov, 24",
    uses: "5462",
    comments: "25",
    likes: "15",
    savings: "Save up to 25% on all electronics",
    code: "MS20",
    logo: MicrosoftLogo,
    theme:
      "bg-[linear-gradient(145deg,#030712_0%,#111827_55%,#1f2937_100%)] text-white",
    buttonTheme:
      "bg-sky-500 text-white shadow-[0_16px_30px_rgba(14,165,233,0.28)] hover:bg-sky-600",
  },
  {
    brand: "Philips",
    title: "Save 15% On Your First Online Purchase Today",
    description:
      "Best for grooming, home appliances, and lighting bundles with fast cashback confirmation.",
    date: "25 Nov, 24",
    uses: "5462",
    comments: "25",
    likes: "15",
    savings: "Save up to 15% on your first order",
    code: "PH15",
    logo: PhilipsLogo,
    theme:
      "bg-[linear-gradient(145deg,#0284c7_0%,#0ea5e9_48%,#2563eb_100%)] text-white",
    buttonTheme:
      "bg-sky-500 text-white shadow-[0_16px_30px_rgba(14,165,233,0.28)] hover:bg-sky-600",
  },
  {
    brand: "Siemens",
    title: "Free Shipping on Orders Over $50 - Shop Today",
    description:
      "Grab shipping perks on smart home products, tools, and premium accessories for the week.",
    date: "26 Nov, 24",
    uses: "5462",
    comments: "25",
    likes: "15",
    savings: "Save up to 25% on selected store offers",
    code: "SHIP50",
    logo: SiemensLogo,
    theme:
      "bg-[linear-gradient(145deg,#0891b2_0%,#0f766e_55%,#115e59_100%)] text-white",
    buttonTheme:
      "bg-sky-500 text-white shadow-[0_16px_30px_rgba(14,165,233,0.28)] hover:bg-sky-600",
  },
];

export default function PopularCoupons() {
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
          href="#popular-coupons"
          className="hero-enter group inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-600 sm:self-auto"
          style={{ animationDelay: "200ms" }}
        >
          See All Coupons
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

      <div className="space-y-4 sm:space-y-5">
        {coupons.map((coupon, index) => {
          const Logo = coupon.logo;

          return (
            <article
              key={coupon.brand}
              className="hero-enter group relative overflow-hidden rounded-[2rem] border border-sky-100/90 bg-white/92 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_24px_56px_rgba(15,23,42,0.1)]"
              style={{ animationDelay: `${260 + index * 120}ms` }}
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.3),transparent)]" />

              <div className="grid gap-0 lg:grid-cols-[16rem_minmax(0,1fr)_14rem]">
                <div className="p-4 sm:p-5">
                  <div
                    className={`relative flex min-h-[9rem] items-center justify-center overflow-hidden rounded-[1.6rem] px-5 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:min-h-[11rem] sm:px-6 sm:py-8 ${coupon.theme}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_24%)] opacity-70" />
                    <div className="relative">
                      <Logo />
                    </div>
                  </div>
                </div>

                <div className="border-slate-100 px-4 pb-5 sm:px-5 lg:border-l lg:border-r lg:py-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600 ring-1 ring-sky-100">
                      Exclusive
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500 ring-1 ring-orange-100">
                      <CalendarIcon />
                      {coupon.date}
                    </span>
                  </div>

                  <h3 className="mt-4 max-w-3xl text-xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-[2rem] lg:text-[2.1rem] lg:leading-[1.18]">
                    {coupon.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
                    {coupon.description}
                  </p>

                  <div className="mt-5 grid gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500 sm:grid-cols-2 xl:grid-cols-3">
                    <StatChip icon={<ClaimIcon />} value={coupon.uses} label="Uses" />
                    <StatChip
                      icon={<CommentIcon />}
                      value={coupon.comments}
                      label="Comments"
                    />
                    <StatChip icon={<HeartIcon />} value={coupon.likes} label="Likes" />
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-4 border-t border-slate-100 p-4 sm:p-5 lg:border-t-0">
                  <div className="rounded-[1.5rem] bg-slate-50 px-4 py-4 ring-1 ring-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Limited Offer
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {coupon.savings}
                    </p>
                  </div>

                  <button
                    type="button"
                    className={`inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-300 hover:-translate-y-1 ${coupon.buttonTheme}`}
                  >
                    Show Coupon
                  </button>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href="#popular-coupons"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
                    >
                      More Coupons
                      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
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
                    <span className="inline-flex rounded-full border border-dashed border-sky-300 bg-sky-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                      {coupon.code}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
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

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M5.5 3.5v2M14.5 3.5v2M4.5 6.5h11m-9.5 9h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClaimIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M6.5 6.5a2.5 2.5 0 1 1 5 0v1h1.5A1.5 1.5 0 0 1 14.5 9v5A1.5 1.5 0 0 1 13 15.5H5A1.5 1.5 0 0 1 3.5 14V9A1.5 1.5 0 0 1 5 7.5h1.5v-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M4.5 5.5A1.5 1.5 0 0 1 6 4h8A1.5 1.5 0 0 1 15.5 5.5v5A1.5 1.5 0 0 1 14 12H9l-3.5 3V12H6A1.5 1.5 0 0 1 4.5 10.5v-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      <path
        d="M10 15.2 4.8 10a3.3 3.3 0 1 1 4.7-4.7L10 5.8l.5-.5a3.3 3.3 0 1 1 4.7 4.7L10 15.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="grid grid-cols-2 gap-1.5">
        <span className="h-6 w-6 bg-[#f35325]" />
        <span className="h-6 w-6 bg-[#81bc06]" />
        <span className="h-6 w-6 bg-[#05a6f0]" />
        <span className="h-6 w-6 bg-[#ffba08]" />
      </div>
      <span className="text-[2.1rem] font-semibold tracking-[-0.04em]">
        Microsoft
      </span>
    </div>
  );
}

function PhilipsLogo() {
  return (
    <div className="text-center">
      <div className="text-[3rem] font-black uppercase tracking-[0.06em] text-white">
        PHILIPS
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-white/70">
        Smart Savings
      </div>
    </div>
  );
}

function SiemensLogo() {
  return (
    <div className="text-center">
      <div className="text-[2.8rem] font-black uppercase tracking-[0.08em] text-white">
        SIEMENS
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-white/70">
        Shipping Deals
      </div>
    </div>
  );
}
