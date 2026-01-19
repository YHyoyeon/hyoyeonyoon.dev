import { Cloud, Code, Database, Server, Settings, Shield } from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { TECHNOLOGY_CATEGORIES } from "../data/technologies";
import { TRANSLATIONS } from "../data/translations";

type ItemType = "Backend" | "Infra" | "Frontend" | "Tool";
type InventoryTab =
	| "language"
	| "backend"
	| "db"
	| "infra"
	| "cicd"
	| "security"
	| "testing"
	| "observability"
	| "tools";

const TAB_META: Record<
	InventoryTab,
	{
		label: { ko: string; en: string };
		icon: string;
		theme: { ko: string; en: string };
		examples: string;
	}
> = {
	language: {
		label: { ko: "언어·런타임", en: "Language/Runtime" },
		icon: "🧠",
		theme: { ko: "개발의 기본기(언어/런타임)", en: "Basics (Lang/Runtime)" },
		examples: "TypeScript, JavaScript, Node.js etc",
	},
	backend: {
		label: { ko: "백엔드", en: "Backend" },
		icon: "🧩",
		theme: { ko: "서버 애플리케이션 개발", en: "Server App Dev" },
		examples: "Express, Inversify, Swagger etc",
	},
	db: {
		label: { ko: "DB·캐시", en: "DB/Cache" },
		icon: "🗄️",
		theme: { ko: "데이터 저장/조회/캐싱", en: "Storage/Query/Caching" },
		examples: "MySQL, Sequelize, Redis, ioredis etc",
	},
	infra: {
		label: { ko: "인프라·DevOps", en: "Infra/DevOps" },
		icon: "🏗️",
		theme: { ko: "클라우드/배포/운영", en: "Cloud/Deploy/Ops" },
		examples: "AWS EC2/S3/CloudFront, Docker, Ansible etc",
	},
	cicd: {
		label: { ko: "CI·CD", en: "CI/CD" },
		icon: "🚀",
		theme: { ko: "빌드/배포 자동화", en: "Build/Deploy Automation" },
		examples: "Jenkins, GitHub Actions etc",
	},
	security: {
		label: { ko: "인증·보안", en: "Auth/Security" },
		icon: "🛡️",
		theme: { ko: "인증/인가/보안", en: "Auth/Authorization/Security" },
		examples: "JWT, OAuth2, OIDC, Firebase Admin etc",
	},
	testing: {
		label: { ko: "검증·테스트", en: "Test/Validation" },
		icon: "🧪",
		theme: { ko: "유효성/테스트/품질", en: "Validation/Test/Quality" },
		examples: "Zod, Jest, Supertest, Sinon etc",
	},
	observability: {
		label: { ko: "모니터링·로그", en: "Monitor/Log" },
		icon: "📈",
		theme: { ko: "관측 가능성", en: "Observability" },
		examples: "CloudWatch, Sentry, ELK etc",
	},
	tools: {
		label: { ko: "도구", en: "Tools" },
		icon: "🧰",
		theme: { ko: "협업/생산성 도구", en: "Collab/Productivity" },
		examples: "Git, draw.io, Swagger etc",
	},
};

const TAB_ORDER: InventoryTab[] = [
	"language",
	"backend",
	"db",
	"infra",
	"cicd",
	"security",
	"testing",
	"observability",
	"tools",
];

interface InventoryItem {
	id: string;
	name: string;
	type: ItemType;
	displayName: string;
	versionLabel: string | null;
	tab: InventoryTab;
}

const shouldExcludeSkill = (raw: string) => {
	const lower = raw.toLowerCase();
	return (
		lower.includes("pnpm") ||
		lower.includes("docker compose") ||
		lower.includes(" joi") ||
		lower.startsWith("joi") ||
		lower.includes("winston") ||
		lower.includes("winstone")
	);
};

const getInventoryTab = (
	categoryTitle: string,
	type: ItemType,
	rawName: string,
): InventoryTab => {
	const title = categoryTitle.toLowerCase();
	const lower = rawName.toLowerCase();

	if (title.includes("validation") || title.includes("testing")) return "testing";
	if (title.includes("monitoring") || title.includes("logging")) return "observability";
	if (title.includes("authentication") || title.includes("security")) return "security";
	if (title.includes("database") || title.includes("cache")) return "db";

	if (title.includes("infrastructure") || title.includes("devops")) {
		if (lower.includes("jenkins") || lower.includes("github actions")) return "cicd";
		return "infra";
	}

	if (title.includes("backend")) {
		if (lower.includes("typescript") || lower.includes("javascript") || lower.includes("node.js")) {
			return "language";
		}
		return "backend";
	}

	if (title.includes("frontend")) return "tools";

	if (type === "Frontend") return "tools";
	if (type === "Tool") return "tools";

	return "backend";
};

