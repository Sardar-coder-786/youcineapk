"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SiteFooter() {
    const pathname = usePathname();
    const hideHelpCta = pathname === "/contact-us" || pathname === "/en/contact-us";
    
    return (
        <footer id="contact" className="py-6 pb-10 text-[#a9b6d3]">
            <div className="mx-auto max-w-275 px-4">
                {!hideHelpCta && <div className="mx-auto max-w-275  py-5">
                        <div className="flex flex-col gap-4 rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-[#e8eefc]">Precisa de mais ajuda?</h3>
                                <p className="mt-1 text-[13.5px] text-[#a9b6d3]">
                                    Se você ainda enfrentar algum problema depois de seguir este guia, entre em contato conosco. Nossa equipe está pronta para ajudar.
                                </p>
                            </div>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[14px]
                      font-black text-[13px] border border-[rgba(79,124,255,.9)]
                      bg-[linear-gradient(135deg,rgba(79,124,255,.95),rgba(79,124,255,.62))]
                      shadow-[0_12px_35px_rgba(79,124,255,.22)] text-[#e8eefc]"
                            >
                                <span className="w-7 h-7 rounded-xl bg-[rgba(255,255,255,.12)] inline-flex items-center justify-center">
                                    ✉️
                                </span>
                                Fale Conosco
                            </Link>
                        </div>
                    </div>}
                    

                {/* Disclaimer & Links */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_.8fr]">
                    <div className="rounded-[18px] border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4">
                        <h3 className="text-base font-bold text-[#e8eefc]">Disclaimer</h3>
                        <p className="mt-2 text-[13.5px] text-[#a9b6d3]">
                            O YouCine é uma plataforma de aplicativo que permite assistir a filmes e séries online. A plataforma não armazena arquivos em seus próprios servidores.
                            Todo o conteúdo disponibilizado é fornecido por usuários, sem qualquer afiliação. O uso do YouCine é de total responsabilidade do usuário.
                        </p>
                        <div className="mt-3 text-xs">© 2026 YouCine – All Rights Reserved</div>
                    </div>

                    <div className="rounded-[18px] border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4">
                        <h3 className="text-base font-bold text-[#e8eefc]">Policys</h3>
                        <div className="mt-2 flex flex-wrap gap-2.5">
                            {[
                                { Text: "privacy-policy", link: "/politica-de-privacidade" },
                                { Text: "Aviso Legal", link: "/aviso-legal" },
                                { Text: "Termos e Condições", link: "/termos-e-condicoes" },
                                { Text: "Política DMCA", link: "/politica-dmca" },
                                { Text: "About Us", link: "/about-us" },
                            ].map((t) => (
                                <Link
                                    key={t.Text}
                                    href={t.link}
                                    className="rounded-[14px] border border-[rgba(32,50,82,.65)] bg-[rgba(12,21,38,.45)] px-2.5 py-2 text-xs font-bold text-[#e8eefc]"
                                >
                                    {t.Text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
