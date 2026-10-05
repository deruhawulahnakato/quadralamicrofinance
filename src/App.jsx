import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Values from './components/Values.jsx'
import Team from './components/Team.jsx'
import Steps from './components/Steps.jsx'
import Apply from './components/Apply.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Values />
        <Team />
        <Steps />
        <Apply />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
