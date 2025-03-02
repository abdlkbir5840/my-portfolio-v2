"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    name: "HTML 5",
    icon: "/skills/html.png",
  },
  {
    name: "CSS 3",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "React JS",
    icon: "/skills/react.png",
  },
  {
    name: "Next JS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "Java",
    icon: "/skills/java.png",
  },
  {
    name: "Spring Boot",
    icon: "/skills/spring.png",
  },
  {
    name: "Python",
    icon: "/skills/python.png",
  },
  {
    name: "Linux",
    icon: "/skills/linux.png",
  },
  {
    name: "Node JS",
    icon: "/skills/node.png",
  },
  {
    name: "Express JS",
    icon: "/skills/expressJs.png",
  },
  {
    name: "My SQL",
    icon: "/skills/mysql.png",
  },
  {
    name: "Postgres",
    icon: "/skills/postgres.png",
  },
  {
    name: "SQL Server",
    icon: "/skills/sql-server.png",
  },
  {
    name: "Chroma DB",
    icon: "/skills/chromaDb.png",
  },
  {
    name: "git",
    icon: "/skills/git.png",
  },
  {
    name: "docker",
    icon: "/skills/docker.png",
  },
  {
    name: "Github Action",
    icon: "/skills/githubAction.png",
  },
  {
    name: "NLP",
    icon: "/skills/nlp.png",
  },
  {
    name: "Artificial intelligence",
    icon: "/skills/ai.png",
  },
  {
    name: "Deep Learning",
    icon: "/skills/deep.png",
  },
]

// Group technologies by category
const categoryMap = {
  Frontend: ["HTML 5", "CSS 3", "Tailwind CSS", "JavaScript", "React JS", "Next JS"],
  Backend: ["Java", "Spring Boot", "Node JS", "Express JS", "Python"],
  Databases: ["My SQL", "Postgres", "SQL Server", "Chroma DB"],
  DevOps: ["Linux", "git", "docker", "Github Action"],
  "AI & NLP": ["NLP", "Artificial intelligence", "Deep Learning"],
}

export default function Skills() {
  return (
    <section className="section-wrapper">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">Skills & Technologies</h2>

        {Object.entries(categoryMap).map(([category, techNames], categoryIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {technologies
                .filter((tech) => techNames.includes(tech.name))
                .map((technology, index) => (
                  <motion.div
                    key={technology.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-3 hover:bg-primary/10 transition-colors">
                      <Image
                        src={technology.icon || "/placeholder.png"}
                        alt={technology.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-center">{technology.name}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

