import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-white/80 ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Ultra‑luxury travel, tailor‑made
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-tight text-white">
              Experience the world in quiet luxury
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Private villas, rare itineraries, and seamless concierge service. Curated for those who value time and taste.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#planner" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow-lg hover:shadow-xl transition-shadow">
                Start Planning
              </a>
              <a href="#destinations" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium ring-1 ring-white/20 hover:bg-white/20 transition-colors">
                Explore Destinations
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.35)_0%,transparent_60%)]" />
    </section>
  )
}
