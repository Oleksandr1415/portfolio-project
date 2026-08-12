import { type SkillPlanet } from '@/mock/skills';
import { cn } from '@/utils/helpers';
import SkillsSolarSystem from './skills-solar-system';
import SkillsDesktopBackground from './skills-desktop-background';

export interface SkillsPlanetDestopProps {
  className?: string;
  coreSkills: string[];
  skillPlanets: SkillPlanet[];
}

export default function skillsDesktop({
  className,
  coreSkills,
  skillPlanets,
}: SkillsPlanetDestopProps) {
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
