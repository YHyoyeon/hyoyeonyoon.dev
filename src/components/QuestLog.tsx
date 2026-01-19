import { PROJECTS } from "../data/projects";
import { CAREER, PERSONAL_INFO, QUANTITATIVE_ACHIEVEMENTS } from "../data/resume";

const CAREER_QUESTS = [
	`PORTAL 이슈 개발 및 완료: ${QUANTITATIVE_ACHIEVEMENTS.PORTAL_ISSUES}`,
	`개발한 RESTful API: ${QUANTITATIVE_ACHIEVEMENTS.API_DEVELOPED}`,
	`배포 시간 단축: ${QUANTITATIVE_ACHIEVEMENTS.DEPLOYMENT_TIME_REDUCTION}`,
	`CI/CD 파이프라인 구축: ${QUANTITATIVE_ACHIEVEMENTS.CI_CD_PIPELINES}`,
] as const;

const QuestLog = () => {
	return (
		<div className="h-full flex flex-col gap-4">
			<h2 className="text-3xl text-terra-gold text-center mb-4 drop-shadow-[2px_2px_0_#000]">
				⚔️ Quest Log (Projects)
			</h2>

			<div className="grid grid-cols-1 gap-6 pb-20">
				<div className="pixel-panel pixel-border p-6 relative">
					<div className="absolute -top-3 -left-3 bg-terra-red text-white px-2 py-1 border-2 border-black text-xs font-bold shadow-md">
						MAIN QUEST
					</div>
					<h3 className="text-xl text-terra-gold mb-2 mt-2">
						{CAREER.COMPANY} - {CAREER.POSITION}
					</h3>
					<p className="text-gray-400 text-sm mb-4">
						{PERSONAL_INFO.EXPERIENCE}
					</p>
					<ul className="space-y-2 text-sm text-gray-200">
						{CAREER_QUESTS.map((ach) => (
							<li key={ach} className="flex items-start gap-2">
								<span className="text-terra-gold mt-1">✓</span>
								{ach}
							</li>
						))}
					</ul>
				</div>

				{PROJECTS.map((project) => (
					<div
						key={project.id}
						className="pixel-panel pixel-border p-6 group hover:border-terra-gold transition-colors"
					>
						<div className="flex justify-between items-start mb-4 gap-4">
							<div>
								<h3 className="text-lg text-terra-blue group-hover:text-terra-gold transition-colors">
									! {project.title}
								</h3>
								<p className="text-xs text-gray-500 mt-1">
									{project.period}
								</p>
							</div>
							<span className="bg-gray-900 border border-gray-600 px-2 py-1 text-xs text-gray-300">
								Backend
							</span>
						</div>

						<div className="bg-black/40 p-4 border border-gray-700 mb-4 text-sm text-gray-300 leading-relaxed">
							{project.overview}
						</div>

						<div className="mb-4">
							<h4 className="text-xs text-terra-gold mb-2 uppercase">
								Quest Rewards (Tech Stack):
							</h4>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="px-2 py-1 bg-terra-item border border-terra-border text-xs text-gray-100"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div>
							<h4 className="text-xs text-terra-gold mb-2 uppercase">
								Achievements:
							</h4>
							<ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
								{project.achievements.map((outcome) => (
									<li key={outcome}>{outcome}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestLog;
