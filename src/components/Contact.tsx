import { motion } from "framer-motion";
import { Globe, Mail, Send, User } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { PERSONAL_INFO } from "../data/resume";

const Contact = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const contactInfo = [
		{
			icon: Mail,
			title: "이메일",
			value: PERSONAL_INFO.EMAIL,
			action: () => {
				window.location.href = `mailto:${PERSONAL_INFO.EMAIL}`;
			},
			description: "업무 문의 및 협업 제안",
			color: "bg-yellow-500",
			bgColor: "bg-yellow-50",
		},
	];

	const handleSendEmail = () => {
		const subject = encodeURIComponent("윤효연님께 - 업무 문의");
		const body = encodeURIComponent(`안녕하세요, 윤효연님

귀하의 이력서를 보고 연락드립니다.

[회사명/프로젝트명]
[문의 내용]

감사합니다.`);

		window.location.href = `mailto:${PERSONAL_INFO.EMAIL}?subject=${subject}&body=${body}`;
	};

	return (
		<section
			id="contact"
			className="py-20 md:py-24 lg:py-28 bg-orange-700 relative overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
			</div>

			{/* Floating Elements */}
			<div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl" />
			<div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl" />
			<div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-lg" />

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16 md:mb-20"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={inView ? { scale: 1 } : {}}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-2xl mb-6 shadow-xl"
					>
						<User className="w-8 h-8 md:w-10 md:h-10 text-white" />
					</motion.div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
						<span className="text-yellow-300">
							Contact Me
						</span>
					</h2>
					<p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
						개발 관련 이야기나 기술적인 질문이 있으시면 연락주세요
					</p>
				</motion.div>

				<div className="flex flex-col items-center">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="w-full max-w-2xl"
					>
						{contactInfo.map((info, index) => (
							<motion.div
								key={info.title}
								initial={{ opacity: 0, y: 30 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: 0.4 + index * 0.1,
								}}
								className="group relative"
							>
								<div
									className={`${info.bgColor} backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-orange-200 hover:border-orange-300 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20`}
								>
									<div className="flex flex-col md:flex-row items-start gap-6">
										<div
											className={`p-4 ${info.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
										>
											<info.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
										</div>
										<div className="flex-1 w-full">
											<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
												{info.title}
											</h3>
											<p className="text-gray-700 text-base md:text-lg font-medium mb-2 break-all">
												{info.value}
											</p>
											<p className="text-gray-600 text-sm md:text-base mb-4">
												{info.description}
											</p>
											{info.title === "이메일" && (
												<div className="flex justify-center md:justify-start">
													<button
														onClick={info.action}
														className="group inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100"
													>
														<Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
														연락하기
													</button>
												</div>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
