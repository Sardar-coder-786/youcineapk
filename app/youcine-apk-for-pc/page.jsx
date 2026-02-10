import Image from "next/image";
import Link from "next/link";
import Faq from "../components/Faq";
import Language from "../components/Language";
import {meta} from "@/app/seo/metadat"

export const metadata = meta.pc;

export default function YouCineForPCPage() {
    const Faqs = [
        {
            qua: "O YouCine funciona em PC e laptop com Windows?",
            ans: "Sim. O YouCine é compatível com PCs e laptops com sistema Windows.",
        },
        {
            qua: "O YouCine é gratuito no PC?",
            ans: "Sim. O YouCine permite assistir a filmes e séries gratuitamente.",
        },
        {
            qua: "Preciso de emulador para usar o YouCine no PC?",
            ans: "O YouCine APK não funciona diretamente no PC, portanto é necessário um emulador Android para instalação e desempenho sem problemas.",
        },
        {
            qua: "O YouCine PC é seguro?",
            ans: "Quando baixado do site oficial, o YouCine PC foi desenvolvido para funcionar com segurança.",
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
                                        Baixar YouCine para PC e Laptop
                                    </h1>

                                    <p className="mt-2.5 text-sm text-[#a9b6d3]">
                                        O YouCine para PC foi desenvolvido para usuários que preferem assistir a filmes e séries em uma tela maior,
                                        com total controle pelo teclado e mouse. Seja em um desktop ou laptop, o aplicativo oferece desempenho estável,
                                        reprodução fluida e uma experiência de visualização confortável.
                                    </p>

                                    <p className="mt-2 text-sm text-[#a9b6d3]">
                                        Com o YouCine no PC, você pode aproveitar filmes e séries enquanto realiza outras tarefas, tornando-o uma excelente opção
                                        para entretenimento em casa ou no trabalho. Baixe a versão oficial e transforme seu computador em uma plataforma completa de streaming.
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
                                            Baixar para Pc
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
                                            Baixar para Ios
                                        </Link>

                                        <Link
                                            className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(34,197,94,.9)] bg-[linear-gradient(135deg,rgba(34,197,94,.95),rgba(34,197,94,.55))] px-3.5 py-3 text-[13px] font-black text-[#e8eefc] shadow-[0_12px_35px_rgba(34,197,94,.18)] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                                            href="/youcine-apk-for-tv"
                                        >
                                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                                                📺
                                            </span>
                                            Baixar para TV
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
                                    ["Nome", "YouCine PC"],
                                    ["Versão", "Mais recente"],
                                    ["Plataforma", "Windows (PC / Laptop)"],
                                    ["Avaliação", "4.7/5"],
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

            {/* RECURSOS */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">
                            Recursos Exclusivos do YouCine para PC
                        </h2>

                        <div className="mt-3.5 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {[
                                {
                                    title: "Suporte a Múltiplas Janelas e Multitarefas",
                                    text:
                                        "O YouCine para PC permite assistir a filmes e séries enquanto você realiza outras tarefas. É possível minimizar o aplicativo, alternar entre janelas ou trabalhar em outras atividades sem interromper a reprodução.",
                                },
                                {
                                    title: "Personalização Completa",
                                    text:
                                        "Diferente das versões para celular ou TV, o YouCine PC é otimizado para uso com teclado e mouse. Isso garante navegação mais rápida, buscas facilitadas e controle preciso da reprodução.",
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

            {/* REQUISITOS */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Requisitos do Sistema Windows</h2>
                        <p className="mt-2 text-[#a9b6d3]">
                            Para executar o YouCine no PC ou Laptop sem problemas, seu sistema deve atender aos seguintes requisitos mínimos:
                        </p>

                        <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                            <li>Sistema Operacional: Windows 7 / 8 / 10 / 11</li>
                            <li>Processador: Intel ou AMD (Dual Core ou superior)</li>
                            <li>Memória RAM: Mínimo de 2 GB (4 GB recomendado)</li>
                            <li>Pelo menos 200 MB de espaço livre em disco</li>
                            <li>Placa de vídeo integrada ou dedicada</li>
                            <li>Conexão estável para streaming</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* POR QUE ESCOLHER */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">Por que escolher o YouCine para PC?</h2>

                        <p className="mt-2 text-[#a9b6d3]">
                            O YouCine para PC oferece uma experiência de visualização confortável e flexível, ideal para quem gosta de assistir conteúdos em telas maiores.
                            O aplicativo permite navegação fluida com teclado e mouse, facilitando a busca, seleção e controle da reprodução.
                        </p>

                        <p className="mt-2.5 text-[#a9b6d3]">
                            Diferente de muitos aplicativos focados em dispositivos móveis, o YouCine PC possibilita multitarefas enquanto você assiste a filmes ou séries,
                            tornando-se uma solução prática para streaming no computador.
                        </p>
                    </div>
                </div>
            </section>

            {/* AVISO LEGAL */}
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

            {/* GUIA DE INSTALAÇÃO */}
            <section className="py-5.5">
                <div className="mx-auto max-w-275 px-4.5">
                    <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] p-4.5 shadow-[0_18px_50px_rgba(0,0,0,.35)]">
                        <h2 className="text-4.5 font-bold tracking-[-.2px]">
                            Guia de Instalação do YouCine PC para PC e Laptop
                        </h2>

                        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { t: "Baixe o BlueStacks", d: "Baixe o aplicativo no site oficial." },
                                { t: "Baixar YouCine PC", d: "Baixe o aplicativo pelo link de download." },
                                { t: "Exportar arquivo no BlueStacks", d: "Localize e exporte o arquivo baixado." },
                                { t: "Instalar o Aplicativo", d: "Instale o arquivo e siga as instruções na tela. Depois, abra e assista." },
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
            <Faq Faqs={Faqs} title={"FAQ"} />

            {/* Language */}
            <Language doc={doc} />

        </main>
    );
}