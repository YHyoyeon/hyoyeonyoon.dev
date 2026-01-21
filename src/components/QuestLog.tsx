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
			<h2 className="text-3xl text-orange-500 text-center mb-4 font-bold">
				{t.quest.title}
			</h2>

			<div className="grid grid-cols-1 gap-6 pb-20">
				<div className="pixel-panel pixel-border p-6 relative">
					<div className="absolute -top-3 -left-3 bg-terra-red text-white px-2 py-1 text-xs font-bold shadow-sm rounded-sm">
						{language === "ko" ? "현재 재직 중" : "Current Role"}
					</div>
					<h3 className="text-xl text-orange-500 mb-2 mt-2">
						{CAREER.COMPANY[language]} - {CAREER.POSITION[language]}
					</h3>
					<p className="text-black text-sm mb-4 font-bold">
						{PERSONAL_INFO.EXPERIENCE[language]}
					</p>
					<ul className="space-y-2 text-sm text-black">
						{careerQuests.map((ach) => (
							<li key={ach} className="flex items-start gap-2">
								<span className="text-orange-500 mt-1 font-bold">-</span>
								{ach}
							</li>
						))}
					</ul>
				</div>


			</div>
		</div>
	);
};

export default QuestLog;
