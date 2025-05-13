import { useEffect, useRef } from "react";
import welcome from "@/assets/cards/welcome.png";

export function Welcome() {
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
      img.src = welcome;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }

    return () => {
      // No cleanup needed
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-4xl object-contain"
    />
  );
}
