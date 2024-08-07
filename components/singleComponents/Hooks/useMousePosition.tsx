import { useEffect, useRef, useState } from "react";
import { map_range } from "../Utils/Utils";

export const useMousePosition = () => {
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) =>
      (position.current = {
        x: map_range(e.clientX, 0, window.innerWidth, -1, 1),
        y: map_range(e.clientY, 0, window.innerHeight, 1, -1),
      });
    window.addEventListener("mousemove", setFromEvent);
    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, [position]);

  return position;
};
