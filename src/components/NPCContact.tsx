import { useLanguage } from "../context/LanguageContext";
import { PERSONAL_INFO } from "../data/resume";
import { TRANSLATIONS } from "../data/translations";

const NPCContact = () => {
	const { language } = useLanguage();
	const t = TRANSLATIONS[language];

	return (
		<div className="h-full flex items-center justify-center pb-20">
			<div className="w-full max-w-3xl">
				<div className="pixel-panel p-8">
					<div className="flex flex-col md:flex-row gap-8 items-start">
						<div className="shrink-0 flex flex-col items-center">
							<div className="w-32 h-32 bg-white border-4 border-terra-border mb-4 overflow-hidden relative flex items-center justify-center rounded-xl shadow-inner">
								<span className="text-6xl animate-bounce">🐱</span>
							</div>
							<div className="bg-terra-blue text-white text-xs px-3 py-1 font-bold rounded-full border border-terra-border-dark">
								{PERSONAL_INFO.NAME[language]}
							</div>
						</div>

						<div className="flex-1 space-y-6">
							<h2 className="text-2xl text-orange-500 font-bold animate-pulse">
								{t.npc.greeting}
							</h2>
							<p className="text-black leading-relaxed font-medium text-lg">
								{t.npc.intro}
							</p>

							<div className="mt-8 space-y-4">
								<a
									href={`mailto:${PERSONAL_INFO.EMAIL}`}
									className="block w-full bg-white hover:bg-terra-item border-2 border-terra-border p-4 rounded-xl text-left transition-all hover:-translate-y-1 shadow-sm group"
								>
									<span className="font-bold text-black group-hover:text-terra-accent mr-2">▶</span>
									<span className="text-black font-bold">{t.buttons.email}</span>
								</a>
								<a
									href={PERSONAL_INFO.GITHUB_URL}
									target="_blank"
									rel="noreferrer"
									className="block w-full bg-white hover:bg-terra-item border-2 border-terra-border p-4 rounded-xl text-left transition-all hover:-translate-y-1 shadow-sm group"
								>
									<span className="font-bold text-black group-hover:text-terra-accent mr-2">▶</span>
									<span className="text-black font-bold">{t.buttons.github}</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NPCContact;
