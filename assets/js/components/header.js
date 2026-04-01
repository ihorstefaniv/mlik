// Header Component - модульний хедер з лого та меню
class Header {
  constructor() {
    this.headerElement = document.querySelector('.header');
    this.mobileMenuOpen = false;
  }
  
  render() {
    const currentPage = document.body.dataset.page || 'home';
    
    const headerHTML = `
      <div class="header-top">
        <div class="container header-container">
          <div class="header-logo">
            <a href="index.html" class="logo-link">
              <div class="logo-text">
                <span class="logo-name">${CONFIG.site.name}</span>
                <span class="logo-tagline">${CONFIG.site.tagline}</span>
              </div>
            </a>
          </div>
          
          <div class="header-contacts">
            <div class="header-contact-item">
              <span class="contact-icon">👤</span>
              <span class="contact-text">Особистий кабінет</span>
            </div>
            <div class="header-contact-item phone-primary">
              <span class="contact-icon">📞</span>
              <a href="tel:${CONFIG.contact.phone.replace(/\s/g, '')}" class="contact-text">${CONFIG.contact.phone}</a>
            </div>
          </div>
          
          <button class="mobile-menu-toggle" aria-label="Меню">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      
      <nav class="header-nav">
        <div class="container">
          <ul class="nav-menu">
            ${this.renderMenu(currentPage)}
          </ul>
        </div>
      </nav>
      
      <div class="mobile-menu">
        <div class="mobile-menu-overlay"></div>
        <div class="mobile-menu-content">
          <button class="mobile-menu-close">&times;</button>
          <ul class="mobile-nav-menu">
            ${this.renderMobileMenu(currentPage)}
          </ul>
        </div>
      </div>
    `;
    
    this.headerElement.innerHTML = headerHTML;
    this.attachEventListeners();
    this.initSearch();
  }
  
  renderMenu(currentPage) {
    return MENU.map(item => {
      const isActive = item.id === currentPage ? 'active' : '';
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      
      if (item.id === 'search') {
        return `
          <li class="nav-item">
            <button class="nav-link search-toggle" aria-label="Пошук">
              ${item.icon} ${item.title}
            </button>
          </li>
        `;
      }
      
      if (hasSubmenu) {
        return `
          <li class="nav-item has-submenu ${isActive}">
            <a href="${item.url}" class="nav-link">${item.title}</a>
            <ul class="submenu">
              ${item.submenu.map(subitem => `
                <li><a href="${subitem.url}" class="submenu-link">${subitem.title}</a></li>
              `).join('')}
            </ul>
          </li>
        `;
      }
      
      return `
        <li class="nav-item ${isActive}">
          <a href="${item.url}" class="nav-link">${item.title}</a>
        </li>
      `;
    }).join('');
  }
  
  renderMobileMenu(currentPage) {
    return MENU.map(item => {
      if (item.id === 'search') return '';
      
      const isActive = item.id === currentPage ? 'active' : '';
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      
      if (hasSubmenu) {
        return `
          <li class="mobile-nav-item has-submenu ${isActive}">
            <button class="mobile-nav-toggle">
              ${item.title}
              <span class="toggle-icon">▼</span>
            </button>
            <ul class="mobile-submenu">
              ${item.submenu.map(subitem => `
                <li><a href="${subitem.url}" class="mobile-submenu-link">${subitem.title}</a></li>
              `).join('')}
            </ul>
          </li>
        `;
      }
      
      return `
        <li class="mobile-nav-item ${isActive}">
          <a href="${item.url}" class="mobile-nav-link">${item.title}</a>
        </li>
      `;
    }).join('');
  }
  
  attachEventListeners() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.mobile-menu-close');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    
    const openMenu = () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
    
    const closeMenu = () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    };
    
    menuToggle?.addEventListener('click', openMenu);
    menuClose?.addEventListener('click', closeMenu);
    menuOverlay?.addEventListener('click', closeMenu);
    
    // Mobile submenu toggles
    document.querySelectorAll('.mobile-nav-toggle').forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        const parent = e.target.closest('.mobile-nav-item');
        parent.classList.toggle('open');
      });
    });
    
    // Search toggle
    const searchToggle = document.querySelector('.search-toggle');
    searchToggle?.addEventListener('click', () => {
      this.toggleSearch();
    });
  }
  
  initSearch() {
    const searchHTML = `
      <div class="search-modal">
        <div class="search-modal-overlay"></div>
        <div class="search-modal-content">
          <button class="search-close">&times;</button>
          <div class="search-box">
            <input type="search" class="search-input" placeholder="Пошук по сайту..." autofocus>
            <button class="search-submit">🔍</button>
          </div>
          <div class="search-results"></div>
        </div>
      </div>
    `;
    
    if (!document.querySelector('.search-modal')) {
      document.body.insertAdjacentHTML('beforeend', searchHTML);
      
      const searchClose = document.querySelector('.search-close');
      const searchOverlay = document.querySelector('.search-modal-overlay');
      
      searchClose?.addEventListener('click', () => this.toggleSearch());
      searchOverlay?.addEventListener('click', () => this.toggleSearch());
      
      // Search input handler
      const searchInput = document.querySelector('.search-input');
      searchInput?.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
    }
  }
  
  toggleSearch() {
    const searchModal = document.querySelector('.search-modal');
    searchModal?.classList.toggle('active');
    
    if (searchModal?.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.querySelector('.search-input')?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
  }
  
  handleSearch(query) {
    // Простий пошук по меню (можна розширити)
    if (!query || query.length < 2) {
      document.querySelector('.search-results').innerHTML = '';
      return;
    }
    
    const results = [];
    MENU.forEach(item => {
      if (item.title.toLowerCase().includes(query.toLowerCase())) {
        results.push(item);
      }
      if (item.submenu) {
        item.submenu.forEach(subitem => {
          if (subitem.title.toLowerCase().includes(query.toLowerCase())) {
            results.push(subitem);
          }
        });
      }
    });
    
    const resultsHTML = results.length > 0 
      ? `<ul class="search-results-list">
          ${results.map(r => `
            <li><a href="${r.url}" class="search-result-item">${r.title}</a></li>
          `).join('')}
         </ul>`
      : '<p class="no-results">Нічого не знайдено</p>';
    
    document.querySelector('.search-results').innerHTML = resultsHTML;
  }
}

// Ініціалізація Header при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const header = new Header();
  header.render();
});