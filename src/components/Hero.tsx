import { useState, useEffect } from 'react'

interface HeroProps {
  scrollProgress: number
}

const Hero = ({ scrollProgress }: HeroProps) => {
  const [currentStage, setCurrentStage] = useState(0)

  // Define the 6 stages based on scroll progress
  const stages = [
    { title: "MOXY", subtitle: "Software & Design Studio" },
    { title: "We build", subtitle: "for the web" },
    { title: "Engineered", subtitle: "Design" },
    { title: "Porto based", subtitle: "Studio" },
    { title: "Made with", subtitle: "Love" },
    { title: "Join our", subtitle: "Team" }
  ]

  useEffect(() => {
    const stage = Math.floor(scrollProgress * 6)
    setCurrentStage(Math.min(stage, 5))
  }, [scrollProgress])

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  const goToStage = (stageIndex: number) => {
    const targetScroll = (stageIndex / 6) * (document.documentElement.scrollHeight - window.innerHeight)
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fcff] via-[#fcfcfc] to-[#f4f4f4]">
        <div className="absolute inset-0 opacity-30">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 transition-all duration-1000 ease-in-out">
            {stages[currentStage].title}
          </h1>
          <p className="text-2xl md:text-4xl font-light text-gray-600 transition-all duration-1000 ease-in-out delay-300">
            {stages[currentStage].subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a
            href="/about"
            aria-label="We build for the web. Find out more."
            className="cta-button group relative inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-white/80 border-2 border-gray-300 rounded-full hover:bg-white hover:border-gray-400 backdrop-blur-sm transition-all duration-300"
          >
            <span className="relative z-10">Find Out More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </a>

          <a
            href="/team"
            aria-label="With love from Porto. Join the team."
            className="cta-button group relative inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-white/80 border-2 border-gray-300 rounded-full hover:bg-white hover:border-gray-400 backdrop-blur-sm transition-all duration-300"
          >
            <span className="relative z-10">join the team</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-yellow-50 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <ul className="flex flex-col space-y-4">
          {stages.map((stage, index) => (
            <li key={`${stage.title}-${stage.subtitle}`}>
              <button
                aria-label={`move to stage ${index + 1}`}
                onClick={() => goToStage(index)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index === currentStage
                    ? 'bg-gray-900 border-gray-900'
                    : 'bg-transparent border-gray-400 hover:border-gray-600'
                }`}
              >
                <span className="sr-only">Stage {index + 1}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 scroll-hint"
        >
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-px h-8 bg-gray-400" />
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
    </section>
  )
}

export default Hero
