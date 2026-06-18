export default function SystemPromptsExplained() {
  return (
    <>
      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        What is a System Prompt?
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        A system prompt is a set of instructions that tells an AI assistant how
        it should behave before the conversation starts.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        Think of it like giving the AI a job description. Instead of repeating
        the same instructions again and again, the system prompt sets the rules
        once and keeps the assistant focused.
      </p>

      <blockquote className="border-l-4 border-purple-500 pl-4 my-6 text-slate-300 italic">
        A good system prompt turns a general AI assistant into a focused,
        specialized helper.
      </blockquote>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Why System Prompts Matter
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Without a system prompt, the AI may respond in a general way. With a
        strong system prompt, it understands its role, tone, limits, and output
        style from the beginning.
      </p>

      <div className="glass-card p-5 my-6">
        <h3 className="font-display font-semibold text-white mb-3">
          System prompts help define:
        </h3>

        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>The assistant’s role</li>
          <li>The tone of voice</li>
          <li>The type of tasks it should handle</li>
          <li>What it should avoid</li>
          <li>The format of its answers</li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        System Prompt vs Normal Prompt
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        A normal prompt is what you type during the conversation. A system prompt
        works in the background and guides the assistant’s behavior across the
        whole conversation.
      </p>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <p className="text-sm text-slate-500 mb-2">Normal prompt:</p>
        <p className="text-slate-300 mb-4">
          Write an Instagram caption for this product.
        </p>

        <p className="text-sm text-slate-500 mb-2">System prompt:</p>
        <p className="text-slate-300">
          You are a beginner-friendly marketing assistant. Always write in a
          simple, clear, non-hype tone. Avoid emojis. Keep responses short and
          practical.
        </p>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        The Main Parts of a Good System Prompt
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        A system prompt does not need to be complicated. The best ones are clear,
        practical, and easy for the AI to follow.
      </p>

      <div className="glass-card p-5 my-6">
        <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
          <li>
            <span className="text-purple-300 font-semibold">Role:</span> What
            the assistant is supposed to be.
          </li>
          <li>
            <span className="text-purple-300 font-semibold">Goal:</span> What
            the assistant should help the user achieve.
          </li>
          <li>
            <span className="text-purple-300 font-semibold">Tone:</span> How it
            should sound.
          </li>
          <li>
            <span className="text-purple-300 font-semibold">Rules:</span> What
            it should always do or avoid.
          </li>
          <li>
            <span className="text-purple-300 font-semibold">Format:</span> How
            it should structure answers.
          </li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Simple System Prompt Template
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        You can use this basic structure when creating your own system prompt:
      </p>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <p className="text-slate-300 leading-relaxed">
          You are a [role]. Your goal is to help [audience] with [task]. Write
          in a [tone] style. Always [important rule]. Avoid [things to avoid].
          Format your answers as [desired format].
        </p>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Example System Prompt
      </h2>

      <div className="bg-purple-600/10 border border-purple-500/30 rounded-xl p-5 my-6">
        <p className="text-slate-300 leading-relaxed">
          You are a beginner-friendly AI prompt coach. Your goal is to help
          non-technical users write better prompts for ChatGPT, Claude, Gemini,
          and other AI tools. Use simple language, avoid jargon, and explain
          concepts step by step. Keep answers practical and give examples when
          helpful.
        </p>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Where System Prompts Are Used
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        System prompts are used in many AI tools and workflows, especially when
        someone wants the AI to behave consistently.
      </p>

      <div className="glass-card p-5 my-6">
        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>Custom AI assistants</li>
          <li>Chatbots</li>
          <li>AI customer support tools</li>
          <li>Prompt-based apps</li>
          <li>Writing assistants</li>
          <li>Automation workflows</li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Common Mistakes to Avoid
      </h2>

      <div className="glass-card p-5 my-6">
        <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
          <li>Making the system prompt too vague</li>
          <li>Adding too many conflicting instructions</li>
          <li>Forgetting to define the assistant’s role</li>
          <li>Not explaining the tone clearly</li>
          <li>Ignoring the output format</li>
        </ul>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        If the system prompt is confusing, the AI response will often be
        confusing too.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Final Thoughts
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        System prompts are one of the most powerful parts of prompt engineering.
        They help you guide the AI before the actual conversation begins.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        If you want consistent AI behavior, start with a clear role, simple
        rules, a defined tone, and a useful output format.
      </p>
    </>
  )
}