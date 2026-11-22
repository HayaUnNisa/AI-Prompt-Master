import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Wordmark from './Wordmark'

const columns: Record<string, { label: string; href: string }[]> = {
  Learn: [
    { label: 'The 30-day series', href: '/series' },
    { label: 'Courses', href: '/courses' },
    { label: 'Prompt library', href: '/prompt-library' },
    { label: 'AI tools', href: '/ai-tools' },
  ],
  Read: [
    { label: 'Ebooks', href: '/ebooks' },
    { label: 'Journal', href: '/blogs' },
    { label: 'FAQ', href: '/faq' },
  ],
  Aicadmia: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <footer className="bg-ink text-cream">
      <div className="container-wide section-padding pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-14 pb-16 border-b border-cream/10">
          <div className="lg:col-span-5">
            <p className="font-display text-[2.6rem] leading-[1.05] text-cream">
              One useful idea,
              <br />
              <span className="italic text-accent-light">every week.</span>
            </p>
            <p className="mt-4 text-[14px] text-cream/60 max-w-sm leading-relaxed">
              A short letter with the prompt, tool or method we found most useful that week. No spam, unsubscribe anytime.
            </p>
            {done ? (
              <p className="mt-6 text-[14px] text-accent-light">Thanks — you’re on the list.</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email) {
                    setDone(true)
                    setEmail('')
                  }
                }}
                className="mt-6 flex max-w-sm border-b border-cream/30 focus-within:border-cream"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="flex-1 bg-transparent py-3 text-[14px] text-cream placeholder:text-cream/40 focus:outline-none"
                />
                <button type="submit" aria-label="Subscribe" className="px-2 text-cream/70 hover:text-cream">
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(columns).map(([title, links]) => (
              <div key={title}>
                <p className="text-[11px] uppercase tracking-[0.14em] text-cream/40 mb-4">{title}</p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="text-[14px] text-cream/80 hover:text-cream transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <Wordmark tone="cream" className="!text-[22px]" />
          <p className="text-[12px] text-cream/40">
            © {new Date().getFullYear()} Aicadmia. Practical AI education, written by people.
          </p>
        </div>
      </div>
    </footer>
  )
}
