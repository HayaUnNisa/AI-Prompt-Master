import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, CheckCircle, Rocket, Clock } from 'lucide-react'

export default function EbookShowcase() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-800/10 blur-3xl rounded-full" />

      <div className="container-wide section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-5">
            <Clock size={12} />
            Coming Soon
          </div>

          <h2 className="section-heading mb-4">
            Ebooks <span className="gradient-text">Coming Soon</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We are working on practical AI ebooks with prompts, templates,
            examples, and workflows you can use for learning, business, content,
            and productivity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          {[
            {
              icon: BookOpen,
              title: 'In-Depth Guides',
              description:
                'Detailed ebooks designed to help you understand AI tools and prompt engineering clearly.',
            },
            {
              icon: CheckCircle,
              title: 'Practical Templates',
              description:
                'Ready-to-use prompts, examples, and workflows for real tasks and daily use.',
            },
            {
              icon: Rocket,
              title: 'Built for Growth',
              description:
                'Made for students, creators, freelancers, business owners, and lifelong learners.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-border glass-card p-6 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-purple-400" />
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/ebooks" className="btn-primary inline-flex">
            View Coming Soon Page
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}