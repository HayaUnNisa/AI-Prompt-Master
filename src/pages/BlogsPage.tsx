import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Calendar, ArrowRight } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SearchBar from '../components/ui/SearchBar'
import FilterTabs from '../components/ui/FilterTabs'
import { blogs, blogCategories } from '../data/blogs'

export default function BlogsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchCat = category === 'All' || b.category === category
      const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [search, category])

  return (
    <div>
      <PageHero
        badge="Knowledge Base"
        title="Practical Prompting"
        titleHighlight="Guides and Tutorials"
        description="Guides, technique breakdowns, and tool comparisons — written for people who want to actually use AI better, not just read about it."
      />

      <section className="pb-20">
        <div className="container-wide section-padding">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="sm:w-72">
              <SearchBar value={search} onChange={setSearch} placeholder="Search articles..." />
            </div>
            <FilterTabs options={blogCategories} active={category} onChange={setCategory} />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              No articles found matching your search.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((blog, i) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link to={`/blogs/${blog.slug}`} className="group block h-full">
                    <div className="glass-card h-full overflow-hidden hover:border-border-bright transition-all duration-300 hover:shadow-card-hover">
                      <div className="relative h-44 overflow-hidden">
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
                        <h2 className="font-display font-semibold text-white mb-2 leading-snug group-hover:text-purple-200 transition-colors line-clamp-2">
                          {blog.title}
                        </h2>
                        <p className="text-sm text-slate-400 mb-4 line-clamp-2">{blog.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Calendar size={11} />
                              {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={11} />
                              {blog.readTime}
                            </span>
                          </div>
                          <ArrowRight size={14} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
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
