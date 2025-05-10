import { createFileRoute } from "@tanstack/react-router";
import { FileDropZone } from "../components/ui/file-drop-zone";
import { VideoPlayer } from "../components/ui/video-player";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import demoVideo from "../assets/demo.mp4";
import thumbnailImage from "../assets/thumbnail.jpg";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    console.log("File selected:", file.name);
  };

  const handleContinue = () => {
    navigate({ to: "/loading" });
  };

  return (
    <div className="w-screen overflow-x-hidden min-h-screen flex flex-col items-center justify-start p-8 md:p-16 select-none bg-gradient-to-b from-background via-[#c0cfb2] to-background">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        WhatsWrapped
      </motion.h1>
      <motion.h2
        className="text-xl md:text-2xl text-white mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get insights from your WhatsApp conversations.
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.div
          key="dropzone"
          className="w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <FileDropZone
            onFileSelect={handleFileSelect}
            acceptedFileTypes={[".txt"]}
          />
        </motion.div>
        {selectedFile && (
          <motion.div
            key="fileInfo"
            className="w-full p-6 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="flex items-start mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <label htmlFor="terms" className="text-white/80 text-sm">
                By clicking continue, you agree to our{" "}
                <a href="#" className="text-white/80 font-medium underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-white/80 font-medium underline">
                  Privacy Policy
                </a>
                .
              </label>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <motion.button
                className="px-4 py-2 bg-[#44624a] text-white rounded-md hover:bg-[#3a533f] transition-all hover:scale-105 duration-300 hover:cursor-pointer"
                onClick={handleContinue}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Continue
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="w-full mt-16 max-w-5xl mx-auto">
        <motion.h3
          className="text-2xl text-white font-semibold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          How To Use WhatsWrapped
        </motion.h3>
        <VideoPlayer src={demoVideo} thumbnail={thumbnailImage} />

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
                  Open WhatsApp, go to your group chat, tap the three dots menu,
                  and select "Export chat" (without media).
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
                  Save the exported chat file to your device, then drag and drop
                  it into the upload area above.
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
                  conversation - see who talks the most, peak activity times,
                  and more!
                </p>
              </motion.div>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#44624a]/80 shadow-lg absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2">
              <span className="text-white font-bold">3</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
