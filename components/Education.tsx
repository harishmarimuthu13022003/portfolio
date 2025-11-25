import styles from './Education.module.css';

const Education = () => {
    return (
        <section id="education" className="section-padding">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className={styles.educationGrid}>
                    {/* MCA */}
                    <div className={`glass ${styles.educationCard} hover-glow hover-lift`}>
                        <div className={styles.degreeIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                            </svg>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.degree}>Master of Computer Applications</h3>
                            <h4 className={styles.specialization}>MCA</h4>
                            <p className={styles.institution}>Dr.SNS Rajalakshmi CAS, Coimbatore</p>
                            <div className={styles.details}>
                                <span className={styles.duration}>2022 – 2024</span>
                                <span className={styles.cgpa}>CGPA: <strong>8.0</strong></span>
                            </div>
                        </div>
                    </div>

                    {/* BCA */}
                    <div className={`glass ${styles.educationCard} hover-glow hover-lift`}>
                        <div className={styles.degreeIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                            </svg>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.degree}>Bachelor of Computer Applications</h3>
                            <h4 className={styles.specialization}>BCA</h4>
                            <p className={styles.institution}>SRMV CAS, Coimbatore</p>
                            <div className={styles.details}>
                                <span className={styles.duration}>2019 – 2022</span>
                                <span className={styles.cgpa}>CGPA: <strong>7.1</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
