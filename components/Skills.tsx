import { FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiBootstrap, SiMui, SiExpress, SiMongodb, SiPostman, SiRedux } from 'react-icons/si';
import { TbRobot } from 'react-icons/tb';
import styles from './Skills.module.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React.js', icon: <FaReact /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'JavaScript', icon: <SiJavascript /> },
                { name: 'Bootstrap', icon: <SiBootstrap /> },
                { name: 'MUI', icon: <SiMui /> },
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'Python', icon: <FaPython /> },
                { name: 'REST APIs', icon: <FaNodeJs /> },
            ]
        },
        {
            title: 'AI & Automation',
            skills: [
                { name: 'RAG', icon: <TbRobot /> },
                { name: 'LangChain', icon: <TbRobot /> },
                { name: 'LangGraph', icon: <TbRobot /> },
                { name: 'Agentic AI', icon: <TbRobot /> },
            ]
        },
        {
            title: 'Database & Tools',
            skills: [
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'Git', icon: <FaGitAlt /> },
                { name: 'Postman', icon: <SiPostman /> },
                { name: 'Redux', icon: <SiRedux /> },
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="grid-2">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass" style={{ padding: '30px' }}>
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.grid}>
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className={`${styles.skillItem} hover-lift hover-glow`}>
                                        <div className={styles.icon}>{skill.icon}</div>
                                        <p className={styles.name}>{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
