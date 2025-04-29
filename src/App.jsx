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
    <div className="min-h-screen h-full w-full bg-accent-light text-primary-dark flex flex-col">
      <Header className="w-full" />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Facilities />
        <Rooms />
        <Location />
        <Contact />
      </main>
      <Footer className="w-full" />
    </div>
  )
}

export default App
