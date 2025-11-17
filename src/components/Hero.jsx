import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur"
        >
          MC Creative Director AI • Your creative vision. Powered by AI. Launched at light speed.
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
          style={{ textShadow: '0 10px 60px rgba(100,200,255,0.35)' }}
        >
          Your Design & Marketing Can Launch Into Space
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 max-w-2xl text-white/80"
        >
          Creative Direction + AI-powered Graphic Design, billed hourly in flexible subscription packages.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={onCTAClick} className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-violet-500 to-blue-600 px-6 py-3 text-white shadow-lg transition hover:shadow-emerald-500/30">
            <span className="relative z-10">Book Your Free Creative Call</span>
            <span className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
