import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  type ReactNode,
} from 'react';
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
    const orbitRootRef = useRef<HTMLElement | null>(null);
    const orbitSizeRef = useRef(0);
    const modeRef = useRef<'playing' | 'paused'>('playing');
    const pauseStartAngleRef = useRef(0);
    const offsetRef = useRef(0);
    const currentLiveAngleRef = useRef(0);
    const lastEffectiveAngleRef = useRef(0);

    const applyTransform = useCallback(
      (effectiveAngle: number) => {
        const el = elRef.current;
        const orbitSize = orbitSizeRef.current;
        if (!el || orbitSize === 0) return;

        const offsetX = (orbitRadius / 100) * orbitSize * Math.cos(effectiveAngle);
        const offsetY = (orbitRadius / 100) * orbitSize * Math.sin(effectiveAngle);
        el.style.transform = `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), 0)`;
      },
      [orbitRadius],
    );

    const measureOrbitSize = useCallback(() => {
      const el = elRef.current;
      if (!el) return 0;

      const root = orbitRootRef.current ?? (el.closest('[data-orbit-root]') as HTMLElement | null);
      if (!root) return 0;

      orbitRootRef.current = root;
      const size = root.offsetWidth;
      orbitSizeRef.current = size;

      if (size > 0 && modeRef.current === 'playing') {
        applyTransform(lastEffectiveAngleRef.current);
      }

      return size;
    }, [applyTransform]);

    useEffect(() => {
      const el = elRef.current;
      if (!el) return;

      measureOrbitSize();

      const resizeObserver = new ResizeObserver(() => {
        measureOrbitSize();
      });

      const root = orbitRootRef.current;
      if (root) resizeObserver.observe(root);

      // Re-measure when hidden containers become visible (e.g. mobile breakpoint).
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            measureOrbitSize();
          }
        },
        { threshold: 0 },
      );
      intersectionObserver.observe(el);

      return () => {
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
      };
    }, [measureOrbitSize]);

    useImperativeHandle(ref, () => ({
      updateAngle(angle: number) {
        const liveAngle = angle * speed + phaseShift;
        currentLiveAngleRef.current = liveAngle;

        const effectiveAngle = liveAngle - offsetRef.current;
        lastEffectiveAngleRef.current = effectiveAngle;

        if (modeRef.current === 'paused') return;

        if (orbitSizeRef.current === 0) {
          measureOrbitSize();
        }

        applyTransform(effectiveAngle);
      },
    }));

    const handleMouseEnter = () => {
      pauseStartAngleRef.current = currentLiveAngleRef.current;
      modeRef.current = 'paused';
    };

    const handleMouseLeave = () => {
      offsetRef.current += currentLiveAngleRef.current - pauseStartAngleRef.current;
      modeRef.current = 'playing';
      applyTransform(lastEffectiveAngleRef.current);
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
