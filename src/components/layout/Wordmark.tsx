interface WordmarkProps {
  className?: string
  tone?: 'ink' | 'cream'
}

/** Serif wordmark with a small lavender "spark" over the i — replaces the old gradient "A" tile. */
export default function Wordmark({ className = '', tone = 'ink' }: WordmarkProps) {
  const color = tone === 'ink' ? 'text-ink' : 'text-cream'
  return (
    <span className={`relative inline-flex items-baseline font-display text-[26px] leading-none ${color} ${className}`}>
      A<span className="relative">
        ı
        <svg
          aria-hidden
          viewBox="0 0 10 10"
          className="absolute top-[1px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] text-accent"
        >
          <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="currentColor" />
        </svg>
      </span>
      cadmia
    </span>
  )
}
