import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, [role="button"]');
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
          const text = e.target.getAttribute('data-cursor-text') || '';
          setCursorText(text);
          setIsHovering(true);
        });
        el.addEventListener('mouseleave', () => {
          setCursorText('');
          setIsHovering(false);
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? 40 : 8),
        y: mousePosition.y - (isHovering ? 40 : 8),
        scale: isHovering ? 1 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    >
      <div 
        className={`flex items-center justify-center rounded-full border-2 border-white bg-transparent transition-all duration-300 ${
          isHovering ? 'w-20 h-20' : 'w-4 h-4'
        }`}
      >
        {isHovering && cursorText && (
          <span className="text-white text-[10px] font-bold tracking-wider uppercase">
            {cursorText}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default CustomCursor;
