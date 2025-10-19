import { useEffect, useState, useRef } from 'react';

export const useAnimatedCounter = (target: number, isVisible: boolean, duration: number = 1500) => {
  const [count, setCount] = useState(0);
  // FIX: Initialize useRef with null to satisfy TypeScript's requirement for an initial value.
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, duration, isVisible]);

  return count;
};
