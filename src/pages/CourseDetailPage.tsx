import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Users, Star, BookOpen, Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { courses } from '../data/courses'

const levelColors: Record<string, string> = {
  Beginner: 'tag-cyan',
  Intermediate: 'tag-purple',
  Advanced: 'tag-pink',
}

export default function CourseDetailPage() {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)
  const [openModule, setOpenModule] = useState<number>(0)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl text-white mb-4">Course not found</h1>
          <Link to="/courses" className="btn-primary inline-flex">Back to Courses</Link>
        </div>
      </div>
    )
  }

  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0)

  return (
    <div className="pt-24 pb-20">
      <div className="container-wide section-padding">
        <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </Link>

        <div className="grid lg:grid-cols-[1fr_340px] gap-12">
          {/* Main */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={levelColors[course.level]}>{course.level}</span>
                <span className="text-xs font-mono text-purple-400">{course.category}</span>
                <span className="text-xs font-mono text-green-400 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30">Free</span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">{course.description}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2"><Star size={14} className="text-yellow-400 fill-yellow-400" />{course.rating} rating</span>
                <span className="flex items-center gap-2"><Users size={14} />{course.students.toLocaleString()} students</span>
                <span className="flex items-center gap-2"><Clock size={14} />{course.duration}</span>
                <span className="flex items-center gap-2"><BookOpen size={14} />{totalLessons} lessons</span>
              </div>
            </div>

            {/* Cover */}
            <div className="rounded-2xl overflow-hidden mb-10 h-64">
              <img src={course.coverImage} alt={course.title} className="w-full h-full object-cover" />
            </div>

            {/* Course Modules */}
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">Course Curriculum</h2>
              <div className="space-y-3">
                {course.modules.map((module, i) => (
                  <div key={i} className="glass-card overflow-hidden">
                    <button
                      onClick={() => setOpenModule(openModule === i ? -1 : i)}
                      className="w-full flex items-center justify-between p-4 text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-xs font-mono text-purple-400">
                          {i + 1}
                        </div>
                        <span className="font-display font-semibold text-white group-hover:text-purple-200 transition-colors">
                          {module.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500">{module.lessons.length} lessons</span>
                        <ChevronDown size={16} className={`text-slate-400 transition-transform ${openModule === i ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {openModule === i && (
                      <div className="px-4 pb-4 space-y-2 border-t border-border">
                        {module.lessons.map((lesson, j) => (
                          <div key={j} className="flex items-center gap-3 py-2 text-sm text-slate-400">
                            <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                              <BookOpen size={10} className="text-slate-500" />
                            </div>
                            {lesson}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <aside>
            <div className="glow-border glass-card-bright p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-display font-bold text-white mb-1">Free</div>
                <div className="text-sm text-slate-400">No signup required to start</div>
              </div>

              <button className="btn-primary w-full justify-center mb-3 text-base py-3.5">
                Start Course — Free
              </button>
              <button className="btn-secondary w-full justify-center text-sm">
                Save to Library
              </button>

              <div className="mt-6 space-y-3">
                {[
                  { label: 'Lessons', value: `${totalLessons} lessons` },
                  { label: 'Duration', value: course.duration },
                  { label: 'Level', value: course.level },
                  { label: 'Format', value: 'Text-based' },
                  { label: 'Updates', value: 'Regularly updated' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="text-slate-300 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-display font-semibold text-white mb-3">What you will learn</p>
                <div className="space-y-2">
                  {course.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-2 text-sm text-slate-400">
                      <Check size={14} className="text-green-400 flex-shrink-0" />
                      {tag} prompting techniques
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
