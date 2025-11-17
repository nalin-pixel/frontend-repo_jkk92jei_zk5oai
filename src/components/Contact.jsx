import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const base = import.meta.env.VITE_BACKEND_URL || ''

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    try {
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      setStatus({ ok: true, data })
    } catch (err) {
      setStatus({ ok: false, error: String(err) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <label className="mb-1 block text-sm text-white/70">Name</label>
          <input name="name" required className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400" placeholder="Your name" />
        </div>
        <div className="md:col-span-1">
          <label className="mb-1 block text-sm text-white/70">Email</label>
          <input type="email" name="email" required className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400" placeholder="you@company.com" />
        </div>
        <div className="md:col-span-1">
          <label className="mb-1 block text-sm text-white/70">Company</label>
          <input name="company" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400" placeholder="Company (optional)" />
        </div>
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm text-white/70">Message</label>
          <textarea name="message" required rows={4} className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400" placeholder="Tell me about your goals..." />
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center gap-3">
          <button disabled={loading} className="rounded-full bg-gradient-to-r from-emerald-500 via-violet-500 to-blue-600 px-5 py-2.5 font-medium text-white disabled:opacity-60">
            {loading ? 'Sending...' : 'Send message'}
          </button>
          <a href="#book" className="rounded-full border border-white/15 px-4 py-2 text-white/80 hover:border-white/30">Book a 15-min call</a>
        </div>
        {status?.ok && (
          <div className="md:col-span-2 text-sm text-emerald-400">Thanks! I'll get back to you shortly.</div>
        )}
        {status && !status.ok && (
          <div className="md:col-span-2 text-sm text-amber-400">Something went wrong. Please try again later.</div>
        )}
      </form>
    </div>
  )
}
