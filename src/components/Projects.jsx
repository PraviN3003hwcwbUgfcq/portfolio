













import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Society Management System",
    desc: "Full-stack platform using React.js, Node.js, Express.js, MongoDB, Razorpay, JWT, Multer, Cloudinary, and Gmail SMTP.",
    live: "https://societymanagementfe.vercel.app",
  },

  {
    title: "Nomore Landing Page",
    desc: "Animated landing page built using React.js and GSAP with smooth scroll-based interactions.",
    live: "https://nomore-agency.webflow.io/",
  },

  {
    title: "Magma ",
    desc: "Dynamic certificate generation and PDF download functionality with improved rendering and positioning logic.",
    live: "https://magmaclub.in/",
  },
  {
    title: "Fitness Club Management System",
    desc: "Backend and frontend development for gym member management, attendance tracking, admin dashboard, and responsive UI using MERN stack.",
    live: "#",
  },

  {
    title: "ShivSena SIR Abiyan",
    desc: "Frontend UI with API integration for dynamic data rendering and responsive layouts.",
    live: "https://lightgray-scorpion-924589.hostingersite.com/",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-6 py-28 md:px-20"
    >
      <div className="absolute right-[-100px] top-20 h-[300px] w-[300px] rounded-full bg-orange-500/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-orange-500">
          Portfolio
        </p>

        <h2 className="text-5xl font-black md:text-7xl">
          Featured <span className="text-orange-500">Projects</span>
        </h2>

        <div className="mt-6 h-1 w-28 rounded-full bg-orange-500" />
      </motion.div>

      <div className="relative z-10 mt-20 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
            }}
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/40"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white transition group-hover:text-orange-500">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-md leading-8 text-gray-400">
                  {project.desc}
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-500 transition group-hover:rotate-45 group-hover:bg-orange-500 group-hover:text-black">
                <FaArrowRight />
              </div>
            </div>

            <div className="mt-10 h-[1px] w-full bg-white/10" />

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm uppercase tracking-[4px] text-gray-500">
                Live Project
              </span>

              <span className="text-sm font-semibold text-orange-500">
                Open Website
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;