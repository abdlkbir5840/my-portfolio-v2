"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Facebook, Twitter, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/abdlkbir5840",
    color: "hover:text-[#2ea44f]",
  },
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
    name: "Email",
    icon: Mail,
    href: "mailto:habonbahmadi@gmail.com",
    color: "hover:text-[#ea4335]",
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0a0a16]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#4c1d95" }} />
              <stop offset="100%" style={{ stopColor: "#2563eb" }} />
            </linearGradient>
          </defs>
          <path
            d="M0,1000 C200,800 350,600 500,600 C650,600 800,800 1000,1000"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.5"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,1000 C200,800 350,600 500,600 C650,600 800,800 1000,1000;
                M0,1000 C200,900 350,700 500,700 C650,700 800,900 1000,1000;
                M0,1000 C200,800 350,600 500,600 C650,600 800,800 1000,1000
              "
            />
          </path>
          {/* Additional animated paths for more waves */}
          {[...Array(5)].map((_, i) => (
            <path
              key={i}
              d="M0,1000 C200,800 350,600 500,600 C650,600 800,800 1000,1000"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              transform={`translate(0, ${-i * 50})`}
            >
              <animate
                attributeName="d"
                dur={`${10 + i}s`}
                repeatCount="indefinite"
                values="
                  M0,1000 C200,800 350,600 500,600 C650,600 800,800 1000,1000;
                  M0,1000 C200,900 350,700 500,700 C650,700 800,900 1000,1000;
                  M0,1000 C200,800 350,600 500,600 C650,600 800,800 1000,1000
                "
              />
            </path>
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Abdelkabir
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl">
                I&apos;m a software engineer
                <br />
                and a PhD student in Artificial Intelligence
              </p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-[#1e1a3c] ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image src="/setup.jpg" alt="Developer Setup" fill className="object-contain" priority />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="w-1 h-1 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

