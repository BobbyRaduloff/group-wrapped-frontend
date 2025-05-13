import { useState, useRef, useEffect } from "react";
import mockupImage from "../../assets/mockup.png";

interface VideoPlayerProps {
  src: string;
  thumbnail?: string;
}

export function VideoPlayer({ src, thumbnail }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setHasStartedPlaying(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(
        0,
        videoRef.current.currentTime - 10,
      );
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(
        videoRef.current.duration,
        videoRef.current.currentTime + 10,
      );
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || !isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const updateProgress = () => {
      if (videoRef.current) {
        const percent =
          (videoRef.current.currentTime / videoRef.current.duration) * 100 || 0;
        setProgress(percent);
        setCurrentTime(videoRef.current.currentTime || 0);
      }
    };

    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        setDuration(videoRef.current.duration || 0);
        updateProgress(); // Update progress immediately after metadata is loaded
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", updateProgress);
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePause);

      // If already loaded, update now
      if (videoElement.readyState >= 2) {
        handleLoadedMetadata();
      }

      return () => {
        videoElement.removeEventListener("timeupdate", updateProgress);
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata,
        );
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  return (
    <div className="relative max-w-sm mx-auto">
      {/* Phone mockup image */}
      <img
        src={mockupImage}
        alt="Phone mockup"
        className="w-full pointer-events-none z-10 relative"
      />

      {/* Video player positioned inside the phone mockup */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          width: "80%",
          height: "98%",
          top: "0.5%",
          left: "10%",
          borderRadius: "28px",
          overflow: "hidden",
        }}
      >
        <div className="relative h-full flex flex-col">
          <div className="flex-1 relative">
            {thumbnail && !hasStartedPlaying && (
              <div className="absolute inset-0 z-[5]">
                <img
                  src={thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover brightness-50 hover:cursor-pointer"
                  onClick={togglePlay}
                />
              </div>
            )}
            <video
              ref={videoRef}
              className="w-full h-full object-cover absolute inset-0"
              src={src}
              onClick={togglePlay}
              loop
              preload="metadata"
              playsInline
              onLoadedMetadata={() => {
                if (videoRef.current) {
                  setDuration(videoRef.current.duration);
                  setCurrentTime(videoRef.current.currentTime);
                }
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              {!isPlaying && (
                <div className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="relative z-10">
            <div className="p-4 relative z-0 bg-[#2a2a2a]/90">
              <div
                className="relative h-2 w-full bg-[#3a3a3a] rounded-full overflow-hidden cursor-pointer"
                onClick={handleSeek}
              >
                <div
                  className="absolute top-0 left-0 h-full bg-[#edf6f9]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="text-white text-xs mt-1 flex justify-between">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex items-center space-x-4">
                  <button
                    className="text-white bg-[#3a3a3a] hover:bg-[#444] p-2.5 rounded-full"
                    onClick={skipBackward}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 17l-5-5 5-5"></path>
                      <path d="M17 17l-5-5 5-5"></path>
                    </svg>
                  </button>

                  <button
                    className="text-white bg-background hover:bg-[#44624a] p-2 rounded-full transition-colors"
                    onClick={togglePlay}
                  >
                    {isPlaying ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="-2 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    )}
                  </button>

                  <button
                    className="text-white bg-[#3a3a3a] hover:bg-[#444] p-2 rounded-full"
                    onClick={skipForward}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 17l5-5-5-5"></path>
                      <path d="M7 17l5-5-5-5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
