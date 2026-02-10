// components/SiteSidebar.jsx
"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { posts } from "@/app/data/posts"; // ✅ adjust path if needed

function toTime(dateStr) {
  // expecting ISO "YYYY-MM-DD"
  const t = Date.parse(dateStr);
  return Number.isFinite(t) ? t : 0;
}

export default function SiteSidebar({ TableNav = [] }) {
  const pathname = usePathname();

  const recentPosts = useMemo(() => {
    // sort newest first
    const sorted = [...posts].sort((a, b) => toTime(b.date) - toTime(a.date));

    // exclude current page post
    const filtered = sorted.filter((p) => p.slug !== pathname);

    // take 5
    return filtered.slice(0, 5);
  }, [pathname]);

  return (
    <aside className="space-y-5">
      {/* ✅ Table of contents */}
      {TableNav?.length > 0 ? (
        <div className="rounded-2xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
          <h3 className="mb-2 font-black text-[#e8eefc]">Table of Contents</h3>
          <ul className="list-disc space-y-2 text-sm text-[#a9b6d3] px-4">
            {TableNav.map((t) => (
              <li key={t.hrefLink}>
                <a className="hover:underline" href={`#${t.hrefLink}`}>
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* ✅ Recent posts (functional) */}
      <div className="rounded-2xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
        <h3 className="mb-2 font-black text-[#e8eefc]">Recent Posts</h3>

        {recentPosts.length === 0 ? (
          <p className="text-sm text-[#a9b6d3]">No recent posts yet.</p>
        ) : (
          <ul className="list-disc space-y-3 px-4">
            {recentPosts.map((p) => (
              <li key={p.slug} className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-3">
                <Link href={p.slug} className="block font-black text-[#d7e3ff] hover:underline">
                  {p.title}
                </Link>
                <div className="mt-1 text-xs text-[#a9b6d3]">
                  {p.date} • {p.author}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ✅ Quick links */}
      <div className="rounded-2xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
        <h3 className="mb-2 font-black text-[#e8eefc]">Quick Links</h3>
        <ul className="list-disc space-y-2 text-sm text-[#a9b6d3] px-4">
          <li><Link href="/" className="hover:underline">Download Page</Link></li>
          <li><Link href="/youcine-apk-for-pc" className="hover:underline">YouCine for PC</Link></li>
          <li><Link href="/youcine-apk-for-tv" className="hover:underline">YouCine for TV Box</Link></li>
          <li><Link href="/youcine-apk-for-ios" className="hover:underline">YouCine for iOS</Link></li>
        </ul>
      </div>
    </aside>
  );
}
