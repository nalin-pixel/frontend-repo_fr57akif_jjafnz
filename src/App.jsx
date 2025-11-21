import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="relative z-10 mx-auto max-w-7xl px-6 py-10 text-center text-white/60">
        © {new Date().getFullYear()} NovaSaaS. All rights reserved.
      </footer>
    </div>
  )
}

export default App
