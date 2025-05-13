import { createFileRoute, Link } from "@tanstack/react-router";
import { FileDropZone } from "../components/ui/file-drop-zone";
import { VideoPlayer } from "../components/ui/video-player";
import { useState } from "react";
import demoVideo from "../assets/demo.mp4";
import { useNavigate } from "@tanstack/react-router";
import { TimelineSteps } from "../components/ui/timeline-steps";
import CookieConsent from "react-cookie-consent";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: "thumbnail.jpeg",
      },
      {
        rel: "preload",
        as: "image",
        href: "mockup.png",
      },
    ],
  }),
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
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
        WhatsWrapped
      </h1>
      <h2 className="text-xl md:text-2xl text-white mb-10 text-center">
        Get insights from your WhatsApp conversations.
      </h2>

      <div key="dropzone" className="w-full">
        <FileDropZone
          onFileSelect={handleFileSelect}
          acceptedFileTypes={[".txt", ".zip"]}
        />
      </div>
      {selectedFile && (
        <div key="fileInfo" className="w-full p-6 flex flex-col items-center">
          <div className="flex items-start mb-4">
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
          </div>

          <div>
            <button
              className="px-4 py-2 bg-[#44624a] text-white rounded-md hover:bg-[#3a533f] transition-all hover:scale-105 duration-300 hover:cursor-pointer"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="w-full mt-16 max-w-5xl mx-auto">
        <h3 className="text-2xl text-white font-semibold mb-8 text-center">
          How To Use WhatsWrapped
        </h3>
        <VideoPlayer src={demoVideo} thumbnail="/thumbnail.jpeg" />

        <TimelineSteps />
      </div>

      <p className="mt-8 text-center">
        Contact us at{" "}
        <a className="underline" href="mailto:hello@whatswrapped.me">
          hello@whatswrapped.me
        </a>
        <br />
        <Link to="/tac" className="underline">
          Terms and Conditions
        </Link>
        .
        <br />
        Copyright (c) 2025.
        <br />
        All Rights Reserved.
      </p>
      <CookieConsent>
        This website uses cookies to enhance the user experience. Learn more in
        our{" "}
        <Link to="/tac" className="underline">
          Terms and Conditions
        </Link>
        .
      </CookieConsent>
    </div>
  );
}
