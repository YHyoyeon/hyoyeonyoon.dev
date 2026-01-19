import { useState } from "react";
import AdventureJournal from "./components/AdventureJournal";
import Inventory from "./components/Inventory";
import NPCContact from "./components/NPCContact";
import QuestLog from "./components/QuestLog";
import Status from "./components/Status";
import { useLanguage } from "./context/LanguageContext";
import { TRANSLATIONS } from "./data/translations";

type TabKey = "status" | "quest" | "inventory" | "journal" | "contact";

function App() {
	const [activeTab, setActiveTab] = useState<TabKey>("status");
	const { language, toggleLanguage } = useLanguage();
	const t = TRANSLATIONS[language];

	const handleTabChange = (tab: TabKey) => {
		setActiveTab(tab);
	};

	return (
		<div className="flex flex-col h-screen bg-terra-bg text-white font-pixel overflow-hidden selection:bg-terra-gold selection:text-black">
			{/* Header */}
			<header className="h-20 bg-terra-panel border-b-4 border-terra-border flex items-center px-4 justify-between shrink-0 z-10">
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 bg-terra-item border-2 border-white flex items-center justify-center text-2xl overflow-hidden rounded-md">
						🐱
					</div>
					<div>
						<h1 className="text-xl text-terra-gold drop-shadow-md">
							{t.status.name}
						</h1>
						<div className="text-xs text-gray-400">
							{t.header.job}
						</div>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<div className="flex flex-col gap-2 w-48 md:w-64 font-sans text-xs font-bold tracking-wider hidden sm:flex">
						<div className="relative h-5 bg-black/40 border-2 border-terra-border rounded">
							<div className="absolute top-0 left-0 h-full bg-terra-red w-[90%] flex items-center justify-center text-white">
								<span className="drop-shadow-md z-10">
									{t.header.hp}
								</span>
							</div>
						</div>
						<div className="relative h-5 bg-black/40 border-2 border-terra-border rounded">
							<div className="absolute top-0 left-0 h-full bg-terra-blue w-[100%] flex items-center justify-center text-white">
								<span className="drop-shadow-md z-10">
									{t.header.mp}
								</span>
							</div>
						</div>
					</div>

					<button
						onClick={toggleLanguage}
						className="bg-terra-item border-2 border-terra-border hover:border-terra-gold px-3 py-1 text-xs font-bold transition-colors w-16"
					>
						{language === "ko" ? "EN" : "한글"}
					</button>
				</div>
			</header>

			<div className="flex flex-1 overflow-hidden relative">
				<div className="flex flex-1 overflow-hidden relative">
					<nav className="w-20 md:w-24 bg-terra-panel border-r-4 border-terra-border flex flex-col items-center py-4 gap-4 shrink-0 z-10">
						<TabButton
							icon="☁️"
							label={t.nav.status}
							active={activeTab === "status"}
							onClick={() => handleTabChange("status")}
						/>
						<TabButton
							icon="⭐️"
							label={t.nav.quest}
							active={activeTab === "quest"}
							onClick={() => handleTabChange("quest")}
						/>
						<TabButton
							icon="🍬"
							label={t.nav.inventory}
							active={activeTab === "inventory"}
							onClick={() => handleTabChange("inventory")}
						/>
						<TabButton
							icon="📒"
							label={t.nav.journal}
							active={activeTab === "journal"}
							onClick={() => handleTabChange("journal")}
						/>
						<TabButton
							icon="💌"
							label={t.nav.contact}
							active={activeTab === "contact"}
							onClick={() => handleTabChange("contact")}
						/>
					</nav>

					<main className="flex-1 p-4 md:p-8 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] relative">
						<div className="absolute inset-0 bg-terra-bg opacity-90 -z-10" />

						<div className="max-w-6xl mx-auto h-full">
							{activeTab === "status" && <Status />}
							{activeTab === "quest" && <QuestLog />}
							{activeTab === "inventory" && <Inventory />}
							{activeTab === "journal" && <AdventureJournal />}
							{activeTab === "contact" && <NPCContact />}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

interface TabButtonProps {
	icon: string;
	label: string;
	active: boolean;
	onClick: () => void;
}

function TabButton({ icon, label, active, onClick }: TabButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`w-16 h-16 flex flex-col items-center justify-center border-4 transition-all pixel-btn
				${active
					? "bg-terra-panel border-terra-gold translate-x-1 scale-105 shadow-[0_0_10px_#f4d03f]"
					: "bg-terra-item border-terra-border hover:bg-terra-dirt hover:border-terra-gold opacity-80 hover:opacity-100"
				}`}
		>
			<span className="text-2xl mb-1">{icon}</span>
			<span className="text-[10px] uppercase">{label}</span>
		</button>
	);
}

export default App;
