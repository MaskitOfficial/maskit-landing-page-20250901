import { useState, useEffect } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollX: number;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      });
    };

    // 초기 값 설정
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;