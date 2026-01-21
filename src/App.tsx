import { useState } from "react";
import AdventureJournal from "./components/AdventureJournal";
import Inventory from "./components/Inventory";
import NPCContact from "./components/NPCContact";
import QuestLog from "./components/QuestLog";
import Status from "./components/Status";
import { useLanguage } from "./context/LanguageContext";
import { TRANSLATIONS } from "./data/translations";

import Portfolio from "./components/Portfolio";

type TabKey = "status" | "quest" | "inventory" | "portfolio" | "journal" | "contact";

function App() {
	const [activeTab, setActiveTab] = useState<TabKey>("status");
	const { language, toggleLanguage } = useLanguage();
	const t = TRANSLATIONS[language];

	const handleTabChange = (tab: TabKey) => {
		setActiveTab(tab);
	};

	return (
		<div className="flex flex-col h-screen bg-[#87CEEB] font-pixel overflow-hidden selection:bg-terra-accent selection:text-white relative">
			{/* --- Sky Layer --- */}
			<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
				<img src="/images/cloud1.png" alt="" className="absolute top-8 left-[5%] w-28 md:w-40 opacity-70 animate-pulse" style={{ animationDuration: '5s' }} />
				<img src="/images/cloud2.png" alt="" className="absolute top-16 left-[35%] w-20 md:w-32 opacity-50 animate-pulse" style={{ animationDuration: '6s' }} />
				<img src="/images/cloud3.png" alt="" className="absolute top-4 right-[15%] w-32 md:w-44 opacity-60 animate-pulse" style={{ animationDuration: '4s' }} />
				<img src="/images/cloud4.png" alt="" className="absolute top-24 right-[40%] w-24 md:w-36 opacity-40 animate-pulse hidden md:block" style={{ animationDuration: '7s' }} />
				<img src="/images/airplane.png" alt="" className="absolute top-12 w-12 md:w-16 animate-[fly_25s_linear_infinite]" />
			</div>

			{/* --- Scenery Layer (Background) --- */}
			<div className="absolute bottom-[100px] left-0 right-0 z-0 pointer-events-none overflow-hidden">
				<img src="/images/tree2.png" alt="" className="absolute bottom-0 left-[2%] w-20 md:w-28 opacity-90" />
				<img src="/images/house.png" alt="" className="absolute bottom-0 left-[12%] w-28 md:w-40" />
				<img src="/images/tree1.png" alt="" className="absolute bottom-0 left-[28%] w-24 md:w-32 opacity-80" />
				<img src="/images/perfume.png" alt="" className="absolute bottom-0 left-[40%] w-10 md:w-14 hidden lg:block" />
				<img src="/images/game_console.png" alt="" className="absolute bottom-0 left-[48%] w-12 md:w-16 hidden md:block" />
				<img src="/images/cabin.png" alt="" className="absolute bottom-0 right-[25%] w-24 md:w-36 hidden md:block" />
				<img src="/images/doghouse.png" alt="" className="absolute bottom-0 right-[15%] w-14 md:w-20" />
				<img src="/images/puppy.png" alt="" className="absolute bottom-0 right-[10%] w-10 md:w-14" />
				<img src="/images/donkey.png" alt="" className="absolute bottom-0 right-[5%] w-12 md:w-16 hidden sm:block" />
				<img src="/images/tree1.png" alt="" className="absolute bottom-0 right-[0%] w-28 md:w-36 opacity-90" />
			</div>

			{/* --- Ground Layer --- */}
			<div className="absolute bottom-0 left-0 right-0 h-[100px] z-0 pointer-events-none">
				<img src="/images/dirt.png" alt="" className="absolute bottom-0 left-0 right-0 h-[60px] w-full object-cover" />
				<img src="/images/grass.png" alt="" className="absolute bottom-[50px] left-0 right-0 h-[25px] w-full object-cover" />
				<div className="absolute bottom-[45px] left-0 right-0 h-10 flex justify-around px-4">
					<img src="/images/fence.png" alt="" className="w-12 md:w-16 h-auto" />
					<img src="/images/fence.png" alt="" className="w-12 md:w-16 h-auto hidden sm:block" />
					<img src="/images/fence.png" alt="" className="w-12 md:w-16 h-auto" />
					<img src="/images/fence.png" alt="" className="w-12 md:w-16 h-auto hidden md:block" />
					<img src="/images/fence.png" alt="" className="w-12 md:w-16 h-auto hidden lg:block" />
				</div>
			</div>

			{/* Status Bar (Header) */}
			<header className="h-16 flex items-center px-4 justify-between shrink-0 z-20 bg-transparent mx-4 mt-4 relative">
				<div className="flex items-center gap-4">
					<div className="w-10 h-10 bg-white border-2 border-terra-border flex items-center justify-center overflow-hidden rounded-md shadow-inner">
						<img src="/images/woman.png" alt="Avatar" className="w-full h-full object-cover" />
					</div>
					<div>
						<h1 className="text-lg text-black font-bold">
							{t.nav[activeTab]}
						</h1>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<button
						onClick={toggleLanguage}
						className="px-3 py-1 text-xs font-bold transition-all text-white"
					>
						{language === "ko" ? "EN" : "한글"}
					</button>
				</div>
			</header>

			{/* Main Content Area */}
			<div className="flex-1 overflow-hidden relative w-full max-w-6xl mx-auto z-10 pb-[120px]">
				<div className="h-full p-4 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-transparent">
					<div className="min-h-full bg-transparent p-4 md:p-6">
						{activeTab === "status" && <Status />}
						{activeTab === "quest" && <QuestLog />}
						{activeTab === "inventory" && <Inventory />}
						{activeTab === "portfolio" && <Portfolio />}
						{activeTab === "journal" && <AdventureJournal />}
						{activeTab === "contact" && <NPCContact />}
					</div>
				</div>
			</div>

			{/* Navigation Bar (Fixed Bottom) */}
			<nav className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-4 bg-transparent p-2">
				<TabButton
					icon={<img src="/images/man.png" className="w-8 h-8 md:w-10 md:h-10 object-contain" />}
					label={t.nav.status}
					active={activeTab === "status"}
					onClick={() => handleTabChange("status")}
				/>
				<TabButton
					icon={<img src="/images/logs.png" className="w-8 h-8 md:w-10 md:h-10 object-contain" />}
					label={t.nav.quest}
					active={activeTab === "quest"}
					onClick={() => handleTabChange("quest")}
				/>
				<TabButton
					icon={<img src="/images/coin.png" className="w-8 h-8 md:w-10 md:h-10 object-contain" />}
					label={t.nav.inventory}
					active={activeTab === "inventory"}
					onClick={() => handleTabChange("inventory")}
				/>
				<TabButton
					icon={<img src="/images/house.png" className="w-8 h-8 md:w-10 md:h-10 object-contain" />}
					label={t.nav.portfolio}
					active={activeTab === "portfolio"}
					onClick={() => handleTabChange("portfolio")}
				/>
				<TabButton
					icon={<img src="/images/chicken.png" className="w-8 h-8 md:w-10 md:h-10 object-contain" />}
					label={t.nav.journal}
					active={activeTab === "journal"}
					onClick={() => handleTabChange("journal")}
				/>
				<TabButton
					icon={<img src="/images/email.png" className="w-8 h-8 md:w-10 md:h-10 object-contain" />}
					label={t.nav.contact}
					active={activeTab === "contact"}
					onClick={() => handleTabChange("contact")}
				/>
			</nav>
		</div>
	);
}

interface TabButtonProps {
	icon: React.ReactNode;
	label: string;
	active: boolean;
	onClick: () => void;
}

function TabButton({ icon, label, active, onClick }: TabButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`w-14 h-14 md:w-16 md:h-16 flex flex-col items-center justify-center border-2 rounded-xl transition-all duration-300 pixel-btn relative bg-white
				${active
					? "border-terra-border -translate-y-4 shadow-xl z-20 scale-110"
					: "border-terra-border/50 text-terra-border-dark hover:-translate-y-2 hover:text-black hover:z-10"
				}`}
		>
			<div className="mb-0.5 filter drop-shadow-sm flex items-center justify-center h-9 w-9">{icon}</div>
			<span className="text-[9px] md:text-[10px] uppercase font-bold tracking-tight leading-none text-black">{label}</span>
		</button>
	);
}

export default App;
