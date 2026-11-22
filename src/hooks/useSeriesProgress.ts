import { useCallback, useEffect, useState } from 'react'

export type DayStatus = 'read' | 'tried'
type Progress = Record<number, DayStatus>

const KEY = 'aicadmia-series-progress-v1'
const EVENT = 'aicadmia-series-progress'

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Progress) : {}
  } catch {
    return {}
  }
}

function save(p: Progress) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
    window.dispatchEvent(new Event(EVENT))
  } catch {
    /* storage unavailable (private mode) — progress just won't persist */
  }
}

/** Per-visitor progress through the 30-day series, stored in the browser (no account needed). */
export function useSeriesProgress() {
  const [progress, setProgress] = useState<Progress>(() => (typeof window === 'undefined' ? {} : load()))

  useEffect(() => {
    const sync = () => setProgress(load())
    window.addEventListener(EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const markRead = useCallback((day: number) => {
    const p = load()
    if (!p[day]) {
      p[day] = 'read'
      save(p)
    }
  }, [])

  const toggleTried = useCallback((day: number) => {
    const p = load()
    p[day] = p[day] === 'tried' ? 'read' : 'tried'
    save(p)
  }, [])

  const reset = useCallback(() => save({}), [])

  const triedCount = Object.values(progress).filter((s) => s === 'tried').length
  const readCount = Object.keys(progress).length

  return { progress, markRead, toggleTried, reset, triedCount, readCount }
}
