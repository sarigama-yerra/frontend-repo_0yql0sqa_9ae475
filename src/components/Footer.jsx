import React from 'react'

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 border-t border-stone-200">
        <div className="grid gap-6 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="text-sm font-semibold text-stone-900">Kontakt</p>
            <p className="mt-2 text-sm text-stone-600">hello@agentur.expert</p>
            <p className="text-sm text-stone-600">+49 30 1234567</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900">Socials</p>
            <ul className="mt-2 space-y-1 text-sm text-stone-600">
              <li><a className="hover:text-stone-900" href="#">Instagram</a></li>
              <li><a className="hover:text-stone-900" href="#">YouTube</a></li>
              <li><a className="hover:text-stone-900" href="#">TikTok</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900">Rechtliches</p>
            <ul className="mt-2 space-y-1 text-sm text-stone-600">
              <li><a className="hover:text-stone-900" href="#">Impressum</a></li>
              <li><a className="hover:text-stone-900" href="#">Datenschutz</a></li>
              <li><a className="hover:text-stone-900" href="#">AGB</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-6">
          <p className="text-xs text-stone-500">© {new Date().getFullYear()} Agentur für digitale Wissensprodukte</p>
          <p className="text-xs text-stone-500">Clean, minimal & seriös</p>
        </div>
      </div>
    </footer>
  )
}
