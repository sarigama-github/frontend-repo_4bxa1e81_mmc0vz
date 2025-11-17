import { useState } from 'react'
import { Menu, X, Plane, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Journeys', href: '#journeys' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg">
                <Plane className="h-5 w-5" />
              </span>
              <span className="text-white/90 font-semibold tracking-wide">Astra Luxe Travel</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="text-white/80 hover:text-white transition-colors">
                  {l.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 transition-colors">
                <Search className="h-4 w-4" />
                Find trips
              </button>
              <a href="#contact" className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white font-medium shadow-lg shadow-fuchsia-500/20">
                Plan a Journey
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6">
              <nav className="grid gap-2">
                {links.map((l) => (
                  <a key={l.name} href={l.href} className="text-white/90 py-2">
                    {l.name}
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white font-medium">
                  Plan a Journey
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
