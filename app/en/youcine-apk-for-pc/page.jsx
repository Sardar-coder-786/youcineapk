import Image from "next/image";
import Link from "next/link";
import Faq from "../../components/Faq";
import Language from "../../components/Language";

export const metadata = {
    title: "YouCine for PC and Laptop – Watch Movies & Anime",
    description:
        "Download YouCine for PC and Laptop. Windows requirements, exclusive features, and complete installation guide (BlueStacks).",
};

export default function YouCineForPCPage() {
    const Faqs = [
        {
            qua: "Does YouCine work on Windows PCs and laptops?",
            ans: "Yes. YouCine is compatible with Windows PCs and laptops.",
        },
        {
            qua: "Is YouCine free on PC?",
            ans: "Yes. YouCine lets you watch movies and series for free.",
        },
        {
            qua: "Do I need an emulator to use YouCine on PC?",
            ans: "YouCine APK does not work directly on a PC, so an Android emulator is required for installation and smooth performance.",
        },
        {
            qua: "Is YouCine PC safe?",
            ans: "When downloaded from the official website, YouCine PC is designed to work safely.",
        }

    ]
    const doc = [
        { Text: "Portuguese", link: "/youcine-apk-for-pc" },
        { Text: "English", link: "/en/youcine-apk-for-pc" },
    ];

    return (
        <main id="content">
            {/* HERO */}
            <section id="pc" className="py-11 pb-4.5">
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
                                        YouCine PC • Windows
                                    </div>

                                    <h1 className="mt-3.5 text-[28px] font-bold leading-[1.2] tracking-[-.4px]">
                                        Download YouCine for PC and Laptop
                                    </h1>

                                    <p className="mt-2.5 text-sm text-[#a9b6d3]">
                                        YouCine for PC was developed for users who prefer watching movies and series on a bigger screen,
                                        with full control using keyboard and mouse. Whether on a desktop or laptop, the app delivers stable performance,
                                        smooth playback, and a comfortable viewing experience.
                                    </p>

                                    <p className="mt-2 text-sm text-[#a9b6d3]">
                                        With YouCine on PC, you can enjoy movies and series while doing other tasks, making it an excellent option
                                        for entertainment at home or at work. Download the official version and turn your computer into a complete streaming platform.
                                    </p>

                                    <div className="mt-3.5 flex flex-wrap gap-2.5">
                                        <a
                                            className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(79,124,255,.9)] bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] shadow-[0_12px_35px_rgba(79,124,255,.22)] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            href="https://www.dropbox.com/scl/fi/tz9aorq4k1u73xn0xklff/signyoucinemobile_ycio-site.apk?rlkey=8oyu2hiycwym1lnb3mjyr1krl&e=1&st=dblvy6ak&dl=1"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                ⬇
                                            </span>
                                            Download for PC
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
                                            href="/en/youcine-apk-for-tv"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                📺
                                            </span>
                                            Download for TV
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Side */}
                        <aside className="flex flex-col gap-3.5 rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                            <div
                                className="relative flex min-h-55 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[rgba(169,182,211,.35)] bg-[linear-gradient(180deg,rgba(15,26,46,.45),rgba(12,21,38,.35))]"
                                aria-label="PC preview image"
                            >
                                <div className="relative min-h-55 flex-1 overflow-hidden rounded-2xl border border-dashed border-[rgba(169,182,211,.35)] bg-[linear-gradient(180deg,rgba(15,26,46,.45),rgba(12,21,38,.35))] lg:min-h-55">
                                    <Image
                                        src="/YouCine-APK-entertainment-app.jpg"
                                        alt="YouCine preview"
                                        fill
                                        className="object-cover opacity-95"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-2.5" aria-label="PC app info">
                                {[
                                    ["Name", "YouCine PC"],
                                    ["Version", "Latest"],
                                    ["Platform", "Windows (PC / Laptop)"],
                                    ["Rating", "4.7/5"],
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
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">
                            Exclusive Features of YouCine for PC
                        </h2>

                        <div className="mt-3.5 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {[
                                {
                                    title: "Multi-Window Support and Multitasking",
                                    text:
                                        "YouCine for PC lets you watch movies and series while you do other tasks. You can minimize the app, switch between windows, or work on other activities without interrupting playback.",
                                },
                                {
                                    title: "Full Customization",
                                    text:
                                        "Unlike the mobile or TV versions, YouCine PC is optimized for keyboard and mouse use. This ensures faster navigation, easier searching, and precise playback control.",
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

            {/* REQUIREMENTS */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Windows System Requirements</h2>
                        <p className="mt-2 text-[#a9b6d3]">
                            To run YouCine on PC or Laptop without issues, your system must meet the following minimum requirements:
                        </p>

                        <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                            <li>Operating System: Windows 7 / 8 / 10 / 11</li>
                            <li>Processor: Intel or AMD (Dual Core or higher)</li>
                            <li>RAM: Minimum 2 GB (4 GB recommended)</li>
                            <li>At least 200 MB of free disk space</li>
                            <li>Integrated or dedicated graphics card</li>
                            <li>Stable internet connection for streaming</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Why choose YouCine for PC?</h2>

                        <p className="mt-2 text-[#a9b6d3]">
                            YouCine for PC provides a comfortable and flexible viewing experience, ideal for those who enjoy watching content on larger screens.
                            The app offers smooth navigation with keyboard and mouse, making it easy to search, select, and control playback.
                        </p>

                        <p className="mt-2.5 text-[#a9b6d3]">
                            Unlike many apps focused on mobile devices, YouCine PC enables multitasking while you watch movies or series,
                            making it a practical solution for streaming on your computer.
                        </p>
                    </div>
                </div>
            </section>

            {/* LEGAL NOTICE */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="flex items-start gap-3 rounded-2xl border border-[rgba(245,158,11,.35)] bg-[rgba(245,158,11,.08)] p-3.5 text-[#e8eefc]">
                        <div className="text-4.5 leading-none">⚠️</div>
                        <div>
                            <b className="mb-1 block">Legal Notice</b>
                            <span className="text-[13.5px] text-[#a9b6d3]">
                                YouCine is a platform that enables access to online content. We do not host or store files on our servers.
                                All content is provided by third-party sources. Use of the app is entirely the user's responsibility.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSTALLATION GUIDE */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">
                            YouCine PC Installation Guide for PC and Laptop
                        </h2>

                        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { t: "Download BlueStacks", d: "Download the app from the official website." },
                                { t: "Download YouCine PC", d: "Download the app using the download link." },
                                { t: "Import the file into BlueStacks", d: "Locate and import the downloaded file." },
                                { t: "Install the App", d: "Install the file and follow the on-screen instructions. Then open it and watch." },
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
            <Faq Faqs={Faqs} title={"FAQ"} />

            {/* Language */}
            <Language doc={doc} />

        </main>
    );
}
