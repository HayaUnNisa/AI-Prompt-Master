export interface Blog {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: string
  coverImage: string
  featured: boolean
}

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  category: string
  lessons: number
  duration: string
  rating: number
  students: number
  tags: string[]
  coverImage: string
  instructor: string
  featured: boolean
  modules: CourseModule[]
}

export interface CourseModule {
  title: string
  lessons: string[]
}

export interface Ebook {
  id: string
  title: string
  description: string
  longDescription: string
  price: number
  originalPrice: number
  pages: number
  format: string[]
  topics: string[]
  coverImage: string
  featured: boolean
  badge?: string
}

export interface Prompt {
  id: string
  title: string
  prompt: string
  category: string
  tool: string
  difficulty: string
  tags: string[]
  useCase: string
}

export interface AITool {
  id: string
  name: string
  description: string
  category: string
  url: string
  tags: string[]
  free: boolean
  color: string
}

export interface Resource {
  id: string
  title: string
  description: string
  type: 'PDF' | 'Template' | 'Cheatsheet' | 'Guide' | 'Checklist'
  category: string
  downloadUrl: string
  free: boolean
  size: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}
