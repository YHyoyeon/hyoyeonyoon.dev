import { Heart, Mail, Phone } from "lucide-react";
import { PERSONAL_INFO } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-yellow-400">
              윤효연
            </h3>
            <p className="text-gray-400 text-sm md:text-base">백엔드 개발자</p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm md:text-base text-gray-300">
              <div className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300">
                <Mail size={18} />
                <a href={`mailto:${PERSONAL_INFO.EMAIL}`} className="hover:underline">
                  {PERSONAL_INFO.EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm md:text-base">
              © {currentYear} 윤효연. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs md:text-sm mt-2 flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="inline w-3 h-3 md:w-4 md:h-4 text-red-500 animate-pulse" /> in
              Seoul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
