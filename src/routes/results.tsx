import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
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
import { useContext, useEffect, useMemo, useState } from "react";
import { TheLurker } from "@/components/ui/cards/thelurker";
import { z } from "zod";
import { WrappedData } from "@/types/results";
import { LoadingContext } from "@/contexts/loading";
import LoadingComponent from "@/components/loading";

export const Route = createFileRoute("/results")({
  component: RouteComponent,
  validateSearch: z.object({ result: z.string() }),
});

function RouteComponent() {
  const { result } = Route.useSearch();
  const navigate = useNavigate();

  const [loading, setLoading] = useContext(LoadingContext);

  useEffect(() => {
    if (!result) {
      setLoading(false);
      navigate({ to: "/" });
    }
  }, [result, navigate]);

  const [urls, setURLS] = useState<Record<string, string>>({});

  const calculated = useMemo(() => {
    const parsed = result ? (JSON.parse(result) as WrappedData) : null;
    if (!parsed) return [];

    const storyItems: StoryItem[] = [
      {
        id: "welcome",
        content: (
          <Welcome
            callback={(s) => setURLS((prev) => ({ ...prev, welcome: s }))}
          />
        ),
      },
    ];

    const m1 =
      parsed.statistics.messagesPerPerson.length > 0
        ? parsed.statistics.messagesPerPerson[0]
        : { sender: "N/A", count: 0 };
    const m2 =
      parsed.statistics.messagesPerPerson.length > 1
        ? parsed.statistics.messagesPerPerson[1]
        : { sender: "N/A", count: 0 };
    const m3 =
      parsed.statistics.messagesPerPerson.length > 2
        ? parsed.statistics.messagesPerPerson[2]
        : { sender: "N/A", count: 0 };
    storyItems.push({
      id: "messages",
      content: (
        <Messages
          totalMessages={parsed.statistics.totalMessages}
          nameOne={m1.sender.substring(0, 15)}
          messagesOne={m1.count}
          nameTwo={m2.sender.substring(0, 15)}
          messagesTwo={m2.count}
          nameThree={m3.sender.substring(0, 15)}
          messagesThree={m3.count}
          callback={(s) => setURLS((prev) => ({ ...prev, messages: s }))}
        />
      ),
    });

    if (parsed.statistics.messagesPerPerson.length > 3) {
      const guy =
        parsed.statistics.messagesPerPerson[
          parsed.statistics.messagesPerPerson.length - 1
        ];
      storyItems.push({
        id: "lastplace",
        content: (
          <LastPlace
            name={guy.sender.substring(0, 15)}
            messages={guy.count}
            callback={(s) => setURLS((prev) => ({ ...prev, lastplace: s }))}
          />
        ),
      });
    }

    const e1 =
      parsed.statistics.top3emojis.length > 0
        ? parsed.statistics.top3emojis[0]
        : { emoji: "N/A", count: 0 };
    const e2 =
      parsed.statistics.top3emojis.length > 1
        ? parsed.statistics.top3emojis[1]
        : { emoji: "N/A", count: 0 };
    const e3 =
      parsed.statistics.top3emojis.length > 2
        ? parsed.statistics.top3emojis[2]
        : { emoji: "N/A", count: 0 };
    storyItems.push({
      id: "emojis",
      content: (
        <Emojis
          emojiOne={e1.emoji}
          emojiOneN={e1.count}
          emojiTwo={e2.emoji}
          emojiTwoN={e2.count}
          emojiThree={e3.emoji}
          emojiThreeN={e3.count}
          callback={(s) => setURLS((prev) => ({ ...prev, emojis: s }))}
        />
      ),
    });

    if (
      parsed.statistics.couple.personOne &&
      parsed.statistics.couple.personTwo &&
      parsed.statistics.couple.count
    ) {
      storyItems.push({
        id: "duo",
        content: (
          <Duo
            nameOne={parsed.statistics.couple.personOne.substring(0, 15)}
            nameTwo={parsed.statistics.couple.personTwo.substring(0, 15)}
            totalConversations={parsed.statistics.couple.count}
            callback={(s) => setURLS((prev) => ({ ...prev, duo: s }))}
          />
        ),
      });
    }

    for (const c of parsed.cards) {
      const n = c.person.substring(0, 15);
      const m = c.value;
      const mp = {
        TIMCHEESE: TimCheese,
        BASICBITCH: TheBasicBiatch,
        LURKER: TheLurker,
        BOT: TheBot,
        SPAMMER: TheSpammer,
        GRANDMA: TheGrandma,
        OPENER: TheOpener,
        CORE: TheCore,
        JESTER: TheJester,
      } as const;
      const F = mp[c.type];
      storyItems.push({
        id: c.type,
        content: (
          <F
            name={n}
            messagesSent={m}
            callback={(s) => setURLS((prev) => ({ ...prev, [c.type]: s }))}
          />
        ),
      });
    }

    return storyItems;
  }, [result]);

  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-start lg:justify-center p-8 py-2 select-none">
      {loading && <LoadingComponent />}
      <div
        className={`h-[100%] lg:h-auto lg:w-1/4 mt-8 transition-opacity duration-700 ease-in-out opacity-100`}
      >
        <StoryControls stories={calculated} urls={urls} />
      </div>

      <Link
        to="/"
        className={`hidden lg:flex flex-row items-center absolute top-4 left-4 transition-opacity duration-700 ease-in-out opacity-100`}
      >
        <img src="/logo.webp" className="w-24" />
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          WhatsWrapped
        </h1>
      </Link>
    </div>
  );
}
