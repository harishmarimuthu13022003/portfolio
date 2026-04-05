import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className={`glass ${styles.aboutContent}`} style={{ padding: '40px' }}>
                    <div className={styles.text}>
                        <p style={{ marginBottom: '20px' }}>
                            I am a <span className={styles.highlight}>Full Stack Developer</span> with 2+ years of professional experience, specializing in <span className={styles.highlight}>AI-powered web applications</span> and modern development frameworks.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            My expertise lies in building scalable microservices using <span className={styles.highlight}>React.js, Next.js, Node.js, and Python</span>. I am deeply passionate about implementing agentic AI workflows with LangChain and LangGraph for intelligent automation.
                        </p>
                        <p>
                            I have a proven track record in developing business solutions including employee management systems and learning platforms, always aiming to deliver high-performance and user-centric applications.
                        </p>

                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>2+</span>
                                <span className={styles.statLabel}>Years Experience</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
