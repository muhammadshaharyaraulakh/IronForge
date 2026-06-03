import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 → target when the element enters the viewport.
 * Returns ref to attach + the current display value.
 */
export default function useCountUp(target, duration = 2000, decimals = 0) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const animate = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(target * eased);
              if (progress < 1) requestAnimationFrame(animate);
              else setValue(target);
            };
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toLocaleString();

  return [ref, formatted];
}
