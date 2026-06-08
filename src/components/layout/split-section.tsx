import { cn } from '@/lib/utils';

interface SplitSectionProps {
  /** The image / illustration slot */
  image: React.ReactNode;
  /** The text / content slot */
  content: React.ReactNode;
  /** Which side the image appears on. Defaults to "right". */
  imageSide?: 'left' | 'right';
  /**
   * Tailwind max-w-* class for the inner container.
   * Defaults to 'max-w-300' (1200px). Pass e.g. 'max-w-400' to widen.
   */
  maxWidth?: string;
  /**
   * Controls image column behaviour as the viewport narrows.
   * - false (default): image keeps its own intrinsic size (shrink-0).
   *   Use when the image has explicit fixed dimensions.
   * - true: image column shrinks proportionally with the viewport (fluid).
   *   Use when the image should fill its half of the row and scale down.
   */
  imageFluid?: boolean;
  /**
   * Applied to the outer <section>.
   * Use to override vertical padding or set a background colour.
   */
  className?: string;
}

/**
 * Reusable two-column section layout: content on one side, image on the other.
 *
 * - Centers the inner container with mx-auto up to `maxWidth`.
 * - Stacks vertically on mobile (content first, then image).
 * - Switches to side-by-side on lg breakpoint.
 */
export function SplitSection({
  image,
  content,
  imageSide = 'right',
  maxWidth = 'max-w-300',
  imageFluid = false,
  className,
}: SplitSectionProps) {
  const imageFirst = imageSide === 'left';

  return (
    <section className={cn('w-full px-6 py-20 md:py-30', className)}>
      {/* Centered container */}
      <div className={cn('mx-auto w-full', maxWidth)}>
        <div
          className={cn(
            'flex flex-col items-center gap-20 lg:flex-row lg:gap-25',
            imageFirst && 'lg:flex-row-reverse'
          )}
        >
          {/* Content — always first in DOM for SEO/accessibility */}
          <div className="flex min-w-0 flex-1 flex-col gap-4">{content}</div>

          {/* Image wrapper */}
          <div
            className={cn(
              'flex w-full items-center justify-center',
              imageFluid
                ? 'min-w-0 flex-1' // fluid: shrinks with viewport
                : 'shrink-0 lg:w-auto' // fixed: keeps intrinsic size
            )}
          >
            {image}
          </div>
        </div>
      </div>
    </section>
  );
}
