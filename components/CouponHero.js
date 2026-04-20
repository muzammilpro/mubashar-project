import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Log In & Shop",
    description:
      "Grab your coupon, activate cashback, and visit your favorite store with one tap.",
    icon: UserOrbitIcon,
  },
  {
    number: "2",
    title: "Cashback Earned",
    description:
      "Each confirmed purchase lands in your wallet automatically so you never miss a reward.",
    icon: WalletSparkIcon,
  },
  {
    number: "3",
    title: "Withdraw Cashback",
    description:
      "Cash out to your bank, transfer to a wallet, or turn rewards into fresh vouchers.",
    icon: WithdrawIcon,
  },
];

export default function CouponHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[24rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.22),transparent_52%),radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.2),transparent_32%)]" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl hero-enter" style={{ animationDelay: "40ms" }}>
            <span className="inline-flex w-full max-w-full items-center justify-center rounded-full border border-orange-200 bg-white/90 px-4 py-2 text-center text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-orange-500 shadow-[0_12px_30px_rgba(251,146,60,0.12)] sm:w-auto sm:justify-start sm:text-left sm:text-xs sm:tracking-[0.28em]">
              Featured Coupon Campaigns
            </span>
            <h1 className="mt-4 max-w-2xl text-[2.45rem] font-semibold leading-[1.03] tracking-[-0.05em] text-slate-950 sm:text-5xl sm:leading-none lg:text-[3.7rem] lg:leading-[1.05]">
              Big fashion drops, instant cashback, and weekly promo bursts.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Mubashar Don helps shoppers compare high-value coupons, unlock
              cashback, and keep every campaign in one beautiful place.
            </p>
          </div>

          <div
            className="flex w-full flex-col gap-3 hero-enter sm:w-auto sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "140ms" }}
          >
            <Link
              href="#featured-deals"
              className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-amber-50 shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:text-white sm:w-auto"
            >
              <span className="text-white">Explore Deals</span>
              <span className="ml-2 text-orange-300 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-200">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-5 w-5 fill-none"
                >
                  <path
                    d="M3.5 10h13m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-white/90 px-6 text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:text-sky-600 sm:w-auto"
            >
              How It Works
            </Link>
          </div>
        </div>

        <div
          id="featured-deals"
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-[0.9fr_1.55fr_0.9fr]"
        >
          <PromoShell
            className="min-h-[24rem] bg-[linear-gradient(145deg,#f06292_0%,#fb923c_58%,#facc15_100%)]"
            delay="180ms"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_28%)]" />
            <DotTexture className="absolute right-5 top-4 text-white/30" />
            <OutlineTicket className="absolute left-4 top-16 text-white/22" />
            <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="max-w-[11rem]">
                <p className="text-[2.3rem] font-semibold italic tracking-[-0.05em] text-white sm:text-5xl">
                  Sale
                </p>
                <p className="mt-2 text-[3rem] font-black leading-none text-white sm:text-[4rem]">
                  50%
                </p>
                <p className="mt-2 text-lg font-semibold uppercase tracking-[0.25em] text-white/90">
                  Special Offer
                </p>
              </div>

              <div className="relative mt-8 min-h-[10rem]">
                <ShopperIllustration
                  idPrefix="left-card"
                  className="hero-float absolute bottom-0 left-1/2 w-[12.5rem] max-w-none -translate-x-1/2 drop-shadow-[0_16px_40px_rgba(95,35,12,0.26)]"
                />
              </div>

              <CouponRibbon accent="35%" ends="Ends Sunday" />
            </div>
          </PromoShell>

          <PromoShell
            className="min-h-[24rem] md:col-span-2 xl:col-span-1 bg-[linear-gradient(135deg,#ff6a3d_0%,#ff5a5f_38%,#f59e0b_100%)]"
            delay="260ms"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_20%),radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.18),transparent_16%),radial-gradient(circle_at_85%_85%,rgba(255,255,255,0.18),transparent_18%)]" />
            <DotTexture className="absolute right-24 top-5 text-white/24" />
            <span className="absolute left-8 top-7 h-2.5 w-14 rounded-full bg-white/80" />
            <span className="absolute left-8 top-14 h-2.5 w-10 rounded-full bg-white/50" />
            <span className="absolute left-24 top-7 h-2.5 w-2.5 rounded-full bg-white/70" />
            <span className="absolute left-[7.5rem] top-7 hidden h-2.5 w-2.5 rounded-full bg-white/40 sm:block" />
            <div className="absolute right-5 top-6 hidden text-right text-[3.8rem] font-black leading-[0.82] tracking-[-0.08em] text-white/18 sm:block [writing-mode:vertical-rl] rotate-180">
              40% OFF
            </div>

            <div className="relative grid h-full gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end lg:p-8">
              <div className="z-10 flex max-w-[18rem] flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/80">
                    Only This Week
                  </p>
                  <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.07em] text-white sm:text-6xl">
                    Super Sale
                  </h2>
                  <p className="mt-4 max-w-[15rem] text-sm leading-6 text-white/80 sm:text-base">
                    Activate store coupons, stack seasonal cashback, and see the
                    best fashion stores in one pass.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="#how-it-works"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-orange-500 shadow-[0_12px_24px_rgba(255,255,255,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-orange-50"
                  >
                    Get Coupons
                  </Link>
                  <Link
                    href="#featured-deals"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    See Stores
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[14rem] sm:min-h-[17rem]">
                <span className="absolute bottom-8 left-3 h-32 w-32 rounded-full bg-white/12 blur-2xl" />
                <span className="absolute right-4 top-6 h-24 w-24 rounded-full border border-white/18" />
                <ShopperIllustration
                  idPrefix="center-card"
                  className="hero-float-slow absolute bottom-0 right-0 w-[14rem] max-w-none drop-shadow-[0_24px_56px_rgba(111,26,5,0.28)] sm:w-[18.5rem]"
                />
              </div>

              <div className="lg:col-span-2">
                <CouponRibbon accent="50%" ends="Live for 3 days" large />
              </div>
            </div>
          </PromoShell>

          <PromoShell
            className="min-h-[24rem] bg-[linear-gradient(165deg,#fb7185_0%,#f472b6_52%,#fda4af_100%)]"
            delay="340ms"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_24%)]" />
            <DotTexture className="absolute left-4 top-4 text-white/25" />
            <OutlineTicket className="absolute right-4 top-[5.5rem] text-white/18" />
            <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
              <div className="max-w-[12rem]">
                <p className="text-lg font-black uppercase tracking-[0.18em] text-white/80">
                  Black
                </p>
                <h3 className="mt-1 text-[2.15rem] font-black uppercase leading-none tracking-[-0.06em] text-slate-950 sm:text-5xl">
                  Friday
                </h3>
                <p className="mt-2 inline-flex rounded-full bg-slate-950 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-white">
                  Sale
                </p>
              </div>

              <div className="relative mt-6 flex min-h-[10rem] items-end justify-between gap-4">
                <div className="hero-float flex items-end gap-3">
                  <ShoppingBagStack />
                  <div className="hidden h-24 w-16 rounded-t-[2.5rem] rounded-b-2xl bg-white/30 backdrop-blur-sm sm:block" />
                </div>
                <div className="hero-float-slow flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 text-center text-[0.7rem] font-semibold uppercase leading-4 tracking-[0.2em] text-white shadow-[0_18px_42px_rgba(15,23,42,0.28)] sm:h-28 sm:w-28">
                  Up To
                  <br />
                  80% Off
                </div>
              </div>

              <CouponRibbon accent="58%" ends="Ends Friday" />
            </div>
          </PromoShell>
        </div>

        <div
          id="how-it-works"
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="step-enter group relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/88 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_56px_rgba(15,23,42,0.12)]"
              style={{ animationDelay: `${380 + index * 120}ms` }}
            >
              <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.35),transparent)]" />
              <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-lg font-bold text-white shadow-[0_14px_28px_rgba(14,165,233,0.2)] ring-4 ring-white/90 transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-sky-600">
                {number}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition duration-300 group-hover:bg-sky-50 group-hover:text-sky-500">
                <Icon />
              </div>
              <h4 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-900">
                {title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoShell({ children, className, delay }) {
  return (
    <article
      className={`hero-enter group relative isolate overflow-hidden rounded-[2rem] border border-white/65 shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_32px_90px_rgba(15,23,42,0.16)] ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
        <div className="shine-sweep absolute inset-y-0 -left-1/2 w-1/3 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.34),transparent)] blur-xl" />
      </div>
      {children}
    </article>
  );
}

function CouponRibbon({ accent, ends, large = false }) {
  return (
    <div
      className={`relative z-10 inline-flex items-center gap-2.5 overflow-hidden rounded-2xl border border-sky-300/25 bg-[linear-gradient(135deg,#1d9bf0_0%,#0d6aa8_52%,#0f4c81_100%)] px-2.5 py-2.5 text-white shadow-[0_12px_30px_rgba(15,76,129,0.24)] ${
        large
          ? "w-full max-w-full sm:max-w-md sm:gap-3 sm:px-3 sm:py-3"
          : "w-full"
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-500 shadow-[0_8px_18px_rgba(255,255,255,0.35)]">
        <BrandMark />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-sky-100/90">
          Cashback
        </p>
        <p className="text-sm font-semibold leading-5 text-white sm:text-[0.95rem]">
          Up to {accent} cashback
        </p>
      </div>
      <span className="ml-auto hidden shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-medium text-white/90 backdrop-blur-sm sm:inline-flex">
        {ends}
      </span>
    </div>
  );
}

function ShopperIllustration({ className, idPrefix }) {
  const hairGradient = `${idPrefix}-hair`;
  const shirtGradient = `${idPrefix}-shirt`;
  const bagGradient = `${idPrefix}-bag`;

  return (
    <svg
      viewBox="0 0 240 320"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id={hairGradient} x1="60" y1="20" x2="182" y2="160">
          <stop stopColor="#6f3c23" />
          <stop offset="1" stopColor="#a8552a" />
        </linearGradient>
        <linearGradient id={shirtGradient} x1="85" y1="110" x2="168" y2="292">
          <stop stopColor="#fde047" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id={bagGradient} x1="18" y1="162" x2="92" y2="280">
          <stop stopColor="#ef4444" />
          <stop offset="1" stopColor="#db2777" />
        </linearGradient>
      </defs>

      <ellipse cx="120" cy="302" rx="74" ry="14" fill="rgba(15,23,42,0.12)" />
      <path
        d="M74 78C74 39.34 95.94 16 124 16c28.06 0 50 23.34 50 62v64c0 35.35-25.07 64-56 64s-44-26.5-44-61V78Z"
        fill={`url(#${hairGradient})`}
      />
      <ellipse cx="121" cy="88" rx="35" ry="42" fill="#f5c79a" />
      <path
        d="M85 78c6-29 29-47 58-47 27 0 46 17 49 44-14-10-29-16-48-16-23 0-39 11-59 19Z"
        fill={`url(#${hairGradient})`}
      />
      <path
        d="M78 86c3 22 8 35 20 48-19 0-29-18-29-38 0-11 3-20 9-28v18Z"
        fill={`url(#${hairGradient})`}
      />
      <rect x="112" y="122" width="18" height="18" rx="9" fill="#efb08f" />
      <path
        d="M76 161c20-27 45-39 68-39s48 12 68 39l-12 135H87L76 161Z"
        fill={`url(#${shirtGradient})`}
      />
      <path
        d="M77 170c-7 8-14 25-16 43 9 6 24 4 34-3 0-14-2-29-7-43-4-1-8 0-11 3Z"
        fill="#f5c79a"
      />
      <path
        d="M173 172c6 9 11 24 11 40 10 6 21 4 31-2-2-18-7-32-17-45-8-1-16 1-25 7Z"
        fill="#f5c79a"
      />
      <path
        d="M49 206c0-4 3-7 7-7h22c4 0 7 3 7 7v75H49v-75Z"
        fill={`url(#${bagGradient})`}
      />
      <path
        d="M54 203c0-13 8-22 18-22 10 0 18 9 18 22"
        stroke="#f5d0fe"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M170 211c0-4 3-7 7-7h20c4 0 7 3 7 7v70h-34v-70Z"
        fill="#f8fafc"
      />
      <path
        d="M174 209c0-11 7-18 16-18 9 0 16 7 16 18"
        stroke="#f59e0b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M113 173c4 17 8 52 8 123M134 173c-3 26-4 65-2 123"
        stroke="#f59e0b"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DotTexture({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={`h-24 w-24 ${className}`}
      fill="currentColor"
    >
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 6 }).map((__, col) => (
          <circle
            key={`${row}-${col}`}
            cx={16 + col * 16}
            cy={16 + row * 16}
            r="2.2"
          />
        ))
      )}
    </svg>
  );
}

function OutlineTicket({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 70"
      className={`h-16 w-28 ${className}`}
      fill="none"
    >
      <path
        d="M8 16a8 8 0 0 1 8-8h88a8 8 0 0 1 8 8v10a8 8 0 0 0 0 16v10a8 8 0 0 1-8 8H16a8 8 0 0 1-8-8V42a8 8 0 0 0 0-16V16Z"
        stroke="currentColor"
        strokeDasharray="5 6"
        strokeWidth="3"
      />
    </svg>
  );
}

function ShoppingBagStack() {
  return (
    <div className="relative flex items-end gap-2">
      <div className="h-28 w-[4.5rem] rounded-t-[2.7rem] rounded-b-2xl bg-white/28 backdrop-blur-sm" />
      <div className="relative h-36 w-24 rounded-t-[3rem] rounded-b-[1.7rem] bg-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.22)]">
        <span className="absolute left-1/2 top-4 h-11 w-14 -translate-x-1/2 rounded-full border-4 border-white/75" />
        <span className="absolute inset-x-0 bottom-6 text-center text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-white/90">
          Hot Deal
        </span>
      </div>
      <div className="h-24 w-16 rounded-t-[2.5rem] rounded-b-2xl bg-sky-100/70 backdrop-blur-sm" />
    </div>
  );
}

function UserOrbitIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 19c1.7-3.2 4.1-4.8 6.5-4.8s4.8 1.6 6.5 4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3.5 11.5a8.5 8.5 0 0 1 5.2-7.8M20.5 12.5a8.5 8.5 0 0 1-4.8 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WalletSparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none">
      <path
        d="M4.5 8.5c0-1.7 1.3-3 3-3h9a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 9.5h15M8 5.5V3.8M12 5.5V2.8M16 5.5V3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="m14.2 13.2.9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.4-2-1.5-1.4 2-.3.9-1.8Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function WithdrawIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none">
      <rect
        x="3.5"
        y="6.5"
        width="17"
        height="11"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M15.5 12h3M13 12h.01M6.5 19.5h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
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
