import Link from "next/link";
import {meta} from "@/app/seo/metadat"

export const metadata = meta.dmcaPT;

export default function DmcaPage() {
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
                Política DMCA
              </div>

              <h1 className="mt-3.5 text-[28px] font-black leading-[1.2] tracking-[-.4px] text-[#e8eefc]">
                Política DMCA
              </h1>

              <p className="mt-2 text-sm text-[#a9b6d3]">
                Última atualização:{" "}
                <span className="font-extrabold text-[#d7e3ff]">
                  {/* update when you want */}
                  [adicione a data]
                </span>
              </p>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                O YouCineAPK.app respeita os direitos de propriedade intelectual e cumpre as
                disposições da Digital Millennium Copyright Act (DMCA). Se você acredita que algum
                conteúdo viola seus direitos autorais, siga as instruções abaixo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Aviso de Violação */}
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Aviso de Violação
              </h2>
              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                O YouCineAPK.app não hospeda conteúdos protegidos por direitos autorais em seus
                servidores. Nosso site atua como plataforma informativa e pode conter links externos.
                Mesmo assim, levamos reclamações a sério e responderemos prontamente a notificações
                válidas.
              </p>
            </div>

            {/* Como enviar */}
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Como Enviar uma Notificação DMCA
              </h2>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">Para solicitar remoção, forneça:</p>

              <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                <li>Nome completo do titular dos direitos autorais ou representante autorizado</li>
                <li>Descrição clara do conteúdo protegido</li>
                <li>URL(s) específica(s) do conteúdo supostamente infrator no Youcineapk.app</li>
                <li>Declaração de boa-fé de que o uso não foi autorizado</li>
                <li>
                  Declaração sob pena de perjúrio de que as informações são verdadeiras
                </li>
                <li>Assinatura física ou eletrônica do titular</li>
              </ul>

              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
                Solicitações incompletas podem não ser processadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Envio */}
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Envio da Notificação
              </h2>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Envie sua notificação DMCA através da nossa página de contato oficial. Após receber
                uma notificação válida, analisaremos o pedido e tomaremos as medidas apropriadas,
                incluindo remoção se necessário.
              </p>
            </div>

            {/* Contra */}
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Contra-Notificação
              </h2>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Caso você acredite que o conteúdo removido foi identificado incorretamente, você pode
                enviar uma contra-notificação com as informações exigidas pela DMCA. Após análise, o
                conteúdo poderá ser restaurado conforme permitido por lei.
              </p>

              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
                O YouCineAPK.app pode alterar esta Política DMCA a qualquer momento, sem aviso prévio.
                Recomendamos revisar esta página periodicamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
