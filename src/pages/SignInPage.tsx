import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <SignIn />
    </div>
  )
}