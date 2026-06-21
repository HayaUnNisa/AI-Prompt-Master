import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs, faqCategories } from '../data/resourcesFaqs'
import PageHero from '../components/ui/PageHero'
import FilterTabs from '../components/ui/FilterTabs'

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const allCategories = ['All', ...faqCategories]

  const filtered = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory)

  return (
    <div className="pt-24 pb-20">
      <PageHero
      badge="FAQ"
      title="Frequently Asked Questions"
      description="Answers to the most common questions about prompt engineering, our courses, ebooks, and how to get the most out of AI tools."
       />

      <div className="container-wide section-padding">
        <FilterTabs
        options={allCategories}
        active={activeCategory}
        onChange={setActiveCategory}
        />

        <div className="max-w-3xl mx-auto mt-10 space-y-3">
          {filtered.map((faq, i) => (
            <motion.div
              key={`${activeCategory}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass-card p-10 max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-white mb-3">Still Have a Question?</h3>
          <p className="text-slate-400 mb-6">
            If you did not find what you were looking for, send us a message directly. We read every email.
          </p>
          <a href="/contact" className="btn-primary inline-flex">Contact Us</a>
        </motion.div>
      </div>
    </div>
  )
}
