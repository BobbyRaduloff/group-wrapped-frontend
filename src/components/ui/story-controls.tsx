import React, { useState, useEffect, useCallback, useRef } from "react";
import html2canvas from "html2canvas";

export interface StoryItem {
  content: React.ReactNode;
  id: string;
  imageUrl?: string; // Optional image URL for sharing
}

interface StoryControlsProps {
  stories: StoryItem[];
  initialIndex?: number;
  duration?: number; // in milliseconds
  onComplete?: () => void;
  className?: string;
}

export function StoryControls({
  stories,
  initialIndex = 0,
  duration = 10000,
  onComplete,
  className = "",
}: StoryControlsProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState<number[]>(
    stories.map((_, i) => (i < initialIndex ? 100 : 0))
  );
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const storyContentRef = useRef<HTMLDivElement>(null);
  const isTouchRef = useRef(false);

  const goToNextStory = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      // Reset progress for the current story
      const newProgress = [...progress];
      newProgress[currentIndex] = 0;
      setProgress(newProgress);

      setCurrentIndex(currentIndex + 1);
      setElapsedTime(0);
      setStartTime(null);
    } else if (onComplete) {
      onComplete();
    } else {
      const newProgress = [...progress];
      newProgress[currentIndex] = 0;
      setProgress(newProgress);
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
      newProgress[currentIndex] = 0;
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
    if (paused) return;

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

  // Handler for sharing to Instagram
  const shareToInstagram = async () => {
    // @ts-ignore
    gtag("event", "share");
    const currentStory = stories[currentIndex];

    try {
      // If we have a direct image URL, use that
      if (currentStory?.imageUrl) {
        if (navigator.share) {
          navigator
            .share({
              title: "My WhatsWrapped Story!",
              url: currentStory.imageUrl,
            })
            .catch((error) => console.log("Error sharing:", error));
        } else {
          // Fallback to opening Instagram with the URL
          window.open(`https://www.instagram.com/`, "_blank");
        }
      }
      // Otherwise, capture the current story as an image
      else if (storyContentRef.current) {
        // Show loading state or feedback
        console.log("Capturing story for sharing...");

        // Capture the current story as an image
        const canvas = await html2canvas(storyContentRef.current);
        const imageUrl = canvas.toDataURL("image/png");

        if (navigator.share) {
          navigator
            .share({
              title: "My WhatsWrapped Story!",
              text: "Check out my WhatsWrapped Story!",
              files: [
                new File(
                  [await (await fetch(imageUrl)).blob()],
                  "whatswrapped-story.png",
                  { type: "image/png" }
                ),
              ],
            })
            .catch((error) => {
              console.log("Error sharing:", error);
              // Fallback if file sharing fails
              navigator
                .share({
                  title: "My WhatsWrapped Story!",
                  text: "Check out my WhatsWrapped Story!",
                })
                .catch((e) => console.log("Error in fallback sharing:", e));
            });
        } else {
          // Create a download link as fallback
          const link = document.createElement("a");
          link.href = imageUrl;
          link.download = "whatswrapped-story.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } else {
        console.log(
          "No image URL available for sharing and couldn't capture screenshot"
        );
      }
    } catch (error) {
      console.error("Error in sharing process:", error);
    }
  };

  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      {/* Story content */}
      <div
        ref={storyContentRef}
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
            className={`${index === currentIndex ? "block" : "hidden"} h-full`}
          >
            {story.content}
          </div>
        ))}
      </div>

      {/* Story indicators */}
      <div className="absolute top-12 left-0 right-0 flex justify-center gap-2 px-8 z-0">
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
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
        <button
          onClick={shareToInstagram}
          className="bg-gradient-to-br from-[#956A75] text-white px-16 py-4 rounded-full flex items-center shadow-lg hover:opacity-90 transition-opacity hover:cursor-pointer"
        >
          <span className="font-bold text-white text-xl">Share</span>
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
