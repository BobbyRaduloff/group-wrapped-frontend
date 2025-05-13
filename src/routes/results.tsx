import { createFileRoute } from "@tanstack/react-router";
import { TheCore } from "../components/ui/cards/the-core";
import { Convos } from "@/components/ui/cards/convos";
import { StoryControls, StoryItem } from "@/components/ui/story-controls";

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
      <StoryControls stories={storyItems} />
    </div>
  );
}
