export default function HowToWriteBetterChatGPTPrompts() {
  return (
    <>
      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Why Most ChatGPT Prompts Fail
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Most people use ChatGPT like a search engine. They type one short
        sentence, expect a perfect answer, and then feel disappointed when the
        response sounds generic.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        The problem is not always the AI. Most of the time, the problem is that
        the prompt does not give enough direction. ChatGPT needs context,
        structure, and a clear goal to produce useful answers.
      </p>

      <blockquote className="border-l-4 border-purple-500 pl-4 my-6 text-slate-300 italic">
        A vague prompt usually creates a vague answer. A clear prompt gives the
        AI a clear path to follow.
      </blockquote>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        The Simple Prompt Formula
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        A strong ChatGPT prompt usually has four important parts: role, task,
        context, and format. You do not need complicated language. You just need
        to explain what you want clearly.
      </p>

      <div className="glass-card p-5 my-6">
        <h3 className="font-display font-semibold text-white mb-3">
          The 4-Part Prompt Formula
        </h3>

        <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
          <li>
            <span className="text-purple-300 font-semibold">Role:</span> Tell
            ChatGPT who it should act as.
          </li>
          <li>
            <span className="text-purple-300 font-semibold">Task:</span> Tell
            it exactly what you want it to do.
          </li>
          <li>
            <span className="text-purple-300 font-semibold">Context:</span>{' '}
            Give background information, audience, goal, or situation.
          </li>
          <li>
            <span className="text-purple-300 font-semibold">Format:</span> Tell
            it how the answer should be structured.
          </li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        1. Give ChatGPT a Clear Role
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        A role tells ChatGPT what perspective to use. Instead of asking it to
        “write something,” tell it who it should be while answering.
      </p>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <p className="text-sm text-slate-500 mb-2">Weak prompt:</p>
        <p className="text-slate-300 mb-4">
          Write a product description.
        </p>

        <p className="text-sm text-slate-500 mb-2">Better prompt:</p>
        <p className="text-slate-300">
          Act as an experienced ecommerce copywriter. Write a product
          description for a beginner-friendly productivity planner.
        </p>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        The second version gives the AI a stronger direction. It now understands
        the type of thinking and writing style you expect.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        2. Be Specific About the Task
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        The task is the main action you want ChatGPT to complete. A weak task is
        too broad. A better task is specific and easy to understand.
      </p>

      <div className="glass-card p-5 my-6">
        <h3 className="font-display font-semibold text-white mb-3">
          Instead of saying:
        </h3>

        <p className="text-slate-400 mb-4">
          “Help me with my business.”
        </p>

        <h3 className="font-display font-semibold text-white mb-3">
          Say this:
        </h3>

        <p className="text-slate-400">
          “Give me 10 Instagram post ideas for a small online bakery that wants
          to attract local customers.”
        </p>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        This gives ChatGPT a real task. It knows the platform, business type,
        audience, and expected output.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        3. Add Useful Context
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Context is what makes your prompt personal and useful. Without context,
        ChatGPT has to guess. With context, it can create an answer that fits
        your situation.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        Context can include your audience, goal, tone, product, skill level,
        problem, platform, or any important background.
      </p>

      <div className="bg-purple-600/10 border border-purple-500/30 rounded-xl p-5 my-6">
        <h3 className="font-display font-semibold text-purple-300 mb-3">
          Example context
        </h3>

        <p className="text-slate-400 leading-relaxed">
          “My audience is beginners who are new to AI tools. They do not know
          technical terms, so explain everything in simple language.”
        </p>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        This small amount of context can completely change the quality of the
        answer.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        4. Choose the Output Format
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Format tells ChatGPT how to organize the response. This is important
        because the same answer can be written as a paragraph, checklist, table,
        script, caption, email, or step-by-step plan.
      </p>

      <div className="glass-card p-5 my-6">
        <h3 className="font-display font-semibold text-white mb-3">
          Useful format instructions
        </h3>

        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>Write it as a checklist.</li>
          <li>Give me a step-by-step guide.</li>
          <li>Use a table with pros and cons.</li>
          <li>Keep each point under two sentences.</li>
          <li>Write it in a beginner-friendly tone.</li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Complete Prompt Example
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Here is how all four parts come together in one strong prompt:
      </p>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <p className="text-slate-300 leading-relaxed">
          “Act as a beginner-friendly AI writing coach. Help me create a blog
          outline about how small business owners can use ChatGPT for marketing.
          My audience is non-technical beginners. Keep the language simple.
          Format the answer as a numbered outline with short explanations under
          each section.”
        </p>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        This prompt works because it gives ChatGPT a role, task, context, and
        format. The AI does not have to guess what you want.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Common Prompting Mistakes
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Beginners often think better prompts need fancy wording. They do not.
        Good prompts are usually simple, direct, and specific.
      </p>

      <div className="glass-card p-5 my-6">
        <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
          <li>Asking very broad questions with no clear goal.</li>
          <li>Not explaining who the answer is for.</li>
          <li>Forgetting to mention the tone or style.</li>
          <li>Not saying what format the response should follow.</li>
          <li>Expecting the first answer to be perfect.</li>
        </ul>
      </div>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Improve the Answer With Follow-Up Prompts
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Your first prompt does not need to be perfect. A big part of using
        ChatGPT well is improving the answer through follow-up prompts.
      </p>

      <div className="bg-surface-2 border border-border rounded-xl p-5 my-6">
        <h3 className="font-display font-semibold text-white mb-3">
          Helpful follow-up prompts
        </h3>

        <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
          <li>Make this simpler.</li>
          <li>Give me three different versions.</li>
          <li>Make the tone more professional.</li>
          <li>Turn this into bullet points.</li>
          <li>Explain it for a complete beginner.</li>
        </ul>
      </div>

      <p className="text-slate-400 leading-relaxed mb-4">
        Follow-up prompts are where a lot of the real value happens. You guide
        the AI closer to the result you actually want.
      </p>

      <h2 className="font-display font-bold text-2xl text-white mt-10 mb-4">
        Final Thoughts
      </h2>

      <p className="text-slate-400 leading-relaxed mb-4">
        Writing better ChatGPT prompts is not about sounding technical. It is
        about being clear. The better you explain your goal, context, and desired
        format, the better the response becomes.
      </p>

      <p className="text-slate-400 leading-relaxed mb-4">
        Start with the simple formula: role, task, context, and format. Once you
        use this structure a few times, prompting becomes much easier and your AI
        results become more useful.
      </p>
    </>
  )
}