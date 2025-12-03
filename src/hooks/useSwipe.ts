import { useRef } from "react";

export function useSwipe(callback: (dir: "next" | "prev") => void) {
  const startX = useRef(0);

  function onStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
  }

  function onEnd(e: React.TouchEvent) {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;

    if (Math.abs(diff) > 40) callback(diff < 0 ? "next" : "prev");
  }

  return { onStart, onEnd };
}
