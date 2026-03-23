'use client';
import { useEffect, useRef } from 'react';
import './custom-cursor.css';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;
        let animFrameId: number;
        let isVisible = false;

        const showCursor = () => {
            if (!isVisible) {
                dot.style.opacity = '1';
                ring.style.opacity = '1';
                isVisible = true;
            }
        };

        const hideCursor = () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
            isVisible = false;
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            showCursor();
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button')) {
                ring.classList.add('cursor-ring--expanded');
                dot.classList.add('cursor-dot--hidden');
            } else {
                ring.classList.remove('cursor-ring--expanded');
                dot.classList.remove('cursor-dot--hidden');
            }
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.1;
            ringY += (mouseY - ringY) * 0.1;
            ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
            animFrameId = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseleave', hideCursor);
        animFrameId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseleave', hideCursor);
            cancelAnimationFrame(animFrameId);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
        </>
    );
}
