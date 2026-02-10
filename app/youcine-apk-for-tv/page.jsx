import Image from "next/image";
import Link from "next/link";
import Faq from "../components/Faq";
import Language from "../components/Language";
import {meta} from "@/app/seo/metadat"

export const metadata = meta.tv;

export default function YouCineForTVPage() {
    const Faqs = [
        {
            qua: "O YouCine TV funciona em todas as Smart TVs?",
            ans: "O YouCine TV funciona em Smart TVs com sistema Android TV e TV Box.",
        },
        {
            qua: "O YouCine TV é gratuito?",
            ans: "Sim. O YouCine TV permite assistir a filmes e séries gratuitamente.",
        },
        {
            qua: "Preciso de controle remoto para usar o YouCine TV?",
            ans: "Sim. O aplicativo é totalmente otimizado para navegação com controle remoto.",
        },
        {
            qua: "O YouCine TV exige cadastro?",
            ans: "Não. Você pode começar a assistir sem criar uma conta.",
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
                                        Baixar YouCine TV APK para Smart TV e TV Box
                                    </h1>

                                    <p className="mt-2.5 text-sm text-[#a9b6d3]">
                                        O YouCine TV foi desenvolvido para quem prefere assistir a filmes e séries em tela grande.
                                        Com suporte completo para Smart TVs, Android TV e TV Box, o aplicativo oferece reprodução fluida,
                                        ótima qualidade de imagem e uma experiência de entretenimento envolvente em casa.
                                    </p>

                                    <p className="mt-2 text-sm text-[#a9b6d3]">
                                        Com o YouCine TV APK, você pode aproveitar uma grande variedade de filmes e séries diretamente na sua televisão,
                                        sem assinaturas e sem configurações complicadas. Baixe a versão oficial e transforme sua Smart TV em um verdadeiro centro de entretenimento.
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
                                            Baixar para TV
                                        </a>

                                        <Link
                                            className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            href="/"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                📱
                                            </span>
                                            Baixar para Celular
                                        </Link>

                                        <Link
                                            className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            href="/youcine-apk-for-ios"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                
                                            </span>
                                            Baixar Para Ios
                                        </Link>

                                        <Link
                                            className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(34,197,94,.9)] bg-[linear-gradient(135deg,rgba(34,197,94,.95),rgba(34,197,94,.55))] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] shadow-[0_12px_35px_rgba(34,197,94,.18)] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            href="/youcine-apk-for-pc"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                💻
                                            </span>
                                            Baixar para PC / Laptop
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
                                    ["Nome", "Youcine Tv"],
                                    ["Versão", "Mais recente"],
                                    ["Finalidade", "Assistir a filmes e séries na Smart TV"],
                                    ["Plataforma", "Android TV, Smart TV, TV Box"],
                                    ["Custo", "Grátis"],
                                    ["Avaliação", "4.6/5"],
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
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Recursos Exclusivos do YouCine TV</h2>

                        <div className="mt-3.5 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {[
                                {
                                    title: "Experiência Otimizada para Tela Grande",
                                    text:
                                        "O YouCine TV é otimizado para telas grandes, oferecendo uma experiência confortável com imagens nítidas e reprodução fluida. A interface foi criada para ser clara e fácil de visualizar à distância, ideal para entretenimento em casa.",
                                },
                                {
                                    title: "Suporte Completo ao Controle Remoto",
                                    text:
                                        "O YouCine TV funciona perfeitamente com controles remotos de Smart TV e TV Box. A navegação é simples e rápida, permitindo explorar conteúdos, escolher filmes e controlar a reprodução com facilidade.",
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
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Por que escolher o YouCine TV para Smart TV?</h2>

                        <p className="mt-2 text-[#a9b6d3]">
                            O YouCine TV foi projetado para aproveitar ao máximo telas grandes, oferecendo uma interface simples e confortável,
                            totalmente compatível com controles remotos. O aplicativo garante navegação rápida, desempenho estável e uma ótima experiência de visualização direto da sua sala.
                        </p>

                        <p className="mt-2.5 text-[#a9b6d3]">
                            Diferente de muitos aplicativos de streaming que exigem assinaturas ou possuem limitações de dispositivos,
                            o YouCine TV prioriza simplicidade, acessibilidade e bom desempenho em Smart TVs e TV Box.
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
                            <b className="mb-1 block">Aviso Legal</b>
                            <span className="text-[13.5px] text-[#a9b6d3]">
                                O YouCine é uma plataforma que permite o acesso a conteúdos online. Não hospedamos nem armazenamos arquivos em nossos servidores.
                                Todo o conteúdo é fornecido por fontes de terceiros. O uso do aplicativo é de total responsabilidade do usuário.
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
                            Como instalar o YouCine TV na Smart TV e TV Box
                        </h2>

                        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-5">
                            {[
                                { t: "Baixar YouCine Tv", d: "Baixe o YouCine TV APK pelo link oficial de download." },
                                { t: "Acesse as configurações", d: "Permita a instalação de fontes externas, se necessário." },
                                { t: "Abra baixado", d: "Localize e abra o arquivo baixado." },
                                { t: "Instale o aplicativo", d: "Instale o aplicativo e aguarde a conclusão." },
                                { t: "Assistir Conteúdo", d: "Abra o app e comece a assistir filmes e séries." },
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
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Artigo Relacionado</h2>
                        <p className="mt-2 text-[#a9b6d3]">Sugestão para manter no mesmo estilo do site:</p>

                        <div className="mt-3 rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4.5">
                            <h3 className="text-[15px] font-bold text-[#e8eefc]">
                                YouCine Não Funciona? Como Resolver Rapidamente (Guia 2026)
                            </h3>
                            <p className="mt-1.5 text-[13.5px] text-[#a9b6d3]">
                                Clique para ler o guia completo e resolver os problemas mais comuns.
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
