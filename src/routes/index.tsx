import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FileDropZone } from "../components/ui/file-drop-zone";
import { VideoPlayer } from "../components/ui/video-player";
import { TimelineSteps } from "../components/ui/timeline-steps";
import CookieConsent from "react-cookie-consent";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { LoadingContext } from "@/contexts/loading";
import LoadingComponent from "@/components/loading";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [loading, setLoading] = useContext(LoadingContext);

  const { data, isLoading } = useQuery({
    queryKey: ["count"],
    queryFn: async () =>
      await (await fetch("https://api.whatswrapped.me/chats")).text(),
  });

  const { mutate, error } = useMutation({
    mutationFn: async (file: File) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

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
    onError: () => {
      setLoading(false);
    },
  });

  const handleFileSelect = (file: File) => {
    setLoading(true);
    mutate(file);
  };

  if (loading && !error) return <LoadingComponent />;

  return (
    <div className="w-screen overflow-x-hiddn min-h-screen flex flex-col items-center justify-start p-8 md:p-16 select-none gap-8 max-w-2xl mx-auto">
      <div className="flex flex-row items-center justify-center bg-[#D29039] border-2 rounded-xl border-[#FFE0B6] text-[#FFF0DD] p-2 w-full">
        Chats Uploaded:{" "}
        <span className="text-green-100 ml-1">
          {isLoading || !data
            ? "450,000"
            : parseInt(data).toLocaleString("bg-BG")}
        </span>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center mb-2">
        <img src="/logo.svg" className="w-12" />
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          WhatsWrapped
        </h1>
      </div>
      <h2 className="text-xl md:text-2xl text-white text-center">
        Get insights from your WhatsApp conversations.
      </h2>

      <div key="dropzone" className="w-full opacity-70">
        <FileDropZone
          onFileSelect={handleFileSelect}
          acceptedFileTypes={[".txt", ".zip"]}
        />
        {error && <div className="text-red-400">{error.message}</div>}
      </div>
      {/* TODO: Add change from hidden to queue when you implement the queue */}
      <div className="flex-col gap-2 items-center justify-center bg-black/10 border-2 rounded-xl border-white text-white p-2 w-full max-w-2xl mx-auto hidden">
        <p className="text-lg">You are in Queue.</p>
        <p>
          People currently ahead of you: <b>32</b>
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <h3 className="text-2xl text-white font-semibold mb-8 text-center">
          How To Use WhatsWrapped
        </h3>
        <VideoPlayer src={"/demo.webm"} />
      </div>

      <div className="flex flex-col gap-8 items-center max-w-sm mx-auto">
        <h3 className="text-2xl text-white font-semibold text-center">
          Did you know that you can export and share with friends? It’s super
          easy!!!
        </h3>
        <img src="/share.webp" className="w-full" />
      </div>

      <TimelineSteps />

      <p className="text-center">
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
