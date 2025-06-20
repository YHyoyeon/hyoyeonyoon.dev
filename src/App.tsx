import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App min-h-screen bg-[#fcfcfc]">
      <Header />
      <main>
        <Hero scrollProgress={scrollProgress} />
        <SocialSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
