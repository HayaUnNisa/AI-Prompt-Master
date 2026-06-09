import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart, Star } from 'lucide-react'
import { ebooks } from '../../data/ebooks'

const featuredEbooks = ebooks.filter((e) => e.featured).slice(0, 3)

export default function EbookShowcase() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-800/8 blur-3xl rounded-full" />

      <div className="container-wide section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono font-medium mb-4">
            <ShoppingCart size={12} />
            Digital Ebooks
          </div>
          <h2 className="section-heading mb-4">
            Go Deeper with <span className="gradient-text">Ebooks</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive guides that go further than any free course. Practical, organized, and built around real workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredEbooks.map((ebook, i) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="glow-border glass-card h-full p-5 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {ebook.badge && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-purple-500/30 border border-purple-500/40 text-xs font-mono text-purple-300">
                    {ebook.badge}
                  </div>
                )}

                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={ebook.coverImage} alt={ebook.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm leading-snug mb-2">{ebook.title}</h3>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={11} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-display font-bold text-white">${ebook.price}</span>
                      <span className="text-sm text-slate-500 line-through">${ebook.originalPrice}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{ebook.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-mono">{ebook.pages} pages · PDF + EPUB</div>
                  <Link to="/ebooks" className="text-xs font-display font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
                    Details <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/ebooks" className="btn-primary inline-flex">
            Browse All Ebooks
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
