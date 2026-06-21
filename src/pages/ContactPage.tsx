import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import PageHero from '../components/ui/PageHero'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For general questions, or ebook support.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Clock,
    title: 'Response Time',
    description:
      'We typically respond within 1 to 2 business days. We read every message.',
    value: '1–2 business days',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/mwvjddlb', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `New Aicadmia Contact Message: ${form.subject}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.')
      }

      setSubmitted(true)
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch {
      setError('Message could not be sent. Please try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-24 pb-20">
      <PageHero
        badge="Get in Touch"
        title="We Would Love to Hear From You"
        description="Have a question about a course, a prompt technique, or just want to share feedback? Send us a message and we will get back to you."
      />

      <div className="container-wide section-padding">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="space-y-6">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-6 border ${method.border}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center mb-4`}
                >
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>

                <h3 className="font-display font-semibold text-white mb-2">
                  {method.title}
                </h3>

                <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                  {method.description}
                </p>

                <p className={`text-sm font-medium ${method.color}`}>
                  {method.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Message Sent
                </h3>

                <p className="text-slate-400 mb-6">
                  Thank you for reaching out. We have received your message and
                  will reply within 1 to 2 business days.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary inline-flex"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-8"
              >
                

                {error && (
                  <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                        Your Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-slate-400 mb-2">
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-slate-800">
                        Select a topic
                      </option>
                      <option value="Course Question" className="bg-slate-800">
                        Course Question
                      </option>
                      <option value="Ebook Support" className="bg-slate-800">
                        Ebook Support
                      </option>
                      <option value="Prompt Help" className="bg-slate-800">
                        Prompt Help
                      </option>
                      <option value="General Feedback" className="bg-slate-800">
                        General Feedback
                      </option>
                      <option value="Other" className="bg-slate-800">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                      Message
                    </label>

                   <textarea
                   id="message"
                   name="message"
                   value={form.message}
                   onChange={handleChange}
                   required
                   rows={1}
                   placeholder="Describe your question or feedback..."
                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}