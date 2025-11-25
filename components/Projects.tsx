import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
    const projects = [
        {
            title: 'HyreDrogan',
            role: 'Agentic Hiring Intelligence Tool',
            description: 'Developed an Agentic AI-driven hiring platform to automate recruitment. Built intelligent agents for candidate screening, role matching, and recruiter workflow automation using LangChain.',
            tags: ['Next.js', 'Python', 'LangChain', 'Microservices', 'AI'],
            image: '/hyredrogan_dashboard.png',
            github: '#',
            demo: 'https://hyrdragon.digitaldiffuse.in/'
        },
        {
            title: 'Bizbooks',
            role: 'Accounting Tool',
            description: 'Designed and developed an accounting and CRM platform for SMBs. Built modules for payables, receivables, and automated billing workflows using MERN stack.',
            tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Automation'],
            image: '/bizbooks_dashboard.png',
            github: '#',
            demo: '#'
        },
        {
            title: 'Netflix Clone',
            role: 'Streaming Platform Clone',
            description: 'A fully responsive Netflix clone with movie trailers, user authentication, and dynamic content loading using TMDB API.',
            tags: ['React.js',],
            image: '/netflix_clone.png',
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className="grid-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`glass ${styles.projectCard} hover-lift fade-in`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.role}>{project.role}</p>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.links}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <FaGithub />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
