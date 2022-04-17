import { RefObject, useEffect, useState } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  prefetch?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = true,
    prefetch = false,
  }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = !prefetch
      ? new IntersectionObserver(updateEntry, observerParams)
      : undefined;
    observer?.observe(node);

    return () => observer?.disconnect();
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
}

export default useIntersectionObserver;
