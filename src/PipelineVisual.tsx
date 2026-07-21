const ecosystemNodes = [
  [108, 156],
  [172, 104],
  [252, 128],
  [286, 202],
  [258, 292],
  [178, 330],
  [104, 286],
  [72, 218],
] as const;

const particles = [
  [302, 246],
  [330, 260],
  [358, 274],
  [390, 262],
  [420, 246],
  [450, 258],
  [482, 276],
  [514, 260],
  [542, 244],
] as const;

export default function PipelineVisual() {
  return (
    <svg className="data-visual pipeline-visual" viewBox="0 0 760 560" role="img" aria-label="Партнёрская экосистема формирует повторяемый поток лидов в новый бизнес-юнит">
      <defs>
        <linearGradient id="ecosystemStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#15566d" />
          <stop offset=".55" stopColor="#25cce7" />
          <stop offset="1" stopColor="#c4fbff" />
        </linearGradient>
        <linearGradient id="systemGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#17394a" stopOpacity=".76" />
          <stop offset="1" stopColor="#04111a" stopOpacity=".96" />
        </linearGradient>
        <radialGradient id="systemCore" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#d1fbff" />
          <stop offset=".22" stopColor="#2bcbe5" />
          <stop offset="1" stopColor="#0a3142" />
        </radialGradient>
        <filter id="systemGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g className="ecosystem-grid">
        {Array.from({ length: 9 }).map((_, index) => <line key={`v-${index}`} x1={48 + index * 82} y1="54" x2={48 + index * 82} y2="506" />)}
        {Array.from({ length: 6 }).map((_, index) => <line key={`h-${index}`} x1="42" y1={66 + index * 84} x2="718" y2={66 + index * 84} />)}
      </g>

      <g className="ecosystem-network">
        <circle className="ecosystem-ring outer" cx="182" cy="218" r="132" />
        <circle className="ecosystem-ring inner" cx="182" cy="218" r="88" />
        <circle className="ecosystem-hub" cx="182" cy="218" r="19" fill="url(#systemCore)" filter="url(#systemGlow)" />
        {ecosystemNodes.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <path d={`M182 218 L${x} ${y}`} />
            <circle className="ecosystem-node-halo" cx={x} cy={y} r="15" />
            <circle className="ecosystem-node" cx={x} cy={y} r="7" />
          </g>
        ))}
      </g>

      <g className="processing-core">
        <path className="system-shadow" d="M294 174 L402 142 L492 218 L470 344 L360 390 L274 318 Z" />
        <path className="system-body" fill="url(#systemGlass)" d="M300 160 L402 132 L486 210 L464 330 L362 376 L282 310 Z" />
        <path className="system-edge" d="M300 160 L402 132 L486 210 L464 330 L362 376 L282 310 Z" />
        <circle cx="382" cy="256" r="70" />
        <circle cx="382" cy="256" r="42" />
        <circle className="processing-light" cx="382" cy="256" r="12" fill="url(#systemCore)" filter="url(#systemGlow)" />
      </g>

      <g className="pipeline-rails">
        <path d="M254 202 C300 202 322 220 346 238" />
        <path d="M252 232 C300 234 324 246 346 256" />
        <path d="M248 266 C298 270 322 278 346 276" />
        <path d="M418 232 C470 218 514 218 574 236" />
        <path d="M420 256 C478 256 522 256 574 256" />
        <path d="M418 280 C470 294 514 294 574 276" />
      </g>

      <g className="pipeline-particles">
        {particles.map(([x, y], index) => (
          <circle
            className="pipeline-particle"
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={index % 3 === 0 ? 5 : 3.5}
            style={{ animationDelay: `${index * 90}ms` }}
          />
        ))}
      </g>

      <g className="business-unit" transform="translate(642 256)">
        <rect x="-72" y="-104" width="144" height="208" rx="24" fill="url(#systemGlass)" />
        <rect className="business-unit-inner" x="-50" y="-78" width="100" height="82" rx="14" />
        <circle cx="0" cy="-38" r="23" fill="url(#systemCore)" filter="url(#systemGlow)" />
        <path d="M-42 28h84M-42 48h84M-28 68h56" />
        <text y="132" textAnchor="middle"><tspan x="0">НОВЫЙ</tspan><tspan x="0" dy="18">БИЗНЕС-ЮНИТ</tspan></text>
      </g>

      <g className="client-expansion">
        <path d="M706 218 C730 206 742 190 752 170" />
        <path d="M710 256 C736 256 746 256 758 256" />
        <path d="M706 294 C730 306 742 322 752 342" />
      </g>

      <g className="repeat-system">
        <path className="repeat-loop" d="M692 378 C716 430 676 476 608 480 C532 484 476 446 448 396" />
        <path className="repeat-arrow" d="M444 396l2 24 22-10" />
      </g>
    </svg>
  );
}
