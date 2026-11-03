const vpns = [
  {
    rank: 1, name: 'VPNTYPE', logoImg: 'vpntype-icon.png', logoClass: 'logo-vt', pinned: true,
    badge: 'Выбор редакции',
    tags: ['Для YouTube','Для Android','Для iPhone','Для Windows','Бесплатный период','Работает в РФ','Высокая скорость'],
    free: '5 дней за 1 ₽. Дальше — от 299 ₽/мес.',
    whyTitle: 'Лучший VPN для YouTube в России',
    whyText: 'Прошёл тест на пяти устройствах одновременно — ни одного сбоя за 72 часа. YouTube 4K загружался без буферизации даже в час пик в сетях МТС и Ростелеком.',
    pros: ['Ни одного разрыва за 72 часа тестирования','YouTube 4K в час пик без буферизации','5 устройств одновременно по одной подписке','Русскоязычная поддержка, оплата картой РФ'],
    cons: ['Нет постоянного бесплатного тарифа','Для мобильных устройств требуется установка отдельного клиента'],
    speed: 100, maxSpeed: 100,
    price: 'от 299 ₽/мес',
    review: '"YouTube 4K загружается мгновенно. Первый VPN, который реально не лагает."',
    lifehack: 'Выбери протокол WireGuard — он на 30–50% быстрее OpenVPN при том же уровне безопасности.',
    link: 'https://vk.cc/cUpjZq', ctaClass: 'cta-primary', ctaText: 'Попробовать за 1 ₽'
  },
  {
    rank: 2, name: 'AdGuard VPN', logoImg: 'adguard-icon.svg', logoClass: 'logo-ag', pinned: true,
    badge: null,
    tags: ['Для YouTube','Для Android','Для iPhone','Для Windows','Бесплатный период','Работает в РФ'],
    free: 'Бесплатно 3 ГБ/мес. Дальше — платно.',
    whyTitle: 'VPN + блокировка рекламы YouTube',
    whyText: 'Дополнительный бонус — блокирует рекламу на YouTube. YouTube работает стабильно, интерфейс простой. 3 ГБ бесплатно — около 3 часов HD-видео.',
    pros: ['YouTube без рекламы — встроенный адблок','92 Мбит/с — уверенный 1080p и 4K','Приложение на русском языке','Работает у всех крупных провайдеров РФ'],
    cons: ['3 ГБ/мес бесплатно — около 3 часов HD','No-logs политика без независимого аудита'],
    speed: 92, maxSpeed: 100,
    price: 'от 329 ₽/мес',
    review: '"YouTube без рекламы и без лагов. Два в одном — VPN и адблокер."',
    lifehack: 'На бесплатном тарифе ограничь качество YouTube до 480p — трафик расходуется в 3 раза медленнее.',
    link: 'https://vk.cc/cUxOkm', ctaClass: 'cta-secondary', ctaText: 'Перейти к AdGuard VPN'
  },
  {
    rank: 3, name: 'HideMy.Name', logoImg: 'hidemyname-icon.svg', logoClass: 'logo-hn', pinned: true,
    badge: null,
    tags: ['Для YouTube','Для Android','Для iPhone','Для Windows','Работает в РФ','Высокая скорость'],
    free: '1 день бесплатно. Дальше — от 330 ₽/мес.',
    whyTitle: 'Проверенный сервис для стриминга',
    whyText: 'Работает в России более 10 лет. Широкая география серверов позволяет выбрать оптимальный узел для YouTube — 94 Мбит/с хватает на 4K без остановок.',
    pros: ['Работает в России без сбоев с 2014 года','94 Мбит/с — стабильный 4K в час пик','80+ стран серверов, есть Нидерланды и Финляндия','Русскоязычная поддержка 24/7'],
    cons: ['Нет постоянного бесплатного тарифа (только 1 день)','No-logs не подтверждён внешним аудитом'],
    speed: 94, maxSpeed: 100,
    price: 'от 330 ₽/мес',
    review: '"YouTube 4K смотрю каждый день. Ни разу за год не было буферизации."',
    lifehack: 'Серверы в Нидерландах или Германии дают минимальный пинг для YouTube CDN из России.',
    link: 'https://vk.cc/cUxOxl', ctaClass: 'cta-tertiary', ctaText: 'Перейти к HideMy.Name'
  },
  {
    rank: 4, name: 'NordVPN', logo: 'NV', logoClass: 'logo-nv', pinned: false,
    badge: null,
    tags: ['Для YouTube','Для Android','Для iPhone','Для Windows','Высокая скорость','Без логов'],
    free: 'Нет. 30 дней — гарантия возврата.',
    whyTitle: '96 Мбит/с — стабильная скорость для 4K',
    whyText: 'Один из лидеров рынка с высокой скоростью и надёжностью. 6 устройств одновременно, Double VPN. Для YouTube 4K — отличный выбор, но в России иногда нужно переключать серверы.',
    pros: ['96 Мбит/с','6 устройств одновременно','No-logs политика','Obfuscated серверы для РФ'],
    cons: ['Нет бесплатного тарифа','Не всегда стабилен в РФ','Оплата картой РФ затруднена'],
    speed: 96, maxSpeed: 100,
    price: 'от $3.99/мес (~370 ₽)',
    review: '"YouTube 4K — как по маслу. В России иногда меняю сервер, но в целом отлично."',
    lifehack: 'Включи Obfuscated Servers — они лучше обходят блокировки российских провайдеров.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к NordVPN'
  },
  {
    rank: 5, name: 'ExpressVPN', logo: 'EV', logoClass: 'logo-ev', pinned: false,
    badge: null,
    tags: ['Для YouTube','Для Android','Для iPhone','Для Windows','Высокая скорость'],
    free: 'Нет. 30 дней — гарантия возврата.',
    whyTitle: 'Рекордные 98 Мбит/с для стриминга',
    whyText: 'Лучший результат скорости в наших тестах — 98 Мбит/с. Lightway-протокол оптимизирован для стриминга. YouTube 4K без задержек, если сервер доступен из РФ.',
    pros: ['98 Мбит/с — рекорд теста','Lightway для стриминга','160+ стран серверов','Split tunneling'],
    cons: ['Самый дорогой в списке','Нет бесплатного тарифа','Сложная оплата из РФ'],
    speed: 98, maxSpeed: 100,
    price: 'от $8.32/мес (~770 ₽)',
    review: '"Дорого, но YouTube 4K идёт идеально. Ни одной буферизации за три месяца."',
    lifehack: 'Протокол Lightway быстрее OpenVPN на ~40% и стабильнее работает на мобильных сетях.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к ExpressVPN'
  },
  {
    rank: 6, name: 'Windscribe', logo: 'WS', logoClass: 'logo-ws', pinned: false,
    badge: null,
    tags: ['Для YouTube','Для Android','Для iPhone','Для Windows','Бесплатный период','Без логов'],
    free: '10 ГБ/мес бесплатно (нужен email).',
    whyTitle: 'Лучший бесплатный тариф для YouTube',
    whyText: '10 ГБ/мес бесплатно — примерно 10 часов YouTube в 720p. Строгая no-logs политика, kill switch и WireGuard. Лучший вариант для тех, кто смотрит YouTube несколько раз в неделю.',
    pros: ['10 ГБ/мес бесплатно','Kill switch','WireGuard','No-logs политика'],
    cons: ['Нестабильная скорость на бесплатном','Частично работает в РФ','Поддержка только на английском'],
    speed: 85, maxSpeed: 100,
    price: 'от $5.75/мес (~530 ₽)',
    review: '"10 ГБ хватает на несколько вечеров YouTube. Для ежедневного смотрения нужен платный тариф."',
    lifehack: 'Подтверди email при регистрации — получишь 10 ГБ вместо стандартных 2 ГБ.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Windscribe'
  },
  {
    rank: 7, name: 'Proton VPN', logo: 'PV', logoClass: 'logo-pv', pinned: false,
    badge: null,
    tags: ['Для YouTube','Для Android','Для iPhone','Для Windows','Бесплатный период','Без логов'],
    free: 'Безлимитный бесплатный тариф (1 сервер).',
    whyTitle: 'Безлимитный бесплатный трафик',
    whyText: 'Единственный VPN с безлимитным трафиком на бесплатном тарифе. YouTube в HD работает, но 75 Мбит/с — это не всегда 4K без буферизации в час пик.',
    pros: ['Безлимитный трафик бесплатно','No-logs + аудит','Открытый код','Швейцарская юрисдикция'],
    cons: ['Бесплатный сервер перегружен','Скорость ниже конкурентов','Дорогой платный тариф'],
    speed: 75, maxSpeed: 100,
    price: 'от 6 €/мес (~620 ₽)',
    review: '"YouTube в HD работает. 4K — иногда подвисает. Для бесплатного — очень достойно."',
    lifehack: 'Подключайся утром — бесплатные серверы Proton менее загружены до 10:00 по МСК.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Proton VPN'
  },
  {
    rank: 8, name: 'Psiphon', logo: 'PS', logoClass: 'logo-ps', pinned: false,
    badge: null,
    tags: ['Для YouTube','Для Android','Для iPhone','Бесплатный период'],
    free: 'Бесплатно, без ограничений по трафику.',
    whyTitle: 'Бесплатно без регистрации',
    whyText: 'Полностью бесплатный и без регистрации. Скорость ~30 Мбит/с позволяет смотреть YouTube в 360–480p. Для HD и 4K-контента скорость недостаточна.',
    pros: ['Полностью бесплатный','Без регистрации','Работает в РФ','Безлимитный трафик'],
    cons: ['~30 Мбит/с — только SD-качество','Нестабильное соединение','Нет kill switch'],
    speed: 30, maxSpeed: 100,
    price: 'Бесплатно',
    review: '"YouTube в 480p смотрю без проблем. Для HD нужно что-то мощнее, но как аварийный вариант — работает."',
    lifehack: 'Выбери L2TP в настройках — в ряде регионов России работает стабильнее по умолчанию.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Psiphon'
  },
  {
    rank: 9, name: 'Lantern', logo: 'LA', logoClass: 'logo-la', pinned: false,
    badge: null,
    tags: ['Для YouTube','Для Android','Для Windows','Бесплатный период'],
    free: '500 МБ/мес бесплатно — мало для видео.',
    whyTitle: 'Быстрый старт без настройки',
    whyText: 'Простая установка без регистрации. Для YouTube 500 МБ/мес — это около 5 минут видео в HD. Подходит только как аварийный вариант для быстрого доступа.',
    pros: ['Простая установка','Без регистрации','~60 Мбит/с','Работает в РФ'],
    cons: ['500 МБ/мес — крайне мало для видео','Нет для iOS','Нестабильная скорость'],
    speed: 60, maxSpeed: 100,
    price: 'от $3/мес (~280 ₽)',
    review: '"Открыть YouTube срочно — можно. На постоянный стриминг лимита не хватит."',
    lifehack: 'Используй только для срочного доступа — 500 МБ хватит приблизительно на 5 минут HD-видео.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Lantern'
  },
  {
    rank: 10, name: 'Outline VPN', logo: 'OL', logoClass: 'logo-ol', pinned: false,
    badge: null,
    tags: ['Для YouTube','Для Android','Для Windows','Без логов'],
    free: 'Полностью бесплатный, нужен свой VPS.',
    whyTitle: 'Полный контроль для технарей',
    whyText: 'Открытый код, собственный сервер — никаких посредников. Скорость YouTube зависит от твоего VPS. Нужны базовые технические знания для настройки.',
    pros: ['Полностью бесплатный','Без логов по умолчанию','Открытый код','Скорость зависит от VPS'],
    cons: ['Нужен собственный VPS','Сложная настройка','Не подходит новичкам'],
    speed: 80, maxSpeed: 100,
    price: 'Бесплатно (нужен VPS)',
    review: '"Настроил на Oracle Cloud — YouTube 4K без ограничений. Полная свобода."',
    lifehack: 'Oracle Cloud даёт бесплатный VPS навсегда — идеальная основа для Outline VPN.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Outline'
  }
];

