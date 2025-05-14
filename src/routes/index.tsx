import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FileDropZone } from "../components/ui/file-drop-zone";
import { VideoPlayer } from "../components/ui/video-player";
import { TimelineSteps } from "../components/ui/timeline-steps";
import CookieConsent from "react-cookie-consent";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { LoadingContext } from "@/contexts/loading";
import LoadingComponent from "@/components/loading";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [loading, setLoading] = useContext(LoadingContext);

  const { mutate, error } = useMutation({
    mutationFn: async (file: File) => {
      try {
        const f = new FormData();
        f.append("file", file);
        const res = await fetch("https://api.whatswrapped.me", {
          method: "POST",
          body: f,
        });
        if (!res.ok) {
          const err = await res.text();
          throw new Error(err);
        }

        return await res.json();
      } catch (e) {
        throw new Error((e as Error).message);
      }
    },
    onSuccess: (data) => {
      navigate({ to: "/results", search: { result: JSON.stringify(data) } });
    },
  });

  const handleFileSelect = (file: File) => {
    setLoading(true);
    mutate(file);
  };

  if (loading) return <LoadingComponent />;

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
        {error && <div className="text-red-400">{error.message}</div>}
      </div>

      <div className="w-full mt-16 max-w-5xl mx-auto">
        <h3 className="text-2xl text-white font-semibold mb-8 text-center">
          How To Use WhatsWrapped
        </h3>
        <VideoPlayer src={"/demo.webm"} />

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
