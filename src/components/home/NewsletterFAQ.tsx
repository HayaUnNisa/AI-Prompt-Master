import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { faqs } from '../../data/resourcesFaqs'

const previewFaqs = faqs.slice(0, 5)

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glow-border glass-card-bright rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-6">
            <Mail size={22} className="text-purple-400" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Weekly Prompt Tips — Free
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
            One practical prompt technique or resource every week. No spam. No filler. Unsubscribe at any time.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-cyan-400 font-mono">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              You are subscribed. Check your inbox for a welcome note.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-void/80 border border-border rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
              <button type="submit" className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export function FAQPreview() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Answers to the questions we hear most often.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 mb-10">
          {previewFaqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full text-left glass-card p-5 hover:border-border-bright transition-all duration-200 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display font-medium text-white group-hover:text-purple-200 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${open === faq.id ? 'rotate-180' : ''}`}
                  />
                </div>
                {open === faq.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm text-slate-400 leading-relaxed mt-3 pt-3 border-t border-border"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/faq" className="btn-secondary inline-flex">
            View All FAQs
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
