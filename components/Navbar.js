import Link from "next/link";

const categories = [
  "Category",
  "Fashion",
  "Electronics",
  "Travel",
  "Lifestyle",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-slate-900 transition hover:opacity-90"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f59e0b_0%,#fbbf24_48%,#38bdf8_52%,#2563eb_100%)] shadow-[0_10px_24px_rgba(37,99,235,0.18)]">
            <span className="h-6 w-6 rounded-full border-[5px] border-white" />
            <span className="absolute right-[9px] top-1/2 h-3 w-2 -translate-y-1/2 rounded-full bg-white" />
          </span>
          <span className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">
            Mubashar Don
          </span>
        </Link>

        <form
          action="/"
          className="order-3 flex basis-full md:order-none md:min-w-[22rem] md:flex-1 lg:min-w-[24rem]"
        >
          <div className="flex w-full flex-col gap-3 rounded-[1.8rem] border border-slate-200 bg-white p-2 shadow-[0_14px_34px_rgba(15,23,42,0.07)] sm:flex-row sm:items-center">
            <div className="relative sm:w-[10rem] sm:flex-none lg:w-[11rem]">
              <select
                defaultValue="Category"
                aria-label="Select category"
                className="h-12 w-full appearance-none rounded-full bg-slate-50 px-4 pr-10 text-sm font-medium text-slate-700 outline-none ring-0 transition focus:bg-slate-100"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M5.47 7.97a.75.75 0 0 1 1.06 0L10 11.44l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </span>
            </div>

            <label className="flex min-w-0 flex-1 items-center">
              <span className="sr-only">Search</span>
              <input
                type="search"
                name="q"
                placeholder="Search here..."
                className="h-12 w-full min-w-0 rounded-full border border-transparent bg-transparent px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-200 focus:bg-slate-50"
              />
            </label>

            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-orange-400 px-7 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(251,146,60,0.35)] transition hover:bg-orange-500"
            >
              Search
            </button>
          </div>
        </form>

        <nav className="order-2 flex w-full items-center justify-end gap-2 sm:w-auto sm:gap-3 md:order-none md:ml-auto">
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center rounded-full px-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 sm:px-4"
          >
            Sign In
          </button>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center rounded-full bg-sky-500 px-4 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(14,165,233,0.3)] transition hover:bg-sky-600 sm:px-5"
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}
