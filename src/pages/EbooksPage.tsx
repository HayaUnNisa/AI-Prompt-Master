import { motion } from "framer-motion";
import { BookOpen, CheckCircle, Rocket, Mail } from "lucide-react";

export default function EbooksPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <section className="container-wide section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-8"
          >
            <span>⏳</span>
            Coming Soon
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Ebooks{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            We’re working hard to bring you comprehensive, practical, and
            high-quality ebooks that will help you go deeper in your AI
            journey.
          </motion.p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: BookOpen,
                title: "In-Depth Guides",
                desc: "Well-researched, detailed ebooks on AI and prompt engineering.",
              },
              {
                icon: CheckCircle,
                title: "Practical & Actionable",
                desc: "Real-world examples, templates, and workflows you can use immediately.",
              },
              {
                icon: Rocket,
                title: "Built for You",
                desc: "Created for learners, creators, developers, and businesses.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-6 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>

                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Notify Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-8 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-purple-400" />
              <h3 className="font-display text-2xl font-semibold text-white">
                Get Notified When We Launch
              </h3>
            </div>

            <p className="text-slate-400 mb-6">
              Be the first to know when our ebooks are ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 outline-none"
              />
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition">
                Notify Me
              </button>
            </div>
          </motion.div>

          {/* Footer Note */}
          <p className="mt-10 text-slate-500 text-sm">
            Thank you for your patience and support.
          </p>
        </div>
      </section>
    </div>
  );
}