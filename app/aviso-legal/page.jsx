import Link from "next/link";
import {meta} from "@/app/seo/metadat"

export const metadata = meta.legalPT;

export default function AvisoLegalPage() {
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
                Aviso Legal
              </div>

              <h1 className="mt-3.5 text-[28px] font-black leading-[1.2] tracking-[-.4px] text-[#e8eefc]">
                Aviso Legal (Legal Notice)
              </h1>

              <p className="mt-2 text-sm text-[#a9b6d3]">
                O YouCineAPK.app é um portal informativo com guias e conteúdos relacionados ao
                aplicativo YouCine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Natureza do Conteúdo */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div
            className="rounded-[18px] border border-[rgba(32,50,82,.7)]
            bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
            shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
          >
            <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
              Natureza do Conteúdo
            </h2>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
              <li>
                Não hospeda arquivos APK, aplicativos modificados ou conteúdos protegidos por
                direitos autorais em seus servidores
              </li>
              <li>Não é proprietário nem desenvolvedor oficial do aplicativo YouCine</li>
              <li>Atua apenas como um site informativo e educativo</li>
            </ul>

            <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
              Marcas, nomes e logotipos mencionados pertencem aos seus respectivos proprietários.
            </p>
          </div>
        </div>
      </section>

      {/* Responsabilidade + Links Externos */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Responsabilidade */}
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Responsabilidade do Usuário
              </h2>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                O uso de qualquer aplicativo, serviço ou informação apresentada neste site é de
                responsabilidade exclusiva do usuário.
              </p>

              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
                O YouCineAPK.app não se responsabiliza por:
              </p>

              <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                <li>Problemas técnicos</li>
                <li>Danos ao dispositivo</li>
                <li>Uso indevido de aplicativos de terceiros</li>
              </ul>

              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
                Recomendamos que os usuários verifiquem as leis locais antes de instalar ou
                utilizar qualquer aplicativo mencionado.
              </p>
            </div>

            {/* Links externos */}
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Links Externos
              </h2>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Este site pode conter links para sites de terceiros. Não temos controle sobre
                conteúdo, políticas ou práticas desses sites externos e não assumimos qualquer
                responsabilidade por eles.
              </p>

              <div
                className="mt-3 flex gap-3 rounded-2xl border border-[rgba(245,158,11,.35)]
                bg-[rgba(245,158,11,.08)] p-3.5"
              >
                <div className="text-[18px] leading-none">⚠️</div>
                <div>
                  <b className="block text-[#e8eefc]">Isenção de Garantias</b>
                  <span className="text-[13.5px] text-[#a9b6d3]">
                    As informações são fornecidas “como estão”, sem garantias de qualquer tipo.
                    Não garantimos disponibilidade contínua, precisão total ou funcionamento
                    ininterrupto de serviços de terceiros.
                  </span>
                </div>
              </div>

              <p className="mt-3 text-[13.5px] text-[#a9b6d3]">
                O YouCineAPK.app pode modificar este Aviso Legal a qualquer momento; o uso
                contínuo do site após alterações constitui aceitação dos novos termos.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
