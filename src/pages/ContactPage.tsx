import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Clock, Send, CheckCircle } from 'lucide-react'
import PageHero from '../components/ui/PageHero'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For general questions, course feedback, or ebook support.',
    value: 'hello@hayaunnisa.com',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: MessageSquare,
    title: 'Feedback',
    description: 'Suggestions for new courses, prompt categories, or content topics.',
    value: 'feedback@hayaunnisa.com',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'We typically respond within 1 to 2 business days. We read every message.',
    value: '1–2 business days',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-24 pb-20">
      <PageHero
        badge="Get in Touch"
        title="We Would Love to"
        highlight="Hear From You"
        description="Have a question about a course, a prompt technique, or just want to share feedback? Send us a message and we will get back to you."
      />

      <div className="container-wide section-padding">
        {/* Contact method cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 border ${method.border}`}
            >
              <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center mb-4`}>
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-slate-400 text-sm mb-3 leading-relaxed">{method.description}</p>
              <p className={`text-sm font-medium ${method.color}`}>{method.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 text-center"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Message Sent</h3>
              <p className="text-slate-400">
                Thank you for reaching out. We have received your message and will reply within 1 to 2 business days.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8"
            >
              <h2 className="font-display text-xl font-semibold text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Your Name</label>
                    <input
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
                    <label className="block text-sm text-slate-400 mb-2">Email Address</label>
                    <input
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
                  <label className="block text-sm text-slate-400 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-slate-800">Select a topic</option>
                    <option value="course" className="bg-slate-800">Course Question</option>
                    <option value="ebook" className="bg-slate-800">Ebook Support</option>
                    <option value="prompt" className="bg-slate-800">Prompt Help</option>
                    <option value="feedback" className="bg-slate-800">General Feedback</option>
                    <option value="other" className="bg-slate-800">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your question or feedback in as much detail as you like..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
