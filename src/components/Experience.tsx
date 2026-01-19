import { motion } from "framer-motion";
import {
	Building2,
	Calendar,
	Cloud,
	Code,
	Database,
	MapPin,
	Settings,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import {
	calculateDuration,
	getSoftnixDuration,
	getTotalExperience,
} from "../utils/dateUtils";
import { CAREER } from "../data/resume";

const Experience = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	// 총 경력 계산
	const totalExperience = getTotalExperience();

	// 소프트닉스 재직 기간
	const softnixDuration = getSoftnixDuration();

	const experiences = [
		{
			company: CAREER.COMPANY,
			position: "백엔드 개발자",
			period: `재직중 (${softnixDuration})`,
			location: "서울",
			description:
				"엔터프라이즈 서버 포털은 대규모 소프트웨어 생태계를 위한 사용자 인증, 빌링, 시스템 관리를 통합하는 정교한 웹 애플리케이션 모음입니다. 모던 모노레포 아키텍처를 기반으로 구축되어 관리자 대시보드, 사용자 포털, 인증 서비스를 단일의 응집력 있는 코드베이스로 통합했습니다.",
			achievements: [
				{
					title: "아키텍처 및 확장성",
					description:
						"pnpm workspace와 Turborepo를 활용한 확장 가능한 모노레포 아키텍처 설계 (빌드 시간 40% 단축) 및 모듈화",
					icon: Settings,
				},
				{
					title: "관리자 대시보드",
					description:
						"Next.js 15, React 19 기반의 실시간 데이터 시각화(ApexCharts, Vector Maps) 관리자 대시보드 구축",
					icon: Code,
				},
				{
					title: "인증 UI 개발",
					description:
						"SSR 및 i18next(다국어) 지원이 포함된 고성능 인증 UI 개발",
					icon: Code,
				},
				{
					title: "디자인 시스템",
					description:
						"Tailwind CSS v4, Radix UI를 활용한 반응형/접근성 높은 디자인 시스템 도입",
					icon: Code,
				},
				{
					title: "중앙화된 인증 서비스",
					description:
						"OAuth2, JWT, 다중 로그인 전략을 지원하는 중앙화된 인증 서비스 개발",
					icon: Settings,
				},
				{
					title: "의존성 주입(DI)",
					description:
						"백엔드 코어에 InversifyJS를 이용한 의존성 주입 구현으로 테스트 용이성 확보",
					icon: Settings,
				},
				{
					title: "RBAC 보안",
					description:
						"Express.js 마이크로서비스 보호를 위한 역할 기반 접근 제어 미들웨어 구현",
					icon: Settings,
				},
				{
					title: "AWS 및 Redis 통합",
					description:
						"AWS SES(이메일), Redis(세션/캐시) 통합으로 시스템 안정성 확보",
					icon: Cloud,
				},
				{
					title: "DX 최적화",
					description:
						"ESLint, Prettier, Husky, Dependency Cruiser 도입으로 코드 품질 및 아키텍처 관리",
					icon: Settings,
				},
			],
			technologies: [
				"Next.js 15",
				"React 19",
				"Tailwind CSS v4",
				"Radix UI",
				"Node.js",
				"Express.js",
				"InversifyJS",
				"TypeScript",
				"MySQL",
				"Redis",
				"AWS",
				"Docker & Turborepo",
				"Dependency Cruiser",
				"ApexCharts",
				"TanStack Table",
			],
		},
		{
			company: "㈜콰가(quaggainc.)",
			position: "개발팀 사원/팀원",
			period: `2022.03 ~ 2022.12 (${calculateDuration("2022-03-01", "2022-12-31")})`,
			location: "서울",
			description:
				"블록체인 지갑 서비스 및 결제 모듈 개발에 필요한 API를 .NET으로 개발하였습니다.",
			achievements: [
				{
					title: "백엔드 API 개발",
					description:
						"관리자 결제 차트, 회원/기업 정보, 결제/ Coin Swap API 개발 및 보증 거래 기능 구현",
					icon: Code,
				},
				{
					title: "Google API 연동",
					description:
						"Google Mail API와 Push API를 활용한 메일 정보 확인 API 및 호출용 라이브러리 제작",
					icon: Settings,
				},
				{
					title: "이미지 파일 관리",
					description:
						"이미지 손실 압축 및 Azure File 라이브러리를 활용하여 파일 CRUD 기능을 제공하는 라이브러리 개발",
					icon: Database,
				},
				{
					title: "프로젝트 리팩토링",
					description:
						"로그인 토큰 관련 버그 수정, Swagger API 문서 추가, SVN에서 Git으로 버전 관리 시스템 전환",
					icon: Code,
				},
				{
					title: "데이터 처리 시스템 개발",
					description:
						"MongoDB와 LINQ를 활용해 채팅, 게시글 즐겨찾기/랭킹 기능 및 스케줄러 시스템 구현",
					icon: Database,
				},
			],
			technologies: [
				"C#",
				"ASP.NET Core",
				"MongoDB",
				"MSSQL",
				"Azure",
				"SVN",
				"Git",
				"Swagger",
				"LINQ",
				"Google API",
			],
		},
	];

	return (
		<section id="experience" className="py-20 md:py-24 lg:py-28 bg-orange-50/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Career Summary */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="my-24 relative"
				>
					{/* Simple gradient background */}
					<div className="bg-orange-500 rounded-2xl p-8 lg:p-12">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="text-center mb-8"
						>
							<h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
								경력 요약
							</h3>
						</motion.div>

						<div className="grid md:grid-cols-3 gap-8">
							{/* Total Experience */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.6 }}
								className="text-center"
							>
								<div className="text-3xl lg:text-4xl font-bold text-white mb-2">
									{totalExperience}
								</div>
								<div className="text-yellow-100">총 경력</div>
							</motion.div>

							{/* Companies */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 0.8 }}
								className="text-center"
							>
								<div className="text-3xl lg:text-4xl font-bold text-white mb-2">
									2개사
								</div>
								<div className="text-yellow-100">근무 회사</div>
							</motion.div>

							{/* Projects */}
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.6, delay: 1.0 }}
								className="text-center"
							>
								<div className="text-3xl lg:text-4xl font-bold text-white mb-2">
									15+
								</div>
								<div className="text-yellow-100">
									주요 프로젝트
								</div>
							</motion.div>
						</div>
					</div>
				</motion.div>

				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
						<span className="text-orange-600">
							Work Experience
						</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						{totalExperience}간 다양한 프로젝트를 통해 백엔드 개발
						역량을 키워왔습니다.
						<br className="hidden md:block" />
						<span className="md:hidden"> </span>
						각 회사에서 담당한 주요 프로젝트와 성과를
						소개합니다.
					</p>
				</motion.div>

				<div className="space-y-12">
					{experiences.map((exp, expIndex) => (
						<motion.div
							key={exp.company}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.8,
								delay: expIndex * 0.2,
							}}
							className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300"
						>
							{/* Company Header */}
							<div className="bg-orange-600 p-8 md:p-10 text-white">
								<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
									<div>
										<div className="flex items-center gap-3 mb-2">
											<Building2 className="w-6 h-6" />
											<h3 className="text-2xl font-bold">
												{exp.company}
											</h3>
										</div>
										<p className="text-xl text-yellow-100 mb-2">
											{exp.position}
										</p>
										<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-yellow-200">
											<div className="flex items-center gap-2">
												<Calendar className="w-4 h-4" />
												<span>{exp.period}</span>
											</div>
											<div className="flex items-center gap-2">
												<MapPin className="w-4 h-4" />
												<span>{exp.location}</span>
											</div>
										</div>
									</div>
									<div className="flex flex-wrap gap-2">
										{exp.technologies
											.slice(0, 6)
											.map((tech, techIndex) => (
												<span
													key={tech}
													className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full"
												>
													{tech}
												</span>
											))}
										{exp.technologies.length > 6 && (
											<span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
												+{exp.technologies.length - 6}
											</span>
										)}
									</div>
								</div>
							</div>

							{/* Company Content */}
							<div className="p-8 md:p-10">
								<p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 max-w-4xl">
									{exp.description}
								</p>

								{/* Achievements */}
								<div className="mb-10">
									<h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
										<span className="w-1 h-6 bg-orange-500 rounded-full"></span>
										주요 성과
									</h4>
									<div className="grid md:grid-cols-2 gap-4">
										{exp.achievements.map(
											(achievement, achievementIndex) => (
												<motion.div
													key={achievement.title}
													initial={{
														opacity: 0,
														y: 20,
													}}
													animate={
														inView
															? {
																opacity: 1,
																y: 0,
															}
															: {}
													}
													transition={{
														duration: 0.5,
														delay:
															expIndex * 0.2 +
															achievementIndex *
															0.05,
													}}
													className="group flex gap-4 p-5 bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-xl hover:shadow-md border border-gray-100 hover:border-orange-200 transition-all duration-300"
												>
													<div className="flex-shrink-0">
														<div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
															<achievement.icon className="w-5 h-5 text-orange-600" />
														</div>
													</div>
													<div className="flex-1 min-w-0">
														<h5 className="font-semibold text-gray-900 mb-2 text-base">
															{achievement.title}
														</h5>
														<p className="text-gray-600 text-sm leading-relaxed">
															{
																achievement.description
															}
														</p>
													</div>
												</motion.div>
											)
										)}
									</div>
								</div>

								{/* Project Links & Technologies */}
								<div
									className={`grid gap-8 ${exp.company === "㈜소프트닉스" ? "lg:grid-cols-2" : ""}`}
								>
									{/* Technologies */}
									<div>
										<h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
											<span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
											사용 기술
										</h4>
										<div className="flex flex-wrap gap-2.5">
											{exp.technologies.map(
												(tech, techIndex) => (
													<motion.span
														key={tech}
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
															duration: 0.3,
															delay:
																expIndex * 0.2 +
																techIndex *
																0.03,
														}}
														className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-orange-800 rounded-lg text-sm font-medium border border-yellow-200 hover:border-yellow-300 hover:shadow-sm transition-all duration-200"
													>
														<div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
														{tech}
													</motion.span>
												)
											)}
										</div>
									</div>

									{/* Project Links - Only for Softnix */}
									{exp.company === CAREER.COMPANY && (
										<div>
											<h4 className="text-xl font-bold text-gray-900 mb-6">
												프로젝트 링크
											</h4>
											<div className="space-y-3">
												<a
													href="https://kingdomheroeswar.io/"
													target="_blank"
													rel="noreferrer noopener"
													className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all duration-300 border border-orange-200 hover:border-orange-300"
												>
													<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
													<div>
														<div className="font-semibold text-gray-900">
															마켓플레이스
														</div>
														<div className="text-sm text-gray-600">
															Kingdom Heroes War
														</div>
													</div>
													<div className="ml-auto">
														<svg
															className="w-5 h-5 text-orange-600"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
															/>
														</svg>
													</div>
												</a>
												<a
													href="https://reboot.kingdom-story.com/"
													target="_blank"
													rel="noreferrer noopener"
													className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-all duration-300 border border-yellow-200 hover:border-yellow-300"
												>
													<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
													<div>
														<div className="font-semibold text-gray-900">
															사전예약 페이지
														</div>
														<div className="text-sm text-gray-600">
															Kingdom Story Reboot
														</div>
													</div>
													<div className="ml-auto">
														<svg
															className="w-5 h-5 text-yellow-600"
															fill="none"
															stroke="currentColor"
															viewBox="0 0 24 24"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
															/>
														</svg>
													</div>
												</a>
											</div>
										</div>
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

export default Experience;
