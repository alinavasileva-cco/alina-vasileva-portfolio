import { useState } from "react";

const base = import.meta.env.BASE_URL;

const expertise = [
  ["Коммерческая стратегия", "Бизнес-модель, экономика направления, план продаж и управленческий контур.", "target"],
  ["Управление продажами", "Пресейл, воронка, тендеры, прогнозирование и развитие команды.", "bars"],
  ["Маркетинг и бренд", "Позиционирование, продуктовая упаковка, контент и система привлечения спроса.", "megaphone"],
  ["Автоматизация и аналитика", "CRM, 1С, DataLens, AI и управленческие дашборды.", "pie"],
];

const cases = [
  {
    number: "01",
    label: "Операционное управление",
    title: "Масштабирование направления",
    text: "CRM, 1С, DataLens и AI связаны в единый управляемый коммерческий контур.",
    facts: [["+71%", "рост выручки год к году"], ["41", "новый проект"]],
    visual: "system",
  },
  {
    number: "02",
    label: "Коммерческое управление",
    title: "Рост направления и прибыли",
    text: "Пересобраны пресейл, тендеры, коммерческие предложения и прогнозирование сделок.",
    facts: [["×4,7", "оборот направления"], ["×8,3", "маржинальная прибыль"], ["8", "проектных запусков"], ["40+ млн ₽", "коммерческих предложений"]],
    visual: "laptop",
  },
  {
    number: "03",
    label: "Маркетинг / сайт / контент",
    title: "Рост интернет-магазина",
    text: "Связка контента, сайта и заявки стала измеримой и управляемой.",
    facts: [["×3", "заявки"], ["×5", "производство контента"], ["+16%", "конверсия сайта"]],
    visual: "content",
  },
  {
    number: "04",
    label: "Запуск продукта",
    title: "Новый бизнес-юнит",
    text: "Продукт запущен с нуля и выведен на устойчивую экономику без рекламных вложений.",
    facts: [["80%+", "маржинальность"], ["40", "лидов в месяц"], ["0 ₽", "рекламных вложений"]],
    visual: "target",
  },
];

const experience = [
  ["2026 — н.в.", "Коммерческий директор / CCO", "Медиа Инсайт", "Продажи, пресейл, тендеры, коммерческий контур"],
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
      <path className="trend-soft t3" d="M0 495 C130 490 255 455 360 420 S520 360 620 300 S760 160 900 48" />
      <path className="trend-main" d="M0 505 C120 500 245 470 345 423 S510 360 585 315 S660 258 725 205 S820 130 900 34" />
      {[345, 585, 725, 900].map((x, i) => <circle key={x} cx={x} cy={[423,315,205,34][i]} r="7" className="trend-point" />)}
    </svg>
  );
}

function DashboardVisual() {
  return (
    <div className="dashboard-scene" aria-label="Автоматизация коммерческих процессов">
      <div className="dashboard-grid" />
      <div className="screen side left"><span className="mini-bars"><i /><i /><i /><i /></span></div>
      <div className="screen main">
        <span className="screen-label">Автоматизация процессов</span>
        <strong>+71%</strong>
        <small>выручки год к году</small>
        <svg viewBox="0 0 260 90" aria-hidden="true"><path d="M8 80 C55 65 72 52 104 57 S155 39 178 31 S225 26 252 6" /><circle cx="104" cy="57" r="4" /><circle cx="178" cy="31" r="4" /><circle cx="252" cy="6" r="4" /></svg>
        <div className="screen-facts"><span><b>41</b> новый проект</span><span><b>5×</b> меньше операционной нагрузки</span></div>
      </div>
      <div className="screen side right"><span className="mini-donut" /></div>
      <div className="platform"><i /></div>
      {[["Битрикс24","crm"],["1С","one-c"],["DataLens","data"],["AI","ai"]].map(([label, cls]) => <span key={label} className={`system-tag ${cls}`}>{label}</span>)}
    </div>
  );
}

function CaseVisual({ type }: { type: string }) {
  if (type === "system") return <DashboardVisual />;
  if (type === "laptop") return <div className="laptop-visual"><div className="laptop-screen"><span className="graph-line" /><i className="dot d1" /><i className="dot d2" /><i className="dot d3" /></div><div className="laptop-base" /></div>;
  if (type === "content") return <div className="content-visual"><div className="camera-shape"><i /></div><div className="monitor-shape"><span /><span /><span /></div></div>;
  return <div className="target-visual"><span className="ring r1" /><span className="ring r2" /><span className="ring r3" /><i className="arrow" /></div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="tech-site" id="top">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}><span>А</span>V <small>ПОРТФОЛИО</small></a>
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
        <div className="hero-copy">
          <p className="eyebrow">Коммерческий директор · CCO · COO</p>
          <h1><span>Алина</span><strong>Васильева</strong></h1>
          <p className="hero-lead">Соединяю стратегию, маркетинг, продажи и процессы в управляемую коммерческую систему.</p>
          <div className="hero-actions"><a href="#projects">Смотреть кейсы <b>↘</b></a><a href={`${base}alina-vasileva-resume.pdf`} download>Резюме PDF <b>↓</b></a></div>
          <div className="hero-stat"><strong>12</strong><span>лет в управлении</span></div>
        </div>
        <TrendGraph />
        <div className="portrait-wrap"><img src={`${base}assets/alina-portrait.jpg`} alt="Алина Васильева" /></div>
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
            <div className="project-copy"><p className="project-label">{item.number} · {item.label}</p><h3>{item.title}</h3><p>{item.text}</p><div className="case-facts">{item.facts.map(([value,label]) => <span key={value}><strong>{value}</strong><small>{label}</small></span>)}</div></div>
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
        <div className="education-list">{education.map(([year,title,source]) => <article key={`${year}-${title}`}><time>{year}</time><h3>{title}</h3><p>{source}</p></article>)}</div>
      </section>

      <section className="contact" id="contact">
        <div><p className="section-label">Контакты</p><h2>Связаться</h2></div>
        <div className="contact-list"><a href="tel:+79818885389"><span>Телефон</span><strong>+7 981 888 53 89</strong></a><a href="mailto:alinavasileva.jour@gmail.com"><span>Email</span><strong>alinavasileva.jour@gmail.com</strong></a><a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer"><span>Telegram</span><strong>@AlinaVasileva</strong></a></div>
        <footer><span>Алина Васильева · 2026</span><a href="#top">Наверх ↑</a></footer>
      </section>
    </main>
  );
}
