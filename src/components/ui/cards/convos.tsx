import { useEffect, useRef } from "react";
import totalConvos from "@/assets/cards/total-convos.png";

// Load fonts outside the component
const loadFonts = (() => {
  let fontsLoaded = false;

  return async () => {
    if (fontsLoaded) return;

    // Load DM Sans with multiple weights
    if (!document.getElementById("dmsans-font")) {
      const dmSansLink = document.createElement("link");
      dmSansLink.id = "dmsans-font";
      dmSansLink.rel = "stylesheet";
      dmSansLink.href =
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;700&display=swap";
      document.head.appendChild(dmSansLink);
    }

    // Load Poppins with multiple weights
    if (!document.getElementById("poppins-font")) {
      const poppinsLink = document.createElement("link");
      poppinsLink.id = "poppins-font";
      poppinsLink.rel = "stylesheet";
      poppinsLink.href =
        "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap";
      document.head.appendChild(poppinsLink);
    }

    try {
      // Wait for fonts to be loaded
      await document.fonts.ready;

      // Check if our specific fonts are loaded (checking different weights)
      const fontWeights = ["300", "400", "700"]; // light, regular, bold
      const dmSansLoaded = fontWeights.every((weight) =>
        document.fonts.check(`${weight} 36px 'DM Sans'`)
      );
      const poppinsLoaded = fontWeights.every((weight) =>
        document.fonts.check(`${weight} 36px 'Poppins'`)
      );

      if (!dmSansLoaded || !poppinsLoaded) {
        // If not loaded yet, wait a bit more
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      fontsLoaded = true;
    } catch (error) {
      console.error("Error loading fonts:", error);
    }
  };
})();

// Load fonts immediately when this module is imported
if (typeof window !== "undefined") {
  loadFonts();
}

interface ConvosProps {
  totalConversations: string;
  nameOne: string;
  nameTwo: string;
  conversationsTogether: string;
}

export function Convos({
  totalConversations,
  nameOne,
  nameTwo,
  conversationsTogether,
}: ConvosProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Ensure fonts are loaded, then render
    loadFonts().then(renderCanvas);

    function renderCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = new Image();
      img.src = totalConvos;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Set font with fallback options (light weight)
        ctx.font = "36px 'DM Sans', Arial, sans-serif";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText(
          "Total Conversations: " + totalConversations,
          canvas.width / 2 - 40,
          375
        );

        // Set font with fallback options (light weight)
        ctx.font = "36px 'Poppins', Arial, sans-serif";
        ctx.fillText(nameOne, canvas.width / 2 - 90, canvas.height / 2 - 180);
        ctx.fillText(nameTwo, canvas.width / 2 + 90, canvas.height / 2 - 190);
        ctx.font = "bold 96px Times New Roman";
        ctx.fillText(
          conversationsTogether,
          canvas.width / 2,
          canvas.height / 2 + 490
        );
      };
    }

    return () => {
      // No need for cleanup as fonts are loaded globally
    };
  }, [conversationsTogether, nameOne, nameTwo, totalConversations]);

  return <canvas ref={canvasRef} className="w-full h-auto rounded-4xl" />;
}
