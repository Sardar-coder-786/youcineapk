import {meta} from "@/app/seo/metadat"

export const metadata = meta.about;

export default function AboutUsPage() {
  return (
    <main id="content">
      {/* HERO */}
      <section className="py-11 pb-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div
            className="relative overflow-hidden rounded-[18px] border border-[rgba(32,50,82,.7)]
            bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
            shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
          >
            {/* glow */}
            <div
              className="pointer-events-none absolute -inset-0.5
              bg-[radial-gradient(260px_180px_at_25%_20%,rgba(79,124,255,.20),transparent_60%),radial-gradient(280px_200px_at_78%_12%,rgba(34,197,94,.16),transparent_60%)]"
            />

            <div className="relative">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(79,124,255,.35)]
                bg-[rgba(79,124,255,.12)] px-2.5 py-1.5 text-xs font-black text-[#cfe0ff]"
              >
                <span className="h-2 w-2 rounded-full bg-[#4f7cff] shadow-[0_0_0_5px_rgba(79,124,255,.18)]" />
                Sobre Nós
              </div>

              <h1 className="mt-3.5 text-[28px] font-black leading-[1.2] tracking-[-.4px] text-[#e8eefc]">
                Sobre Nós
              </h1>

              <p className="mt-2 text-sm text-[#a9b6d3]">
                Bem-vindo ao YouCine APK, uma plataforma criada para ajudar os usuários a
                descobrir e acessar conteúdos de entretenimento de forma simples e responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Nosso objetivo */}
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Nosso objetivo
              </h2>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Fornecer informações claras, guias úteis e uma experiência fácil de usar para
                quem deseja assistir a filmes e séries em diferentes dispositivos.
              </p>

              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
                Nosso foco é oferecer conteúdos atualizados para celulares, Smart TVs, TV Box e
                computadores, facilitando o entendimento do funcionamento da plataforma em cada
                dispositivo.
              </p>
            </div>

            {/* Prioridades */}
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Prioridades
              </h2>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                A experiência do usuário e a transparência são prioridades. Trabalhamos
                continuamente para melhorar nossos guias e informações com base no feedback dos
                usuários, garantindo uma experiência mais estável e confiável.
              </p>

              {/* Callout */}
              <div
                className="mt-3 flex gap-3 rounded-2xl border border-[rgba(245,158,11,.35)]
                bg-[rgba(245,158,11,.08)] p-3.5"
              >
                <div className="text-[18px] leading-none">📝</div>
                <div>
                  <b className="block text-[#e8eefc]">Note</b>
                  <span className="text-[13.5px] text-[#a9b6d3]">
                    O YouCine APK não hospeda nem armazena arquivos de mídia em seus servidores.
                    Todo o conteúdo é fornecido por fontes de terceiros. O uso do aplicativo e de
                    seus conteúdos é de total responsabilidade do usuário.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
