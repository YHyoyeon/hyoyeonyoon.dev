import { Menu, X, Github } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "소개", href: "#about" },
		{ name: "경력", href: "#experience" },
		{ name: "기술스택", href: "#skills" },
		{ name: "연락처", href: "#contact" },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/95 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<h1
							className={`text-xl font-bold transition-colors duration-300 ${
								isScrolled ? "text-gray-900" : "text-white"
							}`}
						>
							윤효연
						</h1>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex space-x-8 items-center">
						{navItems.map((item) => (
							<button
								key={item.name}
								onClick={() => scrollToSection(item.href)}
								className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
									isScrolled ? "text-gray-700" : "text-white"
								}`}
							>
								{item.name}
							</button>
						))}
						<a
							href="https://github.com/YHyoyeon"
							target="_blank"
							rel="noopener noreferrer"
							className={`p-2 rounded-md transition-colors duration-300 hover:text-blue-600 ${
								isScrolled ? "text-gray-700" : "text-white"
							}`}
						>
							<Github size={20} />
						</a>
					</nav>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`p-2 rounded-md transition-colors duration-300 ${
								isScrolled ? "text-gray-700" : "text-white"
							}`}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={() => scrollToSection(item.href)}
									className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
								>
									{item.name}
								</button>
							))}
							<a
								href="https://github.com/YHyoyeon"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-300"
							>
								<Github size={16} />
								<span>GitHub</span>
							</a>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
