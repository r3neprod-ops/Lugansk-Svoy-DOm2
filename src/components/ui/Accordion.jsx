'use client';

import { useState } from 'react';
import Card from './Card';

export default function Accordion({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const open = active === idx;
        return (
          <Card key={item.q} className="overflow-hidden">
            <button
              type="button"
              onClick={() => setActive(open ? -1 : idx)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-xl">{open ? '−' : '+'}</span>
            </button>
            {open && <div className="border-t border-[var(--color-border)] px-5 py-4 text-[var(--color-muted)]">{item.a}</div>}
          </Card>
        );
      })}
    </div>
  );
}
