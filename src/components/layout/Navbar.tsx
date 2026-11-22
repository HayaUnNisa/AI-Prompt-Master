import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import Wordmark from './Wordmark'
import { currentDay } from '../../data/series'

type NavItem = { label: string; href?: string; children?: { label: string; href: string; note: string }[] }

const navLinks: NavItem[] = [
  { label: 'The 30-day series', href: '/series' },
  {
    label: 'Learn',
    children: [
      { label: 'Courses', href: '/courses', note: 'Six free, self-paced courses' },
      { label: 'Prompt library', href: '/prompt-library', note: '100+ prompts you can copy' },
      { label: 'AI tools', href: '/ai-tools', note: 'What each tool is good at' },
    ],
  },
  { label: 'Ebooks', href: '/ebooks' },
  { label: 'Journal', href: '/blogs' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const location = useLocation()
  const day = currentDay()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setDropdown(null)
  }, [location])

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `relative px-3.5 py-2 text-[13.5px] transition-colors ${isActive ? 'text-ink' : 'text-ink-2 hover:text-ink'}`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background,border-color] duration-300 border-b ${
        scrolled ? 'bg-midnight/90 backdrop-blur-md border-border' : 'bg-transparent border-transparent'
      }`}
    >
      {/* Series announcement strip */}
      {day > 0 && day <= 30 && (
        <Link
          to={`/series/${day}`}
          className="block bg-ink text-cream text-center text-[12px] py-2 tracking-wide hover:bg-accent-dark transition-colors"
        >
          <span className="opacity-70">30 Days, 30 Ways —</span> Day {day} is live. Read today’s method →
        </Link>
      )}

      <div className="container-wide section-padding">
        <div className="flex items-center justify-between h-16">
          <Link to="/" aria-label="Aicadmia home">
            <Wordmark />
          </Link>

          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3.5 py-2 text-[13.5px] text-ink-2 hover:text-ink transition-colors">
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {dropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="w-64 bg-surface border border-border rounded-xl p-2 shadow-card-hover">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block px-3 py-2.5 rounded-lg hover:bg-lavender transition-colors"
                            >
                              <div className="text-[13.5px] text-ink">{child.label}</div>
                              <div className="text-[12px] text-ink-muted">{child.note}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={link.href} to={link.href!} className={linkCls}>
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {link.href === '/series' && (
                        <span className="ml-1.5 align-middle inline-block w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />
                      )}
                      {isActive && <span className="absolute left-3.5 right-3.5 -bottom-[1px] h-px bg-ink" />}
                    </>
                  )}
                </NavLink>
              ),
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <SignedOut>
              <Link to="/sign-in" className="px-3.5 py-2 text-[13.5px] text-ink-2 hover:text-ink">
                Sign in
              </Link>
              <Link to="/series" className="btn-primary !py-2.5 !px-5 !text-[13px]">
                Start the series
              </Link>
            </SignedOut>
            <SignedIn>
              <Link to="/my-learning" className="px-3.5 py-2 text-[13.5px] text-ink-2 hover:text-ink">
                My learning
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-midnight border-b border-border"
          >
            <div className="section-padding py-4 space-y-1">
              {navLinks.flatMap((l): { label: string; href?: string }[] => (l.children ? l.children : [l])).map((l) => (
                <Link
                  key={l.href}
                  to={l.href!}
                  className="block py-3 border-b border-border font-display text-2xl text-ink"
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-4">
                <SignedOut>
                  <Link to="/sign-in" className="btn-secondary flex-1 justify-center">Sign in</Link>
                  <Link to="/sign-up" className="btn-primary flex-1 justify-center">Create account</Link>
                </SignedOut>
                <SignedIn>
                  <Link to="/my-learning" className="btn-primary flex-1 justify-center">My learning</Link>
                </SignedIn>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
