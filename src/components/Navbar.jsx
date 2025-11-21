import { Menu, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 shadow-lg shadow-red-500/30 grid place-items-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">NovaSaaS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
          <a href="#cta" className="text-white/70 hover:text-white transition">Get started</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
