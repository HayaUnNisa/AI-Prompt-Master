import { useEffect, useState } from 'react'

interface CountdownProps {
  /** Function returning ms remaining; re-evaluated every second. */
  remaining: () => number
  className?: string
}

const pad = (n: number) => String(n).padStart(2, '0')

export default function Countdown({ remaining, className = '' }: CountdownProps) {
  const [ms, setMs] = useState(remaining())
  useEffect(() => {
    const t = setInterval(() => setMs(remaining()), 1000)
    return () => clearInterval(t)
  }, [remaining])

  if (ms <= 0) return null
  const s = Math.floor(ms / 1000)
  const units = [
    { v: Math.floor(s / 86400), l: 'days' },
    { v: Math.floor((s % 86400) / 3600), l: 'hours' },
    { v: Math.floor((s % 3600) / 60), l: 'min' },
    { v: s % 60, l: 'sec' },
  ].filter((u, i) => i > 0 || u.v > 0)

  return (
    <div className={`flex items-end gap-5 ${className}`} role="timer" aria-live="off">
      {units.map((u) => (
        <div key={u.l}>
          <div className="font-display text-5xl sm:text-6xl leading-none tabular-nums text-ink">{pad(u.v)}</div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-ink-muted">{u.l}</div>
        </div>
      ))}
    </div>
  )
}
