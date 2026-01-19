import { PERSONAL_INFO } from "../data/resume";

const NPCContact = () => {
	return (
		<div className="h-full flex items-center justify-center pb-20">
			<div className="w-full max-w-3xl">
				<div className="pixel-panel p-1 border-4 border-white shadow-[0_10px_20px_rgba(0,0,0,0.5)] bg-terra-panel">
					<div className="border-2 border-black p-6 flex flex-col md:flex-row gap-8 items-start">
						<div className="shrink-0 flex flex-col items-center">
							<div className="w-32 h-32 bg-black border-2 border-white mb-2 overflow-hidden relative">
								<div className="absolute inset-0 flex items-center justify-center text-6xl animate-bounce">
									🧙‍♂️
								</div>
							</div>
							<div className="bg-black text-white text-xs px-2 py-1 border border-white">
								HYOYEON
							</div>
						</div>

						<div className="flex-1 space-y-4">
							<h2 className="text-xl text-terra-gold animate-pulse">
								&quot;Greetings, Traveler! Are you looking for a backend developer?&quot;
							</h2>
							<p className="text-white leading-relaxed">
								I am currently available for new adventures. If you have a quest (job) for me, please select an option below to communicate.
							</p>

							<div className="mt-8 space-y-2">
								<a
									href={`mailto:${PERSONAL_INFO.EMAIL}`}
									className="block w-full bg-black/50 hover:bg-terra-gold hover:text-black border-2 border-gray-500 hover:border-white p-3 text-left transition-colors group"
								>
									<span className="text-terra-gold group-hover:text-black mr-2">
										▶
									</span>
									Send an Email Scroll
								</a>
								<a
									href={PERSONAL_INFO.GITHUB_URL}
									target="_blank"
									rel="noreferrer"
									className="block w-full bg-black/50 hover:bg-terra-gold hover:text-black border-2 border-gray-500 hover:border-white p-3 text-left transition-colors group"
								>
									<span className="text-terra-gold group-hover:text-black mr-2">
										▶
									</span>
									Visit GitHub Fortress
								</a>
								<button
									type="button"
									className="block w-full bg-black/50 hover:bg-gray-700 border-2 border-gray-500 hover:border-gray-400 p-3 text-left transition-colors text-gray-400"
								>
									<span className="mr-2">▶</span>
									Leave (Goodbye)
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NPCContact;
