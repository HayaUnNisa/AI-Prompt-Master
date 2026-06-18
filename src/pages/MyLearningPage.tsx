import { Link } from 'react-router-dom'
import {
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  Star,
} from 'lucide-react'
import { courses } from '../data/courses'

export default function MyLearningPage() {
  let progress: Record<string, Record<string, boolean>> = {}
  let savedCourses: string[] = []

try {
  savedCourses = JSON.parse(
    localStorage.getItem('saved-courses') || '[]'
  )
} catch {
  savedCourses = []
}

  try {
    progress = JSON.parse(localStorage.getItem('course-progress') || '{}')
  } catch {
    progress = {}
  }

  const coursesWithProgress = courses.map((course) => {
    const completedModules = course.modules.filter(
      (module) => progress?.[course.slug]?.[module.title]
    ).length

    const percent = Math.round((completedModules / course.modules.length) * 100)

    return {
      ...course,
      completedModules,
      percent,
      completed: completedModules === course.modules.length,
     started:
     completedModules > 0 || savedCourses.includes(course.slug),
    }
  })

  const activeCourses = coursesWithProgress.filter(
    (course) => course.started && !course.completed
  )

  const completedCourses = coursesWithProgress.filter(
    (course) => course.completed
  )

  return (
    <div className="pb-24 pt-24">
      <section className="border-b border-border bg-surface/30">
        <div className="container-wide section-padding py-14">
          <p className="mb-3 text-sm font-mono uppercase tracking-wider text-purple-400">
            My Learning
          </p>

          <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
            Continue your courses
          </h1>

          <p className="max-w-2xl text-slate-400">
            Track your course progress, continue learning, and view completed
            certificates.
          </p>
        </div>
      </section>

      <section className="container-wide section-padding mt-12">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border bg-surface/50 p-6">
            <BookOpen className="mb-4 text-cyan-400" />
            <p className="text-3xl font-bold text-white">
              {activeCourses.length}
            </p>
            <p className="text-sm text-slate-400">Active courses</p>
          </div>

          <div className="rounded-3xl border border-border bg-surface/50 p-6">
            <CheckCircle2 className="mb-4 text-green-400" />
            <p className="text-3xl font-bold text-white">
              {completedCourses.length}
            </p>
            <p className="text-sm text-slate-400">Completed courses</p>
          </div>

          <div className="rounded-3xl border border-border bg-surface/50 p-6">
            <GraduationCap className="mb-4 text-purple-400" />
            <p className="text-3xl font-bold text-white">
              {completedCourses.length}
            </p>
            <p className="text-sm text-slate-400">Certificates earned</p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-6 font-display text-2xl font-bold text-white">
            Continue learning
          </h2>

          {activeCourses.length === 0 ? (
            <div className="rounded-3xl border border-border bg-surface/50 p-8 text-center">
              <p className="mb-4 text-slate-400">
                You have not started any course yet.
              </p>

              <Link to="/courses" className="btn-primary inline-flex">
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="grid gap-5">
              {activeCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.slug}`}
                  className="group grid gap-5 rounded-3xl border border-border bg-surface/50 p-4 transition-all hover:border-border-bright md:grid-cols-[220px_1fr]"
                >
                  <img
                    src={course.coverImage}
                    alt={course.title}
                    className="h-40 w-full rounded-2xl object-cover"
                  />

                  <div className="flex flex-col justify-center">
                    <p className="mb-2 text-xs font-mono text-purple-400">
                      {course.category}
                    </p>

                    <h3 className="mb-3 font-display text-xl font-semibold text-white group-hover:text-purple-200">
                      {course.title}
                    </h3>

                    <div className="mb-3 h-2 overflow-hidden rounded-full bg-void">
                      <div
                        className="h-full bg-purple-500"
                        style={{ width: `${course.percent}%` }}
                      />
                    </div>

                    <p className="text-sm text-slate-400">
                      {course.completedModules}/{course.modules.length} modules
                      completed • {course.percent}%
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="mb-6 font-display text-2xl font-bold text-white">
            All courses
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coursesWithProgress.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.slug}`}
                className="group rounded-3xl border border-border bg-surface/50 p-5 transition-all hover:border-border-bright"
              >
                <img
                  src={course.coverImage}
                  alt={course.title}
                  className="mb-5 h-40 w-full rounded-2xl object-cover"
                />

                <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                  <span>{course.level}</span>
                  <span className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </span>
                </div>

                <h3 className="mb-3 font-display text-lg font-semibold text-white group-hover:text-purple-200">
                  {course.title}
                </h3>

                <div className="mb-3 h-2 overflow-hidden rounded-full bg-void">
                  <div
                    className="h-full bg-cyan-500"
                    style={{ width: `${course.percent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{course.percent}% complete</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {course.duration}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}