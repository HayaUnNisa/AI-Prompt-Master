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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <FilterTabs options={resourceCategories} active={category} onChange={setCategory} />
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setFreeOnly(!freeOnly)}
                className={`w-10 h-5 rounded-full transition-colors cursor-pointer ${freeOnly ? 'bg-purple-600' : 'bg-surface-3 border border-border'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white mt-0.5 transition-transform ${freeOnly ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </div>
              <span className="text-sm text-slate-400">Free only</span>
            </label>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((resource, i) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="glass-card p-5 h-full hover:border-border-bright transition-all duration-300 hover:shadow-card-hover">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <FileText size={18} className="text-purple-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      {resource.free ? (
                        <span className="text-xs font-mono text-green-400 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30">Free</span>
                      ) : (
                        <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded-full bg-surface-3 border border-border flex items-center gap-1">
                          <Lock size={10} /> Premium
                        </span>
                      )}
                      <span className={typeColors[resource.type]}>{resource.type}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{resource.description}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-500 font-mono">{resource.size}</span>
                    {resource.free ? (
                      <button className="flex items-center gap-1.5 text-sm font-display font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                        <Download size={14} />
                        Download
                      </button>
                    ) : (
                      <button className="flex items-center gap-1.5 text-sm font-display font-semibold text-slate-400 hover:text-white transition-colors">
                        <Lock size={14} />
                        Get Access
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
