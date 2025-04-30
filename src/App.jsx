import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Facilities from './components/Facilities'
import Rooms from './components/Rooms'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-accent-light text-primary-dark">
      <Header />
      <main className="pt-0">
        <Hero />
        <About />
        <Facilities />
        <Rooms />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
