import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  BookOpen,
  Check,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  Clock,
  GraduationCap,
  Lock,
  PlayCircle,
  Star,
  Trophy,
  Users,
} from 'lucide-react'

import { courses } from '../data/courses'
import Quiz from '../components/Quiz'
import Certificate from '../components/Certificate'
import { promptEngineeringFundamentalsQuiz } from './courses/quizzes/PromptEngineeringFundamentalsQuiz'
import { promptEngineeringFundamentalsModules } from './courses/PromptEngineeringFundamentals'
import { advancedPromptTechniquesModules } from './courses/AdvancedPromptTechniques'
import { advancedPromptTechniquesQuiz } from './courses/quizzes/AdvancedPromptTechniquesQuiz'
import { aiPromptsForBusinessModules } from './courses/AIPromptsForBusiness'
import { aiPromptsForBusinessQuiz } from './courses/quizzes/AIPromptsForBusinessQuiz'
import { aiPromptsForStudentsModules } from './courses/AIPromptsForStudents'
import { aiPromptsForStudentsQuiz } from './courses/quizzes/AIPromptsForStudentsQuiz'
import { codingWithAIModules } from './courses/CodingWithAI'
import { codingWithAIQuiz } from './courses/quizzes/CodingWithAIQuiz'
import { contentCreationWithAIModules } from './courses/ContentCreationWithAI'
import { contentCreationWithAIQuiz } from './courses/quizzes/ContentCreationWithAIQuiz'

type ProgressStore = Record<string, Record<string, boolean>>

const levelColors: Record<string, string> = {
  Beginner: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
  Intermediate: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
  Advanced: 'bg-pink-500/10 text-pink-300 border-pink-400/30',
}

const courseModulesContent = {
  'prompt-engineering-fundamentals': promptEngineeringFundamentalsModules,
  'advanced-prompt-techniques': advancedPromptTechniquesModules,
  'ai-prompts-for-business': aiPromptsForBusinessModules,
  'ai-prompts-for-students': aiPromptsForStudentsModules,
  'coding-with-ai': codingWithAIModules,
  'content-creation-with-ai': contentCreationWithAIModules,

}

const courseQuizzes = {
  'prompt-engineering-fundamentals': promptEngineeringFundamentalsQuiz,
  'advanced-prompt-techniques': advancedPromptTechniquesQuiz,
  'ai-prompts-for-business': aiPromptsForBusinessQuiz,
  'ai-prompts-for-students': aiPromptsForStudentsQuiz,
  'coding-with-ai': codingWithAIQuiz,
  'content-creation-with-ai': contentCreationWithAIQuiz,

}

