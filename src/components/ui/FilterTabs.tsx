interface FilterTabsProps {
  options: string[]
  active: string
  onChange: (value: string) => void
}

export default function FilterTabs({ options, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-1.5 rounded-full text-sm font-body transition-all duration-200 ${
            active === option
              ? 'bg-purple-600 text-white shadow-glow-purple'
              : 'bg-surface-2 border border-border text-slate-400 hover:text-white hover:border-purple-500'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
