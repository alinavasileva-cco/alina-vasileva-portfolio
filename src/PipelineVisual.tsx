export default function PipelineVisual() {
  const contacts = [[360,154],[424,124],[480,168],[438,224],[350,236],[292,196]] as const;
  return (
    <svg className="data-visual pipeline-visual" viewBox="0 0 760 560" role="img" aria-label="Система запуска нового продукта и распространения органического спроса">
      <defs>
        <linearGradient id="signalStroke" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#17566c" /><stop offset=".56" stopColor="#25cce7" /><stop offset="1" stopColor="#c1fbff" /></linearGradient>
        <radialGradient id="signalCore" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#bff9ff" /><stop offset=".22" stopColor="#2bcbe5" /><stop offset="1" stopColor="#0a3142" /></radialGradient>
        <filter id="signalGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="signal-grid">{Array.from({length:9}).map((_,i)=><line key={`v-${i}`} x1={52+i*82} y1="54" x2={52+i*82} y2="510" />)}{Array.from({length:6}).map((_,i)=><line key={`h-${i}`} x1="44" y1={66+i*84} x2="716" y2={66+i*84} />)}</g>
      <path className="signal-baseline" d="M72 414 C168 414 196 366 252 340 S328 282 378 280 S480 310 528 266 S620 192 690 142" />
      <g className="signal-origin" transform="translate(92 414)"><circle className="signal-origin-halo" r="46" /><circle className="signal-origin-core" r="13" fill="url(#signalCore)" filter="url(#signalGlow)" /><text y="76" textAnchor="middle">ИДЕЯ</text></g>
      <g className="signal-package" transform="translate(236 344)"><rect x="-62" y="-38" width="124" height="76" rx="14" /><path d="M-36 -10h72M-36 8h52" /><circle cx="42" cy="18" r="5" /><text y="72" textAnchor="middle">УПАКОВКА</text></g>
      <g className="signal-network">
        <circle cx="390" cy="190" r="92" /><circle cx="390" cy="190" r="58" /><circle cx="390" cy="190" r="18" fill="url(#signalCore)" filter="url(#signalGlow)" />
        {contacts.map(([x,y]) => <g key={`${x}-${y}`}><path d={`M390 190 L${x} ${y}`} /><circle cx={x} cy={y} r="8" /></g>)}
        <text x="390" y="314" textAnchor="middle">ПАРТНЁРСКАЯ СЕТЬ</text>
      </g>
      <g className="signal-waves"><path d="M488 220 C548 214 584 176 612 126" /><path d="M500 246 C578 244 628 202 656 136" /><path d="M506 274 C608 278 668 234 700 150" /></g>
      <g className="signal-demand" transform="translate(606 286)"><path d="M-48 8h54l28-26v74L6 30h-54z" /><path d="M42 -10c22 14 22 66 0 80M58 -28c36 24 36 98 0 120" /><text y="118" textAnchor="middle">ОРГАНИЧЕСКИЙ СПРОС</text></g>
      <g className="signal-system" transform="translate(672 124)"><circle r="42" /><circle r="25" /><circle r="8" fill="url(#signalCore)" /><text y="68" textAnchor="middle">СИСТЕМА</text></g>
      <g className="signal-flow">{[0,1,2,3,4].map((i)=><circle key={i} cx={132+i*108} cy={397-i*48} r="4" />)}</g>
    </svg>
  );
}
