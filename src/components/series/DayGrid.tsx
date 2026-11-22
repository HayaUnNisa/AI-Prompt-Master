import { Link } from 'react-router-dom'
import { Lock, Check } from 'lucide-react'
import { seriesDays, currentDay, formatUnlock } from '../../data/series'
import { useSeriesProgress } from '../../hooks/useSeriesProgress'

interface DayGridProps {
  compact?: boolean
}

/**
 * The 30-square series calendar. Each square is a day:
 * locked (shows unlock date) · open · read · tried (filled ink).
 */
export default function DayGrid({ compact = false }: DayGridProps) {
  const today = currentDay()
  const { progress } = useSeriesProgress()

  return (
    <ol
      className={`grid ${compact ? 'grid-cols-10 gap-1.5' : 'grid-cols-5 sm:grid-cols-6 lg:grid-cols-10 gap-2 sm:gap-2.5'}`}
      aria-label="30-day series calendar"
    >
      {seriesDays.map((d) => {
        const locked = d.day > today
        const isToday = d.day === today
        const status = progress[d.day]
        const base = compact ? 'h-9 text-[13px]' : 'aspect-square text-[clamp(1.1rem,2.2vw,1.6rem)]'

        let tone = 'bg-surface border-border text-ink hover:border-ink'
        if (status === 'tried') tone = 'bg-ink border-ink text-cream'
        else if (status === 'read') tone = 'bg-lavender-deep border-accent-light text-accent-dark hover:border-accent'
        if (locked) tone = 'bg-transparent border-dashed border-border-bright text-ink-muted/60'

        const inner = (
          <>
            <span className="font-display leading-none">{d.day}</span>
            {!compact && (
              <span className="absolute bottom-1.5 left-0 right-0 text-center text-[9.5px] sm:text-[10px] tracking-wide font-body">
                {locked ? (
                  <span className="inline-flex items-center gap-0.5"><Lock size={8} />{formatUnlock(d.day)}</span>
                ) : status === 'tried' ? (
                  <span className="inline-flex items-center gap-0.5"><Check size={9} />tried</span>
                ) : isToday ? (
                  'today'
                ) : null}
              </span>
            )}
            {isToday && !compact && status !== 'tried' && (
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
            )}
          </>
        )

        const cls = `relative flex items-center justify-center rounded-lg border transition-colors ${base} ${tone} ${
          isToday ? 'ring-2 ring-accent ring-offset-2 ring-offset-midnight' : ''
        }`

        return (
          <li key={d.day}>
            {locked ? (
              <div className={cls} aria-label={`Day ${d.day}, unlocks ${formatUnlock(d.day)}`}>{inner}</div>
            ) : (
              <Link to={`/series/${d.day}`} className={cls} aria-label={`Day ${d.day}: ${d.title}`}>
                {inner}
              </Link>
            )}
          </li>
        )
      })}
    </ol>
  )
}
