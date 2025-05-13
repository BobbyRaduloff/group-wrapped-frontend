import { createFileRoute, Link } from "@tanstack/react-router";
import { FileDropZone } from "../components/ui/file-drop-zone";
import { VideoPlayer } from "../components/ui/video-player";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import demoVideo from "../assets/demo.mp4";
import thumbnailImage from "../assets/thumbnail.jpg";
import { useNavigate } from "@tanstack/react-router";
import { TimelineSteps } from "../components/ui/timeline-steps";

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
    <div className="w-screen overflow-x-hiddn min-h-screen flex flex-col items-center justify-start p-8 md:p-16 select-none">
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
            acceptedFileTypes={[".txt", ".zip"]}
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

        <TimelineSteps />
      </motion.div>

      <p className="mt-8 text-center">
        Contact us at{" "}
        <a className="underline" href="mailto:hello@whatswrapped.me">
          hello@whatswrapped.me
        </a>
        <br />
        <Link to="/toc" className="underline">
          Terms and Conditions
        </Link>
        .
        <br />
        Copyright (c) 2025.
        <br />
        All Rights Reserved.
      </p>
    </div>
  );
}
