import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = { title: 'Стаціонарна допомога' };

const departments = [
  {
    id: 'therapy',
    icon: '🫀',
    color: '#4A9B8E',
    title: 'Терапевтичне відділення',
    subtitle: 'Лікування захворювань внутрішніх органів',
    desc: 'Надає спеціалізовану допомогу пацієнтам з різними захворюваннями внутрішніх органів. Відділення оснащене сучасним обладнанням та забезпечує комфортні умови перебування.',
    groups: [
      { label: 'Серцево-судинні', items: ['Гіпертонічна хвороба', 'ІХС', 'Серцева недостатність', 'Аритмії'] },
      { label: 'Органи дихання', items: ['Пневмонія', 'Бронхіт', 'Бронхіальна астма', 'ХОЗЛ'] },
      { label: 'Органи травлення', items: ['Гастрит, виразка', 'Панкреатит', 'Холецистит', 'Гепатит'] },
      { label: 'Ендокринні', items: ['Цукровий діабет', 'Патологія щитоподібної залози', 'Ожиріння'] },
    ],
  },
  {
    id: 'surgery',
    icon: '⚕️',
    color: '#3A7B6E',
    title: 'Хірургічне відділення',
    subtitle: 'Планові та екстрені операції',
    desc: 'Забезпечує кваліфіковану хірургічну допомогу населенню. Проводяться планові та екстрені операції різного профілю з застосуванням сучасних малоінвазивних методів.',
    groups: [
      { label: 'Загальна хірургія', items: ['Апендектомія', 'Холецистектомія', 'Грижосічення', 'Операції на щитоподібній залозі'] },
      { label: 'Спеціалізовані', items: ['Лапароскопічні операції', 'Проктологічні операції', 'Травматологічні операції', 'Операції на молочній залозі'] },
    ],
  },
  {
    id: 'gynecology',
    icon: '🌸',
    color: '#5DADE2',
    title: 'Акушерсько-гінекологічне',
    subtitle: 'Допомога жінкам та майбутнім мамам',
    desc: 'Надає повний спектр акушерської та гінекологічної допомоги жінкам на всіх етапах — від ведення вагітності до пологів та реабілітації.',
    groups: [
      { label: 'Акушерство', items: ['Ведення вагітності', 'Пологи', 'Після пологовий догляд', 'Патологія вагітності'] },
      { label: 'Гінекологія', items: ['Лікування гінекологічних захворювань', 'Гінекологічні операції', 'Планування сім\'ї', 'Лікування безпліддя'] },
    ],
  },
  {
    id: 'pediatrics',
    icon: '🧸',
    color: '#F39C12',
    title: 'Дитяче відділення',
    subtitle: 'Медична допомога дітям до 16 років',
    desc: 'Надає стаціонарну допомогу дітям з різноманітними захворюваннями. Медична допомога дітям до 16 років безкоштовна за програмою НСЗУ.',
    groups: [
      { label: 'Напрямки', items: ['Інфекційні захворювання', 'Захворювання органів дихання', 'Алергологія', 'Гастроентерологія', 'Неврологія', 'Педіатричний огляд'] },
    ],
  },
  {
    id: 'rehabilitation',
    icon: '💪',
    color: '#27AE60',
    title: 'Реабілітаційне відділення',
    subtitle: 'Відновлення після хвороби та операцій',
    desc: 'Допомагає пацієнтам повноцінно відновитися після захворювань, хірургічних втручань та травм. Індивідуальні програми реабілітації.',
    groups: [
      { label: 'Методи', items: ['Фізіотерапія', 'Лікувальна фізкультура (ЛФК)', 'Масаж', 'Механотерапія', 'Рефлексотерапія', 'Голкотерапія'] },
    ],
  },
  {
    id: 'admission',
    icon: '🚑',
    color: '#E74C3C',
    title: 'Приймальне відділення',
    subtitle: 'Цілодобовий прийом — 24/7',
    desc: 'Приймальне відділення працює без вихідних та свят. Приймаємо пацієнтів у плановому та екстреному порядку цілодобово.',
    groups: [
      { label: 'Послуги', items: ['Цілодобовий прийом', 'Первинний огляд лікаря', 'ЕКГ', 'Лабораторна діагностика', 'Рентгенографія', 'Консультації спеціалістів'] },
    ],
  },
  {
    id: 'intensive-care',
    icon: '❤️‍🔥',
    color: '#8E44AD',
    title: 'Відділення інтенсивної терапії',
    subtitle: 'Реанімація та невідкладна допомога',
    desc: 'Відділення інтенсивної терапії та реанімації забезпечує цілодобове лікування пацієнтів у критичних та важких станах.',
    groups: [
      { label: 'Можливості', items: ['Апаратна вентиляція легень', 'Кардіомоніторинг', 'Інтенсивна терапія', 'Реанімаційні заходи', 'Нейромоніторинг'] },
    ],
  },
];

