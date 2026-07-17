import { useState } from "react";

const base = import.meta.env.BASE_URL;

const clients = [
  "ЛСР",
  "Ленстройтрест",
  "Аквилон",
  "КВС",
  "Пионер",
  "Element Development",
  "October Group",
  "King & Sons",
  "LAR Development",
  "RANTA Residence",
  "Кронфорт",
  "SKYLARK",
  "SAMI",
  "PLG",
  "GeoLine",
  "Компакт",
  "Евгеньевский",
  "SAAN",
  "Моменты Репино",
  "Инносоциум",
  "Ostankino",
  "Media Insight",
];

const experience = [
  {
    years: "2026",
    role: "Коммерческий директор / CCO",
    company: "Медиа Инсайт",
    scope: "Коммерческий контур, продажи, пресейл, тендеры",
  },
  {
    years: "2023 — 2025",
    role: "Исполнительный директор / COO",
    company: "Интерэстейт",
    scope: "P&L, процессы, команда, автоматизация",
  },
  {
    years: "2019 — 2022",
    role: "Руководитель маркетинга и PR",
    company: "Сетевые коммуникации",
    scope: "Маркетинг, PR, digital, контент, лидогенерация",
  },
  {
    years: "2016 — 2019",
    role: "Директор по развитию",
    company: "Альянс ТМ",
    scope: "Новые продукты, партнёрства, продажи",
  },
];

const education = [
  ["2026", "Бизнес-анализ", "ASPEX"],
  ["2026", "Старт в 1С", "1С"],
  ["2025", "Управление и мотивация команд", "SETTERS"],
  ["2025", "Re:start. Дао-Перезагрузка", "Ирина Хакамада"],
  ["2024", "Менторская программа «Новый шаг»", "Forbes Woman"],
  ["2023", "Формула прибыли", "Илья Балахнин"],
  ["2022", "Директор по маркетингу", "Qmarketing Academy"],
  ["2019", "Бизнес-школа управления", "Visotsky Consulting"],
];

function AutomationVisual() {
  return (
    <svg className="visual-svg" viewBox="0 0 900 700" role="img" aria-label="Автоматизация процессов и рост выручки">
      <defs>
        <linearGradient id="steel-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6fbff" />
          <stop offset=".18" stopColor="#66737e" />
          <stop offset=".42" stopColor="#e8f2f7" />
          <stop offset=".66" stopColor="#1d2831" />
          <stop offset="1" stopColor="#a8b8c2" />
        </linearGradient>
        <filter id="glow-a" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <g opacity=".14" stroke="#78dfff" strokeWidth="1">
        {Array.from({ length: 11 }).map((_, i) => <path key={`v${i}`} d={`M${70 + i * 74} 40V660`} />)}
        {Array.from({ length: 8 }).map((_, i) => <path key={`h${i}`} d={`M40 ${70 + i * 78}H860`} />)}
      </g>

      <path d="M78 112C190 26 305 40 410 120" fill="none" stroke="url(#steel-a)" strokeWidth="18" strokeLinecap="round" />
      <path d="M822 112C710 26 595 40 490 120" fill="none" stroke="url(#steel-a)" strokeWidth="18" strokeLinecap="round" />
      <circle cx="450" cy="121" r="12" fill="#dff9ff" filter="url(#glow-a)" />

      <path d="M450 132C450 205 334 214 265 265" fill="none" stroke="#83e5ff" strokeOpacity=".62" strokeWidth="4" />
      <path d="M450 132C450 205 404 214 405 265" fill="none" stroke="#83e5ff" strokeOpacity=".62" strokeWidth="4" />
      <path d="M450 132C450 205 496 214 495 265" fill="none" stroke="#83e5ff" strokeOpacity=".62" strokeWidth="4" />
      <path d="M450 132C450 205 566 214 635 265" fill="none" stroke="#83e5ff" strokeOpacity=".62" strokeWidth="4" />

      {[
        [245, "CRM", "Битрикс24"],
        [390, "ERP", "1С"],
        [535, "BI", "DataLens"],
        [680, "AI", "AI"],
      ].map(([x, top, bottom]) => (
        <g key={String(x)} transform={`translate(${x} 300)`}>
          <circle cx="0" cy="0" r="55" fill="#07121a" stroke="url(#steel-a)" strokeWidth="4" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#5ad8ff" strokeOpacity=".45" strokeWidth="3" />
          <text x="0" y="7" textAnchor="middle" className="svg-label svg-label--big">{top}</text>
          <text x="0" y="87" textAnchor="middle" className="svg-label">{bottom}</text>
        </g>
      ))}

      <text x="76" y="535" className="svg-number">+71%</text>
      <text x="82" y="570" className="svg-label">рост выручки год к году</text>
      <text x="76" y="650" className="svg-number svg-number--small">41</text>
      <text x="165" y="650" className="svg-label">новый проект</text>

      <path className="chart-stroke" d="M390 635C460 612 500 565 555 548S652 485 690 424 765 360 822 278" fill="none" />
      {[390, 555, 690, 822].map((x, i) => <circle key={x} cx={x} cy={[635, 548, 424, 278][i]} r="6" fill="#c9f7ff" filter="url(#glow-a)" />)}
    </svg>
  );
}

