import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Users, Star, BookOpen } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SearchBar from '../components/ui/SearchBar'
import FilterTabs from '../components/ui/FilterTabs'
import { courses, courseCategories, difficultyLevels } from '../data/courses'

const levelColors: Record<string, string> = {
  Beginner: 'tag-cyan',
  Intermediate: 'tag-purple',
  Advanced: 'tag-pink',
}

export default function CoursesPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [level, setLevel] = useState('All')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchCat = category === 'All' || c.category === category
      const matchLevel = level === 'All' || c.level === level
      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchLevel && matchSearch
    })
  }, [search, category, level])

  return (
    <div>
      <PageHero
        badge="Free Courses"
        title="Learn Prompting"
        titleHighlight="at Your Own Pace"
        description="Structured courses on writing better AI prompts. Every course is free, beginner-friendly, and focused on practical skills you can apply immediately."
      >
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <span className="flex items-center gap-2"><BookOpen size={14} className="text-cyan-400" />{courses.length} courses</span>
          <span className="flex items-center gap-2"><Users size={14} className="text-purple-400" />16,000+ students</span>
          <span className="flex items-center gap-2"><Star size={14} className="text-yellow-400" />4.8 avg rating</span>
        </div>
      </PageHero>

      <section className="pb-20">
        <div className="container-wide section-padding">
          {/* Filters */}
          <div className="flex flex-col gap-4 mb-10">
            <div className="sm:w-80">
              <SearchBar value={search} onChange={setSearch} placeholder="Search courses..." />
            </div>
            <div className="flex flex-wrap gap-4">
              <div>
                <p className="text-xs font-mono text-slate-500 mb-2">Category</p>
                <FilterTabs options={courseCategories} active={category} onChange={setCategory} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 mb-2">Level</p>
                <FilterTabs options={difficultyLevels} active={level} onChange={setLevel} />
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">No courses found matching your filters.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link to={`/courses/${course.slug}`} className="group block h-full">
                    <div className="glass-card h-full overflow-hidden hover:border-border-bright transition-all duration-300 hover:shadow-card-hover">
                      <div className="relative h-44 overflow-hidden">
                        <img src={course.coverImage} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex gap-2">
                          <span className={levelColors[course.level]}>{course.level}</span>
                        </div>
                        <div className="absolute top-3 right-3 bg-void/80 backdrop-blur-sm rounded-lg px-2 py-0.5 text-xs font-mono text-green-400 border border-green-500/30">
                          Free
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-mono text-purple-400 mb-2">{course.category}</p>
                        <h2 className="font-display font-semibold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors line-clamp-2">
                          {course.title}
                        </h2>
                        <p className="text-sm text-slate-400 mb-4 line-clamp-2">{course.description}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1"><Star size={12} className="text-yellow-400 fill-yellow-400" />{course.rating}</span>
                          <span className="flex items-center gap-1"><Users size={12} />{course.students.toLocaleString()}</span>
                          <span className="flex items-center gap-1"><Clock size={12} />{course.duration}</span>
                          <span className="flex items-center gap-1"><BookOpen size={12} />{course.lessons} lessons</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
