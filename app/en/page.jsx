import Image from "next/image";
import Faq from "../components/Faq";
import Link from "next/link";
import Language from "../components/Language";

export default function Home() {
  const Faqs = [
    {
      qua: "Which devices can run the YouCine APK without issues?",
      ans: "Compatible with Android phones, tablets, Android TV, Android Smart TVs, and other Android-based devices."
    },
    {
      qua: "Is it free to watch movies and series on the YouCine app?",
      ans: "Yes, the app is used as a free streaming platform (the source/safety depends on where it is downloaded from)."
    },
    {
      qua: "Does YouCine support other languages?",
      ans: "Yes. It offers dubbing and audio/subtitle options in multiple languages."
    },
  ];
  const doc = [
    { Text: "Portuguese", link: "/" },
    { Text: "English", link: "/en" },
  ];

  return (
    <>
      <main id="content">
        {/* HERO */}
        <section id="home" className="py-11 pb-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="grid grid-cols-1 gap-5.5 lg:grid-cols-[1.15fr_.85fr]">
              {/* Left */}
              <div className="relative overflow-hidden rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-6">
                <div className="pointer-events-none absolute -inset-0.5 bg-[radial-gradient(260px_180px_at_25%_20%,rgba(79,124,255,.20),transparent_60%),radial-gradient(280px_200px_at_78%_12%,rgba(34,197,94,.16),transparent_60%)]" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(79,124,255,.35)] bg-[rgba(79,124,255,.12)] px-2.5 py-1.5 text-xs font-bold text-[#cfe0ff]">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#4f7cff] shadow-[0_0_0_5px_rgba(79,124,255,.18)]" />
                    Updated • 2026
                  </div>

                  <h1 className="mt-3.5 text-[28px] font-bold leading-[1.2] tracking-[-.4px]">
                    YouCine APK Latest Version 2026 (Updated) with Download & Installation Guide
                  </h1>

                  <p className="mt-2.5 text-sm text-[#a9b6d3]">
                    YouCine APK is a free solution for your online movie streaming needs.
                    It offers a huge library of films to satisfy your unlimited hunger for entertainment.
                    Just download it and turn 2026 into a year full of fun and entertainment.
                  </p>

                  <div className="mt-3.5 flex flex-wrap gap-2.5">
                    <a
                      href="https://www.dropbox.com/scl/fi/tz9aorq4k1u73xn0xklff/signyoucinemobile_ycio-site.apk?rlkey=8oyu2hiycwym1lnb3mjyr1krl&e=1&st=dblvy6ak&dl=1"
                      target="_blank"
                      rel="noopener"
                      className="relative inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(79,124,255,.9)] bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))] px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] shadow-[0_12px_35px_rgba(79,124,255,.22)] transition hover:-translate-y-0.5"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                        ⬇
                      </span>
                      Download for Mobile
                      <span className="absolute -right-2 -top-2 rounded-full bg-[#22c55e] px-1.5 py-1 text-[10px] font-black text-[#08140d]">
                        APK
                      </span>
                    </a>

                    <Link
                      href="/en/youcine-apk-for-ios"
                      className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                        
                      </span>
                      Download for iOS
                    </Link>

                    <Link
                      href="/en/youcine-apk-for-tv"
                      className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                        📺
                      </span>
                      Download for TV
                    </Link>

                    <Link
                      href="/en/youcine-apk-for-pc"
                      className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(34,197,94,.9)] bg-[linear-gradient(135deg,rgba(34,197,94,.95),rgba(34,197,94,.55))] px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] shadow-[0_12px_35px_rgba(34,197,94,.18)] transition hover:-translate-y-0.5"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                        💻
                      </span>
                      Download for PC / Laptop
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right */}
              <aside className="flex flex-col gap-3.5 rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-5">
                <div className="relative min-h-55 flex-1 overflow-hidden rounded-2xl border border-dashed border-[rgba(169,182,211,.35)] bg-[linear-gradient(180deg,rgba(15,26,46,.45),rgba(12,21,38,.35))] lg:min-h-55">
                  <Image
                    src="/Watch-movies-using-YouCine-APK.webp"
                    alt="YouCine preview"
                    fill
                    className="object-cover opacity-95"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>

                <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3 lg:grid-cols-3">
                  {[
                    { k: "Version", v: "1.16.11" },
                    { k: "Size", v: "67 MB" },
                    { k: "Android", v: "4.3 +" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-2xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.55)] p-3"
                    >
                      <div className="text-[11px] font-bold tracking-[.2px] text-[#a9b6d3]">{x.k}</div>
                      <div className="mt-1.5 text-sm font-black">{x.v}</div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* WHAT IS */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">What is YouCine APK?</h2>
              <p className="mt-2 text-[#a9b6d3]">
                YouCine APK is the Android installation file for the YouCine app. It allows users to install the app manually,
                especially when it is not available directly on the Google Play Store.
              </p>
              <p className="mt-2.5 text-[#a9b6d3]">
                YouCine was built as a streaming-style platform that helps users access movies,
                series, anime, and TV content in one organized place, with a simple interface and a smooth playback experience.
              </p>
            </div>
          </div>
        </section>

        {/* COMPATIBLE */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">YouCine APK is compatible with:</h2>

              <div className="mt-3.5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  {
                    id: "tv",
                    title: "YouCine for Smart TV",
                    text:
                      "YouCine works on Smart TVs and TV Boxes, letting you watch free movies and TV series directly on your Smart TV or TV Box.",
                  },
                  {
                    title: "YouCine for Mobile",
                    text: "You can download and enjoy YouCine to watch movies and TV shows on your device.",
                  },
                  {
                    title: "YouCine for TV Stick",
                    text:
                      "YouCine is compatible with all Fire TV brands. Download YouCine on your Fire TV and get access to a wide selection of content.",
                  },
                  {
                    id: "pc",
                    title: "YouCine for PC",
                    text:
                      "You can use an Android emulator (e.g., LDPlayer) to install YouCine on your PC and successfully watch movies and TV series.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    id={c.id}
                    className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4.5"
                  >
                    <h3 className="text-[15px] font-bold">{c.title}</h3>
                    <p className="mt-2 text-[13.5px] text-[#a9b6d3]">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Features of the Latest YouCine APK Version 2026.</h2>
              <p className="mt-2 text-[#a9b6d3]">
                From my experience using YouCine APK, the option to watch movies and series offline makes a big difference—especially when you want a large library of series and free content with no limits. The app feels interactive, has an easy-to-use interface, offers stable performance without errors, shows fewer ads, and works like a safe app without requiring a subscription. This is something I value as someone who regularly tests streaming apps for security and performance.
              </p>
              <p className="mt-2.5 text-[#a9b6d3]">
                YouCine also offers personalized features, such as a personal ratings center, a smart interface with a new design, multilingual audio support, and subtitles for movies and TV shows.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Top Features of YouCine APK</h2>
              <p className="mt-2 text-[#a9b6d3]">YouCine became popular because of its easy-to-use features:</p>

              <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                {[
                  ["Modern Interface:", "clean layout and easy navigation."],
                  ["High-Quality Playback:", "HD playback options."],
                  ["Android TV/TV Box Support:", "great for bigger screens."],
                  ["Frequent Updates:", "better stability and fewer bugs."],
                  ["Lightweight Performance:", "optimized to run smoothly."],
                  ["Multiple Languages:", "multi-language audio/subtitles."],
                  ["Offline Viewing:", "download movies/series to watch later."],
                ].map(([b, t]) => (
                  <li key={b}>
                    <strong className="text-[#d7e3ff]">{b}</strong> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* TABLE */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Original Version vs APK Version Comparison</h2>

              <div className="mt-3 overflow-auto rounded-2xl border border-[rgba(32,50,82,.7)]">
                <table className="min-w-180 w-full border-collapse bg-[rgba(12,21,38,.55)]">
                  <thead>
                    <tr>
                      {["Feature", "Original Version", "APK Mod"].map((h) => (
                        <th
                          key={h}
                          className="border-b border-[rgba(32,50,82,.6)] px-3 py-3 text-left text-xs tracking-[.2px] text-[#d7e3ff]"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-[#a9b6d3]">
                    {[
                      ["Stability", ["ok", "Official version"], ["bad", "Unofficial"]],
                      ["Ads", ["warn", "Default"], ["ok", "Often removed"]],
                      ["Premium / Unlocked", ["warn", "Depends"], ["ok", "Often unlocked"]],
                      ["Security", ["ok", "Safer"], ["warn", "High risk"]],
                      ["Legal", ["ok", "Legitimate"], ["bad", "Possibly illegal"]],
                    ].map(([feat, a, b]) => (
                      <tr key={feat}>
                        <td className="border-b border-[rgba(32,50,82,.6)] px-3 py-3 text-sm">
                          {feat}
                        </td>
                        <td className="border-b border-[rgba(32,50,82,.6)] px-3 py-3 text-sm">
                          <Pill tone={a[0]}>{a[1]}</Pill>
                        </td>
                        <td className="border-b border-[rgba(32,50,82,.6)] px-3 py-3 text-sm">
                          <Pill tone={b[0]}>{b[1]}</Pill>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* PROS/CONS + ISSUES */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
                <h2 className="text-4.5 font-bold tracking-[-.2px]">Pros and Cons</h2>

                <h3 className="mt-3 text-sm font-bold text-[#d7e3ff]">PROS</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                  <li>Fewer ads compared to other apps.</li>
                  <li>Free streaming, no subscription.</li>
                  <li>Compatible with Android, tablets, and Android TV.</li>
                  <li>Offline viewing option after download.</li>
                </ul>

                <h3 className="mt-4 text-sm font-bold text-[#d7e3ff]">CONS</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                  <li>Not available on the Google Play Store.</li>
                  <li>Requires a stable internet connection for online streaming.</li>
                  <li>Needs “Unknown sources” enabled.</li>
                  <li>You must keep it updated.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
                <h2 className="text-4.5 font-bold tracking-[-.2px]">Common Issues and Solutions</h2>

                <FaqItem open title="YouCine APK won’t install">
                  Make sure you have enough free space, download again (if corrupted), and ensure “Unknown sources” is enabled.
                </FaqItem>

                <FaqItem title="Parse Error">
                  Your Android version may be too old. Use a compatible version and avoid incomplete downloads.
                </FaqItem>

                <FaqItem title="App crashing or freezing">
                  Update the app, clear cache (Settings → Apps → YouCine → Storage → Clear cache), and restart.
                </FaqItem>
              </div>
            </div>
          </div>
        </section>

        {/* tips */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Tips to get the most out of YouCine APK</h2>

              <ul className="mt-2 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                <li>Always keep the latest version installed.</li>
                <li>Use a good Wi-Fi connection to avoid freezing or buffering.</li>
                <li>Add your favorite movies and series to your watchlist to view later.</li>
                <li>Use subtitle and language options to customize your experience.</li>
              </ul>

              <p className="mt-2 text-[#a9b6d3]">These simple practices ensure a more stable, faster, and safer experience.</p>
            </div>
          </div>
        </section>

        {/* DOWNLOAD GUIDE */}
        <section id="download-guide" className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              {/* header */}
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-4.5 font-bold tracking-[-.2px]">
                    How to download and install YouCine APK on Android (2026)
                  </h2>
                  <p className="mt-2 text-[#a9b6d3]">
                    Quick guide for Android phones. For TV, PC, and iOS, see the dedicated pages below.
                  </p>
                </div>

                <a
                  href="#top"
                  className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(79,124,255,.9)]
          bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))]
          px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] shadow-[0_12px_35px_rgba(79,124,255,.22)]
          transition hover:-translate-y-0.5"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                    ⬇
                  </span>
                  Download now
                </a>
              </div>

              {/* quick links to other guides (NO guide content here) */}
              <div className="my-4 flex flex-wrap gap-2.5">
                <Link
                  href="/en/youcine-apk-for-tv"
                  className="rounded-[14px] border border-[rgba(32,50,82,.65)] bg-[rgba(12,21,38,.45)]
          px-3 py-2 text-xs font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                >
                  📺 TV Guide
                </Link>

                <Link
                  href="/en/youcine-apk-for-pc"
                  className="rounded-[14px] border border-[rgba(32,50,82,.65)] bg-[rgba(12,21,38,.45)]
          px-3 py-2 text-xs font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                >
                  💻 PC Guide
                </Link>

                <Link
                  href="/en/youcine-apk-for-ios"
                  className="rounded-[14px] border border-[rgba(32,50,82,.65)] bg-[rgba(12,21,38,.45)]
          px-3 py-2 text-xs font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                >
                   iOS Guide
                </Link>
              </div>

              {/* ANDROID GUIDE */}
              <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4.5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(79,124,255,.35)] bg-[rgba(79,124,255,.12)] px-2.5 py-1.5 text-xs font-extrabold text-[#cfe0ff]">
                  📱 Android (Mobile)
                </div>

                <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                  Follow this step-by-step to install safely on Android.
                </p>

                <div className="mt-3 grid grid-cols-1 gap-2.5 md:grid-cols-2">
                  {[
                    ["1", "Download the APK", "Click “Download for Mobile” at the top of this page."],
                    ["2", "Allow installation", "Enable “Unknown sources” in Android settings."],
                    ["3", "Install the file", "Open Downloads/Files and tap the APK to install."],
                    ["4", "Open and enjoy", "Launch the app and start watching normally."],
                  ].map(([n, title, desc]) => (
                    <div
                      key={n}
                      className="rounded-2xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.55)] p-3.5"
                    >
                      <div className="mb-2 inline-flex h-8.5 w-8.5 items-center justify-center rounded-[14px] border border-[rgba(79,124,255,.35)] bg-[rgba(79,124,255,.14)] font-black">
                        {n}
                      </div>
                      <div className="text-[13.5px] font-black text-[#e8eefc]">{title}</div>
                      <div className="mt-1 text-[13px] text-[#a9b6d3]">{desc}</div>
                    </div>
                  ))}
                </div>
                {/* note */}
                <div className="mt-3 rounded-2xl border border-[rgba(245,158,11,.35)] bg-[rgba(245,158,11,.08)] p-3.5">
                  <div className="flex items-start gap-3">
                    <div className="text-4.5 leading-none">⚠️</div>
                    <div>
                      <b className="block text-[#e8eefc]">Notice</b>
                      <span className="text-[13.5px] text-[#a9b6d3]">
                        Keep the app updated. If you get errors: restart → clear cache → reinstall.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Releted Blog posts */}
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
                  Click to read the full guide and solve the most common issues.
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

        {/* Conclusion */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Conclusion</h2>
              <p className="mt-2 text-[#a9b6d3]">
                In short, YouCine APK is a game-changer for movie and entertainment lovers in Brazil. With its huge content library, high-quality streaming, and easy-to-use interface, it’s no surprise this app has become so popular. Whether you want to watch the latest blockbuster or a classic film, YouCine is an excellent choice.
              </p>
              <p className="mt-2.5 text-[#a9b6d3]">
                So, why wait?
              </p>
              <p className="mt-2.5 text-[#a9b6d3]">
                Download this app today and start enjoying an unmatched streaming experience.
              </p>
            </div>
          </div >
        </section >

        {/* CTA */}
        < section id="ios" className="py-5.5" >
          <div className="mx-auto max-w-275 px-4.5">
            <div className="flex flex-col gap-4 rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-bold">Download now and start watching</h3>
                <p className="mt-1 text-[13.5px] text-[#a9b6d3]">
                  Click the button and download the latest version.
                </p>
              </div>
              <a
                href="#top"
                className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(79,124,255,.9)] bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))] px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] shadow-[0_12px_35px_rgba(79,124,255,.22)] transition hover:-translate-y-0.5"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                  ⬇
                </span>
                Download
              </a>
            </div>
          </div>
        </section >

        {/* Language */}
        < Language doc={doc} />

      </main >
    </>
  );
}

/** Small components */
function Pill({ tone, children }) {
  const toneStyles =
    tone === "ok"
      ? "border-[rgba(34,197,94,.55)]"
      : tone === "bad"
        ? "border-[rgba(239,68,68,.55)]"
        : "border-[rgba(245,158,11,.55)]";

  const dot =
    tone === "ok"
      ? "bg-[#22c55e]"
      : tone === "bad"
        ? "bg-[#ef4444]"
        : "bg-[#f59e0b]";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full border ${toneStyles} bg-[rgba(15,26,46,.6)] px-2.5 py-1.5 text-xs font-extrabold text-[#e8eefc]`}>
      <span className={`h-2 w-2 rounded-full ${dot}`} />
      {children}
    </span>
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
