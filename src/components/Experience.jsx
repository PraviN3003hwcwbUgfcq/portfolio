




// import { motion } from "framer-motion";
// import {
//   FaBriefcase,
//   FaRocket,
//   FaCalendarAlt,
//   FaCode,
//   FaCheckCircle,
//   FaStar,
//   FaUsers,
//   FaLightbulb,
// } from "react-icons/fa";

// const experiences = [
//   {
//     period: "2026 – Present",
//     type: "Full Time",
//     role: "Full Stack Developer",
//     company: "Code Hub",
//     location: "Remote",
//     description:
//       "Working closely with the development team to build and maintain real-world web applications using modern technologies.",
//     points: [
//       "Worked on 5 real-world projects from scratch to deployment.",
//       "Built responsive interfaces using React.js and Tailwind CSS.",
//       "Integrated REST APIs, authentication, payments, and file uploads.",
//       "Optimized performance and improved user experience.",
//     ],
//     stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JavaScript"],
//   },
//   {
//     period: "2025",
//     type: "Internship",
//     role: "Software Development Intern",
//     company: "SDAC Infotech",
//     location: "Mumbai, India",
//     description:
//       "Worked on frontend development and API integration for a Port Management System using MERN technologies.",
//     points: [
//       "Developed frontend UI screens for a Port Management System.",
//       "Integrated REST APIs and improved application responsiveness across devices.",
//       "Collaborated with team members to enhance system performance.",
//     ],
//     stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
//   },
// ];

// const stats = [
//   { icon: <FaBriefcase />, number: "6+", label: "Months Experience" },
//   { icon: <FaRocket />, number: "5", label: "Projects Completed" },
//   { icon: <FaCalendarAlt />, number: "2", label: "Companies Worked" },
// ];

// function Experience() {
//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden bg-[#050505] px-6 py-28 md:px-20"
//     >
//       <div className="absolute left-[-120px] top-20 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[120px]" />
//       <div className="absolute bottom-0 right-[-120px] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[140px]" />

//       <div className="relative z-10 grid gap-10 xl:grid-cols-[1fr_1.2fr]">
//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <p className="mb-5 flex items-center gap-4 text-sm font-semibold uppercase tracking-[8px] text-orange-500">
//             <span className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316]" />
//             Work Experience
//           </p>

//           <h2 className="text-6xl font-black leading-tight md:text-7xl">
//             Exper<span className="text-orange-500">ience</span>
//           </h2>

//           <div className="mt-6 h-1 w-28 rounded-full bg-orange-500" />

//           <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
//             Here’s a quick overview of my professional journey and the impact
//             I’ve created so far.
//           </p>
//         </motion.div>

//         <div className="grid gap-6 md:grid-cols-3">
//           {stats.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.15 }}
//               viewport={{ once: true }}
//               className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-500/40"
//             >
//               <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-3xl text-orange-500">
//                 {item.icon}
//               </div>

//               <h3 className="mt-6 text-5xl font-black">{item.number}</h3>
//               <p className="mt-3 text-gray-400">{item.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <div className="relative z-10 mt-16 space-y-10">
//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 90 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.15, duration: 0.8 }}
//             viewport={{ once: true }}
//             className="grid overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl lg:grid-cols-[280px_1fr_360px]"
//           >
//             <div className="relative border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
//               <div className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-center font-semibold text-orange-500">
//                 {exp.period}
//               </div>

//               <p className="mt-5 text-center text-gray-400">{exp.type}</p>

//               <div className="absolute right-[-9px] top-24 hidden h-5 w-5 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316] lg:block" />
//             </div>

//             <div className="p-8 lg:p-12">
//               <div className="flex flex-wrap items-center gap-6">
//                 <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] text-4xl text-orange-500">
//                   <FaCode />
//                 </div>

//                 <div>
//                   <h3 className="text-3xl font-bold">{exp.role}</h3>
//                   <p className="mt-3 text-lg text-gray-500">
//                     <span className="font-semibold text-orange-500">
//                       {exp.company}
//                     </span>{" "}
//                     • {exp.location}
//                   </p>
//                 </div>
//               </div>

//               <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
//                 {exp.description}
//               </p>

//               <div className="my-8 h-[1px] w-full bg-white/10" />

//               <ul className="space-y-5">
//                 {exp.points.map((point, i) => (
//                   <li key={i} className="flex gap-4 text-gray-300">
//                     <FaCheckCircle className="mt-1 shrink-0 text-orange-500" />
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="border-t border-white/10 p-8 lg:border-l lg:border-t-0">
//               <div className="rounded-[28px] border border-white/10 bg-[#111]/70 p-7">
//                 <h4 className="flex items-center gap-3 text-xl font-bold">
//                   <FaCode className="text-orange-500" />
//                   Tech Stack
//                 </h4>

//                 <div className="mt-6 flex flex-wrap gap-3">
//                   {exp.stack.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="my-7 h-[1px] w-full bg-white/10" />

//                 <h4 className="flex items-center gap-3 text-xl font-bold">
//                   <FaStar className="text-orange-500" />
//                   Key Highlights
//                 </h4>

