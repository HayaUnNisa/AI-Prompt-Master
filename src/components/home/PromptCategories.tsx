import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Briefcase, GraduationCap, PenTool, Code2, Megaphone, Target, Search, Palette } from 'lucide-react'

const categories = [
  { icon: Briefcase, label: 'Business', count: 24, color: 'from-blue-500/20 to-indigo-500/10', border: 'border-blue-500/30', text: 'text-blue-400', href: '/prompt-library?category=Business' },
  { icon: GraduationCap, label: 'Students', count: 18, color: 'from-purple-500/20 to-violet-500/10', border: 'border-purple-500/30', text: 'text-purple-400', href: '/prompt-library?category=Students' },
  { icon: PenTool, label: 'Content Writing', count: 32, color: 'from-pink-500/20 to-rose-500/10', border: 'border-pink-500/30', text: 'text-pink-400', href: '/prompt-library?category=Content+Writing' },
  { icon: Code2, label: 'Coding', count: 28, color: 'from-cyan-500/20 to-teal-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', href: '/prompt-library?category=Coding' },
  { icon: Megaphone, label: 'Marketing', count: 22, color: 'from-orange-500/20 to-amber-500/10', border: 'border-orange-500/30', text: 'text-orange-400', href: '/prompt-library?category=Marketing' },
  { icon: Target, label: 'Productivity', count: 20, color: 'from-green-500/20 to-emerald-500/10', border: 'border-green-500/30', text: 'text-green-400', href: '/prompt-library?category=Productivity' },
  { icon: Search, label: 'Research', count: 16, color: 'from-teal-500/20 to-cyan-500/10', border: 'border-teal-500/30', text: 'text-teal-400', href: '/prompt-library?category=Research' },
  { icon: Palette, label: 'Creative', count: 14, color: 'from-violet-500/20 to-purple-500/10', border: 'border-violet-500/30', text: 'text-violet-400', href: '/prompt-library?category=Creative' },
]

export default function PromptCategories() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />
      <div className="container-wide section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono font-medium mb-4">
            <Target size={12} />
            Prompt Library
          </div>
          <h2 className="section-heading mb-4">
            Browse by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Over 500 tested prompt templates organized by use case. Find what you need and start using it immediately.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link to={cat.href} className="group block">
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} p-5 h-full hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}>
                  <cat.icon size={24} className={`${cat.text} mb-3`} />
                  <h3 className="font-display font-semibold text-white text-base mb-1">{cat.label}</h3>
                  <p className="text-xs text-slate-400">{cat.count} prompts</p>
                  <div className={`absolute bottom-3 right-3 text-xs font-mono ${cat.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    Browse →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
