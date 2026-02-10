import Image from "next/image";
import Link from "next/link";
import Faq from "../../components/Faq";
import Language from "../../components/Language";

export const metadata = {
    title: "YouCine TV APK – Smart TV & TV Box",
    description:
        "Download YouCine TV APK for Smart TV and TV Box. Features, reasons to choose it, and a complete installation guide.",
};

export default function YouCineForTVPage() {
    const Faqs = [
        {
            qua: "Does YouCine TV work on all Smart TVs?",
            ans: "YouCine TV works on Smart TVs that run Android TV and on TV Boxes.",
        },
        {
            qua: "Is YouCine TV free?",
            ans: "Yes. YouCine TV lets you watch movies and series for free.",
        },
        {
            qua: "Do I need a remote control to use YouCine TV?",
            ans: "Yes. The app is fully optimized for remote-control navigation.",
        },
        {
            qua: "Does YouCine TV require registration?",
            ans: "No. You can start watching without creating an account.",
        },
    ];

    const doc = [
        { Text: "Portuguese", link: "/youcine-apk-for-tv" },
        { Text: "English", link: "/en/youcine-apk-for-tv" },
    ];


    return (
        <main id="content">
            {/* HERO */}
            <section id="tv" className="py-11 pb-4.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="grid grid-cols-1 gap-5.5 lg:grid-cols-[1.15fr_.85fr]">
                        {/* Hero Main */}
                        <div className="relative overflow-hidden rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                            <div className="relative p-6">
                                {/* glow */}
                                <div className="pointer-events-none absolute -inset-0.5 bg-[radial-gradient(260px_180px_at_25%_20%,rgba(79,124,255,.20),transparent_60%),radial-gradient(280px_200px_at_78%_12%,rgba(34,197,94,.16),transparent_60%)]" />

                                <div className="relative">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(79,124,255,.35)] bg-[rgba(79,124,255,.12)] px-2.5 py-1.5 text-xs font-black text-[#cfe0ff]">
                                        <span className="inline-block h-2 w-2 rounded-full bg-[#4f7cff] shadow-[0_0_0_5px_rgba(79,124,255,.18)]" />
                                        YouCine TV • Smart TV
                                    </div>

                                    <h1 className="mt-3.5 text-[28px] font-bold leading-[1.2] tracking-[-.4px]">
                                        Download YouCine TV APK for Smart TV and TV Box
                                    </h1>

                                    <p className="mt-2.5 text-sm text-[#a9b6d3]">
                                        YouCine TV was developed for people who prefer watching movies and series on a big screen.
                                        With full support for Smart TVs, Android TV, and TV Box, the app delivers smooth playback,
                                        great image quality, and an immersive at-home entertainment experience.
                                    </p>

                                    <p className="mt-2 text-sm text-[#a9b6d3]">
                                        With YouCine TV APK, you can enjoy a wide variety of movies and series directly on your television,
                                        with no subscriptions and no complicated setup. Download the official version and turn your Smart TV into a true entertainment hub.
                                    </p>

                                    <div className="mt-3.5 flex flex-wrap gap-2.5">
                                        <a
                                            className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(79,124,255,.9)] bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] shadow-[0_12px_35px_rgba(79,124,255,.22)] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            href="https://www.dropbox.com"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                ⬇
                                            </span>
                                            Download for TV
                                        </a>

                                        <Link
                                            className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            href="/en/"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                📱
                                            </span>
                                            Download for Mobile
                                        </Link>

                                        <Link
                                            className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            href="/en/youcine-apk-for-ios"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                
                                            </span>
                                            Download for iOS
                                        </Link>

                                        <Link
                                            className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(34,197,94,.9)] bg-[linear-gradient(135deg,rgba(34,197,94,.95),rgba(34,197,94,.55))] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] shadow-[0_12px_35px_rgba(34,197,94,.18)] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            href="/en/youcine-apk-for-pc"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                💻
                                            </span>
                                            Download for PC / Laptop
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Side */}
                        <aside className="flex flex-col gap-3.5 rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                            <div
                                className="relative flex min-h-55 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[rgba(169,182,211,.35)] bg-[linear-gradient(180deg,rgba(15,26,46,.45),rgba(12,21,38,.35))]"
                                aria-label="TV preview image"
                            >
                                <div className="relative min-h-55 flex-1 overflow-hidden rounded-2xl border border-dashed border-[rgba(169,182,211,.35)] bg-[linear-gradient(180deg,rgba(15,26,46,.45),rgba(12,21,38,.35))] lg:min-h-55">
                                    <Image
                                        src="/YouCine-APK-for-Android-TV.jpg"
                                        alt="YouCine preview"
                                        fill
                                        className="object-cover opacity-95"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2.5" aria-label="TV info">
                                {[
                                    ["Name", "Youcine Tv"],
                                    ["Version", "Latest"],
                                    ["Purpose", "Watch movies and series on Smart TV"],
                                    ["Platform", "Android TV, Smart TV, TV Box"],
                                    ["Cost", "Free"],
                                    ["Rating", "4.6/5"],
                                ].map(([k, v]) => (
                                    <div
                                        key={k}
                                        className="flex items-center justify-between gap-3.5 rounded-2xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.55)] p-3"
                                    >
                                        <div className="text-[11px] font-extrabold tracking-[.2px] text-[#a9b6d3]">{k}</div>
                                        <div className="text-[13.5px] font-black text-[#e8eefc]">{v}</div>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Exclusive Features of YouCine TV</h2>

                        <div className="mt-3.5 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {[
                                {
                                    title: "Big-Screen Optimized Experience",
                                    text:
                                        "YouCine TV is optimized for big screens, offering a comfortable experience with sharp images and smooth playback. The interface was designed to be clear and easy to view from a distance, ideal for at-home entertainment.",
                                },
                                {
                                    title: "Full Remote Control Support",
                                    text:
                                        "YouCine TV works perfectly with Smart TV and TV Box remote controls. Navigation is simple and fast, allowing you to explore content, choose movies, and control playback with ease.",
                                },
                            ].map((c) => (
                                <div
                                    key={c.title}
                                    className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4.5"
                                >
                                    <h3 className="text-[15px] font-bold text-[#e8eefc]">{c.title}</h3>
                                    <p className="mt-2 text-[13.5px] text-[#a9b6d3]">{c.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Why choose YouCine TV for Smart TV?</h2>

                        <p className="mt-2 text-[#a9b6d3]">
                            YouCine TV was designed to make the most of big screens, offering a simple and comfortable interface,
                            fully compatible with remote controls. The app ensures fast navigation, stable performance, and a great viewing experience right from your living room.
                        </p>

                        <p className="mt-2.5 text-[#a9b6d3]">
                            Unlike many streaming apps that require subscriptions or have device limitations,
                            YouCine TV prioritizes simplicity, accessibility, and strong performance on Smart TVs and TV Boxes.
                        </p>
                    </div>
                </div>
            </section>

            {/* LEGAL */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="flex items-start gap-3 rounded-2xl border border-[rgba(245,158,11,.35)] bg-[rgba(245,158,11,.08)] p-3.5 text-[#e8eefc]">
                        <div className="text-4.5 leading-none">⚠️</div>
                        <div>
                            <b className="mb-1 block">Legal Notice</b>
                            <span className="text-[13.5px] text-[#a9b6d3]">
                                YouCine is a platform that allows access to online content. We do not host or store files on our servers.
                                All content is provided by third-party sources. Use of the app is entirely the user's responsibility.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSTALL */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">
                            How to install YouCine TV on Smart TV and TV Box
                        </h2>

                        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
                            {[
                                { t: "Download YouCine TV", d: "Download the YouCine TV APK using the official download link." },
                                { t: "Open Settings", d: "Allow installation from external sources, if necessary." },
                                { t: "Open the download", d: "Locate and open the downloaded file." },
                                { t: "Install the app", d: "Install the app and wait for it to finish." },
                                { t: "Watch Content", d: "Open the app and start watching movies and series." },
                            ].map((s, i) => (
                                <div
                                    key={s.t}
                                    className="min-h-30 rounded-2xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.55)] p-3.5"
                                >
                                    <div className="mb-2 inline-flex h-8.5 w-8.5 items-center justify-center rounded-[14px] border border-[rgba(79,124,255,.35)] bg-[rgba(79,124,255,.14)] font-black">
                                        {i + 1}
                                    </div>
                                    <h4 className="text-[13.5px] font-bold text-[#e8eefc]">{s.t}</h4>
                                    <p className="mt-1 text-[13px] text-[#a9b6d3]">{s.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED POST CARD */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Related Article</h2>
                        <p className="mt-2 text-[#a9b6d3]">Suggestion to keep the same style as the site:</p>

                        <div className="mt-3 rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4.5">
                            <h3 className="text-[15px] font-bold text-[#e8eefc]">
                                YouCine Not Working? How to Fix It Quickly (2026 Guide)
                            </h3>
                            <p className="mt-1.5 text-[13.5px] text-[#a9b6d3]">
                                Click to read the complete guide and solve the most common issues.
                            </p>

                            <Link
                                href="/blogs/youcine-nao-funciona-como-resolver"
                                className="mt-3 inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                style={{ minWidth: "auto" }}
                            >
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                    📄
                                </span>
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <Faq Faqs={Faqs} />

            {/* Language */}
            <Language doc={doc} />
        </main>
    );
}

function FaqItem({ title, children, open = false }) {
    return (
        <details
            open={open}
            className="mt-2.5 rounded-2xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.55)] px-3.5 py-3"
        >
            <summary className="cursor-pointer list-none text-[13.5px] font-black text-[#d7e3ff]">
                {title}
            </summary>
            <p className="mt-2 text-[13.5px] text-[#a9b6d3]">{children}</p>
        </details>
    );
}