//                 <div className="mt-6 space-y-4 text-gray-400">
//                   <p className="flex items-center gap-3">
//                     <FaCode className="text-orange-500" />
//                     Clean Code
//                   </p>
//                   <p className="flex items-center gap-3">
//                     <FaUsers className="text-orange-500" />
//                     Team Collaboration
//                   </p>
//                   <p className="flex items-center gap-3">
//                     <FaLightbulb className="text-orange-500" />
//                     Problem Solving
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Experience;





import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaRocket,
  FaCalendarAlt,
  FaCode,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const experiences = [
  {
    period: "2026 – Present",
    type: "Full Time",
    role: "Full Stack Developer",
    company: "Code Hub",
    location: "On Site",
    description:
      "Working closely with the development team to build and maintain real-world web applications using modern technologies.",
    points: [
      "Worked on 5 real-world projects from scratch to deployment.",
      "Built responsive interfaces using React.js and Tailwind CSS.",
      "Integrated REST APIs, authentication, payments, and file uploads.",
      "Optimized performance and improved user experience.",
    ],
    stack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
  },
  {
    period: "2025",
    type: "Internship",
    role: "Software Development Intern",
    company: "SDAC Infotech",
    location: "Mumbai, India",
    description:
      "Worked on frontend development and API integration for a Port Management System using MERN technologies.",
    points: [
      "Developed frontend UI screens for a Port Management System.",
      "Integrated REST APIs and improved application responsiveness across devices.",
      "Collaborated with team members to enhance system performance.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

const stats = [
  { icon: <FaBriefcase />, number: "6+", label: "Months Experience" },
  { icon: <FaRocket />, number: "5", label: "Projects Completed" },
  { icon: <FaCalendarAlt />, number: "2", label: "Companies Worked" },
];

function Experience() {
  const [activeExp, setActiveExp] = useState(0);
  const exp = experiences[activeExp];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 md:px-20"
    >
      <div className="absolute left-[-120px] top-20 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-120px] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 grid gap-10 xl:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 flex items-center gap-4 text-sm font-semibold uppercase tracking-[8px] text-orange-500">
            <span className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316]" />
            Work Experience
          </p>

          <h2 className="text-6xl font-black leading-tight md:text-7xl">
            Exper<span className="text-orange-500">ience</span>
          </h2>

          <div className="mt-6 h-1 w-28 rounded-full bg-orange-500" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Here’s a quick overview of my professional journey and the impact
            I’ve created so far.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-500/40"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-3xl text-orange-500">
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-black">{item.number}</h3>
              <p className="mt-3 text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-orange-500/40"
      >
        <div className="grid lg:grid-cols-[280px_1fr_360px]">
          <div className="relative border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
            <div className="space-y-6">
              {experiences.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExp(index)}
                  className={`w-full rounded-full border px-5 py-4 text-center font-semibold transition-all duration-300 ${
                    activeExp === index
                      ? "border-orange-500 bg-orange-500/10 text-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.35)]"
                      : "border-white/10 bg-black/20 text-gray-400 hover:border-orange-500/40 hover:text-orange-500"
                  }`}
                >
                  {item.period}
                </button>
              ))}
            </div>

            <p className="mt-6 text-center text-gray-400">{exp.type}</p>

            <div className="absolute right-[-9px] top-28 hidden h-5 w-5 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316] lg:block" />
          </div>

          <motion.div
            key={activeExp}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="p-8 lg:p-12"
          >
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#111] text-4xl text-orange-500">
                <FaCode />
              </div>

              <div>
                <h3 className="text-3xl font-bold">{exp.role}</h3>
                <p className="mt-3 text-lg text-gray-500">
                  <span className="font-semibold text-orange-500">
                    {exp.company}
                  </span>{" "}
                  • {exp.location}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              {exp.description}
            </p>

            <div className="my-8 h-[1px] w-full bg-white/10" />

            <ul className="space-y-5">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-4 text-gray-300">
                  <FaCheckCircle className="mt-1 shrink-0 text-orange-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            key={`side-${activeExp}`}
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="border-t border-white/10 p-8 lg:border-l lg:border-t-0"
          >
            <div className="rounded-[28px] border border-white/10 bg-[#111]/70 p-7">
              <h4 className="flex items-center gap-3 text-xl font-bold">
                <FaCode className="text-orange-500" />
                Tech Stack
              </h4>

              <div className="mt-6 flex flex-wrap gap-3">
                {exp.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="my-7 h-[1px] w-full bg-white/10" />

              <h4 className="flex items-center gap-3 text-xl font-bold">
                <FaStar className="text-orange-500" />
                Key Highlights
              </h4>

              <div className="mt-6 space-y-4 text-gray-400">
                <p className="flex items-center gap-3">
                  <FaCode className="text-orange-500" />
                  Clean Code
                </p>
                <p className="flex items-center gap-3">
                  <FaUsers className="text-orange-500" />
                  Team Collaboration
                </p>
                <p className="flex items-center gap-3">
                  <FaLightbulb className="text-orange-500" />
                  Problem Solving
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;