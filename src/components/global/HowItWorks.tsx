"use client"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account and connect your Instagram profile to our platform.",
  },
  {
    number: "02",
    title: "Set Your Goals",
    description: "Define your target audience, growth objectives, and content strategy.",
  },
  {
    number: "03",
    title: "Configure Automation",
    description: "Set up your automation rules, content schedule, and engagement parameters.",
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description: "Track your results and fine-tune your strategy for maximum growth.",
  },
]

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Get started with our platform in just a few simple steps
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step number */}
              <div className="text-5xl font-bold text-white/10 absolute -top-6 -left-2">{step.number}</div>

              {/* Content */}
              <div className="bg-neutral-950/50 border border-white/10 rounded-xl p-6 pt-8 backdrop-blur-sm relative z-10 h-full">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-2">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
