import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export const advancedPromptTechniquesModules = [
  {
    title: 'Prompt Patterns and Structures',
    time: '75 minutes',
    lessons: [
      {
        title: 'Few-shot prompting explained',
        time: '19 min',
        intro:
          'Few-shot prompting is an advanced prompting technique where you give the AI examples before asking it to create a new answer. Instead of only telling the AI what you want, you show it the pattern you want it to follow.',
        explanation: [
          'This technique is powerful because AI often learns the style of your request better through examples than through instructions alone. If you want a specific tone, structure, format, or writing style, examples can guide the AI more clearly.',
          'For example, imagine you want social media captions written in a calm, beginner-friendly style. If you only say “write captions,” the AI may create generic captions. But if you give it two examples of your preferred style, it can copy the pattern much more accurately.',
          'Few-shot prompting is especially useful for repeated tasks. If you are creating blog intros, email replies, captions, product descriptions, summaries, or customer service responses, you can provide sample outputs and ask the AI to continue in the same format.',
          'The key is to use examples that are close to the result you actually want. If your examples are too different from each other, the AI may not understand the pattern. Good examples should have similar structure, tone, length, and purpose.',
          'A strong few-shot prompt usually has three parts: instruction, examples, and new task. First, explain what you want. Second, show examples. Third, ask the AI to create a new output using the same style.',
          'This turns your prompt from a simple request into a mini training sample. You are showing the AI what “good” looks like before asking it to produce more.',
        ],
        weakPrompt: 'Write captions for my AI page.',
        betterPrompt:
          'Here are two examples of my caption style:\n\nExample 1: Most beginners do not need complicated AI tricks. They need clear prompts, simple structure, and practice.\n\nExample 2: A better prompt starts with a better question. Tell the AI the role, task, context, and format before expecting a useful answer.\n\nNow write 5 more captions in the same tone, structure, and beginner-friendly style.',
        commonMistake:
          'The biggest mistake is giving examples that do not match the output you want. If your examples are too long, too short, too formal, or too random, the AI will copy the wrong pattern.',
        practice:
          'Choose one type of content you create often, such as captions, emails, blog intros, or product descriptions. Write two strong examples yourself. Then ask AI to create five more in the same style. Compare the results and refine your examples if needed.',
        takeaway:
          'Few-shot prompting teaches AI through examples. The better your examples, the better the output.',
      },
      {
        title: 'Chain-of-thought style prompting',
        time: '19 min',
        intro:
          'Chain-of-thought style prompting means asking the AI to approach a complex task step by step instead of jumping straight to the final answer. This helps make the output more structured, logical, and easier to improve.',
        explanation: [
          'When a task is simple, a direct prompt may be enough. But when the task is complex, asking for everything at once often creates weak results. For example, “create a business strategy” is too broad. The AI may give a shallow list because it is trying to solve everything in one response.',
          'A better approach is to break the thinking process into clear stages. You can ask the AI to first define the goal, then identify the audience, then suggest options, then compare those options, and finally create an action plan.',
          'This does not mean you need hidden or complicated reasoning. For normal learning and work, you can simply ask the AI to explain its approach, break the task into steps, or show a structured summary of how it reached the answer.',
          'This technique is useful for planning, studying, writing, research, business decisions, content strategy, product ideas, coding structure, and problem solving.',
          'The value is that you can see the structure of the response. If one step is weak, you can fix that step instead of rewriting the whole answer.',
          'For example, if the AI creates a content strategy and the audience section is weak, you can say, “Improve only the audience section with more specific beginner segments.” This gives you more control.',
        ],
        weakPrompt: 'Create a marketing plan.',
        betterPrompt:
          'Create a marketing plan step by step. First define the target audience, then explain the main offer, then suggest content pillars, then create a 7-day action plan. Keep each step practical and beginner-friendly.',
        commonMistake:
          'The common mistake is asking for a complete complex answer in one sentence. The AI then gives a broad answer that looks organized but lacks depth.',
        practice:
          'Take one complex task, such as creating a blog strategy, study plan, product idea, or social media plan. Break it into 4–5 steps and ask the AI to complete one step at a time.',
        takeaway:
          'Step-by-step prompting gives you more control over complex tasks and makes weak sections easier to improve.',
      },
      {
        title: 'Prompt templates and variables',
        time: '18 min',
        intro:
          'Prompt templates are reusable prompt structures. Instead of writing a new prompt from scratch every time, you create a template with placeholders that can be changed for different situations.',
        explanation: [
          'A prompt template usually includes variables such as [topic], [audience], [tone], [platform], [format], [goal], or [word count]. These placeholders make the prompt flexible.',
          'For example, instead of writing a new blog prompt every time, you can create one reusable template: “Act as a beginner-friendly writer. Write a blog introduction about [topic] for [audience]. Use a [tone] tone and keep it under [word count].”',
          'Templates are useful because they save time and improve consistency. If a prompt works well once, you should not lose it. You should turn it into a reusable structure.',
          'This is especially helpful for people who create content, emails, product descriptions, study notes, business reports, customer replies, or social posts regularly.',
          'A good template should be clear but not too rigid. If it has too many placeholders, it becomes difficult to use. If it has too few, it may not be flexible enough.',
          'The best templates are built from prompts you already tested. Do not create templates only in theory. Use real prompts, check the output, improve them, and then save the final version.',
          'Over time, a template library becomes a serious productivity tool. It lets you work faster while keeping quality consistent.',
        ],
        weakPrompt: 'Write a blog intro.',
        betterPrompt:
          'Act as a beginner-friendly blog writer. Write a [tone] introduction about [topic] for [audience]. Keep it under [word count], avoid hype, and end with a smooth transition into the main article.',
        commonMistake:
          'Many people create good prompts once but never save them as templates. Later, they waste time trying to recreate the same quality from memory.',
        practice:
          'Create three reusable prompt templates: one for writing, one for research, and one for social media. Add placeholders like [topic], [audience], [tone], and [format].',
        takeaway:
          'Prompt templates turn good prompts into repeatable systems.',
      },
      {
        title: 'Role-based prompting in depth',
        time: '19 min',
        intro:
          'Role-based prompting means telling the AI what kind of expert, assistant, or perspective it should use when answering. In advanced prompting, the role should be specific, not generic.',
        explanation: [
          'A basic role prompt might say, “Act as an expert.” This is better than nothing, but it is still too broad. What kind of expert? Expert in what field? For what audience? With what goal?',
          'A stronger role is more specific: “Act as a beginner-friendly AI education coach who explains prompt engineering in simple language.” This gives the AI much more direction.',
          'The role affects tone, depth, vocabulary, examples, and priorities. A teacher explains differently from a copywriter. A researcher answers differently from a marketer. A developer thinks differently from a student tutor.',
          'Role-based prompting is powerful when combined with task and context. The role tells the AI who to be. The task tells it what to do. The context tells it what situation to consider.',
          'For professional workflows, you can create role prompts for different jobs: editor, strategist, customer support assistant, SEO writer, product researcher, coding mentor, study tutor, or business analyst.',
          'You should also avoid overloading the role. If you say “Act as a teacher, lawyer, marketer, developer, psychologist, and CEO,” the AI may become unfocused. Choose the role that best matches the task.',
          'A strong role is not about sounding fancy. It is about making the AI’s behavior more useful for the result you want.',
        ],
        weakPrompt: 'Act as an expert and help me write this.',
        betterPrompt:
          'Act as a beginner-friendly AI writing coach. Help me improve this paragraph for clarity, simple language, and better flow. Explain the changes before rewriting.',
        commonMistake:
          'The common mistake is using vague roles like “expert” or adding too many roles at once. A focused role works better.',
        practice:
          'Write five specific role prompts for real use cases: one for writing, one for studying, one for business, one for research, and one for content creation.',
        takeaway:
          'A specific role gives the AI a clearer perspective and produces more focused answers.',
      },
    ],
  },
    {
    title: 'System Prompts and Custom AI',
    time: '75 minutes',
    lessons: [
      {
        title: 'Writing system prompts from scratch',
        time: '19 min',
        intro:
          'A system prompt is the background instruction that defines how an AI assistant should behave before the user even asks a question. It sets the role, tone, rules, boundaries, and response style.',
        explanation: [
          'Normal prompts are the messages users type during a conversation. System prompts work at a deeper level. They guide the assistant’s behavior across the whole interaction.',
          'For example, if you are building a beginner-friendly prompt coach, your system prompt can tell the AI to use simple language, avoid jargon, give examples, and ask clarifying questions when the user is vague.',
          'A strong system prompt usually includes five parts: role, goal, tone, rules, and format. The role tells the AI what it is. The goal tells it what it helps with. The tone controls how it sounds. The rules define what it should always do or avoid. The format explains how answers should be structured.',
          'The mistake many beginners make is writing system prompts that are either too short or too overloaded. “Be helpful” is too vague. But adding twenty conflicting rules can also confuse the assistant.',
          'A good system prompt should feel like a clear job description. It should be specific enough to guide behavior, but simple enough to follow consistently.',
          'When writing a system prompt, focus on the real user experience. Ask yourself: who is this assistant helping, what problem does it solve, what tone should it use, and what should it avoid?',
        ],
        weakPrompt: 'Be helpful and answer questions.',
        betterPrompt:
          'You are a beginner-friendly AI prompt coach. Help non-technical users write better prompts for ChatGPT, Claude, Gemini, and other AI tools. Use simple language, avoid jargon, give practical examples, and keep answers structured with clear steps.',
        commonMistake:
          'The common mistake is writing vague system prompts that do not define the assistant’s role, audience, tone, or rules.',
        practice:
          'Write a system prompt for an AI assistant that helps students study without cheating. Include role, goal, tone, rules, and response format.',
        takeaway:
          'A system prompt turns a general AI assistant into a focused, consistent helper.',
      },
      {
        title: 'Building custom GPTs',
        time: '18 min',
        intro:
          'A custom GPT is an AI assistant configured for a specific purpose. Instead of using AI as a general chatbot, you shape it to perform a clear role for a specific audience or workflow.',
        explanation: [
          'Custom GPTs can be built for many use cases: writing assistants, study tutors, customer support bots, prompt coaches, business planners, content idea generators, or internal company helpers.',
          'The most important part of building a custom GPT is focus. A custom assistant should not try to do everything. If it has too many unrelated jobs, the output becomes less reliable.',
          'Start with a clear purpose. For example: “This assistant helps beginners create better ChatGPT prompts.” That is stronger than “This assistant helps with AI.”',
          'Next, define the target user. Is it for students, business owners, creators, developers, teachers, or complete beginners? The target user affects the tone and depth of answers.',
          'Then define behavior rules. Should the assistant ask clarifying questions? Should it avoid jargon? Should it give templates? Should it keep answers short? These rules make the assistant consistent.',
          'Finally, test the custom GPT with real user questions. If it gives long answers, add a brevity rule. If it gives generic answers, add examples. If it misunderstands users, add clarifying-question rules.',
        ],
        weakPrompt: 'Make a helpful AI assistant.',
        betterPrompt:
          'Create a custom GPT that helps beginners write better AI prompts. It should explain concepts simply, ask one clarifying question when the user request is vague, provide examples, and avoid technical jargon unless the user asks for it.',
        commonMistake:
          'The biggest mistake is building a custom GPT without a specific user and use case.',
        practice:
          'Design one custom GPT idea. Write its purpose, target audience, tone, 5 behavior rules, and 3 example user questions it should handle well.',
        takeaway:
          'A useful custom GPT is focused, tested, and built around one clear job.',
      },
      {
        title: 'API basics for non-developers',
        time: '19 min',
        intro:
          'An API is a way for one app to communicate with another app. In AI, APIs allow websites, apps, and tools to send prompts to an AI model and receive responses back.',
        explanation: [
          'You do not need to be a developer to understand the basic idea. Imagine your website has a chatbot. A visitor types a question. Your website sends that question to the AI through an API. The AI creates a response. Your website shows that response to the visitor.',
          'This is how many AI-powered tools work behind the scenes. Writing apps, support bots, summarizers, productivity tools, and automation platforms often use AI APIs.',
          'Understanding APIs helps you think beyond simple chat. Instead of only asking AI questions manually, you can imagine AI features inside your own website or app.',
          'For example, a prompt library website could use an API to generate custom prompts. A student app could explain notes. A business tool could summarize customer feedback.',
          'The important parts are input, instruction, model, and output. The input is what the user sends. The instruction tells the AI how to behave. The model generates the answer. The output is what the app displays.',
          'Even if you do not code yet, understanding this flow helps you communicate better with developers and plan AI products more clearly.',
        ],
        weakPrompt: 'Explain APIs.',
        betterPrompt:
          'Explain AI APIs to a non-developer using a simple example of a website chatbot. Show what the user sends, what the AI receives, and what the website displays.',
        commonMistake:
          'Many non-developers think APIs are too technical to understand, so they ignore the basic product logic behind AI apps.',
        practice:
          'Draw or write a simple flow for an AI chatbot: user message → website → AI API → AI response → website display.',
        takeaway:
          'APIs are the bridge that lets AI become part of real websites, apps, and workflows.',
      },
      {
        title: 'Testing and refining system prompts',
        time: '19 min',
        intro:
          'A system prompt is not finished after the first draft. It needs testing, feedback, and refinement. The first version usually shows you what needs to be improved.',
        explanation: [
          'Testing means asking the assistant realistic questions and checking whether it behaves the way you intended. Does it follow the tone? Does it answer clearly? Does it ask questions when needed? Does it avoid what you told it to avoid?',
          'You should test easy questions, vague questions, difficult questions, and edge cases. A good assistant should handle normal requests well and respond safely when the request is unclear or outside its purpose.',
          'If the assistant gives answers that are too long, add a rule like “keep answers concise unless the user asks for detail.” If it gives generic answers, add examples of strong responses. If it misses important steps, add a required checklist.',
          'Refining a system prompt is similar to editing a document. You do not rewrite everything every time. You identify the weak behavior and adjust the instruction that caused it.',
          'Good testing also includes example conversations. You can write sample user messages and ideal assistant replies. These examples help guide the assistant toward the behavior you want.',
          'Over time, your system prompt becomes stronger because it is based on real failures, not guesses.',
        ],
        weakPrompt: 'Always answer well.',
        betterPrompt:
          'If the user asks a vague question, ask one clarifying question before giving the final answer. Keep responses beginner-friendly, practical, and structured in short sections.',
        commonMistake:
          'The common mistake is never testing the system prompt with real user questions before using it publicly.',
        practice:
          'Create 10 test questions for your system prompt: 3 easy, 3 vague, 2 advanced, and 2 off-topic. Then adjust your system prompt based on weak responses.',
        takeaway:
          'System prompts improve through testing. Real user questions reveal what your instructions are missing.',
      },
    ],
  },
  {
  title: 'Multi-Step Workflows',
  time: '75 minutes',
  lessons: [
    {
      title: 'Introduction to prompt chaining',
      time: '19 min',
      intro:
        'Prompt chaining is the process of breaking one large task into multiple smaller prompts. Instead of asking AI to complete everything at once, you guide it step by step.',
      explanation: [
        'This is one of the most powerful advanced prompt techniques because large prompts often produce shallow or messy results. When the AI is asked to do too much at once, it usually sacrifices depth for speed.',
        'For example, if you ask AI to “create a complete business plan,” it may generate a generic plan. But if you break it into steps like market research, audience analysis, offer creation, marketing strategy, and action plan, the results become much stronger.',
        'Prompt chaining works because each step has one focused goal. This reduces confusion and improves quality.',
        'A good chain usually has an input, transformation, and output. One prompt creates something, the next improves or expands it, and the next turns it into a final product.',
        'For example: first generate blog ideas, then select the best idea, then create an outline, then write sections one by one, then edit the final draft.',
        'This workflow creates better content than one giant “write a blog” prompt because each stage has more attention and structure.',
      ],
      weakPrompt: 'Write me a full blog post about AI.',
      betterPrompt:
        'Step 1: Give me 10 AI blog ideas for beginners.\nStep 2: Help me pick the best one.\nStep 3: Create a detailed outline.\nStep 4: Write the introduction.\nStep 5: Write each section separately.',
      commonMistake:
        'The common mistake is trying to complete a large project in one single prompt.',
      practice:
        'Take one project you want to complete (blog, product plan, study guide, or content strategy) and break it into at least 5 smaller prompts.',
      takeaway:
        'Prompt chaining improves depth, structure, and quality by dividing complex tasks into smaller steps.',
    },
    {
      title: 'Building a research workflow',
      time: '18 min',
      intro:
        'AI can be an excellent research assistant when used correctly. A structured research workflow helps you collect, organize, and refine information faster.',
      explanation: [
        'Many people ask AI to “research this topic” and accept the answer immediately. This is risky because AI can miss important details or provide incomplete information.',
        'A better approach is to create a research workflow. First define the topic. Then generate research questions. Then collect summaries. Then identify missing points. Then verify key claims.',
        'This turns AI into an organized thinking partner instead of a replacement for real research.',
        'For example, if you are researching prompt engineering, your workflow might start with “What are the main concepts?”, then “What are advanced techniques?”, then “What are common mistakes?”, then “Summarize everything in beginner-friendly language.”',
        'Each step improves your understanding and builds a stronger final result.',
        'The most important rule is verification. AI is useful for structure and speed, but important facts should still be checked.',
      ],
      weakPrompt: 'Research prompt engineering for me.',
      betterPrompt:
        'Step 1: List the main topics in prompt engineering.\nStep 2: Explain each topic simply.\nStep 3: Highlight advanced techniques.\nStep 4: Show common beginner mistakes.\nStep 5: Summarize the most important lessons.',
      commonMistake:
        'Using AI as the final source instead of using it as a structured research assistant.',
      practice:
        'Choose a topic you want to learn. Create a 5-step AI research workflow for it.',
      takeaway:
        'AI research works best when it is structured into clear stages instead of one broad request.',
    },
    {
      title: 'Building a content creation pipeline',
      time: '19 min',
      intro:
        'A content creation pipeline is a repeatable workflow that takes one idea and turns it into multiple pieces of content.',
      explanation: [
        'Instead of randomly asking AI for content every day, you build a system. This saves time and increases consistency.',
        'A strong content pipeline usually starts with idea generation, then hook creation, then outline creation, then drafting, editing, and repurposing.',
        'For example, one blog post can become an Instagram carousel, X thread, email newsletter, and YouTube script.',
        'AI is powerful in pipelines because each step can feed the next one.',
        'For example: generate 10 blog ideas → choose 1 → write outline → write blog → summarize into carousel → convert into captions → turn into short video script.',
        'This allows creators to produce more content without starting from zero every time.',
        'The goal is not just speed. The goal is consistency, quality, and reuse.',
      ],
      weakPrompt: 'Make content for my page.',
      betterPrompt:
        'Generate 10 content ideas for beginner AI learners. Then create 5 hooks for the best one. Then create an outline. Then write the blog. Then turn it into 3 Instagram carousel ideas and 2 X posts.',
      commonMistake:
        'Creating single-use content instead of building a reusable pipeline.',
      practice:
        'Take one content idea and turn it into at least 4 different content formats using AI.',
      takeaway:
        'A content pipeline turns one idea into multiple assets and saves time.',
    },
    {
      title: 'Automating repetitive tasks',
      time: '19 min',
      intro:
        'One of the biggest benefits of AI is automation. Repetitive thinking and writing tasks can often be turned into reusable prompts or workflows.',
      explanation: [
        'Most people use AI manually every time they need something. Advanced users look for patterns in their work and automate them.',
        'For example: replying to emails, summarizing meetings, writing captions, organizing notes, drafting reports, or planning content.',
        'The first step is identifying repetition. Ask yourself: what do I do every day or every week that follows the same pattern?',
        'Once you find those tasks, build a reusable prompt template or workflow for them.',
        'For example, if you write social captions daily, you can create one prompt template that only changes the topic.',
        'This saves time and keeps quality more consistent.',
        'Automation is not about replacing your thinking. It is about reducing repeated effort so you can focus on higher-level work.',
      ],
      weakPrompt: 'Help me save time.',
      betterPrompt:
        'Identify 10 repetitive tasks in my workflow that could be automated with AI. For each one, suggest a reusable prompt template.',
      commonMistake:
        'Trying to automate unclear or inconsistent tasks before defining them properly.',
      practice:
        'Write down 5 repetitive tasks you do every week. Build one reusable AI prompt for each.',
      takeaway:
        'Automation starts by identifying repeated tasks and turning them into repeatable prompts.',
    },
  ],
},
{
  title: 'Quality Control and Iteration',
  time: '75 minutes',
  lessons: [
    {
      title: 'How to evaluate prompt quality',
      time: '19 min',
      intro:
        'A good prompt is not judged by how impressive it sounds. It is judged by the quality of the output it produces. Advanced users evaluate prompts carefully instead of assuming the first result is good enough.',
      explanation: [
        'Prompt quality can be measured using clarity, usefulness, accuracy, structure, and relevance. If the output looks polished but does not solve the actual problem, the prompt has failed.',
        'For example, a beautifully written blog introduction is not useful if it targets the wrong audience. A detailed summary is not useful if it misses the main point.',
        'This is why advanced users build a habit of reviewing outputs critically. They ask: Did this answer the real question? Was it easy to understand? Was it complete? Did it follow my requested format?',
        'Evaluation is what separates casual AI users from professional AI users. Casual users accept the first result. Advanced users inspect, improve, and optimize.',
        'A useful evaluation framework is simple: clarity, correctness, usefulness, and structure. If one of these is weak, the prompt can often be improved.',
        'Over time, this process helps you build stronger prompts because you start seeing patterns in what works and what fails.',
      ],
      weakPrompt: 'Is this response good?',
      betterPrompt:
        'Evaluate this response based on clarity, usefulness, accuracy, structure, and beginner-friendliness. Explain what should be improved.',
      commonMistake:
        'The common mistake is accepting polished answers without checking whether they actually solve the problem.',
      practice:
        'Take 3 AI responses you generated recently. Evaluate them using clarity, accuracy, usefulness, and structure. Write down what could be improved.',
      takeaway:
        'Prompt quality should be measured by usefulness and clarity, not just style.',
    },
    {
      title: 'Common failure modes and fixes',
      time: '19 min',
      intro:
        'AI responses fail in predictable ways. The more you use AI, the more you will notice repeating mistakes. Learning to identify and fix them quickly is a major advanced skill.',
      explanation: [
        'One common failure is vagueness. This usually means the prompt did not include enough context or detail.',
        'Another failure is length. Sometimes AI writes too much or too little. This can often be fixed by setting limits like word count or number of bullet points.',
        'Tone is another common problem. If the response sounds too robotic, too formal, or too casual, you need to define tone more clearly.',
        'Structure problems also happen often. If the answer feels messy, ask for sections, bullet points, tables, or steps.',
        'Inaccuracy is another issue. If the AI makes claims without evidence, ask it to explain uncertainty, cite sources if available, or identify points that need verification.',
        'The key is not to say “try again.” Instead, tell the AI exactly what failed and what should change.',
      ],
      weakPrompt: 'That is bad. Try again.',
      betterPrompt:
        'The response is too vague. Rewrite it with 3 practical examples, shorter paragraphs, and a beginner-friendly tone.',
      commonMistake:
        'Many users ask AI to retry without explaining what went wrong.',
      practice:
        'Take one weak AI answer and identify the failure type: vague, too long, off-tone, badly structured, or inaccurate. Then write a correction prompt.',
      takeaway:
        'Fixing AI output starts by identifying the exact failure, not by starting over blindly.',
    },
    {
      title: 'A/B testing your prompts',
      time: '18 min',
      intro:
        'A/B testing means comparing two versions of a prompt to see which one performs better. This is one of the best ways to improve prompts based on results instead of guesses.',
      explanation: [
        'Instead of assuming one prompt is best, you test multiple versions. For example, one version may use a role while another does not. One may use examples while another only uses instructions.',
        'By comparing outputs, you can see what actually improves quality.',
        'This is especially useful in content creation, business, customer support, education, and repeated workflows.',
        'The important rule is to change only one thing at a time. If you change role, tone, format, and examples all at once, you will not know which change improved the result.',
        'A/B testing helps build stronger templates over time because you keep what works and remove what does not.',
        'Professional teams often do this with prompts for emails, ads, content, and support systems.',
      ],
      weakPrompt: 'Use this prompt forever.',
      betterPrompt:
        'Create two versions of this prompt: one with role-based instructions and one without. Compare which produces a clearer and more useful output.',
      commonMistake:
        'Changing too many variables at once makes testing confusing.',
      practice:
        'Take one prompt you use often. Create two versions with one small difference. Compare the outputs and decide which is stronger.',
      takeaway:
        'A/B testing improves prompts through evidence instead of assumptions.',
    },
    {
      title: 'Building a team prompt library',
      time: '19 min',
      intro:
        'A team prompt library is a shared collection of tested prompts used by a group. It helps teams save time, maintain quality, and create consistency.',
      explanation: [
        'Instead of every team member writing random prompts from scratch, a shared library gives everyone access to proven templates.',
        'This is useful for content teams, support teams, marketing teams, product teams, and education teams.',
        'A strong prompt library should include categories, titles, use cases, prompt text, example outputs, and notes about when to use each prompt.',
        'For example, a marketing team may have prompts for writing emails, ad copy, social captions, campaign ideas, and competitor research.',
        'A support team may have prompts for customer replies, complaint handling, FAQ creation, and issue summaries.',
        'The value is consistency. When everyone uses tested prompts, the output quality becomes more reliable.',
        'A team prompt library also makes onboarding easier because new members can learn from proven prompts immediately.',
      ],
      weakPrompt: 'Everyone can save prompts wherever they want.',
      betterPrompt:
        'Create a shared prompt library with categories, templates, use cases, example outputs, and quality notes so the whole team can reuse proven prompts.',
      commonMistake:
        'Allowing prompts to stay scattered across documents, chats, and personal notes without organization.',
      practice:
        'Create a simple team prompt library structure with at least 5 categories and 3 prompts in each category.',
      takeaway:
        'A shared prompt library turns prompting into an organized, scalable team system.',
    },
  ],
},
]

function AdvancedPromptTechniques() {
  return (
    <div className="space-y-8">
        {advancedPromptTechniquesModules.map((module, moduleIndex) => (
        <div key={module.title} className="glass-card p-6">
          <div className="mb-6">
            <span className="text-xs font-mono text-purple-400">
              Module {moduleIndex + 1} • {module.time} •{' '}
              {module.lessons.length} lessons
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

                {lesson.explanation.map((paragraph, i) => (
                  <p key={i} className="text-slate-400 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-4">
                  <p className="text-sm text-purple-300 font-semibold mb-2">
                    Weak Prompt
                  </p>
                  <p className="text-slate-300 whitespace-pre-line">
                    {lesson.weakPrompt}
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-4">
                  <p className="text-sm text-green-300 font-semibold mb-2">
                    Better Prompt
                  </p>
                  <p className="text-slate-300 whitespace-pre-line">
                    {lesson.betterPrompt}
                  </p>
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

export default AdvancedPromptTechniques