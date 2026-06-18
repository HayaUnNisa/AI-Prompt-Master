import type { Course } from '../types'

export const courses: Course[] = [
  {
    id: '1',
    slug: 'prompt-engineering-fundamentals',
    title: 'Prompt Engineering Fundamentals',
    description:
      'Start from zero and learn the core principles of writing effective prompts for any AI tool. No technical background required.',
    level: 'Beginner',
    category: 'Foundations',
    lessons: 12,
    duration: '3 hours',
    rating: 4.9,
    students: 2840,
    tags: ['Foundations', 'ChatGPT', 'Claude', 'Gemini'],
    coverImage:
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    instructor: 'Academia Team',
    featured: true,
    modules: [
      {
        title: 'Introduction to AI and Prompts',
        lessons: [
          'What is an AI language model?',
          'How prompts work',
          'Why most prompts fail',
          'Your first prompt experiment',
        ],
      },
      {
        title: 'The Core Prompt Framework',
        lessons: [
          'Role: Setting the AI context',
          'Task: Stating what you want',
          'Context: Giving background',
          'Format: Controlling output structure',
        ],
      },
      {
        title: 'Practical Prompt Writing',
        lessons: [
          'Prompts for writing and editing',
          'Prompts for research and summarization',
          'Prompts for brainstorming',
          'Building your personal prompt library',
        ],
      },
    ],
  },

  {
    id: '2',
    slug: 'advanced-prompt-techniques',
    title: 'Advanced Prompt Techniques for Professionals',
    description:
      'Go beyond basics. Learn prompt chaining, system prompts, few-shot examples, and reliable AI workflows.',
    level: 'Intermediate',
    category: 'Advanced Techniques',
    lessons: 16,
    duration: '5 hours',
    rating: 4.8,
    students: 1620,
    tags: ['Advanced', 'Workflows', 'System Prompts', 'Chaining'],
    coverImage:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    instructor: 'Academia Team',
    featured: true,
    modules: [
      {
        title: 'Prompt Patterns and Structures',
        lessons: [
          'Few-shot prompting explained',
          'Chain-of-thought prompting',
          'Prompt templates and variables',
          'Role-based prompting in depth',
        ],
      },
      {
        title: 'System Prompts and Custom AI',
        lessons: [
          'Writing system prompts from scratch',
          'Building custom GPTs',
          'API basics for non-developers',
          'Testing and refining system prompts',
        ],
      },
    ],
  },

  {
    id: '3',
    slug: 'ai-prompts-for-business',
    title: 'AI Prompts for Business and Marketing',
    description:
      'Practical prompts for emails, social media, proposals, customer service, and marketing.',
    level: 'Beginner',
    category: 'Business',
    lessons: 14,
    duration: '4 hours',
    rating: 4.7,
    students: 3210,
    tags: ['Business', 'Marketing', 'Copywriting', 'Email'],
    coverImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    instructor: 'Academia Team',
    featured: true,
    modules: [
  {
    title: 'Business Foundations with AI',
    lessons: [
      'Understanding AI in Business',
      'Customer Support Prompts',
      'Writing Professional Emails',
      'Meeting Summaries and Documentation',
    ],
  },
  {
    title: 'Growth, Marketing, and Automation',
    lessons: [
      'Marketing Copy and Ads',
      'Social Media Content Systems',
      'Research and Competitor Analysis',
      'Workflow Automation with Prompt Systems',
    ],
  },
],
  },

  {
    id: '4',
    slug: 'ai-prompts-for-students',
    title: 'AI Prompts for Students and Academics',
    description:
      'Learn to use AI ethically and effectively for studying, essays, research, and exam prep.',
    level: 'Beginner',
    category: 'Education',
    lessons: 10,
    duration: '2.5 hours',
    rating: 4.8,
    students: 4150,
    tags: ['Students', 'Education', 'Research', 'Study'],
    coverImage:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    instructor: 'Academia Team',
    featured: false,
    modules: [
      {
        title: 'Ethical AI Use in Academics',
        lessons: [
          'The right way to use AI as a student',
          'Academic integrity guidelines',
          'AI as a tutor, not a ghostwriter',
        ],
      },
      {
        title: 'Study and Research',
        lessons: [
          'Summarizing complex readings',
          'Generating practice questions',
          'Research assistance prompts',
          'Citing and verifying AI outputs',
        ],
      },
    ],
  },

  {
    id: '5',
    slug: 'coding-with-ai',
    title: 'Coding with AI: Prompts for Developers',
    description:
      'Use ChatGPT, Claude, and Copilot to write code faster, debug efficiently, and understand codebases.',
    level: 'Intermediate',
    category: 'Coding',
    lessons: 18,
    duration: '6 hours',
    rating: 4.9,
    students: 1890,
    tags: ['Coding', 'Development', 'GitHub Copilot', 'Debugging'],
    coverImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    instructor: 'Academia Team',
    featured: false,
    modules: [
      {
        title: 'Code Generation',
        lessons: [
          'Writing effective code prompts',
          'Specifying language and constraints',
          'Generating functions and classes',
          'Building from pseudocode',
        ],
      },
      {
        title: 'Debugging and Review',
        lessons: [
          'Debugging with AI assistance',
          'Code review prompts',
          'Security and performance analysis',
          'Refactoring workflows',
        ],
      },
    ],
  },

  {
    id: '6',
    slug: 'content-creation-with-ai',
    title: 'Content Creation with AI: From Idea to Publication',
    description:
      'A complete workflow for bloggers, YouTubers, and content creators.',
    level: 'Beginner',
    category: 'Content Creation',
    lessons: 12,
    duration: '3.5 hours',
    rating: 4.6,
    students: 2560,
    tags: ['Content', 'Blogging', 'YouTube', 'SEO'],
    coverImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    instructor: 'Academia Team',
    featured: false,
    modules: [
      {
        title: 'Content Ideation',
        lessons: [
          'Generating topic ideas that rank',
          'Audience research prompts',
          'Content calendar creation',
          'Finding your unique angle',
        ],
      },
      {
        title: 'Writing and Scripting',
        lessons: [
          'Blog post outlines to drafts',
          'YouTube video scripts',
          'Podcast show notes',
          'Newsletter writing',
        ],
      },
    ],
  },
]

export const courseCategories = [
  'All',
  'Foundations',
  'Advanced Techniques',
  'Business',
  'Education',
  'Coding',
  'Content Creation',
]

export const difficultyLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'] 