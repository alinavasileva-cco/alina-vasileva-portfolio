import { useState } from "react";

const base = import.meta.env.BASE_URL;

const expertise = [
  {
    number: "01",
    title: "Коммерческая стратегия",
    text: "Бизнес-модель, точки роста, экономика направления, план продаж и управленческий контур.",
  },
  {
    number: "02",
    title: "Маркетинг и бренд",
    text: "Позиционирование, продуктовая упаковка, коммуникационная стратегия и система привлечения спроса.",
  },
  {
    number: "03",
    title: "Команда и процессы",
    text: "Оргструктура, ответственность руководителей, мотивация, автоматизация и прозрачная отчётность.",
  },
  {
    number: "04",
    title: "Новые продукты",
    text: "Исследование рынка, MVP, юнит-экономика, запуск и масштабирование нового бизнес-направления.",
  },
];

const experience = [
  ["2026 — н.в.", "Коммерческий директор / CCO", "Медиа Инсайт"],
  ["2023 — 2025", "Исполнительный директор / COO", "Интерэстейт"],
  ["2019 — 2022", "Руководитель маркетинга и PR", "Сетевые коммуникации"],
  ["2016 — 2019", "Директор по развитию", "Альянс ТМ"],
];

const projects = [
  {
    title: "Масштабирование направления",
    type: "Операционное управление",
    result: "+71% выручки · 41 новый проект",
    description: "CRM, 1С, DataLens и AI объединила в единый управляемый коммерческий контур.",
  },
  {
    title: "Рост прибыли",
    type: "Коммерческое управление",
    result: "×4,7 оборот · ×8,3 прибыль",
    description: "Пересобрала пресейл, тендеры, коммерческие предложения и прогнозирование сделок.",
  },
  {
    title: "Рост интернет-магазина",
    type: "Маркетинг / сайт / контент",
    result: "×3 заявки · +16% конверсия",
    description: "Перестроила путь от контента к заявке и ускорила производство материалов в пять раз.",
  },
  {
    title: "Новый бизнес-юнит",
    type: "Запуск продукта",
    result: "80%+ маржинальность · 40 лидов",
    description: "Запустила продукт с нуля и вывела его на устойчивую экономику без рекламных вложений.",
  },
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
    <main className="luxury-site" id="top">
      <header className="site-header">
        <a className="monogram" href="#top" onClick={closeMenu} aria-label="На главную">A<span>/</span>B</a>
        <button
          className={menuOpen ? "menu-button is-open" : "menu-button"}
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "site-nav is-open" : "site-nav"}>
          <a href="#about" onClick={closeMenu}>Обо мне</a>
          <a href="#expertise" onClick={closeMenu}>Экспертиза</a>
          <a href="#experience" onClick={closeMenu}>Опыт</a>
          <a href="#projects" onClick={closeMenu}>Проекты</a>
          <a href="#education" onClick={closeMenu}>Обучение</a>
          <a href="#contact" onClick={closeMenu}>Контакты</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Стратегия · Рост · Системность</p>
          <h1 id="hero-title"><span>Алина</span><span>Васильева</span></h1>
          <p className="hero-role">Стратег по маркетингу<br />и развитию брендов</p>
          <span className="hero-rule" aria-hidden="true" />
          <p className="hero-lead">
            Помогаю компаниям расти системно — через сильную стратегию, продукт и маркетинг.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">Смотреть проекты <span>↓</span></a>
            <a className="secondary-link" href={`${base}alina-vasileva-resume.pdf`} download>
              Резюме PDF <span>↓</span>
            </a>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="Портрет Алины Васильевой">
          <img src={`${base}assets/alina-portrait.jpg`} alt="Алина Васильева" />
        </div>
      </section>

      <section className="results" aria-label="Ключевые бизнес-результаты">
        <article><strong>12+</strong><span>лет в управлении</span></article>
        <article><strong>41</strong><span>новый проект</span></article>
        <article><strong>+71%</strong><span>рост выручки год к году</span></article>
        <article><strong>40+ млн ₽</strong><span>коммерческих предложений</span></article>
      </section>

      <section className="editorial-section about" id="about">
        <div className="section-kicker"><span>01</span><p>Обо мне</p></div>
        <div className="about-copy">
          <h2>Помогаю собственникам и руководителям превращать амбициозные цели в работающую систему.</h2>
          <p>
            Соединяю коммерцию, маркетинг, продукт, аналитику и процессы. Работаю не как внешний
            советчик со слайдами, а как партнёр, который помогает принять решение и довести его до результата.
          </p>
        </div>
        <blockquote>
          «Рост — это не удача. Это ясная стратегия, сильная команда и дисциплина исполнения».
        </blockquote>
      </section>

      <section className="editorial-section expertise" id="expertise">
        <div className="section-kicker"><span>02</span><p>Экспертиза</p></div>
        <h2>Архитектура бизнеса, в которой каждый элемент работает на результат.</h2>
        <div className="expertise-list">
          {expertise.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section experience" id="experience">
        <div className="section-kicker"><span>03</span><p>Опыт</p></div>
        <h2>Управленческий трек</h2>
        <div className="experience-list">
          {experience.map(([years, role, company]) => (
            <article key={`${years}-${company}`}>
              <time>{years}</time>
              <h3>{role}</h3>
              <p>{company}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section projects" id="projects">
        <div className="section-kicker"><span>04</span><p>Выбранные проекты</p></div>
        <h2>Результаты, которые можно измерить.</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <article key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <strong>{project.result}</strong>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section approach" id="approach">
        <div className="section-kicker"><span>05</span><p>Подход</p></div>
        <h2>Сначала экономика и приоритеты. Затем — команда, процессы и рост.</h2>
        <ol>
          <li><span>01</span><div><h3>Диагностика</h3><p>Цели, рынок, продукт, экономика и реальные ограничения бизнеса.</p></div></li>
          <li><span>02</span><div><h3>Стратегия</h3><p>Несколько точных решений вместо длинного списка инициатив.</p></div></li>
          <li><span>03</span><div><h3>Внедрение</h3><p>Ответственные, ритм управления, метрики и поддержка команды.</p></div></li>
          <li><span>04</span><div><h3>Результат</h3><p>Проверяем влияние решений на выручку, прибыль и устойчивость.</p></div></li>
        </ol>
      </section>

      <section className="editorial-section references" id="testimonials">
        <div className="section-kicker"><span>06</span><p>Рекомендации</p></div>
        <h2>Отзывы и контакты руководителей предоставлю после знакомства.</h2>
        <p>Так я сохраняю конфиденциальность партнёров и даю только релевантные референсы под вашу задачу.</p>
      </section>

      <section className="editorial-section education" id="education">
        <div className="section-kicker"><span>07</span><p>Обучение</p></div>
        <h2>Постоянно обновляю управленческие и аналитические инструменты.</h2>
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
        <p className="contact-label">Контакты</p>
        <h2>Обсудим ваш проект?</h2>
        <p className="contact-intro">Напишите мне — отвечу лично и предложу следующий шаг.</p>
        <div className="contact-list">
          <a href="tel:+79818885389"><span>Телефон</span><strong>+7 981 888 53 89</strong><b>↗</b></a>
          <a href="mailto:alinavasileva.jour@gmail.com"><span>Email</span><strong>alinavasileva.jour@gmail.com</strong><b>↗</b></a>
          <a href="https://t.me/AlinaVasileva" target="_blank" rel="noreferrer"><span>Telegram</span><strong>@AlinaVasileva</strong><b>↗</b></a>
        </div>
        <footer>
          <span>Алина Васильева · 2026</span>
          <a href="#top">Наверх ↑</a>
        </footer>
      </section>
    </main>
  );
}
