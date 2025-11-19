import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import CaseStudies from './components/CaseStudies'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-stone-200">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-sm bg-stone-900" aria-hidden></div>
            <span className="text-sm font-semibold tracking-wide">Agentur</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-stone-600">
            <a href="#" className="hover:text-stone-900">Leistungen</a>
            <a href="#" className="hover:text-stone-900">Cases</a>
            <a href="#kontakt" className="hover:text-stone-900">Kontakt</a>
          </nav>
          <a href="#beratung" className="inline-flex items-center rounded-md bg-stone-900 px-4 py-2 text-xs font-semibold text-white hover:bg-black">Kostenlose Beratung</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Benefits />
        <Testimonials />
        <CaseStudies />
        <Process />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
