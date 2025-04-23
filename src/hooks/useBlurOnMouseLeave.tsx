import { useEffect, useRef } from 'react';

export const useBlurOnMouseLeave = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseLeave = () => {
      const focused = document.activeElement as HTMLElement;
      if (el.contains(focused)) {
        focused.blur();
      }
    };

    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};
