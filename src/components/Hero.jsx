import React from 'react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 to-white"></div>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-24 w-[38rem] h-[38rem] rounded-full bg-gradient-to-br from-stone-200/60 to-stone-100/0 blur-3xl" />
        <div className="absolute -bottom-20 -left-24 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-stone-200/50 to-stone-100/0 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm">
            Seriöse Agentur für digitale Wissensprodukte
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
            Erstelle deine eigenen digitalen Produkte mit Experten – und baue dir ein nachhaltiges Einkommen auf.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
            Wir begleiten dich von der Idee bis zum Verkauf. Mit erfahrenen Fachautor:innen, klaren Prozessen und hochwertigem Design entsteht in kurzer Zeit ein marktreifes E‑Book oder PDF‑Guide – passend zu deiner Community.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-stone-300">
              Jetzt mit uns arbeiten
            </a>
            <a href="#beratung" className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 shadow-sm transition-colors hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-200">
              Kostenlose Beratung anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
