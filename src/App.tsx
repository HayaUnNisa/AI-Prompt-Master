import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'

import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import BlogsPage from './pages/BlogsPage'
import BlogDetailPage from './pages/BlogDetailPage'
import CoursesPage from './pages/CoursesPage'
import CourseDetailPage from './pages/CourseDetailPage'
import EbooksPage from './pages/EbooksPage'
import ResourcesPage from './pages/ResourcesPage'
import AIToolsPage from './pages/AIToolsPage'
import PromptLibraryPage from './pages/PromptLibraryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import NotFoundPage from './pages/NotFoundPage'
import ChatbotWidget from './components/chatbot/ChatbotWidget'
import MyLearningPage from './pages/MyLearningPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

function App() {
  const [darkMode] = useState(true)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/sign-in/*" element={<SignInPage />} />
            <Route path="/sign-up/*" element={<SignUpPage />} />

            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetailPage />} />
            <Route path="/ebooks" element={<EbooksPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/ai-tools" element={<AIToolsPage />} />
            <Route path="/prompt-library" element={<PromptLibraryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            <Route
              path="/my-learning"
              element={
                <ProtectedRoute>
                  <MyLearningPage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>

        <ChatbotWidget />
      </Router>
    </div>
  )
}

export default App