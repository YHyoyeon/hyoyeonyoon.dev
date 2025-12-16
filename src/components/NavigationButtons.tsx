import { motion } from "framer-motion";
import { ChevronUp, Home } from "lucide-react";
import { useEffect, useState } from "react";

const SECTIONS = [
	{ id: "hero", label: "소개" },
	{ id: "experience", label: "경력" },
	{ id: "projects", label: "프로젝트" },
	{ id: "skills", label: "기술" },
	{ id: "troubleshooting", label: "트러블슈팅" },
	{ id: "contact", label: "연락" },
];

const NavigationButtons = () => {
	const [showUpButton, setShowUpButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			// 위로 가기 버튼 표시 여부 (첫 번째 섹션 이후부터)
			setShowUpButton(scrollY > windowHeight * 0.5);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col gap-2">
			{/* 섹션 네비게이션 */}
			<div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
				{SECTIONS.map((section) => (
					<button
						key={section.id}
						onClick={() => scrollToSection(section.id)}
						className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all duration-200"
						aria-label={`${section.label} 섹션으로 이동`}
					>
						{section.label}
					</button>
				))}
			</div>

			{/* 위로 가기 버튼 */}
			{showUpButton && (
				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					onClick={scrollToTop}
					className="bg-orange-600/90 text-white hover:bg-orange-700 hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-full shadow-lg"
					aria-label="페이지 상단으로 이동"
				>
					<ChevronUp size={16} />
				</motion.button>
			)}
		</div>
	);
};

export default NavigationButtons;
