import { motion } from 'framer-motion'
import { Crown, Sparkles, ShieldCheck, MapPin, Compass, Waves } from 'lucide-react'

const items = [
  {
    icon: Crown,
    title: 'Quiet Luxury',
    desc: 'Impeccable taste reflected in every detail—from bespoke suites to private transfers.'
  },
  {
    icon: Sparkles,
    title: 'Elevated Service',
    desc: 'Dedicated concierges and destination experts who anticipate every need.'
  },
  {
    icon: ShieldCheck,
    title: 'Seamless & Secure',
    desc: 'Trusted partners, insured experiences, and white‑glove logistics globally.'
  }
]

export default function Features() {
  return (
    <section id="experiences" className="relative py-24 bg-gradient-to-b from-transparent to-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-white/10 hover:border-white/20"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-fuchsia-500 text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[MapPin, Compass, Waves].map((Icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="p-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-white font-medium">Signature Collections</h4>
                  <p className="text-white/70 text-sm">Explore curated escapes across coasts, deserts, and hidden cities.</p>
                </div>
              </div>
              <div className="aspect-[16/9] bg-gradient-to-br from-sky-500/30 to-fuchsia-500/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
