import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import { PROJECTS } from "../data/projects";

const Portfolio = () => {
    const { language } = useLanguage();
    const t = TRANSLATIONS[language];

    // Fallback for types until translations are fully updated
    const portfolioT = (t as any).portfolio || {
        title: "Portfolio",
        techStack: "Tech Stack"
    };

    return (
        <div className="h-full max-w-6xl mx-auto pb-20 animate-in fade-in">
            <h2 className="text-2xl text-orange-500 mb-6 flex items-center gap-3">
                {portfolioT.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="pixel-panel pixel-border p-6 transition-colors group relative flex flex-col h-full hover:shadow-lg">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-orange-500 group-hover:text-terra-accent transition-colors">
                                {project.title[language]}
                            </h3>
                            <span className="text-xs text-black font-bold bg-terra-item px-2 py-1 border border-terra-border-light rounded">
                                {project.period}
                            </span>
                        </div>

                        <p className="text-black text-sm mb-6 flex-grow leading-relaxed font-medium">
                            {project.overview[language]}
                        </p>

                        <div className="space-y-3">
                            <div className="text-xs text-black font-bold border-b border-terra-border-light pb-1 mb-2">
                                {portfolioT.techStack}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.slice(0, 6).map((tech, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-terra-panel border border-terra-border-light text-terra-text">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 6 && (
                                    <span className="text-xs px-2 py-1 text-black font-bold">
                                        +{project.technologies.length - 6}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
