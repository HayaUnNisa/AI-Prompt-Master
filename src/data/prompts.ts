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
    title: 'Competitive Research Framework',
    prompt: `Help me research and analyze a competitor.

Competitor: [COMPANY OR PRODUCT NAME]
My company/product: [YOUR COMPANY OR PRODUCT]
Industry: [INDUSTRY]

Based on publicly available information, analyze:
1. Their apparent positioning and target market
2. Key products or services and pricing (if known)
3. Messaging and value propositions they emphasize
4. What they seem to do well
5. Potential gaps or weaknesses
6. How they differ from us

Then provide:
- 3 things we could learn from them
- 2 opportunities they appear to be missing
- 1 key differentiator we should emphasize

Note what you are confident about vs. what is inference.`,
    category: 'Research',
    tool: 'ChatGPT / Gemini',
    difficulty: 'Advanced',
    tags: ['Competitive Analysis', 'Market Research', 'Strategy'],
    useCase: 'Conduct structured competitor research',
  },
]
