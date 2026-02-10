import Image from "next/image";
import Faq from "./components/Faq";
import Link from "next/link";
import Language from "./components/Language";
import {meta} from "@/app/seo/metadat"

export const metadata = meta.home;

export default function Home() {
  const Faqs = [
    {
      qua: "Quais dispositivos podem rodar o YouCine APK sem problemas?",
      ans: "Compatível com celulares Android, tablets, Android TV, Smart TVs com Android e outros dispositivos baseados em Android."
    },
    
    {
      qua: "É gratuito assistir filmes e séries no aplicativo YouCine?",
      ans: "Sim, o app é usado como plataforma de streaming gratuito (a fonte/segurança depende do local de download)."
    },
    {
      qua: "O YouCine oferece suporte a outros idiomas?",
      ans: "Sim. Oferece dublagem e opções de áudio/legendas em vários idiomas."
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
                    YouCine APK Última Versão 2026 (Atualizada) com Guia de Download e Instalação
                  </h1>

                  <p className="mt-2.5 text-sm text-[#a9b6d3]">
                    O YouCine APK é uma solução gratuita para seus problemas de streaming de filmes online.
                    Ele conta com uma vasta biblioteca de filmes para satisfazer sua fome ilimitada por entretenimento.
                    Basta fazer o download e transformar 2026 em um ano cheio de diversão e entretenimento.
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
                      Baixar para Celular
                      <span className="absolute -right-2 -top-2 rounded-full bg-[#22c55e] px-1.5 py-1 text-[10px] font-black text-[#08140d]">
                        APK
                      </span>
                    </a>

                    <Link
                      href="/youcine-apk-for-ios"
                      className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                        
                      </span>
                      Baixar para iOS
                    </Link>

                    <Link
                      href="/youcine-apk-for-tv"
                      className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(32,50,82,.9)] bg-[rgba(12,21,38,.75)] px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                        📺
                      </span>
                      Baixar para TV
                    </Link>

                    <Link
                      href="/youcine-apk-for-pc"
                      className="inline-flex min-w-43.75 items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(34,197,94,.9)] bg-[linear-gradient(135deg,rgba(34,197,94,.95),rgba(34,197,94,.55))] px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] shadow-[0_12px_35px_rgba(34,197,94,.18)] transition hover:-translate-y-0.5"
                    >
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                        💻
                      </span>
                      Baixar para PC / Laptop
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
                    { k: "Versão", v: "1.16.11" },
                    { k: "Tamanho", v: "67 MB" },
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
              <h2 className="text-4.5 font-bold tracking-[-.2px]">O que é o YouCine APK?</h2>
              <p className="mt-2 text-[#a9b6d3]">
                O YouCine APK é o arquivo de instalação para Android do aplicativo YouCine. Ele permite que os usuários
                instalem o app manualmente, especialmente quando ele não está disponível diretamente na Google Play Store.
              </p>
              <p className="mt-2.5 text-[#a9b6d3]">
                O YouCine foi desenvolvido como uma plataforma no estilo streaming que ajuda os usuários a acessar filmes,
                séries, animes e conteúdos de TV em um só lugar organizado, com uma interface simples e uma experiência de
                reprodução fluida.
              </p>
            </div>
          </div>
        </section>

        {/* COMPATIBLE */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">O YouCine APK é compatível com:</h2>

              <div className="mt-3.5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  {
                    id: "tv",
                    title: "YouCine para Smart TV",
                    text:
                      "O YouCine funciona em Smart TVs e TV Boxes, permitindo que você assista a filmes e séries de TV gratuitos diretamente na sua Smart TV ou TV Box.",
                  },
                  {
                    title: "YouCine para Celular",
                    text: "Você pode baixar e aproveitar o YouCine para assistir a filmes e programas de TV no seu dispositivo.",
                  },
                  {
                    title: "YouCine para TV Stick",
                    text:
                      "O YouCine é compatível com todas as marcas de Fire TV. Baixe o YouCine na sua Fire TV e tenha acesso a uma ampla seleção de conteúdos.",
                  },
                  {
                    id: "pc",
                    title: "YouCine para PC",
                    text:
                      "Você pode usar o emulador Android (ex: LDPlayer) para instalar o YouCine no seu PC e assistir com sucesso a filmes e séries de TV.",
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
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Recursos da Última Versão do YouCine APK 2026.</h2>
              <p className="mt-2 text-[#a9b6d3]">
                Pela minha experiência usando o YouCine APK, a opção de assistir filmes e séries offline faz uma grande diferença, especialmente quando você quer uma grande biblioteca de séries e conteúdos gratuitos sem limites. O aplicativo parece interativo, com uma interface fácil de usar, oferece funcionamento estável sem erros, exibe menos anúncios e funciona como um aplicativo seguro, sem necessidade de assinatura. Isso é algo que eu valorizo como alguém que testa regularmente aplicativos de streaming quanto à segurança e desempenho.
              </p>
              <p className="mt-2.5 text-[#a9b6d3]">
                O YouCine também oferece recursos personalizados, como um centro de avaliações pessoais, uma interface inteligente com um novo design, suporte a áudio multilíngue e legendas para filmes e programas de TV.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Principais Recursos do YouCine APK</h2>
              <p className="mt-2 text-[#a9b6d3]">O YouCine se tornou popular devido aos seus recursos fáceis de usar:</p>

              <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                {[
                  ["Interface Moderna:", "layout limpo e navegação fácil."],
                  ["Reprodução em Alta Qualidade:", "opções de reprodução em HD."],
                  ["Suporte Android TV/TV Box:", "ótimo para telas maiores."],
                  ["Atualizações Frequentes:", "melhor estabilidade e menos bugs."],
                  ["Desempenho Leve:", "otimizado para rodar suave."],
                  ["Vários Idiomas:", "áudio/legendas multi-idioma."],
                  ["Assistir Offline:", "baixar filmes/séries para ver depois."],
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
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Comparação da Versão Original vs Versão APK</h2>

              <div className="mt-3 overflow-auto rounded-2xl border border-[rgba(32,50,82,.7)]">
                <table className="min-w-180 w-full border-collapse bg-[rgba(12,21,38,.55)]">
                  <thead>
                    <tr>
                      {["Recurso", "Versão Original", "APK Mod"].map((h) => (
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
                      ["Estabilidade", ["ok", "versão oficial"], ["bad", "Não oficial"]],
                      ["Anúncios", ["warn", "Padrão"], ["ok", "Frequentemente removidos"]],
                      ["Premium / Desbloqueado", ["warn", "Depende"], ["ok", "Frequentemente desbloqueado"]],
                      ["Segurança", ["ok", "Mais seguro"], ["warn", "Alto risco"]],
                      ["Legal", ["ok", "Legítimo"], ["bad", "Possivelmente ilegal"]],
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
                <h2 className="text-4.5 font-bold tracking-[-.2px]">Prós e Contras</h2>

                <h3 className="mt-3 text-sm font-bold text-[#d7e3ff]">PRÓS</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                  <li>Menos anúncios em comparação com outros apps.</li>
                  <li>Streaming gratuito, sem assinatura.</li>
                  <li>Compatível com Android, tablet e Android TV.</li>
                  <li>Opção de assistir offline após download.</li>
                </ul>

                <h3 className="mt-4 text-sm font-bold text-[#d7e3ff]">CONTRAS</h3>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                  <li>Não está na Google Play Store.</li>
                  <li>Requer internet estável para streaming online.</li>
                  <li>Precisa ativar “Fontes desconhecidas”.</li>
                  <li>Precisa manter atualizado.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
                <h2 className="text-4.5 font-bold tracking-[-.2px]">Problemas Comuns e Soluções</h2>

                <FaqItem open title="YouCine APK não instala">
                  Certifique-se de que há espaço livre, baixe novamente (se corrompido) e verifique se “Fontes desconhecidas” está ativado.
                </FaqItem>

                <FaqItem title="Erro de Análise (Parse Error)">
                  Pode ser Android muito antigo. Use uma versão compatível e evite downloads incompletos.
                </FaqItem>

                <FaqItem title="Aplicativo travando ou congelando">
                  Atualize o app, limpe cache (Configurações → Apps → YouCine → Armazenamento → Limpar cache) e reinicie.
                </FaqItem>
              </div>
            </div>
          </div>
        </section>

        {/* tips */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Dicas para aproveitar ao máximo o YouCine APK</h2>

              <ul className="mt-2 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                <li>Sempre mantenha a versão mais recente instalada.</li>
                <li>Use uma conexão Wi-Fi de boa qualidade para evitar travamentos ou carregamentos.</li>
                <li>Adicione seus filmes e séries favoritos à sua lista de reprodução para assistir depois.</li>
                <li>Aproveite as opções de legendas e idiomas para personalizar sua experiência.</li>
              </ul>

              <p className="mt-2 text-[#a9b6d3]">Essas práticas simples garantem um uso mais estável, rápido e seguro.</p>
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
                    Como baixar e instalar o YouCine APK no Android (2026)
                  </h2>
                  <p className="mt-2 text-[#a9b6d3]">
                    Guia rápido para celular Android. Para TV, PC e iOS, veja as páginas dedicadas abaixo.
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
                  Baixar agora
                </a>
              </div>

              {/* quick links to other guides (NO guide content here) */}
              <div className="my-4 flex flex-wrap gap-2.5">
                <Link
                  href="/youcine-apk-for-tv"
                  className="rounded-[14px] border border-[rgba(32,50,82,.65)] bg-[rgba(12,21,38,.45)]
          px-3 py-2 text-xs font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                >
                  📺 Guia para TV
                </Link>

                <Link
                  href="/youcine-apk-for-pc"
                  className="rounded-[14px] border border-[rgba(32,50,82,.65)] bg-[rgba(12,21,38,.45)]
          px-3 py-2 text-xs font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                >
                  💻 Guia para PC
                </Link>

                <Link
                  href="/youcine-apk-for-ios"
                  className="rounded-[14px] border border-[rgba(32,50,82,.65)] bg-[rgba(12,21,38,.45)]
          px-3 py-2 text-xs font-black text-[#e8eefc] transition hover:-translate-y-0.5 hover:border-[rgba(79,124,255,.55)]"
                >
                   Guia para iOS
                </Link>
              </div>

              {/* ANDROID GUIDE */}
              <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[rgba(12,21,38,.45)] p-4.5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(79,124,255,.35)] bg-[rgba(79,124,255,.12)] px-2.5 py-1.5 text-xs font-extrabold text-[#cfe0ff]">
                  📱 Android (Celular)
                </div>

                <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                  Siga este passo a passo para instalar com segurança no Android.
                </p>

                <div className="mt-3 grid grid-cols-1 gap-2.5 md:grid-cols-2">
                  {[
                    ["1", "Baixe o APK", "Clique em “Baixar para Celular” no topo desta página."],
                    ["2", "Permita a instalação", "Ative “Fontes desconhecidas” nas configurações do Android."],
                    ["3", "Instale o arquivo", "Abra Downloads/Arquivos e toque no APK para instalar."],
                    ["4", "Abra e aproveite", "Inicie o app e comece a assistir normalmente."],
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
                      <b className="block text-[#e8eefc]">Aviso</b>
                      <span className="text-[13.5px] text-[#a9b6d3]">
                        Mantenha o app atualizado. Se der erro: reinicie → limpe cache → reinstale.
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

        {/* Conclusão */}
        <section className="py-5.5">
          <div className="mx-auto max-w-275 px-4.5">
            <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
              <h2 className="text-4.5 font-bold tracking-[-.2px]">Conclusão</h2>
              <p className="mt-2 text-[#a9b6d3]">
                Em resumo, o YouCine APK é uma revolução para os amantes de filmes e entretenimento no Brasil. Com sua vasta biblioteca de conteúdos, streaming de alta qualidade e interface fácil de usar, não é surpresa que este aplicativo tenha se tornado tão popular. Seja para assistir ao último lançamento de sucesso ou a um filme clássico, o YouCine é uma excelente escolha
              </p>
              <p className="mt-2.5 text-[#a9b6d3]">
                Então, por que esperar?
              </p>
              <p className="mt-2.5 text-[#a9b6d3]">
                Baixe este aplicativo hoje mesmo e comece a aproveitar uma experiência de streaming incomparável.
              </p>
            </div>
          </div >
        </section >

        {/* CTA */}
        < section id="ios" className="py-5.5" >
          <div className="mx-auto max-w-275 px-4.5">
            <div className="flex flex-col gap-4 rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-bold">Baixar agora e comece a assistir</h3>
                <p className="mt-1 text-[13.5px] text-[#a9b6d3]">
                  Click no botão e faça o download da versão mais recente.
                </p>
              </div>
              <a
                href="#top"
                className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-[rgba(79,124,255,.9)] bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))] px-3.5 py-3 text-[13px] font-extrabold text-[#e8eefc] shadow-[0_12px_35px_rgba(79,124,255,.22)] transition hover:-translate-y-0.5"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[rgba(255,255,255,.12)] text-sm">
                  ⬇
                </span>
                Baixar
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
