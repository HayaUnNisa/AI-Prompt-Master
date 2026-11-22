import { Link } from 'react-router-dom'
import { ArrowRight, Lock } from 'lucide-react'
import DayGrid from '../components/series/DayGrid'
import Countdown from '../components/series/Countdown'
import { seriesDays, currentDay, formatUnlock, msUntilLaunch } from '../data/series'
import { useSeriesProgress } from '../hooks/useSeriesProgress'

export default function SeriesPage() {
  const today = currentDay()
  const { triedCount, readCount, reset } = useSeriesProgress()
  const live = Math.max(0, Math.min(today, 30))
  const before = today < 1

  return (
    <div className="pt-32 pb-24">
      {/* Masthead */}
      <section className="container-wide section-padding">
        <div className="grid lg:grid-cols-12 gap-10 items-end pb-14 border-b border-border">
          <div className="lg:col-span-8">
            <p className="eyebrow mb-5">A free series · 23 Nov – 22 Dec 2026</p>
            <h1 className="font-display text-[3.2rem] sm:text-7xl lg:text-[6.2rem] leading-[0.95] text-ink">
              30 Days,
              <br />
              <span className="italic text-accent">30 Ways</span> to earn
              <br className="hidden sm:block" /> using AI.
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-5 text-[15px] text-ink-2 leading-relaxed">
            <p>
              One method a day, for thirty days. Each one is explained plainly: who it suits, the steps, the tools, how long it
              realistically takes, and the catch nobody mentions.
            </p>
            <p className="text-ink-muted text-[13.5px]">
              No income screenshots. No “passive income in a weekend.” Just real ways people use AI to get paid.
            </p>
          </div>
        </div>
      </section>

      {/* Status row */}
      <section className="container-wide section-padding">
        <div className="grid sm:grid-cols-3 border-b border-border">
          <div className="py-8 sm:pr-8 sm:border-r border-border">
            {before ? (
              <>
                <p className="text-[12px] uppercase tracking-[0.14em] text-ink-muted mb-4">Day 1 opens in</p>
                <Countdown remaining={msUntilLaunch} />
              </>
            ) : (
              <>
                <p className="text-[12px] uppercase tracking-[0.14em] text-ink-muted mb-3">Today</p>
                <p className="font-display text-6xl leading-none text-ink">
                  Day {Math.min(today, 30)}
                  <span className="text-ink-muted text-3xl"> / 30</span>
                </p>
              </>
            )}
          </div>
          <div className="py-8 sm:px-8 sm:border-r border-border">
            <p className="text-[12px] uppercase tracking-[0.14em] text-ink-muted mb-3">Your progress</p>
            <p className="font-display text-6xl leading-none text-ink">
              {triedCount}
              <span className="text-ink-muted text-3xl"> tried</span>
            </p>
            <div className="mt-4 h-1 bg-lavender-deep rounded-full overflow-hidden">
              <div className="h-full bg-ink transition-all" style={{ width: `${(triedCount / 30) * 100}%` }} />
            </div>
            <p className="mt-2 text-[12px] text-ink-muted">
              {readCount} read · saved on this device
              {readCount > 0 && (
                <>
                  {' · '}
                  <button onClick={() => confirm('Clear your series progress on this device?') && reset()} className="underline hover:text-ink">
                    reset
                  </button>
                </>
              )}
            </p>
          </div>
          <div className="py-8 sm:pl-8 flex flex-col justify-between gap-4">
            <p className="text-[14px] text-ink-2 leading-relaxed">
              Open a day, read it, and mark <span className="text-ink font-medium">“I tried this”</span> when you’ve actually
              done the first step. Your calendar fills in as you go.
            </p>
            {!before && live > 0 && (
              <Link to={`/series/${live}`} className="btn-primary self-start">
                Read Day {live} <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="container-wide section-padding pt-14">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-3xl text-ink">The calendar</h2>
          <div className="hidden sm:flex items-center gap-4 text-[12px] text-ink-muted">
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm border border-dashed border-border-bright" />Locked</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-surface border border-border" />Open</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-lavender-deep border border-accent-light" />Read</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-ink" />Tried</span>
          </div>
        </div>
        <DayGrid />
      </section>

      {/* Index */}
      <section className="container-wide section-padding pt-20">
        <h2 className="font-display text-3xl text-ink mb-2">All thirty</h2>
        <p className="text-[14px] text-ink-muted mb-8">Titles appear as each day opens.</p>
        <ol className="border-t border-border">
          {seriesDays.map((d) => {
            const open = d.day <= today
            return (
              <li key={d.day} className="border-b border-border">
                {open ? (
                  <Link to={`/series/${d.day}`} className="group grid grid-cols-[4rem_1fr_auto] sm:grid-cols-[6rem_1fr_10rem_auto] items-center gap-4 py-5">
                    <span className="font-display text-3xl text-ink-muted group-hover:text-accent transition-colors">
                      {String(d.day).padStart(2, '0')}
                    </span>
                    <span className="text-[16px] sm:text-[17px] text-ink group-hover:text-accent-dark transition-colors">{d.title}</span>
                    <span className="hidden sm:block text-[12px] text-ink-muted">{d.difficulty}</span>
                    <ArrowRight size={16} className="text-ink-muted group-hover:text-ink group-hover:translate-x-0.5 transition" />
                  </Link>
                ) : (
                  <div className="grid grid-cols-[4rem_1fr_auto] sm:grid-cols-[6rem_1fr_10rem_auto] items-center gap-4 py-5 text-ink-muted/70">
                    <span className="font-display text-3xl">{String(d.day).padStart(2, '0')}</span>
                    <span className="flex items-center gap-2 text-[15px]">
                      <span className="inline-block h-[0.7em] w-40 sm:w-72 rounded bg-lavender-deep" aria-hidden />
                    </span>
                    <span className="hidden sm:block text-[12px]">Opens {formatUnlock(d.day)}</span>
                    <Lock size={14} />
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}
