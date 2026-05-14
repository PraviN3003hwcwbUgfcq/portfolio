// import { motion } from "framer-motion";
// import resume from "../assets/images/Pravin_Resumes.pdf";
// import pravin1 from "../assets/images/pravin1.jpg";

// import {
//     FaCode,
//     FaRocket,
//     FaPuzzlePiece,
//     FaDownload,
//     FaPaperPlane,
//     FaBriefcase,
//     FaMapMarkerAlt,
//     FaEnvelope,
// } from "react-icons/fa";

// function About() {
//     return (
//         <section
//             id="about"
//             className="relative overflow-hidden bg-[#050505] px-6 py-28 md:px-20"
//         >
//             {/* Glow Effects */}
//             <div className="absolute left-[-100px] top-20 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[120px]" />

//             <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[120px]" />

//             <div className="relative z-10 grid gap-14 xl:grid-cols-2">
//                 {/* LEFT */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -80 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm text-orange-500">
//                         <span className="h-2 w-2 rounded-full bg-orange-500" />
//                         Get To Know Me
//                     </div>

//                     <h2 className="text-6xl font-black leading-tight md:text-7xl">
//                         About <span className="text-orange-500">Me</span>
//                     </h2>

//                     <div className="mt-5 h-1 w-28 rounded-full bg-orange-500" />

//                     <p className="mt-10 max-w-xl text-lg leading-9 text-gray-400">
//                         I'm a passionate Full Stack Developer who loves turning ideas into
//                         real-world web applications. I enjoy building clean, efficient, and
//                         user-friendly solutions using modern technologies.
//                     </p>

//                     <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">
//                         I specialize in the MERN stack and modern frontend tools with a
//                         strong focus on performance, responsiveness, and premium UI
//                         experiences.
//                     </p>

//                     {/* Features */}
//                     <div className="mt-14 grid gap-8 md:grid-cols-3">
//                         <div>
//                             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500">
//                                 <FaCode />
//                             </div>

//                             <h4 className="mt-5 text-lg font-bold text-white">
//                                 Clean Code
//                             </h4>

//                             <p className="mt-2 text-sm leading-7 text-gray-500">
//                                 Writing scalable and maintainable code.
//                             </p>
//                         </div>

//                         <div>
//                             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500">
//                                 <FaPuzzlePiece />
//                             </div>

//                             <h4 className="mt-5 text-lg font-bold text-white">
//                                 Problem Solver
//                             </h4>

//                             <p className="mt-2 text-sm leading-7 text-gray-500">
//                                 Love solving real-world development problems.
//                             </p>
//                         </div>

//                         <div>
//                             <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500">
//                                 <FaRocket />
//                             </div>

//                             <h4 className="mt-5 text-lg font-bold text-white">
//                                 Fast Learner
//                             </h4>

//                             <p className="mt-2 text-sm leading-7 text-gray-500">
//                                 Always learning and adapting to new tech.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Quote Box */}


//                     {/* Buttons */}
//                     <div className="mt-12 flex flex-wrap gap-5">
//                         <a
//                             href={resume}
//                             download="Pravin_Resume.pdf"
//                             className="flex items-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
//                         >
//                             <FaDownload />
//                             Download Resume
//                         </a>

//                         <a
//                             href="mailto:pravinyadav3003@gmail.com"
//                             className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-white transition hover:border-orange-500 hover:text-orange-500"
//                         >
//                             <FaPaperPlane />
//                             Hire Me
//                         </a>
//                     </div>
//                 </motion.div>
//                 {/* RIGHT */}
// <motion.div
//   initial={{ opacity: 0, x: 80 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
//   className="space-y-8"
// >
//   <div className="overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
    
//     {/* Top Section */}
//     <div className="grid items-center gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr]">
      
//       {/* Image Side */}
//       <div className="relative flex items-center justify-center overflow-hidden rounded-[30px] bg-[#0d0d0d] p-8">
        
//         <div className="absolute h-[280px] w-[280px] rounded-full bg-orange-500/20 blur-[90px]" />

//         <img
//           src={pravin1}
//           alt="profile"
//           className="relative z-10 h-[420px] rounded-[30px] object-cover"
//         />
//       </div>

//       {/* Info Side */}
//       <div className="space-y-5">
        
//         {/* Name */}
//         <div className="flex items-center gap-5 rounded-2xl border border-white/5 bg-[#111] p-5">
//           <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500">
//             <FaBriefcase />
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">Experience</p>
//             <h4 className="text-lg font-semibold text-white">
//               Full Stack Dev
//             </h4>
//           </div>
//         </div>

//         {/* Location */}
//         <div className="flex items-center gap-5 rounded-2xl border border-white/5 bg-[#111] p-5">
//           <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500">
//             <FaMapMarkerAlt />
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">Location</p>
//             <h4 className="text-lg font-semibold text-white">
//               Mumbai, India
//             </h4>
//           </div>
//         </div>

