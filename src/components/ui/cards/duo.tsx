import { useEffect, useRef } from "react";
import duo from "@/assets/cards/duo.png";

interface DuoProps {
  nameOne: string;
  nameTwo: string;
  totalConversations: number;

  callback: (_arg0: string) => void;
}

export function Duo({
  totalConversations,
  nameOne,
  nameTwo,
  callback,
}: DuoProps) {
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
      img.src = duo;
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
      ctx.font = "bold 64px  'Afacad', sans-serif";
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.fillText(nameOne + " & " + nameTwo, canvas.width / 2, 475);

      ctx.font = "bold 72px 'Afacad', sans-serif";
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.fillText(
        totalConversations.toString(),
        canvas.width / 2,
        canvas.height - 325,
      );

      callback(canvas.toDataURL("image/png"));
    }
  }, [nameOne, nameTwo, totalConversations]);

  return (
    <div className="w-[70%] mt-8 h-full rounded-4xl mx-auto">
      <canvas ref={canvasRef} className="w-full h-full object-contain" />
    </div>
  );
}
