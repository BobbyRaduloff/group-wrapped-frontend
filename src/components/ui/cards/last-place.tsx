import { useEffect, useRef } from "react";
import lastplace from "@/assets/cards/last-place.png";

interface LastPlaceProps {
  name: string;
  messages: number;
}

export function LastPlace({ name, messages }: LastPlaceProps) {
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
      img.src = lastplace;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Set font with fallback options (light weight)
        ctx.font = "bold 64px  'Afacad', sans-serif";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "center";
        ctx.fillText(name.toString(), canvas.width / 2, 475);

        ctx.font = "bold 80px  'Afacad', sans-serif";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "center";
        ctx.fillText(
          messages.toString(),
          canvas.width / 2,
          canvas.height - 320
        );
      };
    }

    return () => {
      // No cleanup needed
    };
  }, [name, messages]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-4xl object-contain"
    />
  );
}
