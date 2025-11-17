import { motion } from 'framer-motion'
import { Calendar, Users, Plane, ArrowRight } from 'lucide-react'

export default function Planner() {
  return (
    <section id="planner" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 md:p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Craft your next journey</h3>
              <p className="text-white/70 mt-1">Tell us what you love. We’ll handle the rest.</p>
            </div>

            <form className="grid w-full md:w-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-2.5">
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="h-4 w-4" />
                  <input className="bg-transparent outline-none placeholder:text-white/50 w-full" placeholder="2 travelers" />
                </div>
              </div>
              <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-2.5">
                <div className="flex items-center gap-2 text-white/80">
                  <Calendar className="h-4 w-4" />
                  <input className="bg-transparent outline-none placeholder:text-white/50 w-full" placeholder="Dates" />
                </div>
              </div>
              <div className="rounded-xl bg-white/10 ring-1 ring-white/20 px-4 py-2.5">
                <div className="flex items-center gap-2 text-white/80">
                  <Plane className="h-4 w-4" />
                  <input className="bg-transparent outline-none placeholder:text-white/50 w-full" placeholder="Destination" />
                </div>
              </div>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-sky-500 px-5 py-2.5 font-medium shadow-lg">
                Start
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
