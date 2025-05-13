import { useEffect, useRef } from "react";
import totalConvos from "@/assets/cards/total-convos.png";

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
    // Render canvas when component mounts
    renderCanvas();

    function renderCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = new Image();
      img.src = totalConvos;
      img.onload = () => {
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Set font with fallback options (light weight)
        ctx.font = "36px 'DM Sans', Arial, sans-serif";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText(
          "Total Conversations: " + totalConversations,
          canvas.width / 2 - 40,
          375,
        );

        // Set font with fallback options (light weight)
        ctx.font = "36px 'Poppins', Arial, sans-serif";
        ctx.fillText(nameOne, canvas.width / 2 - 90, canvas.height / 2 - 180);
        ctx.fillText(nameTwo, canvas.width / 2 + 90, canvas.height / 2 - 190);
        ctx.font = "bold 96px Times New Roman";
        ctx.fillText(
          conversationsTogether,
          canvas.width / 2,
          canvas.height / 2 + 490,
        );
      };
    }

    return () => {
      // No cleanup needed
    };
  }, [conversationsTogether, nameOne, nameTwo, totalConversations]);

  return <canvas ref={canvasRef} className="w-full h-full rounded-4xl" />;
}
