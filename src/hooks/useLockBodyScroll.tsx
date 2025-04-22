import { useLayoutEffect } from 'react';

const useLockBodyScroll = (shouldLock: boolean) => {
  useLayoutEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (shouldLock) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [shouldLock]);
};

export default useLockBodyScroll;
