import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 md:px-20"
    >
      <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[130px]" />
      <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 flex items-center gap-4 text-sm font-semibold uppercase tracking-[8px] text-orange-500">
            <span className="h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_20px_#f97316]" />
            Contact Me
          </p>

          <h2 className="text-6xl font-black leading-tight md:text-7xl">
            Let's <span className="text-orange-500">Connect</span>
          </h2>

          <div className="mt-6 h-1 w-28 rounded-full bg-orange-500" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Have a project, opportunity, or collaboration idea? Feel free to
            reach out. I’m always open to discussing new ideas.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:pravinyadav3003@gmail.com"
              className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-orange-500/40 hover:bg-orange-500/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-xl text-orange-500">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <h4 className="break-all text-lg font-semibold text-white">
                  pravinyadav3003@gmail.com
                </h4>
              </div>
            </a>

            <a
              href="tel:+919637601634"
              className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-orange-500/40 hover:bg-orange-500/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-xl text-orange-500">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <h4 className="text-lg font-semibold text-white">
                  +91 9637601634
                </h4>
              </div>
            </a>

            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-xl text-orange-500">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <h4 className="text-lg font-semibold text-white">
                  Mumbai, India
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/PraviN3003hwcwbUgfcq"
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-xl text-white transition hover:border-orange-500 hover:text-orange-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-xl text-white transition hover:border-orange-500 hover:text-orange-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          action="mailto:pravinyadav3003@gmail.com"
          method="POST"
          encType="text/plain"
          className="rounded-[35px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-10"
        >
          <h3 className="text-3xl font-bold text-white">
            Send Message
          </h3>

          <p className="mt-3 text-gray-400">
            Fill the form and it will open your mail app.
          </p>

          <div className="mt-8 grid gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-2xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="rounded-2xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="resize-none rounded-2xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
            />

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;