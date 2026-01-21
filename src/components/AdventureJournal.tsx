import { useLanguage } from "../context/LanguageContext";
import { TROUBLESHOOTING_CASES } from "../data/troubleshooting";
import { TRANSLATIONS } from "../data/translations";

const AdventureJournal = () => {
	const { language } = useLanguage();
	const t = TRANSLATIONS[language];

	return (
		<div className="h-full max-w-4xl mx-auto pb-20">
			<h2 className="text-2xl text-black mb-6 flex items-center gap-3">
				{t.journal.title}{" "}
				<span className="text-sm text-black font-normal">
					{t.journal.subtitle}
				</span>
			</h2>

			<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
				{TROUBLESHOOTING_CASES.map((log) => (
					<div
						key={log.id}
						className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
					>
						<div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-terra-bg bg-terra-cloud group-[.is-active]:bg-orange-500 text-terra-border-dark group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
							<div className="w-2.5 h-2.5 bg-current rounded-full" />
						</div>

						<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pixel-panel pixel-border p-4 md:p-6 transition-colors border-2 border-terra-border hover:border-terra-accent">
							<div className="flex items-center justify-between space-x-2 mb-1">
								<div className="font-bold text-black">
									{t.journal.issue}{log.id}
								</div>
								<time className="font-medium text-orange-500 text-xs">
									{log.date || t.journal.unknownDate}
								</time>
							</div>
							<h3 className="text-lg font-bold text-terra-red mb-2">
								&quot;{log.title[language]}&quot;
							</h3>

							<div className="space-y-3 text-sm">
								<div className="bg-terra-cloud/30 p-2 border-l-2 border-terra-red">
									<p className="text-xs text-terra-red font-bold mb-1">
										{t.journal.threat}
									</p>
									<p className="text-black font-medium">{log.problem[language]}</p>
								</div>

								<div className="bg-terra-cloud/30 p-2 border-l-2 border-orange-500">
									<p className="text-xs text-orange-500 font-bold mb-1">
										{t.journal.victory}
									</p>
									<p className="text-black font-medium">{log.solution[language]}</p>
								</div>

								<div className="mt-2 pt-2 border-t border-gray-700">
									<p className="text-xs text-black opacity-60 font-bold">
										<span className="text-orange-500">
											{t.journal.loot}
										</span>{" "}
										{log.result[language]}
									</p>
								</div>
								{log.technicalDetails && (
									<div className="mt-2 text-xs text-black opacity-60 font-bold">
										<ul className="list-disc list-inside">
											{log.technicalDetails.map((detail, idx) => (
												<li key={idx}>
													{typeof detail === 'string' ? detail : detail[language]}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdventureJournal;
