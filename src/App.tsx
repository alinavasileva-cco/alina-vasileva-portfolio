import { useState } from "react";

const base = import.meta.env.BASE_URL;

const expertise = [
  ["Коммерческая стратегия", "Бизнес-модель, экономика направления, план продаж и управленческий контур.", "strategy"],
  ["Управление продажами", "Пресейл, воронка, тендеры, прогнозирование и развитие команды.", "bars"],
  ["Маркетинг и бренд", "Позиционирование, продуктовая упаковка, контент и система привлечения спроса.", "signal"],
  ["Автоматизация и аналитика", "CRM, 1С, DataLens, AI и управленческие дашборды.", "data"],
];

const cases = [
  {
    number: "01",
    label: "Операционное управление",
    title: "Масштабирование направления",
    text: "CRM, 1С, DataLens и AI связаны в единый управляемый коммерческий контур.",
    facts: [["+71%", "рост выручки год к году"], ["41", "новый проект"]],
    visual: "automation",
  },
  {
    number: "02",
    label: "Коммерческое управление",
    title: "Рост направления и прибыли",
    text: "Пересобраны пресейл, тендеры, коммерческие предложения и прогнозирование сделок.",
    facts: [["×4,7", "оборот направления"], ["×8,3", "маржинальная прибыль"], ["8", "проектных запусков"], ["40+ млн ₽", "коммерческих предложений"]],
    visual: "growth",
  },
  {
    number: "03",
    label: "Маркетинг / сайт / контент",
    title: "Рост интернет-магазина",
    text: "Связка контента, сайта и заявки стала измеримой и управляемой.",
    facts: [["×3", "заявки"], ["×5", "производство контента"], ["+16%", "конверсия сайта"]],
    visual: "funnel",
  },
  {
    number: "04",
    label: "Запуск продукта",
    title: "Новый бизнес-юнит",
    text: "Продукт запущен с нуля и выведен на устойчивую экономику без рекламных вложений.",
    facts: [["80%+", "маржинальность"], ["40", "лидов в месяц"], ["0 ₽", "рекламных вложений"]],
    visual: "roadmap",
  },
];

const experience = [
  ["2026", "Коммерческий директор / CCO", "Медиа Инсайт", "Продажи, пресейл, тендеры, коммерческий контур"],
  ["2023 — 2025", "Исполнительный директор / COO", "Интерэстейт", "P&L, процессы, команда, отчётность"],
  ["2019 — 2022", "Руководитель маркетинга и PR", "Сетевые коммуникации", "Маркетинг, PR, сайт, контент, лидогенерация"],
  ["2016 — 2019", "Директор по развитию", "Альянс ТМ", "Новые продукты, партнёрства, продажи"],
];

const education = [
  ["2026", "Бизнес-анализ", "ASPEX"],
  ["2026", "Старт в 1С", "1С"],
  ["2025", "Управление и мотивация команд", "SETTERS"],
  ["2025", "Re:start. Дао-Перезагрузка", "Ирина Хакамада"],
  ["2024", "Менторская программа «Новый шаг»", "Forbes Woman"],
];

function TrendGraph() {
  return (
    <svg className="trend-graph" viewBox="0 0 900 520" aria-hidden="true">
      <defs>
        <linearGradient id="trendStroke" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#07344a" />
          <stop offset=".55" stopColor="#12bddd" />
          <stop offset="1" stopColor="#62efff" />
        </linearGradient>
        <filter id="trendGlow"><feGaussianBlur stdDeviation="8" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      {Array.from({ length: 10 }).map((_, i) => <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="520" className="grid-line" />)}
      {Array.from({ length: 7 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 86} x2="900" y2={i * 86} className="grid-line" />)}
      <path className="trend-soft t1" d="M0 500 C180 480 260 430 350 390 S510 330 590 250 S720 170 900 28" />
      <path className="trend-soft t2" d="M0 510 C160 500 300 470 410 425 S570 315 650 290 S770 180 900 62" />
      <path className="trend-main" d="M0 505 C120 500 245 470 345 423 S510 360 585 315 S660 258 725 205 S820 130 900 34" />
      {[345, 585, 725, 900].map((x, i) => <circle key={x} cx={x} cy={[423, 315, 205, 34][i]} r="7" className="trend-point" />)}
    </svg>
  );
}

