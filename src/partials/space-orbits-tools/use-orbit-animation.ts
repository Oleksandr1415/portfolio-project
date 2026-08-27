import { useEffect, useRef } from 'react';

/**
 * Frame-rate independent orbit driver.
 * `speed` is the angle step per frame at 60fps (legacy tuning); motion is normalized via delta time.
 */
export function useOrbitAnimation(speed: number, onTick: (angle: number) => void) {
  const onTickRef = useRef(onTick);

  useEffect(() => {
    onTickRef.current = onTick;
  });

  useEffect(() => {
    let angle = 0;
    let lastTime: number | null = null;
    let frameId = 0;

    const animate = (time: number) => {
      if (lastTime !== null) {
        const deltaSeconds = (time - lastTime) / 1000;
        angle += speed * deltaSeconds * 60;
        onTickRef.current(angle);
      }
      lastTime = time;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [speed]);
}
