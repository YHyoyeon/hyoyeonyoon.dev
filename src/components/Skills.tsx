import { motion } from "framer-motion";
import {
	Code,
	Database,
	Cloud,
	Server,
	Settings,
	Zap,
	Shield,
	GitBranch,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const Skills = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const skillCategories = [
		{
			title: "Backend Development",
			icon: Server,
			color: "blue",
			skills: [
				{ name: "TypeScript" },
				{ name: "Node.js" },
				{ name: "C#" },
				{ name: "ASP.NET Core" },
			],
		},
		{
			title: "Database & Cache",
			icon: Database,
			color: "green",
			skills: [
				{ name: "MySQL" },
				{ name: "Redis" },
				{ name: "MongoDB" },
				{ name: "MSSQL" },
			],
		},
		{
			title: "Cloud & DevOps",
			icon: Cloud,
			color: "orange",
			skills: [
				{ name: "AWS" },
				{ name: "Docker" },
				{ name: "Jenkins" },
				{ name: "GitHub Actions" },
				{ name: "Lambda" },
				{ name: "EC2" },
				{ name: "S3" },
				{ name: "Azure" },
			],
		},
		{
			title: "Testing & Quality",
			icon: Zap,
			color: "purple",
			skills: [
				{ name: "Jest" },
				{ name: "Supertest" },
				{ name: "Zod" },
				{ name: "Sinon" },
			],
		},
		{
			title: "Monitoring & Logging",
			icon: Settings,
			color: "indigo",
			skills: [
				{ name: "ELK" },
				{ name: "CloudWatch" },
				{ name: "Filebeat" },
				{ name: "PM2" },
			],
		},
		{
			title: "Frontend & Tools",
			icon: Code,
			color: "pink",
			skills: [
				{ name: "Git" },
				{ name: "Swagger" },
				{ name: "Data Studio" },
			],
		},
	];

	return (
		<section id="skills" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						기술 스택
					</h2>
				</motion.div>

				{/* Additional Info */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mt-8 mb-10 text-center"
				>
					<p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
						새로운 기술과 도구에 대한 학습을 멈추지 않고, 실무
						프로젝트에 적용하여 실질적인 경험을 쌓아왔습니다.
						<br />
						특히 AWS 클라우드 인프라와 DevOps 영역에서 지속적으로
						역량을 키워가고 있습니다.
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
							<div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden relative">
								{/* Category Header */}
								<div className="flex items-center gap-4 mb-8 relative z-10">
									<div
										className={`p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:shadow-2xl ${
											category.color === "blue"
												? "bg-blue-500"
												: category.color === "green"
													? "bg-green-500"
													: category.color ===
														  "orange"
														? "bg-orange-500"
														: category.color ===
															  "purple"
															? "bg-purple-500"
															: category.color ===
																  "indigo"
																? "bg-indigo-500"
																: category.color ===
																	  "pink"
																	? "bg-pink-500"
																	: "bg-gray-500"
										}`}
									>
										<category.icon className="w-7 h-7 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
										{category.title}
									</h3>
								</div>

								{/* Skills List */}
								<div className="grid grid-cols-2 gap-3 relative z-10">
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
												className={`group/skill relative overflow-hidden rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
													category.color === "blue"
														? "bg-blue-50 hover:bg-blue-100"
														: category.color ===
															  "green"
															? "bg-green-50 hover:bg-green-100"
															: category.color ===
																  "orange"
																? "bg-orange-50 hover:bg-orange-100"
																: category.color ===
																	  "purple"
																	? "bg-purple-50 hover:bg-purple-100"
																	: category.color ===
																		  "indigo"
																		? "bg-indigo-50 hover:bg-indigo-100"
																		: category.color ===
																			  "pink"
																			? "bg-pink-50 hover:bg-pink-100"
																			: "bg-gray-50 hover:bg-gray-100"
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
