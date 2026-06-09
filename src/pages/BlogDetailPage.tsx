import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import { blogs } from '../data/blogs'

export default function BlogDetailPage() {
  const { slug } = useParams()
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl text-white mb-4">Article not found</h1>
          <Link to="/blogs" className="btn-primary inline-flex">Back to Blog</Link>
        </div>
      </div>
    )
  }

  const related = blogs.filter((b) => b.category === blog.category && b.id !== blog.id).slice(0, 2)

  return (
    <div className="pt-24 pb-20">
      <div className="container-wide section-padding">
        {/* Back */}
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Main */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="mb-8">
              <span className="tag-purple mb-4 inline-flex">{blog.category}</span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {blog.readTime}
                </span>
                <span className="text-slate-500">By {blog.author}</span>
              </div>
            </div>

            {/* Cover Image */}
            <div className="rounded-2xl overflow-hidden mb-10 h-64 sm:h-80">
              <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="prose-dark">
              {blog.content.trim().split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="font-display font-bold text-2xl text-white mt-10 mb-4">{line.replace('## ', '')}</h2>
                }
                if (line.startsWith('> ')) {
                  return <blockquote key={i} className="border-l-4 border-purple-500 pl-4 my-4 text-slate-300 italic">{line.replace('> ', '')}</blockquote>
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="font-semibold text-purple-300 mt-6 mb-2">{line.replace(/\*\*/g, '')}</p>
                }
                if (line.startsWith('- ')) {
                  return <p key={i} className="text-slate-400 mb-1.5 pl-4 flex items-start gap-2"><span className="text-purple-500 mt-1.5 flex-shrink-0">•</span>{line.replace('- ', '')}</p>
                }
                if (line.trim() === '') {
                  return <div key={i} className="h-2" />
                }
                return <p key={i} className="text-slate-400 leading-relaxed mb-4">{line}</p>
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
              <Tag size={14} className="text-slate-500 mt-0.5" />
              {blog.tags.map((tag) => (
                <span key={tag} className="tag-purple">{tag}</span>
              ))}
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Posts */}
            {related.length > 0 && (
              <div className="glass-card p-5">
                <h3 className="font-display font-semibold text-white mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((post) => (
                    <Link key={post.id} to={`/blogs/${post.slug}`} className="group block">
                      <div className="flex gap-3">
                        <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div>
                          <p className="text-sm font-display text-slate-300 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">{post.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="glow-border glass-card p-5 text-center">
              <h3 className="font-display font-semibold text-white mb-2">Ready to practice?</h3>
              <p className="text-sm text-slate-400 mb-4">Browse 500+ tested prompt templates organized by use case.</p>
              <Link to="/prompt-library" className="btn-primary text-sm w-full justify-center">
                Open Prompt Library
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
