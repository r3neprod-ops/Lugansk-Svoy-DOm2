export default function Input(props) {
  return <input className="h-12 w-full rounded-xl border border-[var(--color-border)] bg-white/5 px-4 text-sm outline-none ring-[var(--color-primary)] placeholder:text-[var(--color-muted)] focus:ring-1" {...props} />;
}