function DashboardVisual() {
  const tools = ["CRM", "1С", "DataLens", "AI"];
  return (
    <div className="dashboard-scene" aria-label="Единый контур коммерческого управления">
      <div className="dashboard-grid" />
      <div className="control-panel glass-panel">
        <div className="panel-header"><span>Control center</span><i /></div>
        <div className="panel-title">Единый управленческий контур</div>
        <svg viewBox="0 0 320 110" aria-hidden="true">
          <path d="M8 93 C50 88 76 72 108 73 S159 53 190 48 S244 34 312 9" />
          {[108, 190, 312].map((x, i) => <circle key={x} cx={x} cy={[73, 48, 9][i]} r="4" />)}
        </svg>
        <div className="panel-modules"><span>Продажи</span><span>Финансы</span><span>Проекты</span><span>Отчётность</span></div>
      </div>
      <div className="tool-network">
        {tools.map((tool, index) => <span key={tool} className={`tool-node n${index + 1}`}>{tool}</span>)}
        <span className="network-core">DATA</span>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="case-visual automation-visual" aria-label="Связь CRM, 1С, DataLens и AI">
      <div className="visual-grid" />
      <span className="automation-core">Control<br />center</span>
      {["CRM", "1С", "DataLens", "AI"].map((label, index) => <span key={label} className={`automation-node a${index + 1}`}>{label}</span>)}
      <svg viewBox="0 0 560 360" aria-hidden="true">
        <path d="M280 180 L112 86 M280 180 L448 86 M280 180 L112 274 M280 180 L448 274" />
        <circle cx="280" cy="180" r="6" />
      </svg>
    </div>
  );
}

function GrowthVisual() {
  return (
    <div className="case-visual growth-visual" aria-label="Динамика коммерческого роста">
      <div className="glass-panel growth-panel">
        <div className="panel-header"><span>Commercial performance</span><i /></div>
        <div className="growth-kpis"><span>Pipeline</span><span>Forecast</span><span>Deal velocity</span></div>
        <svg viewBox="0 0 560 260" aria-hidden="true">
          {[52, 104, 156, 208].map((y) => <line key={y} x1="22" y1={y} x2="538" y2={y} />)}
          <path className="growth-shadow" d="M24 228 C90 219 120 194 168 188 S246 160 292 151 S366 116 410 92 S482 55 536 24" />
          <path className="growth-line" d="M24 228 C90 219 120 194 168 188 S246 160 292 151 S366 116 410 92 S482 55 536 24" />
          {[168, 292, 410, 536].map((x, i) => <circle key={x} cx={x} cy={[188, 151, 92, 24][i]} r="6" />)}
        </svg>
      </div>
    </div>
  );
}

function FunnelVisual() {
  const stages = ["Трафик", "Контент", "Заявки", "Заказы"];
  return (
    <div className="case-visual funnel-visual" aria-label="Воронка интернет-магазина">
      <div className="funnel-flow">
        {stages.map((stage, index) => <div key={stage} className={`funnel-stage f${index + 1}`}><span>{stage}</span><i /></div>)}
      </div>
      <div className="funnel-dashboard glass-panel">
        <div className="panel-header"><span>Conversion flow</span><i /></div>
        <div className="mini-chart"><b /><b /><b /><b /><b /></div>
        <div className="mini-row"><span>Источники</span><span>Контент</span><span>CR</span></div>
      </div>
    </div>
  );
}

function RoadmapVisual() {
  const stages = ["Идея", "MVP", "Клиенты", "Масштаб"];
  return (
    <div className="case-visual roadmap-visual" aria-label="Дорожная карта запуска нового бизнес-юнита">
      <div className="roadmap-line" />
      {stages.map((stage, index) => <div key={stage} className={`roadmap-step r${index + 1}`}><i /><span>{stage}</span><small>{String(index + 1).padStart(2, "0")}</small></div>)}
      <div className="roadmap-pipeline glass-panel"><span>Product pipeline</span><b /><b /><b /><b /></div>
    </div>
  );
}

function CaseVisual({ type }: { type: string }) {
  if (type === "automation") return <AutomationVisual />;
  if (type === "growth") return <GrowthVisual />;
  if (type === "funnel") return <FunnelVisual />;
  return <RoadmapVisual />;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="tech-site" id="top">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}><span>ПОРТФОЛИО</span><small>АЛИНА ВАСИЛЬЕВА</small></a>
        <button className={menuOpen ? "menu-button is-open" : "menu-button"} aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span /><span /></button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"}>
          <a href="#expertise" onClick={closeMenu}>Экспертиза</a>
          <a href="#projects" onClick={closeMenu}>Кейсы</a>
          <a href="#experience" onClick={closeMenu}>Опыт</a>
          <a href="#education" onClick={closeMenu}>Обучение</a>
          <a href="#contact" onClick={closeMenu}>Контакты</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Коммерческий директор · CCO · COO</p>
            <h1><span>Алина</span><strong>Васильева</strong></h1>
            <p className="hero-lead">Соединяю стратегию, маркетинг, продажи и процессы в управляемую коммерческую систему.</p>
            <div className="hero-actions"><a href="#projects">Смотреть кейсы <b>↘</b></a><a href={`${base}alina-vasileva-resume.pdf`} download>Резюме PDF <b>↓</b></a></div>
            <div className="hero-stat"><strong>12</strong><span>лет в управлении</span></div>
          </div>
          <div className="hero-visual">
            <TrendGraph />
            <div className="portrait-wrap"><img src={`${base}assets/alina-portrait.jpg`} alt="Алина Васильева" /></div>
          </div>
        </div>
      </section>

      <section className="expertise" id="expertise">
        {expertise.map(([title, text, icon]) => <article key={title}><div className={`expertise-icon ${icon}`}><i /><span /></div><h2>{title}</h2><p>{text}</p></article>)}
      </section>

      <section className="system-section">
        <div className="section-copy"><p className="section-label">Бизнес-система</p><h2>Автоматизация процессов и прозрачная управленческая модель.</h2><p>Продажи, проекты, отчётность и инструменты управления собраны в едином контуре.</p></div>
        <DashboardVisual />
      </section>

      <section className="result-strip" aria-label="Бизнес-результаты">
        <article><strong>×4,7</strong><span>оборот направления</span></article>
        <article><strong>×8,3</strong><span>маржинальная прибыль</span></article>
        <article><strong>40+ млн ₽</strong><span>коммерческих предложений</span></article>
        <article><strong>8</strong><span>проектных запусков</span></article>
      </section>

      <section className="projects" id="projects">
        <div className="section-heading"><p>Кейсы</p><h2>Факты и динамика.</h2></div>
        <div className="project-list">
          {cases.map((item) => <article key={item.number}>
            <div className="project-copy"><p className="project-label">{item.number} · {item.label}</p><h3>{item.title}</h3><p>{item.text}</p><div className="case-facts">{item.facts.map(([value, label]) => <span key={`${value}-${label}`}><strong>{value}</strong><small>{label}</small></span>)}</div></div>
            <CaseVisual type={item.visual} />
          </article>)}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-heading"><p>Опыт</p><h2>Управленческий трек</h2></div>
        <div className="experience-list">{experience.map(([years, role, company, scope]) => <article key={years}><time>{years}</time><h3>{role}</h3><p>{company}</p><span>{scope}</span></article>)}</div>
      </section>

      <section className="education" id="education">
        <div className="section-heading"><p>Обучение</p><h2>Актуальные инструменты управления</h2></div>
        <div className="education-list">{education.map(([year, title, source]) => <article key={`${year}-${title}`}><time>{year}</time><h3>{title}</h3><p>{source}</p></article>)}</div>
      </section>

      <section className="contact" id="contact">
        <div><p className="section-label">Контакты</p><h2>Ваш бизнес должен расти</h2></div>
        <div className="contact-list"><a href="tel:+79818885389"><span>Телефон</span><strong>+7 981 888 53 89</strong></a><a href="mailto:alinavasileva.jour@gmail.com"><span>Email</span><strong>alinavasileva.jour@gmail.com</strong></a><a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer"><span>Telegram</span><strong>@AlinaVasileva</strong></a></div>
        <footer><span>Алина Васильева · 2026</span><a href="#top">Наверх ↑</a></footer>
      </section>
    </main>
  );
}
