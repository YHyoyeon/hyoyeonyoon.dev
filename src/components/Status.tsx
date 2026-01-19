import { CAREER, PERSONAL_INFO } from "../data/resume";

const clampPercent = (value: number) => Math.max(0, Math.min(100, value));

const Status = () => {
	return (
		<div className="h-full flex flex-col md:flex-row gap-8 items-center md:items-start justify-center animate-in fade-in">
			<div className="pixel-panel pixel-border p-6 w-full md:w-1/3 flex flex-col items-center gap-6">
				<div className="w-48 h-48 bg-black border-4 border-terra-border relative group overflow-hidden">
					<div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform cursor-pointer">
						🧙‍♂️
					</div>
					<div className="absolute bottom-0 w-full bg-black/70 text-center text-xs py-1 text-terra-gold">
						{PERSONAL_INFO.NAME} (Backend)
					</div>
				</div>

				<div className="w-full space-y-2">
					<StatRow label="STR (Engineering)" value={98} />
					<StatRow label="DEX (DevOps)" value={95} />
					<StatRow label="INT (Architecture)" value={97} />
					<StatRow label="WIS (Leadership)" value={90} />
				</div>
			</div>

			<div className="pixel-panel pixel-border p-8 w-full md:w-2/3 min-h-[400px] relative">
				<h2 className="text-2xl text-terra-gold mb-6 border-b-4 border-dashed border-gray-600 pb-2">
					📜 캐릭터 정보
				</h2>

				<div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-200">
					<p>
						<span className="text-terra-gold font-bold">Class:</span>{" "}
						{PERSONAL_INFO.POSITION}
					</p>
					<p>
						<span className="text-terra-gold font-bold">Guild:</span>{" "}
						{CAREER.COMPANY} ({PERSONAL_INFO.EXPERIENCE})
					</p>
					<p className="bg-black/30 p-4 border-2 border-gray-600 rounded">
						"{PERSONAL_INFO.SPECIALTY}"
					</p>

					<div className="mt-8">
						<h3 className="text-lg text-terra-blue mb-3">
							🛡️ Special Buffs
						</h3>
						<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
							<BuffItem icon="⚡" text="배포 속도 +80%" />
							<BuffItem icon="🧱" text="인프라 안정성 Max" />
							<BuffItem icon="🧩" text="모노레포 아키텍처" />
							<BuffItem icon="🌐" text="글로벌 서비스 최적화" />
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

interface StatRowProps {
	label: string;
	value: number;
}

const StatRow = ({ label, value }: StatRowProps) => {
	const percent = clampPercent(value);

	return (
		<div className="flex items-center justify-between text-sm">
			<span className="text-gray-400">{label}</span>
			<div className="flex items-center gap-2">
				<div className="w-32 h-3 bg-gray-900 border border-gray-600">
					<div className="h-full bg-terra-gold" style={{ width: `${percent}%` }} />
				</div>
				<span className="text-terra-gold w-8 text-right">{percent}</span>
			</div>
		</div>
	);
};

interface BuffItemProps {
	icon: string;
	text: string;
}

const BuffItem = ({ icon, text }: BuffItemProps) => (
	<li className="flex items-center gap-2 bg-gray-800 p-2 border border-gray-600 text-xs">
		<span>{icon}</span>
		<span>{text}</span>
	</li>
);

export default Status;
