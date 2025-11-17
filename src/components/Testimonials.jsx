import { motion } from 'framer-motion'

const items = [
  { name: 'A. Founder', role: 'Tech Startup', quote: 'Transformed our brand look in a week. The AI-enhanced workflow is lightning fast.' },
  { name: 'M. CMO', role: 'Fintech', quote: 'Feels like having an on-demand creative director. Clean handoffs, strong strategy.' },
  { name: 'L. Growth Lead', role: 'DTC', quote: 'From concepts to campaign visuals in days, not weeks. Huge velocity boost.' },
]

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t, i) => (
        <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
          <p className="">“{t.quote}”</p>
          <footer className="mt-4 text-sm text-white/60">{t.name} • {t.role}</footer>
        </motion.blockquote>
      ))}
    </div>
  )
}
