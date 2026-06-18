import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export const aiPromptsForStudentsModules = [
  {
    title: 'Ethical AI Use in Academics',
    time: '1 hour',
    lessons: [
      {
        title: 'The Right Way to Use AI as a Student',
        time: '20 min',
        intro:
          'AI can be a powerful learning assistant for students, but it must be used responsibly. The goal is not to let AI replace your thinking. The goal is to use AI to understand topics better, organize your work, improve your writing, and study more effectively.',
        explanation: [
          'Many students think AI is only useful for writing answers quickly. This is the wrong mindset. If you use AI only to finish work without understanding it, you do not build real knowledge.',
          'The right way to use AI is to treat it like a tutor, study partner, editor, and organizer. It can explain difficult topics, simplify notes, create practice questions, and help you review your own work.',
          'For example, instead of asking AI to write your full essay, you can ask it to explain the topic, suggest an outline, review your draft, or help improve clarity.',
          'This keeps you involved in the learning process. You are still thinking, writing, checking, and improving.',
          'A weak student prompt is: “Do my assignment.” This is not a good learning habit and may also violate academic rules.',
          'A stronger prompt is: “Explain this assignment topic to me in simple words and help me create an outline so I can write it myself.”',
          'This kind of prompt supports learning instead of replacing effort.',
          'Students can use AI for brainstorming, summarizing, studying, planning, editing, and exam preparation.',
          'However, every student should understand their school or university rules. Some teachers allow AI for support, while others may restrict it.',
          'The safest approach is to use AI for learning assistance, not for dishonest submission.',
          'AI can make mistakes, so students should not blindly trust every answer. Always verify important facts using textbooks, lecture notes, or trusted academic sources.',
          'The best student workflow is: ask AI, understand the answer, verify it, rewrite in your own words, and then submit your own work.',
          'Used properly, AI can help you become a better learner. Used carelessly, it can weaken your skills.',
        ],
        weakPrompt: 'Do my assignment.',
        betterPrompt:
          'Explain this assignment topic in simple words, help me understand the key points, and suggest an outline I can use to write my own answer.',
        commonMistake:
          'The biggest mistake is using AI to replace your learning instead of supporting it. This can lead to weak understanding and academic problems.',
        practice:
          'Take one assignment topic. Ask AI to explain it, then ask for an outline, then write your own answer without copying the AI response.',
        takeaway:
          'AI should help students learn better, not avoid learning.',
      },

      {
        title: 'Academic Integrity Guidelines',
        time: '20 min',
        intro:
          'Academic integrity means being honest in your learning and submissions. When using AI, students must understand the difference between getting help and submitting work that is not truly their own.',
        explanation: [
          'AI tools are becoming common in education, but that does not mean every use is acceptable. Each school, college, or university may have different rules.',
          'Some teachers allow AI for brainstorming or grammar improvement. Others may not allow it for graded work. This is why students must check their course policy.',
          'Academic integrity matters because education is not just about finishing assignments. It is about building knowledge, discipline, and independent thinking.',
          'A dishonest use of AI would be asking it to write a full essay and submitting it as your own work.',
          'A responsible use would be asking AI to explain a concept, create a study plan, or give feedback on a paragraph you wrote.',
          'The difference is involvement. If you are still thinking, writing, reviewing, and learning, AI is acting as support.',
          'If AI is doing the thinking and writing for you, then you are depending on it too much.',
          'Students should also avoid copying AI text directly. AI-generated writing may sound generic, may include false information, and may not match your real voice.',
          'Another issue is citation. If your school requires disclosure of AI use, you should follow that rule honestly.',
          'Academic integrity also means checking facts. AI can produce confident answers that are wrong. This is especially risky in research, history, science, law, and academic writing.',
          'A safe student workflow is: use AI for explanation, compare with class material, write your own response, and review before submission.',
          'AI can support your academic journey, but your final work should reflect your own understanding.',
        ],
        weakPrompt: 'Write my essay so I can submit it.',
        betterPrompt:
          'Help me understand this essay topic, suggest a structure, and give me questions I should think about before writing my own essay.',
        commonMistake:
          'Many students treat AI output as ready-to-submit work instead of using it as learning support.',
        practice:
          'Choose one school task and list three ethical ways AI can help you complete it without replacing your own work.',
        takeaway:
          'Academic integrity means using AI as support while keeping your own thinking and honesty at the center.',
      },

      {
        title: 'AI as a Tutor, Not a Ghostwriter',
        time: '20 min',
        intro:
          'One of the best ways students can use AI is as a tutor. A tutor helps you understand, practice, and improve. A ghostwriter does the work for you. Students should use AI as a tutor, not as someone who completes assignments on their behalf.',
        explanation: [
          'A tutor explains difficult ideas. A ghostwriter writes the answer for you. This difference is important.',
          'When AI acts as a tutor, it helps you learn step by step. It can explain concepts, ask questions, give examples, and test your understanding.',
          'For example, if you do not understand photosynthesis, you can ask AI to explain it in simple words, then ask for an example, then ask for quiz questions.',
          'This helps you actively learn the topic instead of copying an answer.',
          'A weak prompt is: “Write my biology answer.”',
          'A better prompt is: “Teach me this biology concept step by step and ask me 5 practice questions after the explanation.”',
          'This turns AI into a learning partner.',
          'You can also ask AI to explain topics at different levels. For example: beginner level, high school level, university level, or exam revision level.',
          'This is useful because sometimes textbooks are too difficult, while AI can simplify the explanation.',
          'AI can also help identify gaps in your understanding. You can say: “Ask me questions about this topic and tell me where I am weak.”',
          'This is much better than passively reading notes.',
          'A tutor-style AI workflow can be: explain the topic, give an example, test me, correct me, and summarize what I should review.',
          'This approach improves real learning and exam preparation.',
        ],
        weakPrompt: 'Write my answer for me.',
        betterPrompt:
          'Act as a patient tutor. Teach me this topic step by step, give examples, then ask me practice questions to check my understanding.',
        commonMistake:
          'The mistake is using AI as a shortcut instead of using it as a tutor that helps build understanding.',
        practice:
          'Pick one difficult topic. Ask AI to explain it, give an example, quiz you, and then correct your answers.',
        takeaway:
          'AI becomes more valuable when it helps you understand instead of doing the work for you.',
      },
    ],
  },
    {
    title: 'Study and Research',
    time: '1.5 hours',
    lessons: [
      {
        title: 'Study Planning with AI',
        time: '20 min',
        intro:
          'Students often struggle not because they are incapable, but because they do not have a clear study plan. AI can help create realistic study schedules, break large subjects into smaller tasks, and make learning feel more organized.',
        explanation: [
          'A study plan gives structure to your learning. Without a plan, students often study randomly, leave work until the last minute, or focus too much on easy topics while ignoring difficult ones.',

          'AI can help you organize your study time based on your subjects, deadlines, weak areas, and available hours.',

          'A weak prompt is: “Make me a study plan.” This is too broad because AI does not know your subjects, exam date, daily schedule, or difficulty level.',

          'A better prompt is: “Create a 7-day study plan for my biology exam. I have 2 hours per day, and I struggle most with cell structure and genetics.”',

          'This gives the AI useful context. It can now create a plan that actually fits your situation.',

          'AI can also help you break large chapters into smaller sections. This is useful because big topics often feel overwhelming.',

          'Instead of studying everything at once, you can ask AI to divide a chapter into daily tasks, revision blocks, and practice sessions.',

          'AI can also help with active recall. Instead of just rereading notes, ask AI to create questions that test your understanding.',

          'A strong study workflow is: plan the topic, study one section, answer practice questions, review mistakes, and revise weak areas.',

          'This makes studying more active and less passive.',

          'Students should remember that AI plans are starting points. You can adjust them based on your real energy, schedule, and progress.',

          'The goal is not to follow a perfect plan. The goal is to build consistency and reduce confusion.',
        ],
        weakPrompt: 'Make me a study plan.',
        betterPrompt:
          'Create a 7-day study plan for my biology exam. I have 2 hours per day, and I struggle most with cell structure and genetics. Include revision and practice questions.',
        commonMistake:
          'The biggest mistake is asking for a study plan without giving subject, deadline, available time, or weak areas.',
        practice:
          'Choose one subject and ask AI to create a 7-day study plan. Then adjust the plan based on your real schedule.',
        takeaway:
          'AI can make studying easier by turning unclear goals into a structured plan.',
      },

      {
        title: 'Research and Note-Taking Prompts',
        time: '20 min',
        intro:
          'Research and note-taking are important academic skills. AI can help students understand sources, organize notes, summarize long material, and identify key ideas. But students must still verify information and use trusted academic sources.',
        explanation: [
          'Many students struggle with research because they do not know what information matters. They may read long articles, copy too much text, or collect notes without structure.',

          'AI can help organize research into clearer categories. It can summarize, compare ideas, explain difficult sections, and turn messy notes into structured study material.',

          'A weak prompt is: “Research this topic.” This is too broad and may produce generic or unreliable information.',

          'A better prompt is: “Explain the key arguments about climate change adaptation for a university-level essay. Organize the answer into causes, effects, examples, and possible solutions.”',

          'This gives the AI structure and academic direction.',

          'AI can also help with note-taking. If you paste lecture notes, you can ask AI to organize them into bullet points, key terms, definitions, and revision questions.',

          'A useful prompt is: “Turn these lecture notes into organized study notes with headings, bullet points, key terms, and 5 practice questions.”',

          'This makes notes easier to review later.',

          'AI can also compare sources. For example, you can ask: “Compare these two article summaries and identify where they agree and disagree.”',

          'This helps students think critically instead of just collecting information.',

          'However, AI should not be your only research source. It can make mistakes or provide outdated information.',

          'Always verify important claims using textbooks, academic journals, teacher notes, or trusted websites.',

          'The best research workflow is: use AI to organize ideas, verify with trusted sources, then write in your own words.',
        ],
        weakPrompt: 'Research this topic.',
        betterPrompt:
          'Explain the key arguments about this topic for a student essay. Organize the answer into main ideas, examples, counterpoints, and questions for further research.',
        commonMistake:
          'The biggest mistake is trusting AI research without checking reliable academic sources.',
        practice:
          'Take one topic and ask AI to create structured notes, key terms, and practice questions. Then verify the facts with your class material.',
        takeaway:
          'AI can support research and note-taking, but academic accuracy still depends on verification.',
      },

      {
        title: 'Essay Outlines and Writing Support',
        time: '20 min',
        intro:
          'Essay writing can feel difficult because students often do not know how to organize ideas. AI can help with brainstorming, outlining, thesis development, and editing, but students should write the final essay themselves.',
        explanation: [
          'A good essay needs structure. It usually includes an introduction, thesis statement, body paragraphs, evidence, analysis, and conclusion.',

          'Many students get stuck before writing because they do not know where to begin. AI can help by creating outlines and asking useful planning questions.',

          'A weak prompt is: “Write my essay.” This is not a good learning method and may break academic rules.',

          'A better prompt is: “Help me create an essay outline about the impact of social media on student productivity. Include introduction, thesis idea, three body points, and conclusion.”',

          'This supports your writing without replacing it.',

          'AI can also help improve thesis statements. You can ask: “Give me 3 possible thesis statements for this essay topic and explain which one is strongest.”',

          'This helps you understand how arguments are built.',

          'AI can also help with paragraph planning. For example: “Help me plan one body paragraph with topic sentence, evidence idea, explanation, and transition.”',

          'This teaches structure instead of just producing text.',

          'After writing your own draft, AI can help edit it. You can ask it to improve clarity, grammar, flow, or academic tone.',

          'A useful editing prompt is: “Review my paragraph for clarity and structure. Do not rewrite everything. Give suggestions I can apply myself.”',

          'This keeps you in control of your writing.',

          'Students should avoid copying AI-generated essays directly. Your final work should reflect your own thinking and your course requirements.',

          'The best essay workflow is: understand topic, brainstorm, create outline, write draft, review, edit, and submit your own work.',
        ],
        weakPrompt: 'Write my essay.',
        betterPrompt:
          'Help me create an essay outline about this topic. Include a thesis idea, three main points, possible evidence, and questions I should answer while writing.',
        commonMistake:
          'The biggest mistake is using AI to write the full essay instead of using it to plan, understand, and improve your own writing.',
        practice:
          'Choose one essay topic. Ask AI for an outline, then write your own introduction and ask AI for feedback on clarity.',
        takeaway:
          'AI is useful for essay planning and editing, but the final writing should be your own.',
      },

      {
        title: 'Exam Preparation and Practice Questions',
        time: '30 min',
        intro:
          'Exam preparation becomes easier when students practice actively instead of only rereading notes. AI can create quizzes, flashcards, mock exams, explanations, and revision plans to help students prepare more effectively.',
        explanation: [
          'Many students study by reading notes repeatedly. This feels productive, but it is often passive. Active recall is usually more effective because it forces your brain to retrieve information.',

          'AI can help create active recall practice. You can ask it to make questions from your notes, quiz you, explain mistakes, and create revision summaries.',

          'A weak prompt is: “Help me study.” This does not tell AI what subject, level, format, or exam type you need.',

          'A better prompt is: “Create 15 multiple-choice questions from these biology notes. Show the correct answer and explain why it is correct.”',

          'This creates focused exam practice.',

          'AI can also act like an examiner. You can ask it to test you one question at a time and wait for your answer before giving feedback.',

          'This makes studying interactive.',

          'A useful prompt is: “Quiz me on this chapter one question at a time. After each answer, tell me if I am correct and explain the concept.”',

          'AI can also create flashcards. Flashcards are useful for definitions, formulas, dates, vocabulary, and key concepts.',

          'Prompt example: “Turn these notes into 20 flashcards with question on one side and answer on the other.”',

          'AI can also help with weak areas. After a quiz, you can ask: “Based on my wrong answers, create a revision plan for the topics I need to review.”',

          'This makes your studying more targeted.',

          'For essay-based exams, AI can generate practice prompts and help you plan answers. For problem-solving exams, it can explain steps and create similar practice questions.',

          'The best exam workflow is: summarize notes, create practice questions, answer without looking, check mistakes, revise weak areas, and repeat.',

          'AI makes this workflow faster and easier to personalize.',
        ],
        weakPrompt: 'Help me study.',
        betterPrompt:
          'Create 15 exam-style questions from these notes. Include multiple-choice and short-answer questions, correct answers, and simple explanations.',
        commonMistake:
          'The biggest mistake is only asking AI for summaries instead of using it for active practice and testing.',
        practice:
          'Paste a small section of your notes into AI and ask for 10 quiz questions. Answer them first, then check the explanations.',
        takeaway:
          'AI can make exam preparation more active, personalized, and effective when used for practice questions and feedback.',
      },
    ],
  },
]

function AIPromptsForStudents() {
  return (
    <div className="space-y-8">
      {aiPromptsForStudentsModules.map((module, moduleIndex) => (
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

export default AIPromptsForStudents