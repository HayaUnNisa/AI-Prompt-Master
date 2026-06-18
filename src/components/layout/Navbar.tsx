import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Learn',
    children: [
      { label: 'Free Courses', href: '/courses' },
      { label: 'Prompt Library', href: '/prompt-library' },
      { label: 'Resources', href: '/resources' },
    ],
  },
  { label: 'Blog', href: '/blogs' },
  { label: 'AI Tools', href: '/ai-tools' },
  { label: 'Ebooks', href: '/ebooks' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setDropdown(null)
  }, [location])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-void/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="relative w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                padding: '2px',
              }}
            >
              <div className="w-full h-full rounded-[9px] bg-void flex items-center justify-center">
                <span
                  className="font-display font-bold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  A 
                </span>
              </div>
            </div>

            <span
              className="font-display font-bold text-lg tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
             Academia
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-body text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-surface-2">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        dropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 glass-card border-border-bright rounded-xl p-1.5 shadow-card"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-surface-3 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href!}
                  className={`px-4 py-2 text-sm font-body rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? 'text-white bg-surface-2'
                      : 'text-slate-300 hover:text-white hover:bg-surface-2'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/my-learning">My Learning</Link>
            <Link
              to="/contact"
              className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
            >
              Contact
            </Link>

            <Link to="/ebooks" className="btn-primary text-sm px-5 py-2.5">
              Get Ebooks
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-void/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="section-padding py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="px-3 py-2 text-xs font-mono font-medium text-purple-400 uppercase tracking-wider">
                      {link.label}
                    </div>

                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-6 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-surface-2 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href!}
                    className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? 'text-white bg-surface-2'
                        : 'text-slate-300 hover:text-white hover:bg-surface-2'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <div className="pt-3 flex flex-col gap-2">
                <Link
                  to="/contact"
                  className="btn-secondary justify-center text-sm"
                >
                  Contact
                </Link>

                <Link
                  to="/ebooks"
                  className="btn-primary justify-center text-sm"
                >
                  Get Ebooks
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}