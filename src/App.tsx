import { useEffect, useState } from "react";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import NavigationButtons from "./components/NavigationButtons";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Troubleshooting from "./components/Troubleshooting";

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
		<div className="App min-h-screen bg-orange-50">
			<Header />
			<main className="relative">
				<Introduction scrollProgress={scrollProgress} />
				<Experience />
				<Projects />
				<Skills />
				<Troubleshooting />
				<Contact />
			</main>
			<Footer />
			<NavigationButtons />
		</div>
	);
}

export default App;
