import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollTextReveal Component
 * Animates text from a dim color (gray) to a highlighted color (white/black) 
 * as the user scrolls.
 * 
 * @param {string} content - The text content to display
 * @param {string} className - Optional styling
 */
const ScrollTextReveal = ({ content, className = '' }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Clear any existing content to prevent duplication if re-rendering (though React handles this usually)
    // Actually we will let React render the spans, but we need to target them.
    // However, splitting text is easier done once.
    
    const chars = textRef.current.querySelectorAll('.reveal-char');
    
    gsap.fromTo(chars, 
      {
        color: "#6b7280", // Tailwind gray-500
        opacity: 0.3
      },
      {
        color: "#ffffff", // White for dark mode highlight
        opacity: 1,
        duration: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [content]);

  // Split text into words/chars
  const words = content.split(' ');

  return (
    <div ref={containerRef} className={`reveal-text-container ${className}`}>
      <p ref={textRef} className="leading-relaxed">
        {words.map((word, i) => (
            <span key={i} className="inline-block mr-1.5">
              {word.split('').map((char, j) => (
                <span key={j} className="reveal-char inline-block">
                  {char}
                </span>
              ))}
            </span>
        ))}
      </p>
    </div>
  );
};

export default ScrollTextReveal;
