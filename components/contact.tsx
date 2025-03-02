"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/elbahmadi/",
    color: "hover:text-[#0a66c2]",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/abdlkbir.elbahmadi.3",
    color: "hover:text-[#1877f2]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/abdlkbir5840",
    color: "hover:text-[#1da1f2]",
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+212627054366",
    color: "hover:text-[#25D366]",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen relative bg-[#0a0a16] overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1e1a3c] p-12 rounded-3xl"
          >
            <h1 className="text-6xl font-bold text-white mb-4">Contact.</h1>
            <h2 className="text-gray-400 text-xl mb-8">GET IN TOUCH</h2>

            <div className="space-y-6 mb-8">
              <motion.a
                href="mailto:habonbahmadi@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <span className="p-3 rounded-full bg-[#2a2550] group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="text-lg">habonbahmadi@gmail.com</span>
              </motion.a>

              <motion.a
                href="tel:+212627054366"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <span className="p-3 rounded-full bg-[#2a2550] group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="text-lg">+212 627 054 366</span>
              </motion.a>
            </div>

            <div className="space-y-4">
              <h3 className="text-gray-400">Connect with me:</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-[#2a2550] ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="relative w-[300px] h-[300px] animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />

              {/* Planet image */}
              <div className="relative w-full h-full animate-spin-slow">
                <Image src="/planet.png" alt="Planet" fill className="object-contain" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

