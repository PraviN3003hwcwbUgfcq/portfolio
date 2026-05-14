import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRender,
  SiRazorpay,
  SiCloudinary,
  SiHtml5,
  SiPhp,
} from "react-icons/si";

import { TbBrandCss3 } from "react-icons/tb";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "SQL", icon: "🗄️" },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <TbBrandCss3 /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
    ],
  },

  {
    title: "Services",
    skills: [
      { name: "Razorpay", icon: <SiRazorpay /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
      { name: "JWT", icon: "🔐" },
      { name: "REST APIs", icon: "⚡" },
      { name: "Multer", icon: "📁" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 md:px-20"
    >
      <div className="absolute left-[-100px] top-20 h-[300px] w-[300px] rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-orange-500">
          Expertise
        </p>

        <h2 className="text-5xl font-black leading-tight md:text-7xl">
          Technical <span className="text-orange-500">Skills</span>
        </h2>

        <div className="mt-6 h-1 w-28 rounded-full bg-orange-500" />

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Technologies and tools I use to build premium modern web experiences.
        </p>
      </motion.div>

      <div className="relative z-10 mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: categoryIndex * 0.1,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
            className="group rounded-[30px] border border-white/10 bg-white/[0.03] p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-orange-500/40 hover:bg-white/[0.05]"
          >
            <h3 className="mb-8 text-2xl font-bold text-white">
              <span className="text-orange-500">#</span> {category.title}
            </h3>

            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-orange-500/10 bg-[#111] px-5 py-4 shadow-lg transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/10"
                >
                  <span className="text-2xl text-orange-500">
                    {skill.icon}
                  </span>

                  <span className="text-sm font-medium tracking-wide text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;