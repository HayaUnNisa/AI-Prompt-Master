import type { Prompt } from '../types'

export const promptCategories = [
  'All',
  'Business',
  'Students',
  'Content Writing',
  'Coding',
  'Marketing',
  'Productivity',
  'Research',
  'Creative',
  'Personal',
]

export const prompts: Prompt[] = [
  // Business
  {
    id: '1',
    title: 'Professional Email Response',
    prompt: `You are a professional business writer. Write a polished response to the following email. 

Tone: Professional, clear, and concise
Length: Under 150 words
Avoid: Overly formal language, filler phrases, excessive apologies

Original email: [PASTE EMAIL HERE]

My key points to address: [LIST YOUR POINTS]`,
    category: 'Business',
    tool: 'ChatGPT / Claude',
    difficulty: 'Beginner',
    tags: ['Email', 'Business Writing', 'Communication'],
    useCase: 'Write professional email replies quickly',
  },
  {
    id: '2',
    title: 'Meeting Summary Generator',
    prompt: `Transform these meeting notes into a structured summary.

Meeting notes: [PASTE NOTES HERE]

Output format:
1. Meeting objective (one sentence)
2. Key decisions made (bullet list)
3. Action items with owners (table format: Action | Owner | Due Date)
4. Open questions or blockers
5. Next steps

Keep the language clear and direct.`,
    category: 'Business',
    tool: 'ChatGPT / Claude',
    difficulty: 'Beginner',
    tags: ['Meetings', 'Productivity', 'Documentation'],
    useCase: 'Convert messy meeting notes into organized summaries',
  },
  {
    id: '3',
    title: 'Business Proposal Template',
    prompt: `You are an experienced business consultant. Write a concise project proposal using this information:

Project: [PROJECT NAME]
Client/Stakeholder: [AUDIENCE]
Problem we are solving: [PROBLEM STATEMENT]
Our proposed solution: [SOLUTION]
Timeline: [DURATION]
Budget range: [BUDGET]

Structure the proposal as:
1. Executive Summary (2–3 sentences)
2. Problem Statement
3. Proposed Solution
4. Scope of Work
5. Timeline and Milestones
6. Investment
7. Next Steps

Tone: Professional, confident, client-focused`,
    category: 'Business',
    tool: 'ChatGPT / Claude',
    difficulty: 'Intermediate',
    tags: ['Proposals', 'Sales', 'Business Development'],
    useCase: 'Create structured business proposals',
  },
  // Students
  {
    id: '4',
    title: 'Concept Explanation for Beginners',
    prompt: `Explain [CONCEPT] as if I have absolutely no background in this subject.

Requirements:
- Start with a one-sentence plain English definition
- Use a real-world analogy I can relate to
- Break down any technical terms you need to introduce
- End with why this concept matters in practice

Do not assume prior knowledge. If you need to use technical terms, define them immediately.`,
    category: 'Students',
    tool: 'ChatGPT / Claude / Gemini',
    difficulty: 'Beginner',
    tags: ['Learning', 'Education', 'Explanation'],
    useCase: 'Understand complex topics in simple terms',
  },
  {
    id: '5',
    title: 'Practice Question Generator',
    prompt: `I am studying [TOPIC/SUBJECT] and preparing for [EXAM TYPE / PURPOSE].

Generate 10 practice questions that:
- Test conceptual understanding, not just memorization
- Range from basic recall to application-level thinking
- Include mix of question types: multiple choice, short answer, scenario-based

After listing all questions, provide the answers in a separate section so I can self-quiz without seeing them immediately.`,
    category: 'Students',
    tool: 'ChatGPT / Claude',
    difficulty: 'Beginner',
    tags: ['Study', 'Exam Prep', 'Practice'],
    useCase: 'Generate custom practice questions for any topic',
  },
  {
    id: '6',
    title: 'Essay Outline Builder',
    prompt: `Help me build a structured outline for an academic essay.

Essay topic: [TOPIC]
Thesis statement: [MY THESIS OR "help me develop one"]
Word count target: [LENGTH]
Academic level: [High School / Undergraduate / Graduate]
Subject area: [SUBJECT]

Create a detailed outline with:
1. Introduction (hook, background, thesis)
2. [NUMBER] body paragraphs with topic sentences and supporting point ideas
3. Conclusion strategy

For each body section, note 2–3 types of evidence I should look for.`,
    category: 'Students',
    tool: 'ChatGPT / Claude',
    difficulty: 'Beginner',
    tags: ['Essay', 'Academic Writing', 'Outline'],
    useCase: 'Plan and structure academic essays',
  },
  // Content Writing
  {
    id: '7',
    title: 'Blog Post Outline to Draft',
    prompt: `You are a professional content writer with expertise in [NICHE].

Write a complete blog post based on this outline:
Title: [TITLE]
Target audience: [AUDIENCE]
Primary keyword: [KEYWORD]
Desired length: [WORD COUNT]

Outline:
[PASTE YOUR OUTLINE]

Writing guidelines:
- Use short paragraphs (2–4 sentences max)
- Include one H2 every 300–400 words
- Write in second person ("you") when addressing the reader
- Tone: [CONVERSATIONAL / PROFESSIONAL / TECHNICAL]
- Do not use filler phrases or vague language`,
    category: 'Content Writing',
    tool: 'ChatGPT / Claude',
    difficulty: 'Intermediate',
    tags: ['Blogging', 'SEO', 'Content Marketing'],
    useCase: 'Transform an outline into a full blog post draft',
  },
  {
    id: '8',
    title: 'YouTube Video Script',
    prompt: `Write a YouTube video script on the topic: [TOPIC]

Channel style: [DESCRIBE YOUR CHANNEL TONE — e.g., educational, conversational, tech-focused]
Target audience: [AUDIENCE]
Video length target: [DURATION]

Structure:
1. Hook (first 15 seconds — make them stay)
2. Brief intro and what they will learn
3. Main content sections with natural transitions
4. Summary of key takeaways
5. Call to action (subscribe, comment, next video)

Include [B-ROLL] notes in brackets where visual cuts make sense.
Write it as spoken word — not essay format.`,
    category: 'Content Writing',
    tool: 'ChatGPT / Claude',
    difficulty: 'Intermediate',
    tags: ['YouTube', 'Video Script', 'Content Creation'],
    useCase: 'Write complete YouTube video scripts',
  },
  // Coding
  {
    id: '9',
    title: 'Code Explanation and Documentation',
    prompt: `You are a senior software engineer and technical writer.

Explain the following code to a developer with [EXPERIENCE LEVEL] experience:

\`\`\`[LANGUAGE]
[PASTE YOUR CODE HERE]
\`\`\`

Your explanation should include:
1. What this code does (plain language summary)
2. How it works step by step
3. Any potential edge cases or bugs
4. Suggestions for improvement (if any)
5. A JSDoc / docstring comment ready to paste above the function

Use concrete language. Avoid vague descriptions.`,
    category: 'Coding',
    tool: 'ChatGPT / Claude',
    difficulty: 'Intermediate',
    tags: ['Code Review', 'Documentation', 'Learning'],
    useCase: 'Get clear explanations and documentation for code',
  },
  {
    id: '10',
    title: 'Debug This Code',
    prompt: `I have a bug in my [LANGUAGE] code. Help me find and fix it.

What the code is supposed to do:
[DESCRIPTION OF INTENDED BEHAVIOR]

What is actually happening:
[DESCRIPTION OF THE BUG]

Error message (if any):
[PASTE ERROR]

My code:
\`\`\`
[PASTE CODE]
\`\`\`

Please:
1. Identify the bug and explain why it is happening
2. Show me the corrected code
3. Explain what you changed and why
4. Suggest how to prevent this type of bug in the future`,
    category: 'Coding',
    tool: 'ChatGPT / Claude',
    difficulty: 'Intermediate',
    tags: ['Debugging', 'Error Fixing', 'Code Review'],
    useCase: 'Debug code with clear explanations',
  },
  // Marketing
  {
    id: '11',
    title: 'Social Media Content Series',
    prompt: `You are a social media strategist specializing in [INDUSTRY/NICHE].

Create a 5-post content series for [PLATFORM: LinkedIn / Twitter / Instagram] on the topic: [TOPIC]

For each post include:
- The post text (within platform character limits)
- A suggested image description or visual concept
- Best posting time context (morning / midday / evening)
- Expected engagement goal (awareness / leads / community)

Tone: [DESCRIBE YOUR BRAND VOICE]
Audience: [TARGET AUDIENCE]
Avoid: Generic tips, clickbait headlines, excessive hashtags`,
    category: 'Marketing',
    tool: 'ChatGPT / Claude',
    difficulty: 'Intermediate',
    tags: ['Social Media', 'Content Calendar', 'Marketing'],
    useCase: 'Plan and write a social media content series',
  },
  {
    id: '12',
    title: 'Ad Copy Variations',
    prompt: `You are an experienced direct-response copywriter.

Write 5 variations of ad copy for the following:

Product/Service: [PRODUCT NAME]
Key benefit: [MAIN VALUE PROPOSITION]
Target audience: [WHO THIS IS FOR]
Platform: [META ADS / GOOGLE ADS / LINKEDIN]
Goal: [AWARENESS / CLICKS / CONVERSIONS]
Character/word limit: [LIMIT IF APPLICABLE]

For each variation, use a different hook strategy:
1. Problem-focused
2. Outcome-focused
3. Social proof angle
4. Curiosity-driven
5. Direct and factual

Label each variation and note which audience segment it best suits.`,
    category: 'Marketing',
    tool: 'ChatGPT / Claude',
    difficulty: 'Advanced',
    tags: ['Advertising', 'Copywriting', 'Paid Ads'],
    useCase: 'Generate multiple ad copy variations for testing',
  },
  // Productivity
  {
    id: '13',
    title: 'Weekly Planner and Prioritization',
    prompt: `Help me plan my week effectively.

My goals for this week:
[LIST 3–5 GOALS]

My tasks and commitments:
[PASTE YOUR TASK LIST]

Available working hours per day: [HOURS]

Please:
1. Prioritize tasks using the Eisenhower Matrix (Urgent/Important grid)
2. Suggest a daily focus theme for each day
3. Identify which tasks could be batched together
4. Flag anything that might be blocking other tasks
5. Create a simple day-by-day schedule

Be direct. Do not pad the output.`,
    category: 'Productivity',
    tool: 'ChatGPT / Claude',
    difficulty: 'Beginner',
    tags: ['Planning', 'Time Management', 'Focus'],
    useCase: 'Plan and prioritize your week with AI help',
  },
  // Research
  {
    id: '14',
    title: 'Research Summary and Analysis',
    prompt: `Summarize and analyze the following text for me.

My purpose: [WHY YOU ARE READING THIS — e.g., academic research, business decision, general learning]

Text to analyze:
[PASTE TEXT HERE]

Provide:
1. Core argument or main point (2–3 sentences)
2. Key supporting evidence or data points
3. Assumptions the author makes
4. Potential weaknesses or gaps in the argument
5. Questions this raises that I should explore further
6. How this relates to: [YOUR SPECIFIC CONTEXT OR TOPIC]`,
    category: 'Research',
    tool: 'ChatGPT / Claude',
    difficulty: 'Intermediate',
    tags: ['Research', 'Analysis', 'Academic'],
    useCase: 'Analyze and extract insights from research texts',
  },
  
    {
  id: '15',
  title: 'Cold Email Generator',
  prompt: `Act as an expert B2B sales strategist.

Your task is to write a highly personalized cold email for my offer.

Business details:
- Product/Service: [PRODUCT]
- Target audience: [AUDIENCE]
- Pain point: [PAIN POINT]
- Goal: [GOAL]

Requirements:
- Strong subject line under 8 words
- Personalized opening
- Show understanding of the pain point
- Present the solution naturally
- Keep under 120 words
- Strong CTA

Tone:
Professional, concise, persuasive.

Generate 3 variations.`,
  category: 'Business',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Sales', 'Email', 'Outreach'],
  useCase: 'Generate effective cold emails',
},
{
  id: '16',
  title: 'Client Proposal Builder',
  prompt: `Act as a senior business consultant.

Write a professional client proposal.

Details:
- Client: [CLIENT]
- Project: [PROJECT]
- Deliverables: [DELIVERABLES]
- Budget: [BUDGET]
- Timeline: [TIMELINE]

Structure:
1. Executive summary
2. Problem statement
3. Proposed solution
4. Deliverables
5. Pricing
6. Timeline
7. CTA

Make it polished and convincing.`,
  category: 'Business',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Proposal', 'Clients', 'Freelance'],
  useCase: 'Write client proposals',
},
{
  id: '17',
  title: 'Meeting Summary Generator',
  prompt: `Act as an executive assistant.

Convert these meeting notes into a professional summary.

Meeting notes:
[PASTE NOTES]

Output:
- Key discussion points
- Decisions made
- Action items
- Deadlines
- Next steps

Keep it organized and clear.`,
  category: 'Business',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Meetings', 'Summary', 'Notes'],
  useCase: 'Summarize meetings quickly',
},
{
  id: '18',
  title: 'Business Plan Generator',
  prompt: `Create a business plan for my startup idea.

Idea: [IDEA]

Include:
- Executive summary
- Business model
- Revenue streams
- Market analysis
- Competitor analysis
- Marketing strategy
- Risks
- Growth strategy`,
  category: 'Business',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Startup', 'Planning', 'Strategy'],
  useCase: 'Build business plans',
},
{
  id: '19',
  title: 'Sales Call Script',
  prompt: `Write a sales call script for:

Product: [PRODUCT]
Audience: [AUDIENCE]
Main objection: [OBJECTION]

Include:
- Opening
- Qualification questions
- Product pitch
- Handling objections
- Closing`,
  category: 'Business',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Sales', 'Calls', 'Closing'],
  useCase: 'Prepare for sales calls',
},
{
  id: '20',
  title: 'Competitor Analysis',
  prompt: `Analyze my competitors.

My business: [BUSINESS]
Competitors: [COMPETITORS]

Compare:
- Strengths
- Weaknesses
- Pricing
- Positioning
- Opportunities I can exploit`,
  category: 'Business',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Competitors', 'Market', 'Research'],
  useCase: 'Study competitors',
},
{
  id: '21',
  title: 'Hiring Interview Questions',
  prompt: `Generate interview questions for hiring a [ROLE].

Focus on:
- Technical skills
- Communication
- Problem solving
- Experience
- Culture fit

Include ideal answers.`,
  category: 'Business',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Hiring', 'Interviews', 'HR'],
  useCase: 'Prepare interviews',
},
{
  id: '22',
  title: 'Customer Persona Builder',
  prompt: `Build a detailed customer persona.

Business: [BUSINESS]

Include:
- Demographics
- Goals
- Pain points
- Buying habits
- Motivations
- Objections`,
  category: 'Business',
  tool: 'Claude',
  difficulty: 'Intermediate',
  tags: ['Customers', 'Persona', 'Marketing'],
  useCase: 'Understand customers',
},
{
  id: '23',
  title: 'Follow-Up Email Writer',
  prompt: `Write a follow-up email after:

Situation: [SITUATION]

Goal:
[GOAL]

Requirements:
- Friendly
- Professional
- Clear CTA
- Short`,
  category: 'Business',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Email', 'Follow-up', 'Clients'],
  useCase: 'Send better follow-ups',
},
{
  id: '24',
  title: 'Negotiation Strategy Builder',
  prompt: `Help me prepare for a negotiation.

Context:
[CONTEXT]

My goal:
[GOAL]

Other side likely wants:
[OTHER SIDE]

Generate:
- Best strategy
- Leverage points
- Risks
- Questions to ask
- Best possible outcomes`,
  category: 'Business',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Negotiation', 'Deals', 'Business'],
  useCase: 'Prepare negotiations',
},
{
  id: '25',
  title: 'Productivity System for Business',
  prompt: `Build me a productivity system as a business owner.

My responsibilities:
[TASKS]

My biggest problem:
[PROBLEM]

Create:
- Daily structure
- Weekly structure
- Prioritization system
- Delegation system
- Focus system`,
  category: 'Business',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Productivity', 'Business', 'Systems'],
  useCase: 'Improve productivity',
},
{
  id: '26',
  title: 'Study Plan Generator',
  prompt: `Act as an academic coach.

Create a personalized study plan for:

Subject: [SUBJECT]
Exam date: [DATE]
Current level: [LEVEL]
Daily study hours: [HOURS]

Requirements:
- Break into weekly goals
- Daily tasks
- Revision schedule
- Mock test schedule
- Weak topic focus

Make it realistic and effective.`,
  category: 'Students',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Study', 'Planning', 'Exams'],
  useCase: 'Create structured study plans',
},
{
  id: '27',
  title: 'Essay Writing Assistant',
  prompt: `Act as an academic writing expert.

Help me write an essay.

Topic: [TOPIC]
Word count: [COUNT]
Academic level: [LEVEL]

Generate:
- Thesis statement
- Introduction
- Body paragraph ideas
- Supporting evidence suggestions
- Conclusion`,
  category: 'Students',
  tool: 'Claude',
  difficulty: 'Intermediate',
  tags: ['Essay', 'Writing', 'Academic'],
  useCase: 'Build essay structure',
},
{
  id: '28',
  title: 'Concept Explainer',
  prompt: `Explain this topic in the simplest way possible:

[TOPIC]

Requirements:
- Beginner-friendly
- Real-life examples
- Easy analogies
- Important terms explained
- Why it matters`,
  category: 'Students',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Learning', 'Concepts', 'Education'],
  useCase: 'Understand difficult concepts',
},
{
  id: '29',
  title: 'Exam Question Generator',
  prompt: `Generate exam-style questions for:

Subject: [SUBJECT]
Topic: [TOPIC]

Include:
- MCQs
- Short questions
- Long questions
- Scenario-based questions

Provide answers separately.`,
  category: 'Students',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Questions', 'Exams', 'Practice'],
  useCase: 'Practice for exams',
},
{
  id: '30',
  title: 'Research Paper Helper',
  prompt: `Help me plan a research paper.

Topic: [TOPIC]

Generate:
- Research questions
- Thesis idea
- Outline
- Sources to look for
- Methodology suggestions`,
  category: 'Students',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Research', 'Paper', 'Academic'],
  useCase: 'Plan research papers',
},
{
  id: '31',
  title: 'Notes Summarizer',
  prompt: `Summarize these notes into key points:

[NOTES]

Requirements:
- Simplify language
- Keep important ideas
- Create quick revision format`,
  category: 'Students',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Notes', 'Summary', 'Study'],
  useCase: 'Simplify study notes',
},
{
  id: '32',
  title: 'Presentation Builder',
  prompt: `Create a presentation structure for:

Topic: [TOPIC]

Include:
- Slide titles
- Main points
- Visual suggestions
- Speaking notes`,
  category: 'Students',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Presentation', 'Slides', 'School'],
  useCase: 'Build presentations',
},
{
  id: '33',
  title: 'Scholarship Application Writer',
  prompt: `Write a scholarship application.

My background:
[BACKGROUND]

Achievements:
[ACHIEVEMENTS]

Goals:
[GOALS]

Tone:
Professional, honest, strong.`,
  category: 'Students',
  tool: 'Claude',
  difficulty: 'Intermediate',
  tags: ['Scholarship', 'Applications', 'Writing'],
  useCase: 'Write scholarship applications',
},
{
  id: '34',
  title: 'Flashcard Generator',
  prompt: `Turn these notes into flashcards:

[NOTES]

Requirements:
- Question-answer format
- Focus on important facts
- Easy to revise`,
  category: 'Students',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Flashcards', 'Memory', 'Study'],
  useCase: 'Create flashcards',
},
{
  id: '35',
  title: 'Career Path Advisor',
  prompt: `Help me choose a career path.

My interests:
[INTERESTS]

Skills:
[SKILLS]

Goals:
[GOALS]

Analyze:
- Best career options
- Required skills
- Growth potential
- Learning roadmap`,
  category: 'Students',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Career', 'Planning', 'Future'],
  useCase: 'Choose career direction',
},
{
  id: '36',
  title: 'SEO Blog Writer',
  prompt: `Act as an expert SEO content strategist.

Write a complete blog post on:

Topic: [TOPIC]
Target keyword: [KEYWORD]
Audience: [AUDIENCE]
Word count: [COUNT]

Requirements:
- SEO optimized
- Strong H1, H2, H3 structure
- Beginner-friendly
- Practical examples
- FAQ section
- Strong conclusion

Make it rank-worthy and engaging.`,
  category: 'Content Writing',
  tool: 'ChatGPT',
  difficulty: 'Advanced',
  tags: ['SEO', 'Blogging', 'Writing'],
  useCase: 'Write complete SEO blogs',
},
{
  id: '37',
  title: 'YouTube Script Generator',
  prompt: `Write a YouTube script for:

Topic: [TOPIC]
Audience: [AUDIENCE]
Length: [MINUTES]

Structure:
- Hook
- Intro
- Main points
- Examples
- CTA

Requirements:
Keep it conversational and engaging.`,
  category: 'Content Writing',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['YouTube', 'Script', 'Video'],
  useCase: 'Create YouTube scripts',
},
{
  id: '38',
  title: 'Newsletter Writer',
  prompt: `Write a weekly newsletter about:

Topic: [TOPIC]

Requirements:
- Strong subject line
- Engaging intro
- Valuable content
- Clear CTA
- Professional tone`,
  category: 'Content Writing',
  tool: 'Claude',
  difficulty: 'Intermediate',
  tags: ['Newsletter', 'Email', 'Writing'],
  useCase: 'Write newsletters',
},
{
  id: '39',
  title: 'Hook Generator',
  prompt: `Generate 25 powerful content hooks for:

Topic: [TOPIC]

Requirements:
- Attention-grabbing
- Curiosity-driven
- Short
- Suitable for social media`,
  category: 'Content Writing',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Hooks', 'Content', 'Social'],
  useCase: 'Improve content openings',
},
{
  id: '40',
  title: 'Storytelling Framework',
  prompt: `Turn this idea into a story:

Idea: [IDEA]

Structure:
- Setup
- Conflict
- Build-up
- Climax
- Resolution

Make it emotional and engaging.`,
  category: 'Content Writing',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Storytelling', 'Writing', 'Creative'],
  useCase: 'Build strong stories',
},
{
  id: '41',
  title: 'Podcast Script Builder',
  prompt: `Create a podcast script for:

Topic: [TOPIC]
Length: [TIME]

Requirements:
- Strong opening
- Clear transitions
- Valuable content
- Closing CTA`,
  category: 'Content Writing',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Podcast', 'Script', 'Audio'],
  useCase: 'Generate podcast scripts',
},
{
  id: '42',
  title: 'Product Description Writer',
  prompt: `Write product descriptions for:

Product: [PRODUCT]

Requirements:
- Focus on benefits
- Persuasive language
- Clear features
- Strong CTA`,
  category: 'Content Writing',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Products', 'Sales', 'Writing'],
  useCase: 'Write product descriptions',
},
{
  id: '43',
  title: 'Landing Page Copywriter',
  prompt: `Write landing page copy for:

Product/Service: [PRODUCT]

Include:
- Headline
- Subheadline
- Problem
- Solution
- Benefits
- CTA
- FAQs`,
  category: 'Content Writing',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Landing Page', 'Copywriting', 'Sales'],
  useCase: 'Write landing pages',
},
{
  id: '44',
  title: 'Case Study Writer',
  prompt: `Write a case study.

Client: [CLIENT]
Problem: [PROBLEM]
Solution: [SOLUTION]
Results: [RESULTS]

Structure:
- Challenge
- Process
- Results
- Lessons`,
  category: 'Content Writing',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Case Study', 'Writing', 'Business'],
  useCase: 'Create case studies',
},
{
  id: '45',
  title: 'Twitter Thread Writer',
  prompt: `Turn this topic into a 10-post Twitter/X thread:

[TOPIC]

Requirements:
- Strong hook
- Value-packed
- Simple language
- Strong ending`,
  category: 'Content Writing',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Twitter', 'Threads', 'Writing'],
  useCase: 'Write Twitter threads',
},
{
  id: '46',
  title: 'Bug Fix Assistant',
  prompt: `Act as a senior software engineer.

Debug this code:

[PASTE CODE]

Context:
What it should do: [EXPECTED BEHAVIOR]
What is happening: [ACTUAL BEHAVIOR]

Your task:
1. Find the bug
2. Explain why it happens
3. Fix it
4. Suggest best practices to avoid it`,
  category: 'Coding',
  tool: 'ChatGPT / Claude',
  difficulty: 'Intermediate',
  tags: ['Debugging', 'Code', 'Fix'],
  useCase: 'Find and fix bugs',
},
{
  id: '47',
  title: 'Code Explainer',
  prompt: `Explain this code step by step:

[CODE]

Requirements:
- Beginner-friendly
- Explain logic
- Explain functions
- Explain variables
- Explain output`,
  category: 'Coding',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Code', 'Learning', 'Explanation'],
  useCase: 'Understand code better',
},
{
  id: '48',
  title: 'React Component Generator',
  prompt: `Generate a React component for:

Feature: [FEATURE]

Requirements:
- TailwindCSS
- Responsive
- Reusable
- Clean code
- Best practices`,
  category: 'Coding',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['React', 'Frontend', 'UI'],
  useCase: 'Build React components',
},
{
  id: '49',
  title: 'Full Stack App Planner',
  prompt: `Plan a full-stack app.

Idea: [IDEA]

Generate:
- Frontend stack
- Backend stack
- Database structure
- Authentication system
- API routes
- Deployment plan`,
  category: 'Coding',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Fullstack', 'Architecture', 'Planning'],
  useCase: 'Plan applications',
},
{
  id: '50',
  title: 'API Documentation Generator',
  prompt: `Generate API documentation.

Endpoint details:
[DETAILS]

Include:
- Method
- Request body
- Response body
- Error responses
- Example requests`,
  category: 'Coding',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['API', 'Docs', 'Backend'],
  useCase: 'Write API docs',
},
{
  id: '51',
  title: 'SQL Query Builder',
  prompt: `Write SQL queries for this task:

[TASK]

Schema:
[DATABASE SCHEMA]

Requirements:
- Efficient
- Optimized
- Explain the query`,
  category: 'Coding',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['SQL', 'Database', 'Queries'],
  useCase: 'Build SQL queries',
},
{
  id: '52',
  title: 'Code Refactor Assistant',
  prompt: `Refactor this code for better:

[CODE]

Focus:
- Readability
- Performance
- Scalability
- Best practices`,
  category: 'Coding',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Refactor', 'Optimization', 'Code'],
  useCase: 'Improve code quality',
},
{
  id: '53',
  title: 'Portfolio Website Generator',
  prompt: `Create a portfolio website structure.

Profession: [PROFESSION]

Include:
- Sections
- Layout
- Design ideas
- Features
- Tech stack`,
  category: 'Coding',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Portfolio', 'Web', 'Frontend'],
  useCase: 'Build portfolios',
},
{
  id: '54',
  title: 'Python Automation Script',
  prompt: `Write a Python automation script for:

[TASK]

Requirements:
- Clean code
- Explain how it works
- Mention dependencies`,
  category: 'Coding',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Python', 'Automation', 'Scripts'],
  useCase: 'Automate tasks',
},
{
  id: '55',
  title: 'Backend API Builder',
  prompt: `Generate a backend API.

Project: [PROJECT]

Requirements:
- Authentication
- CRUD routes
- Validation
- Error handling
- Database integration`,
  category: 'Coding',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Backend', 'API', 'Development'],
  useCase: 'Build backend systems',
},
{
  id: '56',
  title: 'Instagram Carousel Creator',
  prompt: `Act as a social media strategist.

Create a 7-slide Instagram carousel for:

Topic: [TOPIC]
Audience: [AUDIENCE]

Requirements:
- Strong hook on slide 1
- Educational content
- Clear progression
- CTA on final slide
- Short and simple text
- High engagement focused`,
  category: 'Marketing',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Instagram', 'Carousel', 'Social Media'],
  useCase: 'Create educational carousels',
},
{
  id: '57',
  title: 'Viral Hook Generator',
  prompt: `Generate 30 high-converting hooks for:

Topic: [TOPIC]

Requirements:
- Curiosity driven
- Emotional
- Strong pattern interrupts
- Suitable for Reels/TikTok/X`,
  category: 'Marketing',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Hooks', 'Content', 'Virality'],
  useCase: 'Write stronger content hooks',
},
{
  id: '58',
  title: 'TikTok Script Builder',
  prompt: `Write a short TikTok script for:

Topic: [TOPIC]

Structure:
- Hook (3 sec)
- Problem
- Solution
- CTA

Requirements:
Fast-paced and engaging.`,
  category: 'Marketing',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['TikTok', 'Scripts', 'Short Form'],
  useCase: 'Create short-form videos',
},
{
  id: '59',
  title: 'Ad Copy Generator',
  prompt: `Write 5 ad copy variations for:

Product: [PRODUCT]
Audience: [AUDIENCE]
Goal: [GOAL]

Angles:
- Pain point
- Benefits
- Social proof
- Urgency
- Curiosity`,
  category: 'Marketing',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Ads', 'Copywriting', 'Sales'],
  useCase: 'Create ad variations',
},
{
  id: '60',
  title: 'Email Funnel Creator',
  prompt: `Create a 5-email funnel for:

Product: [PRODUCT]

Include:
1. Welcome email
2. Problem awareness
3. Solution email
4. Trust building
5. Offer CTA`,
  category: 'Marketing',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Email', 'Funnels', 'Marketing'],
  useCase: 'Build email funnels',
},
{
  id: '61',
  title: 'LinkedIn Post Generator',
  prompt: `Write a LinkedIn post on:

Topic: [TOPIC]

Requirements:
- Professional
- Personal touch
- Valuable insight
- Clear CTA`,
  category: 'Marketing',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['LinkedIn', 'Branding', 'Posts'],
  useCase: 'Write LinkedIn posts',
},
{
  id: '62',
  title: 'Twitter Thread Builder',
  prompt: `Turn this topic into a 10-post Twitter thread:

[TOPIC]

Requirements:
- Strong opening
- Value packed
- Clear structure
- Strong final CTA`,
  category: 'Marketing',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Twitter', 'Threads', 'Content'],
  useCase: 'Write Twitter threads',
},
{
  id: '63',
  title: 'Content Calendar Generator',
  prompt: `Build a 30-day content calendar for:

Brand: [BRAND]
Niche: [NICHE]

Requirements:
- Daily ideas
- Content types
- Hooks
- CTA suggestions`,
  category: 'Marketing',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Calendar', 'Content', 'Planning'],
  useCase: 'Plan content consistently',
},
{
  id: '64',
  title: 'Lead Magnet Builder',
  prompt: `Create a lead magnet for:

Business: [BUSINESS]

Requirements:
- Solve one problem
- High perceived value
- Easy to consume
- Lead generation focused`,
  category: 'Marketing',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Lead Magnet', 'Funnels', 'Leads'],
  useCase: 'Generate lead magnets',
},
{
  id: '65',
  title: 'Competitor Content Analysis',
  prompt: `Analyze my competitor’s content strategy.

Competitor: [COMPETITOR]

Break down:
- Content style
- Hooks
- Formats
- Weaknesses
- Opportunities`,
  category: 'Marketing',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Competitor', 'Research', 'Content'],
  useCase: 'Study competitor content',
},
{
  id: '66',
  title: 'Weekly Planning System',
  prompt: `Act as a productivity coach.

Help me plan my week.

My goals:
[GOALS]

My tasks:
[TASKS]

Available time:
[TIME]

Create:
- Weekly priorities
- Daily schedule
- Focus blocks
- Low-energy tasks
- Review system`,
  category: 'Productivity',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Planning', 'Weekly', 'Focus'],
  useCase: 'Plan your week effectively',
},
{
  id: '67',
  title: 'Deep Work Planner',
  prompt: `Create a deep work plan for:

Task: [TASK]
Time available: [TIME]
Distractions: [DISTRACTIONS]

Include:
- Preparation steps
- Focus blocks
- Breaks
- Progress checkpoints`,
  category: 'Productivity',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Deep Work', 'Focus', 'Productivity'],
  useCase: 'Plan focused work sessions',
},
{
  id: '68',
  title: 'Task Prioritization Matrix',
  prompt: `Help me prioritize these tasks:

[TASKS]

Use:
- Urgent vs important
- Impact vs effort
- Deadline pressure

Give me the best order to complete them.`,
  category: 'Productivity',
  tool: 'Claude',
  difficulty: 'Intermediate',
  tags: ['Prioritization', 'Tasks', 'Planning'],
  useCase: 'Prioritize tasks clearly',
},
{
  id: '69',
  title: 'Procrastination Breaker',
  prompt: `Help me stop procrastinating on:

Task: [TASK]

Explain:
- Why I may be avoiding it
- How to make it easier
- First tiny step
- 30-minute action plan`,
  category: 'Productivity',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Procrastination', 'Focus', 'Action'],
  useCase: 'Start difficult tasks',
},
{
  id: '70',
  title: 'Daily Routine Builder',
  prompt: `Build a productive daily routine for me.

My goals:
[GOALS]

My current routine:
[ROUTINE]

My available time:
[TIME]

Create:
- Morning routine
- Work blocks
- Breaks
- Evening review`,
  category: 'Productivity',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Routine', 'Habits', 'Planning'],
  useCase: 'Build better daily routines',
},
{
  id: '71',
  title: 'Focus Reset Plan',
  prompt: `Create a focus reset plan.

Problem:
[PROBLEM]

Current distractions:
[DISTRACTIONS]

Give me:
- Immediate reset steps
- Environment changes
- 1-hour focus plan
- Long-term prevention tips`,
  category: 'Productivity',
  tool: 'Claude',
  difficulty: 'Intermediate',
  tags: ['Focus', 'Distractions', 'Reset'],
  useCase: 'Regain lost focus',
},
{
  id: '72',
  title: 'Goal Breakdown Assistant',
  prompt: `Break this goal into an actionable plan:

Goal:
[GOAL]

Timeline:
[TIMELINE]

Include:
- Milestones
- Weekly tasks
- Daily actions
- Progress tracking method`,
  category: 'Productivity',
  tool: 'ChatGPT',
  difficulty: 'Beginner',
  tags: ['Goals', 'Planning', 'Execution'],
  useCase: 'Turn goals into action',
},
{
  id: '73',
  title: 'Time Audit Assistant',
  prompt: `Analyze how I spend my time.

My daily activities:
[ACTIVITIES]

Find:
- Time leaks
- Low-value tasks
- Better schedule
- Habits to remove
- Habits to add`,
  category: 'Productivity',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Time Audit', 'Habits', 'Optimization'],
  useCase: 'Improve time management',
},
{
  id: '74',
  title: 'Burnout Prevention Plan',
  prompt: `Create a burnout prevention plan.

My workload:
[WORKLOAD]

Stress level:
[LEVEL]

Responsibilities:
[RESPONSIBILITIES]

Include:
- Warning signs
- Workload adjustments
- Rest blocks
- Boundaries
- Recovery plan`,
  category: 'Productivity',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Burnout', 'Workload', 'Balance'],
  useCase: 'Prevent burnout',
},
{
  id: '75',
  title: 'Decision Making Framework',
  prompt: `Help me make a clear decision.

Decision:
[DECISION]

Options:
[OPTIONS]

Evaluate:
- Pros and cons
- Risks
- Long-term impact
- Best choice
- Next step`,
  category: 'Productivity',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Decisions', 'Clarity', 'Planning'],
  useCase: 'Make better decisions',
},
{
  id: '76',
  title: 'Advanced Market Research Engine',
  prompt: `Act as a senior market intelligence analyst with 15+ years of experience.

Your task is to conduct deep market research for:

Industry/Niche: [NICHE]
Target geography: [LOCATION]
Business model: [MODEL]

Research and analyze:

1. Market size
- Current valuation
- Growth rate (CAGR)
- Future projections

2. Customer demand
- Main customer pain points
- Buying behavior
- Emotional triggers

3. Competitor landscape
- Top 5 competitors
- Their strengths
- Their weaknesses
- Pricing strategies
- Positioning angles

4. Opportunities
- Underserved gaps
- Emerging trends
- High-demand segments

5. Risks
- Market saturation
- Regulations
- Consumer shifts

Output format:
- Executive summary
- Detailed breakdown
- Actionable recommendations
- Market entry strategy`,
  category: 'Research',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Market Research', 'Business', 'Strategy'],
  useCase: 'Conduct professional market research',
},
{
  id: '77',
  title: 'Competitor Intelligence System',
  prompt: `Act as a competitive intelligence strategist.

Analyze these competitors:

[COMPETITORS]

My business:
[BUSINESS]

Break down:

1. Positioning strategy
2. Pricing model
3. Marketing channels
4. Content strategy
5. Customer reviews
6. Sales funnels
7. Strengths
8. Weaknesses
9. Emotional triggers they use
10. Gaps I can exploit

Then build:
- My differentiation strategy
- My positioning angle
- My competitive advantage`,
  category: 'Research',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Competitor Analysis', 'Strategy', 'Research'],
  useCase: 'Analyze competitors deeply',
},
{
  id: '78',
  title: 'Trend Forecasting Engine',
  prompt: `Act as a future trend analyst.

Industry:
[INDUSTRY]

Forecast the next 3 years.

Analyze:

- Consumer behavior shifts
- Technology disruptions
- Market trends
- Social movements
- Economic influences
- Opportunities for businesses
- Threats

Provide:

1. What is growing
2. What is dying
3. What to invest in
4. What to avoid
5. Early mover advantages`,
  category: 'Research',
  tool: 'ChatGPT',
  difficulty: 'Advanced',
  tags: ['Trends', 'Forecasting', 'Research'],
  useCase: 'Predict future trends',
},
{
  id: '79',
  title: 'Customer Psychology Breakdown',
  prompt: `Act as a consumer psychology expert.

Product:
[PRODUCT]

Target audience:
[AUDIENCE]

Analyze:

- Core desires
- Deep fears
- Frustrations
- Motivations
- Hidden objections
- Buying triggers
- Trust factors
- What makes them hesitate

Output:
- Psychological profile
- Best messaging angles
- Best emotional hooks
- Best offer strategy`,
  category: 'Research',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Psychology', 'Customers', 'Marketing'],
  useCase: 'Understand customer psychology',
},
{
  id: '80',
  title: 'Business Opportunity Finder',
  prompt: `Act as a startup strategist.

Find hidden opportunities in:

Industry: [INDUSTRY]

Analyze:

- Pain points
- Inefficiencies
- Untapped markets
- New trends
- Automation opportunities
- Premium service gaps

Generate:

10 profitable business ideas with:
- Why it works
- Who it serves
- Monetization model
- Difficulty level`,
  category: 'Research',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Business Ideas', 'Opportunities', 'Research'],
  useCase: 'Find profitable opportunities',
},
{
  id: '81',
  title: 'Novel Plot Architect',
  prompt: `Act as a bestselling fiction writer.

Build a complete novel structure.

Genre: [GENRE]
Theme: [THEME]
Main idea: [IDEA]

Generate:

- Main character arc
- Supporting characters
- Opening scene
- Major conflict
- Midpoint twist
- Climax
- Resolution
- Emotional journey
- Subplots

Make it commercially strong and emotionally engaging.`,
  category: 'Creative',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Novel', 'Storytelling', 'Writing'],
  useCase: 'Build full novels',
},
{
  id: '82',
  title: 'Worldbuilding Master Prompt',
  prompt: `Act as a fantasy worldbuilding expert.

Build a world based on:

Theme: [THEME]

Generate:

- Geography
- Kingdoms
- Political systems
- Religion
- Economy
- Technology level
- Conflicts
- History
- Unique cultural systems
- Rules of the world`,
  category: 'Creative',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Worldbuilding', 'Fantasy', 'Creative'],
  useCase: 'Build fictional worlds',
},
{
  id: '83',
  title: 'Character Psychology Builder',
  prompt: `Act as a character psychologist.

Build a deep fictional character.

Role:
[ROLE]

Generate:

- Childhood
- Trauma
- Beliefs
- Personality
- Fears
- Goals
- Hidden desires
- Weaknesses
- Internal conflicts
- Character growth path`,
  category: 'Creative',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Characters', 'Writing', 'Psychology'],
  useCase: 'Build realistic characters',
},
{
  id: '84',
  title: 'Film Script Architect',
  prompt: `Act as a Hollywood screenwriter.

Write a short film structure.

Theme: [THEME]

Include:

- Hook scene
- Character setup
- Conflict
- Escalation
- Twist
- Emotional climax
- Resolution

Use cinematic pacing and strong emotional beats.`,
  category: 'Creative',
  tool: 'ChatGPT',
  difficulty: 'Advanced',
  tags: ['Film', 'Screenwriting', 'Creative'],
  useCase: 'Build short films',
},
{
  id: '85',
  title: 'Emotional Storytelling Framework',
  prompt: `Turn this idea into a deeply emotional story:

[IDEA]

Requirements:

- Strong emotional stakes
- Character transformation
- Conflict escalation
- Powerful climax
- Memorable ending

Use emotional triggers like:
loss, hope, fear, love, regret, sacrifice.`,
  category: 'Creative',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Storytelling', 'Emotion', 'Writing'],
  useCase: 'Write emotional stories',
},
{
  id: '86',
  title: 'Life Purpose Discovery System',
  prompt: `Act as a life coach.

Help me discover my life purpose.

My details:
[DETAILS]

Analyze:

- Strengths
- Interests
- Core values
- Energy patterns
- Skills
- What excites me
- What drains me

Find:
- My ideal path
- Career alignment
- Growth areas
- Purpose direction`,
  category: 'Personal',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Purpose', 'Life', 'Growth'],
  useCase: 'Find life direction',
},
{
  id: '87',
  title: 'Identity Transformation Blueprint',
  prompt: `Act as a personal transformation coach.

Current self:
[CURRENT]

Desired self:
[DESIRED]

Build:

- Identity shifts needed
- Habits required
- Beliefs to remove
- Skills to build
- Daily actions
- Weekly checkpoints
- Mindset rewiring plan`,
  category: 'Personal',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Identity', 'Growth', 'Transformation'],
  useCase: 'Transform yourself',
},
{
  id: '88',
  title: 'Deep Self Reflection Engine',
  prompt: `Act as a psychologist.

Guide me through deep self-reflection.

Ask me 20 powerful questions that uncover:
- fears
- desires
- patterns
- traumas
- habits
- limiting beliefs
- emotional blocks`,
  category: 'Personal',
  tool: 'ChatGPT',
  difficulty: 'Advanced',
  tags: ['Reflection', 'Psychology', 'Growth'],
  useCase: 'Deep self-analysis',
},
{
  id: '89',
  title: 'Decision Framework Pro',
  prompt: `Help me make a major life decision.

Decision:
[DECISION]

Options:
[OPTIONS]

Break down:

- Risks
- Rewards
- Long-term impact
- Worst-case scenarios
- Opportunity cost
- Alignment with goals

Recommend the best path.`,
  category: 'Personal',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Decision', 'Clarity', 'Strategy'],
  useCase: 'Make life decisions',
},
{
  id: '90',
  title: 'Habit Rewiring System',
  prompt: `Help me replace this habit:

Bad habit:
[HABIT]

Goal:
[GOAL]

Build:
- Trigger analysis
- Replacement behavior
- Reward system
- Tracking system
- Relapse prevention`,
  category: 'Personal',
  tool: 'ChatGPT',
  difficulty: 'Advanced',
  tags: ['Habits', 'Behavior', 'Growth'],
  useCase: 'Change habits',
},
{
  id: '91',
  title: 'Relationship Clarity Analyzer',
  prompt: `Help me analyze this relationship:

[DETAILS]

Analyze:
- Communication patterns
- Emotional health
- Red flags
- Strengths
- What needs improvement`,
  category: 'Personal',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Relationships', 'Clarity', 'Growth'],
  useCase: 'Understand relationships',
},
{
  id: '92',
  title: 'Confidence Rebuild Blueprint',
  prompt: `Help me rebuild confidence.

My struggles:
[STRUGGLES]

Create:
- Root cause analysis
- Daily confidence exercises
- Belief rewiring
- Social challenges
- Long-term confidence system`,
  category: 'Personal',
  tool: 'ChatGPT',
  difficulty: 'Advanced',
  tags: ['Confidence', 'Growth', 'Mindset'],
  useCase: 'Rebuild confidence',
},
{
  id: '93',
  title: 'Personal Finance Masterplan',
  prompt: `Act as a financial strategist.

My finances:

Income: [INCOME]
Expenses: [EXPENSES]
Goals: [GOALS]

Build:
- Budget system
- Savings plan
- Investment plan
- Emergency fund plan
- Wealth strategy`,
  category: 'Personal',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Finance', 'Money', 'Planning'],
  useCase: 'Plan finances better',
},
{
  id: '94',
  title: 'Future Self Visualization',
  prompt: `Guide me through a future self visualization.

My goals:
[GOALS]

Help me clearly define:
- Who I become
- What my life looks like
- What habits I have
- What I stopped doing`,
  category: 'Personal',
  tool: 'ChatGPT',
  difficulty: 'Intermediate',
  tags: ['Future', 'Vision', 'Growth'],
  useCase: 'Visualize future self',
},
{
  id: '95',
  title: 'Burnout Recovery Plan',
  prompt: `Build me a burnout recovery system.

Symptoms:
[SYMPTOMS]

Workload:
[WORKLOAD]

Include:
- Recovery plan
- Boundaries
- Energy restoration
- Lifestyle adjustments`,
  category: 'Personal',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Burnout', 'Recovery', 'Health'],
  useCase: 'Recover from burnout',
},
{
  id: '96',
  title: 'Emotional Intelligence Coach',
  prompt: `Help me improve emotional intelligence.

My struggles:
[STRUGGLES]

Build:
- Awareness exercises
- Emotional regulation
- Social skills improvement
- Conflict management`,
  category: 'Personal',
  tool: 'ChatGPT',
  difficulty: 'Advanced',
  tags: ['EQ', 'Emotions', 'Growth'],
  useCase: 'Improve emotional intelligence',
},
{
  id: '97',
  title: 'Mindset Reprogramming System',
  prompt: `Identify my limiting beliefs and reprogram them.

Beliefs:
[BELIEFS]

Build:
- Root causes
- New beliefs
- Daily reinforcement
- Action steps`,
  category: 'Personal',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Mindset', 'Beliefs', 'Growth'],
  useCase: 'Reprogram mindset',
},
{
  id: '98',
  title: 'Discipline Builder',
  prompt: `Help me build discipline.

My weak areas:
[AREAS]

Create:
- Daily system
- Accountability structure
- Reward system
- Punishment system
- Progress system`,
  category: 'Personal',
  tool: 'ChatGPT',
  difficulty: 'Advanced',
  tags: ['Discipline', 'Habits', 'Growth'],
  useCase: 'Build discipline',
},
{
  id: '99',
  title: 'Life Reset Blueprint',
  prompt: `Help me reset my life.

Current situation:
[SITUATION]

Analyze:
- What to remove
- What to fix
- What to improve
- First 30 days plan`,
  category: 'Personal',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Reset', 'Life', 'Growth'],
  useCase: 'Reset life direction',
},
{
  id: '100',
  title: 'Legacy Vision Builder',
  prompt: `Help me build my long-term life vision.

Think in:
- 5 years
- 10 years
- 20 years

Build:
- Vision
- Career
- Relationships
- Wealth
- Health
- Legacy`,
  category: 'Personal',
  tool: 'Claude',
  difficulty: 'Advanced',
  tags: ['Legacy', 'Vision', 'Life'],
  useCase: 'Build long-term vision',
},
]
