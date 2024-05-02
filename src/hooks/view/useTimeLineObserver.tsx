import { debounce } from '@mui/material';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export const useTimeLineObserver = (ref: RefObject<Element>) => {
  const [isVisible, setIsVisible] = useState(false);
  const frameId = useRef<number | null>(null);
  const debouncedIntersectingHandler = useCallback(
    debounce((visible) => {
      frameId.current = requestAnimationFrame(() => setIsVisible(visible));
    }, 500),
    []
  );
  const debouncedNonIntersectingHandler = useCallback(
    debounce(() => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      setIsVisible(false);
    }, 500),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            debouncedIntersectingHandler(true);
          } else {
            debouncedNonIntersectingHandler();
          }
        });
      },
      { threshold: 0.6 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [ref, debouncedIntersectingHandler, debouncedNonIntersectingHandler]);

  return isVisible;
};
