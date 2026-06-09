import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const starterMessages = [
  "How do I write a better prompt for ChatGPT?",
  "What is prompt chaining?",
  "Which AI tool is best for research?",
  "Show me a prompt for writing emails",
]

const botResponses: Record<string, string> = {
  default: "Great question! For better prompts, always include: (1) a clear role for the AI, (2) the specific task, (3) relevant context, and (4) your desired output format. Try: 'You are a [role]. Write [task] for [audience] in [format].'"
}

function getBotResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase()
  if (msg.includes('prompt chaining') || msg.includes('chaining')) {
    return "Prompt chaining is using the output of one prompt as input for the next. For example: first prompt generates an outline, second prompt expands a section, third prompt edits the draft. This produces much better results than asking for everything at once."
  }
  if (msg.includes('research') || msg.includes('which ai')) {
    return "For research tasks, I recommend Perplexity AI — it searches the web and cites sources. Gemini is also excellent since it has Google Search access. For analyzing documents you already have, Claude handles long text extremely well."
  }
  if (msg.includes('email') || msg.includes('writing email')) {
    return `Here is a solid email prompt template:\n\n"You are a professional business writer. Write a [type of email] to [recipient/audience]. My key points: [list points]. Tone: [professional/friendly/concise]. Length: under 150 words. Do not use filler phrases."`
  }
  if (msg.includes('better prompt') || msg.includes('write a prompt')) {
    return "The four elements of a strong prompt: (1) Role — tell the AI who to be, (2) Task — state exactly what you want, (3) Context — give relevant background, (4) Format — specify output structure. Start with these and iterate based on the response."
  }
  if (msg.includes('system prompt')) {
    return "A system prompt sets persistent instructions for how an AI behaves throughout a conversation. Include: the AI's role and expertise, tone and communication style, constraints and what to avoid, and the expected output format. Keep it under 400 words for best results."
  }
  if (msg.includes('course') || msg.includes('learn') || msg.includes('beginner')) {
    return "I recommend starting with our 'Prompt Engineering Fundamentals' course — it is free, beginner-friendly, and covers the core frameworks you need. After that, the 'Advanced Prompt Techniques' course covers chaining, system prompts, and workflows."
  }
  return "That is a good question about prompting! The key principle is specificity — vague prompts produce vague results. Try including a role, a clear task, relevant context, and a format specification. Would you like a specific prompt template for your use case?"
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: "Hi! I am the Haya Un Nisa assistant. Ask me anything about writing better AI prompts, which tool to use, or get a custom prompt template.",
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getBotResponse(text)
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: response }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 800 + Math.random() * 600)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-btn-primary shadow-glow-purple flex items-center justify-center transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] h-[520px] flex flex-col glass-card border-border-bright shadow-card overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface/50">
              <div className="w-8 h-8 rounded-lg bg-btn-primary flex items-center justify-center shadow-glow-purple">
                <Bot size={16} />
              </div>
              <div>
                <p className="text-sm font-display font-semibold text-white">Prompt Assistant</p>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs ${
                    msg.role === 'assistant'
                      ? 'bg-purple-600/30 border border-purple-500/30'
                      : 'bg-cyan-600/30 border border-cyan-500/30'
                  }`}>
                    {msg.role === 'assistant' ? <Sparkles size={12} className="text-purple-400" /> : <User size={12} className="text-cyan-400" />}
                  </div>
                  <div className={`max-w-[240px] rounded-xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'assistant'
                      ? 'bg-surface-2 border border-border text-slate-200'
                      : 'bg-purple-600/30 border border-purple-500/30 text-white'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center bg-purple-600/30 border border-purple-500/30">
                    <Sparkles size={12} className="text-purple-400" />
                  </div>
                  <div className="bg-surface-2 border border-border rounded-xl px-3 py-2">
                    <div className="flex gap-1 items-center h-4">
                      {[0, 1, 2].map((i) => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Starters */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-slate-500 mb-2 font-mono">Quick questions:</p>
                <div className="flex flex-wrap gap-1.5">
                  {starterMessages.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-xs px-2.5 py-1 rounded-lg bg-surface-2 border border-border text-slate-400 hover:text-white hover:border-purple-500 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-border">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about prompts..."
                className="flex-1 bg-surface-2 border border-border rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-9 h-9 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:opacity-40 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
