import { useState, useEffect, useRef } from "react";

interface CountdownState {
  time: number;
  isExpired: boolean;
}

export function useCounter(endsAt: number): CountdownState {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, endsAt - Date.now()),
  );
  const rafRef = useRef<number>(0);
  const endsAtRef = useRef(endsAt);
  endsAtRef.current = endsAt;

  useEffect(() => {
    function tick() {
      const left = Math.max(0, endsAtRef.current - Date.now());
      setRemaining(left);

      if (left > 0) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [endsAt]);

  return {
    time: remaining,
    isExpired: remaining <= 0,
  };
}
