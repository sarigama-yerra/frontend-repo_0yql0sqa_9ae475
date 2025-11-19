import React from 'react'

const benefits = [
  {
    title: 'Wir übernehmen die komplette Erstellung',
    desc: 'Von Recherche über Ghostwriting und Lektorat bis zum finalen PDF – alles aus einer Hand.'
  },
  {
    title: 'Expertenwissen für jede Nische',
    desc: 'Zertifizierte Fachautor:innen und Praktiker:innen sorgen für fachliche Tiefe und Glaubwürdigkeit.'
  },
  {
    title: 'Passives Einkommen ohne Aufwand',
    desc: 'Du lieferst die Richtung, wir liefern das Produkt – mit Systemen für langfristige Verkäufe.'
  },
  {
    title: 'Schneller Verkaufsstart',
    desc: 'Klarer Prozess, klare Timelines: in wenigen Wochen bereit für den Launch.'
  },
  {
    title: 'Professionelles Design & Branding',
    desc: 'Minimalistisches Layout, starke Typografie, markenkonform – ready für deine Shop‑ und Link‑Pages.'
  }
]

export default function Benefits() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Warum Influencer mit uns arbeiten</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <p className="text-base font-semibold text-stone-900">{b.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