function ProfitVisual() {
  return (
    <svg className="visual-svg" viewBox="0 0 900 700" role="img" aria-label="Ноутбук с графиком роста прибыли">
      <defs>
        <linearGradient id="steel-p" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5fbff" />
          <stop offset=".2" stopColor="#596771" />
          <stop offset=".48" stopColor="#dce8ef" />
          <stop offset=".72" stopColor="#111a21" />
          <stop offset="1" stopColor="#9cacb6" />
        </linearGradient>
        <radialGradient id="screen-p" cx="65%" cy="25%" r="80%">
          <stop offset="0" stopColor="#123142" />
          <stop offset=".5" stopColor="#06131b" />
          <stop offset="1" stopColor="#02070b" />
        </radialGradient>
      </defs>

      <ellipse cx="490" cy="385" rx="360" ry="270" fill="#57d6ff" opacity=".05" />
      <g transform="translate(110 48)">
        <path d="M80 42Q80 18 106 18H594Q620 18 620 42V436H80Z" fill="url(#screen-p)" stroke="url(#steel-p)" strokeWidth="7" />
        <rect x="111" y="52" width="458" height="350" rx="20" fill="#02070b" stroke="#1a3a4b" strokeWidth="2" />
        <g opacity=".22" stroke="#4e7a90">
          {[0,1,2,3,4].map(i => <path key={i} d={`M145 ${112 + i * 58}H535`} />)}
          {[0,1,2,3,4].map(i => <path key={i} d={`M${182 + i * 78} 78V375`} />)}
        </g>
        <path className="chart-stroke" d="M145 342C188 328 218 296 255 302S326 265 359 220 421 231 457 185 500 152 534 90" fill="none" />
        {[145,255,359,457,534].map((x, i) => <circle key={x} cx={x} cy={[342,302,220,185,90][i]} r="6" fill="#d6f8ff" />)}
        <path d="M30 436H670L724 502Q734 516 712 520H-12Q-32 516-22 502Z" fill="url(#steel-p)" opacity=".88" />
        <rect x="280" y="470" width="140" height="12" rx="6" fill="#10191f" />
      </g>

      <g transform="translate(72 592)">
        <text className="svg-number svg-number--mini" x="0" y="0">×4,7</text>
        <text className="svg-label" x="0" y="30">оборот направления</text>
        <text className="svg-number svg-number--mini" x="215" y="0">×8,3</text>
        <text className="svg-label" x="215" y="30">маржинальная прибыль</text>
        <text className="svg-number svg-number--mini" x="465" y="0">8</text>
        <text className="svg-label" x="465" y="30">проектных запусков</text>
        <text className="svg-number svg-number--mini" x="612" y="0">40+ млн ₽</text>
        <text className="svg-label" x="612" y="30">коммерческих предложений</text>
      </g>
    </svg>
  );
}

