// The real Aicadmia ebooks. Files live in /public/resources.
// To sell one instead of giving it away: set price (e.g. '$9') and buyUrl (your Gumroad/Payhip link).

export interface LibraryBook {
  slug: string
  title: string
  kind: 'Cheatsheet' | 'Template pack' | 'Guide' | 'Checklist' | 'Playbook' | 'Reference card' | 'Starter kit'
  forWho: string
  description: string
  inside: string[]
  pages: number
  sizeMb: number
  file: string
  /** Cover tone — keeps the shelf varied without neon */
  tone: 'ink' | 'accent' | 'lavender' | 'cream'
  price?: string
  buyUrl?: string
}

export const library: LibraryBook[] = [
  {
    slug: 'prompt-engineering-cheatsheet',
    title: 'The Prompt Engineering Cheatsheet',
    kind: 'Cheatsheet',
    forWho: 'Beginners',
    description: 'The formulas and frameworks behind good prompts, on a few pages you can keep open while you work.',
    inside: ['The Role + Task + Context + Format formula', 'RTF, CRISPE, few-shot and chain-of-thought', '10 rules for better prompting'],
    pages: 13,
    sizeMb: 0.4,
    file: '/resources/Prompt_Engineering_Cheatsheet_Aicadmia.pdf',
    tone: 'ink',
  },
  {
    slug: 'business-prompt-templates',
    title: 'Business Prompt Templates Pack',
    kind: 'Template pack',
    forWho: 'Founders & teams',
    description: 'Copy-and-fill templates for the writing that fills a working week: emails, reports, proposals and sales.',
    inside: ['Emails and client replies', 'Proposals and reports', 'Marketing and operations'],
    pages: 26,
    sizeMb: 0.5,
    file: '/resources/Business_Prompt_Templates_Pack_Aicadmia.pdf',
    tone: 'accent',
  },
  {
    slug: 'ai-tool-comparison-2026',
    title: 'AI Tool Comparison Guide 2026',
    kind: 'Guide',
    forWho: 'Anyone choosing a tool',
    description: 'An honest side-by-side of the major AI tools — what each is good at, where it falls short, and what it costs.',
    inside: ['ChatGPT, Claude, Gemini, Perplexity and more', 'Strengths and weak spots', 'Which tool for which job'],
    pages: 25,
    sizeMb: 0.6,
    file: '/resources/AI_Tool_Comparison_Guide_2026_Aicadmia.pdf',
    tone: 'lavender',
  },
  {
    slug: 'student-prompt-starter-kit',
    title: 'Student Prompt Starter Kit',
    kind: 'Starter kit',
    forWho: 'Students',
    description: 'Prompts for studying, research and drafting — written to help you learn faster, not to do the work for you.',
    inside: ['Study and revision prompts', 'Research and writing prompts', 'Using AI ethically at university'],
    pages: 26,
    sizeMb: 0.5,
    file: '/resources/Student_Prompt_Starter_Kit_Aicadmia.pdf',
    tone: 'cream',
  },
  {
    slug: 'prompt-quality-checklist',
    title: 'Prompt Quality Checklist',
    kind: 'Checklist',
    forWho: 'Anyone with important tasks',
    description: 'A ten-point check to run before you send an important prompt, and a fix list for when the answer is weak.',
    inside: ['The 10-point master checklist', 'Scoring your prompts', 'Fixes for common weak answers'],
    pages: 25,
    sizeMb: 0.5,
    file: '/resources/Prompt_Quality_Checklist_Aicadmia.pdf',
    tone: 'ink',
  },
  {
    slug: 'content-creator-playbook',
    title: 'Content Creator Prompt Playbook',
    kind: 'Playbook',
    forWho: 'Creators',
    description: 'Prompts for every stage of making content — ideas, hooks, scripts, captions and repurposing — without losing your voice.',
    inside: ['Hooks and outlines', 'Platform-by-platform prompts', 'Repurposing one piece into many'],
    pages: 27,
    sizeMb: 0.6,
    file: '/resources/Content_Creator_Prompt_Playbook_Aicadmia.pdf',
    tone: 'accent',
  },
  {
    slug: 'developer-reference-card',
    title: 'Developer Prompt Reference Card',
    kind: 'Reference card',
    forWho: 'Developers',
    description: 'Prompts for the whole development workflow, from scaffolding and debugging to tests, docs and code review.',
    inside: ['Code generation and refactoring', 'Debugging and testing', 'Documentation and review'],
    pages: 29,
    sizeMb: 0.6,
    file: '/resources/Developer_Prompt_Reference_Card_Aicadmia.pdf',
    tone: 'lavender',
  },
  {
    slug: 'system-prompt-writing-guide',
    title: 'System Prompt Writing Guide',
    kind: 'Guide',
    forWho: 'Builders',
    description: 'How to write the instructions behind custom GPTs, Claude Projects and AI features — role, rules, tone and format.',
    inside: ['System vs. user prompts', 'Roles, goals and constraints', 'Templates for common assistants'],
    pages: 26,
    sizeMb: 0.6,
    file: '/resources/System_Prompt_Writing_Guide_Aicadmia.pdf',
    tone: 'cream',
  },
]