const stats = [
  { value: '7', label: 'відділень' },
  { value: '24/7', label: 'цілодобово' },
  { value: '100+', label: 'ліжко-місць' },
  { value: 'НСЗУ', label: 'безкоштовно' },
];

export default function InpatientPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <h1>Стаціонарна допомога</h1>
          <p>Цілодобовий медичний догляд та лікування у спеціалізованих відділеннях</p>
          {/* Stats row */}
          <div style={{ display: 'flex', gap: 24, marginTop: 20, flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Department quick-nav cards */}
      <section style={{ padding: '28px 0', background: '#f8fffe', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 10,
          }}>
            {departments.map(d => (
              <a key={d.id} href={`#${d.id}`} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 14px',
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderLeft: `3px solid ${d.color}`,
                borderRadius: 8,
                textDecoration: 'none',
                color: 'var(--color-text)',
                fontSize: '0.82rem',
                fontWeight: 600,
                lineHeight: 1.3,
                transition: 'box-shadow 0.15s, transform 0.15s',
              }}>
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{d.icon}</span>
                <span>{d.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Department sections */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {departments.map((dept, idx) => (
              <div key={dept.id} id={dept.id} style={{
                background: '#fff',
                borderRadius: 14,
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}>
                {/* Dept header */}
                <div style={{
                  background: `linear-gradient(135deg, ${dept.color}22 0%, ${dept.color}11 100%)`,
                  borderBottom: `1px solid ${dept.color}33`,
                  padding: '20px 24px',
                  display: 'flex', alignItems: 'flex-start', gap: 16,
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                    background: dept.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem',
                  }}>{dept.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                      <h2 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--color-text)' }}>
                        {dept.title}
                      </h2>
                      <span style={{
                        fontSize: '0.72rem', fontWeight: 600,
                        color: dept.color,
                        background: `${dept.color}18`,
                        padding: '2px 10px', borderRadius: 20,
                        border: `1px solid ${dept.color}33`,
                      }}>{dept.subtitle}</span>
                    </div>
                    <p style={{ margin: '8px 0 0', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.65 }}>
                      {dept.desc}
                    </p>
                  </div>
                </div>

                {/* Groups */}
                <div style={{ padding: '20px 24px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: 16,
                  }}>
                    {dept.groups.map(g => (
                      <div key={g.label}>
                        <div style={{
                          fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
                          letterSpacing: '0.6px', color: dept.color,
                          marginBottom: 8, paddingBottom: 6,
                          borderBottom: `2px solid ${dept.color}33`,
                        }}>{g.label}</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                          {g.items.map(item => (
                            <li key={item} style={{
                              fontSize: '0.85rem', color: 'var(--color-text)',
                              padding: '4px 0',
                              display: 'flex', alignItems: 'center', gap: 8,
                            }}>
                              <span style={{
                                width: 6, height: 6, borderRadius: '50%',
                                background: dept.color, flexShrink: 0,
                              }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="cta-card" style={{ marginTop: 48 }}>
            <h2>Потрібна госпіталізація?</h2>
            <p>Зателефонуйте або зверніться до приймального відділення цілодобово</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
              <a href={siteConfig.contact.phoneHref} className="btn-white">
                📞 {siteConfig.contact.phone}
              </a>
              <a href="#admission" style={{
                padding: '10px 24px', borderRadius: 24,
                border: '2px solid rgba(255,255,255,0.4)',
                color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem',
              }}>Приймальне відділення</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