function CommerceVisual() {
  return (
    <svg className="visual-svg" viewBox="0 0 900 700" role="img" aria-label="Рост заявок, контента и конверсии интернет-магазина">
      <defs>
        <linearGradient id="steel-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#eef8fd" />
          <stop offset=".25" stopColor="#53616b" />
          <stop offset=".54" stopColor="#cbd8e0" />
          <stop offset=".76" stopColor="#131d24" />
          <stop offset="1" stopColor="#99a9b3" />
        </linearGradient>
      </defs>

      <ellipse cx="470" cy="350" rx="370" ry="280" fill="#59dcff" opacity=".045" />
      <g transform="translate(125 70)">
        <rect x="170" y="0" width="470" height="360" rx="30" fill="#03090e" stroke="url(#steel-c)" strokeWidth="5" />
        <rect x="204" y="42" width="402" height="258" rx="18" fill="#07141b" stroke="#184050" strokeWidth="2" />
        <rect x="235" y="75" width="340" height="22" rx="11" fill="#142934" />
        {[0,1,2].map(i => <rect key={i} x={235 + i * 116} y="128" width="92" height="72" rx="14" fill="#0c1f29" stroke="#2e586b" />)}
        {[0,1,2,3].map(i => <rect key={i} x={235 + i * 86} y="228" width="67" height="46" rx="11" fill="#0a1b23" stroke="#254957" />)}
        <path d="M123 360H687L735 412H75Z" fill="url(#steel-c)" opacity=".83" />
        <path d="M290 360H520" stroke="#10191f" strokeWidth="12" strokeLinecap="round" />
      </g>

      <g transform="translate(42 206)">
        <rect x="0" y="0" width="188" height="210" rx="28" fill="#071117" stroke="url(#steel-c)" strokeWidth="4" />
        <circle cx="94" cy="98" r="52" fill="#02070b" stroke="url(#steel-c)" strokeWidth="13" />
        <circle cx="94" cy="98" r="28" fill="#06151e" stroke="#65dcff" strokeOpacity=".5" strokeWidth="4" />
        <rect x="63" y="-28" width="62" height="42" rx="10" fill="url(#steel-c)" />
        <path d="M54 210L28 285M134 210L160 285" stroke="#56646e" strokeWidth="8" />
      </g>

      <g transform="translate(78 560)">
        <text className="svg-number svg-number--mini" x="0" y="0">×3</text>
        <text className="svg-label" x="0" y="30">заявки</text>
        <text className="svg-number svg-number--mini" x="300" y="0">×5</text>
        <text className="svg-label" x="300" y="30">производство контента</text>
        <text className="svg-number svg-number--mini" x="620" y="0">+16%</text>
        <text className="svg-label" x="620" y="30">конверсия сайта</text>
      </g>
    </svg>
  );
}

function ProductVisual() {
  return (
    <svg className="visual-svg" viewBox="0 0 900 700" role="img" aria-label="Дартс и показатели нового продукта">
      <defs>
        <radialGradient id="target" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#7fe7ff" />
          <stop offset=".06" stopColor="#0c2430" />
          <stop offset=".17" stopColor="#d8e3e9" />
          <stop offset=".32" stopColor="#18232b" />
          <stop offset=".52" stopColor="#98a7b0" />
          <stop offset=".74" stopColor="#0c141a" />
          <stop offset="1" stopColor="#45535d" />
        </radialGradient>
        <linearGradient id="dart" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3c4851" />
          <stop offset=".45" stopColor="#f0f7fa" />
          <stop offset=".7" stopColor="#697680" />
          <stop offset="1" stopColor="#dce8ed" />
        </linearGradient>
      </defs>

      <ellipse cx="520" cy="330" rx="355" ry="290" fill="#54d7ff" opacity=".05" />
      <g transform="translate(465 60)">
        <circle cx="190" cy="220" r="192" fill="#02070b" stroke="#263945" strokeWidth="8" />
        <circle cx="190" cy="220" r="164" fill="url(#target)" opacity=".8" />
        {[0,45,90,135].map(a => <path key={a} d="M190 56V384" stroke="#9fb0ba" strokeOpacity=".24" strokeWidth="2" transform={`rotate(${a} 190 220)`} />)}
        <circle cx="190" cy="220" r="112" fill="none" stroke="#0d1720" strokeWidth="18" />
        <circle cx="190" cy="220" r="64" fill="none" stroke="#d8e3e9" strokeOpacity=".55" strokeWidth="13" />
        <circle cx="190" cy="220" r="17" fill="#82e7ff" />
      </g>

      <g transform="translate(20 100) rotate(-9 280 160)">
        <path d="M0 160H610" stroke="url(#dart)" strokeWidth="17" strokeLinecap="round" />
        <path d="M608 160L672 128L650 160L672 192Z" fill="#eefaff" />
        <path d="M20 160L105 92L129 160L105 228Z" fill="#414e58" stroke="#9eafb8" strokeWidth="3" />
        <path d="M74 160L132 120L148 160L132 200Z" fill="#101820" />
      </g>

      <g transform="translate(80 542)">
        <text className="svg-number svg-number--mini" x="0" y="0">80+%</text>
        <text className="svg-label" x="0" y="30">маржинальность</text>
        <text className="svg-number svg-number--mini" x="302" y="0">40</text>
        <text className="svg-label" x="302" y="30">лидов в месяц</text>
        <text className="svg-number svg-number--mini" x="600" y="0">0 ₽</text>
        <text className="svg-label" x="600" y="30">рекламных вложений</text>
      </g>
    </svg>
  );
}

