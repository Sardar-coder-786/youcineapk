"use client"
import Link from "next/link";
import Language from "../../components/Language";
import { useState } from "react";

export default function ContactClient() {
    const doc = [
        { Text: "Portuguese", link: "/contact-us" },
        { Text: "English", link: "/en/contact-us" },
    ];
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();

        const TO = "youcineapk614@gmail.com";

        const subject = encodeURIComponent(
            form.subject || "Contact from YouCine APK Website"
        );

        const body = encodeURIComponent(
            `Name: ${form.name}
Email: ${form.email}

Message:
${form.message || "(No message)"}
`
        );

        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${TO}&su=${subject}&body=${body}`;

        // 🔥 Always open Gmail
        window.open(gmailURL, "_blank");
    }

    return (
        <main id="content">
            {/* HERO */}
            <section className="py-11 pb-4.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="relative overflow-hidden rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-6">
                        {/* glow */}
                        <div className="pointer-events-none absolute -inset-0.5 bg-[radial-gradient(260px_180px_at_25%_20%,rgba(79,124,255,.20),transparent_60%),radial-gradient(280px_200px_at_78%_12%,rgba(34,197,94,.16),transparent_60%)]" />
                        <div className="relative">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(79,124,255,.35)] bg-[rgba(79,124,255,.12)] px-2.5 py-1.5 text-xs font-black text-[#cfe0ff]">
                                <span className="inline-block h-2 w-2 rounded-full bg-[#4f7cff] shadow-[0_0_0_5px_rgba(79,124,255,.18)]" />
                                Contact Us
                            </div>

                            <h1 className="mt-3.5 text-[28px] font-bold leading-[1.2] tracking-[-.4px]">
                                We’re here for you!
                            </h1>

                            <p className="mt-2.5 text-sm text-[#a9b6d3]">
                                Have a question, an idea, or need help? We’ll be happy to hear from you.
                                Your feedback is very important to us and helps us make the experience better for everyone.
                            </p>

                            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                                {/* Left info */}
                                <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4.5">
                                    <h3 className="text-[15px] font-bold text-[#e8eefc]">Share your feedback</h3>
                                    <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                                        Whether it’s a suggestion, an improvement idea, or something that didn’t work as expected, feel free to tell us.
                                        Every message helps us improve and evolve the platform for you.
                                    </p>

                                    <p className="mt-3 text-[13.5px] text-[#a9b6d3]">
                                        Email:{" "}
                                        <a
                                            href="mailto:youcineapk614@gmail.com"
                                            className="font-black text-[#d7e3ff]"
                                        >
                                            youcineapk614@gmail.com
                                        </a>
                                    </p>
                                </div>

                                {/* Right form */}
                                <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4.5">
                                    <form onSubmit={onSubmit} encType="text/plain">
                                        <div className="mt-1 grid grid-cols-1 gap-3 md:grid-cols-2">
                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-extrabold text-[#d7e3ff]" htmlFor="name">
                                                    Your Name
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    onChange={onChange}
                                                    placeholder="Enter your name"
                                                    required
                                                    className="w-full rounded-[14px] border border-[rgba(32,50,82,.85)] bg-[rgba(12,21,38,.55)] px-3 py-3 text-[#e8eefc] outline-none focus:border-[rgba(79,124,255,.65)]"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label className="text-xs font-extrabold text-[#d7e3ff]" htmlFor="email">
                                                    Your Email
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    onChange={onChange}
                                                    placeholder="Enter your email"
                                                    required
                                                    className="w-full rounded-[14px] border border-[rgba(32,50,82,.85)] bg-[rgba(12,21,38,.55)] px-3 py-3 text-[#e8eefc] outline-none focus:border-[rgba(79,124,255,.65)]"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-3 flex flex-col gap-2">
                                            <label className="text-xs font-extrabold text-[#d7e3ff]" htmlFor="subject">
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                onChange={onChange}
                                                placeholder="Subject"
                                                required
                                                className="w-full rounded-[14px] border border-[rgba(32,50,82,.85)] bg-[rgba(12,21,38,.55)] px-3 py-3 text-[#e8eefc] outline-none focus:border-[rgba(79,124,255,.65)]"
                                            />
                                        </div>

                                        <div className="mt-3 flex flex-col gap-2">
                                            <label className="text-xs font-extrabold text-[#d7e3ff]" htmlFor="message">
                                                Your Message (optional)
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                onChange={onChange}
                                                placeholder="Write your message..."
                                                className="min-h-30 w-full resize-y rounded-[14px] border border-[rgba(32,50,82,.85)] bg-[rgba(12,21,38,.55)] px-3 py-3 text-[#e8eefc] outline-none focus:border-[rgba(79,124,255,.65)]"
                                            />
                                        </div>

                                        <div className="mt-4 flex flex-wrap gap-2.5">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(79,124,255,.9)] bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] shadow-[0_12px_35px_rgba(79,124,255,.22)] transition hover:-translate-y-0.5 cursor-pointer"
                                            >
                                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                    ✉️
                                                </span>
                                                Send
                                            </button>

                                            <Link
                                                href="/"
                                                className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            >
                                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                    ↩
                                                </span>
                                                Back to Home Page
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Language */}
            <Language doc={doc} />
        </main>
    );
}
