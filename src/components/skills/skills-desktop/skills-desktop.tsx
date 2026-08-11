import { useEffect, useRef } from 'react';
import { type SkillsMoonHandle } from '../../../../trash-bin/skills-desktop-moon';
import { type SkillPlanets } from '@/mock/skills';
import { cn } from '@/utils/helpers';
import SkillsSolarSystem from './skills-solar-system';
import SkillsDesktopBackground from './skills-desktop-background';

export interface SkillsPlanetDestopProps {
  className?: string;
  coreSkills: string[];
  skillPlanets: SkillPlanets[];
}

export default function skillsDesktop({
  className,
  coreSkills,
  skillPlanets,
}: SkillsPlanetDestopProps) {
  const speed = 0.02;
  const moonRefs = useRef<(SkillsMoonHandle | null)[]>([]);

  useEffect(() => {
    let angle = 0;
    let frameId: number;
    const animate = () => {
      angle += speed;
      moonRefs.current.forEach((moon) => moon?.updateAngle(angle));
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      className={cn([
        'relative z-1 hidden w-screen items-center justify-center lg:flex',
        className,
      ])}
    >
      <SkillsSolarSystem coreSkills={coreSkills} skillPlanets={skillPlanets} />
      <SkillsDesktopBackground />
    </div>
  );
}
