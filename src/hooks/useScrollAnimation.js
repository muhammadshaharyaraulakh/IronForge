import { useEffect, useRef, useState } from 'react';

/**
 * Hook to fade in an element when it enters the viewport
 * Returns a ref and an isVisible boolean.
 */
export default function useScrollAnimation(threshold = 0.15, once = true) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, isVisible];
}
