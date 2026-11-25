import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useUser } from '@clerk/clerk-react'
import { Download, Pencil } from 'lucide-react'

interface CertificateProps {
  courseSlug: string
  courseTitle: string
  lessons: number
  duration: string
}

// A4 landscape at 96 dpi — the certificate is drawn at this exact size and
// scaled down for the on-screen preview, so print and screen always match.
const W = 1123
const H = 794

const NAME_KEY = 'aicadmia-certificate-name'
const ISSUED_KEY = 'aicadmia-certificate-issued'

function readIssued(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(ISSUED_KEY) || '{}')
  } catch {
    return {}
  }
}

/** First completion date for a course is stored once, so the date and ID never change on reload. */
function useIssueDate(slug: string) {
  const [iso, setIso] = useState(() => readIssued()[slug] || new Date().toISOString())
  useEffect(() => {
    const all = readIssued()
    if (!all[slug]) {
      all[slug] = iso
      try {
        localStorage.setItem(ISSUED_KEY, JSON.stringify(all))
      } catch {
        /* storage unavailable */
      }
    } else if (all[slug] !== iso) {
      setIso(all[slug])
    }
  }, [slug, iso])
  return new Date(iso)
}

function hash(s: string) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619)
  return (h >>> 0).toString(36).toUpperCase().padStart(7, '0').slice(0, 7)
}

const COURSE_CODES: Record<string, string> = {
  'prompt-engineering-fundamentals': 'PEF',
  'advanced-prompt-techniques': 'APT',
  'ai-prompts-for-business': 'BUS',
  'ai-prompts-for-students': 'STU',
}

function courseCode(slug: string) {
  return (
    COURSE_CODES[slug] ||
    slug
      .split('-')
      .filter((w) => !['ai', 'for', 'the', 'and'].includes(w))
      .map((w) => w[0])
      .join('')
      .slice(0, 3)
      .toUpperCase()
  )
}

/* ---------------------------------------------------------------- seal --- */
function Seal() {
  const ring = 'AICADMIA · CERTIFIED · COMPLETION · '
  return (
    <svg width="132" height="132" viewBox="0 0 132 132" aria-hidden>
      <defs>
        <path id="cert-ring" d="M66,66 m-49,0 a49,49 0 1,1 98,0 a49,49 0 1,1 -98,0" />
      </defs>
      <circle cx="66" cy="66" r="64" fill="#EEEBF6" />
      <circle cx="66" cy="66" r="62" fill="none" stroke="#5B4BB0" strokeWidth="1" />
      <circle cx="66" cy="66" r="38" fill="none" stroke="#5B4BB0" strokeWidth="0.75" />
      <text fill="#4A3C99" fontFamily="'Inter Variable', Inter, sans-serif" fontSize="8.6" fontWeight="500">
        <textPath href="#cert-ring" textLength="304" lengthAdjust="spacing">{ring}</textPath>
      </text>
      <path d="M66 44 L69.6 62.4 L88 66 L69.6 69.6 L66 88 L62.4 69.6 L44 66 L62.4 62.4 Z" fill="#5B4BB0" />
    </svg>
  )
}

