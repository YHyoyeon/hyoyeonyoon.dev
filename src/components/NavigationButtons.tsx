import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

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
		</div>
	);
};

export default NavigationButtons;
