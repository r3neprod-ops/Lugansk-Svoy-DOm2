export default function Card({ className = '', children }) {
  return <div className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] ${className}`}>{children}</div>;
}
