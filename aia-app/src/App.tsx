import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FullBleedPhoto } from './components/FullBleedPhoto'
import { Pillars } from './components/Pillars'
import { Approach } from './components/Approach'
import { Quote } from './components/Quote'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FullBleedPhoto alt="Hands intertwined" />
        <Pillars />
        <FullBleedPhoto alt="Light through window" aspectRatio="2/1" />
        <Approach />
        <FullBleedPhoto alt="Textured stone" aspectRatio="5/2" />
        <Quote />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
