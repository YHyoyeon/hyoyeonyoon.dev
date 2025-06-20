const Footer = () => {
    const partnerLogos = [
      {
        name: 'FEEI',
        url: '/_build/documents/p2020.606855ca3af38ff.pdf',
        logo: (
          <svg width="69" height="21" viewBox="0 0 69 21" fill="currentColor">
            <text x="0" y="15" fontSize="12" fontWeight="600" fill="currentColor">
              FEEI
            </text>
          </svg>
        ),
      },
      {
        name: 'Norte2020',
        url: '/_build/documents/p2020.606855ca3af38ff.pdf',
        logo: (
          <svg width="42" height="21" viewBox="0 0 42 21" fill="currentColor">
            <text x="0" y="15" fontSize="10" fontWeight="600" fill="currentColor">
              Norte2020
            </text>
          </svg>
        ),
      },
      {
        name: 'Portugal2020',
        url: '/_build/documents/p2020.606855ca3af38ff.pdf',
        logo: (
          <svg width="69" height="21" viewBox="0 0 69 21" fill="currentColor">
            <text x="0" y="15" fontSize="10" fontWeight="600" fill="currentColor">
              Portugal2020
            </text>
          </svg>
        ),
      },
    ]
  
    return (
      <footer className="bg-[#fcfcfc] border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
              <div className="text-gray-600">
                2025 © madewithmoxy
              </div>
              <a
                href="/privacy-policy"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 underline decoration-1 underline-offset-2"
              >
                Privacy Policy
              </a>
            </div>
  
            {/* Partner Logos */}
            <div className="flex items-center space-x-6">
              {partnerLogos.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${partner.name} incentive information`}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                >
                  {partner.logo}
                </a>
              ))}
            </div>
          </div>
  
          {/* Bottom spacing */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="text-center text-sm text-gray-500">
              <p>Software & Design Studio based in Porto, Portugal</p>
              <p className="mt-2">Building beautiful experiences for the web</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  