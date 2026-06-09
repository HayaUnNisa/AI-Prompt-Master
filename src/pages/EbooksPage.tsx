import { motion } from 'framer-motion'
import { ShoppingCart, Star, Check, FileText } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import { ebooks } from '../data/ebooks'

export default function EbooksPage() {
  return (
    <div>
      <PageHero
        badge="Digital Ebooks"
        title="Go Deeper with"
        titleHighlight="Comprehensive Guides"
        description="Detailed ebooks on prompt engineering for every use case. Tested, organized, and built for practical use — not shelf decoration."
      />

      <section className="pb-20">
        <div className="container-wide section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((ebook, i) => (
              <motion.div
                key={ebook.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="glow-border glass-card h-full p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                  {ebook.badge && (
                    <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-purple-500/30 border border-purple-500/40 text-xs font-mono text-purple-300">
                      {ebook.badge}
                    </div>
                  )}

                  {/* Cover */}
                  <div className="flex gap-4 mb-5">
                    <div className="w-20 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                      <img src={ebook.coverImage} alt={ebook.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-0.5 mb-2">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-display font-bold text-white">${ebook.price}</span>
                        <span className="text-sm text-slate-500 line-through">${ebook.originalPrice}</span>
                      </div>
                      <div className="text-xs text-green-400 font-mono mt-1">
                        {Math.round((1 - ebook.price / ebook.originalPrice) * 100)}% off
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h2 className="font-display font-semibold text-white text-base mb-2 leading-snug">
                    {ebook.title}
                  </h2>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{ebook.description}</p>

                  {/* Topics */}
                  <div className="space-y-1.5 mb-5">
                    {ebook.topics.slice(0, 4).map((topic) => (
                      <div key={topic} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                    {ebook.topics.length > 4 && (
                      <div className="text-xs text-slate-500 pl-5">+{ebook.topics.length - 4} more topics</div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                    <span className="flex items-center gap-1"><FileText size={11} />{ebook.pages} pages</span>
                    <span>{ebook.format.join(' · ')}</span>
                  </div>

                  <button className="btn-primary w-full justify-center text-sm py-3">
                    <ShoppingCart size={15} />
                    Buy for ${ebook.price}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Section */}
          <div className="mt-16 glass-card p-8 text-center max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-xl text-white mb-3">14-Day Money-Back Guarantee</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              If you are not satisfied with any ebook within 14 days of purchase, contact us for a full refund — no questions asked. Payment is processed securely through Stripe.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
