import React from 'react'

export default function CTA() {
  return (
    <section id="beratung" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-stone-50"></div>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            Starte jetzt dein eigenes digitales Produkt
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-stone-600">
            Wir machen es leicht: klare Schritte, feste Timelines, messbare Ergebnisse. Sichere dir eine unverbindliche Erstberatung.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black">
              Jetzt starten
            </a>
            <a href="#kontakt" className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50">
              Termin buchen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
