import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { blogs } from '../../data/blogs'

const latestBlogs = [...blogs]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)

export default function LatestBlogs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono font-medium mb-4">
              Latest Posts
            </div>

            <h2 className="section-heading">
              From the <span className="gradient-text-purple">Blog</span>
            </h2>
          </div>

          <Link to="/blogs" className="btn-secondary text-sm shrink-0">
            All Posts
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/blogs/${blog.slug}`} className="group block h-full">
                <div className="glass-card h-full overflow-hidden hover:border-border-bright transition-all duration-300 hover:shadow-card-hover">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />

                    <div className="absolute bottom-3 left-3">
                      <span className="tag-purple">{blog.category}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display font-semibold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {new Date(blog.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}