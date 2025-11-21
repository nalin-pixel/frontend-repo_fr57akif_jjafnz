import { ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section id="cta" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 p-0.5 shadow-xl shadow-red-600/30">
        <div className="rounded-3xl bg-black/60 p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to build smarter?</h3>
              <p className="mt-1 text-white/80">Join the waitlist and be the first to try the platform.</p>
            </div>
            <form className="w-full md:w-auto flex gap-2">
              <input type="email" required placeholder="you@company.com" className="w-full md:w-80 rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 ring-1 ring-white/20 focus:outline-none focus:ring-white/40" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-white text-black font-semibold px-5 py-3 hover:bg-white/90 transition">
                Join waitlist
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
