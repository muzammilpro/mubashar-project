"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";

export default function DashboardPage() {
  const { user, loading: authLoading, logout } = useAuth();
  const router = useRouter();

  const [cashback, setCashback] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [withdrawing, setWithdrawing] = useState(false);
  const [withdrawMsg, setWithdrawMsg] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) router.replace("/login");
  }, [authLoading, user, router]);

  useEffect(() => {
    if (!user) return;
    api.get("/users/me/cashback?limit=10")
      .then(({ data }) => {
        setCashback(data.data?.balance ?? 0);
        setTransactions(data.data?.transactions ?? []);
      })
      .catch(() => {})
      .finally(() => setFetching(false));
  }, [user]);

  const handleWithdraw = async () => {
    if (!cashback || cashback <= 0) return;
    setWithdrawing(true);
    setWithdrawMsg(null);
    try {
      await api.post("/users/me/withdraw", { method: "wallet" });
      setWithdrawMsg({ type: "success", text: "Withdrawal request submitted successfully." });
      setCashback(0);
    } catch (err) {
      setWithdrawMsg({ type: "error", text: err.response?.data?.message ?? "Withdrawal failed." });
    } finally {
      setWithdrawing(false);
    }
  };

  if (authLoading || (!user && !authLoading)) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">My Account</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-900">
          Welcome, <span className="text-orange-500">{user.username}</span>
        </h1>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Profile card */}
        <div className="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.07)]">
          <div className="h-1 bg-[linear-gradient(90deg,#f59e0b,#fb923c)]" />
          <div className="p-6">
            <h2 className="text-lg font-semibold tracking-[-0.03em] text-slate-900">Profile</h2>
            <div className="mt-5 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-2xl font-bold text-white">
                {user.username?.[0]?.toUpperCase() ?? "U"}
              </span>
              <div>
                <p className="text-lg font-semibold text-slate-900">{user.username}</p>
                <p className="text-sm text-slate-500 capitalize">{user.role?.toLowerCase()}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => { logout(); router.push("/"); }}
              className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-red-600 transition hover:border-red-200 hover:bg-red-50"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Cashback card */}
        <div className="overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.07)]">
          <div className="h-1 bg-[linear-gradient(90deg,#38bdf8,#2563eb)]" />
          <div className="p-6">
            <h2 className="text-lg font-semibold tracking-[-0.03em] text-slate-900">Cashback Balance</h2>

            {fetching ? (
              <div className="mt-6 flex h-16 items-center justify-center">
                <span className="h-6 w-6 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" />
              </div>
            ) : (
              <>
                <div className="mt-5 rounded-3xl bg-[linear-gradient(135deg,#eff6ff,#e0f2fe)] p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Available</p>
                  <p className="mt-2 text-4xl font-black tracking-[-0.04em] text-sky-700">
                    ${(cashback ?? 0).toFixed(2)}
                  </p>
                </div>

                {withdrawMsg && (
                  <p className={`mt-3 rounded-xl px-4 py-2 text-sm ${withdrawMsg.type === "success" ? "bg-green-50 text-green-700 ring-1 ring-green-100" : "bg-red-50 text-red-600 ring-1 ring-red-100"}`}>
                    {withdrawMsg.text}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleWithdraw}
                  disabled={withdrawing || !cashback || cashback <= 0}
                  className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(14,165,233,0.3)] transition hover:bg-sky-600 disabled:opacity-50"
                >
                  {withdrawing ? "Processing…" : "Withdraw Cashback"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Transaction history */}
      <div className="mt-6 overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-[0_18px_48px_rgba(15,23,42,0.07)]">
        <div className="border-b border-slate-100 px-6 py-5">
          <h2 className="text-lg font-semibold tracking-[-0.03em] text-slate-900">Transaction History</h2>
        </div>

        {fetching ? (
          <div className="flex h-32 items-center justify-center">
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-sky-500 border-t-transparent" />
          </div>
        ) : transactions.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm text-slate-400">
            No transactions yet. Start using coupons to earn cashback!
          </div>
        ) : (
          <ul className="divide-y divide-slate-50">
            {transactions.map((tx) => (
              <li key={tx.id ?? tx._id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {tx.coupon ? "Coupon Cashback" : tx.store ? "Store Cashback" : "Cashback"}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {tx.createdAt ? new Date(tx.createdAt).toLocaleDateString() : ""}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-sky-600">+${(tx.cashbackAmount ?? 0).toFixed(2)}</p>
                  <span className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-xs font-semibold capitalize ${
                    tx.status === "confirmed" ? "bg-green-50 text-green-600" :
                    tx.status === "withdrawn" ? "bg-slate-100 text-slate-500" :
                    "bg-orange-50 text-orange-500"
                  }`}>
                    {tx.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
