import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import DayGrid from '../components/series/DayGrid'
import Countdown from '../components/series/Countdown'
import BookCover from '../components/library/BookCover'
import { seriesDays, currentDay, msUntilLaunch } from '../data/series'
import { library } from '../data/library'
import { courses } from '../data/courses'
import { blogs } from '../data/blogs'
import { FAQPreview } from '../components/home/NewsletterFAQ'

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

function Hero() {
  const day = currentDay()
  const live = day >= 1 && day <= 30
  const today = live ? seriesDays[day - 1] : null

  return (
    <section className="pt-36 sm:pt-40 pb-16">
      <div className="container-wide section-padding">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.p {...reveal} className="eyebrow mb-6">
              Practical AI education · free to start
            </motion.p>
            <motion.h1
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.05 }}
              className="font-display text-[3.3rem] sm:text-[4.6rem] lg:text-[5.6rem] leading-[0.95] text-ink"
            >
              Learn to use AI well.
              <br />
              <span className="italic text-accent">Then put it to work.</span>
            </motion.h1>
            <motion.p
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.12 }}
              className="mt-8 text-[17px] leading-relaxed text-ink-2 max-w-xl"
            >
              Aicadmia teaches you to write better prompts for ChatGPT, Claude and Gemini — with short courses, a prompt
              library and free guides. No jargon, no hype, and nothing you can’t use the same day.
            </motion.p>
            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.18 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link to="/series" className="btn-primary">
                Follow the 30-day series <ArrowRight size={16} />
              </Link>
              <Link to="/courses" className="btn-secondary">
                Browse free courses
              </Link>
            </motion.div>
          </div>

          {/* "Today" card — the live series entry point */}
          <motion.aside
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.2 }}
            className="lg:col-span-5 lg:pl-6"
          >
            <div className="relative bg-surface border border-border rounded-2xl p-6 sm:p-7 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">30 Days, 30 Ways</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-accent-dark">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {live ? 'Live now' : day < 1 ? 'Starts 23 Nov' : 'Complete'}
                </span>
              </div>
              {today ? (
                <>
                  <p className="font-display text-[4.5rem] leading-[0.8] text-accent mb-4">
                    {String(today.day).padStart(2, '0')}
                  </p>
                  <p className="font-display text-[1.75rem] leading-tight text-ink mb-3">{today.title}</p>
                  <p className="text-[14px] text-ink-2 leading-relaxed mb-6">{today.hook}</p>
                  <Link to={`/series/${today.day}`} className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink hover:text-accent mb-7">
                    Read today’s method <ArrowRight size={15} />
                  </Link>
                </>
              ) : (
                <>
                  <p className="font-display text-[1.9rem] leading-tight text-ink mb-3">
                    Thirty ways to earn using AI — <span className="italic">one a day.</span>
                  </p>
                  <p className="text-[14px] text-ink-2 leading-relaxed mb-6">
                    Day 1 opens at midnight. Each method comes with steps, tools and an honest timeline.
                  </p>
                  {day < 1 && <Countdown remaining={msUntilLaunch} className="mb-7 [&_.font-display]:!text-4xl" />}
                </>
              )}
              <DayGrid compact />
            </div>
          </motion.aside>
        </div>

        {/* Honest numbers */}
        <motion.dl {...reveal} className="mt-20 grid grid-cols-2 lg:grid-cols-4 border-y border-border">
          {[
            [String(courses.length), 'free courses', '/courses'],
            ['100', 'tested prompts', '/prompt-library'],
            [String(library.length), 'free ebooks', '/ebooks'],
            [String(blogs.length), 'journal articles', '/blogs'],
          ].map(([n, l, href], i) => (
            <Link
              key={l}
              to={href}
              className={`group py-7 ${i > 0 ? 'pl-6 lg:border-l' : ''} ${i === 2 ? 'border-t lg:border-t-0 !pl-0 lg:!pl-6' : ''} ${i === 3 ? 'border-l border-t lg:border-t-0' : ''} border-border`}
            >
              <dt className="sr-only">{l}</dt>
              <dd className="font-display text-5xl text-ink leading-none group-hover:text-accent transition-colors">{n}</dd>
              <dd className="mt-2 text-[13px] text-ink-muted">{l}</dd>
            </Link>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

function SeriesSection() {
  return (
    <section className="py-24 bg-ink text-cream">
      <div className="container-wide section-padding">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div {...reveal} className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-accent-light mb-5">New · 23 Nov – 22 Dec</p>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.98] text-cream mb-6">
              Thirty days.
              <br />
              <span className="italic text-accent-light">Thirty honest ways</span> to earn with AI.
            </h2>
            <p className="text-[15.5px] text-cream/70 leading-relaxed mb-8 max-w-md">
              Freelancing, digital products, faceless content, small-business services. Every day we open one method and
              explain who it suits, the first steps, the tools — and the catch nobody mentions.
            </p>
            <Link
              to="/series"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream text-ink text-sm font-medium hover:bg-accent-light transition-colors"
            >
              See the calendar <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.ol {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="lg:col-span-6 lg:col-start-7 border-t border-cream/15">
            {[
              ['What it is', 'A plain-language explanation, without income screenshots.'],
              ['How to start', 'Four or five concrete steps you can do this week.'],
              ['Real timeline', 'How long first money usually takes, and what it costs to begin.'],
              ['The honest part', 'The pitfall, rule or risk worth knowing before you try.'],
              ['Your tracker', 'Mark each day you try. Your calendar fills in as you go.'],
            ].map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[3rem_1fr] gap-4 py-5 border-b border-cream/15">
                <span className="font-display text-2xl text-accent-light leading-none pt-0.5">{i + 1}</span>
                <div>
                  <p className="text-[15px] text-cream">{t}</p>
                  <p className="text-[14px] text-cream/55">{d}</p>
                </div>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  )
}

function Shelf() {
  const books = library.slice(0, 4)
  return (
    <section className="py-24">
      <div className="container-wide section-padding">
        <motion.div {...reveal} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">The library</p>
            <h2 className="section-heading">
              Free guides, <span className="italic text-accent">kept short.</span>
            </h2>
          </div>
          <Link to="/ebooks" className="inline-flex items-center gap-1.5 text-[14px] text-ink hover:text-accent">
            All {library.length} ebooks <ArrowRight size={15} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {books.map((b, i) => (
            <motion.a
              key={b.slug}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.06 }}
              href={b.file}
              download
              className="group block"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:-rotate-[0.6deg]">
                <BookCover book={b} index={i} />
              </div>
              <p className="mt-4 text-[14px] text-ink">{b.title}</p>
              <p className="text-[12.5px] text-ink-muted">{b.pages} pages · free PDF</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Courses() {
  return (
    <section className="py-24 bg-lavender">
      <div className="container-wide section-padding">
        <motion.div {...reveal} className="grid lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Courses</p>
            <h2 className="section-heading">
              Six short courses. <span className="italic text-accent">All free.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[15px] text-ink-2 leading-relaxed">
            Self-paced lessons with a quiz at the end of each module and a certificate when you finish. Start with the
            fundamentals or jump to what you need.
          </p>
        </motion.div>
        <ol className="border-t border-ink/15">
          {courses.map((c, i) => (
            <li key={c.slug}>
              <Link
                to={`/courses/${c.slug}`}
                className="group grid grid-cols-[3rem_1fr_auto] sm:grid-cols-[4rem_1fr_8rem_10rem_auto] items-center gap-4 py-6 border-b border-ink/15"
              >
                <span className="font-display text-2xl text-ink-muted">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block font-display text-[1.6rem] sm:text-3xl leading-tight text-ink group-hover:text-accent transition-colors">
                    {c.title}
                  </span>
                  <span className="hidden md:block text-[13.5px] text-ink-muted mt-1 max-w-xl">{c.description}</span>
                </span>
                <span className="hidden sm:block text-[13px] text-ink-2">{c.level}</span>
                <span className="hidden sm:block text-[13px] text-ink-2">
                  {c.lessons} lessons · {c.duration}
                </span>
                <ArrowUpRight size={18} className="text-ink-muted group-hover:text-ink transition-colors" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Journal() {
  const latest = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)
  const [lead, ...rest] = latest
  return (
    <section className="py-24">
      <div className="container-wide section-padding">
        <motion.div {...reveal} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">The journal</p>
            <h2 className="section-heading">Notes on prompting.</h2>
          </div>
          <Link to="/blogs" className="inline-flex items-center gap-1.5 text-[14px] text-ink hover:text-accent">
            All articles <ArrowRight size={15} />
          </Link>
        </motion.div>
        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div {...reveal} className="lg:col-span-7">
            <Link to={`/blogs/${lead.slug}`} className="group block">
              <p className="text-[12px] text-ink-muted mb-3">
                {lead.category} · {lead.readTime}
              </p>
              <h3 className="font-display text-4xl sm:text-5xl leading-[1.02] text-ink group-hover:text-accent transition-colors mb-4">
                {lead.title}
              </h3>
              <p className="text-[16px] text-ink-2 leading-relaxed max-w-xl">{lead.excerpt}</p>
            </Link>
          </motion.div>
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border lg:pl-10">
            {rest.map((b) => (
              <motion.div {...reveal} key={b.slug}>
                <Link to={`/blogs/${b.slug}`} className="group block py-6 border-b border-border last:border-b-0">
                  <p className="text-[12px] text-ink-muted mb-2">
                    {b.category} · {b.readTime}
                  </p>
                  <h3 className="font-display text-2xl leading-tight text-ink group-hover:text-accent transition-colors">{b.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SeriesSection />
      <Shelf />
      <Courses />
      <Journal />
      <FAQPreview />
    </>
  )
}
