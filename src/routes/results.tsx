import { createFileRoute, Link } from "@tanstack/react-router";
import { StoryControls, StoryItem } from "@/components/ui/story-controls";
import { TheCore } from "@/components/ui/cards/thecore";
import { Messages } from "@/components/ui/cards/messages";
import { Welcome } from "@/components/ui/cards/welcome";
import { LastPlace } from "@/components/ui/cards/last-place";
import { Emojis } from "@/components/ui/cards/emojis";
import { TheJester } from "@/components/ui/cards/thejester";
import { TheSpammer } from "@/components/ui/cards/thespammer";
import { TheOpener } from "@/components/ui/cards/theopener";
import { TheGrandma } from "@/components/ui/cards/thegrandma";
import { TheBot } from "@/components/ui/cards/thebot";
import { TheBasicBiatch } from "@/components/ui/cards/thebasicbiatch";
import { TimCheese } from "@/components/ui/cards/timcheese";
import { Duo } from "@/components/ui/cards/duo";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/results")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const storyItems: StoryItem[] = [
    {
      id: "welcome",
      content: <Welcome />,
    },
    {
      id: "messages",
      content: (
        <Messages
          nameOne="Robert Tan"
          nameTwo="Boris"
          nameThree="Arkadiy"
          messagesOne={600}
          messagesTwo={250}
          messagesThree={100}
          totalMessages={1000}
        />
      ),
    },
    {
      id: "lastplace",
      content: <LastPlace name="Alexander Radulov" messages={10} />,
    },
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
    {
      id: "duo",
      content: <Duo nameOne="Boris" nameTwo="Albert" totalConversations={10} />,
    },
    {
      id: "timcheese",
      content: <TimCheese name="Robert Tan" messagesSent={100} />,
    },
    {
      id: "thebasicbiatch",
      content: <TheBasicBiatch name="Roberta Tan" messagesSent={100} />,
    },
    {
      id: "thebot",
      content: <TheBot name="Robert Tan" messagesSent={100} />,
    },
    {
      id: "thegrandma",
      content: <TheGrandma name="Robert Tan" messagesSent={100} />,
    },
    {
      id: "theopener",
      content: <TheOpener name="Robert Tan" messagesSent={4090} />,
    },
    {
      id: "thecore",
      content: <TheCore name="Robert Tan" messagesSent={4090} />,
    },
    {
      id: "thejester",
      content: <TheJester name="Robert Tan" messagesSent={4090} />,
    },
    {
      id: "thespammer",
      content: <TheSpammer name="Robert Tan" messagesSent={4090} />,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start lg:justify-center p-8 py-8 select-none">
      <div
        className={`h-[50%] lg:h-auto lg:w-1/4 transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <StoryControls stories={storyItems} />
      </div>
      <Link
        to="/"
        className={`hidden lg:flex flex-row items-center absolute top-4 left-4 transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <img src="/logo.webp" className="w-24" />
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          WhatsWrapped
        </h1>
      </Link>
    </div>
  );
}
