'use client';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className={`glass ${styles.contactForm}`}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Name</label>
                            <input type="text" className={styles.input} placeholder="Your Name" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email</label>
                            <input type="email" className={styles.input} placeholder="Your Email" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Message</label>
                            <textarea className={styles.textarea} placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>

                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <FaPhone className={styles.infoIcon} />
                            <span>+91 936 141 6258</span>
                        </div>
                        <div className={styles.infoItem}>
                            <FaEnvelope className={styles.infoIcon} />
                            <span>harishmarimuthu1234@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
