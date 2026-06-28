// A stylised CAD-style floor plan, drawn inline to echo the studio's
// "Process" blueprint. Uses currentColor so it inherits text color.
export default function FloorPlan({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 380"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      className={className}
      role="img"
      aria-label="Architectural floor plan: entrance, living room, kitchen and dining"
    >
      {/* Outer walls */}
      <rect x="20" y="20" width="560" height="340" strokeWidth={2} />

      {/* Vertical partitions */}
      <line x1="200" y1="20" x2="200" y2="360" />
      <line x1="400" y1="20" x2="400" y2="200" />

      {/* Horizontal partitions */}
      <line x1="200" y1="200" x2="580" y2="200" />
      <line x1="20" y1="240" x2="200" y2="240" />

      {/* Entrance door swing */}
      <path d="M20 300 h40" strokeWidth={2} />
      <path d="M60 300 A40 40 0 0 0 20 260" strokeDasharray="3 4" />

      {/* Kitchen island */}
      <rect x="440" y="60" width="100" height="50" rx="4" />
      <line x1="455" y1="60" x2="455" y2="110" />

      {/* Living room sofa */}
      <rect x="60" y="60" width="90" height="40" rx="6" />
      <rect x="60" y="120" width="40" height="40" rx="6" />

      {/* Dining table */}
      <ellipse cx="300" cy="290" rx="55" ry="32" />
      <circle cx="300" cy="290" r="10" />

      {/* Bath fixtures */}
      <rect x="430" y="240" width="60" height="90" rx="4" />
      <circle cx="520" cy="270" r="14" />

      {/* Labels */}
      <g
        fill="currentColor"
        stroke="none"
        fontSize="11"
        fontFamily="var(--font-sans), sans-serif"
        letterSpacing="2"
        opacity="0.85"
      >
        <text x="70" y="200">LIVING ROOM</text>
        <text x="455" y="150">KITCHEN</text>
        <text x="250" y="250">DINING</text>
        <text x="40" y="335">ENTRANCE</text>
        <text x="435" y="355">BATH</text>
      </g>

      {/* Dimension ticks */}
      <g stroke="currentColor" strokeWidth={0.8} opacity="0.5">
        <line x1="20" y1="10" x2="200" y2="10" />
        <line x1="20" y1="6" x2="20" y2="14" />
        <line x1="200" y1="6" x2="200" y2="14" />
        <line x1="200" y1="10" x2="580" y2="10" />
        <line x1="580" y1="6" x2="580" y2="14" />
      </g>
    </svg>
  );
}
