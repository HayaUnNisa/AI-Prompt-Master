import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: '#7c3aed',
          colorBackground: '#070816',
          colorText: '#ffffff',
          colorTextSecondary: '#94a3b8',
          colorInputBackground: '#111827',
          colorInputText: '#ffffff',
          colorNeutral: '#64748b',
          borderRadius: '14px',
          fontFamily: 'Inter, system-ui, sans-serif',
        },
        elements: {
          card: 'bg-[#0b1020] border border-white/10 shadow-2xl',
          headerTitle: 'text-white',
          headerSubtitle: 'text-slate-400',
          socialButtonsBlockButton:
            'bg-[#111827] border border-white/10 text-white hover:bg-[#1f2937]',
          formFieldInput:
            'bg-[#111827] border border-white/10 text-white placeholder:text-slate-500',
          formButtonPrimary:
            'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold',
          footerActionLink: 'text-cyan-400 hover:text-cyan-300',
          identityPreviewText: 'text-white',
          formFieldLabel: 'text-slate-300',
        },
      }}
    >
      <App />
      <Analytics />
    </ClerkProvider>
  </React.StrictMode>
)