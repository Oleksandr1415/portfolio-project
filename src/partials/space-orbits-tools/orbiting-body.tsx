import { forwardRef, useEffect, useImperativeHandle, useRef, type ReactNode } from 'react';
import { cn } from '@/utils/helpers';

export interface OrbitingBodyHandle {
  updateAngle: (angle: number) => void;
}

export interface OrbitingBodyProps {
  className?: string;
  orbitRadius: number; // distance from center, in % of parent container
  phaseShift?: number;
  speed?: number;
  children: ReactNode;
}

const OrbitingBody = forwardRef<OrbitingBodyHandle, OrbitingBodyProps>(
  ({ className, orbitRadius, phaseShift = 0, speed = 1, children }, ref) => {
    const elRef = useRef<HTMLDivElement>(null);
    const orbitSizeRef = useRef(0);
    const modeRef = useRef<'playing' | 'paused'>('playing');
    const pauseStartAngleRef = useRef(0);
    const offsetRef = useRef(0);
    const currentLiveAngleRef = useRef(0);

    useEffect(() => {
      const el = elRef.current;
      if (!el) return;

      const parent = el.offsetParent as HTMLElement | null;
      if (!parent) return;

      const updateOrbitSize = () => {
        orbitSizeRef.current = parent.offsetWidth;
      };

      updateOrbitSize();
      const resizeObserver = new ResizeObserver(updateOrbitSize);
      resizeObserver.observe(parent);

      return () => resizeObserver.disconnect();
    }, []);

    useImperativeHandle(ref, () => ({
      updateAngle(angle: number) {
        const liveAngle = angle * speed + phaseShift;
        currentLiveAngleRef.current = liveAngle;

        if (modeRef.current === 'paused') return;

        const el = elRef.current;
        const orbitSize = orbitSizeRef.current;
        if (!el || orbitSize === 0) return;

        const effectiveAngle = liveAngle - offsetRef.current;
        const offsetX = (orbitRadius / 100) * orbitSize * Math.cos(effectiveAngle);
        const offsetY = (orbitRadius / 100) * orbitSize * Math.sin(effectiveAngle);

        el.style.transform = `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), 0)`;
      },
    }));

    const handleMouseEnter = () => {
      pauseStartAngleRef.current = currentLiveAngleRef.current;
      modeRef.current = 'paused';
    };

    const handleMouseLeave = () => {
      offsetRef.current += currentLiveAngleRef.current - pauseStartAngleRef.current;
      modeRef.current = 'playing';
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={elRef}
        className={cn(['absolute top-1/2 left-1/2 will-change-transform', className])}
      >
        {children}
      </div>
    );
  },
);
OrbitingBody.displayName = 'OrbitingBody';

export default OrbitingBody;
