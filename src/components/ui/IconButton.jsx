export default function IconButton({ as: Component = 'button', className = '', children, ...props }) {
  return (
    <Component
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/5 text-[var(--color-text)] transition hover:-translate-y-0.5 hover:bg-white/10 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
