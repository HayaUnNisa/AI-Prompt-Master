import { useParams, Link } from 'react-router-dom'
import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'
import { blogs } from '../data/blogs'

import HowToWriteBetterChatGPTPrompts from './blogs/HowToWriteBetterChatGPTPrompts'
import ClaudeVsChatGPTForWriting from './blogs/ClaudeVsChatGPTForWriting'
import PromptChainingGuide from './blogs/PromptChainingGuide'
import GeminiPromptingTips from './blogs/GeminiPromptingTips'
import SystemPromptsExplained from './blogs/SystemPromptsExplained'
import AiPromptsForStudents from './blogs/AiPromptsForStudents'
import HowToTalkToAiLikeAPro from './blogs/HowToTalkToAiLikeAPro'
import WhatAreSystemPrompts from './blogs/WhatAreSystemPrompts'
import BestChatGPTPromptsForStudents from './blogs/BestChatGPTPromptsForStudents'

const blogComponents: Record<string, React.ComponentType> = {
  'how-to-write-better-chatgpt-prompts': HowToWriteBetterChatGPTPrompts,
  'claude-vs-chatgpt-for-writing': ClaudeVsChatGPTForWriting,
  'prompt-chaining-guide': PromptChainingGuide,
  'gemini-prompting-tips': GeminiPromptingTips,
  'system-prompts-explained': SystemPromptsExplained,
  'ai-prompts-for-students': AiPromptsForStudents,
  'how-to-talk-to-ai-like-a-pro': HowToTalkToAiLikeAPro,
  'what-are-system-prompts': WhatAreSystemPrompts,
  'best-chatgpt-prompts-for-students': BestChatGPTPromptsForStudents,
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog || !slug) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl text-white mb-4">
            Article not found
          </h1>
          <Link to="/blogs" className="btn-primary inline-flex">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const BlogContent = blogComponents[slug]

  if (!BlogContent) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl text-white mb-4">
            Blog file not connected
          </h1>
          <Link to="/blogs" className="btn-primary inline-flex">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const related = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 2)

  return (
    <div className="pt-24 pb-20">
      <div className="container-wide section-padding">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Blog
        </Link>

        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          <motion.article
            className="glass-card p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <span className="tag-purple mb-4 inline-flex">
                {blog.category}
              </span>

              <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4 leading-tight">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {blog.readTime}
                </span>

                <span className="text-slate-500">By {blog.author}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10 h-64 sm:h-80">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose-dark">
              <BlogContent />
            </div>

            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
              <Tag size={14} className="text-slate-500 mt-0.5" />
              {blog.tags.map((tag) => (
                <span key={tag} className="tag-purple">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>

          <aside className="space-y-6">
            {related.length > 0 && (
              <div className="glass-card p-5">
                <h3 className="font-display font-semibold text-white mb-4">
                  Related Articles
                </h3>

                <div className="space-y-4">
                  {related.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blogs/${post.slug}`}
                      className="group block"
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-display text-slate-300 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {post.readTime}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="glow-border glass-card p-5 text-center">
              <h3 className="font-display font-semibold text-white mb-2">
                Ready to practice?
              </h3>

              <p className="text-sm text-slate-400 mb-4">
                Browse 500+ tested prompt templates organized by use case.
              </p>

              <Link
                to="/prompt-library"
                className="btn-primary text-sm w-full justify-center"
              >
                Open Prompt Library
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}