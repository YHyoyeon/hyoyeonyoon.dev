import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = ['Home', 'About', 'Work', 'Team', 'Contacts']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcfcfc]/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" aria-label="home" className="group">
              <div className="relative">
                <svg
                  width="145"
                  height="30"
                  viewBox="0 0 145 30"
                  className="text-gray-900 group-hover:text-gray-600 transition-colors duration-300"
                >
                  <text
                    x="0"
                    y="20"
                    fontSize="24"
                    fontWeight="700"
                    fill="currentColor"
                    fontFamily="Inter, sans-serif"
                  >
                    MOXY
                  </text>
                </svg>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className={`nav-link text-sm font-medium ${
                      link === 'Home' ? 'text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Join Us Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="/team#join-the-team"
              aria-label="join us"
              className="hidden md:inline-flex items-center px-6 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              Join Us
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-0.5 bg-gray-900 transition-all duration-300" />
              <div className="w-6 h-0.5 bg-gray-900 mt-1 transition-all duration-300" />
              <div className="w-6 h-0.5 bg-gray-900 mt-1 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="block text-sm font-medium text-gray-700 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/team#join-the-team"
                  className="inline-flex items-center px-6 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
