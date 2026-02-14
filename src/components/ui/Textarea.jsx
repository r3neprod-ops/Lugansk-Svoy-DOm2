export default function Textarea(props) {
  return <textarea className="w-full rounded-xl border border-[var(--color-border)] bg-white/5 px-4 py-3 text-sm outline-none ring-[var(--color-primary)] placeholder:text-[var(--color-muted)] focus:ring-1" {...props} />;
}
