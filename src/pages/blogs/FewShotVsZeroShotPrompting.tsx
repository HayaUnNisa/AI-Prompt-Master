export default function FewShotVsZeroShotPrompting() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-10">
        <span className="text-sm text-purple-400 font-medium">
          Prompt Engineering • 8 min read
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
          Few-Shot Prompting vs Zero-Shot Prompting: Which One Works Better?
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          Most people use AI without realizing they are already prompting in
          one of two major ways: zero-shot or few-shot. Understanding the
          difference can dramatically improve the quality of your outputs.
        </p>
      </div>

      <section className="space-y-8 text-slate-300 leading-8">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            What Is Zero-Shot Prompting?
          </h2>

          <p>
            Zero-shot prompting means asking the AI to perform a task without
            giving any examples.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-4">
            <p className="font-mono text-sm">
              Write an email apologizing to a client for a delayed delivery.
            </p>
          </div>

          <p className="mt-4">
            Here, the AI relies entirely on its training to decide the style,
            tone, and structure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            What Is Few-Shot Prompting?
          </h2>

          <p>
            Few-shot prompting means providing examples before asking for the
            final output.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-4">
            <pre className="whitespace-pre-wrap text-sm font-mono">
{`Example 1:
Customer complaint → Friendly apology

Example 2:
Refund request → Professional resolution

Now write:
Late delivery apology email`}
            </pre>
          </div>

          <p className="mt-4">
            This gives AI a pattern to follow.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Key Differences
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Zero-shot is faster</li>
            <li>Few-shot gives more control</li>
            <li>Few-shot improves consistency</li>
            <li>Zero-shot is better for quick tasks</li>
            <li>Few-shot is stronger for complex workflows</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            When to Use Zero-Shot
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Brainstorming ideas</li>
            <li>Quick summaries</li>
            <li>Simple content generation</li>
            <li>Fast research</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            When to Use Few-Shot
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Brand voice writing</li>
            <li>Sales copy</li>
            <li>Structured outputs</li>
            <li>Repeatable workflows</li>
          </ul>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            Final Thought
          </h3>

          <p>
            Zero-shot is speed. Few-shot is precision. The more important the
            result, the more valuable examples become.
          </p>
        </div>
      </section>
    </article>
  )
}