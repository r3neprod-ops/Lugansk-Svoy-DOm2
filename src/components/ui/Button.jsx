export default function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-5 h-12 text-sm font-semibold transition duration-200';
  const variants = {
    primary: 'bg-[var(--color-primary)] text-[#052e16] hover:bg-[var(--color-primary-hover)]',
    secondary: 'border border-[var(--color-border)] bg-white/5 text-[var(--color-text)] hover:bg-white/10',
    ghost: 'text-[var(--color-text)] hover:bg-white/10',
  };
  return (
    <Component className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </Component>
  );
}
