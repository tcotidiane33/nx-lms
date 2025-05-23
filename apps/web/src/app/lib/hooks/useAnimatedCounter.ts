import { useEffect } from 'react';

export function useAnimatedCounter(
  target: number,
  setter: React.Dispatch<React.SetStateAction<number>>,
  speed: number = 200
) {
  useEffect(() => {
    let current = 0;
    const increment = Math.max(target / speed, 1);

    function updateCounter() {
      current += increment;
      if (current < target) {
        setter(Math.floor(current));
        requestAnimationFrame(updateCounter);
      } else {
        setter(target);
      }
    }

    updateCounter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, speed]);
}
