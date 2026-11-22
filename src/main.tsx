import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { Analytics } from '@vercel/analytics/react'
import App from './App'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource-variable/inter'
import '@fontsource/jetbrains-mono/400.css'
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
          colorPrimary: '#5B4BB0',
          colorBackground: '#FFFFFF',
          colorText: '#1B1830',
          colorTextSecondary: '#4F4A68',
          colorInputBackground: '#FAF9FD',
          colorInputText: '#1B1830',
          colorNeutral: '#1B1830',
          borderRadius: '12px',
          fontFamily: 'Inter, system-ui, sans-serif',
        },
        elements: {
          card: 'bg-surface border border-border shadow-card',
          formButtonPrimary: 'bg-ink hover:bg-accent text-cream font-medium normal-case',
          footerActionLink: 'text-accent hover:text-accent-dark',
        },
      }}
    >
      <App />
      <Analytics />
    </ClerkProvider>
  </React.StrictMode>
)