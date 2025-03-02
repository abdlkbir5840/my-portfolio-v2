"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const specialties = [
  {
    title: "Full Stack Developer",
    icon: "/overview/web.png",
    color: "from-pink-500 to-blue-500",
  },
  {
    title: "DevOps Engineer",
    icon: "/overview/devops.png",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Enthusiast",
    icon: "/overview/ai.png",
    color: "from-purple-500 to-blue-500",
  },
  {
    title: "NLP Specialist",
    icon: "/overview/nlp.png",
    color: "from-blue-500 to-cyan-500",
  },
]

export default function Overview() {
  return (
    <section className="py-20 bg-[#0a0a16]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-gray-400 text-lg mb-4">INTRODUCTION</h2>
        <h1 className="text-6xl font-bold text-white mb-8">Overview.</h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-16 max-w-4xl">
          I am a Software Engineer with expertise in Java, Spring Boot, React, and Node.js, and experience in Natural
          Language Processing (NLP) and DevOps. I specialize in developing scalable systems, optimizing deployment
          pipelines, and delivering user-focused solutions. My strong academic background and professional experience
          reflect my passion for learning and innovation. Let&apos;s collaborate to turn your ideas into impactful
          applications!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              <div className="relative bg-[#1e1a3c] rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] border border-transparent group-hover:border-purple-500/20 transition-colors">
                <div className="w-16 h-16 mb-4 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${specialty.color} rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
                  />
                  <div className="relative w-full h-full">
                    <Image
                      src={specialty.icon || "/placeholder.svg"}
                      alt={specialty.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center">{specialty.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