function getRankBadge(rank) {
  if (rank === 1) return '<span class="card-rank-badge rank-gold">🥇 ТОП-1 · Выбор редакции</span>';
  if (rank === 2) return '<span class="card-rank-badge rank-silver">🥈 ТОП-2</span>';
  if (rank === 3) return '<span class="card-rank-badge rank-bronze">🥉 ТОП-3</span>';
  return `<span class="card-rank-badge rank-default">#${rank}</span>`;
}

function renderCard(vpn) {
  const speedPct = Math.round((vpn.speed / 100) * 100);
  const cardTags = vpn.tags.map(t => `<span class="card-tag">${t}</span>`).join('');
  const pros = vpn.pros.map(p => `<li>${p}</li>`).join('');
  const cons = vpn.cons.map(c => `<li>${c}</li>`).join('');

  const logoHtml = vpn.logoImg
    ? `<img src="${vpn.logoImg}" alt="${vpn.name}" class="card-logo-img">`
    : `<div class="card-logo ${vpn.logoClass}">${vpn.logo}</div>`;

  return `
  <div class="vpn-card rank-${vpn.rank}" data-tags='${JSON.stringify(vpn.tags)}' data-pinned="${vpn.pinned}">
    <div class="card-header">
      ${logoHtml}
      <div class="card-title-area">
        ${getRankBadge(vpn.rank)}
        <div class="card-name">${vpn.name}</div>
        <div class="card-tags-row">${cardTags}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="free-badge"><div class="free-badge-icon">🎁</div><div><span>Бесплатно / тест:</span> ${vpn.free}</div></div>
      <div class="why-block">
        <h4>${vpn.whyTitle}</h4>
        <p>${vpn.whyText}</p>
      </div>
      <div class="pros-cons">
        <div class="pros-cons-col pros-col">
          <h5>Плюсы</h5>
          <ul>${pros}</ul>
        </div>
        <div class="pros-cons-col cons-col">
          <h5>Минусы</h5>
          <ul>${cons}</ul>
        </div>
      </div>
      <div class="speed-price">
        <div class="metric">
          <div class="metric-label">Скорость</div>
          <div class="metric-value">${vpn.speed}</div>
          <div class="metric-unit">Мбит/с</div>
          <div class="speed-bar-wrap"><div class="speed-bar"><div class="speed-bar-fill" style="width:${speedPct}%"></div></div></div>
        </div>
        <div class="metric">
          <div class="metric-label">Цена</div>
          <div class="metric-value" style="font-size:14px;padding-top:4px">${vpn.price}</div>
        </div>
      </div>
      <div class="review-block">${vpn.review}</div>
      <div class="lifehack">
        <div class="lifehack-icon">💡</div>
        <div><div class="lifehack-label">Лайфхак</div><p>${vpn.lifehack}</p></div>
      </div>
    </div>
    ${vpn.pinned ? `<div class="card-cta"><a href="${vpn.link}" class="cta-btn ${vpn.ctaClass}" target="_blank" rel="nofollow">${vpn.ctaText} →</a></div>` : ''}
  </div>`;
}

