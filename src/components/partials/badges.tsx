import { cn } from '@/utils/helpers';

export interface BadgesProps {
  className?: string;
  badgeClass?: string;
  badgeList?: string[];
  variant?: 'default' | 'markup' | 'tool' | 'framework' | 'design';
}

const variants = {
  default: {
    badge: 'bg-white/7 border-white/15 text-[12px]',
    container: '',
  },
  markup: {
    badge: 'border-skill-markup/35 text-skill-markup/90',
    container: '',
  },
  tool: {
    badge: 'border-skill-tool/35 text-skill-tool/90',
    container: '',
  },
  framework: {
    badge: 'border-skill-framework/35 text-[#b06af5]',
    container: '',
  },
  design: {
    badge: 'border-skill-design/35 text-skill-design/90',
    container: '',
  },
};

export default function Badges({
  className = '',
  badgeClass = '',
  badgeList = [],
  variant = undefined,
}: BadgesProps) {
  const selectedVariant = variant ? variants[variant] : variants['default'];

  return (
    <div
      data-slot="badges-container"
      className={cn(
        'flex flex-wrap items-center justify-center gap-2 text-black',
        selectedVariant.container,
        className,
      )}
    >
      {badgeList.map((badge, index) => {
        return (
          <span
            key={`${badge}-${index}`}
            data-slot="badge"
            className={cn(
              'flex items-center justify-center border px-3 py-1',
              'rounded-[10000px] bg-white/7 text-[10px] text-white/80 uppercase',
              selectedVariant.badge,
              '',
              badgeClass,
            )}
          >
            {badge}
          </span>
        );
      })}
    </div>
  );
}
