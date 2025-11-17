import { useRef } from 'react'
import Hero from './components/Hero'
import ParallaxSection from './components/ParallaxSection'
import Plans from './components/Plans'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'

function App() {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen scroll-smooth bg-[#03040a] text-white">
      {/* Hero with Spline cosmic scene */}
      <Hero onCTAClick={scrollToContact} />

      {/* About */}
      <ParallaxSection id="about" title="About" subtitle="17+ years of creative leadership, now combined with AI to deliver faster, smarter and more cost-effective design solutions." tint="violet">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-semibold">Creative Direction + AI</h3>
            <p className="mt-2 text-white/80">I partner with founders and marketing teams to shape brand direction, campaigns, and high-velocity design systems augmented by state-of-the-art AI tooling.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <h3 className="text-xl font-semibold">Remote-first, async-by-default</h3>
            <p className="mt-2 text-white/80">Designed for modern teams—clear briefs, tight feedback loops, and fast iteration from anywhere in the world.</p>
          </div>
        </div>
      </ParallaxSection>

      {/* Services */}
      <ParallaxSection id="services" title="What I do" subtitle="Branding, creative strategy, AI-powered design assets, and campaign support" tint="blue">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Brand Systems', desc: 'Identity, typography, color, motion—built for scale.' },
            { title: 'Creative Strategy', desc: 'Positioning, messaging, and concept development.' },
            { title: 'AI Design Ops', desc: 'Custom pipelines to generate, iterate, and deploy assets.' },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold">{s.title}</h4>
              <p className="mt-2 text-white/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </ParallaxSection>

      {/* Plans */}
      <ParallaxSection id="plans" title="Subscription Plans" subtitle="Flexible hours. Billed hourly. Scale up or down as your needs evolve." tint="copper">
        <Plans />
      </ParallaxSection>

      {/* Testimonials */}
      <ParallaxSection id="testimonials" title="Testimonials" subtitle="Results and relationships that compound over time." tint="emerald">
        <Testimonials />
      </ParallaxSection>

      {/* Contact & Scheduling */}
      <ParallaxSection id="contact" title="Contact & Scheduling" subtitle="Book a free 15-minute discovery call and tell me about your roadmap." tint="violet">
        <div className="grid gap-8 md:grid-cols-2">
          <Contact ref={contactRef} />
          <div id="book" className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Book a 15-minute intro call</h3>
            <p className="mt-2 text-white/80">Connect instantly and pick a time that works for you.</p>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
              {/* Calendar embed placeholder. Replace the src with your Calendly or TidyCal link. */}
              <iframe title="Calendar" src={import.meta.env.VITE_CALENDAR_URL || 'about:blank'} className="h-full w-full" />
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#04060d] py-8 text-center text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <p>© {new Date().getFullYear()} MC Creative Director AI • Built for founders, marketing teams, and startups.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
