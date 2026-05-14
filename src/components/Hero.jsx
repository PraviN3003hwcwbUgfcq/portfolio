// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// function Hero() {
//     return (
//         <section
//             id="home"
//             className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 md:px-20"
//         >
//             <motion.div
//                 className="absolute right-[-120px] top-20 h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-[100px]"
//                 animate={{ y: [0, 60, 0], scale: [1, 1.2, 1] }}
//                 transition={{ duration: 6, repeat: Infinity }}
//             />

//             <motion.div
//                 initial={{ opacity: 0, y: 70 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.9 }}
//                 className="relative z-10"
//             >
//                 <motion.p
//                     initial={{ opacity: 0, x: -40 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="mb-4 text-lg font-medium text-orange-500"
//                 >
//                     Full Stack Developer
//                 </motion.p>

//                 <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
//                     Hi, I'm <span className="text-orange-500">Pravin Yadav</span>
//                 </h1>

//                 <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
//                     I build responsive web applications, backend APIs, dashboards,
//                     authentication systems, payment integrations, and deployment-ready
//                     projects.
//                 </p>

//                <div className="mt-8 flex gap-5 text-3xl text-gray-400">
//   <a
//     href="https://github.com/PraviN3003hwcwbUgfcq"
//     target="_blank"
//     rel="noreferrer"
//     className="transition hover:scale-125 hover:text-orange-500"
//   >
//     <FaGithub />
//   </a>

//   <a
//   href="https://www.linkedin.com/in/YOUR-USERNAME/"
//   target="_blank"
//   rel="noreferrer"
//   className="transition hover:scale-125 hover:text-orange-500"
// >
//   <FaLinkedin />
// </a>
// </div>
//             </motion.div>
//         </section>
//     );
// }

// export default Hero;





















import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pt-28 md:px-20"
    >
      {/* Glow Effects */}
      <motion.div
        className="absolute right-[-120px] top-20 h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-[100px]"
        animate={{ y: [0, 60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute left-[-100px] bottom-0 h-[250px] w-[250px] rounded-full bg-orange-500/10 blur-[100px]"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-lg font-medium text-orange-500"
          >
            Full Stack Developer
          </motion.p>

          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="text-orange-500">
              Pravin Yadav
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
            I build responsive web applications, backend APIs,
            dashboards, authentication systems, payment integrations,
            and deployment-ready projects.
          </p>

          {/* SOCIALS */}
          <div className="mt-10 flex gap-5 text-3xl text-gray-400">
            <a
              href="https://github.com/PraviN3003hwcwbUgfcq"
              target="_blank"
              rel="noreferrer"
              className="transition hover:scale-125 hover:text-orange-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:scale-125 hover:text-orange-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Main Code Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="w-[520px] rounded-[30px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
          >
            {/* Top */}
            {/* <div className="mb-6 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div> */}

            {/* Code */}
            <div className="space-y-4 font-mono text-sm md:text-base">
              <p className="text-orange-500">
                const developer = {"{"}
              </p>

              <p className="ml-6 text-white">
                name:
                <span className="text-orange-400">
                  {" "}
                  "Pravin Yadav"
                </span>
                ,
              </p>

              <p className="ml-6 text-white">
                stack:
                <span className="text-orange-400">
                  {" "}
                  "MERN Stack"
                </span>
                ,
              </p>

              <p className="ml-6 text-white">
                skills:
                <span className="text-orange-400">
                  {" "}
                  ["React", "Node", "MongoDB"]
                </span>
                ,
              </p>

              <p className="ml-6 text-white">
                projects:
                <span className="text-orange-400">
                  {" "}
                  "5+"
                </span>
                ,
              </p>

              <p className="ml-6 text-white">
                passion:
                <span className="text-orange-400">
                  {" "}
                  "Building Modern Products"
                </span>
              </p>

              <p className="text-orange-500">{"};"}</p>
            </div>

            {/* Bottom Pills */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                {
                  name: "React",
                  icon: <FaReact />,
                },
                {
                  name: "Node",
                  icon: <FaNodeJs />,
                },
                {
                  name: "MongoDB",
                  icon: <SiMongodb />,
                },
                {
                  name: "Express",
                  icon: <SiExpress />,
                },
                {
                  name: "Tailwind",
                  icon: <SiTailwindcss />,
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                  }}
                  className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-400"
                >
                  <span className="text-lg">
                    {tech.icon}
                  </span>

                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -bottom-15 -left-8 rounded-2xl border border-white/10 bg-[#111] px-6 py-5 shadow-2xl"
          >
            <h4 className="text-3xl font-black text-orange-500">
              5+
            </h4>

            <p className="mt-0 text-sm text-gray-400">
              Projects Completed
            </p>
          </motion.div>

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-6 top-5 rounded-2xl border border-white/10 bg-[#111] px-6 py-5 shadow-2xl"
          >
            <h4 className="text-3xl font-black text-orange-500">
              MERN
            </h4>

            <p className="mt-1 text-sm text-gray-400">
              Full Stack Developer
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;