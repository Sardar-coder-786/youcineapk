"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/youcine-apk-for-pc", label: "For PC" },
    { href: "/youcine-apk-for-tv", label: "For Tv Box" },
    { href: "/youcine-apk-for-ios", label: "For IOS" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact-us", label: "Contact Us" },
];

export default function SiteHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[rgba(32,50,82,.55)] bg-[rgba(11,18,32,.7)] backdrop-blur">
            <div className="mx-auto max-w-275 px-4.5">
                <div className="flex items-center justify-between gap-3 py-3.5">
                    <Link href="/" className="flex items-center gap-2.5 font-bold tracking-[.2px] no-underline">
                        <span className="relative h-9.5 w-9.5 overflow-hidden rounded shadow-[0_10px_30px_rgba(79,124,255,.25)]">
                            <span className="absolute inset-0 bg-linear-to-br from-[rgba(79,124,255,.9)] to-[rgba(34,197,94,.85)]" />
                            <Image
                                src="/youcine-apk-fav-icon.jpg"
                                alt="youcine apk fav icon"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                                priority
                            />
                        </span>
                        <span className="text-[14px]">YouCine APK</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav aria-label="Primary" className="hidden md:block">
                        <ul className="flex items-center gap-4.5">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="rounded-xl px-2.5 py-2 text-[13px] font-semibold text-[#a9b6d3] transition hover:bg-[rgba(79,124,255,.10)] hover:text-[#e8eefc]"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="inline-flex cursor-pointer items-center rounded-[14px] border border-[#203252] bg-[rgba(15,26,46,.7)] px-3 py-2.5 text-sm font-bold text-[#e8eefc] md:hidden"
                        aria-expanded={open}
                        aria-controls="drawer"
                        onClick={() => setOpen((v) => !v)}
                    >
                        Menu
                    </button>
                </div>

                {/* Mobile drawer */}
                <div
                    id="drawer"
                    className={[
                        "border-t border-[rgba(32,50,82,.6)] pb-3.5 pt-2.5 md:hidden",
                        open ? "block" : "hidden",
                    ].join(" ")}
                >
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-[14px] px-3 py-2.5 text-[13px] font-extrabold text-[#a9b6d3] hover:bg-[rgba(79,124,255,.10)] hover:text-[#e8eefc]"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
