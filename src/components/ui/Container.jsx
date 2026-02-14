export default function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 md:px-6 ${className}`}>{children}</div>;
}
