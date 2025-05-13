import { createFileRoute } from "@tanstack/react-router";
import { StoryControls, StoryItem } from "@/components/ui/story-controls";
// import { TheCore } from "../components/ui/cards/the-core";
// import { Messages } from "@/components/ui/cards/messages";
// import { Welcome } from "@/components/ui/cards/welcome";
//import { LastPlace } from "@/components/ui/cards/last-place";
import { Emojis } from "@/components/ui/cards/emojis";
// import { Duo } from "@/components/ui/cards/duo";

export const Route = createFileRoute("/results")({
  component: RouteComponent,
});

function RouteComponent() {
  const storyItems: StoryItem[] = [
    // {
    //   id: "welcome",
    //   content: <Welcome />,
    // },
    // {
    //   id: "messages",
    //   content: (
    //     <Messages
    //       nameOne="Robert Tan"
    //       nameTwo="Boris"
    //       nameThree="Arkadiy"
    //       messagesOne={600}
    //       messagesTwo={250}
    //       messagesThree={100}
    //       totalMessages={1000}
    //     />
    //   ),
    // },
    // {
    //   id: "lastplace",
    //   content: <LastPlace name="Alexander Radulov" messages={10} />,
    // },
    {
      id: "emojis",
      content: (
        <Emojis
          emojiOne="💀"
          emojiOneN={669}
          emojiTwo="🍑"
          emojiTwoN={420}
          emojiThree="💄"
          emojiThreeN={120}
        />
      ),
    },
    // {
    //   id: "duo",
    //   content: <Duo nameOne="Boris" nameTwo="Albert" totalConversations={10} />,
    // },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center lg:justify-center p-8 py-8 select-none">
      <div className="h-[90%] lg:h-auto lg:w-1/4">
        <StoryControls stories={storyItems} />
      </div>
    </div>
  );
}
