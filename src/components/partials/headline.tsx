import { cn } from '@/utils/helpers';

interface HeadlineProps {
  className?: string;
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'badge';
}

const variants = {
  hero: 'text-8xl font-black font-heading',
  h1: 'text-6xl font-extrabold font-heading',
  h2: 'text-4xl font-bold font-heading',
  h3: 'text-xl font-semibold font-heading',
  h4: 'text-sm font-medium font-heading tracking-wide',
  label: 'text-xs font-semibold font-heading uppercase tracking-[0.45]',
  badge: 'text-[9px] font-semibold font-heading',
};

export default function Headline({ className, children, level, variant = 'h1' }: HeadlineProps) {
  const selectedLevel = level || Object.keys(variants).indexOf(variant) * 1 + 1;
  const Tag = `h${selectedLevel}` as `h${1 | 2 | 3 | 4 | 5 | 6}`;
  return <Tag className={cn(variants[variant], className)}>{children}</Tag>;
}
