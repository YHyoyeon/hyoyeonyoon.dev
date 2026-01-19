import { motion } from "framer-motion";
import {
	Calendar,
	Code,
	Database,
	Cloud,
	CheckCircle2,
	ExternalLink,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "../data/projects";

import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
	const { language } = useLanguage();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section id="projects" className="py-20 md:py-24 lg:py-28 bg-orange-50/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
						<span className="text-orange-600">
							주요 프로젝트
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						실제 운영 환경에서 사용 중이거나 사용 예정인 프로젝트들입니다.
					</p>
				</motion.div>

				<div className="space-y-12">
					{PROJECTS.map((project, projectIndex) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.8,
								delay: projectIndex * 0.2,
							}}
							className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300"
						>
							{/* Project Header */}
							<div className="bg-orange-600 p-8 md:p-10 text-white">
								<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
									<div className="flex-1">
										<h3 className="text-2xl md:text-3xl font-bold mb-3">
											{project.title[language]}
										</h3>
										<div className="flex items-center gap-4 text-yellow-100">
											<div className="flex items-center gap-2">
												<Calendar className="w-5 h-5" />
												<span className="text-lg">{project.period}</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Project Content */}
							<div className="p-8 md:p-10">
								{/* Overview */}
								<div className="mb-10">
									<h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
										<div className="p-2 bg-orange-100 rounded-lg">
											<Code className="w-5 h-5 text-orange-600" />
										</div>
										프로젝트 개요
									</h4>
									<p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl">
										{project.overview[language]}
									</p>
								</div>

								{/* Achievements */}
								<div className="mb-10">
									<h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
										<div className="p-2 bg-yellow-100 rounded-lg">
											<CheckCircle2 className="w-5 h-5 text-yellow-600" />
										</div>
										주요 성과
									</h4>
									<div className="grid md:grid-cols-2 gap-4">
										{project.achievements.map((achievement, achievementIndex) => (
											<motion.div
												key={achievementIndex}
												initial={{ opacity: 0, y: 20 }}
												animate={inView ? { opacity: 1, y: 0 } : {}}
												transition={{
													duration: 0.5,
													delay:
														projectIndex * 0.2 +
														achievementIndex * 0.05,
												}}
												className="flex gap-3 p-5 bg-yellow-50 rounded-xl border-l-4 border-yellow-500 hover:shadow-md transition-shadow duration-300"
											>
												<CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
												<p className="text-gray-700 leading-relaxed text-sm md:text-base">
													{typeof achievement === 'string' ? achievement : achievement[language]}
												</p>
											</motion.div>
										))}
									</div>
								</div>

								{/* Highlights */}
								{project.highlights && project.highlights.length > 0 && (
									<div className="mb-8">
										<h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
											<ExternalLink className="w-6 h-6 text-orange-600" />
											핵심 하이라이트
										</h4>
										<div className="flex flex-wrap gap-3">
											{project.highlights.map((highlight, highlightIndex) => (
												<span
													key={highlightIndex}
													className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium border border-orange-200"
												>
													{typeof highlight === 'string' ? highlight : highlight[language]}
												</span>
											))}
										</div>
									</div>
								)}

								{/* Technologies */}
								<div>
									<h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
										<div className="p-2 bg-orange-100 rounded-lg">
											<Database className="w-5 h-5 text-orange-600" />
										</div>
										기술 스택
									</h4>
									<div className="flex flex-wrap gap-2.5">
										{project.technologies.map((tech, techIndex) => (
											<motion.span
												key={tech}
												initial={{ opacity: 0, scale: 0.8 }}
												animate={inView ? { opacity: 1, scale: 1 } : {}}
												transition={{
													duration: 0.3,
													delay: projectIndex * 0.2 + techIndex * 0.03,
												}}
												className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-orange-800 rounded-lg text-sm font-medium border border-yellow-200 hover:border-yellow-300 hover:shadow-sm transition-all duration-200"
											>
												<div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
												{tech}
											</motion.span>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;

