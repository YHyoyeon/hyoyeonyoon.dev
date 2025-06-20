import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { SECTIONS } from "../utils/constants";

const NavigationButtons = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showUpButton, setShowUpButton] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const sections = SECTIONS;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 페이지 하단에 도달했는지 확인
      const isBottom = scrollY + windowHeight >= documentHeight - 100;
      setIsAtBottom(isBottom);

      // 현재 섹션 계산 (더 정확한 로직)
      const sectionElements = sections.map((id) => document.getElementById(id));
      let currentSectionIndex = 0;

      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          // 섹션의 상단이 화면 중앙보다 위에 있으면 해당 섹션으로 인식
          if (rect.top <= windowHeight * 0.3) {
            currentSectionIndex = i;
          }
        }
      }

      setCurrentSection(currentSectionIndex);

      // 위로 가기 버튼 표시 여부 (첫 번째 섹션 이후부터)
      setShowUpButton(scrollY > windowHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (direction: "up" | "down") => {
    let targetSection: string;

    if (direction === "down") {
      const nextIndex = Math.min(currentSection + 1, sections.length - 1);
      targetSection = sections[nextIndex];
    } else {
      const prevIndex = Math.max(currentSection - 1, 0);
      targetSection = sections[prevIndex];
    }

    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 다음 섹션으로 가기 버튼 표시 조건
  const showDownButton = currentSection < sections.length - 1 && !isAtBottom;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2">
      {/* 위로 가기 버튼 */}
      {showUpButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="bg-blue-600/90 text-white hover:bg-blue-700 hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-full shadow-lg"
          aria-label="페이지 상단으로 이동"
        >
          <ChevronUp size={16} />
        </motion.button>
      )}

      {/* 다음 섹션으로 가기 버튼 */}
      {showDownButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => scrollToSection("down")}
          className="bg-indigo-600/90 text-white hover:bg-indigo-700 hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-full shadow-lg"
          aria-label="다음 섹션으로 이동"
        >
          <ChevronDown size={16} />
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButtons;
