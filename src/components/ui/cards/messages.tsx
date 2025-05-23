import { useEffect, useRef } from "react";
import messages from "@/assets/cards/messages.png";

interface MessagesProps {
  nameOne: string;
  nameTwo: string;
  nameThree: string;
  messagesOne: number;
  messagesTwo: number;
  messagesThree: number;
  totalMessages: number;

  callback: (_arg0: string) => void;
}

export function Messages({
  totalMessages,
  nameOne,
  nameTwo,
  nameThree,
  messagesOne,
  messagesTwo,
  messagesThree,
  callback,
}: MessagesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Render canvas when component mounts
    renderCanvas();

    async function renderCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let f = new FontFace("Afacad", "url(/afacad.ttf)");
      const img = new Image();
      img.src = messages;

      await Promise.all([
        f.load(),
        new Promise((resolve) => (img.onload = resolve)),
      ]);
      document.fonts.add(f);

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Set font with fallback options (light weight)
      ctx.font = "bold 52px  'Afacad', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText("WhatsWrapped.me", canvas.width / 2, 120);

      // Set font with fallback options (light weight)
      ctx.font = "bold 80px  'Afacad', sans-serif";
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.fillText(totalMessages.toString(), canvas.width / 2, 450);

      ctx.font = "60px  'Afacad', sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.textAlign = "center";
      ctx.fillText(
        "#1 " + nameOne + ": " + messagesOne.toString(),
        canvas.width / 2,
        600,
      );

      ctx.font = "60px  'Afacad', sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.textAlign = "center";
      ctx.fillText(
        "#2 " + nameTwo + ": " + messagesTwo.toString(),
        canvas.width / 2,
        675,
      );

      ctx.font = "60px  'Afacad', sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.textAlign = "center";
      ctx.fillText(
        "#3 " + nameThree + ": " + messagesThree.toString(),
        canvas.width / 2,
        750,
      );

      callback(canvas.toDataURL("image/png"));
    }
  }, [
    messagesOne,
    messagesThree,
    messagesTwo,
    nameOne,
    nameThree,
    nameTwo,
    totalMessages,
  ]);

  return (
    <div className="w-[70%] mt-8 h-full rounded-4xl mx-auto">
      <canvas ref={canvasRef} className="w-full h-full object-contain" />
    </div>
  );
}
