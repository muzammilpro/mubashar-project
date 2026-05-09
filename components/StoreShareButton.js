"use client";

export default function StoreShareButton({ storeId, storeName }) {
  const handleShare = () => {
    const url = window.location.origin + `/stores/${storeId}`;
    if (navigator.share) {
      navigator.share({ title: storeName, url });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-400 ring-1 ring-orange-100 transition duration-300 hover:rotate-6 hover:bg-orange-100 hover:text-orange-500"
      aria-label={`Share ${storeName}`}
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
        <path d="M12.2 5.4a2.1 2.1 0 1 0 0-1.8l-4.9 2.9a2.1 2.1 0 1 0 0 6.9l4.9 2.9a2.1 2.1 0 1 0 .7-1.5L8 11.9a2.1 2.1 0 0 0 0-3.8l4.9-2.9c.2.1.4.2.7.2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
