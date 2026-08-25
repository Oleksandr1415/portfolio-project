import { cn } from '@/utils/helpers';
import { Dot, ChevronRight } from 'lucide-react';

export interface BadgesProps {
  badgeClass?: string;
  badgeList?: string[];
  className?: string;
  icon?: null | 'dot' | 'chevronRight';
  iconSize?: number;
  variant?: 'default' | 'noBorder';
  style?:
    | 'default'
    | 'core'
    | 'markup'
    | 'tools'
    | 'framework'
    | 'design'
    | 'science'
    | 'experience'
    | 'germany';
}

const styles = {
  default: {
    badge: 'bg-white/7 border-white/15 text-[12px]',
    container: '',
    icon: 'text-white',
  },
  markup: {
    badge: 'border-skill-markup/35 text-skill-markup/90',
    container: '',
    icon: 'text-skill-markup',
  },
  tools: {
    badge: 'border-skill-tools/35 text-skill-tools/90',
    container: '',
    icon: 'text-skill-tools',
  },
  framework: {
    badge: 'border-skill-framework/35 text-[#b06af5]',
    container: '',
    icon: 'text-skill-framework',
  },
  design: {
    badge: 'border-skill-design/35 text-skill-design/90',
    container: '',
    icon: 'text-skill-design',
  },
  core: {
    badge: '',
    container: '',
    icon: '',
  },
  science: {
    badge: 'border-science/35 text-science',
    container: '',
    icon: 'text-science',
  },
  experience: {
    badge: 'border-experience/35 text-experience',
    container: '',
    icon: 'text-experience',
  },
  germany: {
    badge: 'border-germany/35 text-germany',
    container: '',
    icon: 'text-germany',
  },
};

const variants = {
  default: {
    badge: ' border-white/15 border',
    container: '',
  },
  noBorder: {
    badge: '',
    container: '',
  },
};

export default function Badges({
  badgeClass = '',
  badgeList = [],
  className = '',
  icon = null,
  iconSize = 4,
  style = undefined,
  variant = undefined,
}: BadgesProps) {
  const selectedVariant = variant ? variants[variant] : variants['default'];
  const selectedStyle = style ? styles[style] : styles['default'];

  return (
    <div
      data-slot="badges-container"
      className={cn(
        'flex flex-wrap items-center justify-center gap-2 text-black',
        selectedVariant.container,
        selectedStyle.container,
        className,
      )}
    >
      {badgeList.map((badge, index) => {
        return (
          <span
            key={`${badge}-${index}`}
            data-slot="badge"
            className={cn(
              'flex items-center justify-center px-3 py-1',
              'rounded-[10000px] bg-white/7 text-[12px] text-white/80 uppercase',
              selectedVariant.badge,
              selectedStyle.badge,
              '',
              badgeClass,
            )}
          >
            {icon === 'dot' && <Dot size={iconSize} className={cn([selectedStyle.icon])} />}
            {icon === 'chevronRight' && (
              <ChevronRight size={iconSize} className={cn([selectedStyle.icon])} />
            )}
            {badge}
          </span>
        );
      })}
    </div>
  );
}
