import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FullBleedPhoto } from './components/FullBleedPhoto'
import { Pillars } from './components/Pillars'
import { Approach } from './components/Approach'
import { HowItWorks } from './components/HowItWorks'
import { Quote } from './components/Quote'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <div className="bg-warm-white">
        <About />
        <FullBleedPhoto src="/lights_window.jpg" alt="Light through window" aspectRatio="2/1" />
        <Pillars />
        <FullBleedPhoto src="/textured_stone.jpg" alt="Textured stone" aspectRatio="5/2" />
        <Approach />
        <FullBleedPhoto src="/hands_interwined.jpg" alt="Hands intertwined" />
        </div>
        <HowItWorks />
        <div className="bg-warm-white">
        <Quote />
        <Team />
        <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
