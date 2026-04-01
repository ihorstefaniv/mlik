// Завантаження контенту з JSON
let siteContent = null;
const CONTENT_STORAGE_KEY = 'site_content';

async function loadContent() {
  try {
    // Спочатку перевіряємо localStorage (редагований контент з адмін-панелі)
    const savedContent = localStorage.getItem(CONTENT_STORAGE_KEY);
    
    if (savedContent) {
      // Якщо є збережений контент, використовуємо його
      siteContent = JSON.parse(savedContent);
      console.log('📝 Завантажено редагований контент');
      return siteContent;
    } else {
      // Якщо немає, завантажуємо оригінальний з файлу
      const response = await fetch('/data/content.json');
      siteContent = await response.json();
      console.log('📄 Завантажено оригінальний контент');
      return siteContent;
    }
  } catch (error) {
    console.error('Помилка завантаження контенту:', error);
    return null;
  }
}

// Рендеринг header
function renderHeader(content) {
  const header = document.querySelector('.header-content');
  if (!header || !content) return;

  const logo = content.header.logo_text || content.site.title;
  const bookingUrl = content.site.mis_booking_url;
  const bookingText = content.header.booking_button;

  const menuHTML = content.menu.map(item => 
    `<a href="${item.url}">${item.title}</a>`
  ).join('');

  header.innerHTML = `
    <a href="/" class="logo">${logo}</a>
    <nav class="nav">
      ${menuHTML}
      <a href="${bookingUrl}" class="btn-booking" target="_blank">${bookingText}</a>
    </nav>
  `;
}

// Рендеринг footer
function renderFooter(content) {
  const footer = document.querySelector('.footer-content');
  if (!footer || !content) return;

  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} ${content.site.title}</p>
    <p>${content.site.description}</p>
    <p>Телефон: <a href="tel:${content.site.phone}">${content.site.phone}</a></p>
  `;
}

// Рендеринг hero секції (головна)
function renderHero(content) {
  const hero = document.querySelector('.hero');
  if (!hero || !content.home) return;

  const { title, subtitle, cta_text, cta_url } = content.home.hero;

  hero.innerHTML = `
    <h1>${title}</h1>
    <p>${subtitle}</p>
    <a href="${cta_url}" class="btn-booking" target="_blank">${cta_text}</a>
  `;
}

// Рендеринг features (головна)
function renderFeatures(content) {
  const container = document.querySelector('.features');
  if (!container || !content.home) return;

  container.innerHTML = content.home.features.map(feature => `
    <div class="feature-card">
      <div class="feature-icon">${feature.icon}</div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </div>
  `).join('');
}

// Рендеринг статистики
function renderStats(content) {
  const container = document.querySelector('.stats');
  if (!container || !content.about) return;

  container.innerHTML = content.about.stats.map(stat => `
    <div class="stat-item">
      <span class="stat-number">${stat.number}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
}

// Рендеринг послуг
function renderServices(content) {
  const container = document.querySelector('.service-grid');
  if (!container || !content.services) return;

  container.innerHTML = content.services.items.map(service => `
    <div class="service-card">
      <div class="feature-icon">${service.icon}</div>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
    </div>
  `).join('');
}

// Рендеринг відділень
function renderDepartments(content) {
  const container = document.querySelector('.departments-grid');
  if (!container || !content.departments) return;

  container.innerHTML = content.departments.items.map(dept => `
    <div class="service-card">
      <h3>${dept.name}</h3>
      <p><strong>${dept.head}</strong></p>
      <p>${dept.description}</p>
    </div>
  `).join('');
}

// Рендеринг лікарів
function renderDoctors(content) {
  const container = document.querySelector('.doctors-grid');
  if (!container || !content.doctors) return;

  container.innerHTML = content.doctors.items.map(doctor => `
    <div class="doctor-card">
      <img src="${doctor.photo}" alt="${doctor.name}" class="doctor-photo" 
           onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%22%23f3f4f6%22 width=%22300%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 fill=%22%239ca3af%22 font-family=%22sans-serif%22 font-size=%2220%22 text-anchor=%22middle%22 dy=%22.3em%22%3EФото%3C/text%3E%3C/svg%3E'">
      <div class="doctor-info">
        <div class="doctor-name">${doctor.name}</div>
        <div class="doctor-position">${doctor.position}</div>
        <div class="doctor-experience">${doctor.experience}</div>
      </div>
    </div>
  `).join('');
}

// Рендеринг контактів
function renderContacts(content) {
  const container = document.querySelector('.contact-info');
  if (!container || !content.contacts) return;

  const c = content.contacts;
  container.innerHTML = `
    <div class="contact-item">
      <div class="contact-label">Телефон</div>
      <div class="contact-value"><a href="tel:${c.phone}">${c.phone}</a></div>
    </div>
    <div class="contact-item">
      <div class="contact-label">Email</div>
      <div class="contact-value"><a href="mailto:${c.email}">${c.email}</a></div>
    </div>
    <div class="contact-item">
      <div class="contact-label">Адреса</div>
      <div class="contact-value">${c.address}</div>
    </div>
    <div class="contact-item">
      <div class="contact-label">Графік роботи</div>
      <div class="contact-value">${c.workTime.replace(/\n/g, '<br>')}</div>
    </div>
    <div class="contact-item">
      <div class="contact-label">Екстрена допомога</div>
      <div class="contact-value"><a href="tel:${c.emergency.split(': ')[1]}">${c.emergency}</a></div>
    </div>
  `;
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', async () => {
  const content = await loadContent();
  if (!content) return;

  // Завжди рендеримо header і footer
  renderHeader(content);
  renderFooter(content);

  // Визначаємо яку сторінку рендерити
  const page = document.body.dataset.page;

  switch(page) {
    case 'home':
      renderHero(content);
      renderFeatures(content);
      break;
    case 'about':
      renderStats(content);
      break;
    case 'services':
      renderServices(content);
      break;
    case 'departments':
      renderDepartments(content);
      break;
    case 'doctors':
      renderDoctors(content);
      break;
    case 'contacts':
      renderContacts(content);
      break;
  }
});
