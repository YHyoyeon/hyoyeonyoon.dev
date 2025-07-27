import { useEffect, useState } from "react";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import NavigationButtons from "./components/NavigationButtons";
import Skills from "./components/Skills";

function App() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = Math.min(scrollTop / docHeight, 1);
			setScrollProgress(progress);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="App min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			<Header />
			<main>
				<Introduction scrollProgress={scrollProgress} />
				<Experience />
				<Skills />
				<Contact />
			</main>
			<Footer />
			<NavigationButtons />
		</div>
	);
}

export default App;
