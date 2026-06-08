import { cn } from '@/lib/utils';

interface LogoProps {
  /** Tailwind text color class, e.g. 'text-white' or 'text-primary' */
  textColor?: string;
  /** 'sm' for header (24px), 'lg' for footer (40px). Defaults to 'sm'. */
  size?: 'sm' | 'lg';
  className?: string;
}

export function Logo({ textColor = 'text-white', size = 'sm', className }: LogoProps) {
  const isLg = size === 'lg';

  return (
    <div className={cn('flex items-center', isLg ? 'gap-4' : 'gap-3', className)}>
      {/* Icon placeholder — replace with actual logo SVG */}
      <div
        className={cn(
          'flex shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold',
          textColor,
          'h-10 w-10'
        )}
      >
        V
      </div>
      <span className={cn('font-semibold', textColor, isLg ? 'text-[40px] leading-13.5' : 'text-2xl')}>
        Vědomě
      </span>
    </div>
  );
}
