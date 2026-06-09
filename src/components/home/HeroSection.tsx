import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Cpu, Brain, Code2, Search, Zap } from 'lucide-react'

const aiTools = [
  { name: 'ChatGPT', color: 'from-green-500/20 to-emerald-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  { name: 'Claude', color: 'from-orange-500/20 to-amber-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  { name: 'Gemini', color: 'from-blue-500/20 to-indigo-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  { name: 'Perplexity', color: 'from-teal-500/20 to-cyan-500/10', border: 'border-teal-500/30', text: 'text-teal-400' },
  { name: 'Copilot', color: 'from-violet-500/20 to-purple-500/10', border: 'border-violet-500/30', text: 'text-violet-400' },
]

const dashboardItems = [
  { icon: Brain, label: 'Prompt Crafting', value: '12 modules', color: 'text-purple-400' },
  { icon: Code2, label: 'Coding Prompts', value: '89 templates', color: 'text-cyan-400' },
  { icon: Search, label: 'Research', value: '45 prompts', color: 'text-pink-400' },
  { icon: Cpu, label: 'AI Tools', value: '12 reviewed', color: 'text-green-400' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-royal/8 rounded-full blur-3xl" />

      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium mb-6"
            >
              <Zap size={12} className="text-purple-400" />
              Free courses. Real techniques. No hype.
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
            >
              Master AI Prompts.{' '}
              <span className="gradient-text block mt-1">Learn Smarter.</span>
              <span className="text-slate-300">Work Faster.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg"
            >
              Learn how to write better prompts for ChatGPT, Claude, Gemini, Perplexity, Copilot, and other AI tools. Free courses, practical guides, and downloadable resources.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link to="/courses" className="btn-primary text-base px-7 py-3.5">
                Start Learning Free
                <ArrowRight size={18} />
              </Link>
              <Link to="/prompt-library" className="btn-secondary text-base px-7 py-3.5">
                <BookOpen size={18} />
                Explore Prompt Library
              </Link>
            </motion.div>

            {/* AI Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <p className="text-xs text-slate-500 font-mono mb-3 uppercase tracking-wider">Works with all major AI tools</p>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <div
                    key={tool.name}
                    className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${tool.color} border ${tool.border} text-xs font-mono ${tool.text} font-medium`}
                  >
                    {tool.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:block"
          >
            <div className="relative animate-float">
              {/* Main Card */}
              <div className="glow-border glass-card-bright rounded-2xl p-6 shadow-card">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-mono text-purple-300">
                    promptmaster.ai
                  </div>
                </div>

                {/* Prompt Preview */}
                <div className="bg-void/80 rounded-xl p-4 mb-4 border border-border font-mono text-sm">
                  <div className="text-slate-500 text-xs mb-2">// Effective Prompt Structure</div>
                  <div className="space-y-1">
                    <div><span className="text-purple-400">Role:</span> <span className="text-cyan-300">Senior copywriter</span></div>
                    <div><span className="text-purple-400">Task:</span> <span className="text-green-300">Write hero section</span></div>
                    <div><span className="text-purple-400">Context:</span> <span className="text-amber-300">SaaS productivity tool</span></div>
                    <div><span className="text-purple-400">Format:</span> <span className="text-pink-300">Headline + 3 bullets</span></div>
                  </div>
                </div>

                {/* Response Preview */}
                <div className="bg-surface/60 rounded-xl p-4 border border-border mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs font-mono text-green-400">ChatGPT response</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="font-display font-semibold text-white">Stop managing tasks. Start getting things done.</div>
                    <div className="text-slate-400">The productivity tool that thinks like you do.</div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {dashboardItems.map((item) => (
                    <div key={item.label} className="bg-void/60 rounded-xl p-3 border border-border">
                      <item.icon size={14} className={`${item.color} mb-1.5`} />
                      <div className="text-xs text-slate-400 leading-none mb-1">{item.label}</div>
                      <div className={`text-sm font-display font-semibold ${item.color}`}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-6 -right-6 glass-card border-border-bright rounded-xl px-4 py-2.5 shadow-card hidden md:flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Zap size={12} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs font-display font-semibold text-white">500+ Prompts</div>
                  <div className="text-[10px] text-slate-400">Ready to use</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-6 glass-card border-border-bright rounded-xl px-4 py-2.5 shadow-card hidden md:flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                  <Brain size={12} className="text-pink-400" />
                </div>
                <div>
                  <div className="text-xs font-display font-semibold text-white">6 Free Courses</div>
                  <div className="text-[10px] text-slate-400">No signup needed</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
