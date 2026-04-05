import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

const Projects = () => {
    const projects = [
        {
            title: 'HyreDrogan',
            role: 'AI Hiring Intelligence Tool',
            description: 'A cutting-edge AI-driven hiring platform designed to modernize and automate the recruitment process from end-to-end. The system features sophisticated modules for automated candidate screening, precision role-based matching, and intelligent recruiter workflow orchestration. By utilizing advanced information retrieval and processing techniques, the platform helps HR professionals manage high-volume application pipelines with unprecedented accuracy. This tool significantly minimizes manual intervention, allowing teams to focus on strategic hiring decisions while maintaining a high standard of data integrity.',
            tags: ['React.js', 'Python', 'Microservices', 'AI', 'NLP'],
            image: '/hiring_platform_latest.png',
            github: '#',
            demo: 'https://hyre.1000dragons.ai'
        },
        {
            title: 'Dynamic Stock Portfolio AI',
            role: 'Stock Portfolio Assessment Tool',
            description: 'A sophisticated full-stack portfolio management application built with Next.js, Node.js, and MongoDB for seamless investment tracking. It features a real-time data engine that scrapes live financial metrics like P/E ratios and EPS to provide deeper insights into stock performance across NSE and BSE exchanges. The platform delivers a premium, glassmorphic user interface with interactive visualizations and automated sector-wise distribution analysis for data-driven decision-making. Designed for modern investors, the system ensures secure data persistence and high-performance cross-device access.',
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Web Scraping', 'FinTech'],
            image: '/stock_portfolio.png',
            github: 'https://github.com/harishmarimuthu13022003/dynamic_stocks_portfolio_frontend',
            demo: 'https://dynamic-stocks-portfolio-frontend.vercel.app/'
        },
        {
            title: 'Admission Portal',
            role: 'Admission Management CRM',
            description: 'A sophisticated Admission Management CRM architected with Next.js 14 and Express.js to modernize the student enrollment lifecycle. The platform features an interactive Dashboard HUD with real-time seat tracking across KCET, COMEDK, and Management quotas. It employs a secure RBAC system with unique interfaces for three distinct user roles, ensuring secure and efficient task management. Key technical highlights include atomic seat allocation logic, a sleek glassmorphic UI, and complex 15-field data validation for applicant profiles. (Sample users: admin - password123, admissionofficer@gmail.com - 123456, manager1@gmail.com - 123456)',
            tags: ['Next.js 14', 'Express.js', 'JWT', 'Mongoose', 'RBAC'],
            image: '/admission_crm_dashboard.png',
            github: 'https://github.com/harishmarimuthu13022003/Admission_Management_CRM_Frontend',
            demo: 'https://admissionmanagement-xi.vercel.app/'
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
