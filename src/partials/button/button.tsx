import { cn } from '@/utils/helpers';

type ButtonVariants = 'primary' | 'empty';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariants;
}

const BASE_CLASS =
  'inline-flex items-center justify-center rounded-full transition-transform duration-300 h-14';

const variants: Record<NonNullable<ButtonProps['variant']>, string[]> = {
  primary: [
    'group relative overflow-hidden px-8 text-sm font-semibold tracking-wide text-white',
    '',
  ],
  empty: [
    'w-full max-w-100 min-w-35 border border-white/20 bg-transparent text-text-gray-lighter font-semibold tracking-widest md:max-w-25',
    'transition-colors duration-300',
    'hover:border-white/60 hover:text-white',
  ],
};

export default function Button({
  children,
  className,
  href = '',
  variant = 'primary',
}: ButtonProps) {
  if (variant === 'primary') {
    return (
      <a href={href} className={cn([BASE_CLASS, ...variants.primary, className])}>
        <span aria-hidden className="from-primary to-accent absolute inset-0 bg-linear-to-r" />
        <span
          aria-hidden
          className="to-primary-light from-accent-dark absolute inset-0 origin-left scale-x-0 bg-linear-to-r transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <a href={href} className={cn([BASE_CLASS, ...variants.empty, className])}>
      {children}
    </a>
  );
}
