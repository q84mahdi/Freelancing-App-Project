import { useEffect, useRef, type RefObject } from "react";

export default function useOutsideClick<T extends HTMLElement>(
  handler: () => void,
  listenCapturing: boolean = true,
): RefObject<T> | null {
  const ref = useRef<T>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
