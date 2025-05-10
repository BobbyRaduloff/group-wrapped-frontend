import { motion } from "framer-motion";

export function TimelineSteps() {
  return (
    <motion.div
      className="mt-24 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      {/* Timeline connector */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-36 lg:bottom-0 w-1 bg-gradient-to-b from-white/0 via-white/20 to-white/0 -translate-x-1/2 z-0"></div>

      {/* Step 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-start mb-8 md:mb-12 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center w-full md:w-1/2 justify-start md:justify-end pr-0 md:pr-8 pl-16 md:pl-0 mb-4 md:mb-0">
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 w-full max-w-md"
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-2xl text-white font-semibold mb-3">
              Step 1: Export Chat
            </h3>
            <p className="text-white/80">
              Open WhatsApp, go to your group chat, tap the three dots menu, and
              select "Export chat" (without media).
            </p>
          </motion.div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#44624a]/80 shadow-lg absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2">
          <span className="text-white font-bold">1</span>
        </div>
      </motion.div>

      {/* Step 2 */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-start mb-8 md:mb-12 relative z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center w-full md:w-1/2 justify-start md:justify-start pr-0 pl-16 md:pl-8 mb-4 md:mb-0">
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/30 w-full max-w-md"
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-2xl text-white font-semibold mb-3">
              Step 2: Upload Chat
            </h3>
            <p className="text-white/80">
              Save the exported chat file to your device, then drag and drop it
              into the upload area above.
            </p>
          </motion.div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#44624a]/80 shadow-lg absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2">
          <span className="text-white font-bold">2</span>
        </div>
      </motion.div>

      {/* Step 3 */}
      <motion.div
        className="flex flex-col md:flex-row items-start relative z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center w-full md:w-1/2 justify-start md:justify-end pr-0 md:pr-8 pl-16 md:pl-0 mb-4 md:mb-0">
          <motion.div
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20 w-full max-w-md"
            whileHover={{
              scale: 1.03,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h3 className="text-2xl text-white font-semibold mb-3">
              Step 3: Enjoy Wrapped
            </h3>
            <p className="text-white/80">
              View beautiful visualizations and insights about your group
              conversation - see who talks the most, peak activity times, and
              more!
            </p>
          </motion.div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#44624a]/80 shadow-lg absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2">
          <span className="text-white font-bold">3</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
