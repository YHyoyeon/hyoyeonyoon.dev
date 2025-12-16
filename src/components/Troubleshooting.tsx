import { motion } from "framer-motion";
import {
	AlertCircle,
	CheckCircle2,
	Calendar,
	Lightbulb,
	Code,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { TROUBLESHOOTING_CASES } from "../data/troubleshooting";

const Troubleshooting = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section id="troubleshooting" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						주요 트러블슈팅
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						실제 운영 환경에서 발생한 기술적 문제들을 체계적으로 분석하고 해결한 사례들입니다.
					</p>
				</motion.div>

				<div className="space-y-8">
					{TROUBLESHOOTING_CASES.map((case_, caseIndex) => (
						<motion.div
							key={case_.id}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.8,
								delay: caseIndex * 0.15,
							}}
							className="bg-orange-50/30 rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
						>
							{/* Case Header */}
							<div className="bg-orange-600 p-6 text-white">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
									<div className="flex-1">
										<div className="flex items-center gap-3 mb-2">
											<AlertCircle className="w-6 h-6" />
											<h3 className="text-2xl font-bold">{case_.title}</h3>
										</div>
										<div className="flex items-center gap-2 text-orange-100">
											<Calendar className="w-4 h-4" />
											<span>{case_.date}</span>
										</div>
									</div>
								</div>
							</div>

							{/* Case Content */}
							<div className="p-8">
								{/* Problem */}
								<div className="mb-6">
									<h4 className="text-lg font-bold text-red-700 mb-3 flex items-center gap-2">
										<AlertCircle className="w-5 h-5" />
										문제 상황
									</h4>
									<div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
										<p className="text-gray-800 leading-relaxed">{case_.problem}</p>
									</div>
								</div>

								{/* Solution */}
								<div className="mb-6">
									<h4 className="text-lg font-bold text-green-700 mb-3 flex items-center gap-2">
										<Lightbulb className="w-5 h-5" />
										해결 방법
									</h4>
									<div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
										<p className="text-gray-800 leading-relaxed">{case_.solution}</p>
									</div>
								</div>

								{/* Technical Details */}
								{case_.technicalDetails && case_.technicalDetails.length > 0 && (
									<div className="mb-6">
										<h4 className="text-lg font-bold text-orange-700 mb-3 flex items-center gap-2">
											<Code className="w-5 h-5" />
											기술적 세부사항
										</h4>
										<div className="space-y-2">
											{case_.technicalDetails.map((detail, detailIndex) => (
												<div
													key={detailIndex}
													className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded-r-lg"
												>
													<p className="text-gray-800 text-sm leading-relaxed">
														{detail}
													</p>
												</div>
											))}
										</div>
									</div>
								)}

								{/* Result */}
								<div>
									<h4 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2">
										<CheckCircle2 className="w-5 h-5" />
										결과
									</h4>
									<div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
										<p className="text-gray-800 leading-relaxed font-medium">
											{case_.result}
										</p>
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

export default Troubleshooting;

