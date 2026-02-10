import React from 'react'


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

function Faq({ Faqs }) {

    return (
        <section id="blogs" className="py-5.5">
            <div className="mx-auto max-w-275 px-4.5">
                <div className="rounded-xl border border-[rgba(32,50,82,.7)] bg-[linear-gradient(180deg,rgba(15,26,46,.92),rgba(12,21,38,.86))] shadow-[0_18px_50px_rgba(0,0,0,.35)] p-4.5">
                    <h2 className="text-4.5 font-bold tracking-[-.2px]">FAQ</h2>

                    {Faqs.map((f, index) => (
                        <FaqItem open={index === 0} key={f.qua} title={f.qua}>
                            {f.ans}
                        </FaqItem>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq