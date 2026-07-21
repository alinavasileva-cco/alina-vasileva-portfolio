const base = import.meta.env.BASE_URL;

export default function PipelineVisual() {
  return (
    <img
      className="data-visual pipeline-visual pipeline-visual-image"
      src={`${base}assets/business-unit-seminar-network.png.png?v=192d102a`}
      alt="Семинар с лектором и аудиторией, партнёрская сеть и бизнес-юнит"
      width="1448"
      height="1086"
      loading="lazy"
      decoding="async"
      style={{ objectFit: "contain", borderRadius: "calc(var(--glass-radius) - 8px)" }}
    />
  );
}
