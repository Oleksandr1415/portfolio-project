import { cn } from '@/utils/helpers';

interface BadgesProps {
  className?: string;
  badgeClass?: string;
  badgeList?: string[];
  variant?: 'gray' | 'science' | 'experience' | 'after';
}

const variants = {
  gray: {
    container: '',
    badge: 'rounded-[10000px] border border-white/15 bg-white/7 text-white/80 text-xs uppercase',
  },
  science: {
    container: '',
    badge: '',
  },
  experience: {
    container: '',
    badge: '',
  },
  after: {
    container: '',
    badge: '',
  },
};

export default function Badges({
  className = '',
  badgeClass = '',
  badgeList = [],
  variant = undefined,
}: BadgesProps) {
  const selectedVariant = variant ? variants[variant] : variants['gray'];

  return (
    <div
      data-slot="badges-container"
      className={cn('flex gap-2 text-black', selectedVariant.container, className)}
    >
      {badgeList.map((badge, index) => {
        console.log(badge);
        return (
          <span
            key={`${badge}-${index}`}
            data-slot="badge"
            className={cn(
              'flex flex-wrap items-center justify-center px-3 py-1',
              selectedVariant.badge,
              'text-[10px]',
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
