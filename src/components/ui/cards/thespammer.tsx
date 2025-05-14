import { useEffect, useRef } from "react";
import personality from "@/assets/cards/personality.png";
import thespammer from "@/assets/cards/thespammer.png";

interface TheSpammerProps {
  name: string;
  messagesSent: number;
}

export function TheSpammer({ name, messagesSent }: TheSpammerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Render canvas when component mounts
    renderCanvas();

    async function renderCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Enable high-quality image scaling
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const personalityImg = new Image();
      const coreImg = new Image();

      personalityImg.src = personality;
      coreImg.src = thespammer;

      let f = new FontFace("Abhaya Libre", "url(/abhaya.ttf)");
      let f1 = new FontFace("Caveat", "url(/caveat.ttf)");

      await Promise.all([
        f.load(),
        f1.load(),
        new Promise((resolve) => {
          personalityImg.onload = resolve;
        }),
        new Promise((resolve) => {
          coreImg.onload = resolve;
        }),
      ]);
      document.fonts.add(f);
      document.fonts.add(f1);
      canvas.width = personalityImg.width;
      canvas.height = personalityImg.height;

      // Draw background
      ctx.drawImage(personalityImg, 0, 0, canvas.width, canvas.height);

      // Draw core image in center
      ctx.drawImage(coreImg, 80, 200);

      // Set font with fallback options (light weight)
      ctx.font = "bold 52px  'Afacad', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText("WhatsWrapped.me", canvas.width / 2, 120);

      // Set font with fallback options (light weight)
      ctx.font = "bold 72px  'Caveat', sans-serif";
      ctx.fillStyle = "#323233";
      ctx.textAlign = "center";
      ctx.fillText(name.toString(), canvas.width / 2, 1140);

      ctx.font = "56px  'Caveat', sans-serif";
      ctx.fillStyle = "#323233";
      ctx.textAlign = "center";
      ctx.fillText(
        "Media sent: " + messagesSent.toString(),
        canvas.width / 2,
        1200,
      );

      ctx.font = "40px  'Abhaya Libre', sans-serif";
      ctx.fillStyle = "#323233";
      ctx.textAlign = "center";

      // Text to display
      const text =
        "The personal file server of the chat. Sprays memes screenshots and five minute voice notes like confetti so your gallery tiptoes on the edge of full. If the convo were a diner they are the waiter who tops up your plate before you swallow the last bite.";

      // Function to wrap text
      function wrapText(
        context: CanvasRenderingContext2D,
        text: string,
        x: number,
        y: number,
        maxWidth: number,
        lineHeight: number,
      ) {
        const words = text.split(" ");
        let line = "";
        let testLine = "";
        const lines: string[] = [];

        for (let n = 0; n < words.length; n++) {
          testLine = line + words[n] + " ";
          const metrics = context.measureText(testLine);
          const testWidth = metrics.width;

          if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + " ";
          } else {
            line = testLine;
          }
        }

        lines.push(line);

        // Draw each line
        lines.forEach((line, i) => {
          context.fillText(line, x, y + i * lineHeight);
        });
      }

      // Draw wrapped text
      wrapText(
        ctx,
        text,
        canvas.width / 2,
        canvas.height - 475,
        canvas.width - 220,
        40,
      );
    }
  }, [name, messagesSent]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-4xl object-contain"
    />
  );
}
