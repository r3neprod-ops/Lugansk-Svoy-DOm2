import Container from './Container';

export default function Section({ id, title, subtitle, className = '', children, right }) {
  return (
    <section id={id} className={`py-14 md:py-20 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              {title && <h2 className="text-[26px] font-bold leading-[1.15] md:text-[32px]">{title}</h2>}
              {subtitle && <p className="mt-3 max-w-2xl text-[var(--color-muted)]">{subtitle}</p>}
            </div>
            {right}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