const caseItems = [
  {
    eyebrow: "Операционное управление",
    title: "Масштабирование направления",
    text: "Связала продажи, проекты, отчётность и автоматизацию в единый управляемый контур. Внедрила CRM, 1С, DataLens и AI-инструменты.",
    result: "+71% выручки · 41 новый проект",
    visual: <AutomationVisual />,
  },
  {
    eyebrow: "Коммерческое управление",
    title: "Рост прибыли",
    text: "Пересобрала пресейл, коммерческие предложения, тендерный процесс и прогнозирование. Сфокусировала команду на маржинальности и запуске сделок.",
    result: "×4,7 оборот · ×8,3 прибыль · 40+ млн ₽ КП",
    visual: <ProfitVisual />,
  },
  {
    eyebrow: "Маркетинг / сайт / контент",
    title: "Увеличение продаж интернет-магазина",
    text: "Перестроила путь от контента к заявке, ускорила производство материалов и повысила эффективность сайта без усложнения пользовательского сценария.",
    result: "×3 заявки · ×5 контент · +16% конверсия",
    visual: <CommerceVisual />,
  },
  {
    eyebrow: "Новый бизнес-юнит",
    title: "Создание продукта с нуля",
    text: "Сформировала продукт, коммерческую модель и каналы спроса. Запустила самостоятельный юнит с устойчивой экономикой без рекламной зависимости.",
    result: "80%+ маржинальность · 40 лидов в месяц · 0 ₽ рекламы",
    visual: <ProductVisual />,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="site-logo" onClick={() => setMenuOpen(false)}>Портфолио</a>
        <button className="menu-button" type="button" aria-label="Открыть меню" onClick={() => setMenuOpen(v => !v)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "site-nav site-nav--open" : "site-nav"}>
          <a href="#clients" onClick={() => setMenuOpen(false)}>Клиенты</a>
          <a href="#cases" onClick={() => setMenuOpen(false)}>Кейсы</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Опыт</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Образование</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__content">
          <div className="hero__links">
            <a href="#cases">Кейсы ↓</a>
            <a href={`${base}alina-vasileva-resume.pdf`} download>Резюме PDF ↓</a>
          </div>
          <p className="kicker">Коммерческий директор · CCO · COO</p>
          <h1>Алина<br />Васильева</h1>
          <p className="hero__lead">Строю коммерческие системы, развиваю продукты и превращаю маркетинг в управляемый бизнес-результат.</p>
          <div className="hero__facts">
            <strong>12 лет</strong>
            <span>в управлении</span>
            <b>+71%</b>
            <span>рост выручки год к году</span>
          </div>
        </div>

        <div className="hero__portrait" aria-hidden="true">
          <div className="hero__portrait-blur" style={{ backgroundImage: `url(${base}assets/alina-portrait.jpg)` }} />
          <img src={`${base}assets/alina-portrait.jpg`} alt="Алина Васильева" />
        </div>
      </section>

      <section className="clients" id="clients">
        <div className="section-heading section-heading--compact">
          <span>Клиентский портфель</span>
          <h2>Компании и бренды</h2>
        </div>
        <div className="client-cloud">
          {clients.map(client => <span key={client}>{client}</span>)}
        </div>
      </section>

      <section className="cases" id="cases">
        <div className="section-heading">
          <span>Выбранные проекты</span>
          <h2>Кейсы</h2>
        </div>

        <div className="case-list">
          {caseItems.map((item, index) => (
            <article className={index % 2 ? "case case--reverse" : "case"} key={item.title}>
              <div className="case__copy">
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.result}</strong>
              </div>
              <div className="case__visual">{item.visual}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-heading">
          <span>Управленческий трек</span>
          <h2>Опыт работы</h2>
        </div>
        <div className="experience-grid">
          {experience.map(item => (
            <article key={item.years}>
              <time>{item.years}</time>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <span>{item.scope}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="education" id="education">
        <div className="section-heading">
          <span>Постоянное развитие</span>
          <h2>Обучение</h2>
        </div>
        <div className="education-list">
          {education.map(([year, title, source]) => (
            <article key={`${year}-${title}`}>
              <time>{year}</time>
              <h3>{title}</h3>
              <p>{source}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <span>Контакты</span>
        <h2>Ваш бизнес<br />должен расти</h2>
        <div className="contact__links">
          <a href="mailto:alinavasileva.jour@gmail.com">alinavasileva.jour@gmail.com ↗</a>
          <a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer">Telegram ↗</a>
          <a href={`${base}alina-vasileva-resume.pdf`} download>Резюме PDF ↓</a>
        </div>
        <footer>Алина Васильева · CCO / COO · 2026</footer>
      </section>
    </main>
  );
}
