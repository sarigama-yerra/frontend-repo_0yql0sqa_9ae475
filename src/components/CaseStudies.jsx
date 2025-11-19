import React from 'react'

const cases = [
  {
    title: 'Wie Influencer X in 30 Tagen ein passives Einkommen aufgebaut hat',
    points: [
      'Tag 1–3: Themenvalidierung und Outline mit Expert:in',
      'Woche 1–2: Erstellung der Inhalte + Lektorat',
      'Woche 3: Design, Layout, Branding',
      'Woche 4: Launch‑Assets, Shop‑Setup, Pre‑Launch',
    ],
  },
  {
    title: 'Vom Content zum Premium‑Guide – Schritt für Schritt',
    points: [
      'Community‑Analyse und Nutzenversprechen',
      'Belegte Inhalte mit Quellen und Grafiken',
      'Professionelles PDF‑Layout in deinem Stil',
      'Pricing, Positionierung und Launch‑Plan',
    ],
  },
]

export default function CaseStudies() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Case Studies</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="text-lg font-semibold text-stone-900">{c.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                {c.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-stone-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
