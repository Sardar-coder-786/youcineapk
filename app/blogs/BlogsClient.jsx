"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { posts } from "../data/posts";

const POSTS_PER_PAGE = 8;

// --- helpers ---
function normalizeText(str = "") {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/\s+/g, " ")
        .trim();
}

function scorePost(post, q) {
    if (!q) return 1;

    const title = normalizeText(post.title);
    const excerpt = normalizeText(post.excerpt);
    const keywords = (post.keywords || []).map(normalizeText);
    const category = normalizeText(post.category || "");

    let score = 0;

    // strongest: title hit
    if (title.includes(q)) score += 10;

    // excerpt hit
    if (excerpt.includes(q)) score += 5;

    // keyword hit
    if (keywords.some((k) => k.includes(q))) score += 6;

    // category hit
    if (category.includes(q)) score += 3;

    // token scoring (multi-word search)
    const tokens = q.split(" ").filter(Boolean);
    if (tokens.length > 1) {
        tokens.forEach((t) => {
            if (title.includes(t)) score += 2.2;
            if (excerpt.includes(t)) score += 1.2;
            if (keywords.some((k) => k.includes(t))) score += 1.6;
            if (category.includes(t)) score += 0.8;
        });
    }

    return score;
}

export default function BlogsPage() {
    const [query, setQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

    const normalizedQuery = useMemo(() => normalizeText(query), [query]);

    // reset paging when query changes
    const onQueryChange = (val) => {
        setQuery(val);
        setVisibleCount(POSTS_PER_PAGE);
    };

    const filteredPosts = useMemo(() => {
        if (!normalizedQuery) return posts;

        return posts
            .map((p) => ({ post: p, score: scorePost(p, normalizedQuery) }))
            .filter((x) => x.score > 0)
            .sort((a, b) => b.score - a.score)
            .map((x) => x.post);
    }, [normalizedQuery]);

    const visiblePosts = useMemo(
        () => filteredPosts.slice(0, visibleCount),
        [filteredPosts, visibleCount]
    );

    const hasQuery = normalizedQuery.length > 0;
    const hasMore = visibleCount < filteredPosts.length;

    return (
        <main id="content">
            {/* HERO */}
            <section className="py-11 pb-5">
                <div className="mx-auto max-w-275 px-4">
                    <div className="relative overflow-hidden rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-6 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <div className="pointer-events-none absolute -inset-0.5 bg-[radial-gradient(260px_180px_at_25%_20%,rgba(79,124,255,.20),transparent_60%),radial-gradient(280px_200px_at_78%_12%,rgba(34,197,94,.16),transparent_60%)]" />
                        <div className="relative">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(79,124,255,.35)] bg-[rgba(79,124,255,.12)] px-3 py-1.5 text-xs font-black text-[#cfe0ff]">
                                <span className="h-2 w-2 rounded-full bg-[#4f7cff] shadow-[0_0_0_5px_rgba(79,124,255,.18)]" />
                                Blogs
                            </div>

                            <h1 className="mt-3 text-[28px] font-bold tracking-[-.4px]">Blogs</h1>

                            <p className="mt-2 text-sm text-[#a9b6d3]">
                                Guias rápidos, soluções e dicas para usar o YouCine com mais estabilidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-6">
                <div className="mx-auto max-w-275 px-4">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
                        {/* POSTS */}
                        <div className="space-y-6 order-2 lg:order-1">
                            {/* results header */}
                            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <div className="text-sm font-black text-[#e8eefc]">
                                            {hasQuery ? "Search results" : "Latest posts"}
                                        </div>
                                        <div className="text-xs text-[#a9b6d3]">
                                            {hasQuery ? (
                                                <>
                                                    Showing{" "}
                                                    <b className="text-[#d7e3ff]">{filteredPosts.length}</b>{" "}
                                                    result(s) for{" "}
                                                    <b className="text-[#d7e3ff]">“{query.trim()}”</b>
                                                </>
                                            ) : (
                                                <>
                                                    Showing <b className="text-[#d7e3ff]">{posts.length}</b>{" "}
                                                    post(s)
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {hasQuery ? (
                                        <button
                                            onClick={() => onQueryChange("")}
                                            className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3 py-2 text-xs font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                        >
                                            ✖ Clear search
                                        </button>
                                    ) : null}
                                </div>
                            </div>

                            {/* empty state */}
                            {visiblePosts.length === 0 ? (
                                <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                                    <h2 className="text-lg font-bold text-[#e8eefc]">No posts found</h2>
                                    <p className="mt-2 text-sm text-[#a9b6d3]">
                                        Try a different keyword (example: “tv box”, “cache”, “apk”, “ios”).
                                    </p>
                                </div>
                            ) : null}

                            {/* posts list */}
                            {visiblePosts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="grid gap-5 rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-5 shadow-[0_18px_50px_rgba(0,0,0,.35)] md:grid-cols-[260px_1fr]"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-42.5 w-full rounded-xl object-cover"
                                        loading="lazy"
                                    />

                                    <div>
                                        <div className="mb-2 text-xs text-[#a9b6d3]">
                                            Por <b className="text-[#d7e3ff]">{post.author}</b> •{" "}
                                            {post.date}
                                            {post.category ? (
                                                <>
                                                    {" "}
                                                    •{" "}
                                                    <span className="rounded-full border border-[rgba(79,124,255,.35)] bg-[rgba(79,124,255,.12)] px-2 py-1 text-[11px] font-black text-[#cfe0ff]">
                                                        {post.category}
                                                    </span>
                                                </>
                                            ) : null}
                                        </div>

                                        <h2 className="text-lg font-bold text-[#e8eefc]">
                                            <Link href={post.slug} className="hover:underline">
                                                {post.title}
                                            </Link>
                                        </h2>

                                        <p className="mt-2 text-sm text-[#a9b6d3]">{post.excerpt}</p>

                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <Link
                                                href={post.slug}
                                                className="inline-flex items-center gap-2 rounded-[14px] border border-[rgba(79,124,255,.9)] bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))] px-3 py-2 text-xs font-black text-white shadow-[0_12px_35px_rgba(79,124,255,.22)] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            >
                                                📄 Ler artigo
                                            </Link>

                                            <Link
                                                href="/contact-us"
                                                className="inline-flex items-center gap-2 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3 py-2 text-xs font-black text-white transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            >
                                                ✉️ Fale Conosco
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}

                            {/* Load more */}
                            {hasMore ? (
                                <div className="flex justify-center pt-2">
                                    <button
                                        onClick={() => setVisibleCount((v) => v + POSTS_PER_PAGE)}
                                        className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-4 py-3 text-xs font-black text-[#e8eefc] shadow-[0_18px_50px_rgba(0,0,0,.35)] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                    >
                                        ➕ Load more (next {POSTS_PER_PAGE})
                                    </button>
                                </div>
                            ) : null}

                            {/* end message */}
                            {visiblePosts.length > 0 && !hasMore ? (
                                <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4 text-center text-xs text-[#a9b6d3]">
                                    You reached the end.
                                </div>
                            ) : null}
                        </div>

                        {/* SIDEBAR */}
                        <aside className="space-y-5 order-1 lg:order-2">
                            {/* Search */}
                            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                                <h3 className="mb-2 font-bold text-[#e8eefc]">Search</h3>

                                <div className="flex gap-2">
                                    <input
                                        value={query}
                                        onChange={(e) => onQueryChange(e.target.value)}
                                        placeholder="Search posts..."
                                        className="w-full rounded-xl border border-[rgba(32,50,82,.85)] bg-[rgba(12,21,38,.55)] px-3 py-2 text-sm text-white outline-none"
                                    />
                                    <button
                                        onClick={() => {
                                            // just keep UX consistent; filtering is live anyway
                                            const el = document.getElementById("postsTop");
                                            if (el) el.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="rounded-xl bg-[#4f7cff] px-3 text-xs font-black text-white"
                                        type="button"
                                    >
                                        Go
                                    </button>
                                </div>

                                <div className="mt-2 text-xs text-[#a9b6d3]">
                                    Type anything: title + excerpt se related results live filter hote hain.
                                </div>

                                {hasQuery ? (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <button
                                            onClick={() => onQueryChange("")}
                                            className="rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3 py-2 text-xs font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            type="button"
                                        >
                                            ✖ Clear
                                        </button>
                                    </div>
                                ) : null}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
