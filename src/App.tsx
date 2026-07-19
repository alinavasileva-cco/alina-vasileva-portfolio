import { useState } from "react";

const base = import.meta.env.BASE_URL;

const expertise = [
  {
    title: "Коммерческая стратегия",
    text: "Бизнес-модель, экономика направления, план продаж и управленческий контур.",
    visual: "loop",
  },
  {
    title: "Маркетинг и бренд",
    text: "Позиционирование, продуктовая упаковка, контент и система привлечения спроса.",
    visual: "ribbon",
  },
  {
    title: "Команда и процессы",
    text: "Оргструктура, ответственность, мотивация, автоматизация и отчётность.",
    visual: "beam",
  },
  {
    title: "Новые продукты",
    text: "Исследование рынка, MVP, юнит-экономика, запуск и масштабирование.",
    visual: "orb",
  },
];

const projects = [
  {
    title: "Масштабирование направления",
    label: "Операционное управление",
    fact: "+71%",
    caption: "рост выручки год к году",
    text: "CRM, 1С, DataLens и AI объединены в единый управляемый контур.",
    visual: "rise",
  },
  {
    title: "Рост коммерческого результата",
    label: "Продажи и пресейл",
    fact: "×8,3",
    caption: "рост маржинальной прибыли",
    text: "Пересобраны пресейл, тендеры, коммерческие предложения и прогнозирование.",
    visual: "steps",
  },
  {
    title: "Рост интернет-магазина",
    label: "Маркетинг / сайт / контент",
    fact: "+16%",
    caption: "конверсия сайта",
    text: "Связка контента, сайта и заявки стала измеримой и управляемой.",
    visual: "wave",
  },
  {
    title: "Новый бизнес-юнит",
    label: "Запуск продукта",
    fact: "80%+",
    caption: "маржинальность продукта",
    text: "Продукт запущен с нуля и выведен на устойчивую экономику без рекламы.",
    visual: "target",
  },
];

const experience = [
  ["2026 — н.в.", "Коммерческий директор / CCO", "Медиа Инсайт"],
  ["2023 — 2025", "Исполнительный директор / COO", "Интерэстейт"],
  ["2019 — 2022", "Руководитель маркетинга и PR", "Сетевые коммуникации"],
  ["2016 — 2019", "Директор по развитию", "Альянс ТМ"],
];

const education = [
  ["2026", "Бизнес-анализ", "ASPEX"],
  ["2026", "Старт в 1С", "1С"],
  ["2025", "Управление и мотивация команд", "SETTERS"],
  ["2025", "Re:start. Дао-Перезагрузка", "Ирина Хакамада"],
  ["2024", "Менторская программа «Новый шаг»", "Forbes Woman"],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="trend-site" id="top">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>АВ</a>
        <button
          className={menuOpen ? "menu-button is-open" : "menu-button"}
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"}>
          <a href="#expertise" onClick={closeMenu}>Экспертиза</a>
          <a href="#projects" onClick={closeMenu}>Проекты</a>
          <a href="#experience" onClick={closeMenu}>Опыт</a>
          <a href="#education" onClick={closeMenu}>Обучение</a>
          <a href="#contact" onClick={closeMenu}>Контакты</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Коммерческий директор · CCO · COO</p>
          <h1>Алина<br />Васильева</h1>
          <p className="hero-lead">
            Строю коммерческие системы: соединяю стратегию, маркетинг, продажи и процессы в управляемую модель роста.
          </p>
          <div className="hero-actions">
            <a href="#projects">Смотреть проекты <span>↓</span></a>
            <a href={`${base}alina-vasileva-resume.pdf`} download>Резюме PDF <span>↓</span></a>
          </div>
        </div>
        <div className="hero-trend" aria-hidden="true">
          <i className="trend-line one" /><i className="trend-line two" /><i className="trend-line three" />
          <b className="trend-node n1" /><b className="trend-node n2" /><b className="trend-node n3" />
        </div>
        <div className="portrait-wrap">
          <img src={`${base}assets/alina-portrait.jpg`} alt="Алина Васильева" />
        </div>
      </section>

      <section className="facts" aria-label="Ключевые факты">
        <article><strong>12+</strong><span>лет в управлении</span></article>
        <article><strong>41</strong><span>новый проект за год</span></article>
        <article><strong>40+ млн ₽</strong><span>коммерческих предложений</span></article>
        <article><strong>600+</strong><span>проектов в клиентском портфеле</span></article>
      </section>

      <section className="section intro" id="about">
        <p className="section-index">01 / Профиль</p>
        <h2>Управление ростом на стыке коммерции, маркетинга и операционной системы.</h2>
        <p className="wide-copy">Работаю с собственниками и руководителями: определяю точки роста, собираю модель, выстраиваю команду и довожу изменения до измеримого результата.</p>
      </section>

      <section className="section expertise" id="expertise">
        <div className="section-head">
          <p className="section-index">02 / Экспертиза</p>
          <h2>Четыре управленческих контура</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map((item, index) => (
            <article key={item.title}>
              <div className={`volume ${item.visual}`} aria-hidden="true"><span /></div>
              <p className="item-number">0{index + 1}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-head">
          <p className="section-index">03 / Проекты</p>
          <h2>Факты и растущие тренды</h2>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article key={project.title}>
              <div className="project-copy">
                <p className="project-label">0{index + 1} · {project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="project-fact"><strong>{project.fact}</strong><span>{project.caption}</span></div>
              </div>
              <div className={`project-visual ${project.visual}`} aria-hidden="true">
                <span className="shape-a" /><span className="shape-b" /><span className="shape-c" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-head">
          <p className="section-index">04 / Опыт</p>
          <h2>Управленческий трек</h2>
        </div>
        <div className="experience-list">
          {experience.map(([years, role, company]) => (
            <article key={`${years}-${company}`}>
              <time>{years}</time><h3>{role}</h3><p>{company}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section education" id="education">
        <div className="section-head">
          <p className="section-index">05 / Обучение</p>
          <h2>Актуальные инструменты управления</h2>
        </div>
        <div className="education-list">
          {education.map(([year, title, source]) => (
            <article key={`${year}-${title}`}><time>{year}</time><h3>{title}</h3><p>{source}</p></article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-index">06 / Контакты</p>
        <h2>Связаться</h2>
        <div className="contact-list">
          <a href="tel:+79818885389"><span>Телефон</span><strong>+7 981 888 53 89</strong><b>↗</b></a>
          <a href="mailto:alinavasileva.jour@gmail.com"><span>Email</span><strong>alinavasileva.jour@gmail.com</strong><b>↗</b></a>
          <a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer"><span>Telegram</span><strong>@AlinaVasileva</strong><b>↗</b></a>
        </div>
        <footer><span>Алина Васильева · 2026</span><a href="#top">Наверх ↑</a></footer>
      </section>
    </main>
  );
}
