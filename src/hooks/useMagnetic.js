import { useRef, useState, useCallback } from "react";

export const useMagnetic = (strength = 0.35) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      setPos({ x: distX * strength, y: distY * strength });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPos({ x: 0, y: 0 });
  }, []);

  return { ref, pos, handleMouseMove, handleMouseLeave };
};