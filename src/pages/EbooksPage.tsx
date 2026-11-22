import { useState } from 'react'
import { Download, ArrowUpRight } from 'lucide-react'
import { library } from '../data/library'
import BookCover from '../components/library/BookCover'

const filters = ['All', 'Beginners', 'Work', 'Students', 'Builders'] as const
type Filter = (typeof filters)[number]

const filterMap: Record<Exclude<Filter, 'All'>, string[]> = {
  Beginners: ['prompt-engineering-cheatsheet', 'prompt-quality-checklist', 'ai-tool-comparison-2026'],
  Work: ['business-prompt-templates', 'content-creator-playbook', 'ai-tool-comparison-2026'],
  Students: ['student-prompt-starter-kit', 'prompt-engineering-cheatsheet'],
  Builders: ['developer-reference-card', 'system-prompt-writing-guide'],
}

export default function EbooksPage() {
  const [filter, setFilter] = useState<Filter>('All')
  const books = filter === 'All' ? library : library.filter((b) => filterMap[filter].includes(b.slug))
  const totalPages = library.reduce((s, b) => s + b.pages, 0)

  return (
    <div className="pt-32 pb-24">
      <section className="container-wide section-padding">
        <div className="grid lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">The library</p>
            <h1 className="font-display text-6xl sm:text-7xl leading-[0.95] text-ink">
              Eight short books,
              <br />
              <span className="italic text-accent">free to download.</span>
            </h1>
          </div>
          <p className="lg:col-span-5 text-[15.5px] text-ink-2 leading-relaxed">
            Practical guides you can keep open while you work — {totalPages} pages in total. No email required, no upsell
            inside. Take what’s useful.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-8 pb-12" role="tablist" aria-label="Filter books">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-[13px] border transition-colors ${
                filter === f ? 'bg-ink text-cream border-ink' : 'border-border-bright text-ink-2 hover:border-ink hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {books.map((b) => {
            const i = library.indexOf(b)
            const paid = Boolean(b.price && b.buyUrl)
            return (
              <article key={b.slug} className="group flex flex-col">
                <a
                  href={paid ? b.buyUrl : b.file}
                  {...(paid ? { target: '_blank', rel: 'noreferrer' } : { download: true })}
                  className="block transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:-rotate-[0.6deg]"
                  aria-label={paid ? `Buy ${b.title}` : `Download ${b.title}`}
                >
                  <BookCover book={b} index={i} />
                </a>
                <div className="pt-5 flex-1 flex flex-col">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted mb-2">
                    For {b.forWho.toLowerCase()} · {b.pages} pages
                  </p>
                  <h2 className="font-display text-[1.45rem] leading-tight text-ink mb-2">{b.title}</h2>
                  <p className="text-[14px] text-ink-2 leading-relaxed mb-4">{b.description}</p>
                  <ul className="text-[13px] text-ink-muted space-y-1 mb-5">
                    {b.inside.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="text-accent">—</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                    {paid ? (
                      <>
                        <span className="font-display text-2xl text-ink">{b.price}</span>
                        <a href={b.buyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[13.5px] text-ink hover:text-accent">
                          Get it <ArrowUpRight size={15} />
                        </a>
                      </>
                    ) : (
                      <>
                        <span className="text-[13px] text-ink-muted">Free · PDF · {b.sizeMb} MB</span>
                        <a href={b.file} download className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink hover:text-accent">
                          <Download size={15} /> Download
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