/* --------------------------------------------------------- certificate --- */
function Sheet({
  name,
  courseTitle,
  lessons,
  duration,
  date,
  id,
}: {
  name: string
  courseTitle: string
  lessons: number
  duration: string
  date: string
  id: string
}) {
  const nameSize = name.length > 26 ? 58 : name.length > 18 ? 70 : 82
  const titleSize = courseTitle.length > 34 ? 30 : 36

  return (
    <div
      className="cert-sheet relative"
      style={{ width: W, height: H, background: "#FFFFFF", color: "#1B1830", fontFamily: "'Inter Variable', Inter, sans-serif" }}
    >
      {/* frame: outer ink rule + inner hairline */}
      <div className="absolute" style={{ inset: 28, border: '1.5px solid #1B1830' }} />
      <div className="absolute" style={{ inset: 36, border: '0.75px solid #CCC6E0' }} />
      {/* lavender side band */}
      <div className="absolute" style={{ top: 37, bottom: 37, left: 37, width: 14, background: '#E4DFF5' }} />

      <div className="absolute flex flex-col items-center text-center" style={{ inset: '72px 110px 64px 120px' }}>
        {/* header */}
        <div className="w-full flex items-center justify-between">
          <span className="font-display text-[30px] leading-none" style={{ color: '#1B1830' }}>
            Aicadmia
          </span>
          <span className="text-[10.5px] tracking-[0.28em]" style={{ color: '#6E6888' }}>
            PRACTICAL AI EDUCATION
          </span>
        </div>

        <p className="mt-[58px] text-[12px] tracking-[0.42em]" style={{ color: '#5B4BB0' }}>
          CERTIFICATE OF COMPLETION
        </p>

        <p className="mt-6 font-display italic text-[24px]" style={{ color: '#4F4A68' }}>
          This certifies that
        </p>

        <p
          className="mt-2 font-display leading-[1.05] px-10 pb-3"
          style={{ fontSize: nameSize, color: '#1B1830', borderBottom: '1px solid #1B1830', minWidth: 520 }}
        >
          {name}
        </p>

        <p className="mt-6 text-[15px]" style={{ color: '#4F4A68' }}>
          has successfully completed the course
        </p>

        <p className="mt-2 font-display leading-tight max-w-[760px]" style={{ fontSize: titleSize, color: '#4A3C99' }}>
          {courseTitle}
        </p>

        <p className="mt-3 text-[13px]" style={{ color: '#6E6888' }}>
          {lessons} lessons · about {duration} of self-paced study · all module quizzes passed
        </p>

        {/* footer */}
        <div className="mt-auto w-full grid grid-cols-[1fr_auto_1fr] items-end gap-10">
          <div className="text-left">
            <p className="font-display text-[24px] leading-none pb-2" style={{ borderBottom: '1px solid #CCC6E0' }}>
              {date}
            </p>
            <p className="mt-2 text-[10.5px] tracking-[0.22em]" style={{ color: '#6E6888' }}>
              DATE OF COMPLETION
            </p>
          </div>
          <Seal />
          <div className="text-right">
            <p className="font-display italic text-[24px] leading-none pb-2" style={{ borderBottom: '1px solid #CCC6E0' }}>
              Aicadmia Team
            </p>
            <p className="mt-2 text-[10.5px] tracking-[0.22em]" style={{ color: '#6E6888' }}>
              ISSUED BY · {id}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------ wrapper --- */
export default function Certificate({ courseSlug, courseTitle, lessons, duration }: CertificateProps) {
  const { user } = useUser()
  const accountName = user?.fullName?.trim() || ''
  const [savedName, setSavedName] = useState(() => {
    try {
      return localStorage.getItem(NAME_KEY) || ''
    } catch {
      return ''
    }
  })
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')

  const name = savedName || accountName
  const issued = useIssueDate(courseSlug)
  const date = issued.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const id = `AIC-${courseCode(courseSlug)}-${hash(courseSlug + '|' + name.toLowerCase() + '|' + issued.toISOString().slice(0, 10))}`

  // scale the A4 sheet to the preview width
  const boxRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.5)
  useLayoutEffect(() => {
    const el = boxRef.current
    if (!el) return
    const update = () => setScale(el.clientWidth / W)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const saveName = () => {
    const v = draft.trim().replace(/\s+/g, ' ')
    if (!v) return
    try {
      localStorage.setItem(NAME_KEY, v)
    } catch {
      /* ignore */
    }
    setSavedName(v)
    setEditing(false)
  }

  const handlePrint = () => {
    document.body.classList.add('printing-certificate')
    const done = () => {
      document.body.classList.remove('printing-certificate')
      window.removeEventListener('afterprint', done)
    }
    window.addEventListener('afterprint', done)
    window.print()
    setTimeout(done, 1000)
  }

  const needsName = !name || editing

  return (
    <div>
      {needsName ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            saveName()
          }}
          className="mb-6 rounded-2xl border border-border bg-lavender p-5"
        >
          <label htmlFor="cert-name" className="block text-[14px] text-ink mb-1">
            Your name, as it should appear on the certificate
          </label>
          <p className="text-[12.5px] text-ink-muted mb-3">Check the spelling — this is what gets printed.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              id="cert-name"
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={accountName || 'Full name'}
              maxLength={40}
              className="flex-1 rounded-full border border-border-bright bg-surface px-4 py-2.5 text-[14px] text-ink placeholder:text-ink-muted focus:outline-none focus:border-accent"
            />
            <button type="submit" className="btn-primary justify-center" disabled={!draft.trim()}>
              Save name
            </button>
          </div>
        </form>
      ) : null}

      {/* preview */}
      <div
        ref={boxRef}
        className="relative w-full overflow-hidden rounded-xl border border-border shadow-card"
        style={{ height: H * scale }}
      >
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top left', width: W, height: H }}>
          <Sheet
            name={name || 'Your Name'}
            courseTitle={courseTitle}
            lessons={lessons}
            duration={duration}
            date={date}
            id={id}
          />
        </div>
      </div>

      {/* print copy (only visible while printing) */}
      {createPortal(
        <div className="cert-print" aria-hidden>
          <Sheet name={name || 'Your Name'} courseTitle={courseTitle} lessons={lessons} duration={duration} date={date} id={id} />
        </div>,
        document.body,
      )}

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handlePrint}
          disabled={!name}
          className="btn-primary flex-1 justify-center disabled:opacity-50"
        >
          <Download size={16} /> Download as PDF
        </button>
        {name && !editing && (
          <button
            type="button"
            onClick={() => {
              setDraft(name)
              setEditing(true)
            }}
            className="btn-secondary justify-center"
          >
            <Pencil size={15} /> Edit name
          </button>
        )}
      </div>
      <p className="mt-3 text-[12px] text-ink-muted">
        In the print window, choose <span className="text-ink">Save as PDF</span>, landscape, and turn off “Headers and footers”.
      </p>
    </div>
  )
}
