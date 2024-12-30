import './projects-section.css';

export default function ProjectSection() {

    const projects = [
        { name: "Project 1", link: "https://github.com/user/project1" },
        { name: "Project 2", link: "https://github.com/user/project2" },
    ]

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <ul>
                {/* {
                    projects.map((project, index) => (
                        <li key={index}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
                        </li>
                    ))
                } */}
                <li>
                    <a href="*" target="_blank" rel="noopener noreferrer" className='cursor-not-allowed'>Coming soon...</a>
                </li>
            </ul>
        </section>
    );
}