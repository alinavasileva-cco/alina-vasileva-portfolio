const audienceRows = [
  { y: 300, xs: [118, 166, 214, 262, 310] },
  { y: 350, xs: [92, 144, 196, 248, 300, 352] },
  { y: 404, xs: [66, 122, 178, 234, 290, 346, 402] },
] as const;

const networkNodes = [
  [520, 176],
  [582, 130],
  [636, 186],
  [612, 250],
  [548, 264],
] as const;

const signalDots = [
  [382, 318],
  [410, 300],
  [438, 282],
  [466, 262],
  [492, 240],
] as const;

export default function PipelineVisual() {
  return (
    <svg className="data-visual pipeline-visual" viewBox="0 0 760 560" role="img" aria-label="Семинар формирует аудиторию, которая передаёт информацию в партнёрскую сеть и приводит лиды в новый бизнес-юнит">
      <defs>
        <linearGradient id="seminarGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#17394a" stopOpacity=".82" />
          <stop offset="1" stopColor="#04111a" stopOpacity=".96" />
        </linearGradient>
        <linearGradient id="seminarFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#15566d" />
          <stop offset=".55" stopColor="#25cce7" />
          <stop offset="1" stopColor="#d3fcff" />
        </linearGradient>
        <radialGradient id="seminarCore" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#e1fdff" />
          <stop offset=".24" stopColor="#2bcbe5" />
          <stop offset="1" stopColor="#0a3142" />
        </radialGradient>
        <filter id="seminarGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g className="seminar-grid">
        {Array.from({ length: 9 }).map((_, index) => <line key={`v-${index}`} x1={44 + index * 84} y1="52" x2={44 + index * 84} y2="512" />)}
        {Array.from({ length: 6 }).map((_, index) => <line key={`h-${index}`} x1="40" y1={66 + index * 84} x2="720" y2={66 + index * 84} />)}
      </g>

      <g className="seminar-stage">
        <path className="stage-platform" d="M42 266 L226 218 L388 274 L204 330 Z" />
        <rect className="seminar-screen" x="72" y="72" width="232" height="138" rx="16" fill="url(#seminarGlass)" />
        <rect className="seminar-screen-inner" x="92" y="92" width="192" height="98" rx="10" />
        <circle className="screen-core" cx="188" cy="141" r="24" fill="url(#seminarCore)" filter="url(#seminarGlow)" />
        <path className="screen-system" d="M126 154h34m56 0h34M160 126l28 15-28 15M216 126l-28 15 28 15" />
        <g className="speaker" transform="translate(330 196)">
          <circle cx="0" cy="-34" r="15" />
          <path d="M-24 10c5-31 43-31 48 0v42h-48z" />
          <path className="speaker-arm" d="M-18 0L-54-30M17 2l40-18" />
          <circle className="speaker-point" cx="58" cy="-17" r="5" />
        </g>
      </g>

      <g className="seminar-audience">
        {audienceRows.map((row, rowIndex) => row.xs.map((x, index) => (
          <g className="audience-person" key={`${row.y}-${x}`} style={{ animationDelay: `${(rowIndex * 6 + index) * 70}ms` }} transform={`translate(${x} ${row.y})`}>
            <ellipse className="audience-seat" cx="0" cy="18" rx="22" ry="10" />
            <circle cx="0" cy="-7" r="8" />
            <path d="M-15 15c4-20 26-20 30 0" />
          </g>
        )))}
      </g>

      <path className="seminar-flow-path" d="M350 342 C408 326 456 280 520 222" />
      <g className="seminar-signals">
        {signalDots.map(([x, y], index) => <circle className="seminar-signal" key={`${x}-${y}`} cx={x} cy={y} r={index % 2 === 0 ? 5 : 3.5} style={{ animationDelay: `${index * 120}ms` }} />)}
      </g>

      <g className="partner-network">
        <circle className="network-ring outer" cx="582" cy="198" r="100" />
        <circle className="network-ring inner" cx="582" cy="198" r="62" />
        <circle className="network-hub" cx="582" cy="198" r="17" fill="url(#seminarCore)" filter="url(#seminarGlow)" />
        {networkNodes.map(([x, y], index) => (
          <g className="network-node" key={`${x}-${y}`} style={{ animationDelay: `${index * 120}ms` }}>
            <path d={`M582 198 L${x} ${y}`} />
            <circle className="network-node-halo" cx={x} cy={y} r="14" />
            <circle className="network-node-core" cx={x} cy={y} r="7" />
          </g>
        ))}
      </g>

      <path className="business-flow" d="M640 222 C662 236 674 250 688 272" />
      <g className="business-unit" transform="translate(692 344)">
        <rect x="-62" y="-78" width="124" height="156" rx="22" fill="url(#seminarGlass)" />
        <rect className="business-unit-inner" x="-40" y="-52" width="80" height="62" rx="12" />
        <circle cx="0" cy="-20" r="19" fill="url(#seminarCore)" filter="url(#seminarGlow)" />
        <path d="M-34 30h68M-34 48h68" />
        <text y="105" textAnchor="middle"><tspan x="0">НОВЫЙ</tspan><tspan x="0" dy="18">БИЗНЕС-ЮНИТ</tspan></text>
      </g>

      <g className="repeat-system">
        <path className="repeat-loop" d="M710 438 C704 500 620 520 548 486 C512 470 486 446 470 412" />
        <path className="repeat-arrow" d="M466 412l3 23 21-10" />
      </g>
    </svg>
  );
}
