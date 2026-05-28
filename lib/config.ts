export const siteConfig = {
  name: 'Миколаївська міська лікарня',
  shortName: 'ММЛ',
  tagline: 'Спеціалізована медична допомога',
  domain: 'www.ml.lviv.ua',

  contact: {
    phone: '+38 067 5 600 610',
    phoneHref: 'tel:+380675600610',
    phoneAlt: '067 560 0810',
    email: 'mukolaiv_kcrl@ukr.net',
    address: 'вул. Федьковича, 11',
    city: 'м. Миколаїв',
    region: 'Львівська область',
    zip: '81600',
  },

  social: {
    facebook: '#',
    instagram: '#',
  },

  usaid: "Цей сайт підготовлено за підтримки Агентства США з міжнародного розвитку (USAID), наданої від імені народу Сполучених Штатів Америки за підтримки Програми Уряду Великої Британії «Good Governance Fund». Відповідальність за зміст несе виключно компанія ГОБ «Джойнт Консалтинг».",

  developer: {
    name: 'OSIS Studio',
    url: 'https://osis.studio',
    year: 2025,
  },
};

export const navItems = [
  { title: 'Головна',              href: '/',              id: 'home' },
  {
    title: 'Про нас', href: '/about/', id: 'about',
    submenu: [
      { title: 'Про нас',      href: '/about/' },
      { title: 'Наші лікарі', href: '/doctors/' },
      { title: 'Закупівлі',   href: '/procurement/' },
      { title: 'Контакти',    href: '/contacts/' },
    ],
  },
  { title: 'Для ВПО',              href: '/idp/',          id: 'idp' },
  {
    title: 'Амбулаторна допомога', href: '/ambulatory/',   id: 'ambulatory',
    submenu: [
      { title: 'Клініко-діагностичне відділення', href: '/ambulatory/#clinical' },
      { title: 'Ультразвукова діагностика',       href: '/ambulatory/#ultrasound' },
      { title: 'Лабораторія',                     href: '/ambulatory/#laboratory' },
      { title: 'Рентгенодіагностика',             href: '/ambulatory/#xray' },
      { title: 'Рання діагностика',               href: '/ambulatory/#early-diagnosis' },
    ],
  },
  {
    title: 'Стаціонарна допомога', href: '/inpatient/',    id: 'inpatient',
    submenu: [
      { title: 'Терапевтичне відділення',             href: '/inpatient/#therapy' },
      { title: 'Хірургічне відділення',               href: '/inpatient/#surgery' },
      { title: 'Реабілітаційне відділення',           href: '/inpatient/#rehabilitation' },
      { title: 'Акушерсько-гінекологічне відділення', href: '/inpatient/#gynecology' },
      { title: 'Дитяче відділення',                   href: '/inpatient/#pediatrics' },
      { title: 'Приймальне відділення',               href: '/inpatient/#admission' },
      { title: 'Відділення інтенсивної терапії',      href: '/inpatient/#intensive-care' },
    ],
  },
  {
    title: 'Платні послуги',       href: '/services/',     id: 'services',
    submenu: [
      { title: 'Медичні огляди',         href: '/services/#medical-exams' },
      { title: 'Лабораторні дослідження', href: '/services/#lab-tests' },
      { title: 'Оздоровчі масажі',       href: '/services/#massage' },
      { title: 'Інші послуги',           href: '/services/#other' },
    ],
  },
] as const;

export const partners = [
  'Миколаївська міська рада',
  'GRN',
  'ASB Arbeiter-Samariter-Bund',
  'Danish Refugee Council',
];

export const nszuPackages = [
  {
    group: 'Амбулаторна допомога',
    icon: '🩺',
    color: '#4A9B8E',
    items: [
      { num: 9,  title: 'Профілактика, діагностика, спостереження та лікування в амбулаторних умовах' },
      { num: 35, title: 'Ведення вагітності в амбулаторних умовах' },
      { num: 54, title: 'Реабілітаційна допомога дорослим і дітям у амбулаторних умовах' },
      { num: 60, title: 'Медичний огляд осіб, який організовується територіальними центрами комплектування та соціальної підтримки' },
    ],
  },
  {
    group: 'Стаціонарна допомога',
    icon: '🏥',
    color: '#3A7B6E',
    items: [
      { num: 4,  title: 'Стаціонарна допомога дорослим та дітям без проведення хірургічних операцій' },
      { num: 3,  title: 'Хірургічні операції дорослим та дітям у стаціонарних умовах' },
      { num: 47, title: 'Хірургічні операції дорослим та дітям в умовах стаціонару одного дня' },
    ],
  },
  {
    group: 'Ендоскопічна діагностика',
    icon: '🔬',
    color: '#5DADE2',
    items: [
      { num: 12, title: 'Езофагогастродуоденоскопія' },
      { num: 13, title: 'Колоноскопія' },
      { num: 14, title: 'Цистоскопія' },
    ],
  },
  {
    group: 'Паліативна допомога',
    icon: '🤝',
    color: '#8E44AD',
    items: [
      { num: 23, title: 'Стаціонарна паліативна медична допомога дорослим і дітям' },
      { num: 24, title: 'Мобільна паліативна медична допомога дорослим і дітям' },
    ],
  },
] as const;
