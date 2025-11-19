import React from 'react'

const items = [
  {
    name: 'Lena M. – Fitness Creatorin',
    quote: 'In 5 Wochen vom Konzept zum fertigen Guide. Der Launch brachte in den ersten 10 Tagen 24.000 € Umsatz – ohne Stress.',
    metric: '+24.000 € Launch‑Umsatz',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Tom M. – Tech & Productivity',
    quote: 'Die Struktur und das Lektorat waren next level. Meine Community liebt die Klarheit. Läuft seit Monaten organisch.',
    metric: '4.9★ Community‑Feedback',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Maya M. – Food & Health',
    quote: 'Branding exakt getroffen, Inhalte top belegt. Ich hätte allein niemals so schnell verkauft.',
    metric: '3.100+ Käufer:innen',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=640&auto=format&fit=crop'
  }
]

export default function Testimonials() {
  return (
    <section className="relative bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">Erfolgsgeschichten</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-xl border border-stone-200 bg-white p-6">
              <img src={t.img} alt="" className="mb-4 h-14 w-14 rounded-full object-cover" />
              <blockquote className="text-stone-700 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-stone-900">{t.name}</figcaption>
              <p className="text-xs text-stone-500">{t.metric}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
