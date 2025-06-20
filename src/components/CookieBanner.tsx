import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex-1 text-sm text-gray-700 text-center md:text-left">
            This website uses cookies to improve your navigation experience. By
            continuing to browse the website you are accepting our{" "}
            <a
              href="/privacy-policy#cookie-policy"
              className="text-gray-900 underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors duration-300"
            >
              Cookie Policy
            </a>{" "}
            and{" "}
            <a
              href="/privacy-policy"
              className="text-gray-900 underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            .
          </div>

          <button
            onClick={handleAccept}
            className="flex-shrink-0 ml-4 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
            aria-label="Accept cookies and close banner"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
