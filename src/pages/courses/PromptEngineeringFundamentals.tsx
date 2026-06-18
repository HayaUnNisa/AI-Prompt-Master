import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export const promptEngineeringFundamentalsModules = [
  {
    title: 'Introduction to AI and Prompts',
    time: '1 hour',
    lessons: [
      {
        title: 'What is an AI language model?',
        time: '15 min',
        intro:
          'An AI language model is a tool that can understand and generate text based on the instructions you give it. It can explain topics, write emails, summarize notes, create ideas, help with studying, and support many types of work.',
        explanation: [
          'The important thing to understand is that AI does not automatically know your exact goal. It only sees the message you give it. If your message is unclear, the answer will usually be unclear too.',
          'Think of AI like a smart assistant who is ready to help, but needs proper instructions. If you say “help me with writing,” it has to guess what kind of writing you mean. But if you say “help me rewrite this paragraph for beginners in a friendly tone,” the AI has much more direction.',
          'AI language models are useful because they can quickly organize information, explain ideas in different ways, and generate structured responses. But they are not perfect. They can misunderstand vague instructions, make assumptions, or give generic answers if your prompt is weak.',
        ],
        weakPrompt: 'Explain AI.',
        betterPrompt:
          'Explain AI to a complete beginner in simple words. Use a real-life example and keep the answer under 150 words.',
        commonMistake:
          'The common mistake is treating AI like Google Search. AI works better when you give it context, not just keywords.',
        practice:
          'Open ChatGPT or any AI tool. First ask: “Explain AI.” Then ask: “Explain AI to a 12-year-old beginner using a simple real-life example.” Compare both answers and notice how the second prompt gives a better result.',
        takeaway:
          'AI is powerful, but the quality of the answer depends on the quality of your instruction.',
      },
      {
        title: 'How prompts work',
        time: '15 min',
        intro:
          'A prompt is the instruction you give to an AI tool. It tells the AI what you want, how you want it, and what details it should consider.',
        explanation: [
          'A prompt can be short or long, but a useful prompt is usually clear. It explains the task, gives context, and tells the AI what kind of answer you expect.',
          'The AI does not read your mind. It responds based on the information you provide. If you give it more useful information, it can give you a more useful answer.',
          'A strong prompt often includes five things: role, task, context, tone, and format.',
        ],
        weakPrompt: 'Write a post.',
        betterPrompt:
          'Act as a social media writer. Write a short Instagram post for beginners learning AI prompts. Keep it simple and practical.',
        commonMistake:
          'Many beginners only describe the topic, but they forget to describe the result they want.',
        practice:
          'Write one weak prompt for a task you do often. Then rewrite it by adding role, task, context, tone, and format.',
        takeaway:
          'A prompt works best when it gives the AI clear direction instead of forcing it to guess.',
      },
      {
        title: 'Why most prompts fail',
        time: '15 min',
        intro:
          'Most prompts fail because they are too vague. A vague prompt gives the AI too much room to guess.',
        explanation: [
          'When you write “make this better,” the AI does not know what “better” means.',
          'A failed prompt is not always a failed AI tool. Often, it is just a prompt that needs more detail.',
          'Good prompts reduce confusion and tell the AI what to focus on.',
        ],
        weakPrompt: 'Make this better.',
        betterPrompt:
          'Improve this paragraph for clarity and flow. Keep the meaning the same and explain the changes.',
        commonMistake:
          'The mistake is giving vague feedback without explaining what improvement means.',
        practice:
          'Take a weak prompt you used before and rewrite it with a clear goal, audience, tone, and format.',
        takeaway:
          'If the AI response feels weak, improve the prompt before blaming the tool.',
      },
      {
        title: 'Your first prompt experiment',
        time: '15 min',
        intro:
          'Prompting is a skill you improve by testing. Your first prompt does not need to be perfect.',
        explanation: [
          'Start with a basic prompt and review the output.',
          'Then improve the prompt by adding more direction.',
          'This teaches the habit of prompt, review, refine, and repeat.',
        ],
        weakPrompt: 'Write a caption about AI.',
        betterPrompt:
          'Act as a beginner-friendly AI educator. Write a short Instagram caption explaining why clear prompts matter.',
        commonMistake:
          'Many people stop after the first response instead of refining the prompt.',
        practice:
          'Create three versions of the same prompt: weak, better, and best.',
        takeaway:
          'Good prompting is a process of improving instructions.',
      },
    ],
  },
  {
    title: 'The Core Prompt Framework',
    time: '1 hour',
    lessons: [
      {
        title: 'Role: Setting the AI context',
        time: '15 min',
        intro:
          'The role tells the AI who it should act as while answering. This is one of the easiest ways to improve the quality of a response because it gives the AI a clear perspective.',
        explanation: [
          'When you give the AI a role, you are guiding its style, depth, and focus. For example, “Act as a teacher” creates a different response than “Act as a copywriter” or “Act as a business advisor.”',
          'Role prompting is useful because the same topic can be explained in many ways. A beginner needs a simple explanation. A developer may need technical detail. A marketer may need practical examples.',
          'You do not need complicated roles. Simple roles work well: teacher, editor, tutor, strategist, coach, assistant, researcher, or copywriter.',
        ],
        weakPrompt: 'Explain this topic.',
        betterPrompt:
          'Act as a beginner-friendly teacher. Explain this topic in simple language with one real-life example.',
        commonMistake:
          'Many beginners skip the role and expect the AI to automatically know what style or level to use.',
        practice:
          'Write five role prompts for different situations: studying, writing, business, research, and content creation.',
        takeaway:
          'A clear role helps the AI respond from the right perspective.',
      },
      {
        title: 'Task: Stating what you want',
        time: '15 min',
        intro:
          'The task is the exact action you want the AI to complete. If the task is unclear, the AI will usually give a broad or unfocused answer.',
        explanation: [
          'A good task uses direct action words like explain, summarize, rewrite, compare, generate, organize, improve, review, or create.',
          'Instead of saying “help me with content,” tell the AI exactly what content you need. For example: “Create 10 beginner-friendly blog ideas about AI prompts.”',
          'The task should be specific enough that the AI knows when the job is done. Clear tasks produce clear outputs.',
        ],
        weakPrompt: 'Help me with content.',
        betterPrompt:
          'Generate 10 beginner-friendly blog post ideas about ChatGPT prompts. Make each idea practical and easy to understand.',
        commonMistake:
          'The mistake is asking for general help instead of giving the AI a clear action to complete.',
        practice:
          'Write three prompts using action words like explain, summarize, compare, rewrite, and generate.',
        takeaway:
          'A strong task tells the AI exactly what result you want.',
      },
      {
        title: 'Context: Giving background',
        time: '15 min',
        intro:
          'Context gives the AI the background information it needs to create a useful response. Without context, the AI has to guess.',
        explanation: [
          'Context can include your audience, goal, platform, product, situation, tone, skill level, or any important detail that affects the answer.',
          'For example, “write an email” is too broad. But “write a friendly email to a customer who asked for a refund” gives the AI a clear situation.',
          'Context makes the output more relevant. The more useful context you provide, the less editing you usually need later.',
        ],
        weakPrompt: 'Write an email.',
        betterPrompt:
          'Write a friendly email to a customer who asked for a refund. Keep it polite, professional, and under 150 words.',
        commonMistake:
          'Many users give the task but forget the situation, audience, or goal.',
        practice:
          'Take one prompt and add four context details: audience, goal, tone, and situation.',
        takeaway:
          'Context turns a generic answer into a useful answer.',
      },
      {
        title: 'Format: Controlling output structure',
        time: '15 min',
        intro:
          'Format tells the AI how to organize the answer. This is important because the same information can be presented in many different ways.',
        explanation: [
          'You can ask the AI to respond in bullet points, numbered steps, a table, short paragraphs, a checklist, a script, an email, or a template.',
          'Format saves time because the answer comes back closer to how you need to use it. If you need a checklist, ask for a checklist. If you need a table, ask for a table.',
          'Good formatting instructions are simple. Examples: “Use bullet points,” “Create a table,” “Keep each point under two sentences,” or “Write this as a step-by-step guide.”',
        ],
        weakPrompt: 'Explain prompt engineering.',
        betterPrompt:
          'Explain prompt engineering in a table with three columns: concept, meaning, and example.',
        commonMistake:
          'Many people forget to tell the AI how they want the answer structured.',
        practice:
          'Ask the same question in three formats: paragraph, bullet points, and table. Compare which one is easiest to use.',
        takeaway:
          'The output format controls how useful and readable the AI response becomes.',
      },
    ],
  },
  {
    title: 'Practical Prompt Writing',
    time: '1 hour',
    lessons: [
      {
        title: 'Prompts for writing and editing',
        time: '15 min',
        intro:
          'Writing is one of the most powerful use cases of AI. It can help you write faster, improve clarity, fix grammar, and make content easier to understand.',
        explanation: [
          'The key is being clear about what kind of writing you want. AI can write emails, captions, blogs, reports, and scripts, but it needs direction.',
          'If you already have text, AI can act like an editor. It can simplify, shorten, improve flow, or make the tone more professional.',
          'The more specific you are about tone, audience, and purpose, the better the writing becomes.',
        ],
        weakPrompt: 'Write me something about AI.',
        betterPrompt:
          'Write a beginner-friendly blog introduction about AI prompts. Keep it simple, engaging, and under 150 words.',
        commonMistake:
          'Many beginners ask AI to write without defining the audience or purpose.',
        practice:
          'Write one short paragraph about a topic you know. Then ask AI to improve clarity, shorten it, and make it beginner-friendly.',
        takeaway:
          'Good writing prompts clearly explain the goal, audience, and tone.',
      },
      {
        title: 'Prompts for research and summarization',
        time: '15 min',
        intro:
          'AI can save hours by helping you summarize long content, organize ideas, and break down difficult topics.',
        explanation: [
          'Instead of reading an entire article from start to finish, AI can summarize it into key points.',
          'It can also explain difficult ideas in simpler words. This is useful for students, researchers, and professionals.',
          'However, you should always verify important facts because AI can sometimes be inaccurate.',
        ],
        weakPrompt: 'Summarize this.',
        betterPrompt:
          'Summarize this article into 5 bullet points for a beginner. Highlight the most important ideas and explain them simply.',
        commonMistake:
          'People often trust AI summaries without verifying the original information.',
        practice:
          'Paste a short article and ask AI for a summary, key points, and a beginner explanation.',
        takeaway:
          'AI is a powerful research assistant, but verification is still your responsibility.',
      },
      {
        title: 'Prompts for brainstorming',
        time: '15 min',
        intro:
          'Brainstorming with AI is one of the fastest ways to generate ideas when you feel stuck.',
        explanation: [
          'AI can create content ideas, product ideas, business names, headlines, and creative concepts in seconds.',
          'The best way to brainstorm is to ask for many options instead of one. Quantity first, then quality.',
          'After generating ideas, you can ask AI to improve, combine, or rank them.',
        ],
        weakPrompt: 'Give me ideas.',
        betterPrompt:
          'Generate 20 content ideas for a beginner-friendly AI education website. Focus on practical prompt engineering topics.',
        commonMistake:
          'Asking for too few ideas limits creativity and exploration.',
        practice:
          'Ask AI for 20 ideas in a topic you care about. Then ask it to rank the top 5 and explain why.',
        takeaway:
          'AI brainstorming works best when you ask for volume first, then refine.',
      },
      {
        title: 'Building your personal prompt library',
        time: '15 min',
        intro:
          'A prompt library is your personal collection of reusable prompts. This saves time and helps you improve consistency.',
        explanation: [
          'Instead of writing prompts from scratch every time, you can save the best ones and reuse them.',
          'Organize them by category: writing, studying, business, content creation, coding, and research.',
          'Over time, your prompt library becomes one of your most valuable AI assets because it reflects what works for you.',
        ],
        weakPrompt: 'I will remember this prompt later.',
        betterPrompt:
          'Save this prompt under my writing folder: “Rewrite this article for beginners using simpler words and bullet points.”',
        commonMistake:
          'Many people create good prompts but never save them, forcing themselves to start over later.',
        practice:
          'Create your first 10 reusable prompts and organize them into categories.',
        takeaway:
          'Your prompt library is your long-term AI advantage.',
      },
    ],
  },
]

