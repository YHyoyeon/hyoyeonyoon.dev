import { motion } from "framer-motion";
import {
	Code,
	Database,
	Cloud,
	Server,
	Settings,
	Zap,
	Shield,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { TECHNOLOGY_CATEGORIES } from "../data/technologies";

const Skills = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// Icon mapping
	const iconMap: Record<string, typeof Server> = {
		Server,
		Database,
		Cloud,
		Shield,
		Zap,
		Settings,
		Code,
	};

	const skillCategories = TECHNOLOGY_CATEGORIES.map((category) => ({
		...category,
		icon: iconMap[category.icon] || Code,
		skills: category.skills.map((skill) => ({ name: skill })),
	}));

	return (
		<section id="skills" className="py-20 md:py-24 lg:py-28 bg-orange-50/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
						<span className="text-orange-600">
							기술 스택
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
						새로운 기술과 도구를 지속적으로 학습하고 실무 프로젝트에 적용해왔습니다.
						<br className="hidden md:block" />
						<span className="md:hidden"> </span>
						AWS 클라우드 인프라와 DevOps 영역에서 경험을 쌓고 있습니다.
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.6,
								delay: categoryIndex * 0.1,
							}}
							className="group"
						>
							<div className="bg-white rounded-3xl p-6 md:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:scale-[1.02] overflow-hidden relative">
								{/* Category Header */}
								<div className="flex items-center gap-4 mb-6 relative z-10">
									<div
										className={`p-3 md:p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-2xl ${
											category.color === "blue" || category.color === "purple" || category.color === "pink"
												? "bg-orange-500"
												: category.color === "green" || category.color === "indigo" || category.color === "cyan"
													? "bg-yellow-500"
													: category.color === "orange"
														? "bg-orange-600"
														: "bg-orange-500"
										}`}
									>
										<category.icon className="w-7 h-7 text-white" />
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
										{category.title}
									</h3>
								</div>

								{/* Skills List */}
								<div className="grid grid-cols-2 gap-2.5 md:gap-3 relative z-10">
									{category.skills.map(
										(skill, skillIndex) => (
											<motion.div
												key={skill.name}
												initial={{
													opacity: 0,
													scale: 0.8,
												}}
												animate={
													inView
														? {
																opacity: 1,
																scale: 1,
															}
														: {}
												}
												transition={{
													duration: 0.4,
													delay:
														categoryIndex * 0.1 +
														skillIndex * 0.05,
												}}
												className={`group/skill relative overflow-hidden rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
													category.color === "blue" || category.color === "purple" || category.color === "pink"
														? "bg-orange-50 hover:bg-orange-100"
														: category.color === "green" || category.color === "indigo" || category.color === "cyan"
															? "bg-yellow-50 hover:bg-yellow-100"
															: category.color === "orange"
																? "bg-orange-50 hover:bg-orange-100"
																: "bg-orange-50 hover:bg-orange-100"
												}`}
											>
												<span className="text-sm font-semibold text-gray-700 relative z-10 group-hover/skill:text-gray-900 transition-colors duration-300">
													{skill.name}
												</span>
											</motion.div>
										)
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
