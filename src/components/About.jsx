import React from 'react'

export default function About() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid items-start gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Über die Agentur</h2>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Wir erstellen gemeinsam mit ausgewählten Expert:innen hochwertige E‑Books und PDF‑Guides für Influencer in jeder Nische. Unser Anspruch: erstklassige Inhalte, klare Didaktik, exzellentes Design. Von Strategie bis Launch kümmern wir uns um alles – professionell, transparent und effizient.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Unser Team vereint Redaktion, Research, Ghostwriting, Lektorat, Design und Go‑to‑Market. So entsteht ein Produkt, das deiner Marke entspricht und deiner Community echten Mehrwert liefert.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <p className="text-3xl font-semibold text-stone-900">50+ </p>
              <p className="text-sm text-stone-600">erfolgreiche Publikationen</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <p className="text-3xl font-semibold text-stone-900">12 </p>
              <p className="text-sm text-stone-600">Expert:innen im Kernteam</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <p className="text-3xl font-semibold text-stone-900">4.8★ </p>
              <p className="text-sm text-stone-600">durchschnittliche Creator‑Bewertung</p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-stone-50 p-6">
              <p className="text-3xl font-semibold text-stone-900">2–6 Wo. </p>
              <p className="text-sm text-stone-600">von Idee bis Verkaufsstart</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
