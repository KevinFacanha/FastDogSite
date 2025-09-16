import React, { useEffect, useRef, useState } from 'react';

type DeferredInViewProps = {
  children: React.ReactNode;
  rootMargin?: string;
};

const scheduleIdle = (callback: () => void) => {
  if (typeof window !== 'undefined' && typeof (window as any).requestIdleCallback === 'function') {
    return (window as any).requestIdleCallback(() => callback());
  }

  return window.setTimeout(callback, 1);
};

const cancelIdle = (handle: number | null) => {
  if (handle === null) return;

  if (typeof window !== 'undefined' && typeof (window as any).cancelIdleCallback === 'function') {
    (window as any).cancelIdleCallback(handle);
  } else {
    clearTimeout(handle);
  }
};

const DeferredInView: React.FC<DeferredInViewProps> = ({ children, rootMargin = '0px' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const idleHandleRef = useRef<number | null>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || shouldRender) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            idleHandleRef.current = scheduleIdle(() => {
              setShouldRender(true);
            });
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelIdle(idleHandleRef.current);
    };
  }, [rootMargin, shouldRender]);

  return <div ref={containerRef}>{shouldRender ? children : null}</div>;
};

export default DeferredInView;
