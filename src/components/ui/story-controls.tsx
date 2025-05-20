import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";

export interface StoryItem {
  content: React.ReactNode;
  id: string;
}

interface StoryControlsProps {
  stories: StoryItem[];
  initialIndex?: number;
  duration?: number; // in milliseconds
  onComplete?: () => void;
  className?: string;

  urls: Record<string, string>;
}

export function StoryControls({
  stories,
  initialIndex = 0,
  duration = 10000,
  onComplete,
  className = "",
  urls,
}: StoryControlsProps) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState<number[]>(
    stories.map((_, i) => (i < initialIndex ? 100 : 0))
  );
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const isTouchRef = useRef(false);

  const goToNextStory = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      // Reset progress for the current story
      const newProgress = [...progress];
      newProgress[currentIndex] = 100;
      setProgress(newProgress);

      setCurrentIndex(currentIndex + 1);
      setElapsedTime(0);
      setStartTime(null);
    } else if (onComplete) {
      onComplete();
    } else {
      // Reset everything when wrapping
      const resetProgress = new Array(stories.length).fill(0);
      setProgress(resetProgress);
      setCurrentIndex(0);
      setPaused(false);
      setStartTime(null);
      setElapsedTime(0);
    }
  }, [currentIndex, stories.length, onComplete, progress]);

  const goToPreviousStory = useCallback(() => {
    if (currentIndex > 0) {
      // Reset progress for the current story
      const newProgress = [...progress];
      for (let i = currentIndex; i < newProgress.length; i++) {
        newProgress[i] = 0; // Clear progress for current and future stories
      }
      setProgress(newProgress);

      setCurrentIndex(currentIndex - 1);
      setElapsedTime(0);
      setStartTime(null);
    } else {
      setPaused(false);
      setStartTime(null);
      setElapsedTime(0);
    }
  }, [currentIndex, progress]);

  // Handle progress animation
  useEffect(() => {
    if (paused || currentIndex === stories.length - 1) return;

    let animationFrameId: number;

    const updateProgress = (timestamp: number) => {
      if (!startTime) {
        setStartTime(timestamp);
      }

      const elapsed = timestamp - (startTime ?? timestamp);
      const progressValue = Math.min(100, (elapsed / duration) * 100);

      setElapsedTime(elapsed);

      const newProgress = [...progress];
      newProgress[currentIndex] = progressValue;
      setProgress(newProgress);

      if (progressValue < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        goToNextStory();
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [currentIndex, paused, startTime, duration, progress, goToNextStory]);

  // Handler for pause/resume on press
  const handlePause = () => {
    setPaused(true);
  };

  const handleResume = () => {
    setPaused(false);
    setStartTime(Date.now() - elapsedTime);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default selection behavior
    isTouchRef.current = true;
    handlePause();
  };

  const handleTouchEnd = (
    e: React.TouchEvent,
    goToStory: (() => void) | null = null
  ) => {
    e.preventDefault(); // Prevent default selection behavior
    handleResume();
    if (goToStory) {
      goToStory();
    }
    // Reset touch flag after a small delay
    setTimeout(() => {
      isTouchRef.current = false;
    }, 300);
  };

  // Click event handlers
  const handleClick = (goToStory: () => void) => {
    // Only handle click if it wasn't triggered by a touch event
    if (!isTouchRef.current) {
      goToStory();
    }
  };

  async function dataURLtoFile(dataUrl: string, filename = "story.png") {
    const res = await fetch(dataUrl); // fetch treats data-URLs fine
    const blob = await res.blob();
    const mime = blob.type || "image/png"; // fallback mime if none
    return new File([blob], filename, { type: mime });
  }

  const shareToInstagram = async () => {
    try {
      // @ts-ignore             // GTM event is fine
      gtag("event", "share");

      const currentStory = stories[currentIndex];
      const dataUrl = urls[currentStory.id]; // base64 data-URL
      const file = await dataURLtoFile(dataUrl);

      const shareData: ShareData = {
        text: "My WhatsWrapped Story!",
        files: [file], // ✅ Level-2 feature
      };

      if (navigator.canShare?.(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.error("Share aborted:", err);
        }
      } else {
        window.open(dataUrl, "_blank");
        console.warn("Web Share with files isn’t supported here.");
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className={`w-full h-full ${className}`}>
      {/* Story content */}
      <div
        className="w-full h-full"
        onMouseDown={handlePause}
        onMouseUp={handleResume}
        onTouchStart={(e) => {
          e.preventDefault();
          if (!paused) {
            handlePause();
          }
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          if (paused) {
            handleResume();
          }
        }}
      >
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`${index === currentIndex ? "block" : "hidden"}`}
          >
            {story.content}
          </div>
        ))}
      </div>

      {/* Story indicators */}
      <div className="absolute top-6 left-0 right-0 flex justify-center gap-2 px-8 z-0">
        {stories.map((_, index) => (
          <div
            key={index}
            className="h-2 bg-gray-300/40 rounded-full flex-grow overflow-hidden"
          >
            <div
              className="h-full bg-white"
              style={{
                width: `${progress[index]}%`,
                transition:
                  index === currentIndex && !paused
                    ? "none"
                    : "width 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>

      {/* Instagram Share Button */}

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-10">
        <button
          onClick={() => {
            navigate({ to: "/" });
          }}
          className="bg-gray-800 text-white px-12 py-2 rounded-full flex items-center shadow-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
        >
          <span className="font-bold text-white">Another Chat</span>
        </button>

        <button
          onClick={shareToInstagram}
          className="bg-[#ca9541] text-white px-12 py-2 rounded-full flex items-center shadow-lg hover:opacity-90 transition-opacity hover:cursor-pointer gap-1"
        >
          <img src="/share.svg" className="w-4 h-4" />
          <span className="font-bold text-white">Share</span>
        </button>
      </div>

      {/* Touch controls */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2 z-0 hover:cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchEnd={(e) => handleTouchEnd(e, goToPreviousStory)}
        onClick={() => handleClick(goToPreviousStory)}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 z-0 hover:cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchEnd={(e) => handleTouchEnd(e, goToNextStory)}
        onClick={() => handleClick(goToNextStory)}
      />
    </div>
  );
}
