export default function ReusablePromptTemplates() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-10">
        <span className="text-sm text-purple-400 font-medium">
          Advanced Prompting • 10 min read
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
          How to Build Reusable Prompt Templates
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          One of the biggest mistakes beginners make with AI is writing every
          prompt from scratch. It works at first, but over time it becomes
          slow, inconsistent, and hard to scale. Reusable prompt templates solve
          that problem.
        </p>
      </div>

      <section className="space-y-8 text-slate-300 leading-8">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            What Is a Reusable Prompt Template?
          </h2>

          <p>
            A reusable prompt template is a structured prompt framework that can
            be used again and again by replacing variables.
          </p>

          <p className="mt-4">
            Instead of writing:
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-4">
            <p className="font-mono text-sm">
              Write an Instagram caption for my crypto post.
            </p>
          </div>

          <p className="mt-4">You build this:</p>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-4">
            <pre className="whitespace-pre-wrap text-sm font-mono">
{`Write an Instagram caption for:
Topic: [TOPIC]
Audience: [AUDIENCE]
Tone: [TONE]
Goal: [GOAL]`}
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Why Templates Matter
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Save time</li>
            <li>Improve consistency</li>
            <li>Scale workflows</li>
            <li>Reduce mistakes</li>
            <li>Train teams faster</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            The 4 Parts of a Strong Template
          </h2>

          <h3 className="text-xl font-medium text-white mb-3">1. Role</h3>
          <p>Tell AI who it should act as.</p>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mt-3">
            <p className="font-mono text-sm">
              Act as an expert SEO strategist.
            </p>
          </div>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">2. Context</h3>
          <p>Provide important details.</p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">3. Task</h3>
          <p>Clearly define what needs to be done.</p>

          <h3 className="text-xl font-medium text-white mt-6 mb-3">4. Output Format</h3>
          <p>Tell AI how to structure the answer.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Example Template
          </h2>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <pre className="whitespace-pre-wrap text-sm font-mono">
{`Act as a [ROLE].

Task:
[TASK]

Context:
[DETAILS]

Requirements:
[REQUIREMENTS]

Output:
[FORMAT]`}
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Where Templates Work Best
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Blog writing</li>
            <li>Social media content</li>
            <li>Research workflows</li>
            <li>Code generation</li>
            <li>Customer support replies</li>
            <li>Sales emails</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Common Mistakes
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Making templates too vague</li>
            <li>Not using variables</li>
            <li>Skipping output formatting</li>
            <li>Adding too much unnecessary detail</li>
          </ul>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-3">
            Final Thought
          </h3>

          <p>
            Reusable prompt templates are one of the fastest ways to move from
            random prompting to structured AI systems. They turn AI from a tool
            into a workflow.
          </p>
        </div>
      </section>
    </article>
  )
}