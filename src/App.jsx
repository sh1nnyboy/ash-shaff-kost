import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Facilities from './components/Facilities'
import Rooms from './components/Rooms'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import './App.css'

function HomePage() {
  return (
    <>
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
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-accent-light text-primary-dark">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
