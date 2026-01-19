import { useState } from "react";
import AdventureJournal from "./components/AdventureJournal";
import Inventory from "./components/Inventory";
import NPCContact from "./components/NPCContact";
import QuestLog from "./components/QuestLog";
import Status from "./components/Status";

type TabKey = "status" | "quest" | "inventory" | "journal" | "contact";

function App() {
	const [activeTab, setActiveTab] = useState<TabKey>("status");

	const handleTabChange = (tab: TabKey) => {
		setActiveTab(tab);
	};

	return (
		<div className="flex flex-col h-screen bg-terra-bg text-white font-pixel overflow-hidden selection:bg-terra-gold selection:text-black">
			<header className="h-20 bg-terra-panel border-b-4 border-terra-border flex items-center px-4 justify-between shrink-0 z-10">
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 bg-terra-item border-2 border-white flex items-center justify-center text-2xl overflow-hidden rounded-md">
						🧑‍💻
					</div>
					<div>
						<h1 className="text-xl text-terra-gold drop-shadow-md">
							Yoon HyoYeon
						</h1>
						<div className="text-xs text-gray-400">
							Lv.25 Backend Dev
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2 w-64 md:w-96 font-sans text-xs font-bold tracking-wider">
					<div className="relative h-5 bg-black/40 border-2 border-terra-border rounded">
						<div className="absolute top-0 left-0 h-full bg-terra-red w-[90%] flex items-center justify-center text-white">
							<span className="drop-shadow-md z-10">
								HP 2025/2025
							</span>
						</div>
					</div>
					<div className="relative h-5 bg-black/40 border-2 border-terra-border rounded">
						<div className="absolute top-0 left-0 h-full bg-terra-blue w-[100%] flex items-center justify-center text-white">
							<span className="drop-shadow-md z-10">
								MP (Caffeine) ∞
							</span>
						</div>
					</div>
				</div>
			</header>

			<div className="flex flex-1 overflow-hidden relative">
				<nav className="w-20 md:w-24 bg-terra-panel border-r-4 border-terra-border flex flex-col items-center py-4 gap-4 shrink-0 z-10">
					<TabButton
						icon="📜"
						label="Status"
						active={activeTab === "status"}
						onClick={() => handleTabChange("status")}
					/>
					<TabButton
						icon="⚔️"
						label="Quest"
						active={activeTab === "quest"}
						onClick={() => handleTabChange("quest")}
					/>
					<TabButton
						icon="🎒"
						label="Inven"
						active={activeTab === "inventory"}
						onClick={() => handleTabChange("inventory")}
					/>
					<TabButton
						icon="📖"
						label="Log"
						active={activeTab === "journal"}
						onClick={() => handleTabChange("journal")}
					/>
					<TabButton
						icon="💬"
						label="Talk"
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
				${
					active
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
