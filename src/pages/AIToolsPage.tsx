import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import FilterTabs from '../components/ui/FilterTabs'
import { aiTools, toolCategories } from '../data/aiTools'

export default function AIToolsPage() {
  const [category, setCategory] = useState('All')
  const [freeOnly, setFreeOnly] = useState(false)

  const filtered = useMemo(() => {
    return aiTools.filter((t) => {
      const matchCat = category === 'All' || t.category === category
      const matchFree = !freeOnly || t.free
      return matchCat && matchFree
    })
  }, [category, freeOnly])

  return (
    <div>
      <PageHero
        badge="AI Tool Directory"
        title="AI Tools"
        titleHighlight="Worth Knowing"
        description="An honest overview of the most useful AI tools available today — what they are good for, their limitations, and when to use each one."
      />

      <section className="pb-20">
        <div className="container-wide section-padding">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <FilterTabs options={toolCategories} active={category} onChange={setCategory} />
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setFreeOnly(!freeOnly)}
                className={`w-10 h-5 rounded-full transition-colors cursor-pointer ${freeOnly ? 'bg-purple-600' : 'bg-surface-3 border border-border'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white mt-0.5 transition-transform ${freeOnly ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </div>
              <span className="text-sm text-slate-400">Free tier only</span>
            </label>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tool, i) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="glass-card p-5 h-full hover:border-border-bright transition-all duration-300 hover:shadow-card-hover">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center font-display font-bold text-white text-sm`}>
                      {tool.name.charAt(0)}
                    </div>
                    <div className="flex items-center gap-2">
                      {tool.free ? (
                        <span className="text-xs font-mono text-green-400 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30">Free</span>
                      ) : (
                        <span className="text-xs font-mono text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">Paid</span>
                      )}
                      <span className="text-xs text-slate-500 font-mono">{tool.category}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-white text-lg mb-2">{tool.name}</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{tool.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tool.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-surface-3 border border-border text-slate-500 font-mono">{tag}</span>
                    ))}
                  </div>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-display font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Visit {tool.name}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 glass-card p-6 text-center">
            <p className="text-slate-400 text-sm">
              This directory is maintained independently. We are not affiliated with any of the tools listed. Listings are based on utility and our own testing.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
