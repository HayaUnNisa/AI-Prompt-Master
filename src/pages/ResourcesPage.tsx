import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Lock } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import FilterTabs from '../components/ui/FilterTabs'
import { resources, resourceCategories } from '../data/resourcesFaqs'

const typeColors: Record<string, string> = {
  PDF: 'tag-purple',
  Template: 'tag-cyan',
  Cheatsheet: 'tag-pink',
  Guide: 'tag-purple',
  Checklist: 'tag-cyan',
}

export default function ResourcesPage() {
  const [category, setCategory] = useState('All')
  const [freeOnly, setFreeOnly] = useState(false)

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchCat = category === 'All' || r.category === category
      const matchFree = !freeOnly || r.free
      return matchCat && matchFree
    })
  }, [category, freeOnly])

  return (
    <div>
      <PageHero
        badge="Free Downloads"
        title="Downloadable"
        titleHighlight="Resources"
        description="Cheatsheets, templates, guides, and checklists to support your AI prompting practice. Most resources are completely free."
      />

      <section className="pb-20">
        <div className="container-wide section-padding">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <FilterTabs
              options={resourceCategories}
              active={category}
              onChange={setCategory}
            />

            <button
              type="button"
              onClick={() => setFreeOnly(!freeOnly)}
              className="flex items-center gap-2"
            >
              <div
                className={`h-5 w-10 rounded-full transition-colors ${
                  freeOnly
                    ? 'bg-purple-600'
                    : 'border border-border bg-surface-3'
                }`}
              >
                <div
                  className={`mt-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
                    freeOnly ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </div>
              <span className="text-sm text-slate-400">Free only</span>
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface/50 p-10 text-center text-slate-400">
              No resources found for this filter.
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((resource, i) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="h-full"
                >
                  <div className="glass-card flex h-full flex-col p-5 transition-all duration-300 hover:border-border-bright hover:shadow-card-hover">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-600/20">
                        <FileText size={18} className="text-purple-400" />
                      </div>

                      <div className="flex flex-wrap items-center justify-end gap-2">
                        {resource.free ? (
                          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 font-mono text-xs text-green-400">
                            Free
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 rounded-full border border-border bg-surface-3 px-2 py-0.5 font-mono text-xs text-slate-400">
                            <Lock size={10} /> Premium
                          </span>
                        )}

                        <span className={typeColors[resource.type] || 'tag-purple'}>
                          {resource.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-2 font-display font-semibold text-white">
                      {resource.title}
                    </h3>

                    <p className="mb-5 text-sm leading-relaxed text-slate-400">
                      {resource.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="font-mono text-xs text-slate-500">
                        {resource.size}
                      </span>

                      {resource.free ? (
                        <a
                          href={resource.downloadUrl}
                          download
                          className="flex items-center gap-1.5 text-sm font-display font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                        >
                          <Download size={14} />
                          Download
                        </a>
                      ) : (
                        <a
                          href="/ebooks"
                          className="flex items-center gap-1.5 text-sm font-display font-semibold text-slate-400 transition-colors hover:text-white"
                        >
                          <Lock size={14} />
                          Get Access
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}