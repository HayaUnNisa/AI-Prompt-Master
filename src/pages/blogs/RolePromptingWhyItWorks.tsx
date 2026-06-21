export default function RolePromptingWhyItWorks() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-10">
        <span className="text-sm text-purple-400 font-medium">
          Prompt Engineering • 8 min read
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
          Role Prompting: Why It Works
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          One of the simplest ways to improve AI responses is to tell the AI who
          it should act as. This is called role prompting, and it helps the AI
          understand the perspective, tone, and expertise needed for the task.
        </p>
      </div>

      <section className="space-y-8 text-slate-300 leading-8">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            What Is Role Prompting?
          </h2>

          <p>
            Role prompting means giving the AI a specific role before asking it
            to complete a task.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-4">
            <p className="font-mono text-sm">
              Act as an expert SEO strategist and review this blog outline.
            </p>
          </div>

          <p className="mt-4">
            This helps the AI respond from a clearer point of view instead of
            giving a generic answer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Why Role Prompting Works
          </h2>

          <p>
            AI models generate responses based on patterns. When you give the AI
            a role, you narrow the pattern it should follow.
          </p>

          <p className="mt-4">
            For example, asking AI to “review my landing page” may produce a
            general answer. But asking it to “act as a conversion copywriter”
            makes the response more focused on headlines, benefits, objections,
            and calls to action.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Simple Prompt vs Role Prompt
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-3">Simple Prompt</h3>
              <p className="font-mono text-sm">
                Give me ideas for my website.
              </p>
            </div>

            <div className="bg-slate-900 border border-purple-500/30 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-3">Role Prompt</h3>
              <p className="font-mono text-sm">
                Act as a senior UX strategist and suggest website improvements
                for a beginner-friendly AI education platform.
              </p>
            </div>
          </div>

          <p className="mt-4">
            The second prompt gives the AI a clearer identity, purpose, and
            standard for quality.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Good Roles to Use
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Act as a senior copywriter</li>
            <li>Act as a UX designer</li>
            <li>Act as a teacher</li>
            <li>Act as a business strategist</li>
            <li>Act as a software engineer</li>
            <li>Act as a research analyst</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            What Makes a Good Role Prompt?
          </h2>

          <p>
            A strong role prompt does not stop at the role. It also gives
            context, task, rules, and output format.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-4">
            <pre className="whitespace-pre-wrap text-sm font-mono">
{`Act as a [ROLE].

Task:
[TASK]

Context:
[DETAILS]

Requirements:
[REQUIREMENTS]

Output format:
[FORMAT]`}
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Common Mistakes
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Using a role without giving context</li>
            <li>Choosing a vague role like “expert” only</li>
            <li>Forgetting to define the final output</li>
            <li>Using a role that does not match the task</li>
          </ul>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            Final Thought
          </h3>

          <p>
            Role prompting works because it gives AI a clearer lens. Instead of
            asking for a generic response, you guide the AI toward a specific
            kind of thinking.
          </p>
        </div>
      </section>
    </article>
  )
}