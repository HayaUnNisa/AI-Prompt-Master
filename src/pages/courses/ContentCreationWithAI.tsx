import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export const contentCreationWithAIModules = [
  {
    title: 'Content Ideation',
    time: '1.75 hours',
    lessons: [
      {
        title: 'Generating Topic Ideas That Rank',
        time: '26 min',
        intro:
          'Good content starts with a strong topic. AI can help creators generate topic ideas faster, but the goal is not just to create random ideas. The goal is to create ideas that match audience needs, search intent, and platform demand.',
        explanation: [
          'Many creators struggle because they start with vague content ideas. They ask AI for “blog ideas” or “video ideas” without explaining the niche, audience, platform, or goal.',
          'This usually creates generic topics that many other creators have already covered.',
          'A strong topic idea should solve a real problem, answer a clear question, or help the audience make progress.',
          'For example, “AI tools” is too broad. But “How beginners can use AI to plan a week of content in 30 minutes” is more specific and useful.',
          'AI can help you find content angles by asking it to generate ideas based on pain points, beginner mistakes, common questions, trends, or search intent.',
          'Search intent means understanding what the audience actually wants when they search for something.',
          'For example, someone searching “how to use ChatGPT for content” may want examples, templates, workflows, or beginner steps.',
          'A useful prompt should include your niche, audience, platform, content format, and goal.',
          'Instead of asking, “Give me content ideas,” ask: “Act as a content strategist. Generate 25 beginner-friendly blog topics for an AI education website targeting students, freelancers, and small business owners. Focus on practical problems people search for.”',
          'This prompt gives AI direction and creates better ideas.',
          'You can also ask AI to organize ideas by difficulty level, content pillar, search intent, or funnel stage.',
          'For example: awareness topics attract beginners, comparison topics help decision-making, and tutorial topics help practical learning.',
          'AI can also help expand one topic into multiple variations.',
          'A topic like “AI prompts for students” can become blog posts, YouTube videos, Instagram carousels, short reels, and newsletter content.',
          'The best content creators do not only ask for ideas. They ask AI to evaluate ideas.',
          'You can ask: “Rate these topics based on beginner interest, SEO potential, and usefulness.”',
          'This helps you avoid weak topics and focus on the strongest ones.',
          'Another useful method is competitor gap prompting. Ask AI to identify what most content in your niche ignores.',
          'Example: “What beginner questions are usually not answered properly in content about AI prompts?”',
          'This helps you create content with a fresh angle.',
          'Topic generation should always end with selection. Do not publish every idea AI gives you.',
          'Choose ideas that match your brand, audience, and long-term content strategy.',
        ],
        weakPrompt: 'Give me content ideas.',
        betterPrompt:
          'Act as a content strategist. Generate 25 beginner-friendly blog and video topic ideas for an AI education brand targeting students, freelancers, and small business owners. Focus on practical problems, search intent, and useful beginner questions.',
        commonMistake:
          'The biggest mistake is asking for random ideas without defining audience, platform, niche, or content goal.',
        practice:
          'Ask AI for 25 topic ideas in your niche. Then ask it to rank the top 10 by usefulness, beginner interest, and search potential.',
        takeaway:
          'AI can generate strong content ideas when you guide it with audience, intent, platform, and purpose.',
      },

      {
        title: 'Audience Research Prompts',
        time: '26 min',
        intro:
          'Audience research helps creators understand what people care about, what they struggle with, and what type of content they are likely to engage with. AI can help organize audience research into clear content opportunities.',
        explanation: [
          'Content fails when it is created for the creator instead of the audience.',
          'Many beginners create content based on what they personally want to say, not what their audience needs to hear.',
          'Audience research solves this problem.',
          'AI can help you understand audience pain points, goals, fears, objections, knowledge level, and common questions.',
          'A weak prompt is: “Who is my audience?”',
          'This is too broad. AI needs to know your niche, platform, and content goal.',
          'A better prompt is: “Act as an audience researcher. Analyze beginners who want to learn AI prompts. List their problems, goals, fears, common questions, and content topics they would find useful.”',
          'This creates a clearer audience profile.',
          'Audience research is especially useful before creating blogs, videos, emails, course lessons, or social posts.',
          'You can ask AI to create audience personas.',
          'For example: student, freelancer, business owner, beginner creator, or job seeker.',
          'Each persona may need different content.',
          'Students may want study prompts. Freelancers may want productivity prompts. Business owners may want marketing and automation prompts.',
          'AI can also help identify audience objections.',
          'For example, beginners may think AI is too complicated, unsafe, expensive, or only for experts.',
          'When you know objections, you can create content that answers them.',
          'AI can also help translate audience problems into content titles.',
          'Example: problem: “I do not know what to ask AI.” Content idea: “How to Write Better AI Prompts When You Do Not Know Where to Start.”',
          'This is how audience research becomes content strategy.',
          'You can also use AI to analyze comments, reviews, FAQs, or social media replies.',
          'Prompt example: “Analyze these comments and identify repeated questions, frustrations, and content opportunities.”',
          'This turns real audience language into useful content.',
          'The strongest content often uses the same words your audience uses.',
          'AI can help extract those words and turn them into headlines, hooks, and scripts.',
          'Audience research should not be done once. It should be repeated regularly because audience needs change over time.',
        ],
        weakPrompt: 'Who is my audience?',
        betterPrompt:
          'Act as an audience researcher. Analyze beginners who want to learn AI prompts. List their goals, pain points, fears, objections, common questions, and content topics they would find useful.',
        commonMistake:
          'The biggest mistake is creating content without understanding the audience’s problems, questions, and knowledge level.',
        practice:
          'Choose your niche and ask AI to create 3 audience personas. For each persona, ask for 10 content ideas based on their problems.',
        takeaway:
          'Audience research helps AI generate content that feels relevant instead of random.',
      },

      {
        title: 'Content Calendar Creation',
        time: '26 min',
        intro:
          'A content calendar turns random posting into a structured system. AI can help creators plan weekly or monthly content so they stay consistent without constantly wondering what to post next.',
        explanation: [
          'Consistency is one of the biggest challenges in content creation.',
          'Many creators post when they feel inspired, then disappear when they run out of ideas.',
          'A content calendar solves this by giving structure to your publishing schedule.',
          'AI can help plan content by day, platform, topic, format, hook, and goal.',
          'A weak prompt is: “Make a content calendar.”',
          'This is too vague because AI does not know your niche, audience, posting frequency, platforms, or goals.',
          'A better prompt is: “Create a 30-day content calendar for an AI education brand targeting beginners. Include blog ideas, Instagram carousel topics, short video ideas, hooks, and CTAs.”',
          'This creates a usable plan.',
          'A strong content calendar should include content pillars.',
          'Content pillars are main categories your brand talks about regularly.',
          'For an AI education brand, pillars may include prompt basics, productivity, student use cases, business use cases, AI tools, mistakes, and tutorials.',
          'Content pillars prevent your page from feeling random.',
          'AI can organize a full calendar around these pillars.',
          'You can ask: “Create a weekly content plan using 5 content pillars and make sure each pillar appears at least once.”',
          'AI can also help balance content types.',
          'For example, educational posts build trust, practical tutorials create value, personal insights create connection, and promotional posts drive action.',
          'A good content calendar should not only include topics. It should include purpose.',
          'Ask AI to label each post as awareness, education, trust-building, engagement, or conversion.',
          'This makes your content more strategic.',
          'AI can also create batch workflows.',
          'Example: Monday for idea generation, Tuesday for writing, Wednesday for design, Thursday for scheduling, Friday for review.',
          'This makes content creation easier to manage.',
          'Another useful prompt is repurposing.',
          'Ask AI to turn one blog topic into five social posts, one email newsletter, and one video script.',
          'This helps you create more content from fewer ideas.',
          'A content calendar is not a prison. You can adjust it based on trends, performance, and new ideas.',
          'The goal is to reduce stress and improve consistency.',
        ],
        weakPrompt: 'Make a content calendar.',
        betterPrompt:
          'Create a 30-day content calendar for an AI education brand targeting beginners. Include content pillars, post topics, platform suggestions, hooks, content format, and CTA for each day.',
        commonMistake:
          'The biggest mistake is creating a calendar with random topics instead of using content pillars, audience goals, and platform strategy.',
        practice:
          'Ask AI to create a 14-day content calendar for your niche. Then ask it to organize the calendar by content pillars and post purpose.',
        takeaway:
          'AI can turn content planning into a repeatable system instead of daily guessing.',
      },

      {
        title: 'Finding Your Unique Angle',
        time: '27 min',
        intro:
          'AI can generate many content ideas, but your unique angle is what makes your content different. A unique angle helps your post, blog, or video stand out even when the topic has already been covered by others.',
        explanation: [
          'Most content topics are not completely new.',
          'Many people have already created content about AI prompts, productivity, blogging, YouTube, or content strategy.',
          'This does not mean you should avoid those topics.',
          'It means you need a better angle.',
          'An angle is the way you approach a topic.',
          'For example, “How to use AI for content creation” is broad.',
          'A stronger angle is: “How beginners can use AI to create a full week of content without feeling overwhelmed.”',
          'This angle is more specific, emotional, and beginner-friendly.',
          'AI can help you find angles by asking for different perspectives.',
          'Example prompt: “Give me 10 unique angles for a blog post about AI content creation for beginners.”',
          'You can also ask for angles based on audience type.',
          'For students, the angle may focus on saving study time.',
          'For freelancers, the angle may focus on client work.',
          'For business owners, the angle may focus on marketing consistency.',
          'For YouTubers, the angle may focus on scripts and video ideas.',
          'Different audiences create different angles.',
          'AI can also help create contrarian angles.',
          'Example: “Most beginners use AI for faster content, but the real benefit is better planning.”',
          'Contrarian angles can attract attention because they challenge common thinking.',
          'You can also ask AI for beginner mistakes angles.',
          'Example: “7 mistakes beginners make when using AI for content creation.”',
          'Mistake-based content works well because people want to avoid failure.',
          'Another method is transformation angle.',
          'Example: “From blank page to published post: using AI to build a content workflow.”',
          'This shows progress and gives the audience a clear journey.',
          'A unique angle should still be honest and useful.',
          'Do not create misleading hooks just to get clicks.',
          'AI can help brainstorm angles, but your brand voice and judgment should decide the final version.',
          'The best content usually combines a useful topic, clear audience, strong angle, and practical takeaway.',
        ],
        weakPrompt: 'Make this topic interesting.',
        betterPrompt:
          'Give me 10 unique content angles for the topic “AI content creation for beginners.” Include beginner-friendly, mistake-based, contrarian, tutorial, and transformation angles.',
        commonMistake:
          'The biggest mistake is publishing generic content without a clear angle that separates it from similar content.',
        practice:
          'Choose one common topic in your niche. Ask AI for 10 different angles, then select the strongest one and explain why it fits your audience.',
        takeaway:
          'A strong angle makes familiar topics feel fresh, specific, and valuable.',
      },
    ],
  },

  {
    title: 'Writing and Scripting',
    time: '1.75 hours',
    lessons: [
      {
        title: 'Writing Blog Posts with AI',
        time: '26 min',
        intro:
          'AI can help bloggers move from idea to outline to first draft faster. But strong blog writing still requires human direction, structure, editing, and a clear understanding of the reader.',
        explanation: [
          'Many beginners ask AI to “write a blog post” and expect a perfect article.',
          'This usually creates generic content that sounds flat and lacks depth.',
          'A better approach is to use AI step by step.',
          'Start with topic research.',
          'Then create an outline.',
          'Then write section by section.',
          'Then improve clarity, examples, and flow.',
          'Then edit for brand voice.',
          'A weak prompt is: “Write a blog about AI.”',
          'A better prompt is: “Act as a beginner-friendly blog writer. Create a detailed outline for a blog post about how students can use AI ethically for studying. Include intro, main sections, examples, FAQs, and conclusion.”',
          'This gives AI a focused job.',
          'The outline stage is important because it controls the structure.',
          'If the outline is weak, the full blog will usually be weak.',
          'After outline approval, ask AI to write one section at a time.',
          'This gives better quality than asking for the full blog in one prompt.',
          'AI can also help improve introductions.',
          'A good introduction should explain the problem, connect with the reader, and preview the value of the article.',
          'AI can help with examples, analogies, and FAQs.',
          'For SEO blogs, AI can suggest headings, keywords, meta descriptions, and related questions.',
          'However, AI should not invent facts.',
          'For factual content, always verify important claims before publishing.',
          'AI can also make blog writing more human by improving transitions and removing robotic phrases.',
          'A useful prompt is: “Rewrite this section to sound more natural, beginner-friendly, and less robotic while keeping the meaning.”',
          'The final blog should still be reviewed by you.',
          'Your edits add voice, experience, clarity, and trust.',
        ],
        weakPrompt: 'Write a blog about AI.',
        betterPrompt:
          'Act as a beginner-friendly blog writer. Create a detailed blog outline about how students can use AI ethically for studying. Include headings, examples, FAQs, and a helpful conclusion.',
        commonMistake:
          'The biggest mistake is asking AI for a full blog immediately without planning the outline, audience, tone, and search intent.',
        practice:
          'Choose one topic. Ask AI for an outline first, then write only the introduction, then ask AI to improve clarity and flow.',
        takeaway:
          'AI works best for blogging when used as a planning, drafting, and editing assistant rather than a one-click writer.',
      },

      {
        title: 'YouTube and Short Video Scripts',
        time: '26 min',
        intro:
          'Video content needs structure. AI can help creators write YouTube scripts, reels, TikTok scripts, hooks, talking points, and scene-by-scene outlines.',
        explanation: [
          'Video scripts are different from blog posts.',
          'They need to sound natural when spoken.',
          'They need stronger hooks because viewers decide quickly whether to continue watching.',
          'AI can help create scripts, but the prompt must define platform, length, audience, tone, and goal.',
          'A weak prompt is: “Write a video script.”',
          'A better prompt is: “Write a 60-second TikTok script for beginners explaining how AI can help plan content. Use a strong hook, simple language, and a clear final takeaway.”',
          'This creates a script that fits the platform.',
          'YouTube videos usually need a longer structure.',
          'A YouTube script may include hook, intro, problem, main points, examples, recap, and CTA.',
          'Short videos need faster pacing.',
          'A short video script may include hook, 3 key points, example, and CTA.',
          'AI can create multiple hook options.',
          'This is useful because the hook often decides performance.',
          'Example prompt: “Generate 15 hooks for a short video about AI content planning mistakes.”',
          'AI can also create scene suggestions.',
          'For example, it can suggest text overlays, B-roll ideas, screen recording moments, or visual examples.',
          'For faceless videos, AI can help create voiceover scripts and visual directions.',
          'A strong prompt could say: “Create a faceless reel script with voiceover, on-screen text, and scene ideas.”',
          'AI can also repurpose blog posts into video scripts.',
          'Prompt example: “Turn this blog section into a 90-second educational video script.”',
          'This helps creators produce more content from existing work.',
          'The final script should still sound like you.',
          'Read it out loud. If it sounds unnatural, ask AI to make it more conversational.',
          'Video scripts should be clear, direct, and easy to follow.',
        ],
        weakPrompt: 'Write a video script.',
        betterPrompt:
          'Write a 60-second short video script for beginners explaining how AI can help plan content. Include a strong hook, simple talking points, on-screen text ideas, and a clear CTA.',
        commonMistake:
          'The biggest mistake is writing video scripts like blog posts instead of making them conversational, visual, and platform-specific.',
        practice:
          'Take one blog topic and ask AI to turn it into a 60-second short video script with hook, voiceover, and on-screen text.',
        takeaway:
          'AI can help create stronger video scripts when you define platform, length, audience, pacing, and visual style.',
      },

      {
        title: 'Social Media Captions and Hooks',
        time: '26 min',
        intro:
          'Captions and hooks are essential for social media. AI can help creators write stronger openings, clearer captions, and better calls to action while keeping content aligned with brand voice.',
        explanation: [
          'Social media content competes for attention.',
          'A weak hook causes people to scroll past.',
          'A strong hook makes people stop and read or watch.',
          'AI can generate hook styles such as curiosity hooks, mistake hooks, question hooks, story hooks, and problem-solution hooks.',
          'A weak prompt is: “Write a caption.”',
          'A better prompt is: “Write 5 Instagram caption options for a beginner-friendly post about AI content planning. Start with a strong hook, explain the idea simply, and end with a question.”',
          'This gives AI structure.',
          'Captions should not only describe the post.',
          'They should add value, explain the message, and encourage engagement.',
          'AI can help write captions for Instagram, LinkedIn, Facebook, TikTok, X, and YouTube Shorts.',
          'Each platform needs a different style.',
          'LinkedIn usually works better with professional storytelling.',
          'Instagram often works better with short educational captions.',
          'X needs concise, sharp points.',
          'TikTok captions should support the video quickly.',
          'AI can also create caption variations.',
          'Ask for short, medium, and long versions.',
          'This helps you choose based on platform.',
          'Brand voice matters.',
          'You can tell AI: “Use a calm, beginner-friendly, educational tone. Avoid hype.”',
          'This makes captions feel more consistent.',
          'AI can also create engagement questions.',
          'Questions at the end of captions can encourage comments.',
          'However, the question should be relevant, not random.',
          'A strong CTA can ask people to save, comment, share, read more, or try the prompt.',
          'Captions should feel human, clear, and useful.',
          'The best workflow is: generate hooks, choose one, write caption, improve tone, add CTA, then edit manually.',
        ],
        weakPrompt: 'Write a caption.',
        betterPrompt:
          'Write 5 Instagram caption options for a beginner-friendly post about AI content planning. Start with a strong hook, use simple language, avoid hype, and end with a relevant question.',
        commonMistake:
          'The biggest mistake is using generic captions that do not match the platform, audience, or brand voice.',
        practice:
          'Ask AI to create 10 hooks for one post idea. Pick the best hook, then ask AI to write three caption versions using that hook.',
        takeaway:
          'AI can improve social captions when you guide hook style, platform, audience, tone, and CTA.',
      },

      {
        title: 'Editing, Repurposing, and Publishing Workflow',
        time: '27 min',
        intro:
          'The final stage of content creation is editing, repurposing, and publishing. AI can help improve drafts, turn one idea into multiple formats, and build a smoother publishing workflow.',
        explanation: [
          'Many creators think content creation ends after writing a draft.',
          'In reality, editing and repurposing are what make content stronger and more useful.',
          'AI can help edit for clarity, structure, tone, length, and readability.',
          'A weak prompt is: “Make this better.”',
          'A better prompt is: “Edit this caption for clarity and flow. Keep the tone beginner-friendly, remove repetition, and make it sound more natural.”',
          'This tells AI what improvement means.',
          'AI can also repurpose content.',
          'Repurposing means turning one content piece into multiple formats.',
          'For example, one blog post can become a LinkedIn post, Instagram carousel, YouTube script, email newsletter, and short video.',
          'This saves time because you do not start from zero every day.',
          'A useful prompt is: “Turn this blog post into 5 social media posts, 1 short video script, and 1 email newsletter.”',
          'AI can also help adapt content for different platforms.',
          'The same message should not be copied everywhere exactly.',
          'Each platform has different audience behavior.',
          'AI can rewrite one idea for LinkedIn, Instagram, X, TikTok, and email.',
          'AI can also help build a publishing checklist.',
          'A checklist may include title, hook, formatting, CTA, image, hashtags, links, proofreading, and scheduling.',
          'This reduces mistakes before publishing.',
          'AI can also help review content before posting.',
          'Prompt example: “Review this post before publishing. Check clarity, tone, structure, and whether the CTA feels natural.”',
          'Publishing should still include human review.',
          'AI can miss context or create lines that do not match your brand.',
          'The best workflow is: draft, edit, repurpose, format, review, schedule, publish, analyze.',
          'After publishing, AI can help analyze performance.',
          'You can paste post results and ask what improved, what failed, and what to test next.',
          'This creates a complete content improvement loop.',
        ],
        weakPrompt: 'Make this better.',
        betterPrompt:
          'Edit this content for clarity, flow, and beginner-friendly tone. Then repurpose it into a LinkedIn post, Instagram caption, short video script, and email newsletter.',
        commonMistake:
          'The biggest mistake is creating every content piece from scratch instead of repurposing strong ideas across platforms.',
        practice:
          'Take one blog idea and ask AI to repurpose it into four formats: carousel, short video, LinkedIn post, and email newsletter.',
        takeaway:
          'AI helps creators move from one idea to a full publishing system when used for editing, repurposing, and workflow planning.',
      },
    ],
  },
]

function ContentCreationWithAI() {
  return (
    <div className="space-y-8">
      {contentCreationWithAIModules.map((module, moduleIndex) => (
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

export default ContentCreationWithAI