import FeedbackCarousel from "./FeedbackCarousel";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

async function fetchFeedback() {
  try {
    const res = await fetch(`${API}/feedback?limit=6`, {
      next: { revalidate: 120 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}

export default async function CustomersFeedback() {
  const items = await fetchFeedback();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-18 sm:px-6 lg:px-8 lg:pb-28">
      <div className="mb-6 hero-enter" style={{ animationDelay: "120ms" }}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
          Real Shopper Stories
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.3rem]">
          Customers <span className="text-orange-500">Feedback</span>
        </h2>
      </div>

      {items.length === 0 ? (
        <div className="rounded-4xl border border-dashed border-slate-200 bg-white/60 px-8 py-16 text-center text-slate-400">
          No feedback yet. Be the first to share your experience.
        </div>
      ) : (
        <FeedbackCarousel items={items} />
      )}
    </section>
  );
}