const expandAwsServices = (raw: string) => {
	const match = raw.trim().match(/^AWS\s*\((.+)\)\s*$/i);
	if (!match) return null;

	const inside = match[1].trim();
	if (!inside) return null;

	return inside
		.split(",")
		.map((s) => s.trim())
		.filter((s) => s.length > 0);
};

const splitSkillLabel = (raw: string) => {
	const trimmed = raw.trim();
	const match = trimmed.match(/^(.+?)\s+(\d[\w.+-]*.*)$/);
	if (!match) return { displayName: trimmed, versionLabel: null };
	return { displayName: match[1].trim(), versionLabel: match[2].trim() };
};

const getItemType = (categoryTitle: string): ItemType => {
	const lower = categoryTitle.toLowerCase();
	if (lower.includes("backend") || lower.includes("database") || lower.includes("auth")) {
		return "Backend";
	}
	if (lower.includes("infra") || lower.includes("devops") || lower.includes("monitoring")) {
		return "Infra";
	}
	if (lower.includes("frontend")) return "Frontend";
	return "Tool";
};

const getSpecLogo = (name: string) => {
	const lower = name.toLowerCase();
	if (lower.includes("aws") || lower.includes("cloudfront") || lower.includes("cloudwatch")) {
		return Cloud;
	}
	if (lower.includes("node") || lower.includes("express")) {
		return Server;
	}
	if (lower.includes("mysql") || lower.includes("redis") || lower.includes("database") || lower.includes("sequelize")) {
		return Database;
	}
	if (lower.includes("jwt") || lower.includes("oauth") || lower.includes("oidc") || lower.includes("auth")) {
		return Shield;
	}
	if (lower.includes("react") || lower.includes("typescript") || lower.includes("javascript") || lower.includes("next")) {
		return Code;
	}
	return Settings;
};

