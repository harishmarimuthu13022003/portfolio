'use client';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <div className={styles.iconContainer}>
                {theme === 'dark' ? (
                    <FaSun className={styles.icon} />
                ) : (
                    <FaMoon className={styles.icon} />
                )}
            </div>
        </button>
    );
};

export default ThemeToggle;
