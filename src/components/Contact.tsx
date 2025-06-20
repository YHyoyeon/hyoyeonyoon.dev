import { motion } from "framer-motion";
import { Globe, Mail, Send, User } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { PERSONAL_INFO } from "../utils/constants";

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
			color: "from-blue-500 to-cyan-500",
			bgColor: "from-blue-50 to-cyan-50",
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
			className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
			</div>

			{/* Floating Elements */}
			<div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
			<div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl" />
			<div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-lg" />

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={inView ? { scale: 1 } : {}}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6"
					>
						<User className="w-8 h-8 text-white" />
					</motion.div>
					<h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 bg-clip-text text-transparent">
						Contact Me
					</h2>
					<p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
						새로운 기회와 도전을 기다리고 있습니다.
						<br />
						언제든지 연락주세요!
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16 items-start">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="space-y-6"
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
									className={`bg-gradient-to-br ${info.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10`}
								>
									<div className="flex items-start gap-6">
										<div
											className={`p-4 bg-gradient-to-r ${info.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
										>
											<info.icon className="w-6 h-6 text-white" />
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												{info.title}
											</h3>
											<p className="text-gray-700 text-lg font-medium mb-2">
												{info.value}
											</p>
											<p className="text-gray-600 text-sm">
												{info.description}
											</p>
											{info.title === "이메일" && (
												<button
													onClick={info.action}
													className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
												>
													<Send size={16} />
													연락하기
												</button>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					{/* Status Card */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={inView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="space-y-8"
					>
						{/* Availability Status */}
						<div className="bg-gradient-to-br from-emerald-50 to-green-50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/50 shadow-xl">
							<div className="text-center">
								<motion.div
									initial={{ scale: 0 }}
									animate={inView ? { scale: 1 } : {}}
									transition={{ delay: 0.6, duration: 0.5 }}
									className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
								>
									<Globe className="w-8 h-8 text-white" />
								</motion.div>
								<h3 className="text-2xl font-bold text-gray-900 mb-3">
									구직 상태
								</h3>
								<div className="flex items-center justify-center gap-2 mb-4">
									<div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
									<span className="text-emerald-700 font-semibold">
										열린 기회를 찾고 있습니다
									</span>
								</div>
								<p className="text-gray-600 leading-relaxed">
									새로운 도전과 성장 기회를 기다리고 있습니다.
									<br />
									백엔드 개발부터 인프라, DevOps까지 폭넓은
									경험을 바탕으로
									<br />
									귀사의 프로젝트에 기여할 수 있습니다.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
