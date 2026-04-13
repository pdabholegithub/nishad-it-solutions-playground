import { useState, useRef, useEffect } from 'react';

export function InfiniteScrollPage() {
  const [items, setItems] = useState<number[]>(Array.from({ length: 15 }, (_, i) => i + 1));
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const loadMoreItems = () => {
    setIsLoading(true);
    // Simulate network latency before appending
    setTimeout(() => {
      setItems(prev => {
        const nextBatch = Array.from({ length: 10 }, (_, i) => prev.length + i + 1);
        return [...prev, ...nextBatch];
      });
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      // If we scroll to the bottom (within 5px)
      if (scrollHeight - scrollTop <= clientHeight + 5 && !isLoading) {
        loadMoreItems();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isLoading]);

  return (
    <div className="max-w-3xl space-y-8 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="page-title">Infinite Scrolling Container</h1>
        <p className="text-gray-500 mt-2">Test your automation script's ability to trigger scrolls and assert lazy-loaded DOM injection.</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div 
          ref={containerRef} 
          className="h-[500px] overflow-y-auto border border-gray-300 rounded p-4 space-y-4 bg-slate-50"
          data-testid="infinite-scroll-container"
        >
          {items.map(item => (
            <div 
              key={item} 
              className="p-6 bg-white border border-gray-200 rounded shadow-sm flex items-center justify-between"
              data-testid={`scroll-item-${item}`}
            >
              <h3 className="font-bold text-lg text-slate-800">Dynamic Block Item #{item}</h3>
              <span className="text-sm text-slate-500">Rendered statically</span>
            </div>
          ))}

          {isLoading && (
            <div className="py-4 text-center font-medium text-primary flex items-center justify-center gap-2" data-testid="scroll-loading-indicator">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              Fetching more items...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
