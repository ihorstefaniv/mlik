# Інструкція з налаштування сайту

## Крок 1: Додавання зображень

Вам потрібно додати наступні зображення в папку `assets/images/`:

### Основні зображення:
1. **logo.svg** - Логотип лікарні (використайте з старого сайту або створіть з PNG)
2. **hospital-exterior.jpg** - Фото будівлі лікарні (зробіть фото або використайте з архіву)
3. **usaid-logo.png** - Завантажте з офіційного сайту USAID
4. **ukaid-logo.png** - Завантажте з офіційного сайту UK aid

### Логотипи партнерів (в `assets/images/partners/`):
1. **miska-rada.png** - Герб Миколаївської міської ради
2. **grn.png** - Логотип GRN
3. **asb.png** - Логотип Arbeiter-Samariter-Bund
4. **drc.png** - Логотип Danish Refugee Council

## Крок 2: Налаштування контактної інформації

Відкрийте `assets/js/config.js` та перевірте/оновіть:

```javascript
contact: {
  phone: '+38 067 5 600 610',      // Основний телефон
  phoneAlt: '067 560 0810',        // Альтернативний
  email: 'mukolaiv_kcrl@ukr.net',  // Email
  // ... інші контакти
}
```

## Крок 3: Соціальні мережі

В тому ж файлі `config.js` оновіть посилання:

```javascript
social: {
  facebook: 'https://facebook.com/ВАШ_ПРОФІЛЬ',
  instagram: 'https://instagram.com/ВАШ_ПРОФІЛЬ'
}
```

## Крок 4: Карта Google Maps

Відкрийте `public/contacts.html` і знайдіть iframe з Google Maps.

1. Перейдіть на https://www.google.com/maps
2. Знайдіть вашу лікарню
3. Натисніть "Поділитися" → "Вставити карту"
4. Скопіюйте iframe код
5. Замініть наявний iframe в contacts.html

## Крок 5: Git та GitHub

### Ініціалізація репозиторію:

```bash
cd mlhospital-website
git init
git add .
git commit -m "Початкова версія сайту"
```

### Створення репозиторію на GitHub:

1. Перейдіть на https://github.com
2. Натисніть "New repository"
3. Назва: `mlhospital` (або на ваш вибір)
4. НЕ додавайте README, .gitignore або license
5. Створіть репозиторій

### Підключення та відправка коду:

```bash
git remote add origin https://github.com/ВАШ_USERNAME/mlhospital.git
git branch -M main
git push -u origin main
```

## Крок 6: Налаштування GitHub Pages

1. Перейдіть в Settings вашого репозиторію
2. У лівому меню виберіть "Pages"
3. Source: "Deploy from a branch"
4. Branch: `main`
5. Folder: `/public`
6. Натисніть "Save"

Через 1-2 хвилини ваш сайт буде доступний за адресою:
`https://ВАШ_USERNAME.github.io/mlhospital/`

## Крок 7: Власний домен (опціонально)

### Якщо у вас є домен (наприклад, ml.lviv.ua):

1. **В GitHub:**
   - Settings → Pages → Custom domain
   - Введіть ваш домен: `ml.lviv.ua`
   - Збережіть

2. **В налаштуваннях DNS домену:**
   Додайте A записи:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```
   
   Або CNAME запис (якщо використовуєте піддомен www):
   ```
   CNAME  www  ВАШ_USERNAME.github.io
   ```

3. Почекайте 24-48 годин для поширення DNS

## Крок 8: HTTPS

GitHub Pages автоматично надає безкоштовний SSL сертифікат.

В Settings → Pages увімкніть "Enforce HTTPS" після того як домен налаштований.

## Альтернатива: Netlify (рекомендується)

Netlify простіший у налаштуванні і має більше функцій:

1. Зареєструйтесь на https://www.netlify.com
2. "Add new site" → "Import an existing project"
3. Підключіть GitHub
4. Виберіть ваш репозиторій
5. Build settings:
   - Build command: (залиште порожнім)
   - Publish directory: `public`
6. Deploy site

Netlify автоматично:
- Дає вам піддомен (name.netlify.app)
- Надає SSL сертифікат
- Автоматично оновлює сайт при push в GitHub
- Дозволяє легко додати власний домен

## Підтримка та оновлення

### Локальні зміни:

1. Відредагуйте файли
2. Перевірте локально
3. Commit та push:
   ```bash
   git add .
   git commit -m "Опис змін"
   git push
   ```

GitHub Pages/Netlify автоматично оновить сайт.

## Додаткові налаштування

### Форми зворотного зв'язку:

Наразі форма в contacts.html просто показує alert. Для реальної роботи:

**Варіант 1: FormSpree (безкоштовно)**
1. Зареєструйтесь на https://formspree.io
2. Створіть форму
3. Отримайте endpoint
4. Замініть обробник форми на:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Варіант 2: EmailJS**
1. https://www.emailjs.com
2. Налаштуйте email сервіс
3. Підключіть JavaScript SDK

## Потрібна допомога?

Контакт: https://osis.studio

---

**Розроблено OSIS Studio**
2026
