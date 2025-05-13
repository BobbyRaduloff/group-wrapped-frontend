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
        href: "thumbnail.webp",
      },
      {
        rel: "preload",
        as: "image",
        href: "mockup.webp",
      },
    ],
  }),
});

function Index() {
  const [_, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    handleContinue();
  };

  const handleContinue = () => {
    navigate({ to: "/loading" });
  };

  return (
    <div className="w-screen overflow-x-hiddn min-h-screen flex flex-col items-center justify-start p-8 md:p-16 select-none">
      <div className="flex flex-row gap-2 items-center justify-center mb-2">
        <img src="/logo.webp" className="w-24" />
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          WhatsWrapped
        </h1>
      </div>
      <h2 className="text-xl md:text-2xl text-white mb-10 text-center">
        Get insights from your WhatsApp conversations.
      </h2>

      <div key="dropzone" className="w-full">
        <FileDropZone
          onFileSelect={handleFileSelect}
          acceptedFileTypes={[".txt", ".zip"]}
        />
      </div>

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
      <CookieConsent
        onAccept={() => {
          // @ts-ignore
          gtag("consent", "update", {
            ad_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted",
            analytics_storage: "granted",
          });
        }}
      >
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
