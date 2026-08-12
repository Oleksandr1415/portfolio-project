import type { SkillPlanet } from '@/mock/skills';
import SkillsMobilePlanet from './skills-mobile-planet';

interface SkillsMobilePlanetsProps {
  skillPlanets: SkillPlanet[];
}

export default function SkillsMobilePlanets({ skillPlanets }: SkillsMobilePlanetsProps) {
  return (
    <>
      {skillPlanets.map((planet, index) => (
        <SkillsMobilePlanet key={planet.headline} planet={planet} index={index} />
      ))}
    </>
  );
}
