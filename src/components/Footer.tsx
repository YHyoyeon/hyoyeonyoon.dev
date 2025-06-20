import { Heart, Mail, Phone } from "lucide-react";
import { PERSONAL_INFO } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">윤효연</h3>
            <p className="text-gray-400 text-sm">백엔드 개발자</p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{PERSONAL_INFO.EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} 윤효연. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Made with <Heart className="inline w-3 h-3 text-red-500" /> in
              Seoul
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-500 text-sm">
            <p>새로운 기회와 도전을 기다리고 있습니다. 언제든지 연락주세요!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
