// app/not-found.jsx
import Link from "next/link";

export const metadata = {
  title: "Page not found (404) – YouCine APK",
  description:
    "Sorry, the page you are looking for doesn’t exist. Visit the homepage, blogs, or contact us.",
  robots: {
    index: false,   // ✅ IMPORTANT: 404 pages ko index nahi karwana
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] py-14">
      <div className="mx-auto max-w-275 px-4">
        <div className="relative overflow-hidden rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-6">
          {/* glow */}
          <div className="pointer-events-none absolute -inset-0.5 bg-[radial-gradient(260px_180px_at_25%_20%,rgba(79,124,255,.20),transparent_60%),radial-gradient(280px_200px_at_78%_12%,rgba(34,197,94,.16),transparent_60%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,158,11,.35)] bg-[rgba(245,158,11,.08)] px-3 py-1.5 text-xs font-black text-[#e8eefc]">
              <span className="text-base leading-none">⚠️</span>
              404 — Page not found
            </div>

            <h1 className="mt-4 text-[30px] font-bold leading-[1.2] tracking-[-.4px] text-[#e8eefc]">
              Oops! This page doesn’t exist.
            </h1>

            <p className="mt-2 text-[13.5px] text-[#a9b6d3] max-w-[60ch]">
              The link may be broken, or the page might have been moved. Use the buttons below to continue.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(79,124,255,.9)] bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] shadow-[0_12px_35px_rgba(79,124,255,.22)] transition hover:-translate-y-0.5"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                  🏠
                </span>
                Go Home
              </Link>

              <Link
                href="/blogs"
                className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                  📄
                </span>
                Browse Blogs
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(34,197,94,.9)] bg-[linear-gradient(135deg,rgba(34,197,94,.95),rgba(34,197,94,.55))] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] shadow-[0_12px_35px_rgba(34,197,94,.18)] transition hover:-translate-y-0.5"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                  ✉️
                </span>
                Contact
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.55)] p-4">
              <p className="text-[13px] text-[#a9b6d3]">
                Tip: If you typed the URL manually, double-check the spelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
