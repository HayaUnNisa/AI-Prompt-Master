import { useEffect, useMemo, useState } from 'react'
import {
  AlertCircle,
  CheckCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Trophy,
  XCircle,
} from 'lucide-react'

export interface QuizQuestion {
  question: string
  options: string[]
  answer: number
  explanation?: string
}

interface QuizProps {
  title: string
  questions: QuizQuestion[]
  passScore?: number
  onPass?: () => void
}

export default function Quiz({
  title,
  questions,
  passScore = 70,
  onPass,
}: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  )
  const [showResult, setShowResult] = useState(false)
  const [hasCalledPass, setHasCalledPass] = useState(false)

  const selected = selectedAnswers[currentQuestion]

  const correctAnswers = useMemo(() => {
    return questions.reduce((total, question, index) => {
      return selectedAnswers[index] === question.answer ? total + 1 : total
    }, 0)
  }, [questions, selectedAnswers])

  const score = Math.round((correctAnswers / questions.length) * 100)
  const passed = score >= passScore
  const answeredCount = selectedAnswers.filter((answer) => answer !== -1).length
  const progress = ((currentQuestion + 1) / questions.length) * 100

  useEffect(() => {
    if (showResult && passed && onPass && !hasCalledPass) {
      onPass()
      setHasCalledPass(true)
    }
  }, [showResult, passed, onPass, hasCalledPass])

  const handleSelect = (optionIndex: number) => {
    const updated = [...selectedAnswers]
    updated[currentQuestion] = optionIndex
    setSelectedAnswers(updated)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      return
    }

    setShowResult(true)
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(questions.length).fill(-1))
    setShowResult(false)
    setHasCalledPass(false)
  }

  if (!questions.length) {
    return (
      <div className="rounded-3xl border border-border bg-surface-2/50 p-6">
        <p className="text-sm text-slate-400">No quiz questions available.</p>
      </div>
    )
  }

  if (showResult) {
    return (
      <div className="rounded-3xl border border-border bg-surface-2/50 p-6 sm:p-8">
        <div className="mb-8 text-center">
          <div
            className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border ${
              passed
                ? 'border-green-400/30 bg-green-500/15'
                : 'border-red-400/30 bg-red-500/15'
            }`}
          >
            {passed ? (
              <Trophy size={30} className="text-green-400" />
            ) : (
              <XCircle size={30} className="text-red-400" />
            )}
          </div>

          <p className="mb-2 text-sm font-mono uppercase tracking-wider text-purple-300">
            Quiz complete
          </p>

          <h3 className="mb-3 font-display text-2xl font-bold text-white">
            {passed ? 'You passed this quiz' : 'You need to retake this quiz'}
          </h3>

          <p className="mx-auto max-w-xl text-sm leading-6 text-slate-400">
            You scored{' '}
            <span className="font-semibold text-white">{score}%</span>. You got{' '}
            <span className="font-semibold text-white">{correctAnswers}</span>{' '}
            out of{' '}
            <span className="font-semibold text-white">{questions.length}</span>{' '}
            questions correct. Passing score is {passScore}%.
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-void/40 p-4 text-center">
            <p className="text-xs text-slate-500">Score</p>
            <p className="mt-1 font-display text-2xl font-bold text-white">
              {score}%
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-void/40 p-4 text-center">
            <p className="text-xs text-slate-500">Correct</p>
            <p className="mt-1 font-display text-2xl font-bold text-green-400">
              {correctAnswers}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-void/40 p-4 text-center">
            <p className="text-xs text-slate-500">Status</p>
            <p
              className={`mt-1 font-display text-2xl font-bold ${
                passed ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {passed ? 'Passed' : 'Failed'}
            </p>
          </div>
        </div>

        <div className="mb-8 space-y-4">
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index]
            const isCorrect = userAnswer === question.answer
            const notAnswered = userAnswer === -1

            return (
              <div
                key={`${question.question}-${index}`}
                className="rounded-2xl border border-border bg-void/40 p-4"
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle
                      size={18}
                      className="mt-1 flex-shrink-0 text-green-400"
                    />
                  ) : (
                    <XCircle
                      size={18}
                      className="mt-1 flex-shrink-0 text-red-400"
                    />
                  )}

                  <div className="w-full">
                    <p className="mb-3 font-medium text-white">
                      {index + 1}. {question.question}
                    </p>

                    <div className="space-y-2 text-sm">
                      <p className="text-slate-400">
                        Your answer:{' '}
                        <span
                          className={
                            isCorrect ? 'text-green-300' : 'text-red-300'
                          }
                        >
                          {notAnswered
                            ? 'Not answered'
                            : question.options[userAnswer]}
                        </span>
                      </p>

                      {!isCorrect && (
                        <p className="text-green-300">
                          Correct answer: {question.options[question.answer]}
                        </p>
                      )}

                      {question.explanation && (
                        <p className="mt-3 rounded-xl border border-border bg-surface/50 p-3 leading-6 text-slate-400">
                          {question.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button
          type="button"
          onClick={handleRestart}
          className="btn-secondary w-full justify-center"
        >
          <RotateCcw size={16} />
          Retake Quiz
        </button>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="rounded-3xl border border-border bg-surface-2/50 p-6 sm:p-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-sm font-mono uppercase tracking-wider text-purple-300">
            {title}
          </p>

          <h3 className="font-display text-2xl font-bold text-white">
            Module quiz
          </h3>
        </div>

        <div className="rounded-full border border-border bg-void/40 px-4 py-2 text-xs text-slate-400">
          {answeredCount}/{questions.length} answered
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-void">
          <div
            className="h-full bg-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-7 rounded-2xl border border-border bg-void/40 p-5">
        <p className="text-lg font-medium leading-7 text-white">
          {question.question}
        </p>
      </div>

      <div className="mb-8 space-y-3">
        {question.options.map((option, index) => {
          const active = selected === index

          return (
            <button
              key={`${option}-${index}`}
              type="button"
              onClick={() => handleSelect(index)}
              className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
                active
                  ? 'border-purple-400/60 bg-purple-500/15 text-white'
                  : 'border-border bg-void/40 text-slate-400 hover:border-purple-400/40 hover:text-white'
              }`}
            >
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border font-mono text-xs ${
                  active
                    ? 'border-purple-300 bg-purple-500/20 text-purple-100'
                    : 'border-border bg-surface/40 text-slate-500'
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>

              <span className="leading-6">{option}</span>

              {active && (
                <CheckCircle2
                  size={18}
                  className="ml-auto flex-shrink-0 text-purple-300"
                />
              )}
            </button>
          )
        })}
      </div>

      {selected === -1 && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-yellow-400/20 bg-yellow-500/10 p-4 text-sm text-yellow-200">
          <AlertCircle size={17} className="mt-0.5 flex-shrink-0" />
          Select one answer to continue.
        </div>
      )}

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="btn-secondary justify-center disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={16} />
          Previous
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={selected === -1}
          className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-40"
        >
          {currentQuestion === questions.length - 1 ? 'Submit Quiz' : 'Next'}
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}