function renderGrid(activeTag) {
  const grid = document.getElementById('ratingGrid');
  const pinned = vpns.filter(v => v.pinned);
  const rest = vpns.filter(v => !v.pinned);

  const matchTag = (vpn) => {
    if (activeTag === 'all') return true;
    return vpn.tags.includes(activeTag);
  };

  const pinnedFiltered = pinned.filter(matchTag);
  const restFiltered = rest.filter(matchTag);

  let html = '';

  if (pinnedFiltered.length > 0) {
    html += `<div class="pinned-label">Выбор редакции</div>`;
    html += `<div class="cards-grid" id="pinnedGrid">`;
    pinnedFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (restFiltered.length > 0) {
    html += `<div class="rest-label">Позиции 4–10</div>`;
    html += `<div class="cards-grid" id="restGrid">`;
    restFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (pinnedFiltered.length === 0 && restFiltered.length === 0) {
    html = `<div style="padding:32px;text-align:center;color:var(--text-muted);background:var(--card);border-radius:var(--radius)">По этому фильтру сервисов не найдено</div>`;
  }

  grid.innerHTML = html;
}

renderGrid('all');

document.getElementById('filterTags').addEventListener('click', function(e) {
  const btn = e.target.closest('.filter-tag');
  if (!btn) return;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(btn.dataset.tag);
});

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

const burger = document.getElementById('headerBurger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    });
  });
}

const navSections = ['rating','table','methodology','faq','reviews']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
navSections.forEach(el => sectionObserver.observe(el));
