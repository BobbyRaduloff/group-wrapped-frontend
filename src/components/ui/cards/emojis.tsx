import { useEffect, useRef } from "react";
import emojis from "@/assets/cards/emojis.png";

const DEFAULT_EMOJI = "🤖";

interface EmojisProps {
  emojiOne: string;
  emojiTwo: string;
  emojiThree: string;
  emojiOneN: number;
  emojiTwoN: number;
  emojiThreeN: number;

  callback: (_arg0: string) => void;
}

export function Emojis({
  emojiOne,
  emojiTwo,
  emojiThree,
  emojiOneN,
  emojiTwoN,
  emojiThreeN,
  callback,
}: EmojisProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    renderCanvas();

    async function renderCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let f = new FontFace("Abhaya Libre", "url(/abhaya.ttf)");
      let f1 = new FontFace("Afacad", "url(/afacad.ttf)");
      const img = new Image();
      img.src = emojis;

      await Promise.all([
        f.load(),
        f1.load(),
        new Promise((resolve) => (img.onload = resolve)),
      ]);
      document.fonts.add(f);
      document.fonts.add(f1);

      // Set canvas dimensions based on background image
      const displayWidth = img.width;
      const displayHeight = img.height;

      // Set high DPI canvas
      const dpr = window.devicePixelRatio || 1;
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;

      // Scale context
      ctx.scale(dpr, dpr);

      // Draw background image
      ctx.drawImage(img, 0, 0, displayWidth, displayHeight);

      // Set font with fallback options (light weight)
      ctx.font = "bold 52px  'Afacad', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText("WhatsWrapped.me", displayWidth / 2, 120);

      // Render emoji with SVG-like scaling, using default if empty
      renderEmojiAsVector(
        ctx,
        emojiOne || DEFAULT_EMOJI,
        displayWidth / 2,
        850,
        240,
      );

      // Settings for text rendering
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = `bold 64px "Abhaya Libre", sans-serif`;

      ctx.fillStyle = "#323233";
      ctx.fillText(`${emojiOneN} Times`, 450, 1130);

      // Add the other emojis if they're used
      if (emojiTwo) {
        renderEmojiAsVector(
          ctx,
          emojiTwo || DEFAULT_EMOJI,
          displayWidth / 2 - 200,
          1500,
          180,
        );

        ctx.font = `bold 48px "Abhaya Libre", sans-serif`;
        ctx.fillStyle = "#323233";
        ctx.fillText(`${emojiTwoN} Times`, 240, 1680);
      }

      if (emojiThree) {
        renderEmojiAsVector(
          ctx,
          emojiThree || DEFAULT_EMOJI,
          displayWidth / 2 + 200,
          1500,
          180,
        );

        // If emoji count is provided, render it
        ctx.font = `bold 48px "Abhaya Libre", sans-serif`;
        ctx.fillStyle = "#323233";
        ctx.fillText(`${emojiThreeN} Times`, 640, 1680);
      }

      callback(canvas.toDataURL("image/png"));
    }

    function renderEmojiAsVector(
      ctx: CanvasRenderingContext2D,
      emoji: string,
      x: number,
      y: number,
      fontSize: number,
    ) {
      // Create a temporary canvas for the emoji
      const emojiCanvas = document.createElement("canvas");
      const emojiSize = fontSize * 1.2; // Slightly larger than font size

      // Make the temp canvas much larger than needed for vector-like quality
      const scale = 4; // High scaling factor
      emojiCanvas.width = emojiSize * scale;
      emojiCanvas.height = emojiSize * scale;

      const emojiCtx = emojiCanvas.getContext("2d");
      if (!emojiCtx) return;

      // Scale up for higher resolution drawing
      emojiCtx.scale(scale, scale);

      // Use canvas settings that optimize for text rendering
      emojiCtx.textBaseline = "middle";
      emojiCtx.textAlign = "center";
      emojiCtx.font = `bold ${fontSize}px 'Afacad', sans-serif`;

      // Enable font smoothing
      emojiCtx.imageSmoothingEnabled = true;
      emojiCtx.imageSmoothingQuality = "high";

      // Draw emoji on temp canvas
      emojiCtx.fillStyle = "#FFFFFF";
      emojiCtx.fillText(emoji, emojiSize / 2, emojiSize / 2);

      // Draw the emoji canvas onto the main canvas with smooth scaling
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        emojiCanvas,
        x - emojiSize / 2,
        y - emojiSize / 2,
        emojiSize,
        emojiSize,
      );
    }
  }, [emojiOne, emojiTwo, emojiThree, emojiOneN, emojiTwoN, emojiThreeN]);

  return (
    <div className="w-[70%] mt-8 h-full rounded-4xl mx-auto">
      <canvas ref={canvasRef} className="w-full h-full object-contain" />
    </div>
  );
}
