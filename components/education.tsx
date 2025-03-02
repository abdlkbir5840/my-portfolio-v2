"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const education = [
  {
    degree: "PhD in Artificial Intelligence",
    institution: "National Higher School For Computer Science and Systems Analysis",
    icon: "/university/ensias.jpg",
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "Specializing in Generative AI and Natural Language Processing (NLP).",
      "Conducting advanced research to develop innovative solutions in AI-driven text generation and understanding.",
      "Collaborating with experts to address real-world challenges in NLP and enhance AI applications.",
    ],
  },
  {
    degree: "Master's in Business Intelligence",
    institution: "Faculty of Science and Technology of Béni Mellal",
    icon: "/university/fstb.png",
    iconBg: "#E6DEDD",
    date: "September 2022 - July 2024",
    points: [
      "Specialized in Decision Support Systems and Business Intelligence.",
      "Developed advanced skills in data analysis and system optimization.",
      "Worked on a thesis implementing innovative optimization methods for SVM classifiers.",
    ],
  },
  {
    degree: "Bachelor's in Software Engineering",
    institution: "Faculty of Science and Technology of Errachidia",
    icon: "/university/fste.jpeg",
    iconBg: "#383E56",
    date: "September 2021 - July 2022",
    points: [
      "Focused on software development, design patterns, and system architecture.",
      "Gained a solid foundation in backend and frontend development.",
    ],
  },
  {
    degree: "Diploma of University Studies in Science and Technology",
    institution: "Faculty of Science and Technology of Errachidia",
    icon: "/university/fste.jpeg",
    iconBg: "#E6DEDD",
    date: "September 2019 - July 2021",
    points: [
      "Covered foundational topics in programming, databases, and algorithms.",
      "Prepared for advanced studies in computer science and engineering.",
    ],
  },
  {
    degree: "High school diploma in Physics and Chemistry",
    institution: "Lycée Hassan II",
    icon: "/university/lycee.png",
    iconBg: "#383E56",
    date: "September 2018 - July 2019",
    points: [
      "Specialized in physical sciences and analytical problem-solving.",
      "Developed critical thinking skills and a strong foundation in scientific studies.",
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="section-wrapper bg-[#0a0a16] text-white py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-6xl font-bold mb-20 text-white text-center">Education.</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20" />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-24 flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
            >
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex flex-col items-center">
                  <div
                    className="rounded-full p-3 w-16 h-16 flex items-center justify-center border-2 border-white"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={item.institution}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 text-sm whitespace-nowrap">{item.date}</span>
                </div>
              </div>

              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8"}`}>
                <div className="bg-[#1e1a3c] p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-1">{item.degree}</h3>
                  <p className="text-gray-400 mb-4">{item.institution}</p>

                  <div className="mt-4">
                    <p className="text-gray-300 font-medium mb-2">Key Focus Areas:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      {item.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-gray-300">
                          {point}
                        </li>
                      ))}
                    </ul>
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

