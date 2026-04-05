import styles from './Experience.module.css';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>

                <div className={styles.timeline}>
                    {/* Current Role */}
                    <div className={`${styles.item} ${styles.left}`}>
                        <div className={`glass ${styles.content} hover-glow`}>
                            <span className={styles.date}>July 2025 - Feb 2026</span>
                            <h3 className={styles.role}>Software Associate</h3>
                            <h4 className={styles.company}>SNS Square Consultancy Service</h4>
                            <ul className={styles.list}>
                                <li>Developed HyreDrogan, a cutting-edge AI-driven hiring platform.</li>
                                <li>Built intelligent agents for candidate screening and role matching.</li>
                                <li>Integrated AI-based resume analysis and real-time interview assistance.</li>
                                <li>Designed scalable microservice architecture for modular hiring operations.</li>
                                <li>Reduced manual screening time and improved candidate shortlisting accuracy.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Previous Role */}
                    <div className={`${styles.item} ${styles.right}`}>
                        <div className={`glass ${styles.content} hover-glow`}>
                            <span className={styles.date}>June 2024 - July 2025</span>
                            <h3 className={styles.role}>Junior Software Associate</h3>
                            <h4 className={styles.company}>SNS Square Consultancy Service</h4>
                            <ul className={styles.list}>
                                <li>Developed BizBooks, a comprehensive Accounting & CRM platform using the MERN stack and Next.js.</li>
                                <li>Built financial modules for invoicing, expense tracking, and automated billing workflows.</li>
                                <li>Engineered automation agents to convert emails into structured financial records.</li>
                                <li>Reduced manual data entry by implementing intelligent workflow automation for finance operations.</li>
                                <li>Integrated CRM features to enhance customer relationship management and financial transparency.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
