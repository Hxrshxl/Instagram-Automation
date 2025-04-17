"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Social Media Manager",
    company: "Fashion Brand",
    avatar: "/placeholder.svg?height=40&width=40&text=SJ",
    content:
      "This platform has completely transformed how I manage our Instagram presence. The automation features save me hours every week, and our engagement has increased by 45% in just two months!",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "Digital Marketer",
    company: "Tech Startup",
    avatar: "/placeholder.svg?height=40&width=40&text=MC",
    content:
      "I've tried several Instagram automation tools, but this one stands out for its intuitive interface and powerful analytics. It's helped us grow our following by over 10,000 in three months.",
    stars: 5,
  },
  {
    name: "Jessica Williams",
    role: "Influencer",
    company: "Lifestyle Blog",
    avatar: "/placeholder.svg?height=40&width=40&text=JW",
    content:
      "As an influencer, consistency is key. This platform helps me schedule content and engage with my audience even when I'm busy creating new content. It's been a game-changer for my brand.",
    stars: 4,
  },
]

const Testimonials = () => {
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
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Join thousands of satisfied users who have transformed their Instagram presence
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-neutral-950/50 border border-white/10 backdrop-blur-sm h-full">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter className="border-t border-white/10 pt-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
