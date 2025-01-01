import './projects-section.css';

export default function ProjectSection() {

    const projects = [
        { name: "API Greencycle", description: "API contruída para gerenciar plataforma gestão de resíduos sólidos usando JAVA 21. Mais informações no README do projeto!", link: "https://github.com/CassianoSantosTech/greecycle-fiap" },
        { name: "Página pessoal", description: "Página construída para passar as principais informações pessoais de forma genérica, podendo facilmente ser ajustado para uma outra pessoa. Linguagens e tecnologias utilizadas: TypeScript e ReactJS!", link: "https://github.com/CassianoSantosTech/portfolioProject" },
    ]

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <ul>
                {
                    projects.map((project, index) => (
                        <li key={index}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
                        </li>
                    ))
                }
                {/* <li>
                    <a href="*" target="_blank" rel="noopener noreferrer" className='cursor-not-allowed'>Coming soon...</a>
                </li> */}
            </ul>
        </section>
    );
}