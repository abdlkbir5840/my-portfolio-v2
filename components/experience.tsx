"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "./ui/badge"

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Passisto",
    icon: "/company/passisto.svg",
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Developed the backend of a chatbot, integrating advanced features and payment services.",
      "Managed infrastructure and deployment for multiple projects.",
      "Collaborated with cross-functional teams to deliver scalable and user-centric solutions.",
      "Technologies used: Gen AI,LLMs, AI Agent, Pyhton, Java, Spring Boot, Express.js, Node.js, Prisma, PostgreSQL, Stripe, Docker, CI/CD, Azure Cloud, Next Js, React Js",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "IRMA Service",
    icon: "/company/irma_service.png",
    iconBg: "#E6DEDD",
    date: "February 2024 - May 2024",
    points: [
      "Led infrastructure management and deployment for various projects.",
      "Worked closely with development teams on Laravel and ERP projects, ensuring efficient deployment and applying best DevOps practices.",
      "Technologies used: Docker, Jenkins, GitHub Actions, CI/CD, SonarQube, Ubuntu.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Lkarriere",
    icon: "/company/ajicod.svg",
    iconBg: "#E6DEDD",
    date: "July 2023 - September 2023",
    points: [
      "Developed both backend and frontend for an eCommerce project.",
      "Ensured seamless integration of features and optimized system performance.",
      "Technologies used: Node.js, Express.js, TypeScript, React.js, Redux, Next UI, PostgreSQL, GitHub, Docker, Trello.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="work" className="section-wrapper bg-[#0a0a16] text-white py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-6xl font-bold mb-20 text-white text-center">Work Experience.</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-24 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex flex-col items-center">
                  <div
                    className="rounded-full p-3 w-16 h-16 flex items-center justify-center border-2 border-white"
                    style={{ backgroundColor: experience.iconBg }}
                  >
                    <Image
                      src={experience.icon || "/placeholder.svg"}
                      alt={experience.company_name}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 text-sm whitespace-nowrap">{experience.date}</span>
                </div>
              </div>

              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
                <div className="bg-[#1e1a3c] p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-1">{experience.title}</h3>
                  <p className="text-gray-400 mb-4">{experience.company_name}</p>

                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {experience.points.map((point, pointIndex) => {
                      // Skip the "Technologies used" point as we'll display it separately
                      if (!point.includes("Technologies used:")) {
                        return (
                          <li key={pointIndex} className="text-gray-300">
                            {point}
                          </li>
                        )
                      }
                      return null
                    })}
                  </ul>

                  <div className="mt-4">
                    <p className="text-gray-300 font-medium mb-2">Technologies used:</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.points
                        .find((point) => point.includes("Technologies used:"))
                        ?.split("Technologies used:")[1]
                        .split(",")
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="bg-[#2a2550] border-[#4a3f8a] text-gray-200"
                          >
                            {tech.trim().replace(".", "")}
                          </Badge>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

