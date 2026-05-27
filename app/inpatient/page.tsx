import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = { title: 'Стаціонарна допомога' };

const departments = [
  {
    id: 'therapy',
    icon: '🏥',
    title: 'Терапевтичне відділення',
    subtitle: 'Лікування терапевтичних захворювань',
    desc: 'Терапевтичне відділення надає спеціалізовану допомогу пацієнтам з різними захворюваннями внутрішніх органів. Відділення забезпечене всім необхідним обладнанням та комфортними умовами перебування.',
    groups: [
      { label: 'Серцево-судинні', items: ['Гіпертонічна хвороба', 'ІХС', 'Серцева недостатність', 'Аритмії'] },
      { label: 'Органів дихання', items: ['Пневмонія', 'Бронхіт', 'Бронхіальна астма', 'ХОЗЛ'] },
      { label: 'Органів травлення', items: ['Гастрит, виразка', 'Панкреатит', 'Холецистит', 'Гепатит'] },
      { label: 'Ендокринні', items: ['Цукровий діабет', 'Захворювання щитоподібної залози', 'Ожиріння'] },
    ],
  },
  {
    id: 'surgery',
    icon: '⚕️',
    title: 'Хірургічне відділення',
    subtitle: 'Планові та екстрені операції',
    desc: 'Хірургічне відділення забезпечує кваліфіковану хірургічну допомогу населенню. Проводяться як планові, так і екстрені операції різного профілю.',
    groups: [
      { label: 'Операції', items: ['Апендектомія', 'Холецистектомія', 'Грижосічення', 'Операції на щитоподібній залозі', 'Лапароскопічні операції', 'Проктологічні операції', 'Травматологічні операції', 'Операції на молочній залозі'] },
    ],
  },
  {
    id: 'gynecology',
    icon: '👶',
    title: 'Акушерсько-гінекологічне відділення',
    subtitle: 'Допомога майбутнім мамам',
    desc: 'Відділення надає повний спектр акушерсько-гінекологічної допомоги жінкам.',
    groups: [
      { label: 'Акушерство', items: ['Ведення вагітності', 'Пологи', 'Післяпологовий догляд', 'Патологія вагітності'] },
      { label: 'Гінекологія', items: ['Лікування гінекологічних захворювань', 'Гінекологічні операції', 'Планування сім\'ї', 'Діагностика та лікування безпліддя'] },
    ],
  },
  {
    id: 'pediatrics',
    icon: '🧸',
    title: 'Дитяче відділення',
    subtitle: 'Медична допомога дітям',
    desc: 'Дитяче відділення надає стаціонарну допомогу дітям з різноманітними захворюваннями. Медична допомога дітям до 16 років — безкоштовно.',
    groups: [
      { label: 'Послуги', items: ['Лікування інфекційних захворювань', 'Терапія органів дихання', 'Лікування алергологічних станів', 'Гастроентерологія', 'Неврологія', 'Педіатричний огляд'] },
    ],
  },
  {
    id: 'rehabilitation',
    icon: '💪',
    title: 'Реабілітаційне відділення',
    subtitle: 'Відновлення після хвороби',
    desc: 'Реабілітаційне відділення допомагає пацієнтам відновитися після захворювань, операцій та травм.',
    groups: [
      { label: 'Методи реабілітації', items: ['Фізіотерапія', 'Лікувальна фізкультура', 'Масаж', 'Механотерапія', 'Рефлексотерапія', 'Голкотерапія'] },
    ],
  },
  {
    id: 'admission',
    icon: '🚑',
    title: 'Приймальне відділення',
    subtitle: 'Цілодобовий прийом пацієнтів',
    desc: 'Приймальне відділення працює цілодобово та приймає пацієнтів у плановому та екстреному порядку.',
    groups: [
      { label: 'Послуги', items: ['Цілодобовий прийом', 'Первинний огляд', 'ЕКГ', 'Лабораторна діагностика', 'Рентгенографія', 'Консультації спеціалістів'] },
    ],
  },
  {
    id: 'intensive-care',
    icon: '❤️',
    title: 'Відділення інтенсивної терапії',
    subtitle: 'Невідкладна допомога та реанімація',
    desc: 'Відділення інтенсивної терапії та реанімації забезпечує лікування пацієнтів у критичних станах цілодобово.',
    groups: [
      { label: 'Можливості', items: ['Апаратна вентиляція легень', 'Кардіомоніторинг', 'Інтенсивна терапія', 'Реанімаційні заходи', 'Нейромоніторинг'] },
    ],
  },
];

export default function InpatientPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Стаціонарна допомога</h1>
          <p>Цілодобовий медичний догляд та лікування</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: 24 }} className="inp-grid">
            {/* Sidebar */}
            <aside>
              <div className="dept-sidebar">
                <div className="dept-sidebar-title">Відділення</div>
                {departments.map(d => (
                  <a key={d.id} href={`#${d.id}`}>{d.title}</a>
                ))}
              </div>
              <div className="cta-card" style={{ marginTop: 16 }}>
                <p style={{ fontSize: '0.85rem', marginBottom: 12 }}>Потрібна госпіталізація?</p>
                <a href={siteConfig.contact.phoneHref} className="btn-white" style={{ fontSize: '0.82rem' }}>
                  📞 Зателефонуйте
                </a>
              </div>
            </aside>

            {/* Departments */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {departments.map(dept => (
                <div key={dept.id} id={dept.id}>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                    color: '#fff', borderRadius: '10px 10px 0 0', padding: '14px 20px',
                    display: 'flex', alignItems: 'center', gap: 12,
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{dept.icon}</span>
                    <div>
                      <h2 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, margin: 0 }}>{dept.title}</h2>
                      <p style={{ fontSize: '0.78rem', opacity: 0.85, margin: 0 }}>{dept.subtitle}</p>
                    </div>
                  </div>
                  <div className="card" style={{ borderRadius: '0 0 10px 10px', borderTop: 'none', padding: 20 }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7, marginBottom: 16 }}>{dept.desc}</p>
                    <div style={{ display: 'grid', gap: 14 }} className="disease-grid">
                      {dept.groups.map(g => (
                        <div key={g.label} className="sub-card">
                          <h4 style={{ marginBottom: 8 }}>{g.label}</h4>
                          <ul className="ul-list">
                            {g.items.map(item => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .inp-grid { @media (min-width:768px) { grid-template-columns: 220px 1fr !important; } }
        .disease-grid { @media (min-width:600px) { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </>
  );
}
