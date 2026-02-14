'use client';

import { useRef } from 'react';

export default function Carousel({ children }) {
  const ref = useRef(null);

  const slide = (dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="mb-4 flex justify-end gap-2">
        <button type="button" onClick={() => slide(-1)} className="h-11 w-11 rounded-full border border-[var(--color-border)] bg-white/5">←</button>
        <button type="button" onClick={() => slide(1)} className="h-11 w-11 rounded-full border border-[var(--color-border)] bg-white/5">→</button>
      </div>
      <div ref={ref} className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
        {children}
      </div>
    </div>
  );
}
