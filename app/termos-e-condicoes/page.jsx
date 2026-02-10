import Link from "next/link";
import {meta} from "@/app/seo/metadat"

export const metadata = meta.termsPT;

export default function TermsPage() {
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
                Termos e Condições
              </div>

              <h1 className="mt-3.5 text-[28px] font-black leading-[1.2] tracking-[-.4px] text-[#e8eefc]">
                Termos e Condições
              </h1>

              <p className="mt-2 text-sm text-[#a9b6d3]">
                Última atualização:{" "}
                <span className="font-extrabold text-[#d7e3ff]">[adicione a data]</span>
              </p>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Ao acessar e utilizar este site, você concorda em cumprir os presentes Termos e
                Condições. Caso não concorde com algum destes termos, recomendamos que não utilize o
                site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uso do Site + Terceiros */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Uso do Site
              </h2>
              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                O YouCineAPK.app fornece informações, guias e conteúdos relacionados ao aplicativo
                YouCine apenas para fins informativos.
              </p>

              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">Você concorda em:</p>
              <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                <li>Utilizar o site de forma legal e ética</li>
                <li>Não realizar atividades que possam prejudicar o funcionamento do site</li>
                <li>Não tentar acessar áreas restritas ou sistemas protegidos</li>
              </ul>
            </div>

            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Aplicativos e Conteúdos de Terceiros
              </h2>

              <ul className="mt-2 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                <li>Não desenvolve, modifica ou distribui aplicativos</li>
                <li>Não hospeda arquivos protegidos por direitos autorais</li>
                <li>Pode conter links para aplicativos ou sites de terceiros</li>
              </ul>

              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
                O uso de qualquer aplicativo ou serviço de terceiros é de responsabilidade exclusiva
                do usuário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links Externos + Isenção */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Links Externos
              </h2>
              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Este site pode conter links para sites externos que não são controlados pelo
                YouCineAPK.app. Não nos responsabilizamos pelo conteúdo, políticas ou práticas de
                sites de terceiros. O acesso é por sua conta e risco.
              </p>
            </div>

            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Isenção de Responsabilidade
              </h2>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">O YouCineAPK.app não garante:</p>
              <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                <li>Que o site esteja sempre disponível ou livre de erros</li>
                <li>A precisão, integridade ou atualidade das informações</li>
                <li>O funcionamento adequado de aplicativos ou serviços mencionados</li>
              </ul>

              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
                Não nos responsabilizamos por danos diretos ou indiretos resultantes do uso das
                informações disponíveis neste site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direitos + Modificações */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Direitos de Propriedade Intelectual
              </h2>
              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Todo o conteúdo publicado no YouCineAPK.app, incluindo textos e layouts, é protegido
                por direitos autorais, salvo indicação em contrário. Marcas, logotipos e nomes de
                aplicativos mencionados pertencem aos seus respectivos proprietários.
              </p>
            </div>

            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Modificações / Encerramento
              </h2>
              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                O YouCineAPK.app pode alterar estes termos a qualquer momento; o uso contínuo do site
                após alterações constitui aceitação automática dos novos termos.
              </p>
              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
                Também podemos suspender ou encerrar o acesso ao site, total ou parcialmente, a
                qualquer momento, sem aviso prévio, caso haja violação destes termos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
