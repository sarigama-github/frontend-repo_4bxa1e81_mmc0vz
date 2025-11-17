import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Planner from './components/Planner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Planner />
      </main>
      <Footer />
    </div>
  )
}

export default App
