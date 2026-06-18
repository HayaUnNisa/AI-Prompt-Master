import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const starterMessages = [
  'How do I write a better prompt for ChatGPT?',
  'What is prompt chaining?',
  'Which AI tool is best for research?',
  'Show me a prompt for writing emails',
]

function getBotResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase()

  if (msg.includes('prompt chaining') || msg.includes('chaining')) {
    return 'Prompt chaining means using the output of one prompt as the input for the next. Example: outline → expand → refine.'
  }

  if (msg.includes('research') || msg.includes('which ai')) {
    return 'For research, Perplexity is excellent for source-backed answers. Claude is strong for long documents. Gemini is useful for Google-based tasks.'
  }

  if (msg.includes('email')) {
    return `Try this:

"You are a professional email writer. Write a concise email to [recipient] about [topic]. Keep it clear and professional."`
  }

  if (msg.includes('better prompt') || msg.includes('write a prompt')) {
    return 'A good prompt needs: Role, Task, Context, and Format. Example: "Act as a marketer. Write a product description for beginners in bullet points."'
  }

  return 'The best prompts are specific. Tell the AI who it is, what to do, give context, and explain the output format.'
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content:
        'Hi! I am the Academia assistant. Ask me anything about writing better AI prompts, choosing the right AI tool, or getting a custom prompt template.',
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

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getBotResponse(text),
      }

      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 1000)
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
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-btn-primary shadow-glow-purple flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
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
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] h-[520px] flex flex-col glass-card border-border-bright shadow-card overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface/50">
              <div className="w-8 h-8 rounded-lg bg-btn-primary flex items-center justify-center">
                <Bot size={16} />
              </div>

              <div>
                <p className="text-sm font-display font-semibold text-white">
                  Academia Assistant
                </p>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${
                    msg.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-surface-2">
                    {msg.role === 'assistant' ? (
                      <Sparkles size={12} />
                    ) : (
                      <User size={12} />
                    )}
                  </div>

                  <div className="max-w-[240px] rounded-xl px-3 py-2 text-sm bg-surface-2 border border-border text-white whitespace-pre-wrap">
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="text-sm text-slate-400">Typing...</div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Starter Questions */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-slate-500 mb-2">
                  Quick questions:
                </p>

                <div className="flex flex-wrap gap-2">
                  {starterMessages.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-xs px-2 py-1 rounded-lg bg-surface-2 border border-border text-slate-400 hover:text-white"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 p-3 border-t border-border"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about prompts..."
                className="flex-1 bg-surface-2 border border-border rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-500"
              />

              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                title="Send message"
                className="w-9 h-9 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:opacity-40 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <Send size={14} aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}