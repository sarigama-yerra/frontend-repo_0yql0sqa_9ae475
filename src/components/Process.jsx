import React from 'react'

const steps = [
  { id: 1, title: 'Kennenlernen & Themenfindung', desc: 'Wir klären Ziele, Zielgruppe und Nutzenversprechen – schnell und fokussiert.' },
  { id: 2, title: 'Expertenwissen + Konzept', desc: 'Gemeinsam mit Fachautor:innen strukturieren wir Inhalte und Evidenz.' },
  { id: 3, title: 'Erstellung des E‑Books', desc: 'Ghostwriting, Lektorat und Quellenprüfung – fundiert und klar.' },
  { id: 4, title: 'Design + Branding', desc: 'Minimalistisches Layout, starke Typografie, markenkonform.' },
  { id: 5, title: 'Launch & Verkauf', desc: 'Shop‑Assets, Pricing, Pre‑Launch und fortlaufendes Optimieren.' },
]

export default function Process() {
  return (
    <section className="relative bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">So läuft die Zusammenarbeit</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-5">
          {steps.map((s) => (
            <li key={s.id} className="rounded-xl border border-stone-200 bg-white p-5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-xs font-semibold text-white">{s.id}</span>
              <h3 className="mt-3 text-sm font-semibold text-stone-900">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
