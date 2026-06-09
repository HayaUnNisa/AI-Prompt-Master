import { Link } from 'react-router-dom'
import { Twitter, Youtube, Mail, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const footerLinks = {
  Learn: [
    { label: 'Free Courses', href: '/courses' },
    { label: 'Prompt Library', href: '/prompt-library' },
    { label: 'Resources', href: '/resources' },
    { label: 'AI Tools Directory', href: '/ai-tools' },
  ],
  Content: [
    { label: 'Blog', href: '/blogs' },
    { label: 'Ebooks', href: '/ebooks' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="relative border-t border-border bg-void">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-purple-500/50 to-transparent" />

      <div className="container-wide section-padding pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', padding: '2px' }}>
                <div className="w-full h-full rounded-[9px] bg-void flex items-center justify-center">
                  <span className="font-display font-bold text-sm" style={{ background: 'linear-gradient(135deg, #a78bfa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HN</span>
                </div>
              </div>
              <span className="font-display font-bold text-lg tracking-wide" style={{ background: 'linear-gradient(135deg, #a78bfa, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Haya Un Nisa
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              A practical learning platform for writing better AI prompts. Free courses, a growing prompt library, and ebooks for every skill level.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-display font-semibold text-white mb-3">Weekly prompt tips — free</p>
              {subscribed ? (
                <p className="text-sm text-cyan-400 font-mono">You are subscribed. Thank you.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-surface-2 border border-border rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                    required
                  />
                  <button type="submit" className="btn-primary px-4 py-2 text-sm">
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-all">
                <Twitter size={15} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-all">
                <Youtube size={15} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500 transition-all">
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Haya Un Nisa. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built for learners. Not affiliated with OpenAI, Anthropic, or Google.
          </p>
        </div>
      </div>
    </footer>
  )
}
