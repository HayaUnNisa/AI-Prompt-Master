import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using Haya Un Nisa, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the website. These terms apply to all visitors, users, and anyone who accesses or uses the service.`,
  },
  {
    title: 'Educational Content',
    content: `The content provided on Haya Un Nisa, including courses, blog posts, prompt templates, and guides, is intended for educational purposes only. While we strive to keep information accurate and up to date, the field of AI changes rapidly and some content may become outdated.

We do not guarantee any specific outcome from applying the techniques taught on this platform. Results depend on your effort, the tools you use, and the context in which you apply the techniques.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on Haya Un Nisa, including text, graphics, course materials, and prompt templates, is the property of Haya Un Nisa and is protected by applicable intellectual property laws.

Free content on the site may be used for personal learning purposes. You may not reproduce, distribute, or sell any content from this site without explicit written permission. Ebook content purchased through the site is licensed for personal use only and may not be resold or redistributed.`,
  },
  {
    title: 'Ebook Purchases',
    content: `Ebook purchases are final. We offer a 7-day refund policy if you are not satisfied with your purchase, provided you have not accessed more than 20% of the content. To request a refund, contact us at hello@hayaunnisa.com with your order details.

All ebooks are delivered digitally. Once downloaded, we cannot prevent access to the content, which is why our refund policy is limited to early-access situations.`,
  },
  {
    title: 'User Conduct',
    content: `You agree not to use the site in any way that violates applicable laws, infringes on the rights of others, or interferes with the operation of the site. You may not attempt to gain unauthorized access to any part of the site or its related systems.

You may not use content from this site to build competing educational products without written permission.`,
  },
  {
    title: 'Third-Party Links',
    content: `The site may contain links to third-party websites, including links to AI tools and platforms. These links are provided for convenience and do not constitute endorsement of those services. We have no control over the content or privacy practices of third-party sites and are not responsible for any harm that may result from accessing them.`,
  },
  {
    title: 'Disclaimer of Warranties',
    content: `Haya Un Nisa is provided "as is" without warranties of any kind. We do not warrant that the site will be error-free, uninterrupted, or free of harmful components. We do not make any warranties about the accuracy, completeness, or suitability of the content for any particular purpose.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by law, Haya Un Nisa shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the site or its content. Our total liability for any claim arising from the use of this site shall not exceed the amount you paid for any ebook purchase in the preceding 12 months.`,
  },
  {
    title: 'Changes to Terms',
    content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated date. Your continued use of the site after any changes constitutes acceptance of the revised terms.`,
  },
  {
    title: 'Governing Law',
    content: `These terms are governed by and construed in accordance with applicable law. Any disputes arising from these terms or your use of the site will be resolved through good-faith negotiation where possible.`,
  },
  {
    title: 'Contact',
    content: `If you have questions about these Terms and Conditions, please contact us at hello@hayaunnisa.com.`,
  },
]

export default function TermsPage() {
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
            <h1 className="font-display text-4xl font-bold text-white mb-4">Terms and Conditions</h1>
            <p className="text-slate-400">Last updated: January 2025</p>
          </div>

          <div className="glass-card p-6 mb-10 border-purple-500/20">
            <p className="text-slate-300 leading-relaxed">
              Please read these Terms and Conditions carefully before using Haya Un Nisa. They set out your rights and responsibilities as a user of this website and its content.
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
                <p className="text-slate-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
