const isDebug = process.env.NEXT_PUBLIC_SLOT_DEBUG !== 'false';

const kindStyles = {
  bg: 'bg-[linear-gradient(140deg,rgba(15,23,42,0.9),rgba(15,23,42,0.6))]',
  image: 'bg-white/[0.03]',
  mascot: 'bg-white/[0.04]',
  avatar: 'bg-white/[0.04] rounded-full',
};

export default function SlotBox({ slotKey, kind = 'image', className = '', children }) {
  return (
    <div className={`relative ${kindStyles[kind] || ''} ${className}`}>
      {children}
      {isDebug && (
        <>
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border-2 border-dashed border-slate-400/55" />
          <div className="pointer-events-none absolute left-2 top-2 rounded bg-slate-900/85 px-2 py-1 text-xs text-slate-200">
            {kind}:{slotKey}
          </div>
        </>
      )}
    </div>
  );
}
