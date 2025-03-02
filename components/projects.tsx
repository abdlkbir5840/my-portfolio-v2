"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    name: "Social Media",
    description:
      "A social media platform that allows users to connect, share posts, and engage with a vibrant community, built with modern web technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/social_media.png",
    source_code_link: "https://github.com/abdlkbir5840/social-media-application",
  },
  {
    name: "Inventory Management",
    description:
      "A web application designed to help businesses track inventory levels, manage stock, and streamline their supply chain operations efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/inventory_management.png",
    source_code_link: "https://github.com/abdlkbir5840/Gestion-De-Stock",
  },
  {
    name: "Medical Student Chatbot",
    description:
      "An AI-powered chatbot tailored for medical students, offering resources, Q&A, and curated study materials for academic success.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "RAG",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
      {
        name: "scraping",
        color: "white-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
    ],
    image: "/projects/medical_student_chatbot.png",
    source_code_link: "https://github.com/abdlkbir5840/Medical-Student-Chatbot-RAG",
  },
  {
    name: "Authentication Server",
    description:
      "This project is an authentication server developed using Node.js with the Express framework and a PostgreSQL database managed by Prisma. It follows best practices for building secure APIs.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
    ],
    image: "/projects/auth_server.jpg",
    source_code_link: "https://github.com/abdlkbir5840/Authentication-server",
  },
  {
    name: "Microservice Spring Security",
    description:
      "This project is an authentication microservice developed with Spring Security and Java, incorporating role-based authorization and PostgreSQL for data management. It follows best practices to ensure secure, scalable APIs.",
    tags: [
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "spring-security",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/spring_security.png",
    source_code_link: "https://github.com/abdlkbir5840/Micro-service-spring-securite",
  },
  {
    name: "Logo Generator (Generative AI)",
    description:
      "An AI-powered logo generator that creates unique logos based on user prompts, leveraging prompt engineering, Next.js, and LLMs like Gemini and Midjourney.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "LLMs",
        color: "green-text-gradient",
      },
      {
        name: "Gemini",
        color: "pink-text-gradient",
      },
      {
        name: "Midjourney",
        color: "orange-text-gradient",
      },
      {
        name: "Prompt Engineering",
        color: "white-text-gradient",
      },
      {
        name: "AI",
        color: "yellow-text-gradient",
      },
    ],
    image: "/projects/logo_generator.png",
    source_code_link: "https://github.com/abdlkbir5840/logo-generator-genai",
  },
  {
    name: "UI Generator (AI-powered)",
    description:
      "An AI-driven UI generator that takes wireframes and converts them into functional React components. Built using LLMs (Gemini), Next.js, React, and Supabase.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "LLMs",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini",
        color: "orange-text-gradient",
      },
      {
        name: "Supabase",
        color: "white-text-gradient",
      },
      {
        name: "Prompt Engineering",
        color: "yellow-text-gradient",
      },
      {
        name: "AI",
        color: "purple-text-gradient",
      },
    ],
    image: "/projects/ui_generator.png",
    source_code_link: "https://github.com/abdlkbir5840/UI2Code-GenAI",
  },
  {
    name: "More Projects",
    description:
      "If you're interested in exploring more of my work, feel free to check out my GitHub profile. There, you will find a collection of projects I've worked on, showcasing my skills in technologies and problem-solving approaches.",
    tags: [
      {
        name: "GitHub",
        color: "pink-text-gradient",
      },
    ],
    image: "/projects/github_logo.jpeg",
    source_code_link: "https://github.com/abdlkbir5840",
  },
];



export default function Projects() {
  return (
    <section className="section-wrapper px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full flex flex-col cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 p-2 bg-background/80 backdrop-blur-sm rounded-full">
                    <Link
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                </div>
                <CardContent className="flex-grow pt-6">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-0">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className={tag.color}>
                      {tag.name}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

