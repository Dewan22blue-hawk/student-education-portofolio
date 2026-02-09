import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * useTypingAnimation - Custom GSAP hook for realistic typing effect
 * Features: Character-by-character reveal, cursor blink, text rotation
 * 
 * @param {Array} texts - Array of strings to rotate
 * @param {Object} options - Configuration options
 * @returns {Object} - Ref for container element
 */
const useTypingAnimation = (
    texts = [],
    options = {}
) => {
    const textRef = useRef(null);
    const cursorRef = useRef(null);
    const timelineRef = useRef(null);

    const config = {
        typingSpeed: 0.06, // seconds per character (human-like variance)
        deletingSpeed: 0.03,
        pauseDuration: 2, // pause between text changes
        cursorBlinkSpeed: 0.5,
        loop: true,
        ...options
    };

    useEffect(() => {
        if (!textRef.current || texts.length === 0) return;

        const textElement = textRef.current;
        let currentIndex = 0;

        // Cursor blink animation
        if (cursorRef.current) {
            gsap.to(cursorRef.current, {
                opacity: 0,
                duration: config.cursorBlinkSpeed,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });
        }

        const typeText = (text) => {
            const chars = text.split('');
            const tl = gsap.timeline();

            // Type each character with slight variance for natural feel
            chars.forEach((char, index) => {
                tl.to({}, {
                    duration: config.typingSpeed * (0.8 + Math.random() * 0.4), // Add variance
                    onStart: () => {
                        textElement.textContent = text.substring(0, index + 1);
                    },
                });
            });

            return tl;
        };

        const deleteText = () => {
            const currentText = textElement.textContent;
            const tl = gsap.timeline();

            for (let i = currentText.length; i >= 0; i--) {
                tl.to({}, {
                    duration: config.deletingSpeed,
                    onStart: () => {
                        textElement.textContent = currentText.substring(0, i);
                    },
                });
            }

            return tl;
        };

        const animateSequence = () => {
            const masterTimeline = gsap.timeline({
                repeat: config.loop ? -1 : 0,
                onRepeat: () => {
                    currentIndex = (currentIndex + 1) % texts.length;
                }
            });

            masterTimeline
                .add(typeText(texts[currentIndex]))
                .to({}, { duration: config.pauseDuration })
                .add(deleteText())
                .to({}, { duration: 0.5 }); // Short pause before next text

            timelineRef.current = masterTimeline;
        };

        animateSequence();

        // Cleanup
        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, [texts, config.typingSpeed, config.deletingSpeed, config.pauseDuration, config.loop]);

    return { textRef, cursorRef };
};

export default useTypingAnimation;
