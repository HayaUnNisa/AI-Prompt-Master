import type { LibraryBook } from '../../data/library'

const tones = {
  ink: { bg: 'bg-ink', title: 'text-cream', meta: 'text-cream/55', rule: 'bg-accent-light' },
  accent: { bg: 'bg-accent', title: 'text-cream', meta: 'text-cream/65', rule: 'bg-cream/70' },
  lavender: { bg: 'bg-lavender-deep', title: 'text-ink', meta: 'text-ink-2', rule: 'bg-accent' },
  cream: { bg: 'bg-surface', title: 'text-ink', meta: 'text-ink-muted', rule: 'bg-ink' },
}

interface BookCoverProps {
  book: LibraryBook
  index: number
  className?: string
}

/** Typographic book cover — a printed-book look built in CSS, with a spine shadow on the left. */
export default function BookCover({ book, index, className = '' }: BookCoverProps) {
  const t = tones[book.tone]
  return (
    <div
      className={`relative aspect-[3/4] rounded-[4px_10px_10px_4px] ${t.bg} border border-black/5 overflow-hidden shadow-[inset_6px_0_0_rgba(0,0,0,0.08),0_1px_2px_rgba(27,24,48,0.06),0_10px_24px_-8px_rgba(27,24,48,0.25)] ${className}`}
    >
      <div className="absolute inset-y-0 left-[10px] w-px bg-black/10" aria-hidden />
      <div className="absolute inset-0 flex flex-col p-[9%] pl-[12%]">
        <div className={`flex justify-between text-[9px] uppercase tracking-[0.16em] ${t.meta}`}>
          <span>Aicadmia</span>
          <span>No. {String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className={`mt-auto mb-3 h-px w-8 ${t.rule}`} />
        <p className={`font-display text-[clamp(1.15rem,2.1vw,1.6rem)] leading-[1.05] ${t.title}`}>{book.title}</p>
        <p className={`mt-3 text-[9.5px] uppercase tracking-[0.16em] ${t.meta}`}>{book.kind}</p>
      </div>
    </div>
  )
}
