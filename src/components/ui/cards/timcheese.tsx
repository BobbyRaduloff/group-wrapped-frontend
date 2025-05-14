import { useEffect, useRef } from "react";
import personality from "@/assets/cards/personality.png";
import timcheese from "@/assets/cards/timcheese.png";

interface TimCheeseProps {
  name: string;
  messagesSent: number;
  callback: (_arg0: string) => void;
}

export function TimCheese({ name, messagesSent, callback }: TimCheeseProps) {
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
      coreImg.src = timcheese;

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
      ctx.font = "bold 96px  'Caveat', sans-serif";
      ctx.fillStyle = "#323233";
      ctx.textAlign = "center";
      ctx.fillText(name.toString(), canvas.width / 2, 1180);

      ctx.font = "64px  'Abhaya Libre', sans-serif";
      ctx.fillStyle = "#323233";
      ctx.textAlign = "center";

      // Text to display
      const text = "The real main character.";

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
        canvas.height - 350,
        canvas.width - 220,
        40,
      );

      callback(canvas.toDataURL("image/png"));
    }
  }, [name, messagesSent]);

  return (
    <div className="w-[70%] mt-8 h-full rounded-4xl mx-auto">
      <canvas ref={canvasRef} className="w-full h-full object-contain" />
    </div>
  );
}
