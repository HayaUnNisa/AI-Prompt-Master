interface TypeCoverProps {
  title: string
  label?: string
  className?: string
}

const palettes = [
  { bg: '#E4DFF5', ink: '#4A3C99', line: 'rgba(74,60,153,0.18)' },
  { bg: '#1B1830', ink: '#B9AEE6', line: 'rgba(185,174,230,0.18)' },
  { bg: '#EEEBF6', ink: '#1B1830', line: 'rgba(27,24,48,0.12)' },
  { bg: '#5B4BB0', ink: '#FFFFFF', line: 'rgba(255,255,255,0.18)' },
]

function hash(s: string) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

/**
 * Typographic cover used instead of stock photos for courses and articles.
 * The palette and the ruled pattern are picked from the title, so every card is
 * different but consistent with the brand.
 */
export default function TypeCover({ title, label, className = '' }: TypeCoverProps) {
  const h = hash(title)
  const p = palettes[h % palettes.length]
  const angle = [0, 90, 45, -45][(h >> 3) % 4]
  const gap = 10 + ((h >> 5) % 4) * 4
  const initial = title.replace(/^(the|a|how to|what are|what is)\s+/i, '').charAt(0).toUpperCase()

  return (
    <div
      role="img"
      aria-label={title}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: p.bg,
        backgroundImage: `repeating-linear-gradient(${angle}deg, ${p.line} 0 1px, transparent 1px ${gap}px)`,
      }}
    >
      <span
        aria-hidden
        className="absolute -bottom-[0.18em] right-[0.08em] font-display leading-none select-none"
        style={{ color: p.ink, fontSize: 'clamp(6rem, 14vw, 11rem)', opacity: 0.9 }}
      >
        {initial}
      </span>
      {label && (
        <span
          className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.16em]"
          style={{ color: p.ink }}
        >
          {label}
        </span>
      )}
    </div>
  )
}
