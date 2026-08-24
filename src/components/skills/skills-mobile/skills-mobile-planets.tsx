import type { SkillPlanet } from '@/mock/skills';
import { useCallback, useEffect, useRef, useState } from 'react';
import SkillsMobilePlanet from './skills-mobile-planet';
import SkillsMobileProgress from './skills-mobile-progress';

interface SkillsMobilePlanetsProps {
  skillPlanets: SkillPlanet[];
}

export default function SkillsMobilePlanets({ skillPlanets }: SkillsMobilePlanetsProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);

  const setSectionRef = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      sectionRefs.current[index] = element;
    },
    [],
  );

  useEffect(() => {
    const updateProgress = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const inPlanetsZone =
        wrapperRect.top < window.innerHeight * 0.85 &&
        wrapperRect.bottom > window.innerHeight * 0.25;
      setProgressVisible(inPlanetsZone);

      const viewportFocus = window.innerHeight * 0.38;
      let closestIndex = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const sectionFocus = rect.top + rect.height * 0.38;
        const distance = Math.abs(sectionFocus - viewportFocus);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [skillPlanets.length]);

  return (
    <>
      <SkillsMobileProgress
        skillPlanets={skillPlanets}
        activeIndex={activeIndex}
        visible={progressVisible}
      />
      <div ref={wrapperRef} className="w-full">
        {skillPlanets.map((planet, index) => (
          <SkillsMobilePlanet
            key={planet.headline}
            ref={setSectionRef(index)}
            planet={planet}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
