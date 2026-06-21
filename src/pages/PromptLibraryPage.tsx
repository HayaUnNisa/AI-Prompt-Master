import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SearchBar from '../components/ui/SearchBar'
import FilterTabs from '../components/ui/FilterTabs'
import { prompts, promptCategories } from '../data/prompts'

const PROMPTS_PER_PAGE = 20

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

          <h3 className="font-display font-semibold text-white text-base">
            {prompt.title}
          </h3>

          <p className="text-xs text-slate-500 mt-1 font-mono">
            {prompt.tool}
          </p>
        </div>

        <button
          type="button"
          aria-label={copied ? 'Prompt copied' : `Copy ${prompt.title} prompt`}
          title={copied ? 'Prompt copied' : 'Copy prompt'}
          onClick={handleCopy}
          className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            copied
              ? 'bg-green-500/20 border border-green-500/40 text-green-400'
              : 'bg-surface-2 border border-border text-slate-400 hover:text-white hover:border-purple-500'
          }`}
        >
          {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <p className="text-sm text-slate-400 mb-3 italic">
        Use case: {prompt.useCase}
      </p>

      <div className="bg-void/60 rounded-xl p-4 border border-border">
        <pre
          className={`text-sm text-slate-300 font-mono whitespace-pre-wrap leading-relaxed ${
            !expanded ? 'line-clamp-4' : ''
          }`}
        >
          {prompt.prompt}
        </pre>

        {prompt.prompt.length > 200 && (
          <button
            type="button"
            aria-label={expanded ? 'Show less prompt text' : 'Show full prompt text'}
            title={expanded ? 'Show less' : 'Show full prompt'}
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors mt-2 font-mono"
          >
            {expanded ? (
              <>
                <ChevronUp size={12} aria-hidden="true" /> Show less
              </>
            ) : (
              <>
                <ChevronDown size={12} aria-hidden="true" /> Show full prompt
              </>
            )}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-md bg-surface-3 border border-border text-slate-500 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function PromptLibraryPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      const matchCat = category === 'All' || p.category === category
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.useCase.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))

      return matchCat && matchSearch
    })
  }, [search, category])

  const totalPages = Math.ceil(filtered.length / PROMPTS_PER_PAGE)

  const paginatedPrompts = useMemo(() => {
    const startIndex = (currentPage - 1) * PROMPTS_PER_PAGE
    return filtered.slice(startIndex, startIndex + PROMPTS_PER_PAGE)
  }, [filtered, currentPage])

  const handleSearchChange = (value: string) => {
    setSearch(value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (value: string) => {
    setCategory(value)
    setCurrentPage(1)
  }

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
              <SearchBar
                value={search}
                onChange={handleSearchChange}
                placeholder="Search prompts..."
              />
            </div>

            <FilterTabs
              options={promptCategories}
              active={category}
              onChange={handleCategoryChange}
            />
          </div>

          <div className="mb-4 text-sm text-slate-500 font-mono">
            Showing {paginatedPrompts.length} of {filtered.length} prompts
          </div>

          <AnimatePresence mode="wait">
            <motion.div layout className="grid md:grid-cols-2 gap-4">
              {paginatedPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              No prompts found for that search.
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-16 flex flex-col items-center gap-4">
              <p className="text-sm text-slate-500 font-mono">
                Page {currentPage} of {totalPages}
              </p>

              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  aria-label="Previous page"
                  title="Previous page"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-purple-500/50 hover:text-white transition"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to page ${i + 1}`}
                    title={`Go to page ${i + 1}`}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-12 h-12 rounded-xl font-display font-semibold transition ${
                      currentPage === i + 1
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/20'
                        : 'glass-card text-slate-300 hover:border-purple-500/50 hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  type="button"
                  aria-label="Next page"
                  title="Next page"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-purple-500/50 hover:text-white transition"
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}