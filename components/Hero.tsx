import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.glow}></div>
            <div className={`container ${styles.content}`}>
                <p className={`${styles.greeting} fade-in`}>Hello, I'm</p>
                <h1 className={`${styles.name} fade-in`} style={{ animationDelay: '0.2s' }}>
                    HARISH M
                </h1>
                <h2 className={`${styles.role} fade-in`} style={{ animationDelay: '0.4s' }}>
                    Full Stack Developer & <br /> AI Solutions Engineer
                </h2>

                <div className={`${styles.buttons} fade-in`} style={{ animationDelay: '0.6s' }}>
                    <Link href="#projects" className="btn-primary">
                        View Work
                    </Link>
                    <a
                        href="/Harish_M_FSD_AI_resume_.pdf"
                        download="Harish_M_Resume.pdf"
                        className="btn-primary"
                    >
                        <FaDownload style={{ marginRight: '8px' }} />
                        Download Resume
                    </a>
                    <Link href="#contact" className="btn-primary" style={{ borderColor: 'var(--text-main)', color: 'var(--text-main)' }}>
                        Contact Me
                    </Link>
                </div>

                <div className={`${styles.socials} fade-in`} style={{ animationDelay: '0.8s' }}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/harish-m" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaLinkedin />
                    </a>
                    <a href="mailto:harishmarimuthu1234@gmail.com" className={styles.socialIcon}>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
