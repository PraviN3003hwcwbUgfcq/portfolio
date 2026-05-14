import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaBookOpen,
  FaStar,
  FaQuoteLeft,
  FaCalendarAlt,
} from "react-icons/fa";

const educationData = [
  {
    year: "2021 – 2025",
    type: "Bachelor Degree",
    title: "Bachelor of Engineering in Computer Science",
    institute: "St. John College of Engineering and Management",
    description:
      "Focused on software development, web technologies, DBMS, data structures, algorithms, and modern application development.",
    icon: <FaGraduationCap />,
    sideInfo: "BE Computer Science",
  },

  {
    year: "2020 – 2021",
    type: "Higher Secondary",
    title: "Higher Secondary Certificate (HSC)",
    institute: "Sompant Dandekar Junior College",
    description:
      "Completed higher secondary education with focus on science and technical fundamentals.",
    icon: <FaBookOpen />,
    sideInfo: "HSC",
  },

  {
    year: "2018 – 2019",
    type: "Secondary School",
    title: "Secondary School Certificate (SSC)",
    institute: "Holy Spirit English High School",
    description:
      "Completed secondary school education with strong academic foundation and interest in technology.",
    icon: <FaCertificate />,
    sideInfo: "SSC",
  },
];

const stats = [
  {
    icon: <FaGraduationCap />,
    value: "1",
    label: "Degree",
  },

  {
    icon: <FaCertificate />,
    value: "3",
    label: "Certifications",
  },

  {
    icon: <FaBookOpen />,
    value: "4+",
    label: "Subjects Covered",
  },

  {
    icon: <FaStar />,
    value: "6.6",
    label: "CGPA",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 md:px-20"
    >
      {/* Glow */}
      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[140px]" />

      {/* Header */}
      <div className="relative z-10 grid gap-10 xl:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 flex items-center gap-4 text-sm font-semibold uppercase tracking-[8px] text-orange-500">
            <span className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316]" />
            My Education
          </p>

          <h2 className="text-6xl font-black leading-tight md:text-7xl">
            Educ<span className="text-orange-500">ation</span>
          </h2>

          <div className="mt-6 h-1 w-28 rounded-full bg-orange-500" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            My academic background and professional certifications that have
            shaped my journey as a developer.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-orange-500/40"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-3xl text-orange-500">
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-black">{item.value}</h3>

              <p className="mt-3 text-gray-400">{item.label}</p>

              <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-orange-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative z-10 mt-20">
        <div className="absolute left-[130px] top-0 hidden h-full w-[2px] bg-white/10 lg:block" />

        <div className="space-y-10">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="grid gap-6 lg:grid-cols-[220px_1fr]"
            >
              {/* Left Timeline */}
              <div className="relative hidden lg:block">
                <div className="pr-10 text-right">
                  <h4 className="text-3xl font-bold text-orange-500">
                    {item.year}
                  </h4>

                  <p className="mt-3 text-lg text-gray-400">{item.type}</p>
                </div>

                <div className="absolute right-[-11px] top-6 h-5 w-5 rounded-full bg-orange-500 shadow-[0_0_25px_#f97316]" />
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-orange-500/40">
                <div className="grid items-center gap-8 p-8 lg:grid-cols-[120px_1fr_250px]">
                  {/* Icon */}
                  <div className="flex items-center justify-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/10 bg-[#111] text-5xl text-orange-500">
                      {item.icon}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-xl font-semibold text-orange-500">
                      {item.institute}
                    </p>

                    <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Side Info */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-4 text-orange-500">
                      <FaCalendarAlt />

                      <span className="font-semibold">{item.year}</span>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-gray-300">
                      {item.sideInfo}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    
    </section>
  );
}

export default Education;