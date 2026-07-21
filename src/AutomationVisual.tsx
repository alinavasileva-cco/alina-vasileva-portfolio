export default function AutomationVisual() {
  const nodes = [
    { x: 118, y: 410, label: "Битрикс24" },
    { x: 252, y: 488, label: "1С" },
    { x: 508, y: 488, label: "DataLens" },
    { x: 642, y: 410, label: "AI" },
  ];

  return (
    <svg className="data-visual automation-visual" viewBox="0 0 760 580" role="img" aria-label="Масштабируемая система на базе Битрикс24, 1С, DataLens и AI">
      <defs>
        <linearGradient id="autoPanel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#173648" stopOpacity=".82" /><stop offset="1" stopColor="#04111a" stopOpacity=".96" /></linearGradient>
        <radialGradient id="autoCore" cx="50%" cy="35%" r="75%"><stop offset="0" stopColor="#1a7890" stopOpacity=".68" /><stop offset=".48" stopColor="#082536" stopOpacity=".9" /><stop offset="1" stopColor="#02080e" /></radialGradient>
        <filter id="autoGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <ellipse className="auto-floor-glow" cx="380" cy="488" rx="304" ry="72" />
      <polygon className="auto-floor" points="54,478 380,322 706,478 380,570" />
      <g className="auto-floor-grid">
        {[0,1,2,3,4,5,6].map((i) => <path key={`f-${i}`} d={`M${96 + i*47} 464 L380 336 L${664 - i*47} 464`} />)}
        {[0,1,2,3].map((i) => <path key={`c-${i}`} d={`M${96 + i*72} ${492 + i*14} Q380 ${406 + i*8} ${664 - i*72} ${492 + i*14}`} />)}
      </g>
      <g className="auto-back-panel">
        <polygon points="70,132 248,94 248,340 70,378" fill="url(#autoPanel)" />
        <polyline points="96,302 128,278 158,294 194,232 224,208" />
        {[0,1,2,3].map((i) => <rect key={i} x={104+i*31} y={164+i*18} width="20" height={78-i*9} rx="3" />)}
      </g>
      <g className="auto-back-panel">
        <polygon points="512,94 690,132 690,378 512,340" fill="url(#autoPanel)" />
        <circle cx="602" cy="224" r="48" /><circle cx="602" cy="224" r="30" /><path d="M602 176 A48 48 0 0 1 644 252" />
        {[0,1,2].map((i) => <rect key={i} x="544" y={300+i*19} width={106-i*22} height="7" rx="3" />)}
      </g>
      <g className="auto-center-panel">
        <polygon className="auto-center-shadow" points="250,90 510,90 550,360 210,360" />
        <polygon className="auto-center-glass" points="264,74 496,74 532,338 228,338" fill="url(#autoPanel)" />
        <polyline className="auto-center-highlight" points="264,74 496,74 532,338" />
        <text className="auto-center-title" x="380" y="154" textAnchor="middle">МАСШТАБИРУЕМАЯ</text>
        <text className="auto-center-title" x="380" y="188" textAnchor="middle">СИСТЕМА</text>
        <g className="auto-mini-chart">
          <path className="auto-mini-area" d="M274 300 L274 282 C316 274 330 250 354 256 S394 232 420 216 S462 184 492 158 L492 300 Z" />
          <path className="auto-mini-line" d="M274 282 C316 274 330 250 354 256 S394 232 420 216 S462 184 492 158" />
          {[274,354,420,492].map((x,i) => <circle key={x} cx={x} cy={[282,256,216,158][i]} r="5" />)}
        </g>
      </g>
      <g className="auto-core" filter="url(#autoGlow)"><ellipse cx="380" cy="414" rx="98" ry="36" /><ellipse cx="380" cy="412" rx="66" ry="24" /><ellipse cx="380" cy="410" rx="34" ry="13" fill="url(#autoCore)" /><circle cx="380" cy="410" r="7" /></g>
      <g className="auto-links">{nodes.map((node) => <path key={node.label} d={`M380 410 C380 452 ${node.x} ${node.y-34} ${node.x} ${node.y}`} />)}</g>
      <g className="auto-nodes">{nodes.map((node) => <g key={node.label} transform={`translate(${node.x} ${node.y})`}><ellipse className="auto-node-base" cx="0" cy="26" rx="62" ry="18" /><rect className="auto-node-box" x="-62" y="-22" width="124" height="48" rx="10" fill="url(#autoPanel)" /><rect className="auto-node-edge" x="-61" y="-21" width="122" height="46" rx="9" /><circle className="auto-node-dot" cx="-42" cy="2" r="4" /><text x="10" y="8" textAnchor="middle">{node.label}</text></g>)}</g>
    </svg>
  );
}
