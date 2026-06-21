import type { Resource, FAQ } from '../types'

export const resources: Resource[] = [
  {
    id: '1',
    title: 'The Prompt Engineering Cheatsheet',
    description:
      'A practical reference covering prompt formulas, frameworks, examples, and quick-fix tips for better AI results.',
    type: 'Cheatsheet',
    category: 'Foundations',
    downloadUrl: '/resources/Prompt_Engineering_Cheatsheet_Aicadmia.pdf',
    free: true,
    size: '1.2 MB PDF',
  },
  {
    id: '2',
    title: 'Business Prompt Templates Pack',
    description:
      'Ready-to-use prompt templates for emails, reports, proposals, sales, marketing, operations, and business communication.',
    type: 'Template',
    category: 'Business',
    downloadUrl: '/resources/Business_Prompt_Templates_Pack_Aicadmia.pdf',
    free: true,
    size: '0.8 MB PDF',
  },
  {
    id: '3',
    title: 'AI Tool Comparison Guide 2026',
    description:
      'A detailed comparison of major AI tools including strengths, weaknesses, pricing, and best use cases.',
    type: 'Guide',
    category: 'AI Tools',
    downloadUrl: '/resources/AI_Tool_Comparison_Guide_2026_Aicadmia.pdf',
    free: true,
    size: '2.1 MB PDF',
  },
  {
    id: '4',
    title: 'Student Prompt Starter Kit',
    description:
      'A student-friendly kit with study prompts, writing prompts, research prompts, and ethical AI usage guidance.',
    type: 'Template',
    category: 'Education',
    downloadUrl: '/resources/Student_Prompt_Starter_Kit_Aicadmia.pdf',
    free: true,
    size: '1.5 MB PDF',
  },
  {
    id: '5',
    title: 'Prompt Quality Checklist',
    description:
      'A complete checklist to review, score, and improve prompts before using them for important AI tasks.',
    type: 'Checklist',
    category: 'Foundations',
    downloadUrl: '/resources/Prompt_Quality_Checklist_Aicadmia.pdf',
    free: true,
    size: '0.4 MB PDF',
  },
  {
    id: '6',
    title: 'Content Creator Prompt Playbook',
    description:
      'A structured playbook for blogs, videos, newsletters, captions, hooks, outlines, and content repurposing.',
    type: 'Guide',
    category: 'Content Creation',
    downloadUrl: '/resources/Content_Creator_Prompt_Playbook_Aicadmia.pdf',
    free: true,
    size: '1.8 MB PDF',
  },
  {
    id: '7',
    title: 'Developer Prompt Reference Card',
    description:
      'Developer-focused prompts for code generation, debugging, refactoring, documentation, testing, and code review.',
    type: 'Cheatsheet',
    category: 'Coding',
    downloadUrl: '/resources/Developer_Prompt_Reference_Card_Aicadmia.pdf',
    free: true,
    size: '0.6 MB PDF',
  },
  {
    id: '8',
    title: 'System Prompt Writing Guide',
    description:
      'Step-by-step guide to writing effective system prompts for custom GPTs, Claude Projects, and API integrations.',
    type: 'Guide',
    category: 'Advanced',
    downloadUrl: '#',
    free: false,
    size: '2.4 MB PDF',
  },
]

export const resourceCategories = [
  'All',
  'Foundations',
  'Business',
  'AI Tools',
  'Education',
  'Content Creation',
  'Coding',
  'Advanced',
]

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Do I need to be technical to learn prompt engineering?',
    answer:
      'No. Prompt engineering is about clear communication, not coding. If you can write a clear email or give good instructions, you already have the foundation.',
    category: 'Getting Started',
  },
  {
    id: '2',
    question: 'Which AI tool should I start with?',
    answer:
      'For most beginners, ChatGPT or Claude are excellent starting points. Both work well with the prompting techniques taught on Aicadmia.',
    category: 'Getting Started',
  },
  {
    id: '3',
    question: 'Are the courses completely free?',
    answer:
      'Yes. All courses listed on this platform are free. Downloadable resources and ebooks may include both free and premium options.',
    category: 'Courses',
  },
  {
    id: '4',
    question: 'What format are the resources delivered in?',
    answer:
      'Most resources are delivered as PDF files. Some may also include templates, checklists, or reference cards.',
    category: 'Resources',
  },
  {
    id: '5',
    question: 'Can I use these prompts for commercial purposes?',
    answer:
      'Yes. The prompts are templates designed for you to adapt and use in your own work, including business and commercial projects. The PDF files themselves should not be resold or redistributed.',
    category: 'Resources',
  },
  {
    id: '6',
    question: 'How often is the content updated?',
    answer:
      'Aicadmia resources are reviewed and updated as AI tools and prompting best practices evolve.',
    category: 'General',
  },
  {
    id: '7',
    question: 'Will I get certificates for completing courses?',
    answer:
      'Not currently. The focus is practical learning, but completion badges or certificates may be added later.',
    category: 'Courses',
  },
  {
    id: '8',
    question: 'Can AI writing be detected by plagiarism tools?',
    answer:
      'AI detection tools are imperfect and can produce false results. Aicadmia teaches ethical AI use, editing, and responsible learning instead of copying AI output blindly.',
    category: 'Prompting',
  },
]

export const faqCategories = [
  'All',
  'Getting Started',
  'Courses',
  'Resources',
  'Prompting',
  'General',
]