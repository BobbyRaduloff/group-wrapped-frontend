import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

interface FileDropZoneProps {
  onFileSelect: (file: File) => void;
  acceptedFileTypes?: string[];
  maxSize?: number;
}

export function FileDropZone({
  onFileSelect,
  acceptedFileTypes = [".txt", ".zip"],
  maxSize = 1 * 1024 * 1024, // 5MB default
}: FileDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const validateAndProcessFile = (file: File) => {
    setError(null);

    // Check file type
    const fileType = file.name.substring(file.name.lastIndexOf("."));
    if (acceptedFileTypes.length > 0 && !acceptedFileTypes.includes(fileType)) {
      setError(
        `Invalid file type. Accepted types: ${acceptedFileTypes.join(", ")}`,
      );
      return;
    }

    // Check file size
    if (file.size > maxSize) {
      setError(`File is too large. Maximum size: ${maxSize / (1024 * 1024)}MB`);
      return;
    }

    onFileSelect(file);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: isDragging ? 1.03 : 1,
          boxShadow: isDragging
            ? "0 8px 30px rgba(0, 0, 0, 0.12)"
            : "0 4px 6px rgba(0, 0, 0, 0.05)",
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className={`
          relative flex flex-col items-center justify-center w-full p-10 
          border-2 border-dashed rounded-xl cursor-pointer
          transition-colors duration-300 ease-in-out
          bg-secondary/10 hover:bg-secondary/20
          ${isDragging ? "border-secondary" : "border-secondary"}
        `}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={acceptedFileTypes.join(",")}
          onChange={handleFileInput}
        />

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: isDragging ? 180 : 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
            className="mb-4 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </motion.div>

          <motion.div
            className="text-center"
            animate={{ opacity: isDragging ? 0.3 : 1 }}
          >
            <h3 className="text-lg font-medium text-white">
              {isDragging
                ? "Drop it!"
                : "Click to upload your WhatsApp chat file!"}
            </h3>
            <p className="mt-1 text-sm text-white/80">or drag and drop</p>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-2 left-0 right-0 text-center text-red-500 text-sm p-1"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <p className="mt-8 text-center w-full">
        By uploading, you agree to our{" "}
        <Link to="/toc" className="underline">
          Terms and Conditions
        </Link>
        .
      </p>
    </div>
  );
}
