import { useLanguage } from "../context/LanguageContext";
import { PROJECTS } from "../data/projects";
import { CAREER, PERSONAL_INFO, QUANTITATIVE_ACHIEVEMENTS } from "../data/resume";
import { TRANSLATIONS } from "../data/translations";

const QuestLog = () => {
	const { language } = useLanguage();
	const t = TRANSLATIONS[language];

	console.log("QuestLog Render", { language, projects: PROJECTS });

	const careerQuests = [
		`${t.quest.career.portal}: ${QUANTITATIVE_ACHIEVEMENTS.PORTAL_ISSUES[language]}`,
		`${t.quest.career.api}: ${QUANTITATIVE_ACHIEVEMENTS.API_DEVELOPED[language]}`,
		`${t.quest.career.deploy}: ${QUANTITATIVE_ACHIEVEMENTS.DEPLOYMENT_TIME_REDUCTION[language]}`,
		`${t.quest.career.cicd}: ${QUANTITATIVE_ACHIEVEMENTS.CI_CD_PIPELINES[language]}`,
	];

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
						{CAREER.COMPANY[language]} - {CAREER.POSITION[language]}
					</h3>
					<p className="text-gray-400 text-sm mb-4">
						{PERSONAL_INFO.EXPERIENCE[language]}
					</p>
					<ul className="space-y-2 text-sm text-gray-200">
						{careerQuests.map((ach) => (
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
									! {project.title[language]}
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
							{project.overview[language]}
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
								{project.achievements.map((outcome, idx) => {
									const text = typeof outcome === 'string' ? outcome : outcome[language];
									return (
										<li key={idx}>
											{text}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestLog;
