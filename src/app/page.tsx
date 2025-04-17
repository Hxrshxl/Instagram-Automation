import Navbar from "@/components/global/Navbar"
import Hero from "@/components/global/Hero"
import Features from "@/components/global/Features"
import HowItWorks from "@/components/global/HowItWorks"
import CTASection from "@/components/global/CTASection"
import Footer from "@/components/global/Footer"
import Testimonials from "@/components/global/Testinomials"
import Pricing from "@/components/global/Pricing"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
