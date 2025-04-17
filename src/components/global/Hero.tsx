"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Automate Your{" "}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Instagram Growth
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            Engage with your audience, schedule posts, and grow your following with our powerful Instagram automation
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 text-white px-8 py-6 text-lg">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20 hover:text-purple-300 px-8 py-6 text-lg"
            >
              See a Demo
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center md:justify-start">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-neutral-950 overflow-hidden">
                  <Image
                    src={`/user.jpg?height=40&width=40&text=User${i}`}
                    alt={`User ${i}`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="ml-4 text-sm text-gray-300">
              <span className="font-bold text-white">1,000+</span> users growing their Instagram
            </p>
          </div>
        </motion.div>

        {/* Right column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=500&text=Instagram+Automation+Dashboard"
                alt="Instagram Automation Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-pink-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse"></div>
    </section>
  )
}

export default Hero
