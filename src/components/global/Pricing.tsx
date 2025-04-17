"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for individuals and small businesses just getting started with Instagram.",
    features: [
      "Schedule up to 30 posts per month",
      "Basic analytics dashboard",
      "Auto-respond to comments",
      "1 Instagram account",
      "Email support",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing businesses and serious content creators.",
    features: [
      "Schedule unlimited posts",
      "Advanced analytics and reporting",
      "Custom auto-responses",
      "5 Instagram accounts",
      "Competitor analysis",
      "Priority email support",
      "Content suggestions",
    ],
    popular: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For agencies and large businesses managing multiple brands.",
    features: [
      "Everything in Professional",
      "Unlimited Instagram accounts",
      "Team collaboration tools",
      "White-label reports",
      "API access",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
]

const Pricing = () => {
  return (
    <section className="py-20 px-4 md:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Choose the plan that&apos;s right for your Instagram growth goals
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card
                className={`bg-neutral-950/50 border backdrop-blur-sm flex flex-col h-full w-full relative ${
                  plan.popular
                    ? "border-purple-400 shadow-lg shadow-purple-500/10"
                    : "border-white/10 hover:border-white/30"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className={plan.popular ? "pt-8" : ""}>
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">per month</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-400 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 text-white"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
