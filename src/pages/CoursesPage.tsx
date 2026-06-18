import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Search,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import { courses, courseCategories, difficultyLevels } from '../data/courses'

const levelColors: Record<string, string> = {
  Beginner: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
  Intermediate: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
  Advanced: 'bg-pink-500/10 text-pink-300 border-pink-400/30',
}

export default function CoursesPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [level, setLevel] = useState('All')

  const featuredCourses = courses.filter((course) => course.featured)

  const filteredCourses = useMemo(() => {
    const searchTerm = search.trim().toLowerCase()

    return courses.filter((course) => {
      const matchesCategory = category === 'All' || course.category === category
      const matchesLevel = level === 'All' || course.level === level

      const matchesSearch =
        searchTerm.length === 0 ||
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchTerm))

      return matchesCategory && matchesLevel && matchesSearch
    })
  }, [search, category, level])

  return (
    <div>
      <PageHero
        badge="Free Courses"
        title="Build Real AI Skills"
        titleHighlight="Step by Step"
        description="Browse practical AI prompting courses built like a clean learning platform. Learn from structured modules, short lessons, quizzes, and beginner-friendly explanations."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2">
            <BookOpen size={15} className="text-cyan-400" />
            {courses.length} courses
          </span>

          <span className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2">
            <Users size={15} className="text-purple-400" />
            16,000+ learners
          </span>

          <span className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />
            4.8 avg rating
          </span>
        </div>
      </PageHero>

      <section className="pb-24">
        <div className="container-wide section-padding">
          <div className="mb-10 rounded-3xl border border-border bg-surface/50 p-4 shadow-card backdrop-blur-xl md:p-6">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search courses, skills, categories..."
                  className="w-full rounded-2xl border border-border bg-void/70 py-4 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/20"
                />
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-border bg-void/50 px-4 py-3 text-sm text-slate-400">
                <TrendingUp size={16} className="text-cyan-400" />
                {filteredCourses.length} courses found
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="mb-3 text-xs font-mono uppercase tracking-wider text-slate-500">
                  Category
                </p>

                <div className="flex flex-wrap gap-2">
                  {courseCategories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all ${
                        category === item
                          ? 'border-purple-400/60 bg-purple-500/15 text-white shadow-glow'
                          : 'border-border bg-void/40 text-slate-400 hover:border-border-bright hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-mono uppercase tracking-wider text-slate-500">
                  Level
                </p>

                <div className="flex flex-wrap gap-2">
                  {difficultyLevels.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setLevel(item)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all ${
                        level === item
                          ? 'border-cyan-400/60 bg-cyan-500/15 text-white'
                          : 'border-border bg-void/40 text-slate-400 hover:border-border-bright hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {featuredCourses.length > 0 && (
            <div className="mb-14">
              <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                <div>
                  <p className="mb-2 text-sm font-mono uppercase tracking-wider text-purple-400">
                    Recommended
                  </p>
                  <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                    Featured courses
                  </h2>
                </div>

                <p className="max-w-xl text-sm leading-6 text-slate-400">
                  Start with these courses if you want the clearest learning path.
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {featuredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                  >
                    <Link
                      to={`/courses/${course.slug}`}
                      className="group block h-full overflow-hidden rounded-3xl border border-border bg-surface/60 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:shadow-card-hover"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={course.coverImage}
                          alt={course.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />

                        <div className="absolute left-4 top-4 rounded-full border border-green-400/30 bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-300">
                          Free
                        </div>

                        <div
                          className={`absolute bottom-4 left-4 rounded-full border px-3 py-1 text-xs font-semibold ${
                            levelColors[course.level]
                          }`}
                        >
                          {course.level}
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="mb-2 text-xs font-mono uppercase tracking-wider text-purple-400">
                          {course.category}
                        </p>

                        <h3 className="mb-3 line-clamp-2 font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-purple-200">
                          {course.title}
                        </h3>

                        <p className="mb-5 line-clamp-2 text-sm leading-6 text-slate-400">
                          {course.description}
                        </p>

                        <div className="mb-5 flex flex-wrap gap-2">
                          {course.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border bg-void/50 px-3 py-1 text-xs text-slate-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-3 border-t border-border pt-5 text-xs text-slate-400">
                          <span className="flex items-center gap-2">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            {course.rating} rating
                          </span>

                          <span className="flex items-center gap-2">
                            <Users size={14} />
                            {course.students.toLocaleString()}
                          </span>

                          <span className="flex items-center gap-2">
                            <Clock size={14} />
                            {course.duration}
                          </span>

                          <span className="flex items-center gap-2">
                            <BookOpen size={14} />
                            {course.lessons} lessons
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-sm font-mono uppercase tracking-wider text-cyan-400">
                  Course library
                </p>
                <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                  Explore all courses
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-6 text-slate-400">
                Choose a course based on your level, goal, or topic.
              </p>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="rounded-3xl border border-border bg-surface/50 py-20 text-center">
                <GraduationCap size={42} className="mx-auto mb-4 text-slate-600" />
                <h3 className="mb-2 font-display text-xl font-semibold text-white">
                  No courses found
                </h3>
                <p className="text-sm text-slate-400">
                  Try changing your search, category, or level filter.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    <Link
                      to={`/courses/${course.slug}`}
                      className="group grid gap-5 rounded-3xl border border-border bg-surface/50 p-4 shadow-card transition-all duration-300 hover:border-border-bright hover:bg-surface/70 md:grid-cols-[240px_1fr_auto]"
                    >
                      <div className="relative h-44 overflow-hidden rounded-2xl md:h-full">
                        <img
                          src={course.coverImage}
                          alt={course.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute left-3 top-3 rounded-full border border-green-400/30 bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-300 backdrop-blur">
                          Free
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                              levelColors[course.level]
                            }`}
                          >
                            {course.level}
                          </span>

                          <span className="rounded-full border border-border bg-void/40 px-3 py-1 text-xs text-slate-400">
                            {course.category}
                          </span>
                        </div>

                        <h3 className="mb-3 font-display text-xl font-semibold text-white transition-colors group-hover:text-purple-200">
                          {course.title}
                        </h3>

                        <p className="mb-4 max-w-3xl text-sm leading-6 text-slate-400">
                          {course.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {course.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-border bg-void/40 px-3 py-1 text-xs text-slate-500"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-center gap-3 rounded-2xl border border-border bg-void/40 p-4 text-sm text-slate-400 md:min-w-56">
                        <span className="flex items-center gap-2">
                          <Star size={15} className="fill-yellow-400 text-yellow-400" />
                          <strong className="text-white">{course.rating}</strong>
                          rating
                        </span>

                        <span className="flex items-center gap-2">
                          <Users size={15} className="text-purple-400" />
                          {course.students.toLocaleString()} learners
                        </span>

                        <span className="flex items-center gap-2">
                          <Clock size={15} className="text-cyan-400" />
                          {course.duration}
                        </span>

                        <span className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-green-400" />
                          {course.lessons} lessons included
                        </span>

                        <span className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-void transition-all group-hover:bg-purple-200">
                          View course
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}