const Inventory = () => {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [activeTab, setActiveTab] = useState<InventoryTab>("language");
	const { language } = useLanguage();
	const t = TRANSLATIONS[language];

	const allItems = useMemo<InventoryItem[]>(() => {
		const items: InventoryItem[] = [];

		for (const category of TECHNOLOGY_CATEGORIES) {
			const type = getItemType(category.title.en);
			for (const skill of category.skills) {
				if (shouldExcludeSkill(skill)) continue;

				const awsServices = expandAwsServices(skill);
				if (awsServices) {
					for (const service of awsServices) {
						const name = `AWS ${service}`;
						const id = `${type}:AWS:${service}`;
						items.push({
							id,
							name,
							type,
							displayName: `AWS ${service}`,
							versionLabel: null,
							tab: getInventoryTab(category.title.en, type, name),
						});
					}
					continue;
				}

				const { displayName, versionLabel } = splitSkillLabel(skill);
				const id = `${type}:${skill}`;
				items.push({
					id,
					name: skill,
					type,
					displayName,
					versionLabel,
					tab: getInventoryTab(category.title.en, type, skill),
				});
			}
		}

		return items;
	}, []);

	const filteredItems = useMemo(() => {
		return allItems.filter((item) => item.tab === activeTab);
	}, [activeTab, allItems]);

	const selectedItem = useMemo(() => {
		if (!selectedId) return null;
		const currentList = filteredItems;
		return currentList.find((item) => item.id === selectedId) ?? null;
	}, [filteredItems, selectedId]);

	const totalSlots = Math.max(filteredItems.length, 30);
	const slots = useMemo<(InventoryItem | null)[]>(
		() =>
			Array.from({ length: totalSlots }, (_, i) => filteredItems[i] ?? null),
		[filteredItems, totalSlots],
	);

	const tabCounts = useMemo(() => {
		const counts: Record<InventoryTab, number> = {
			language: 0,
			backend: 0,
			db: 0,
			infra: 0,
			cicd: 0,
			security: 0,
			testing: 0,
			observability: 0,
			tools: 0,
		};

		for (const item of allItems) counts[item.tab] += 1;
		return counts;
	}, [allItems]);

	return (
		<div className="flex flex-col md:flex-row h-full gap-6">
			<div className="flex-1 pixel-panel pixel-border p-4 flex flex-col">
				<h2 className="text-xl text-terra-gold mb-4 border-b-2 border-gray-600 pb-2 flex justify-between">
					<span>🎒 {t.nav.inventory}</span>
					<span className="text-sm text-gray-400">
						{filteredItems.length} / {totalSlots}
					</span>
				</h2>

				<div className="flex flex-wrap gap-2 mb-4">
					{TAB_ORDER.map((tab) => (
						<TabChip
							key={tab}
							active={activeTab === tab}
							label={`${TAB_META[tab].icon} ${TAB_META[tab].label[language]} (${tabCounts[tab]})`}
							title={`${TAB_META[tab].theme[language]} · ${TAB_META[tab].examples}`}
							onClick={() => {
								setActiveTab(tab);
								setSelectedId(null);
							}}
						/>
					))}
				</div>

				<div className="mb-3 bg-black/20 border-2 border-terra-border px-3 py-2 text-xs text-gray-100">
					<span className="text-terra-gold">
						{TAB_META[activeTab].icon} {TAB_META[activeTab].label[language]}:
					</span>{" "}
					{TAB_META[activeTab].theme[language]}
					<span className="text-gray-300">
						{" "}
						(ex: {TAB_META[activeTab].examples})
					</span>
				</div>

				<div className="grid grid-cols-5 md:grid-cols-6 gap-2 overflow-y-auto p-2">
					{slots.map((item, idx) => (
						<button
							key={item?.id ?? `empty-${idx}`}
							type="button"
							onClick={() => item && setSelectedId(item.id)}
							className={`aspect-square bg-terra-item border-2 flex items-center justify-center text-2xl hover:bg-gray-600 transition-colors relative group
								${item
									? "cursor-pointer border-gray-500 hover:border-terra-gold"
									: "cursor-default border-gray-700 opacity-50"
								}
								${item && selectedId === item.id
									? "border-terra-gold bg-gray-600 shadow-[0_0_10px_rgba(255,215,0,0.3)]"
									: ""
								}`}
						>
							{item && (
								<>
									<div className="flex flex-col items-center justify-center text-center px-1">
										<span className="text-[10px] leading-tight text-white">
											{item.displayName}
										</span>
										{item.versionLabel && (
											<span className="text-[9px] leading-tight text-gray-300">
												{item.versionLabel}
											</span>
										)}
									</div>
									<div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-black border border-white text-[10px] text-white z-20 pointer-events-none">
										{item.name}
									</div>
								</>
							)}
						</button>
					))}
				</div>
				<div className="mt-4 text-xs text-gray-500 text-center">
					{t.inventory.clickHint}
				</div>
			</div>

			<div className="w-full md:w-80 pixel-panel pixel-border p-6 flex flex-col relative min-h-[300px]">
				{selectedItem ? (
					<>
						<div className="flex items-center gap-4 mb-6 border-b border-gray-600 pb-4">
							<div className="w-16 h-16 bg-black border-2 border-terra-gold flex items-center justify-center text-3xl">
								{(() => {
									const Logo = getSpecLogo(selectedItem.name);
									return <Logo size={32} className="text-terra-gold" />;
								})()}
							</div>
							<div>
								<h3 className="text-terra-gold text-lg leading-tight">
									{selectedItem.displayName}
								</h3>
								<span className="text-xs text-terra-blue bg-terra-item px-2 py-0.5 border border-terra-border">
									{selectedItem.type} Item
								</span>
								<div className="text-xs text-gray-200 mt-1">
									{t.inventory.category}{" "}
									<span className="text-terra-gold">
										{TAB_META[selectedItem.tab].label[language]}
									</span>{" "}
									<span className="text-gray-400">
										({TAB_META[selectedItem.tab].theme[language]})
									</span>
								</div>
								{selectedItem.versionLabel && (
									<div className="text-xs text-gray-300 mt-1">
										{selectedItem.versionLabel}
									</div>
								)}
							</div>
						</div>

						<div className="space-y-4 text-sm text-gray-300">
							<div>
								<p className="text-gray-500 text-xs uppercase mb-1">
									{t.inventory.proficiency}
								</p>
								<div className="w-full h-2 bg-gray-900 border border-gray-600 rounded-full overflow-hidden">
									<div className="h-full bg-terra-gold w-[90%]" />
								</div>
							</div>

							<div className="bg-black/30 p-3 border border-gray-700 h-full text-xs leading-relaxed">
								<p>{t.inventory.desc}</p>
								<br />
								<p className="text-gray-400">
									{t.inventory.craft}{" "}
									<span className="text-white">
										{selectedItem.name.toLowerCase().includes("aws")
											? "Cloud Infrastructure"
											: "Web Applications"}
									</span>
								</p>
							</div>
						</div>
					</>
				) : (
					<div className="flex-1 flex flex-col items-center justify-center text-gray-500 gap-4">
						<span className="text-4xl opacity-30">🔍</span>
						<p className="text-center text-xs whitespace-pre-line">
							{t.inventory.empty}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

interface TabChipProps {
	active: boolean;
	label: string;
	onClick: () => void;
	title?: string;
}

const TabChip = ({ active, label, onClick, title }: TabChipProps) => {
	return (
		<button
			type="button"
			onClick={onClick}
			title={title}
			className={`px-3 py-2 border-2 text-xs pixel-btn ${active
				? "bg-terra-gold text-black border-black"
				: "bg-black/30 text-white border-terra-border hover:border-terra-gold"
				}`}
		>
			{label}
		</button>
	);
};

export default Inventory;
