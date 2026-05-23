'use client';

import { useEffect, useRef, useState } from 'react';

interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(options: Options = {}) {
  const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false } = options;
  const ref = useRef<Element | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const node = ref.current;
    if (!node || frozen) return;

    const observer = new IntersectionObserver(([e]) => setEntry(e), {
      threshold,
      root,
      rootMargin,
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, frozen]);

  return { ref, entry, isVisible: !!entry?.isIntersecting };
}
