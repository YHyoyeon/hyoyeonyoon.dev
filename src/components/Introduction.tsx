import { motion } from "framer-motion";
import {
	Code,
	Database,
	ExternalLink,
	Mail,
	Server,
	Github,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/resume";

interface HeroProps {
	scrollProgress: number;
}

const Introduction = ({ scrollProgress }: HeroProps) => {
	const handleContact = (type: "email" | "phone" | "blog" | "github") => {
		if (type === "email") {
			window.location.href = `mailto:${PERSONAL_INFO.EMAIL}`;
		} else if (type === "blog") {
			window.open(PERSONAL_INFO.BLOG_URL, "_blank");
		} else if (type === "github") {
			window.open("https://github.com/YHyoyeon", "_blank");
		}
	};

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden bg-terra-bg"
		>
			{/* Animated Background */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
			</div>

			{/* Floating Elements */}
			<motion.div
				animate={{ y: [0, -20, 0] }}
				transition={{
					duration: 6,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				className="absolute top-20 left-10 text-yellow-400/30"
			>
				<Code size={40} />
			</motion.div>
			<motion.div
				animate={{ y: [0, 20, 0] }}
				transition={{
					duration: 8,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				className="absolute top-40 right-20 text-yellow-300/30"
			>
				<Server size={40} />
			</motion.div>
			<motion.div
				animate={{ y: [0, -15, 0] }}
				transition={{
					duration: 7,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				className="absolute bottom-40 left-20 text-orange-400/30"
			>
				<Database size={40} />
			</motion.div>

			{/* Scroll Progress Bar */}
			<div className="fixed top-0 left-0 w-full h-1 z-50 bg-terra-panel">
				<motion.div
					className="h-full bg-terra-gold"
					style={{
						width: `${scrollProgress * 100}%`,
					}}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.6 }}
							className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full text-yellow-200 text-sm font-medium mb-6"
						>
							<span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
							백엔드 개발자
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.6 }}
							className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
						>
							안녕하세요,
							<br />
							<span className="text-yellow-300">
								윤효연
							</span>
							입니다
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.6 }}
							className="text-lg md:text-xl text-slate-200 leading-relaxed mb-10 max-w-2xl space-y-4"
						>
							<span className="block">
								확장 가능한 엔터프라이즈급 웹 애플리케이션 구축 경험이 풍부한 시니어 풀스택 엔지니어입니다.
							</span>
							<span className="block text-slate-300">
								성능 중심의 모노레포 솔루션 설계, 보안 인증 시스템 구현, 데이터 중심의 반응형 사용자 인터페이스 개발에 입증된 실적을 보유하고 있습니다.
							</span>
							<span className="block text-slate-200 font-medium">
								개발자 경험(DX) 최적화 및 CI/CD 파이프라인 효율화에 능숙합니다.
							</span>
						</motion.p>

						{/* Contact Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5, duration: 0.6 }}
							className="flex flex-col items-center lg:items-start gap-4 mb-8"
						>
							<button
								onClick={() => handleContact("email")}
								className="group flex items-center gap-3 px-8 py-4 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 active:scale-100"
							>
								<Mail size={20} className="group-hover:animate-bounce" />
								{PERSONAL_INFO.EMAIL}
							</button>
							<div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
								<button
									onClick={() => handleContact("blog")}
									className="group flex items-center gap-3 px-8 py-4 border-2 border-orange-400/50 text-orange-100 font-semibold rounded-xl hover:border-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 transition-all duration-300 backdrop-blur-sm"
								>
									<ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300" />
									블로그 보기
								</button>
								<button
									onClick={() => handleContact("github")}
									className="group flex items-center gap-3 px-8 py-4 border-2 border-orange-400/50 text-orange-100 font-semibold rounded-xl hover:border-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10 transition-all duration-300 backdrop-blur-sm"
								>
									<Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
									GitHub
								</button>
							</div>
						</motion.div>

						{/* Quick Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.6 }}
							className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm"
						/>
					</motion.div>

					{/* Right Content - Profile Card */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="flex justify-center lg:justify-end"
					>
						<motion.div
							initial={{ scale: 0, rotate: -180 }}
							animate={{ scale: 1, rotate: 0 }}
							transition={{
								delay: 0.4,
								duration: 0.8,
								type: "spring",
							}}
							className="relative"
						>
							{/* Main Profile Circle */}
							<div className="w-80 h-80 bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
								<div className="absolute inset-0 bg-yellow-400/20" />
								<span className="text-8xl font-bold text-white relative z-10">
									YHY
								</span>

								{/* Orbiting Elements */}
								<motion.div
									animate={{ rotate: 360 }}
									transition={{
										duration: 20,
										repeat: Number.POSITIVE_INFINITY,
										ease: "linear",
									}}
									className="absolute inset-0"
								>
									<div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
									<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full" />
									<div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-400 rounded-full" />
									<div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full" />
								</motion.div>
							</div>

							{/* Tech Stack Badges - New Design */}
							{/* TypeScript - Top */}
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.5,
									duration: 0.8,
									ease: "easeOut",
								}}
								className="absolute -top-8 left-1/2 transform -translate-x-1/2"
							>
								<div className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-xl border-2 border-orange-400/30">
									<span className="text-sm font-bold">
										TypeScript
									</span>
								</div>
							</motion.div>

							{/* Node.js - Bottom */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.7,
									duration: 0.8,
									ease: "easeOut",
								}}
								className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
							>
								<div className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-xl border-2 border-yellow-400/30">
									<span className="text-sm font-bold">
										Node.js
									</span>
								</div>
							</motion.div>

							{/* AWS - Right */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: 0.9,
									duration: 0.8,
									ease: "easeOut",
								}}
								className="absolute top-1/2 -right-8 transform -translate-y-1/2"
							>
								<div className="bg-orange-600 text-white px-4 py-2 rounded-full shadow-xl border-2 border-orange-500/30">
									<span className="text-sm font-bold">
										AWS
									</span>
								</div>
							</motion.div>

							{/* MySQL - Left */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: 1.1,
									duration: 0.8,
									ease: "easeOut",
								}}
								className="absolute top-1/2 -left-8 transform -translate-y-1/2"
							>
								<div className="bg-yellow-600 text-white px-4 py-2 rounded-full shadow-xl border-2 border-yellow-500/30">
									<span className="text-sm font-bold">
										MySQL
									</span>
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Introduction;
