interface SectionHeaderProps {
  badge?: string
  title: string
  highlight?: string
  description?: string
  center?: boolean
}

export default function SectionHeader({ badge, title, highlight, description, center = true }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center mb-12' : 'mb-12'}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-4 ${center ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          {badge}
        </div>
      )}
      <h2 className={`section-heading mb-4 ${center ? '' : ''}`}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className={`text-slate-400 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
