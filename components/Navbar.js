"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const categories = ["Category", "Fashion", "Electronics", "Travel", "Lifestyle"];

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activePanel, setActivePanel] = useState(null);
  const [searchQ, setSearchQ] = useState("");
  const [searchCat, setSearchCat] = useState("Category");

  const isSearchOpen = activePanel === "search";
  const isMenuOpen = activePanel === "menu";

  const togglePanel = (panel) => {
    setActivePanel((cur) => (cur === panel ? null : panel));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQ.trim()) return;
    const params = new URLSearchParams({ q: searchQ.trim() });
    if (searchCat !== "Category") params.set("category", searchCat);
    router.push(`/search?${params.toString()}`);
    setActivePanel(null);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const searchForm = (
    <form
      onSubmit={handleSearch}
      className="flex w-full flex-col gap-3 rounded-[1.8rem] border border-slate-200 bg-white p-2 shadow-[0_14px_34px_rgba(15,23,42,0.07)] sm:flex-row sm:items-center"
    >
      <div className="relative sm:flex-none">
        <select
          value={searchCat}
          onChange={(e) => setSearchCat(e.target.value)}
          aria-label="Select category"
          className="h-12 w-full appearance-none rounded-full bg-slate-50 px-4 pr-10 text-sm font-medium text-slate-700 outline-none ring-0 transition focus:bg-slate-100 sm:w-40 lg:w-44"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
          <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
            <path d="M5.47 7.97a.75.75 0 0 1 1.06 0L10 11.44l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </span>
      </div>

      <label className="flex min-w-0 flex-1 items-center">
        <span className="sr-only">Search</span>
        <input
          type="search"
          name="q"
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          placeholder="Search coupons, stores…"
          className="h-12 w-full min-w-0 rounded-full border border-transparent bg-transparent px-4 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-200 focus:bg-slate-50"
        />
      </label>

      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-full bg-orange-400 px-7 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(251,146,60,0.35)] transition hover:bg-orange-500"
      >
        Search
      </button>
    </form>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8">
        {/* Logo + mobile toggles */}
        <div className="flex w-full items-center justify-between gap-3 md:w-auto md:flex-none">
          <Link href="/" className="flex items-center gap-3 text-slate-900 transition hover:opacity-90">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f59e0b_0%,#fbbf24_48%,#38bdf8_52%,#2563eb_100%)] shadow-[0_10px_24px_rgba(37,99,235,0.18)]">
              <span className="h-6 w-6 rounded-full border-[5px] border-white" />
              <span className="absolute right-2.25 top-1/2 h-3 w-2 -translate-y-1/2 rounded-full bg-white" />
            </span>
            <span className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">Mubashar Don</span>
          </Link>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-expanded={isSearchOpen}
              aria-label={isSearchOpen ? "Close search" : "Open search"}
              onClick={() => togglePanel("search")}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition ${isSearchOpen ? "border-sky-300 text-sky-600" : "border-slate-200 text-slate-700 hover:border-sky-200 hover:text-sky-600"}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="6" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => togglePanel("menu")}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition ${isMenuOpen ? "border-sky-300 text-sky-600" : "border-slate-200 text-slate-700 hover:border-sky-200 hover:text-sky-600"}`}
            >
              <span className="relative h-4 w-5">
                <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "top-1.75 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-1.75 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-3.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "top-1.75 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop search */}
        <div className="order-3 hidden basis-full md:order-0 md:flex md:min-w-88 md:flex-1 lg:min-w-96">
          {searchForm}
        </div>

        {/* Desktop auth nav */}
        <nav className="hidden items-center justify-end gap-2 sm:gap-3 md:ml-auto md:flex">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 sm:px-4"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                  {user.username?.[0]?.toUpperCase() ?? "U"}
                </span>
                {user.username}
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:px-5"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="inline-flex h-11 items-center justify-center rounded-full px-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 sm:px-4"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="inline-flex h-11 items-center justify-center rounded-full bg-sky-500 px-4 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(14,165,233,0.3)] transition hover:bg-sky-600 sm:px-5"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile search panel */}
        <div
          id="mobile-search-panel"
          className={`order-4 basis-full overflow-hidden transition-all duration-300 md:hidden ${isSearchOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="mt-1 flex">{searchForm}</div>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu-panel"
          className={`order-5 basis-full overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="mt-1 grid gap-2 rounded-[1.6rem] border border-slate-200 bg-white p-2 shadow-[0_14px_34px_rgba(15,23,42,0.07)]">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setActivePanel(null)}
                  className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white">
                    {user.username?.[0]?.toUpperCase() ?? "U"}
                  </span>
                  {user.username}
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setActivePanel(null)}
                  className="inline-flex h-11 items-center justify-center rounded-full px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setActivePanel(null)}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-sky-500 px-4 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(14,165,233,0.3)] transition hover:bg-sky-600"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
