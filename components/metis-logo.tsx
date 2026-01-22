export function MetisLogo({ className = "", size = 32 }: { className?: string; size?: number }) {
  const textSize = size <= 24 ? "text-sm" : size <= 28 ? "text-base" : "text-xl"
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <svg width={size} height={size * 1.2} viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top circle */}
        <circle cx="20" cy="6" r="6" className="fill-steel-blue" />
        {/* Left circle */}
        <circle cx="8" cy="22" r="6" className="fill-steel-blue" />
        {/* Right circle */}
        <circle cx="32" cy="22" r="6" className="fill-steel-blue" />
        {/* Bottom circle */}
        <circle cx="20" cy="42" r="6" className="fill-steel-blue" />
        {/* Connecting lines */}
        <line x1="20" y1="12" x2="20" y2="18" className="stroke-steel-blue" strokeWidth="3" />
        <line x1="14" y1="22" x2="26" y2="22" className="stroke-steel-blue" strokeWidth="3" />
        <line x1="12" y1="26" x2="18" y2="36" className="stroke-steel-blue" strokeWidth="3" />
        <line x1="28" y1="26" x2="22" y2="36" className="stroke-steel-blue" strokeWidth="3" />
        {/* Center node */}
        <circle cx="20" cy="22" r="4" className="fill-steel-blue" />
      </svg>
      <span className={`${textSize} font-serif font-bold tracking-[0.15em] text-foreground`} style={{ fontFamily: 'Georgia, serif' }}>METIS</span>
    </div>
  )
}

export function MetisIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="6" r="6" className="fill-steel-blue" />
      <circle cx="8" cy="22" r="6" className="fill-steel-blue" />
      <circle cx="32" cy="22" r="6" className="fill-steel-blue" />
      <circle cx="20" cy="42" r="6" className="fill-steel-blue" />
      <line x1="20" y1="12" x2="20" y2="18" className="stroke-steel-blue" strokeWidth="3" />
      <line x1="14" y1="22" x2="26" y2="22" className="stroke-steel-blue" strokeWidth="3" />
      <line x1="12" y1="26" x2="18" y2="36" className="stroke-steel-blue" strokeWidth="3" />
      <line x1="28" y1="26" x2="22" y2="36" className="stroke-steel-blue" strokeWidth="3" />
      <circle cx="20" cy="22" r="4" className="fill-steel-blue" />
    </svg>
  )
}
