"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full py-4 px-4 md:px-8 bg-transparent backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={60}
            height={100}
            className="h-12 w-auto mr-4"
          />
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
            <Link href="/dashboard">Log In</Link>
          </Button>
          <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 transition-opacity text-white">
            <Link href="/dashboard">Get Started</Link>
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
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
