import { motion } from 'framer-motion'

interface PageHeroProps {
  badge?: string
  title: string
  titleHighlight?: string
  description: string
  children?: React.ReactNode
}

/** Editorial page header: left-aligned serif title with the description set beside it. */
export default function PageHero({ badge, title, titleHighlight, description, children }: PageHeroProps) {
  return (
    <section className="pt-32 sm:pt-36 pb-12">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-8 items-end pb-12 border-b border-border"
        >
          <div className="lg:col-span-7">
            {badge && <p className="eyebrow mb-5">{badge}</p>}
            <h1 className="font-display text-[3.2rem] sm:text-7xl leading-[0.95] text-ink">
              {title}
              {titleHighlight && (
                <>
                  {' '}
                  <span className="italic text-accent">{titleHighlight}</span>
                </>
              )}
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15.5px] text-ink-2 leading-relaxed">{description}</p>
            {children && <div className="mt-6">{children}</div>}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
