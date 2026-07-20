export default function PipelineVisual() {
  const steps = [[88,428,"ИДЕЯ"],[202,382,"MVP"],[322,314,"КЛИЕНТЫ"],[438,236,"PIPELINE"],[558,162,"ПОВТОР"],[682,90,"СИСТЕМА"]] as const;
  return (
    <svg className="data-visual pipeline-visual" viewBox="0 0 760 560" role="img" aria-label="Roadmap развития нового бизнес-юнита">
      <defs>
        <linearGradient id="pipelineArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2ed0e8" stopOpacity=".27" /><stop offset="1" stopColor="#2ed0e8" stopOpacity="0" /></linearGradient>
        <linearGradient id="pipelineStroke" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#17566c" /><stop offset=".55" stopColor="#25cce7" /><stop offset="1" stopColor="#c1fbff" /></linearGradient>
        <filter id="pipelineGlow" x="-35%" y="-35%" width="170%" height="170%"><feGaussianBlur stdDeviation="6" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="pipeline-layers"><polygon points="56,474 360,312 710,478 392,540" /><polygon points="90,438 360,294 674,442 392,504" /><polygon points="126,402 360,278 638,406 392,468" /></g>
      <g className="pipeline-grid">{Array.from({length:8}).map((_,i)=><path key={i} d={`M${84+i*70} 458 L360 304 L${676-i*58} 458`} />)}</g>
      <path className="pipeline-area" d="M70 440 C128 430 158 400 202 382 S282 346 322 314 S404 266 438 236 S522 190 558 162 S642 112 690 84 L690 460 L70 460 Z" fill="url(#pipelineArea)" />
      <path className="pipeline-line" filter="url(#pipelineGlow)" stroke="url(#pipelineStroke)" d="M70 440 C128 430 158 400 202 382 S282 346 322 314 S404 266 438 236 S522 190 558 162 S642 112 690 84" />
      <g className="pipeline-milestones">{steps.map(([x,y,label],index)=><g key={label} transform={`translate(${x} ${y})`}><circle className="milestone-halo" r={26+index*2}/><circle className="milestone-core" r="7"/><text y="48" textAnchor="middle">{label}</text></g>)}</g>
      <g className="client-stream">{[0,1,2,3,4,5].map((index)=><g key={index} transform={`translate(${142+index*84} ${500-(index%2)*14})`}><circle r="10"/><path d="M-15 19 C-7 9 7 9 15 19"/></g>)}</g>
      <g className="pipeline-flow">{[0,1,2,3].map((i)=><path key={i} d={`M${132+i*72} ${468-i*4} C${244+i*34} ${430-i*22} ${374+i*28} ${360-i*46} ${560+i*24} ${202-i*24}`} />)}</g>
      <text className="pipeline-caption" x="72" y="54">PRODUCT MATURITY / MRR</text>
    </svg>
  );
}
