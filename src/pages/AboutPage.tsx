import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Zap, Target } from 'lucide-react'

const values = [
  { icon: BookOpen, title: 'Education First', description: 'Every resource we create is designed to teach, not to impress. Clear explanations over jargon. Practical examples over theory.' },
  { icon: Target, title: 'No Hype', description: 'We do not make unrealistic claims about AI. These are tools that, used well, make real work faster and better. That is all.' },
  { icon: Users, title: 'Beginner-Inclusive', description: 'Prompt engineering is not a technical skill. Anyone who can write a clear instruction can learn to write effective prompts. We teach with that in mind.' },
  { icon: Zap, title: 'Actionable Knowledge', description: 'Concepts are only useful when you can apply them. Every lesson, guide, and prompt in our library is built around real tasks and real outputs.' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-6">
              About Haya Un Nisa
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Teaching the Skill That{' '}
              <span className="gradient-text">Makes AI Useful</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Haya Un Nisa is an independent educational platform focused on one thing: helping people communicate more effectively with AI tools.
            </p>
          </div>

          {/* Story */}
          <div className="glass-card p-8 mb-12 prose-dark">
            <h2 className="font-display font-bold text-2xl text-white mb-4">Why This Site Exists</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              When AI tools like ChatGPT became widely accessible, most people tried them once, got a mediocre response, and moved on. Not because the tools were not capable — but because nobody taught them how to use them properly.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              The gap between a vague question and a well-structured prompt is enormous. The output quality difference is real and measurable. But most content about AI focuses on announcements, benchmarks, and hype — not on the practical skill of prompt writing.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Haya Un Nisa exists to close that gap. Our courses, guides, and prompt library are built around the specific, learnable techniques that actually make a difference — for students, professionals, developers, and anyone else who wants to get more out of the AI tools they already have access to.
            </p>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="font-display font-bold text-2xl text-white mb-6">How We Approach This</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-5"
                >
                  <value.icon size={20} className="text-purple-400 mb-3" />
                  <h3 className="font-display font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="glass-card p-6 mb-12 border-yellow-500/20">
            <h3 className="font-display font-semibold text-white mb-2">A Note on Independence</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Haya Un Nisa is not affiliated with OpenAI, Anthropic, Google, or Microsoft. We do not receive payment from any AI company. The tools we recommend are based on our own testing and evaluation. Our revenue comes from ebook sales, not advertising or affiliate commissions.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/courses" className="btn-primary inline-flex mr-4">Start Learning</Link>
            <Link to="/contact" className="btn-secondary inline-flex">Get in Touch</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
