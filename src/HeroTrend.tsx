export default function HeroTrend() {
  return (
    <svg className="hero-trend" viewBox="0 0 980 720" aria-hidden="true">
      <defs>
        <linearGradient id="heroStroke" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#0a2d3c" /><stop offset="0.58" stopColor="#18b9d5" /><stop offset="1" stopColor="#b4f9ff" /></linearGradient>
        <filter id="heroGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="7" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="hero-grid-lines">
        {Array.from({ length: 10 }).map((_, index) => <line key={`v-${index}`} x1={80 + index * 88} y1="56" x2={80 + index * 88} y2="680" />)}
        {Array.from({ length: 8 }).map((_, index) => <line key={`h-${index}`} x1="42" y1={88 + index * 76} x2="944" y2={88 + index * 76} />)}
      </g>
      <path className="hero-path hero-path-muted" d="M35 650 C180 636 248 606 338 560 S500 482 590 394 S750 236 944 78" />
      <path className="hero-path hero-path-muted" d="M35 668 C165 656 258 624 344 594 S508 516 604 438 S770 300 944 170" />
      <path className="hero-path hero-path-main" filter="url(#heroGlow)" stroke="url(#heroStroke)" d="M35 664 C170 650 248 624 334 574 S490 518 576 430 S726 296 820 176 S900 112 944 64" />
      <g className="hero-nodes"><circle cx="334" cy="574" r="6" /><circle cx="576" cy="430" r="6" /><circle cx="820" cy="176" r="7" /><circle cx="944" cy="64" r="8" /></g>
      <g className="hero-callouts"><path d="M576 430h94v-42" /><text x="682" y="382">КОММЕРЦИЯ</text><path d="M820 176h70v-34" /><text x="898" y="136">МАРКЕТИНГ</text></g>
    </svg>
  );
}
