// Конфігурація сайту Миколаївської міської лікарні
const CONFIG = {
  site: {
    name: 'Миколаївська міська лікарня',
    shortName: 'ММЛ',
    tagline: 'Спеціалізована медична допомога',
    domain: 'www.ml.lviv.ua'
  },
  
  contact: {
    phone: '+38 067 5 600 610',
    phoneAlt: '067 560 0810',
    email: 'mukolaiv_kcrl@ukr.net',
    address: 'вул. Федьковича, 11',
    city: 'м. Миколаїв',
    region: 'Львівська область',
    zip: '81600',
    fullAddress: 'вул. Федьковича, 11, м. Миколаїв, Львівська область, 81600'
  },
  
  social: {
    facebook: '#',
    instagram: '#'
  },
  
  partners: [
    {
      name: 'Миколаївська міська рада',
      logo: '/assets/images/partners/miska-rada.png',
      url: '#'
    },
    {
      name: 'GRN',
      logo: '/assets/images/partners/grn.png',
      url: '#'
    },
    {
      name: 'ASB Arbeiter-Samariter-Bund',
      logo: '/assets/images/partners/asb.png',
      url: '#'
    },
    {
      name: 'Danish Refugee Council',
      logo: '/assets/images/partners/drc.png',
      url: '#'
    }
  ],
  
  guarantees: {
    title: 'Програма державних медичних гарантій',
    description: 'Лікарня уклала Договір про медичне обслуговування населення з НСЗУ, яка оплачує надання медичних послуг громадянам України за такими пакетами:',
    packages: [
      {
        icon: '🏥',
        title: 'Амбулаторна медична допомога',
        description: '(профілактика, спостереження, діагностика, лікування та медична реабілітація)'
      },
      {
        icon: '🏨',
        title: 'Стаціонарна допомога дорослим',
        description: 'без проведення хірургічних операцій'
      },
      {
        icon: '⚕️',
        title: 'Хірургічні операції дорослим',
        description: 'та дітям у стаціонарних умовах'
      }
    ]
  },
  
  developer: {
    name: 'OSIS Studio',
    url: 'https://osis.studio',
    year: new Date().getFullYear()
  },
  
  usaid: {
    text: 'Цей сайт підготовлено за підтримки Агентства США з міжнародного розвитку (USAID), наданої від імені народу Сполучених Штатів Америки за підтримки Програми Уряду Великої Британії «Good Governance Fund», наданої від імені народу Великої Британії. Відповідальність за зміст цього матеріалу, який необов\'язково відображає погляди USAID, Уряду Сполучених Штатів Америки, UK aid або Уряду Великої Британії, несе виключно компанія ГОБ «Джойнт Консалтинг» в рамках контракту №r201211800001.'
  }
};

// Структура меню сайту
const MENU = [
  {
    title: 'Головна',
    url: 'index.html',
    id: 'home'
  },
  {
    title: 'Про нас',
    url: 'about.html',
    id: 'about',
    submenu: [
      {
        title: 'Про нас',
        url: 'about.html'
      },
      {
        title: 'Наші лікарі',
        url: 'doctors.html'
      },
      {
        title: 'Закупівлі',
        url: 'procurement.html'
      },
      {
        title: 'Контакти',
        url: 'contacts.html'
      }
    ]
  },
  {
    title: 'Для ВПО',
    url: 'idp.html',
    id: 'idp'
  },
  {
    title: 'Амбулаторна допомога',
    url: 'ambulatory.html',
    id: 'ambulatory',
    submenu: [
      {
        title: 'Клініко-діагностичне відділення',
        url: 'ambulatory.html#clinical'
      },
      {
        title: 'Ультразвукова діагностика',
        url: 'ambulatory.html#ultrasound'
      },
      {
        title: 'Лабораторія',
        url: 'ambulatory.html#laboratory'
      },
      {
        title: 'Рентгенодіагностика',
        url: 'ambulatory.html#xray'
      },
      {
        title: 'Рання діагностика',
        url: 'ambulatory.html#early-diagnosis'
      }
    ]
  },
  {
    title: 'Стаціонарна допомога',
    url: 'inpatient.html',
    id: 'inpatient',
    submenu: [
      {
        title: 'Терапевтичне відділення',
        url: 'inpatient.html#therapy'
      },
      {
        title: 'Хірургічне відділення',
        url: 'inpatient.html#surgery'
      },
      {
        title: 'Реабілітаційне відділення',
        url: 'inpatient.html#rehabilitation'
      },
      {
        title: 'Акушерсько-гінекологічне відділення',
        url: 'inpatient.html#gynecology'
      },
      {
        title: 'Дитяче відділення',
        url: 'inpatient.html#pediatrics'
      },
      {
        title: 'Приймальне відділення',
        url: 'inpatient.html#admission'
      },
      {
        title: 'Відділення інтенсивної терапії',
        url: 'inpatient.html#intensive-care'
      }
    ]
  },
  {
    title: 'Платні послуги',
    url: 'services.html',
    id: 'services',
    submenu: [
      {
        title: 'Медичні огляди',
        url: 'services.html#medical-exams'
      },
      {
        title: 'Лабораторні дослідження',
        url: 'services.html#lab-tests'
      },
      {
        title: 'Оздоровчі масажі',
        url: 'services.html#massage'
      },
      {
        title: 'Інші послуги',
        url: 'services.html#other'
      }
    ]
  },
  {
    title: 'Пошук',
    url: '#',
    id: 'search',
    icon: '🔍'
  }
];