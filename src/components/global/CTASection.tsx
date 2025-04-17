"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const CTASection = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-950/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Instagram Presence?
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and businesses who are growing their Instagram accounts with our automation
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 text-white px-8 py-6 text-lg">
              Start Your Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20 hover:text-purple-300 px-8 py-6 text-lg"
            >
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