//         {/* Email */}
//         <div className="flex items-center gap-5 rounded-2xl border border-white/5 bg-[#111] p-5">
//           <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500">
//             <FaEnvelope />
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">Email</p>

//             <a
//               href="mailto:pravinyadav3003@gmail.com"
//               className="text-lg font-semibold text-white transition hover:text-orange-500"
//             >
//               pravinyadav3003@gmail.com
//             </a>
//           </div>
//         </div>

//         {/* Availability */}
//         <div className="flex items-center gap-5 rounded-2xl border border-white/5 bg-[#111] p-5">
//           <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-500">
//             <FaRocket />
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">Availability</p>
//             <h4 className="text-lg font-semibold text-white">
//               Open To Work
//             </h4>
//           </div>
//         </div>

//       </div>
//     </div>
//   </div>
// </motion.div>

//                           </div>
//         </section>
//     );
// }

// export default About;





































import { motion } from "framer-motion";
import resume from "../assets/images/Pravin_Resumes.pdf";
import pravin1 from "../assets/images/Pravin1.jpg";

import {
  FaCode,
  FaRocket,
  FaPuzzlePiece,
  FaDownload,
  FaPaperPlane,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-4 py-20 sm:px-6 md:px-10 lg:px-16 xl:px-20 xl:py-28"
    >
      <div className="absolute left-[-100px] top-20 h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-100px] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 grid items-start gap-12 xl:grid-cols-2 xl:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs text-orange-500 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Get To Know Me
          </div>

          <h2 className="text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            About <span className="text-orange-500">Me</span>
          </h2>

          <div className="mt-5 h-1 w-24 rounded-full bg-orange-500 sm:w-28" />

          <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
            I'm a passionate Full Stack Developer who loves turning ideas into
            real-world web applications. I enjoy building clean, efficient, and
            user-friendly solutions using modern technologies.
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
            I specialize in the MERN stack and modern frontend tools with a
            strong focus on performance, responsiveness, and premium UI
            experiences.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:mt-14">
            {[
              {
                icon: <FaCode />,
                title: "Clean Code",
                text: "Writing scalable and maintainable code.",
              },
              {
                icon: <FaPuzzlePiece />,
                title: "Problem Solver",
                text: "Love solving real-world development problems.",
              },
              {
                icon: <FaRocket />,
                title: "Fast Learner",
                text: "Always learning and adapting to new tech.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl bg-white/[0.02] p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-xl text-orange-500 sm:h-16 sm:w-16 sm:text-2xl">
                  {item.icon}
                </div>

                <h4 className="mt-4 text-base font-bold text-white sm:text-lg">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap xl:mt-12">
            <a
              href={resume}
              download="Pravin_Resume.pdf"
              className="flex items-center justify-center gap-3 rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-black transition hover:scale-105 sm:px-8"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="mailto:pravinyadav3003@gmail.com"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 font-semibold text-white transition hover:border-orange-500 hover:text-orange-500 sm:px-8"
            >
              <FaPaperPlane />
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:rounded-[35px]">
            <div className="grid items-center gap-6 p-4 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8 xl:grid-cols-[1fr_1fr]">
              <div className="relative flex items-center justify-center overflow-hidden rounded-[24px] bg-[#0d0d0d] p-5 sm:p-8">
                <div className="absolute h-[220px] w-[220px] rounded-full bg-orange-500/20 blur-[90px]" />

                <img
                  src={pravin1}
                  alt="Pravin Yadav"
                  className="relative z-10 h-[320px] w-full max-w-[260px] rounded-[28px] object-cover sm:h-[380px] lg:h-[420px]"
                />
              </div>

              <div className="space-y-4 sm:space-y-5">
                {[
                  {
                    icon: <FaBriefcase />,
                    label: "Experience",
                    value: "Full Stack Dev",
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    label: "Location",
                    value: "Mumbai, India",
                  },
                  {
                    icon: <FaEnvelope />,
                    label: "Email",
                    value: "pravinyadav3003@gmail.com",
                    mail: true,
                  },
                  {
                    icon: <FaRocket />,
                    label: "Availability",
                    value: "Open To Work",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#111] p-4 sm:gap-5 sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-xl text-orange-500 sm:h-14 sm:w-14 sm:text-2xl">
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 sm:text-sm">
                        {item.label}
                      </p>

                      {item.mail ? (
                        <a
                          href="mailto:pravinyadav3003@gmail.com"
                          className="break-all text-sm font-semibold text-white transition hover:text-orange-500 sm:text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <h4 className="text-base font-semibold text-white sm:text-lg">
                          {item.value}
                        </h4>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;