import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Information We Collect',
    content: `When you visit Prompt Master, we may collect certain information automatically, including your browser type, device type, pages visited, and approximate location based on IP address. This data is collected through standard analytics tools to help us understand how visitors use the site.

If you sign up for our newsletter or fill out a contact form, we collect the personal information you provide, such as your name and email address. When you purchase an ebook, payment is processed by a third-party payment provider and we do not store your financial details.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to operate and improve the website, respond to your messages, send newsletters if you have opted in, process purchases, and understand how our content is being used. We do not sell your personal information to third parties.

Email addresses collected through our newsletter form are used solely for sending educational content updates and product announcements. You may unsubscribe at any time using the link included in every email.`,
  },
  {
    title: 'Cookies',
    content: `We use cookies and similar tracking technologies to enhance your experience on the site. Essential cookies are required for the site to function correctly. Analytics cookies help us understand site traffic and behavior. You may disable cookies in your browser settings, though this may affect certain features of the site.

We do not use advertising cookies or share cookie data with advertising networks.`,
  },
  {
    title: 'Third-Party Services',
    content: `We use third-party services including analytics platforms and payment processors. These services have their own privacy policies which govern their handling of your data. We do not control third-party services and encourage you to review their policies independently.

Haya Un Nisa is not affiliated with OpenAI, Anthropic, Google, Microsoft, or any other AI company mentioned on this site.`,
  },
  {
    title: 'Data Retention',
    content: `We retain personal data only as long as necessary for the purposes described in this policy. Newsletter subscriber data is retained until you unsubscribe. Contact form submissions may be retained for up to 12 months for reference purposes. Analytics data is typically retained in aggregated, anonymized form.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to request access to, correction of, or deletion of your personal data. To make a request, contact us at hello@hayaunnisa.com. We will respond within a reasonable timeframe. If you are located in the European Economic Area or the United Kingdom, you may have additional rights under applicable data protection law.`,
  },
  {
    title: 'Children',
    content: `Haya Un Nisa is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us so we can remove it promptly.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the date at the bottom of this page. We encourage you to review this policy periodically. Continued use of the site after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: 'Contact',
    content: `If you have questions about this Privacy Policy or how we handle your data, please contact us at hello@hayaunnisa.com. We are committed to resolving any concerns you may have.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-10">
            <span className="tag-badge tag-purple mb-4 inline-block">Legal</span>
            <h1 className="font-display text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-400">Last updated: January 2025</p>
          </div>

          <div className="glass-card p-6 mb-10 border-cyan-500/20">
            <p className="text-slate-300 leading-relaxed">
              This Privacy Policy explains how Haya Un Nisa collects, uses, and protects your personal information when you use this website. We are committed to protecting your privacy and handling your data with care and transparency.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="font-display text-xl font-semibold text-white mb-3">{section.title}</h2>
                <div className="text-slate-400 leading-relaxed whitespace-pre-line">{section.content}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
