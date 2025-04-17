"use client"
import { motion } from "framer-motion"
import { Calendar, MessageSquare, BarChart3, Users, Target, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-purple-300" />,
    title: "Content Scheduling",
    description: "Plan and schedule your posts in advance to maintain a consistent presence.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-pink-300" />,
    title: "Automated Responses",
    description: "Set up smart replies to common questions and engage with your audience 24/7.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-purple-300" />,
    title: "Analytics Dashboard",
    description: "Track your growth, engagement, and content performance with detailed insights.",
  },
  {
    icon: <Users className="h-10 w-10 text-pink-300" />,
    title: "Audience Management",
    description: "Segment your followers and create targeted campaigns for different groups.",
  },
  {
    icon: <Target className="h-10 w-10 text-purple-300" />,
    title: "Competitor Analysis",
    description: "Monitor competitors' strategies and identify opportunities for your growth.",
  },
  {
    icon: <Zap className="h-10 w-10 text-pink-300" />,
    title: "Growth Automation",
    description: "Automate likes, comments, and follows to grow your account organically.",
  },
]

const Features = () => {
  return (
    <section className="py-20 px-4 md:px-8" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Everything you need to automate your Instagram presence and grow your following
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-neutral-950/50 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
