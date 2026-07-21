export default function GrowthVisual() {
  return (
    <svg className="data-visual growth-visual" viewBox="0 0 760 560" role="img" aria-label="Финансовый dashboard устойчивого роста">
      <defs>
        <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22cbe5" stopOpacity=".34" /><stop offset="1" stopColor="#22cbe5" stopOpacity="0" /></linearGradient>
        <linearGradient id="growthStroke" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#15566d" /><stop offset=".58" stopColor="#25cce7" /><stop offset="1" stopColor="#c4fbff" /></linearGradient>
        <filter id="growthGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="chart-grid">
        {Array.from({ length: 9 }).map((_, index) => <line key={`x-${index}`} x1={60 + index * 78} y1="62" x2={60 + index * 78} y2="468" />)}
        {Array.from({ length: 6 }).map((_, index) => <line key={`y-${index}`} x1="60" y1={82 + index * 76} x2="700" y2={82 + index * 76} />)}
      </g>
      <g className="growth-bars">{[48,72,58,106,126,154,188,220].map((height,index) => <rect key={`${height}-${index}`} x={72 + index * 52} y={456-height} width="18" height={height} rx="4" />)}</g>
      <path className="chart-area" d="M60 444 C118 432 154 410 204 398 S282 372 330 326 S408 294 452 248 S532 202 574 156 S644 118 700 88 L700 468 L60 468 Z" fill="url(#growthArea)" />
      <path className="chart-line chart-line-secondary" d="M60 420 C128 404 166 410 224 374 S318 352 370 316 S482 286 532 238 S632 198 700 168" />
      <path className="chart-line chart-line-secondary" d="M60 452 C132 438 186 430 242 408 S344 374 404 338 S518 304 574 262 S646 234 700 198" />
      <path className="chart-line chart-line-main" filter="url(#growthGlow)" stroke="url(#growthStroke)" d="M60 444 C118 432 154 410 204 398 S282 372 330 326 S408 294 452 248 S532 202 574 156 S644 118 700 88" />
      <g className="chart-points">{[[60,444],[204,398],[330,326],[452,248],[574,156],[700,88]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="6" />)}</g>
      <g className="growth-axis"><text x="60" y="506">СТАРТ</text><text x="260" y="506">СИСТЕМА</text><text x="480" y="506">МАСШТАБ</text><text x="700" y="506" textAnchor="end">РЕЗУЛЬТАТ</text></g>
      <g className="growth-note"><path d="M574 156h72v-38" /><text x="654" y="112">УСТОЙЧИВЫЙ ТРЕНД</text></g>
    </svg>
  );
}
