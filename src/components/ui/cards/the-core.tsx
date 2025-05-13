import { useEffect, useRef } from "react";
import thecore from "../../../assets/cards/thecore.png";

interface TheCoreProps {
  name: string;
}

export function TheCore({ name }: TheCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = thecore;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      ctx.font = "bold 64px Poppins";
      ctx.fillStyle = "#333";
      ctx.textAlign = "center";
      ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 375);

      ctx.font = "bold 30px Poppins";
      ctx.fillText(
        "The core is the heart of the group,",
        canvas.width / 2,
        canvas.height / 2 + 440
      );
      ctx.fillText(
        "the person most people interact with.",
        canvas.width / 2,
        canvas.height / 2 + 490
      );
    };
  }, [name]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-4xl object-contain"
    />
  );
}
