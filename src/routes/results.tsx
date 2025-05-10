import { createFileRoute } from "@tanstack/react-router";
import mockup from "../assets/mockup.png";
import { TheCore } from "../components/ui/cards/thecore";
import { Convos } from "@/components/ui/cards/convos";
import { StoryControls, StoryItem } from "@/components/ui/StoryControls";

export const Route = createFileRoute("/results")({
  component: RouteComponent,
});

function RouteComponent() {
  const storyItems: StoryItem[] = [
    {
      id: "core",
      content: <TheCore name="Robert Tan" />,
    },
    {
      id: "convos",
      content: (
        <Convos
          totalConversations="330"
          nameOne="Boris"
          nameTwo="Albert"
          conversationsTogether="67"
        />
      ),
    },
    {
      id: "core2",
      content: <TheCore name="Emily Johnson" />,
    },
    {
      id: "convos2",
      content: (
        <Convos
          totalConversations="452"
          nameOne="Sarah"
          nameTwo="Michael"
          conversationsTogether="112"
        />
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start lg:justify-center p-8 py-0 select-none">
      <h1 className="text-4xl font-bold">WhatsWrapped Results</h1>
      <div className="relative">
        <div className="absolute top-[1rem] lg:top-[3rem] left-1/2 transform -translate-x-1/2 w-[82%] z-0">
          <StoryControls stories={storyItems} />
        </div>
        <img
          src={mockup}
          alt="Phone Mockup"
          className="w-[22rem] lg:w-[28rem] object-contain mt-[.6rem] lg:mt-8 relative z-10 pointer-events-none"
        />
      </div>
    </div>
  );
}