function PromptEngineeringFundamentals() {
  return (
    <div className="space-y-8">
      {promptEngineeringFundamentalsModules.map((module, moduleIndex) => (
        <div key={module.title} className="glass-card p-6">
          <div className="mb-6">
            <span className="text-xs font-mono text-purple-400">
              Module {moduleIndex + 1} • {module.time} •{' '}
              {module.lessons.length} Lessons
            </span>

            <h2 className="font-display text-3xl font-bold text-white mt-2">
              {module.title}
            </h2>
          </div>

          <div className="space-y-6">
            {module.lessons.map((lesson, lessonIndex) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-border bg-navy-900/40 p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-cyan-400 font-mono text-sm">
                    Lesson {lessonIndex + 1}
                  </span>

                  <span className="text-slate-500 text-sm">{lesson.time}</span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {lesson.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-4">
                  {lesson.intro}
                </p>

                {lesson.explanation.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-400 leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-4">
                  <p className="text-sm text-purple-300 font-semibold mb-2">
                    Weak Prompt
                  </p>

                  <p className="text-slate-300">{lesson.weakPrompt}</p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-4">
                  <p className="text-sm text-green-300 font-semibold mb-2">
                    Better Prompt
                  </p>

                  <p className="text-slate-300">{lesson.betterPrompt}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-red-300 font-semibold">
                      Common Mistake
                    </h4>

                    <p className="text-slate-400">{lesson.commonMistake}</p>
                  </div>

                  <div>
                    <h4 className="text-blue-300 font-semibold">Practice</h4>

                    <p className="text-slate-400">{lesson.practice}</p>
                  </div>

                  <div className="flex gap-2 items-start pt-2">
                    <CheckCircle
                      size={18}
                      className="text-green-400 mt-1 flex-shrink-0"
                    />

                    <p className="text-white font-medium">
                      {lesson.takeaway}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PromptEngineeringFundamentals