export default function CourseDetailPage() {
  const { slug } = useParams()
  const course = courses.find((item) => item.slug === slug)

  const [openModule, setOpenModule] = useState(0)
  const [progressVersion, setProgressVersion] = useState(0)

  const savedProgress = useMemo<ProgressStore>(() => {
    try {
      return JSON.parse(localStorage.getItem('course-progress') || '{}')
    } catch {
      return {}
    }
  }, [progressVersion])

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="mb-4 font-display text-3xl text-white">
            Course not found
          </h1>

          <Link to="/courses" className="btn-primary inline-flex">
            Back to Courses
          </Link>
        </div>
      </div>
    )
  }

  const contentModules =
    courseModulesContent[course.slug as keyof typeof courseModulesContent]

  const quizzes = courseQuizzes[course.slug as keyof typeof courseQuizzes]

  const modules = contentModules ?? course.modules ?? []

  const totalLessons = modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  )

  const completedModules = modules.filter(
    (module) => savedProgress?.[course.slug]?.[module.title]
  ).length

  const courseCompleted =
    modules.length > 0 && completedModules === modules.length

  const progress =
    modules.length > 0 ? Math.round((completedModules / modules.length) * 100) : 0

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pb-16 pt-28">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />

        <div className="container-wide section-padding relative">
          <Link
            to="/courses"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to courses
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-green-400/30 bg-green-500/15 px-4 py-1.5 text-sm font-semibold text-green-300">
                  Free Course
                </span>

                <span
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${
                    levelColors[course.level] ?? levelColors.Beginner
                  }`}
                >
                  {course.level}
                </span>

                <span className="rounded-full border border-border bg-surface/50 px-4 py-1.5 text-sm text-slate-400">
                  {course.category}
                </span>
              </div>

              <h1 className="mb-5 max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
                {course.title}
              </h1>

              <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-400">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2">
                  <Star size={15} className="fill-yellow-400 text-yellow-400" />
                  {course.rating} rating
                </span>

                <span className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2">
                  <Users size={15} className="text-purple-400" />
                  {course.students.toLocaleString()} learners
                </span>

                <span className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2">
                  <Clock size={15} className="text-cyan-400" />
                  {course.duration}
                </span>

                <span className="flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2">
                  <BookOpen size={15} className="text-green-400" />
                  {totalLessons} lessons
                </span>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Created by{' '}
                <span className="font-semibold text-slate-300">
                  {course.instructor}
                </span>
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-3xl border border-border bg-surface/60 p-5 shadow-card backdrop-blur-xl"
            >
              <div className="relative mb-5 h-52 overflow-hidden rounded-2xl">
                <img
                  src={course.coverImage}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
              </div>

              <div className="mb-5">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Course progress</span>
                  <span className="font-semibold text-white">{progress}%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-void">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button
                onClick={() =>
                  document
                    .getElementById('course-modules')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-void transition-all hover:bg-purple-200"
              >
                <PlayCircle size={18} />
                Start Course
              </button>

              <button
                onClick={() => {
                  const saved = JSON.parse(
                    localStorage.getItem('saved-courses') || '[]'
                  )

                  if (!saved.includes(course.slug)) {
                    saved.push(course.slug)
                    localStorage.setItem('saved-courses', JSON.stringify(saved))
                  }
                }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-void/50 px-5 py-4 text-sm font-semibold text-white transition-all hover:border-purple-400/50"
              >
                <Trophy size={18} className="text-yellow-400" />
                Save to My Learning
              </button>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="container-wide section-padding pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <main>
            <div className="mb-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: GraduationCap,
                  title: 'Beginner friendly',
                  text: 'Clear lessons written in simple language.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Practical skills',
                  text: 'Learn prompts you can actually use.',
                },
                {
                  icon: BookOpen,
                  title: 'Locked progression',
                  text: 'Pass each module quiz to unlock the next module.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-surface/50 p-5"
                >
                  <item.icon className="mb-4 text-purple-400" size={24} />
                  <h3 className="mb-2 font-display font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-12 rounded-3xl border border-border bg-surface/50 p-6 md:p-8">
              <h2 className="mb-5 font-display text-2xl font-bold text-white">
                What you will learn
              </h2>

              <div className="grid gap-3 md:grid-cols-2">
                {course.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <Check
                      size={17}
                      className="mt-0.5 flex-shrink-0 text-green-400"
                    />
                    <span>{tag} prompting techniques</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="course-modules" className="mb-12">
              <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                <div>
                  <p className="mb-2 text-sm font-mono uppercase tracking-wider text-purple-400">
                    Course Modules
                  </p>

                  <h2 className="font-display text-2xl font-bold text-white">
                    Learn, take quiz, then unlock next module
                  </h2>
                </div>

                <p className="text-sm text-slate-400">
                  {modules.length} modules • {totalLessons} lessons
                </p>
              </div>

              <div className="space-y-5">
                {modules.map((module, moduleIndex) => {
                  const quizKey = `module${moduleIndex + 1}` as keyof typeof quizzes

                    const moduleQuiz = quizzes?.[quizKey]

                  const previousModule =
                    moduleIndex > 0 ? modules[moduleIndex - 1].title : null

                  const unlocked =
                    moduleIndex === 0 ||
                    Boolean(
                      previousModule &&
                        savedProgress?.[course.slug]?.[previousModule]
                    )

                  const moduleCompleted =
                    Boolean(savedProgress?.[course.slug]?.[module.title])

                  return (
                    <div
                      key={module.title}
                      className="overflow-hidden rounded-3xl border border-border bg-surface/50"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          if (unlocked) {
                            setOpenModule(
                              openModule === moduleIndex ? -1 : moduleIndex
                            )
                          }
                        }}
                        className="group flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-semibold ${
                              moduleCompleted
                                ? 'border-green-400/30 bg-green-500/15 text-green-300'
                                : unlocked
                                  ? 'border-purple-400/30 bg-purple-500/15 text-purple-300'
                                  : 'border-border bg-void/40 text-slate-600'
                            }`}
                          >
                            {moduleCompleted ? (
                              <CheckCircle2 size={18} />
                            ) : unlocked ? (
                              moduleIndex + 1
                            ) : (
                              <Lock size={16} />
                            )}
                          </div>

                          <div>
                            <h3
                              className={`font-display font-semibold ${
                                unlocked ? 'text-white' : 'text-slate-500'
                              }`}
                            >
                              {module.title}
                            </h3>

                            <p className="mt-1 text-xs text-slate-500">
                              {unlocked
                                ? `${module.lessons.length} lessons + quiz`
                                : 'Locked until previous quiz is passed'}
                            </p>
                          </div>
                        </div>

                        <ChevronDown
                          size={18}
                          className={`text-slate-400 transition-transform ${
                            openModule === moduleIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {openModule === moduleIndex && unlocked && (
                        <div className="border-t border-border p-5">
                          <div className="space-y-6">
                            {module.lessons.map((lesson, lessonIndex) => {
                              if (typeof lesson === 'string') {
                                return (
                                  <div
                                    key={`${module.title}-${lessonIndex}`}
                                    className="rounded-2xl border border-border bg-void/40 p-5"
                                  >
                                    <p className="text-sm text-slate-300">
                                      {lesson}
                                    </p>
                                  </div>
                                )
                              }

                              return (
                                <motion.div
                                  key={lesson.title}
                                  initial={{ opacity: 0, y: 16 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  className="rounded-2xl border border-border bg-navy-900/40 p-6"
                                >
                                  <div className="mb-4 flex items-center justify-between">
                                    <span className="text-sm font-mono text-cyan-400">
                                      Lesson {lessonIndex + 1}
                                    </span>

                                    <span className="text-sm text-slate-500">
                                      {lesson.time}
                                    </span>
                                  </div>

                                  <h3 className="mb-4 font-display text-2xl font-bold text-white">
                                    {lesson.title}
                                  </h3>

                                  <p className="mb-4 leading-relaxed text-slate-300">
                                    {lesson.intro}
                                  </p>

                                  {lesson.explanation.map((paragraph, i) => (
                                    <p
                                      key={i}
                                      className="mb-4 leading-relaxed text-slate-400"
                                    >
                                      {paragraph}
                                    </p>
                                  ))}

                                  <div className="mb-4 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4">
                                    <p className="mb-2 text-sm font-semibold text-purple-300">
                                      Weak Prompt
                                    </p>
                                    <p className="text-slate-300">
                                      {lesson.weakPrompt}
                                    </p>
                                  </div>

                                  <div className="mb-4 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
                                    <p className="mb-2 text-sm font-semibold text-green-300">
                                      Better Prompt
                                    </p>
                                    <p className="text-slate-300">
                                      {lesson.betterPrompt}
                                    </p>
                                  </div>

                                  <div className="space-y-3">
                                    <div>
                                      <h4 className="font-semibold text-red-300">
                                        Common Mistake
                                      </h4>
                                      <p className="text-slate-400">
                                        {lesson.commonMistake}
                                      </p>
                                    </div>

                                    <div>
                                      <h4 className="font-semibold text-blue-300">
                                        Practice
                                      </h4>
                                      <p className="text-slate-400">
                                        {lesson.practice}
                                      </p>
                                    </div>

                                    <div className="flex items-start gap-2 pt-2">
                                      <CheckCircle
                                        size={18}
                                        className="mt-1 flex-shrink-0 text-green-400"
                                      />
                                      <p className="font-medium text-white">
                                        {lesson.takeaway}
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              )
                            })}
                          </div>

                          {moduleQuiz ? (
                            <div className="mt-8 border-t border-border pt-8">
                              <p className="mb-4 text-sm text-slate-400">
                                Complete this quiz to unlock the next module.
                              </p>

                              <Quiz
                                title={moduleQuiz.title}
                                questions={moduleQuiz.questions}
                                passScore={70}
                                onPass={() => {
                                  const saved: ProgressStore = JSON.parse(
                                    localStorage.getItem('course-progress') ||
                                      '{}'
                                  )

                                  saved[course.slug] = {
                                    ...saved[course.slug],
                                    [module.title]: true,
                                  }

                                  localStorage.setItem(
                                    'course-progress',
                                    JSON.stringify(saved)
                                  )

                                  setProgressVersion((prev) => prev + 1)

                                  if (moduleIndex + 1 < modules.length) {
                                    setOpenModule(moduleIndex + 1)
                                  }
                                }}
                              />
                            </div>
                          ) : (
                            <div className="mt-8 rounded-2xl border border-yellow-400/20 bg-yellow-500/10 p-4 text-sm text-yellow-200">
                              No quiz added for this module yet.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-surface/50 p-6 md:p-8">
              <h2 className="mb-5 font-display text-2xl font-bold text-white">
                Certificate
              </h2>

              {courseCompleted ? (
                <Certificate
                  studentName="Student"
                  courseTitle={course.title}
                  instructor={course.instructor}
                />
              ) : (
                <div className="rounded-2xl border border-border bg-void/40 p-5">
                  <p className="mb-2 font-display font-semibold text-white">
                    Certificate locked
                  </p>

                  <p className="text-sm leading-6 text-slate-400">
                    Complete all module quizzes to unlock your certificate.
                    Progress: {completedModules}/{modules.length} modules completed.
                  </p>
                </div>
              )}
            </div>
          </main>

          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-3xl border border-border bg-surface/50 p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-white">
                Course includes
              </h3>

              <div className="space-y-4 text-sm text-slate-400">
                <span className="flex items-center gap-3">
                  <BookOpen size={16} className="text-cyan-400" />
                  {totalLessons} short lessons
                </span>

                <span className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-green-400" />
                  Module quizzes
                </span>

                <span className="flex items-center gap-3">
                  <Clock size={16} className="text-purple-400" />
                  Self-paced learning
                </span>

                <span className="flex items-center gap-3">
                  <GraduationCap size={16} className="text-pink-400" />
                  Certificate after completion
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}