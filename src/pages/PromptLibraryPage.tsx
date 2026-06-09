import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SearchBar from '../components/ui/SearchBar'
import FilterTabs from '../components/ui/FilterTabs'
import { prompts, promptCategories } from '../data/prompts'

function PromptCard({ prompt }: { prompt: typeof prompts[0] }) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div layout className="glass-card p-5 hover:border-border-bright transition-all duration-300">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="tag-purple">{prompt.category}</span>
            <span className="tag-cyan">{prompt.difficulty}</span>
          </div>
          <h3 className="font-display font-semibold text-white text-base">{prompt.title}</h3>
          <p className="text-xs text-slate-500 mt-1 font-mono">{prompt.tool}</p>
        </div>
        <button
          onClick={handleCopy}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            copied
              ? 'bg-green-500/20 border border-green-500/40 text-green-400'
              : 'bg-surface-2 border border-border text-slate-400 hover:text-white hover:border-purple-500'
          }`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <p className="text-sm text-slate-400 mb-3 italic">Use case: {prompt.useCase}</p>

      <div className="bg-void/60 rounded-xl p-4 border border-border">
        <pre className={`text-sm text-slate-300 font-mono whitespace-pre-wrap leading-relaxed ${!expanded ? 'line-clamp-4' : ''}`}>
          {prompt.prompt}
        </pre>
        {prompt.prompt.length > 200 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors mt-2 font-mono"
          >
            {expanded ? <><ChevronUp size={12} /> Show less</> : <><ChevronDown size={12} /> Show full prompt</>}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {prompt.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-surface-3 border border-border text-slate-500 font-mono">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}

export default function PromptLibraryPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      const matchCat = category === 'All' || p.category === category
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.useCase.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      return matchCat && matchSearch
    })
  }, [search, category])

  return (
    <div>
      <PageHero
        badge="500+ Prompts"
        title="Prompt"
        titleHighlight="Library"
        description="Tested prompt templates organized by category. Copy, customize, and use immediately. New prompts added regularly."
      >
        <div className="inline-flex items-center gap-2 text-sm text-slate-400 bg-surface-2 border border-border rounded-xl px-4 py-2 font-mono">
          Click any prompt to expand it. Use the copy button to paste it directly into your AI tool.
        </div>
      </PageHero>

      <section className="pb-20">
        <div className="container-wide section-padding">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="sm:w-72">
              <SearchBar value={search} onChange={setSearch} placeholder="Search prompts..." />
            </div>
            <FilterTabs options={promptCategories} active={category} onChange={category} />
          </div>

          <div className="mb-4 text-sm text-slate-500 font-mono">
            Showing {filtered.length} of {prompts.length} prompts
          </div>

          <AnimatePresence>
            <motion.div layout className="grid md:grid-cols-2 gap-4">
              {filtered.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">No prompts found for that search.</div>
          )}
        </div>
      </section>
    </div>
  )
}
