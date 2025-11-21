import Spline from '@splinetool/react-spline'
import { ArrowRight, Check } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden">
      {/* Spline full-bleed cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Dark gradient for contrast over the interactive scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-rose-600" />
            New SaaS • Early Access
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95]">
            Build smarter workflows with a bold, modern platform
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Automate busywork, analyze data in real-time, and ship faster. Designed for teams who want power and polish without the complexity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 px-5 py-3 text-white font-semibold shadow-lg shadow-red-600/30 hover:brightness-110 transition">
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/15 hover:bg-white/15 transition">
              See features
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/80">
            {[
              'No credit card required',
              'Setup in minutes',
              'Cancel anytime',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-rose-400" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
