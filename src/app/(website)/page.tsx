"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ArrowRight,
  Calendar,
  MessageSquare,
  BarChart3,
  Users,
  Target,
  Zap,
  Check,
  CheckCircle2,
  Star,
} from "lucide-react"
import { useClerk } from "@clerk/clerk-react"

// InfoBar Component
const InfoBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { signOut } = useClerk()

  const handleLogout = () => {
    signOut()
  }

  return (
    <nav className="w-full py-4 px-4 md:px-8 bg-transparent backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/Logo.svg" alt="Logo" width={60} height={100} className="h-12 w-auto mr-4" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-purple-300 transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-white hover:text-purple-300 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-white hover:text-purple-300 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-white hover:text-purple-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-purple-300 transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/20 hover:text-purple-300 transition-all"
          >
            <Link href="/sign-in">Log In</Link>
          </Button>
          <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 transition-opacity text-white">
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>

        {/* Logout Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/20 hover:text-purple-300 transition-all"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-neutral-950/90 backdrop-blur-md p-4 rounded-b-lg md:hidden border border-purple-500/20"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-purple-300 transition-colors py-2">
                Home
              </Link>
              <Link href="/features" className="text-white hover:text-purple-300 transition-colors py-2">
                Features
              </Link>
              <Link href="/pricing" className="text-white hover:text-purple-300 transition-colors py-2">
                Pricing
              </Link>
              <Link href="/about" className="text-white hover:text-purple-300 transition-colors py-2">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition-colors py-2">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-white/20">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/20 hover:text-purple-300 w-full"
                >
                  <Link href="/dashboard">Log In</Link>
                </Button>
                <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 w-full text-white">
                  <Link href="/dashboard">Get Started</Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/20 hover:text-purple-300 w-full"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

// Hero Component
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
                    src={`/placeholder.svg?height=40&width=40&text=User${i}`}
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

// Features Component
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

// HowItWorks Component
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

// Testimonials Component
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Social Media Manager",
    company: "Fashion Brand",
    avatar: "/user.jpg?height=40&width=40&text=SJ",
    content:
      "This platform has completely transformed how I manage our Instagram presence. The automation features save me hours every week, and our engagement has increased by 45% in just two months!",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "Digital Marketer",
    company: "Tech Startup",
    avatar: "/user.jpg?height=40&width=40&text=MC",
    content:
      "I've tried several Instagram automation tools, but this one stands out for its intuitive interface and powerful analytics. It's helped us grow our following by over 10,000 in three months.",
    stars: 5,
  },
  {
    name: "Jessica Williams",
    role: "Influencer",
    company: "Lifestyle Blog",
    avatar: "/user.jpg?height=40&width=40&text=JW",
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
                  <p className="text-gray-300 italic mb-6">{testimonial.content}</p>
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

// Pricing Component
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

// CTA Section Component
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

// Footer Component
const Footer = () => {
  return (
    <footer className="backdrop-blur-md border-t border-white/10 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
              InstaGrow
            </h3>
            <p className="text-gray-300 mb-4">
              Automate your Instagram growth with our powerful platform. Engage with your audience and grow your
              following.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-gray-400 hover:text-purple-300 transition-colors">
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-4">Get the latest updates and tips for Instagram growth.</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border-white/10 text-white"
                aria-label="Email address"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} InstaGrow. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">Made with ❤️ for Instagram creators</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <InfoBar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
