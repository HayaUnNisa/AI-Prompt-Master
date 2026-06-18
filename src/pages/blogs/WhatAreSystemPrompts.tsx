export default function WhatAreSystemPrompts() {
  return (
    <>
      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        What Are System Prompts?
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        A system prompt is a hidden instruction that tells an AI assistant how it
        should behave before the conversation even starts.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        It controls the assistant’s role, tone, rules, boundaries, and response
        style. In simple words, it is like giving the AI a job description.
      </p>

      <blockquote className="border-l-4 border-purple-500 pl-4 my-6 text-slate-300 italic">
        A normal prompt asks for one task. A system prompt shapes how the AI
        behaves across the whole conversation.
      </blockquote>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Why System Prompts Matter
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Without a system prompt, an AI assistant may respond in a general way.
        With a system prompt, it can behave like a specific type of assistant:
        teacher, editor, coding helper, research assistant, or customer support
        agent.
      </p>

      <div className="glass-card p-5 my-6">
        <h3 className="font-display font-semibold text-white mb-3">
          A system prompt can define:
        </h3>

        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>The AI’s role</li>
          <li>The tone of voice</li>
          <li>The type of answers it should give</li>
          <li>What it should avoid</li>
          <li>How responses should be formatted</li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Simple Example
      </h2>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <p className="text-slate-300 leading-relaxed">
          You are a beginner-friendly AI prompt coach. Explain everything in
          simple language. Avoid technical jargon. Give practical examples and
          keep answers short.
        </p>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        This instruction changes how the AI responds. Instead of giving complex
        or technical answers, it will try to stay simple, clear, and practical.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        System Prompt vs User Prompt
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        A user prompt is the message you type directly into the chat. A system
        prompt is the background instruction that guides the assistant’s behavior.
      </p>

      <div className="glass-card p-5 my-6">
        <ul className="space-y-4 text-slate-400 text-sm leading-relaxed">
          <li>
            <span className="text-purple-300 font-semibold">System prompt:</span>{' '}
            Defines how the AI should behave.
          </li>
          <li>
            <span className="text-purple-300 font-semibold">User prompt:</span>{' '}
            Asks the AI to do a specific task.
          </li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Where System Prompts Are Used
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        System prompts are common in custom AI tools, chatbots, AI apps, customer
        support bots, coding assistants, and workflow automations.
      </p>

      <div className="bg-purple-600/10 border border-purple-500/30 rounded-xl p-5 my-6">
        <p className="text-slate-300">
          If an AI assistant always speaks in a certain tone or follows certain
          rules, there is probably a system prompt guiding it.
        </p>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        What Makes a Good System Prompt?
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        A good system prompt is clear, specific, and not overloaded with too many
        confusing instructions.
      </p>

      <div className="glass-card p-5 my-6">
        <h3 className="font-display font-semibold text-white mb-3">
          Include these parts:
        </h3>

        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>Role: what the AI should act as</li>
          <li>Goal: what the AI should help with</li>
          <li>Tone: how the AI should sound</li>
          <li>Rules: what it should always do or avoid</li>
          <li>Format: how answers should be structured</li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Common Mistakes
      </h2>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
          <li>Writing vague instructions</li>
          <li>Adding too many rules at once</li>
          <li>Giving conflicting instructions</li>
          <li>Not defining the assistant’s role</li>
          <li>Forgetting to mention tone or format</li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Final Thoughts
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        System prompts are one of the most important parts of building useful AI
        assistants. They help keep the AI focused, consistent, and aligned with
        the user’s goal.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        If you understand system prompts, you can build better chatbots, custom
        assistants, and AI workflows.
      </p>
    </>
  )
}