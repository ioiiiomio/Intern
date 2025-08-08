import React from "react";
import { useCallback, useRef } from "react";
import confetti from "canvas-confetti";

export default function useConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fire = useCallback(() => {
    if (!canvasRef.current) return;

    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    myConfetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, []);

  // Return a React component that renders the canvas
  const ConfettiCanvas = () => (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );

  return { fire, ConfettiCanvas };
}
