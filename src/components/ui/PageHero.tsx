import { motion } from 'framer-motion'

interface PageHeroProps {
  badge?: string
  title: string
  titleHighlight?: string
  description: string
  children?: React.ReactNode
}

export default function PageHero({ badge, title, titleHighlight, description, children }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-3xl rounded-full" />

      <div className="container-wide section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              {badge}
            </div>
          )}

          <h1 className="section-heading mb-4">
            {titleHighlight ? (
              <>
                {title}{' '}
                <span className="gradient-text">{titleHighlight}</span>
              </>
            ) : (
              title
            )}
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
