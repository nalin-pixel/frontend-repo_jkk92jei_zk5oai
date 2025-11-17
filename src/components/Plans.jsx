import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Plans() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || ''
    fetch(`${base}/api/plans`).then(r => r.json()).then(d => setPlans(d.plans || [])).catch(()=>{})
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((p, i) => (
        <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur">
          <div className="mb-4 text-sm uppercase tracking-wider text-white/70">{p.name}</div>
          <div className="text-4xl font-bold">{p.hours}<span className="text-lg font-medium text-white/70"> hrs/month</span></div>
          <ul className="mt-6 space-y-2 text-white/80">
            {p.features?.map((f) => (
              <li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>{f}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            {p.stripe_url && (
              <a href={p.stripe_url} target="_blank" className="rounded-full bg-emerald-500/90 px-4 py-2 text-center font-medium text-white hover:bg-emerald-500">Checkout with Stripe</a>
            )}
            {p.paypal_url && (
              <a href={p.paypal_url} target="_blank" className="rounded-full bg-blue-600/90 px-4 py-2 text-center font-medium text-white hover:bg-blue-600">Checkout with PayPal</a>
            )}
            {!p.stripe_url && !p.paypal_url && (
              <div className="rounded-full bg-white/10 px-4 py-2 text-center text-sm text-white/70">Payment links coming soon</div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
