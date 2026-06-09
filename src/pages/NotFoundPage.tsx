import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, BookOpen, Search } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* 404 display */}
          <div className="relative inline-block mb-8">
            <div className="font-display text-[160px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 opacity-20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card px-8 py-4 border-purple-500/30">
                <span className="font-display text-2xl font-bold text-white">Page Not Found</span>
              </div>
            </div>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            This page does not exist
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            The page you are looking for may have been moved, deleted, or the URL may be incorrect.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link to="/" className="btn-primary flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link to="/courses" className="btn-secondary flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Browse Courses
            </Link>
            <Link to="/prompt-library" className="btn-secondary flex items-center gap-2">
              <Search className="w-4 h-4" />
              Prompt Library
            </Link>
          </div>

          {/* Quick links */}
          <div className="glass-card p-8 max-w-xl mx-auto">
            <h2 className="font-display text-lg font-semibold text-white mb-5">Popular pages</h2>
            <div className="grid grid-cols-2 gap-3 text-left">
              {[
                { to: '/blogs', label: 'Blogs' },
                { to: '/courses', label: 'Free Courses' },
                { to: '/prompt-library', label: 'Prompt Library' },
                { to: '/ebooks', label: 'Ebooks' },
                { to: '/ai-tools', label: 'AI Tools Directory' },
                { to: '/resources', label: 'Resources' },
                { to: '/about', label: 'About' },
                { to: '/faq', label: 'FAQ' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
