export default function PromptChainingGuide() {
  return (
    <>
      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        What is Prompt Chaining?
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Most beginners use AI by asking one big question and expecting one big
        perfect answer. Sometimes that works. But for more complex tasks, it
        often creates messy, generic, or incomplete results.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        Prompt chaining solves this problem. Instead of doing everything in one
        prompt, you break the work into smaller steps. Each step builds on the
        previous one.
      </p>

      <blockquote className="border-l-4 border-purple-500 pl-4 my-6 text-slate-300 italic">
        Prompt chaining turns AI from a simple answer machine into a step-by-step
        workflow partner.
      </blockquote>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Why Single Prompts Often Fail
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Imagine asking:
      </p>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <p className="text-slate-300">
          “Write a full business plan, marketing strategy, email campaign, and
          landing page for my new product.”
        </p>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        This is too much at once. The AI has to handle many tasks together,
        which lowers quality.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        When you break it into steps, each task becomes more focused and
        produces stronger output.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        How Prompt Chaining Works
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Prompt chaining means taking one result and using it as the starting
        point for the next step.
      </p>

      <div className="glass-card p-5 my-6">
        <h3 className="font-display font-semibold text-white mb-3">
          Simple chain example
        </h3>

        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>Step 1: Generate ideas</li>
          <li>Step 2: Pick the best idea</li>
          <li>Step 3: Build an outline</li>
          <li>Step 4: Expand each section</li>
          <li>Step 5: Edit and improve</li>
        </ul>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        Each step is smaller, easier, and usually better.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Real Example: Writing a Blog Post
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Instead of asking for a full blog post immediately, use chaining like
        this:
      </p>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <ul className="space-y-4 text-slate-400 text-sm leading-relaxed">
          <li>
            <strong className="text-white">Prompt 1:</strong> Give me 10 blog
            ideas about AI tools for beginners.
          </li>

          <li>
            <strong className="text-white">Prompt 2:</strong> Choose the best
            idea from this list and explain why it is valuable.
          </li>

          <li>
            <strong className="text-white">Prompt 3:</strong> Create a detailed
            outline for this topic.
          </li>

          <li>
            <strong className="text-white">Prompt 4:</strong> Write the intro
            for section one.
          </li>

          <li>
            <strong className="text-white">Prompt 5:</strong> Improve the
            clarity and make it beginner-friendly.
          </li>
        </ul>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        This method creates far better content than one huge prompt.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Best Use Cases for Prompt Chaining
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Prompt chaining is powerful because it works in many different
        situations.
      </p>

      <div className="glass-card p-5 my-6">
        <h3 className="font-display font-semibold text-white mb-3">
          Great for:
        </h3>

        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>Writing blog posts</li>
          <li>Creating social media content</li>
          <li>Research and summaries</li>
          <li>Business planning</li>
          <li>Learning new topics</li>
          <li>Building products</li>
          <li>Marketing campaigns</li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Why Prompt Chaining Improves Quality
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Smaller prompts reduce confusion. They allow the AI to focus on one
        task at a time.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        This usually improves:
      </p>

      <div className="bg-purple-600/10 border border-purple-500/30 rounded-xl p-5 my-6">
        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>Clarity</li>
          <li>Accuracy</li>
          <li>Creativity</li>
          <li>Structure</li>
          <li>Consistency</li>
        </ul>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        Instead of fixing one weak answer, you build strong answers step by
        step.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Common Mistakes to Avoid
      </h2>

      <div className="glass-card p-5 my-6">
        <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
          <li>Making each step too big</li>
          <li>Skipping important steps</li>
          <li>Not using the previous output properly</li>
          <li>Changing direction too much between prompts</li>
          <li>Not refining weak outputs</li>
        </ul>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        Keep each step focused. That is the key.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        A Simple Beginner Framework
      </h2>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <p className="text-slate-300 mb-3">
          Use this framework:
        </p>

        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>Think</li>
          <li>Break it down</li>
          <li>Prompt step by step</li>
          <li>Review</li>
          <li>Improve</li>
        </ul>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        This simple process works for almost everything.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Final Thoughts
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Prompt chaining is one of the most powerful AI skills you can learn.
        Instead of trying to force one perfect prompt, you guide the AI through
        a structured process.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        The result is usually clearer, smarter, and far more useful. If you
        want better AI outputs, start thinking in steps.
      </p>
    </>
  )
}