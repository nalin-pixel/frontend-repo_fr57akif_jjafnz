import { Shield, Zap, Sparkles, LineChart } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:bg-white/[0.06] transition">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 grid place-items-center text-white shadow-lg shadow-red-600/30">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
      <p className="mt-1 text-white/70 text-sm">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    { icon: Zap, title: 'Lightning fast', desc: 'Optimized for speed from onboarding to daily use.' },
    { icon: Sparkles, title: 'AI-assisted', desc: 'Smart suggestions that help you ship faster.' },
    { icon: LineChart, title: 'Real-time insights', desc: 'Live dashboards with metrics that matter.' },
    { icon: Shield, title: 'Enterprise-grade', desc: 'Best-in-class security and reliability.' },
  ]
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <Feature key={it.title} {...it} />
        ))}
      </div>
    </section>
  )
}

export default Features
