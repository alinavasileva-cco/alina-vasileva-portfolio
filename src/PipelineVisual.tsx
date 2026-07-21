const partnerNodes = [
  [116, 160], [178, 112], [250, 142], [274, 218], [204, 260], [126, 242],
] as const;

const users = [
  [468, 154], [510, 130], [552, 164], [596, 138], [486, 214], [536, 230], [584, 204], [624, 230],
  [470, 286], [518, 304], [568, 282], [614, 310], [500, 364], [552, 350], [606, 374],
] as const;

export default function PipelineVisual() {
  return (
    <svg className="data-visual pipeline-visual" viewBox="0 0 760 560" role="img" aria-label="Партнёрская сеть и рупор привлекают поток пользователей в новый бизнес-юнит">
      <defs>
        <linearGradient id="partnerStroke" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#17566c" /><stop offset=".56" stopColor="#25cce7" /><stop offset="1" stopColor="#c1fbff" /></linearGradient>
        <radialGradient id="partnerCore" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#bff9ff" /><stop offset=".22" stopColor="#2bcbe5" /><stop offset="1" stopColor="#0a3142" /></radialGradient>
        <filter id="partnerGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="partner-grid">{Array.from({length:8}).map((_,i)=><line key={`v-${i}`} x1={56+i*92} y1="54" x2={56+i*92} y2="510" />)}{Array.from({length:6}).map((_,i)=><line key={`h-${i}`} x1="44" y1={66+i*84} x2="716" y2={66+i*84} />)}</g>
      <g className="partner-network">
        <circle className="partner-network-ring" cx="194" cy="190" r="112" />
        <circle className="partner-network-ring inner" cx="194" cy="190" r="70" />
        <circle className="partner-hub" cx="194" cy="190" r="18" fill="url(#partnerCore)" filter="url(#partnerGlow)" />
        {partnerNodes.map(([x,y]) => <g key={`${x}-${y}`}><path d={`M194 190 L${x} ${y}`} /><circle cx={x} cy={y} r="9" /></g>)}
        <text x="194" y="330" textAnchor="middle">ПАРТНЁРСКАЯ СЕТЬ</text>
      </g>
      <g className="partner-megaphone" transform="translate(374 228)">
        <path className="megaphone-body" d="M-76 -32h60l72-52v168L-16 32h-60z" />
        <path className="megaphone-handle" d="M-18 32l22 76h48L30 42" />
        <path className="megaphone-wave" d="M72 -50c34 22 34 98 0 120M98 -78c54 36 54 148 0 188" />
        <text y="136" textAnchor="middle">РУПОР</text>
      </g>
      <path className="partner-flow-line" d="M294 190 C330 190 338 208 350 218 M448 228 C494 206 542 214 598 254" />
      <g className="lead-stream">
        {users.map(([x,y], index) => <g className="lead-user" key={`${x}-${y}`} style={{ animationDelay: `${index * 70}ms` }} transform={`translate(${x} ${y})`}><circle cy="-6" r="6" /><path d="M-10 10c4-10 16-10 20 0" /></g>)}
        <text x="548" y="430" textAnchor="middle">ПОТОК ПОЛЬЗОВАТЕЛЕЙ И ЛИДОВ</text>
      </g>
      <g className="business-unit" transform="translate(658 262)">
        <rect x="-74" y="-88" width="148" height="176" rx="22" />
        <circle cx="0" cy="-42" r="24" fill="url(#partnerCore)" />
        <path d="M-38 8h76M-38 28h76M-26 48h52" />
        <text y="116" textAnchor="middle"><tspan x="0">НОВЫЙ</tspan><tspan x="0" dy="18">БИЗНЕС-ЮНИТ</tspan></text>
      </g>
      <path className="repeat-loop" d="M690 368 C718 408 704 458 646 474 C592 490 542 468 520 438" />
      <path className="repeat-arrow" d="M514 438l8-20 18 12" />
      <text className="repeat-label" x="628" y="504" textAnchor="middle">ПОВТОРЯЕМАЯ МОДЕЛЬ</text>
    </svg>
  );
}
