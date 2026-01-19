import { TROUBLESHOOTING_CASES } from "../data/troubleshooting";

const AdventureJournal = () => {
	return (
		<div className="h-full max-w-4xl mx-auto">
			<h2 className="text-2xl text-terra-gold mb-6 flex items-center gap-3">
				📖 Adventure Journal{" "}
				<span className="text-sm text-gray-400 font-normal">
					(Troubleshooting Logs)
				</span>
			</h2>

			<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
				{TROUBLESHOOTING_CASES.map((log) => (
					<div
						key={log.id}
						className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
					>
						<div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-terra-bg bg-slate-800 group-[.is-active]:bg-terra-gold text-slate-500 group-[.is-active]:text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
							💀
						</div>

						<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] pixel-panel pixel-border p-4 md:p-6 bg-black/40 hover:bg-black/50 transition-colors border-2 border-gray-600 hover:border-gray-400">
							<div className="flex items-center justify-between space-x-2 mb-1">
								<div className="font-bold text-slate-200">
									Issue #{log.id}
								</div>
								<time className="font-medium text-terra-gold text-xs">
									{log.date || "Unknown Date"}
								</time>
							</div>
							<h3 className="text-lg font-bold text-terra-red mb-2">
								&quot;{log.title}&quot;
							</h3>

							<div className="space-y-3 text-sm">
								<div className="bg-black/40 p-2 border-l-2 border-terra-red">
									<p className="text-xs text-terra-red font-bold mb-1">
										[THE THREAT]
									</p>
									<p className="text-gray-300">{log.problem}</p>
								</div>

								<div className="bg-black/40 p-2 border-l-2 border-terra-gold">
									<p className="text-xs text-terra-gold font-bold mb-1">
										[THE VICTORY]
									</p>
									<p className="text-gray-300">{log.solution}</p>
								</div>

								<div className="mt-2 pt-2 border-t border-gray-700">
									<p className="text-xs text-gray-400">
										<span className="text-terra-gold">
											Loot (Result):
										</span>{" "}
										{log.result}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdventureJournal;
