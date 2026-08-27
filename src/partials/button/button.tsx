import { cn } from '@/utils/helpers';

type ButtonVariants = 'primary' | 'outline';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariants;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const BASE_CLASS =
  'inline-flex items-center justify-center font-semibold rounded-full transition-transform duration-300 h-14 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer focus-ring';

const variants: Record<NonNullable<ButtonProps['variant']>, string[]> = {
  primary: ['group relative overflow-hidden px-8 text-lg tracking-wide text-white'],
  outline: [
    'w-full max-w-100 min-w-35 border text-md border-white/20 bg-transparent text-text-gray-lighter tracking-widest md:max-w-45',
    'transition-colors duration-300',
    'hover:border-white/60 hover:text-white',
  ],
};

export default function Button({
  children,
  className,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classNames = cn([BASE_CLASS, ...variants[variant], className]);

  if (variant === 'primary') {
    const content = (
      <>
        <span aria-hidden className="from-primary to-accent absolute inset-0 bg-linear-to-r" />
        <span
          aria-hidden
          className="to-primary-light from-accent-dark absolute inset-0 origin-left scale-x-0 bg-linear-to-r transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </>
    );

    if (href) {
      return (
        <a href={href} className={classNames}>
          {content}
        </a>
      );
    }

    return (
      <button type={type} onClick={onClick} disabled={disabled} className={classNames}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classNames}>
      {children}
    </button>
  );
}
