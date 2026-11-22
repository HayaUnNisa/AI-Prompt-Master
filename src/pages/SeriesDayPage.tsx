import { useCallback, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Instagram, Lock, Twitter } from 'lucide-react'
import { seriesDays, isUnlocked, formatUnlock, unlockDate } from '../data/series'
import { useSeriesProgress } from '../hooks/useSeriesProgress'
import DayGrid from '../components/series/DayGrid'
import Countdown from '../components/series/Countdown'

export default function SeriesDayPage() {
  const { day: param } = useParams()
  const n = Number(param)
  const d = seriesDays.find((x) => x.day === n)
  const unlocked = d ? isUnlocked(d.day) : false
  const { progress, markRead, toggleTried } = useSeriesProgress()

  useEffect(() => {
    if (d && unlocked) markRead(d.day)
  }, [d, unlocked, markRead])

  useEffect(() => {
    if (d) document.title = unlocked ? `Day ${d.day}: ${d.title} — Aicadmia` : `Day ${d.day} — Aicadmia`
  }, [d, unlocked])

  const remaining = useCallback(() => (d ? unlockDate(d.day).getTime() - 5 * 3600 * 1000 - Date.now() : 0), [d])

  if (!d) return <Navigate to="/series" replace />

  const prev = seriesDays.find((x) => x.day === d.day - 1)
  const next = seriesDays.find((x) => x.day === d.day + 1)
  const tried = progress[d.day] === 'tried'

  if (!unlocked) {
    return (
      <div className="pt-36 pb-28 container-wide section-padding">
        <div className="max-w-2xl">
          <Link to="/series" className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted hover:text-ink mb-10">
            <ArrowLeft size={14} /> All 30 days
          </Link>
          <p className="eyebrow mb-4 inline-flex items-center gap-2"><Lock size={12} /> Day {d.day} of 30</p>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1] text-ink mb-6">
            Not yet. <span className="italic text-accent">This one opens {formatUnlock(d.day)}.</span>
          </h1>
          <p className="text-[16px] text-ink-2 mb-10 max-w-lg">
            Each method unlocks at midnight (Pakistan time) on its day. Follow along on Instagram and X so you don’t miss it.
          </p>
          <Countdown remaining={remaining} className="mb-14" />
          <DayGrid compact />
        </div>
      </div>
    )
  }

  return (
    <article className="pt-32 pb-24">
      <div className="container-wide section-padding">
        <Link to="/series" className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted hover:text-ink mb-10">
          <ArrowLeft size={14} /> All 30 days
        </Link>

        {/* Header */}
        <header className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
          <div className="lg:col-span-2">
            <div className="font-display text-[6rem] lg:text-[8rem] leading-[0.8] text-accent">{String(d.day).padStart(2, '0')}</div>
            <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-muted">of 30 · {formatUnlock(d.day)}</p>
          </div>
          <div className="lg:col-span-9 lg:col-start-4">
            <h1 className="font-display text-[2.6rem] sm:text-6xl leading-[1.02] text-ink mb-6">{d.title}</h1>
            <p className="font-display italic text-2xl sm:text-[1.7rem] leading-snug text-ink-2 max-w-3xl">“{d.hook}”</p>
          </div>
        </header>

        {/* Facts row */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 border-b border-border">
          {[
            ['Difficulty', d.difficulty],
            ['Start-up cost', d.startCost],
            ['First money, realistically', d.firstMoney],
            ['Best for', d.whoFor],
          ].map(([k, v], i) => (
            <div key={k} className={`py-6 pr-6 ${i % 2 === 1 ? 'pl-6 border-l' : ''} ${i >= 2 ? 'lg:pl-6 lg:border-l border-t lg:border-t-0' : ''} border-border`}>
              <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-muted mb-2">{k}</dt>
              <dd className="text-[14.5px] text-ink leading-snug">{v}</dd>
            </div>
          ))}
        </dl>

        {/* Body */}
        <div className="grid lg:grid-cols-12 gap-12 pt-14">
          <div className="lg:col-span-7 lg:col-start-4 lg:row-start-1 order-2">
            <p className="text-[18px] leading-[1.75] text-ink first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-2 first-letter:leading-[0.85] first-letter:text-accent">
              {d.summary}
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-6">How to start</h2>
            <ol className="space-y-0 border-t border-border">
              {d.steps.map((s, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5 border-b border-border">
                  <span className="font-display text-2xl text-accent leading-none pt-0.5">{i + 1}</span>
                  <span className="text-[16px] leading-relaxed text-ink-2">{s}</span>
                </li>
              ))}
            </ol>

            <div className="mt-12 rounded-2xl bg-ink text-cream p-7 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-accent-light mb-3">The honest part</p>
              <p className="font-display text-2xl sm:text-[1.65rem] leading-snug">{d.honestNote}</p>
            </div>

            {/* Tracker action */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl border border-border bg-surface">
              <div className="flex-1">
                <p className="text-[15px] text-ink font-medium">{tried ? 'Nice — marked as tried.' : 'Done the first step?'}</p>
                <p className="text-[13px] text-ink-muted">Mark it and Day {d.day} fills in on your calendar.</p>
              </div>
              <button
                onClick={() => toggleTried(d.day)}
                className={tried ? 'btn-secondary' : 'btn-primary'}
                aria-pressed={tried}
              >
                <Check size={16} /> {tried ? 'Tried ✓ (undo)' : 'I tried this'}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-3 lg:col-start-1 lg:row-start-1 order-1 lg:sticky lg:top-28 self-start space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted mb-3">Tools mentioned</p>
              <ul className="flex flex-wrap gap-1.5">
                {d.tools.map((t) => (
                  <li key={t} className="tag-cyan">{t}</li>
                ))}
              </ul>
            </div>
            {(d.reelUrl || d.xUrl) && (
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted mb-3">Watch today’s episode</p>
                <div className="flex flex-col gap-2">
                  {d.reelUrl && (
                    <a href={d.reelUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] text-ink hover:text-accent">
                      <Instagram size={15} /> Reel on Instagram
                    </a>
                  )}
                  {d.xUrl && (
                    <a href={d.xUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[14px] text-ink hover:text-accent">
                      <Twitter size={15} /> Thread on X
                    </a>
                  )}
                </div>
              </div>
            )}
            <div className="hidden lg:block">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted mb-3">Your calendar</p>
              <DayGrid compact />
            </div>
          </aside>
        </div>

        {/* Prev / next */}
        <nav className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden mt-20">
          {prev ? (
            <Link to={`/series/${prev.day}`} className="group bg-midnight hover:bg-surface p-6 transition-colors">
              <p className="text-[12px] text-ink-muted mb-1 inline-flex items-center gap-1"><ArrowLeft size={12} /> Day {prev.day}</p>
              <p className="font-display text-xl text-ink">{prev.title}</p>
            </Link>
          ) : (
            <Link to="/series" className="bg-midnight hover:bg-surface p-6 transition-colors">
              <p className="text-[12px] text-ink-muted mb-1">Back to</p>
              <p className="font-display text-xl text-ink">The full calendar</p>
            </Link>
          )}
          {next && (
            <Link to={`/series/${next.day}`} className="group bg-midnight hover:bg-surface p-6 sm:text-right transition-colors">
              <p className="text-[12px] text-ink-muted mb-1 inline-flex items-center gap-1">Day {next.day} <ArrowRight size={12} /></p>
              <p className="font-display text-xl text-ink">
                {isUnlocked(next.day) ? next.title : `Opens ${formatUnlock(next.day)}`}
              </p>
            </Link>
          )}
        </nav>
      </div>
    </article>
  )
}
