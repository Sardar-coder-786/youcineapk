import Link from "next/link";
import {meta} from "@/app/seo/metadat"

export const metadata = meta.privacyPT;

export default function PrivacyPolicyPage() {
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
                Política de Privacidade
              </div>

              <h1 className="mt-3.5 text-[28px] font-black leading-[1.2] tracking-[-.4px] text-[#e8eefc]">
                Política de Privacidade
              </h1>

              <p className="mt-2 text-sm text-[#a9b6d3]">
                Última atualização:{" "}
                <span className="font-extrabold text-[#d7e3ff]">[adicione a data]</span>
              </p>

              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                A sua privacidade é importante para nós. Esta Política descreve como o YouCineAPK.app
                coleta, usa e protege informações dos usuários ao acessar nosso conteúdo. Ao utilizar
                este site, você concorda com as práticas descritas nesta política.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informações que Coletamos */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div
            className="rounded-[18px] border border-[rgba(32,50,82,.7)]
            bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
            shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
          >
            <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
              Informações que Coletamos
            </h2>

            <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
              O YouCineAPK.app não coleta informações pessoais identificáveis diretamente, como nome,
              endereço ou dados bancários.
            </p>

            <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
              Podemos coletar informações não pessoais, incluindo:
            </p>

            <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
              <li>Endereço IP</li>
              <li>Tipo de navegador</li>
              <li>Sistema operacional</li>
              <li>Páginas visitadas</li>
              <li>Tempo gasto no site</li>
            </ul>

            <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
              Esses dados são usados apenas para fins estatísticos e de melhoria da experiência do
              usuário.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies + Analytics */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Uso de Cookies
              </h2>
              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">Utilizamos cookies para:</p>

              <ul className="mt-2.5 list-disc space-y-2 pl-5 text-[13.5px] text-[#a9b6d3]">
                <li>Melhorar a navegação do usuário</li>
                <li>Analisar tráfego do site</li>
                <li>Entender o comportamento dos visitantes</li>
              </ul>

              <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
                Você pode desativar os cookies nas configurações do seu navegador, caso prefira.
              </p>
            </div>

            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Google Analytics
              </h2>
              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Este site pode usar o Google Analytics, um serviço de análise fornecido pelo Google,
                que utiliza cookies para coletar informações anônimas sobre o uso do site. O Google
                pode usar esses dados de acordo com sua própria política de privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links para terceiros */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div
            className="rounded-[18px] border border-[rgba(32,50,82,.7)]
            bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
            shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
          >
            <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
              Links para Sites de Terceiros
            </h2>
            <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
              O YouCineAPK.app pode conter links para sites externos. Não nos responsabilizamos pelas
              políticas de privacidade ou conteúdos desses sites.
            </p>
            <p className="mt-2.5 text-[13.5px] text-[#a9b6d3]">
              Recomendamos que você leia as políticas de privacidade de qualquer site de terceiros
              que visitar.
            </p>
          </div>
        </div>
      </section>

      {/* Conteúdo e responsabilidade */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div
            className="rounded-[18px] border border-[rgba(32,50,82,.7)]
            bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
            shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
          >
            <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
              Conteúdo e Responsabilidade
            </h2>
            <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
              O YouCineAPK.app é um site informativo. Não hospedamos arquivos protegidos por direitos
              autorais em nossos servidores. Qualquer aplicativo, marca ou nome citado pertence aos
              seus respectivos proprietários.
            </p>
          </div>
        </div>
      </section>

      {/* Segurança + Alterações */}
      <section className="py-5.5">
        <div className="mx-auto max-w-275 px-4.5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Segurança das Informações
              </h2>
              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Adotamos medidas razoáveis para proteger as informações coletadas, mas nenhum método
                de transmissão pela internet é 100% seguro.
              </p>
            </div>

            <div
              className="rounded-[18px] border border-[rgba(32,50,82,.7)]
              bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))]
              shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5"
            >
              <h2 className="text-[18px] font-black tracking-[-.2px] text-[#e8eefc]">
                Alterações nesta Política
              </h2>
              <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                Podemos atualizar esta Política de Privacidade a qualquer momento, sem aviso prévio.
                Recomendamos revisar esta página periodicamente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
