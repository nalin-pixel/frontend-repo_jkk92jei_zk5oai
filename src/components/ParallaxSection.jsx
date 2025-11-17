import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxSection({ id, title, subtitle, children, tint = 'emerald' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1])

  const tintMap = {
    emerald: 'from-emerald-500/20 via-transparent to-transparent',
    violet: 'from-violet-500/20 via-transparent to-transparent',
    blue: 'from-blue-600/20 via-transparent to-transparent',
    copper: 'from-amber-600/20 via-transparent to-transparent',
  }

  return (
    <section id={id} ref={ref} className="relative overflow-hidden bg-[#05070a] py-24 text-white">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${tintMap[tint]} `} />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2 style={{ y, opacity }} className="text-3xl font-bold md:text-4xl">
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p style={{ opacity }} className="mt-2 max-w-3xl text-white/70">
            {subtitle}
          </motion.p>
        )}
        <div className="mt-10">
          {children}
        </div>
      </div>
      {/* Floating stars */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
    </section>
  )
}
