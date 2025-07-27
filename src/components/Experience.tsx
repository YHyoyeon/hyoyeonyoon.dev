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
			company: "㈜소프트닉스",
			position: "백엔드팀 사원/팀원",
			period: `재직중 (${softnixDuration})`,
			location: "서울",
			description:
				"유저가 게임에서 생성한 NFT를 거래할 수 있는 NFT Marketplace와 백오피스 시스템을 NodeJs + typescript로 개발하고, 프로젝트의 인프라 구축을 담당하여 AWS 기반 클라우드 아키텍처 설계부터 CI/CD 파이프라인 구축까지 담당하고 있습니다.",
			achievements: [
				{
					title: "NFT 마켓 API 개발",
					description:
						"상품 등록/구매, 거래 내역 그래프 등 nft 거래에 필요한 api 개발",
					icon: Code,
				},
				{
					title: "백오피스 시스템 개발",
					description:
						"Node.js와 React로 NFT 마켓 백오피스 개발. 대시보드(지표 차트), 거래내역 등 로그 확인, 운영자 관리, 점검 제어, 마켓 아이템 제어 등 운영 시스템 구축",
					icon: Settings,
				},
				{
					title: "테스트 자동화",
					description:
						"Jest, Supertest, Sinon, Zod를 활용하여 통합 테스트를 구축",
					icon: Code,
				},
				{
					title: "로그 모니터링",
					description:
						"Filebeat와 ELK 스택으로 실시간 로그 확인 시스템을 개발하고, AWS CloudWatch, Chatbot, SNS와 연동",
					icon: Cloud,
				},
				{
					title: "Redis 활용",
					description: "이벤트 랭킹 및 통계 페이지를 Redis로 구현",
					icon: Database,
				},
				{
					title: "CICD 구축",
					description:
						"GitHub Actions와 Jenkins로 빌드 자동화를 구현하고, AWS CodeDeploy로 CI/CD 파이프라인을 구축해 배포 프로세스를 최적화",
					icon: Cloud,
				},
				{
					title: "Lambda 활용",
					description:
						"AWS MemoryDB와 serverless NPM 패키지, Lambda를 기반으로 사전 예약 페이지를 개발",
					icon: Code,
				},
				{
					title: "사전예약 대량 메일 전송 시스템",
					description:
						"memorydb와 ses, lambda를 활용하여 약 12000건의 메일을 전송 후 cloudwatch를 통해 성공/실패 분석",
					icon: Cloud,
				},
				{
					title: "AI를 활용한 프론트 백업",
					description:
						"거래 프로세스 개선 프로젝트에서 일감 관리, QA 부분적인 리딩을 맡고, 일정을 위해 AI를 활용하여 리액트 프로젝트의 기능 및 UI 수정 백업",
					icon: Settings,
				},
				{
					title: "성과관리지표",
					description: "Looker Studio(Data Studio)를 통한 KPI 작성",
					icon: Settings,
				},
				{
					title: "프로젝트 인프라 구축",
					description:
						"PORTAL 프로젝트를 포함하여 dev/qa/live 환경 AWS VPC, EC2, ECR, S3, CloudFront, WAF 등 클라우드 인프라 구축",
					icon: Cloud,
				},
				{
					title: "CI/CD 파이프라인 구축",
					description:
						"Jenkins와 GitHub Actions를 활용한 dev/qa/live 환경 분리 및 자동화된 배포 파이프라인 구축",
					icon: Settings,
				},
				{
					title: "컨테이너 환경 구축",
					description:
						"Docker 기반 Web API, MySQL, Redis, ELK 스택 컨테이너화 및 PM2 로그 로테이션 설정",
					icon: Database,
				},
				{
					title: "보안 및 모니터링 시스템",
					description:
						"WAF 설정, Lambda 기반 알림 시스템, ELK 스택 로그 모니터링",
					icon: Cloud,
				},
			],
			technologies: [
				"TypeScript",
				"Node.js",
				"MySQL",
				"Redis",
				"AWS",
				"Docker",
				"Jenkins",
				"GitHub Actions",
				"Lambda",
				"ELK",
				"Jest",
				"Supertest",
				"Zod",
				"Sinon",
				"MemoryDB",
				"React",
				"Data Studio",
				"VPC",
				"EC2",
				"ECR",
				"S3",
				"CloudFront",
				"WAF",
				"PM2",
				"Filebeat",
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
		<section id="experience" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Career Summary */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="my-24 relative"
				>
					{/* Simple gradient background */}
					<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12">
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
								<div className="text-blue-100">총 경력</div>
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
								<div className="text-blue-100">근무 회사</div>
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
								<div className="text-blue-100">
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
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Work Experience
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						{totalExperience}간 다양한 프로젝트를 통해 백엔드 개발
						역량을 키워왔습니다.
						<br />각 회사에서 담당한 주요 프로젝트와 성과를
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
							className="bg-white rounded-2xl shadow-lg overflow-hidden"
						>
							{/* Company Header */}
							<div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
								<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
									<div>
										<div className="flex items-center gap-3 mb-2">
											<Building2 className="w-6 h-6" />
											<h3 className="text-2xl font-bold">
												{exp.company}
											</h3>
										</div>
										<p className="text-xl text-blue-100 mb-2">
											{exp.position}
										</p>
										<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-blue-200">
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
							<div className="p-8">
								<p className="text-gray-700 text-lg leading-relaxed mb-8">
									{exp.description}
								</p>

								{/* Achievements */}
								<div className="mb-8">
									<h4 className="text-xl font-bold text-gray-900 mb-6">
										주요 성과
									</h4>
									<div className="space-y-4">
										{exp.achievements.map(
											(achievement, achievementIndex) => (
												<motion.div
													key={achievement.title}
													initial={{
														opacity: 0,
														x: -20,
													}}
													animate={
														inView
															? {
																	opacity: 1,
																	x: 0,
																}
															: {}
													}
													transition={{
														duration: 0.5,
														delay:
															expIndex * 0.2 +
															achievementIndex *
																0.1,
													}}
													className="flex gap-4 p-4 bg-gray-50 rounded-lg"
												>
													<achievement.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
													<div>
														<h5 className="font-semibold text-gray-900 mb-1">
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
										<h4 className="text-xl font-bold text-gray-900 mb-6">
											사용 기술
										</h4>
										<div className="grid grid-cols-2 gap-3">
											{exp.technologies.map(
												(tech, techIndex) => (
													<motion.div
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
																	0.05,
														}}
														className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg"
													>
														<div className="w-2 h-2 bg-blue-600 rounded-full" />
														<span className="text-gray-700 font-medium text-sm">
															{tech}
														</span>
													</motion.div>
												)
											)}
										</div>
									</div>

									{/* Project Links - Only for Softnix */}
									{exp.company === "㈜소프트닉스" && (
										<div>
											<h4 className="text-xl font-bold text-gray-900 mb-6">
												프로젝트 링크
											</h4>
											<div className="space-y-3">
												<a
													href="https://kingdomheroeswar.io/"
													target="_blank"
													rel="noreferrer noopener"
													className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-all duration-300 border border-purple-200 hover:border-purple-300"
												>
													<div className="w-3 h-3 bg-purple-500 rounded-full"></div>
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
															className="w-5 h-5 text-purple-600"
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
													className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-200 hover:border-blue-300"
												>
													<div className="w-3 h-3 bg-green-500 rounded-full"></div>
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
															className="w-5 h-5 text-blue-600"
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
