import './App.css'
import { motion } from "motion/react"
import { ContactModal } from './components/contact-modal/ContactModal'
import { useState } from 'react'
import { Logo } from './components/logo/logo'


function App() {
  const [open, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(!open)
  }
  return (
    <>
      <div className="header">
        <Logo />
        <h1 className="logo">RegExperten.</h1>
      </div>
      <div className='hero'>
        <motion.div className='content' animate={{ y: -45 }} transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 0,
          repeatDelay: 10
        }}>
          <span>Nostra peritia, Tua successus</span>
          <motion.span animate={{ opacity: [0, 0.5, 1] }} transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0, 0.8, 1],
            repeat: 0,
            repeatDelay: 40

          }}>– CITO –</motion.span>
        </motion.div>
      </div>
      <div className='yellow'>
        <div className='usp'>
          <h2>Regexperten – Vi driver framtidens innovation</h2>
          <p>På Regexperten strävar vi efter att omforma landskapet i det högteknologiska samhället. Vår passion är att förena innovation och expertis för att skapa lösningar som inte bara möter dagens behov, utan även banar väg för morgondagens framgångar.</p>
        </div>
      </div>
      <div className='blue'>
        <div className='usp'>
          <h3>Ord och inga visor</h3>
          <p> När vi säger saker som att "We reshape our future to something better we know that we deserve.", gör vi det med djup förståelse och ett tydligt syfte. Vi vet vad varje ord betyder, och vi vet hur man förvandlar vision till verklighet. För oss handlar det inte bara om att säga rätt saker – det handlar om att bygga, koda och skapa den förändring som verkligen gör skillnad.</p>
        </div>
      </div>
      <div className='black'>
        <div className="usp">
          <h3>Innovation – Vår verklighet</h3>
          <p>Regexperten ser bortom hypen och rakt in i kärnan av vad som gör dessa teknologier revolutionerande. Vi bygger lösningar som skapar dynamiska AI-drivna NFT:er, optimerar blockchain-integrationer och öppnar dörrar till nya affärsmodeller och kreativa möjligheter.</p>
          <p>Det är här vi har hittat sweetspoten – balansen mellan AI, crypto och NFT:er. Där intelligens, säkerhet och äganderätt förenas för att forma framtiden.</p>
        </div>
      </div>
      <footer className='footer red'>
        <div className='usp'>
          <Logo />
          <div>
            <h4>Känns det rätt för dig, känns det ännu bättre för oss!</h4>
            <p>Tveka inte att kontakta oss – vi ser fram emot att höra din röst!</p>
            <button type="button" className='cta-btn' onClick={handleModal}>Kontakta oss</button>
          </div>
          <span>© all rights reserved RegExperten. 2024</span>
        </div>


      </footer>
      <ContactModal open={open} onClose={handleModal} />
    </>
  )
}

export default App



