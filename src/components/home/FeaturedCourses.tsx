import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, Star, BookOpen } from 'lucide-react'
import { courses } from '../../data/courses'

const featuredCourses = courses.filter((c) => c.featured).slice(0, 3)

const levelColors: Record<string, string> = {
  Beginner: 'tag-cyan',
  Intermediate: 'tag-purple',
  Advanced: 'tag-pink',
}

export default function FeaturedCourses() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-4">
            <BookOpen size={12} />
            Free Courses
          </div>
          <h2 className="section-heading mb-4">
            Start Learning <span className="gradient-text-cyan">Today</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Practical courses designed around real tasks. No fluff, no prerequisites — just skills you can apply immediately.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/courses/${course.slug}`} className="group block h-full">
                <div className="glass-card h-full p-0 overflow-hidden hover:border-border-bright transition-all duration-300 hover:shadow-card-hover">
                  {/* Cover */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={course.coverImage}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className={levelColors[course.level]}>{course.level}</span>
                    </div>
                    <div className="absolute top-3 right-3 bg-void/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-mono text-green-400 border border-green-500/30">
                      Free
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs font-mono text-purple-400 mb-2">{course.category}</p>
                    <h3 className="font-display font-semibold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">{course.description}</p>

                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        {course.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={12} />
                        {course.students.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses" className="btn-secondary inline-flex">
            View All Courses
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
