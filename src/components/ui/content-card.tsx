import { cn } from '@/lib/utils';

interface ContentCardProps {
  /** Card heading */
  title: string;
  /** Body content rendered below the title */
  content: React.ReactNode;
  /** Called when the action button is clicked */
  onAction: () => void;
  /** Button label. Defaults to "Více". */
  actionLabel?: string;
  /** Optional image / media slot rendered at the top of the card */
  image?: React.ReactNode;
  /** Tailwind max-w-* class. Defaults to unconstrained. */
  maxWidth?: string;
  /** Additional classes applied to the card root element */
  className?: string;
}

/**
 * Reusable content card with an optional image slot, title, body content and
 * an action button. Shadow appears on hover via CSS transition.
 */
export function ContentCard({
  title,
  content,
  onAction,
  actionLabel = 'Více',
  image,
  maxWidth,
  className,
}: ContentCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg bg-white',
        'shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]',
        'transition-shadow duration-300 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.35)]',
        maxWidth,
        className
      )}
    >
      {/* Image slot */}
      {image && <div className="shrink-0">{image}</div>}

      {/* Content area */}
      <div className="flex flex-1 flex-col justify-between gap-4 p-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold leading-9 text-primary">{title}</h3>
          <div className="text-base leading-6.5 text-black">{content}</div>
        </div>

        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-2 text-base leading-6.5 text-white transition-colors duration-200 hover:bg-primary/90"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}
