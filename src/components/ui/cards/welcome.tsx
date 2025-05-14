import { useEffect, useRef } from "react";
import welcome from "@/assets/cards/welcome.png";

export interface Props {
  callback: (_arg0: string) => void;
}

export function Welcome({ callback }: Props) {
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
      img.src = welcome;
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

      callback(canvas.toDataURL("image/png"));
    }
  }, []);

  return (
    <div className="w-[70%] mt-8 h-full rounded-4xl mx-auto">
      <canvas ref={canvasRef} className="w-full h-full object-contain" />
    </div>
  );
}
