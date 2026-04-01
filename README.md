# Миколаївська міська лікарня - Офіційний вебсайт

Сучасний, адаптивний вебсайт для Миколаївської міської лікарні з повною інформацією про послуги, лікарів та відділення.

## 🎯 Особливості

- **Модульна архітектура** - Header, Footer та конфігурація в окремих компонентах
- **Повністю адаптивний дизайн** - працює на всіх пристроях
- **SEO-оптимізація** - meta-теги, семантична розмітка
- **Кольорова схема** - на основі логотипу лікарні (блакитно-зелена гама)
- **Мобільне меню** - зручна навігація на телефонах
- **Пошук по сайту** - модальне вікно пошуку
- **Відсутність залежностей** - чистий HTML, CSS, JavaScript

## 📁 Структура проєкту

```
mlhospital-website/
├── public/                      # HTML сторінки
│   ├── index.html              # Головна
│   ├── about.html              # Про нас
│   ├── contacts.html           # Контакти
│   ├── doctors.html            # Лікарі
│   ├── ambulatory.html         # Амбулаторна допомога
│   ├── inpatient.html          # Стаціонарна допомога
│   ├── idp.html                # Для ВПО
│   ├── services.html           # Платні послуги
│   └── procurement.html        # Закупівлі
│
└── assets/
    ├── css/
    │   └── style.css           # Головні стилі
    ├── js/
    │   ├── config.js           # Конфігурація (контакти, меню)
    │   └── components/
    │       ├── header.js       # Компонент Header
    │       └── footer.js       # Компонент Footer
    └── images/                 # Зображення (потрібно додати)
        ├── logo.svg
        ├── hospital-exterior.jpg
        └── partners/
```

## 🚀 Швидкий старт

### Локальна розробка

1. **Відкрийте в VS Code:**
   ```bash
   code mlhospital-website
   ```

2. **Запустіть локальний сервер:**
   - Встановіть розширення "Live Server" в VS Code
   - Правий клік на `public/index.html` → "Open with Live Server"
   - Або використайте будь-який інший локальний сервер

### Розгортання на GitHub Pages

1. **Створіть репозиторій на GitHub:**
   ```bash
   cd mlhospital-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mlhospital.git
   git push -u origin main
   ```

2. **Налаштуйте GitHub Pages:**
   - Перейдіть в Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: /public
   - Збережіть

3. **Сайт буде доступний за адресою:**
   ```
   https://YOUR_USERNAME.github.io/mlhospital/
   ```

## 📝 Що потрібно додати

### 1. Зображення

Розмістіть наступні зображення в `assets/images/`:

- **logo.svg** - логотип лікарні (60x60px)
- **hospital-exterior.jpg** - фото будівлі лікарні (1920x800px)
- **usaid-logo.png** - логотип USAID
- **ukaid-logo.png** - логотип UK aid

В `assets/images/partners/`:
- **miska-rada.png** - Миколаївська міська рада
- **grn.png** - GRN
- **asb.png** - ASB
- **drc.png** - Danish Refugee Council

### 2. Оновлення конфігурації

Відредагуйте `assets/js/config.js` для оновлення:
- Посилань на соціальні мережі
- Посилань партнерів
- Email адреси

### 3. Додаткові налаштування

**Google Maps (в contacts.html):**
- Замініть iframe src на реальну карту з правильними координатами

**Форми зворотного зв'язку:**
- Налаштуйте обробку форм (наразі просто alert)
- Підключіть до сервісу розсилки (FormSpree, EmailJS тощо)

## 🎨 Кольорова палітра

```css
--primary: #4A9B8E          /* Основний зелений */
--primary-light: #6BB5A8    /* Світлий зелений */
--primary-dark: #3A7B6E     /* Темний зелений */
--secondary: #5DADE2        /* Блакитний */
--accent: #52C4B8           /* Акцент */
--text: #2C3E50             /* Текст */
--text-light: #7F8C8D       /* Світлий текст */
```

## 📱 Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🔧 Технічні деталі

### Header
- Sticky позиція
- Двох-рівнева структура (верх з логотипом, низ з меню)
- Dropdown підменю
- Мобільне бургер-меню
- Модальний пошук

### Footer
- 4-колонкова сітка (про заклад, послуги, інформація, контакти)
- Партнери з логотипами
- USAID disclaimer
- Копірайт з посиланням на OSIS Studio

### Сторінки
- Семантична розмітка
- SEO meta-теги
- Open Graph теги (можна додати)
- Структуровані дані Schema.org (можна додати)

## 🌐 Домен

Для підключення власного домену:

1. **GitHub Pages:**
   - Додайте файл `CNAME` в папку `public` з вашим доменом
   - Налаштуйте DNS записи вашого домену:
     ```
     A    @    185.199.108.153
     A    @    185.199.109.153
     A    @    185.199.110.153
     A    @    185.199.111.153
     ```

2. **Netlify (рекомендується):**
   - Підключіть GitHub репозиторій до Netlify
   - Build command: (залиште порожнім)
   - Publish directory: `public`
   - Додайте власний домен в налаштуваннях

## 📊 SEO чекліст

- [x] Meta description на всіх сторінках
- [x] Title теги оптимізовані
- [x] H1 на кожній сторінці
- [x] Семантична розмітка (header, nav, main, footer, article)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Open Graph теги
- [ ] Schema.org structured data
- [ ] Alt теги на зображеннях

## 🤝 Підтримка

Розроблено [OSIS Studio](https://osis.studio)

Для питань: контакт через сайт студії

## 📄 Ліцензія

© 2026 Миколаївська міська лікарня. Всі права захищені.
