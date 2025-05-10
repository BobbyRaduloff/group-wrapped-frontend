import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";

export const Route = createFileRoute("/loading")({
  component: LoadingComponent,
});

function LoadingComponent() {
  const [loadingMessage, setLoadingMessage] = useState("");
  const availableMessagesRef = useRef<string[]>([]);
  const navigate = useNavigate();

  const funnyMessages = useMemo(
    () => [
      "Oh wow that's embarrassing...",
      "Why would you say that??",
      "Finding all those questionable jokes you sent...",
      "Calculating how many times you said 'lol' without laughing",
      "Counting your late-night texts about your ex...",
      "Analyzing your emoji addiction problem",
      "Measuring your text-to-emoji ratio (it's concerning)",
      "Finding all the times you were left on read",
      "Discovering who you actually text the most",
      "Quantifying your oversharing tendencies",
      "Tallying your typos",
      "Detecting how many conversations you ghosted",
      "Analyzing who actually carries this group chat (it's not you)",
      "Detecting every time you said 'no offense' before being offensive",
    ],
    []
  );

  useEffect(() => {
    availableMessagesRef.current = [...funnyMessages];

    const getNextRandomMessage = () => {
      if (availableMessagesRef.current.length === 0) {
        availableMessagesRef.current = [...funnyMessages];
      }

      const randomIndex = Math.floor(
        Math.random() * availableMessagesRef.current.length
      );

      const selectedMessage = availableMessagesRef.current.splice(
        randomIndex,
        1
      )[0];
      return selectedMessage;
    };

    setLoadingMessage(getNextRandomMessage());

    const messageIntervalId = setInterval(() => {
      setLoadingMessage(getNextRandomMessage());
    }, 3000);

    const redirectTimeoutId = setTimeout(() => {
      navigate({ to: "/results" });
    }, 5000);

    return () => {
      clearInterval(messageIntervalId);
      clearTimeout(redirectTimeoutId);
    };
  }, [funnyMessages, navigate]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-background to-[#c0cfb2]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Processing Your Chat...
        </motion.h1>

        <motion.div
          className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        <div className="h-8 relative">
          <AnimatePresence mode="wait">
            <motion.p
              className="text-lg text-white absolute w-full left-0 right-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={loadingMessage}
            >
              {loadingMessage}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
