import { cn } from '@/utils/helpers';
import Headline from './headline.tsx';

interface HeadlineBlockProps {
  children: React.ReactNode;
  className?: string;
  headlineClass?: string;
  headlineLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  headlineVariant?: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'label' | 'badge';
  postHeadline?: string;
  postHeadlineClass?: string;
  subHeadline?: string;
  subHeadlineClass?: string;
}

const baseClass = 'flex flex-col items-center';

export default function HeadlineBlock({
  className,
  children,
  headlineClass,
  headlineLevel,
  headlineVariant = 'h3',
  postHeadline = '',
  postHeadlineClass = '',
  subHeadline = '',
  subHeadlineClass = '',
}: HeadlineBlockProps) {
  return (
    <>
      <div data-slot="headline-block-container" className={cn(baseClass, className)}>
        {subHeadline ? (
          <p
            data-slot="subHeadline"
            className={cn('text-subheadline text-xs tracking-[3px] uppercase', subHeadlineClass)}
          >
            {subHeadline}
          </p>
        ) : null}
        <Headline
          className={cn('pt-4', headlineClass)}
          level={headlineLevel}
          variant={headlineVariant}
        >
          {children}
        </Headline>
        <p
          data-slot="postHeadline"
          className={cn('pt-2 text-center text-base font-normal text-white/30', postHeadlineClass)}
        >
          {postHeadline}
        </p>
      </div>
    </>
  );
}
