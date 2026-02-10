import Link from 'next/link'
import React from 'react'

function Language({ doc }) {
    return (
        <div className="fixed bottom-0 text-center right-0 p-4.5">
            {doc.map((t) => (
                <Link
                    key={t.Text}
                    href={t.link}
                    className="rounded-[14px] my-2 block border border-[rgba(32,50,82,.65)] bg-[rgba(12,21,38,.45)] px-2.5 py-2 text-xs font-bold text-[#e8eefc]"
                >
                    {t.Text}
                </Link>
            ))}
        </div>
    )
}

export default Language