'use client';
import { useEffect, useState } from 'react';
import styles from './CursorGlow.module.css';

interface Position {
    x: number;
    y: number;
}

const CursorGlow = () => {
    const [position, setPosition] = useState<Position>({ x: -100, y: -100 });
    const [trail, setTrail] = useState<Position[]>([]);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            const newPos = { x: e.clientX, y: e.clientY };
            setPosition(newPos);

            // Add to trail
            setTrail(prev => {
                const newTrail = [newPos, ...prev].slice(0, 8);
                return newTrail;
            });
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return (
        <>
            {/* Main cursor glow with pulse */}
            <div
                className={styles.cursorGlow}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
                }}
            />

            {/* Trailing particles */}
            {trail.map((pos, index) => (
                <div
                    key={index}
                    className={styles.trailParticle}
                    style={{
                        left: `${pos.x}px`,
                        top: `${pos.y}px`,
                        opacity: 1 - (index / trail.length),
                        transform: `translate(-50%, -50%) scale(${1 - (index / trail.length * 0.5)})`
                    }}
                />
            ))}
        </>
    );
};

export default CursorGlow;
