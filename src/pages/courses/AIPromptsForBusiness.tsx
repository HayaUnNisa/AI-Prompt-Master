import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export const aiPromptsForBusinessModules = [
  {
    title: 'Business Foundations with AI',
    time: '2 hours',
    lessons: [
      {
        title: 'Understanding AI in Business',
        time: '30 min',
        intro:
          'Artificial intelligence is no longer just a trend. It is becoming one of the most practical tools businesses can use to save time, reduce manual work, improve communication, and make faster decisions. But many businesses use AI incorrectly because they do not understand how prompting works in a business environment.',
        explanation: [
          'To understand AI in business, you must first stop thinking of it as magic. AI is not a machine that automatically knows what your company needs. It is a system that responds based on your instructions. This means the quality of the result depends heavily on the quality of the prompt.',

          'In business, time is one of the most expensive resources. Teams spend hours writing emails, organizing meetings, handling support, researching competitors, planning content, and documenting workflows. AI can reduce much of this workload when used correctly.',

          'Think about a small business owner. They may need to write 15 emails in one day, answer customer questions, prepare social media content, and review market trends. Without AI, this takes hours. With AI, many of these tasks can be shortened significantly.',

          'But AI is not a replacement for human judgment. This is one of the biggest misunderstandings. AI should be treated as an assistant, not the decision-maker. It can draft, organize, summarize, and generate ideas—but the final decision should still come from the human running the business.',

          'This is where prompts become important. A prompt is simply the instruction you give to the AI. In business, prompts can be used for many departments.',

          'Sales teams can use prompts to write proposals, follow-ups, outreach messages, and lead responses. Marketing teams can use prompts to create ad copy, campaign ideas, content calendars, and landing page text.',

          'Operations teams can use prompts to document workflows, summarize meetings, and organize tasks. Customer support teams can use prompts to reply to complaints, refund requests, delivery issues, and product questions.',

          'Research teams can use prompts for competitor analysis, market trends, product comparisons, and customer pain point discovery. Human resources teams can use prompts for job descriptions, interview questions, onboarding documents, and internal communication.',

          'Every department can use AI differently. But the core skill remains the same: clear prompting.',

          'Let us compare weak and strong prompting in business.',

          'A weak prompt would be: “Write a marketing plan.”',

          'This is weak because the AI does not know the business, the audience, the budget, the platform, the timeline, or the goal.',

          'A stronger prompt would be: “Act as a digital marketing strategist. Create a 30-day marketing plan for a beginner AI education website targeting students and freelancers. Focus on Instagram, LinkedIn, and email marketing. Keep the budget low.”',

          'This prompt gives role, context, audience, platforms, and constraints. This makes the output much stronger.',

          'This principle applies to every business task. The more clarity you provide, the better the result.',

          'Now let us look at a customer support example. A clothing store gets 50 messages daily asking about delivery times. Instead of manually replying each time, the business can use AI with a support prompt template. This reduces response time and keeps replies consistent.',

          'Now look at a social media example. A small education brand needs daily posts. Instead of brainstorming every day, the brand can ask AI to generate a 30-day content calendar with post ideas, hooks, captions, and calls to action.',

          'Now look at an internal meeting example. A startup records team meetings. They paste the transcript into AI and ask for summaries, action points, responsibilities, and deadlines. This keeps everyone aligned.',

          'Notice something important: AI is not doing the business. It is reducing friction inside the business.',

          'This is the true power of AI. It helps reduce repetitive thinking, speed up drafting, organize information, and create better first drafts.',

          'Another important concept is AI workflow integration. Most beginners use AI randomly. They ask one question today and another tomorrow. Businesses get better results when AI becomes part of a repeatable system.',

          'For example, every Monday the business can generate weekly content ideas. Every customer complaint can follow a support response template. Every meeting can be summarized into tasks. Every campaign can generate multiple ad variations.',

          'This creates systems instead of random usage. Businesses that build AI systems usually gain more than businesses that use AI casually.',

          'Now let us discuss limitations. AI can make mistakes. It can misunderstand your goal. It can generate inaccurate information. It can sound generic. It can miss business-specific details.',

          'That is why reviewing AI output is always necessary. The best workflow is: Prompt, review, refine, approve, and then use.',

          'Never use this workflow: Prompt, copy, publish. This is dangerous in business because one wrong detail can damage trust, confuse customers, or create operational problems.',

          'As you continue this course, you will learn how to create better prompts for every major business function.',

          'This lesson is the foundation. Before learning marketing prompts, sales prompts, or automation prompts, you must first understand one truth: AI is only as powerful as the instructions you give it.',
        ],
        weakPrompt: 'Help my business.',
        betterPrompt:
          'Act as a business consultant. Analyze a beginner online education business and suggest 5 ways AI can improve productivity, customer support, and marketing efficiency.',
        commonMistake:
          'The biggest mistake beginners make is asking AI broad questions without defining their business type, audience, or goal. This creates generic outputs that are hard to use.',
        practice:
          'Write down three repetitive tasks in your business or daily workflow. For each task, create one AI prompt that could help automate or improve it. Then test them and compare the quality of the responses.',
        takeaway:
          'AI in business is not about replacing humans. It is about reducing repetitive work, improving speed, and building smarter systems through better prompting.',
      },

      {
        title: 'Customer Support Prompts',
        time: '30 min',
        intro:
          'Customer support is one of the strongest and most practical ways businesses can use AI. Every day, companies answer repetitive questions, handle complaints, process refunds, and guide customers. AI can help speed up this process, improve consistency, and reduce stress for support teams.',
        explanation: [
          'Customer support is often the first real interaction a customer has with a business. This means the quality of support directly affects trust, loyalty, and reputation.',

          'One bad response can lose a customer. One strong response can keep them for years.',

          'This is why AI in customer support can be extremely valuable when used correctly.',

          'Most businesses deal with repetitive questions. Customers ask where their order is, how to get a refund, how long shipping takes, how to reset a password, what a product includes, or when support is available.',

          'These questions are repetitive, predictable, and structured. This makes them ideal for AI.',

          'Instead of manually writing every reply, AI can draft fast, professional responses.',

          'But many beginners make a mistake. They use weak prompts like: “Reply to this customer.”',

          'This is weak because the AI does not know what happened, what the issue is, what tone should be used, or what company policy applies.',

          'Support prompts need context. A better prompt would be: “Act as a customer support representative for an online clothing store. Reply to a customer whose package is delayed by 5 days. Apologize, explain the delay politely, and reassure them with next steps.”',

          'This prompt gives role, business type, problem, tone, and goal. This creates a much better support reply.',

          'Let us break customer support into categories.',

          'Category 1 is delivery issues. This is one of the most common business problems. A useful prompt could be: “Reply to a customer asking why their package is late. Explain there is a shipping backlog and reassure them their package is still on the way.”',

          'AI can create calm, professional responses quickly. This helps reduce customer frustration.',

          'Category 2 is refund requests. Refunds require balance. You want to stay polite while following company policy.',

          'A useful prompt could be: “Write a polite refund response for a customer whose request is approved. Mention the refund will take 5 to 7 business days.”',

          'Another version could be: “Write a professional refund denial based on company policy, while keeping the customer respected and supported.”',

          'Notice how AI can handle both positive and negative outcomes when the prompt gives enough direction.',

          'Category 3 is complaints. Complaints are emotional, so tone matters a lot.',

          'If a customer is angry, your AI prompt should focus on empathy first. A good structure is: acknowledge, apologize, solve, and reassure.',

          'Example prompt: “Reply to an angry customer who received the wrong product. Acknowledge the mistake, apologize sincerely, and explain how to fix it.”',

          'This creates trust because the response does not sound cold or robotic.',

          'Category 4 is product questions. Customers often ask simple product questions before buying. AI can simplify product education.',

          'Example prompt: “Explain the difference between Product A and Product B in simple words for a beginner customer.”',

          'Now let us talk about support tone. Support tone usually falls into four styles: friendly, professional, empathetic, and firm.',

          'Friendly tone is casual and warm. Professional tone is clear and formal. Empathetic tone shows emotional understanding. Firm tone follows policy while staying respectful.',

          'Choosing the wrong tone can create problems. A refund denial with no empathy may make the customer angrier. A complaint response that sounds robotic may feel cold.',

          'This is why tone should always be part of the prompt.',

          'Smart businesses do not create prompts from scratch every day. They build templates.',

          'A reusable support template could be: “Act as a support agent. Reply to a customer about [issue]. Use a [tone] tone. Follow company policy: [policy].”',

          'This allows teams to reuse prompts for speed and consistency.',

          'Now imagine scaling this. If a business receives 50 customer messages per day and each takes 4 minutes manually, that is 200 minutes. With AI-assisted drafting, each reply may take much less time to review.',

          'But there are limits. AI should never promise refunds without approval, invent tracking details, make legal claims, or give false delivery estimates.',

          'This is why human review remains important. The best workflow is: customer message, AI draft, human review, then send.',

          'Support is one of the easiest places to start with AI because it creates immediate time savings.',

          'Businesses that master support prompts usually improve customer satisfaction while reducing workload. This is one of the highest value uses of AI in business.',
        ],
        weakPrompt: 'Reply to this customer.',
        betterPrompt:
          'Act as a professional customer support representative for an e-commerce business. Reply to a customer whose package is delayed by 4 days. Apologize politely, explain the likely reason, and reassure them about the next steps.',
        commonMistake:
          'The biggest mistake is not giving enough context. Without knowing the issue, tone, and policy, AI will create generic replies that may not match the business situation.',
        practice:
          'Write 5 customer support situations: delayed delivery, refund request, angry complaint, product question, and account problem. Create one strong AI prompt for each and compare the outputs.',
        takeaway:
          'Customer support AI works best when prompts clearly define the issue, tone, and desired resolution. Strong support prompts improve speed, consistency, and customer trust.',
      },
            {
        title: 'Writing Professional Emails',
        time: '30 min',
        intro:
          'Email remains one of the most important communication tools in business. Strong emails can create trust, close deals, maintain relationships, and keep operations moving. AI can dramatically improve email writing, but only when prompts are structured properly.',
        explanation: [
          'Business owners often send dozens of emails per day. These can include client updates, proposals, follow-ups, support replies, internal communication, and partnership requests.',

          'Writing these manually takes time. Many people struggle with tone, structure, or clarity. AI helps speed this up.',

          'But most beginners use weak prompts like: “Write an email.” This gives almost no useful context.',

          'The AI does not know who the email is for, what the goal is, what tone should be used, or what action is expected.',

          'A stronger prompt would be: “Write a professional follow-up email to a client after a business meeting. Thank them for their time, summarize the discussion, and explain the next step.”',

          'This gives purpose, context, and direction.',

          'There are different types of business emails. Sales emails are used to introduce offers, explain benefits, and create interest.',

          'Follow-up emails help maintain momentum. Many deals do not close after the first email. Follow-ups keep the conversation alive.',

          'Client update emails help keep projects organized. These may include progress updates, deadlines, and deliverables.',

          'Internal team emails improve clarity inside a business. These may include task updates, weekly goals, and reminders.',

          'AI can help create all of these much faster than manual writing.',

          'Tone matters heavily in email writing. Common tones include formal, professional, friendly, persuasive, and urgent.',

          'A formal email may work better for executives. A friendly email may work better for existing clients. A persuasive email works well for sales.',

          'This is why tone should always be part of the prompt.',

          'A strong business email usually includes a subject line, greeting, purpose, key information, call to action, and closing.',

          'AI can generate all these sections clearly when asked properly.',

          'AI is also useful for editing. It can rewrite emails to sound more professional, shorten long emails, improve clarity, or simplify technical language.',

          'A useful prompt could be: “Rewrite this email to sound clearer and more professional while keeping the main message.”',

          'This saves time and improves communication quality.',

          'One common mistake is using AI emails without reviewing them. AI may add details that are inaccurate or unnecessary.',

          'Another mistake is forgetting the call to action. Many AI emails end weakly if the prompt does not ask for a clear next step.',

          'A reusable template could be: “Act as a [role]. Write a [type] email to [recipient] about [topic]. Keep the tone [tone]. Include [details]. End with [desired action].”',

          'This template can be reused across many business situations.',

          'Businesses that master AI email prompting save hours every week and improve communication quality significantly.',
        ],
        weakPrompt: 'Write an email.',
        betterPrompt:
          'Act as a business manager. Write a professional follow-up email to a client after a product demo. Thank them for their time, summarize the discussion, and invite them to schedule the next meeting.',
        commonMistake:
          'The biggest mistake is not defining the recipient, purpose, or tone. This creates weak and generic emails.',
        practice:
          'Create three email prompts: one sales email, one client update, and one internal team email. Compare how the structure changes.',
        takeaway:
          'Strong email prompts create better business communication and save significant time.',
      },

      {
        title: 'Meeting Summaries and Documentation',
        time: '30 min',
        intro:
          'Meetings create large amounts of information. Without structure, important details are forgotten. AI can turn raw conversations into organized summaries, action points, and documentation.',
        explanation: [
          'Every business has meetings. Team meetings, client meetings, strategy calls, and sales calls all generate information.',

          'The problem is not the meeting itself. The problem is what happens after it.',

          'People forget decisions, miss deadlines, and misunderstand responsibilities.',

          'This creates confusion and slows down progress.',

          'AI can solve this by organizing raw notes into useful structures.',

          'A weak prompt would be: “Summarize this meeting.”',

          'This is too broad because the AI does not know what type of summary you want.',

          'A stronger prompt would be: “Summarize this meeting into key decisions, action points, deadlines, and assigned responsibilities.”',

          'This creates clear and actionable output.',

          'AI can summarize team meetings into weekly priorities, client calls into deliverables, and sales calls into objections and follow-up tasks.',

          'Documentation is another strong use case. Businesses need SOPs, onboarding guides, process documents, and training materials.',

          'AI can turn rough notes into structured documentation quickly.',

          'A useful prompt could be: “Turn these notes into a standard operating procedure for onboarding new employees.”',

          'This creates organized business systems.',

          'AI is also excellent at extracting tasks. It can identify who is responsible for what and by when.',

          'This improves accountability inside teams.',

          'Reusable meeting templates make this even stronger.',

          'For example: “Summarize this meeting into main discussion points, key decisions, tasks, deadlines, and assigned people.”',

          'This creates consistency across all meetings.',

          'Common mistakes include giving AI incomplete notes, not asking for a structured format, and not reviewing the summary.',

          'Important business details can still be misunderstood.',

          'The best workflow is: Meeting → Notes → AI Summary → Review → Final Document.',

          'Businesses that use AI for summaries save time and reduce confusion across teams.',
        ],
        weakPrompt: 'Summarize this meeting.',
        betterPrompt:
          'Summarize this meeting into key decisions, action points, deadlines, assigned responsibilities, and next steps. Use bullet points.',
        commonMistake:
          'The biggest mistake is asking for vague summaries without defining what information matters.',
        practice:
          'Take notes from a recent meeting and use AI to turn them into an action plan and workflow document.',
        takeaway:
          'AI can transform messy meetings into clear summaries, tasks, and documentation.',
      },
    ],
  },

  {
    title: 'Growth, Marketing, and Automation',
    time: '2 hours',
    lessons: [
      {
  title: 'Marketing Copy and Ads',
  time: '30 min',
  intro:
    'Marketing is one of the most powerful uses of AI in business. Good marketing can attract attention, build trust, and generate sales. But writing effective marketing copy takes time, creativity, and testing. AI can speed up this process significantly when guided with strong prompts.',

  explanation: [
    'Every business needs marketing. Whether you are selling a product, a service, or building a brand, marketing is how people discover you.',
    
    'But many businesses struggle with writing.',
    
    'They do not know how to create strong headlines.',
    'They struggle with ad copy.',
    'They repeat the same boring ideas.',
    'They run out of content.',
    
    'AI can solve this.',
    
    'But only if you prompt it correctly.',
    
    'Most beginners make the mistake of using weak prompts like:',
    
    '“Write an ad for my product.”',
    
    'This is weak.',
    
    'The AI does not know:',
    
    'What product?',
    'Who is buying it?',
    'What problem does it solve?',
    'What platform is the ad for?',
    'What style should be used?',
    
    'This creates generic ad copy.',
    
    'Now compare:',
    
    '“Act as a direct-response marketer. Write 3 Facebook ad variations for a beginner AI course targeting freelancers who want to save time and improve productivity.”',
    
    'This gives role, audience, product, platform, and goal.',
    
    'Much stronger.',
    
    'Now let us break marketing prompting into categories.',
    
    'Category 1: Headlines',
    
    'Headlines are the first thing people see.',
    
    'Bad headline = no attention.',
    
    'AI can generate many options quickly.',
    
    'Prompt:',
    
    '“Generate 20 attention-grabbing headlines for an online course about AI prompts for beginners.”',
    
    'This helps brainstorming.',
    
    'Category 2: Ad Copy',
    
    'Ads need structure.',
    
    'Most ads follow:',
    
    'Hook → Problem → Solution → CTA',
    
    'AI can follow this framework.',
    
    'Prompt:',
    
    '“Write a short Instagram ad using hook, problem, solution, and CTA for my AI education platform.”',
    
    'This creates stronger ad structure.',
    
    'Category 3: Product Descriptions',
    
    'Product pages need persuasive writing.',
    
    'AI can improve descriptions.',
    
    'Prompt:',
    
    '“Write a product description for a beginner AI prompt course. Focus on simplicity, practical skills, and time-saving benefits.”',
    
    'This improves clarity.',
    
    'Category 4: Landing Pages',
    
    'Landing pages are critical for conversions.',
    
    'AI can generate sections such as:',
    
    'Headline.',
    'Benefits.',
    'Features.',
    'Social proof.',
    'CTA.',
    
    'Prompt:',
    
    '“Create landing page copy for an AI prompts course targeting small business owners.”',
    
    'This speeds up page creation.',
    
    'Now let us discuss audience.',
    
    'Audience is everything in marketing.',
    
    'The same product can be marketed differently to:',
    
    'Students.',
    'Freelancers.',
    'Business owners.',
    'Beginners.',
    'Professionals.',
    
    'Example:',
    
    'AI course for students = focus on learning faster.',
    
    'AI course for freelancers = focus on saving time and making money.',
    
    'Same product, different angle.',
    
    'This is why your prompt must define the audience.',
    
    'Now let us discuss platform.',
    
    'Different platforms require different styles.',
    
    'Facebook = longer copy.',
    'Instagram = shorter and emotional.',
    'LinkedIn = professional.',
    'Google Ads = concise and direct.',
    'Email = more personal.',
    
    'Example:',
    
    '“Write LinkedIn ad copy for an AI business course.”',
    
    'This will sound different than Instagram.',
    
    'This matters a lot.',
    
    'Now let us talk about offer angles.',
    
    'An angle is how you position the offer.',
    
    'Examples:',
    
    'Save time.',
    'Increase sales.',
    'Reduce stress.',
    'Learn faster.',
    'Improve productivity.',
    
    'Prompt:',
    
    '“Generate 10 ad angles for an AI prompt course focused on productivity.”',
    
    'This gives more creative flexibility.',
    
    'Now let us discuss A/B testing.',
    
    'Good marketers test multiple versions.',
    
    'AI makes this much easier.',
    
    'Prompt:',
    
    '“Generate 5 ad variations with different hooks for the same product.”',
    
    'This allows faster testing.',
    
    'Now let us discuss mistakes.',
    
    'Common mistake 1:',
    
    'Being too broad.',
    
    'No audience, no platform, no goal.',
    
    'Common mistake 2:',
    
    'Ignoring emotional triggers.',
    
    'Good marketing is emotional.',
    
    'Fear.',
    'Curiosity.',
    'Desire.',
    'Urgency.',
    
    'Common mistake 3:',
    
    'No CTA.',
    
    'Every ad should end with clear action.',
    
    'Examples:',
    
    'Join now.',
    'Start today.',
    'Learn more.',
    'Book a call.',
    
    'Without this, the ad feels incomplete.',
    
    'Now let us build a reusable marketing template.',
    
    'Template:',
    
    '“Act as a [role]. Write [platform] ad copy for [product] targeting [audience]. Focus on [main benefit]. Use a [tone] tone and end with a CTA.”',
    
    'This can be reused for almost any campaign.',
    
    'Businesses that learn AI marketing prompts often create content much faster, test more ideas, and improve conversion speed.',
    
    'This makes AI one of the strongest marketing tools available today.',
  ],

  weakPrompt:
    'Write an ad for my product.',

  betterPrompt:
    'Act as a direct-response marketer. Write 3 Facebook ad variations for a beginner AI prompt course targeting freelancers who want to save time and improve productivity. Use strong hooks and clear CTAs.',

  commonMistake:
    'The biggest mistake is not defining the audience, platform, and offer angle. Without these, AI produces weak and generic marketing copy.',

  practice:
    'Choose one product or service. Create 3 prompts: one for ad copy, one for product description, and one for landing page copy. Compare the results and identify which one feels strongest.',

  takeaway:
    'AI can dramatically improve marketing speed and creativity, but strong marketing prompts require clear audience targeting, platform context, emotional angles, and action-driven structure.',
},
{
  title: 'Social Media Content Systems',
  time: '30 min',
  intro:
    'Social media has become one of the most important growth channels for businesses. But staying consistent is difficult. Businesses often struggle with content ideas, writing captions, creating hooks, and maintaining regular posting. AI can help build complete social media systems that save time and improve consistency.',

  explanation: [
    'Most businesses understand they need social media, but many fail because they treat content randomly.',
    
    'They post when they feel motivated.',
    'They run out of ideas.',
    'They repeat the same content.',
    'They disappear for weeks.',
    
    'This creates inconsistency, and inconsistency slows growth.',
    
    'AI can solve this problem by helping create systems instead of random posts.',
    
    'This is one of the biggest mindset shifts.',
    
    'Do not ask:',
    
    '“What should I post today?”',
    
    'Instead build:',
    
    'A weekly content system.',
    'A monthly content system.',
    'A reusable prompt system.',
    
    'This changes everything.',
    
    'But first, let us talk about weak prompts.',
    
    'Weak prompt:',
    
    '“Give me content ideas.”',
    
    'This is weak because the AI does not know:',
    
    'What business?',
    'What audience?',
    'What platform?',
    'What goals?',
    
    'Now compare:',
    
    '“Generate 30 Instagram content ideas for a beginner AI education brand targeting freelancers and students who want to learn prompt engineering.”',
    
    'This gives clarity.',
    
    'Much stronger.',
    
    'Now let us break social media into parts.',
    
    'Part 1: Content Ideas',
    
    'This is the starting point.',
    
    'AI can generate:',
    
    'Educational posts.',
    'Problem-solving posts.',
    'FAQs.',
    'Case studies.',
    'Myths.',
    'Tips.',
    'Mistakes.',
    
    'Prompt:',
    
    '“Generate 20 beginner-friendly content ideas for my AI education business.”',
    
    'This creates a content pool.',
    
    'Part 2: Hooks',
    
    'Hooks are critical.',
    
    'Without a strong hook, people scroll past.',
    
    'AI can generate multiple hook styles.',
    
    'Examples:',
    
    'Curiosity hook.',
    'Problem hook.',
    'Mistake hook.',
    'Story hook.',
    'Result hook.',
    
    'Prompt:',
    
    '“Generate 15 attention-grabbing hooks for content about AI productivity.”',
    
    'This improves engagement.',
    
    'Part 3: Captions',
    
    'Captions explain the value.',
    
    'AI can create short or long captions depending on the platform.',
    
    'Prompt:',
    
    '“Write an Instagram caption explaining why prompt clarity matters for beginners. Keep it simple and practical.”',
    
    'This saves writing time.',
    
    'Part 4: Platform Adaptation',
    
    'One idea can become many posts.',
    
    'Example:',
    
    'One blog can become:',
    
    'Instagram carousel.',
    'LinkedIn post.',
    'Twitter thread.',
    'Short video script.',
    
    'AI can repurpose content.',
    
    'Prompt:',
    
    '“Turn this blog post into an Instagram carousel, LinkedIn post, and Twitter thread.”',
    
    'This multiplies content.',
    
    'Part 5: Content Calendars',
    
    'This is where systems begin.',
    
    'Instead of daily thinking, create monthly plans.',
    
    'Prompt:',
    
    '“Create a 30-day content calendar for an AI education business focused on beginners.”',
    
    'This removes decision fatigue.',
    
    'Now let us discuss content pillars.',
    
    'Every business should have pillars.',
    
    'Example for AI education:',
    
    'Education.',
    'Tools.',
    'Mistakes.',
    'Case studies.',
    'Success stories.',
    
    'Prompt:',
    
    '“Organize 30 content ideas into 5 content pillars.”',
    
    'This creates structure.',
    
    'Now let us discuss audience.',
    
    'Audience matters heavily.',
    
    'Content for beginners looks different than content for experts.',
    
    'Examples:',
    
    'Beginners want simple education.',
    'Business owners want productivity.',
    'Developers want advanced use cases.',
    
    'This changes the content style.',
    
    'Now let us discuss tone.',
    
    'Tone controls brand personality.',
    
    'Examples:',
    
    'Professional.',
    'Friendly.',
    'Educational.',
    'Bold.',
    'Casual.',
    
    'Prompt:',
    
    '“Write this in a professional but beginner-friendly tone.”',
    
    'This makes branding more consistent.',
    
    'Now let us discuss content repurposing systems.',
    
    'This is powerful.',
    
    'Example system:',
    
    'One YouTube video → 5 tweets → 2 LinkedIn posts → 1 carousel → 3 reels.',
    
    'AI can help create all of these.',
    
    'This reduces content creation workload massively.',
    
    'Now let us talk about mistakes.',
    
    'Common mistake 1:',
    
    'Posting without strategy.',
    
    'Random content usually gives random results.',
    
    'Common mistake 2:',
    
    'Ignoring audience pain points.',
    
    'Content should solve problems.',
    
    'Common mistake 3:',
    
    'Not repurposing.',
    
    'Many businesses waste one good piece of content by using it only once.',
    
    'Now let us build a reusable content system prompt.',
    
    'Template:',
    
    '“Act as a social media strategist. Create [number] content ideas for [business type] targeting [audience]. Focus on [goal]. Organize them by content pillars and include hooks.”',
    
    'This can be reused every month.',
    
    'Businesses that use AI for content systems often become more consistent, faster, and more strategic.',
    
    'This is one of the strongest ways to scale content creation.',
  ],

  weakPrompt:
    'Give me content ideas.',

  betterPrompt:
    'Act as a social media strategist. Generate 30 Instagram content ideas for an AI education brand targeting freelancers and beginners. Organize them into content pillars and include strong hooks.',

  commonMistake:
    'The biggest mistake is creating content without strategy, audience clarity, or content pillars. This creates inconsistent growth and weak engagement.',

  practice:
    'Choose your business or niche. Use AI to create 20 content ideas, 10 hooks, and a 7-day content plan. Then repurpose one idea into three different platform formats.',

  takeaway:
    'AI can turn social media from random posting into a structured content system, making consistency, creativity, and growth much easier to manage.',
},
{
  title: 'Research and Competitor Analysis',
  time: '30 min',
  intro:
    'Research is one of the most important parts of running a business. Before launching a product, improving a service, or entering a market, businesses need information. This includes understanding competitors, market trends, customer behavior, and industry opportunities. AI can make this process faster, more organized, and easier to understand.',

  explanation: [
    'Most businesses make better decisions when they have better information.',
    
    'The problem is that research takes time.',
    
    'It can involve:',
    
    'Reading competitor websites.',
    'Studying reviews.',
    'Comparing offers.',
    'Tracking trends.',
    'Analyzing customer feedback.',
    
    'This can take hours or even days.',
    
    'AI can reduce this time significantly.',
    
    'But there is an important rule:',
    
    'AI should support research, not replace verification.',
    
    'This is critical.',
    
    'Many beginners ask weak prompts like:',
    
    '“Research my competitors.”',
    
    'This is weak.',
    
    'The AI does not know:',
    
    'Which industry?',
    'Which competitors?',
    'What kind of analysis?',
    'What metrics matter?',
    
    'This creates broad and weak outputs.',
    
    'Now compare:',
    
    '“Compare the top 3 online AI education platforms. Analyze their pricing, strengths, weaknesses, audience positioning, and content strategy.”',
    
    'This gives much better direction.',
    
    'Now let us break research into categories.',
    
    'Category 1: Competitor Analysis',
    
    'This is one of the most valuable uses.',
    
    'Businesses need to know:',
    
    'What competitors are doing.',
    'What they are doing better.',
    'Where they are weak.',
    'What opportunities exist.',
    
    'AI can help organize this.',
    
    'Prompt:',
    
    '“Compare 3 competitors in my niche and list their strengths, weaknesses, and unique selling points.”',
    
    'This creates clear comparisons.',
    
    'Category 2: SWOT Analysis',
    
    'SWOT means:',
    
    'Strengths.',
    'Weaknesses.',
    'Opportunities.',
    'Threats.',
    
    'AI can generate this quickly.',
    
    'Prompt:',
    
    '“Create a SWOT analysis for my online AI education business targeting beginners.”',
    
    'This helps with strategy.',
    
    'Category 3: Market Trends',
    
    'Trends show where attention is moving.',
    
    'Businesses that spot trends early often grow faster.',
    
    'Prompt:',
    
    '“Summarize the top trends in AI education for beginners in 2026.”',
    
    'This helps identify opportunities.',
    
    'Category 4: Customer Pain Points',
    
    'Understanding pain points improves products and marketing.',
    
    'Prompt:',
    
    '“What are the most common problems beginners face when learning prompt engineering?”',
    
    'This helps improve offers.',
    
    'Category 5: Product Comparison',
    
    'Businesses often compare products before building their own.',
    
    'Prompt:',
    
    '“Compare ChatGPT, Claude, and Gemini for business productivity use cases.”',
    
    'This helps identify strengths and weaknesses.',
    
    'Now let us discuss depth.',
    
    'A big advantage of AI is follow-up questioning.',
    
    'Example:',
    
    'First ask:',
    
    '“Compare these competitors.”',
    
    'Then ask:',
    
    '“What are the gaps in their strategy?”',
    
    'Then ask:',
    
    '“What opportunities could a new business use to compete?”',
    
    'This creates deeper research.',
    
    'This is much stronger than one simple prompt.',
    
    'Now let us discuss pattern recognition.',
    
    'AI is good at finding patterns.',
    
    'For example:',
    
    'Repeated customer complaints.',
    'Pricing similarities.',
    'Content gaps.',
    'Offer weaknesses.',
    
    'Prompt:',
    
    '“Analyze these 100 customer reviews and identify the top 5 repeated complaints.”',
    
    'This can reveal hidden opportunities.',
    
    'Now let us discuss speed.',
    
    'Without AI:',
    
    'Research may take several hours.',
    
    'With AI:',
    
    'Initial summaries may take minutes.',
    
    'This does not mean AI is always correct.',
    
    'It means AI accelerates the first draft of research.',
    
    'Now let us discuss limitations.',
    
    'AI may:',
    
    'Use outdated information.',
    'Miss recent changes.',
    'Misunderstand context.',
    'Invent details.',
    
    'This is why human verification matters.',
    
    'Best workflow:',
    
    'Research question → AI analysis → Verify sources → Make decision',
    
    'Not:',
    
    'Research question → AI answer → Immediate action',
    
    'This is risky.',
    
    'Now let us build a reusable research template.',
    
    'Template:',
    
    '“Act as a business analyst. Research [industry/topic]. Compare [competitors/products]. Analyze strengths, weaknesses, opportunities, customer pain points, and market trends.”',
    
    'This can be reused for many business decisions.',
    
    'Businesses that use AI for research often make faster and smarter decisions because they reduce the time needed to organize information.',
    
    'This makes AI one of the strongest business intelligence tools available.',
  ],

  weakPrompt:
    'Research my competitors.',

  betterPrompt:
    'Act as a business analyst. Compare the top 3 AI education platforms. Analyze their pricing, strengths, weaknesses, target audience, content strategy, and market opportunities.',

  commonMistake:
    'The biggest mistake is trusting AI research without verification. AI is a powerful organizer of information, but important business decisions still require fact-checking.',

  practice:
    'Choose your niche or business. Identify three competitors and ask AI to compare them. Then create a SWOT analysis for your own business and list 3 opportunities based on the comparison.',

  takeaway:
    'AI can speed up business research and competitor analysis dramatically, but its true value comes from organizing information—not replacing human judgment or verification.',
},
{
  title: 'Workflow Automation with Prompt Systems',
  time: '30 min',
  intro:
    'Most people use AI randomly. They ask one question, get one answer, and move on. Businesses that scale with AI do something different: they build systems. Workflow automation with prompt systems is the process of creating repeatable AI-powered workflows that save time, improve consistency, and reduce manual effort.',

  explanation: [
    'This is where AI becomes much more powerful.',
    
    'At the beginner level, AI feels like a helpful tool.',
    
    'At the advanced business level, AI becomes part of the system.',
    
    'This difference matters.',
    
    'A random AI user asks:',
    
    '“Write me an email.”',
    
    'A business system says:',
    
    '“Use this email template every time a lead requests pricing.”',
    
    'This creates repeatability.',
    
    'Repeatability is what businesses need.',
    
    'Without systems, work becomes inconsistent.',
    
    'Different team members write differently.',
    'Customer support quality changes.',
    'Marketing style changes.',
    'Processes become messy.',
    
    'Prompt systems solve this.',
    
    'A prompt system is simply a reusable structure.',
    
    'Instead of creating from zero every time, you create templates.',
    
    'Example:',
    
    'Support system template:',
    
    '“Act as customer support. Reply to [customer issue]. Use [tone]. Follow this policy: [policy].”',
    
    'Now every support reply follows the same standard.',
    
    'This creates consistency.',
    
    'Now let us look at business areas where prompt systems work best.',
    
    'System 1: Customer Support',
    
    'Businesses often receive the same types of questions.',
    
    'Instead of manually writing each response, create templates for:',
    
    'Refunds.',
    'Delivery delays.',
    'Product questions.',
    'Complaints.',
    
    'This saves hours.',
    
    'System 2: Content Creation',
    
    'Content is repetitive.',
    
    'Businesses can create prompt systems for:',
    
    'Instagram posts.',
    'LinkedIn posts.',
    'Blog ideas.',
    'Email newsletters.',
    'Video scripts.',
    
    'Example template:',
    
    '“Create [number] content ideas for [business type] targeting [audience]. Focus on [goal].”',
    
    'This can be reused weekly.',
    
    'System 3: Sales',
    
    'Sales teams can create prompt systems for:',
    
    'Cold emails.',
    'Follow-ups.',
    'Proposals.',
    'Lead nurturing.',
    
    'Example:',
    
    '“Write a follow-up email to [lead type] after [event]. Mention [offer] and include CTA.”',
    
    'This speeds up sales communication.',
    
    'System 4: Internal Operations',
    
    'AI can automate internal workflows.',
    
    'Examples:',
    
    'Meeting summaries.',
    'Task extraction.',
    'SOP creation.',
    'Training documents.',
    
    'This improves team efficiency.',
    
    'Now let us talk about prompt libraries.',
    
    'A prompt library is where businesses store reusable prompts.',
    
    'Think of it like a toolbox.',
    
    'Instead of creating new prompts every day, you pull from the library.',
    
    'Categories may include:',
    
    'Marketing.',
    'Sales.',
    'Support.',
    'Operations.',
    'Research.',
    
    'This improves speed.',
    
    'Now let us discuss team systems.',
    
    'Many businesses have multiple employees.',
    
    'Without prompt systems:',
    
    'Everyone uses AI differently.',
    
    'With systems:',
    
    'Everyone follows the same structure.',
    
    'This improves brand consistency.',
    
    'For example:',
    
    'A social media team may all use the same content prompts.',
    
    'A support team may use the same customer response templates.',
    
    'This makes scaling easier.',
    
    'Now let us talk about chaining.',
    
    'Prompt chaining means connecting prompts together.',
    
    'Example:',
    
    'Step 1: Generate content ideas.',
    
    'Step 2: Expand idea into caption.',
    
    'Step 3: Turn caption into carousel.',
    
    'Step 4: Repurpose into LinkedIn post.',
    
    'This creates a full workflow.',
    
    'Another example:',
    
    'Step 1: Summarize meeting.',
    
    'Step 2: Extract tasks.',
    
    'Step 3: Create deadlines.',
    
    'Step 4: Draft team update email.',
    
    'This turns AI into an operational system.',
    
    'Now let us discuss time savings.',
    
    'Imagine:',
    
    '10 emails per day.',
    '5 support messages.',
    '2 pieces of content.',
    '1 meeting summary.',
    
    'Without systems: several hours.',
    
    'With systems: much faster.',
    
    'This creates leverage.',
    
    'Leverage means doing more with less effort.',
    
    'That is one of AI’s biggest business advantages.',
    
    'Now let us discuss mistakes.',
    
    'Common mistake 1:',
    
    'Using AI randomly.',
    
    'No systems means no scale.',
    
    'Common mistake 2:',
    
    'Not saving good prompts.',
    
    'This forces repeated work.',
    
    'Common mistake 3:',
    
    'No human review.',
    
    'Even systems need oversight.',
    
    'Best workflow:',
    
    'Build prompt → Test prompt → Improve prompt → Save prompt → Reuse prompt',
    
    'This creates long-term efficiency.',
    
    'Now let us build the master workflow template.',
    
    'Template:',
    
    '“Act as [role]. Perform [task] for [business type]. Target [audience]. Follow [rules/constraints]. Format output as [format].”',
    
    'This single structure can be adapted for almost every business function.',
    
    'This is the real goal of business prompting.',
    
    'Not random usage.',
    
    'But scalable systems.',
    
    'Businesses that understand this usually move much faster than those who do not.',
  ],

  weakPrompt:
    'Do this task.',

  betterPrompt:
    'Act as a business operations assistant. Create a reusable workflow for handling customer support, weekly content creation, and meeting summaries using structured AI prompts.',

  commonMistake:
    'The biggest mistake is treating AI like a one-time tool instead of building reusable systems. This limits speed, consistency, and scalability.',

  practice:
    'Create three reusable prompt templates for your business: one for customer support, one for content creation, and one for internal operations. Save them in your prompt library and test them in real situations.',

  takeaway:
    'The real power of AI in business is not one-time usage. It is building repeatable prompt systems that create consistency, save time, and scale business operations.',
}
    ],
  },
]

function AIPromptsForBusiness() {
  return (
    <div className="space-y-8">
      {aiPromptsForBusinessModules.map((module, moduleIndex) => (
        <div key={module.title} className="glass-card p-6">
          <div className="mb-6">
            <span className="text-xs font-mono text-purple-400">
              Module {moduleIndex + 1} • {module.time} • {module.lessons.length} Lessons
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
                  <p key={index} className="text-slate-400 leading-relaxed mb-4">
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
                    <h4 className="text-red-300 font-semibold">Common Mistake</h4>
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
                    <p className="text-white font-medium">{lesson.takeaway}</p>
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

export default AIPromptsForBusiness
