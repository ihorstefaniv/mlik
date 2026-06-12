'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/config';

const departments = [
  {
    id: 'therapy',
    icon: '🫀',
    color: '#4A9B8E',
    title: 'Терапевтичне відділення',
    subtitle: 'Лікування захворювань внутрішніх органів',
    desc: 'Надає спеціалізовану допомогу пацієнтам з різними захворюваннями внутрішніх органів. Відділення оснащене сучасним обладнанням та забезпечує комфортні умови перебування.',
    groups: [
      { label: 'Серцево-судинні',  items: ['Гіпертонічна хвороба', 'ІХС', 'Серцева недостатність', 'Аритмії'] },
      { label: 'Органи дихання',   items: ['Пневмонія', 'Бронхіт', 'Бронхіальна астма', 'ХОЗЛ'] },
      { label: 'Органи травлення', items: ['Гастрит, виразка', 'Панкреатит', 'Холецистит', 'Гепатит'] },
      { label: 'Ендокринні',       items: ['Цукровий діабет', 'Патологія щитоподібної залози', 'Ожиріння'] },
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
      { label: 'Загальна хірургія',  items: ['Апендектомія', 'Холецистектомія', 'Грижосічення', 'Операції на щитоподібній залозі'] },
      { label: 'Спеціалізовані',     items: ['Лапароскопічні операції', 'Проктологічні операції', 'Травматологічні операції', 'Операції на молочній залозі'] },
    ],
  },
  {
    id: 'gynecology',
    icon: '🌸',
    color: '#5DADE2',
    title: 'Акушерсько-гінекологічне',
    subtitle: 'Гінекологічна допомога жінкам',
    desc: 'Надає спеціалізовану гінекологічну допомогу жінкам. Відділення виконує планові та екстрені гінекологічні операції.',
    groups: [
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
    id: 'palliative',
    icon: '🕊️',
    color: '#8E44AD',
    title: 'Паліативне відділення',
    subtitle: 'Паліативна та хоспісна допомога',
    desc: 'Надає паліативну медичну допомогу пацієнтам з невиліковними хворобами та їх родинам. Основна мета — полегшення болю, підтримка якості та гідності життя до останнього дня.',
    groups: [
      { label: 'Медична допомога',      items: ['Знеболювання', 'Симптоматичне лікування', 'Контроль болю та задишки', 'Догляд за ранами'] },
      { label: 'Підтримка та супровід', items: ['Психологічна підтримка пацієнта', 'Допомога родині', 'Духовний супровід', 'Мобільна паліативна допомога'] },
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
    color: '#C0392B',
    title: 'Відділення інтенсивної терапії',
    subtitle: 'Реанімація та невідкладна допомога',
    desc: 'Відділення інтенсивної терапії та реанімації забезпечує цілодобове лікування пацієнтів у критичних та важких станах.',
    groups: [
      { label: 'Можливості', items: ['Апаратна вентиляція легень', 'Кардіомоніторинг', 'Інтенсивна терапія', 'Реанімаційні заходи', 'Нейромоніторинг'] },
    ],
  },
];

const DEPT_IDS = departments.map(d => d.id);

export default function InpatientTabs() {
  const [active, setActive] = useState(DEPT_IDS[0]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && DEPT_IDS.includes(hash)) setActive(hash);
  }, []);

  const switchTab = (id: string) => {
    setActive(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  const dept = departments.find(d => d.id === active)!;

  return (
    <>
      {/* Tab bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="tabs-list">
            {departments.map(d => {
              const isActive = d.id === active;
              return (
                <button key={d.id} onClick={() => switchTab(d.id)} className="tab-btn" style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '10px 12px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: isActive ? `2px solid ${d.color}` : '2px solid transparent',
                  color: isActive ? d.color : 'var(--color-text-light)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.8rem',
                  transition: 'color 0.15s, border-color 0.15s',
                  fontFamily: 'var(--font-sans)',
                }}>
                  <span style={{ fontSize: '0.95rem', flexShrink: 0 }}>{d.icon}</span>
                  <span>{d.title.replace(' відділення', '').replace('Акушерсько-гінекологічне', 'Гінекологічне')}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <section className="section">
        <div className="container">
          <div style={{
            background: '#fff',
            borderRadius: 14,
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)',
          }}>
            {/* Dept header */}
            <div style={{
              background: `linear-gradient(135deg, ${dept.color}22 0%, ${dept.color}0d 100%)`,
              borderBottom: `1px solid ${dept.color}33`,
              padding: '24px 28px',
              display: 'flex', alignItems: 'flex-start', gap: 18,
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14, flexShrink: 0,
                background: dept.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.8rem',
              }}>{dept.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--color-text)' }}>
                    {dept.title}
                  </h2>
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 600,
                    color: dept.color,
                    background: `${dept.color}18`,
                    padding: '3px 10px', borderRadius: 20,
                    border: `1px solid ${dept.color}33`,
                  }}>{dept.subtitle}</span>
                </div>
                <p style={{ margin: '10px 0 0', fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
                  {dept.desc}
                </p>
              </div>
            </div>

            {/* Groups */}
            <div style={{ padding: '24px 28px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 20,
              }}>
                {dept.groups.map(g => (
                  <div key={g.label}>
                    <div style={{
                      fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.6px', color: dept.color,
                      marginBottom: 10, paddingBottom: 6,
                      borderBottom: `2px solid ${dept.color}33`,
                    }}>{g.label}</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {g.items.map(item => (
                        <li key={item} style={{
                          fontSize: '0.875rem', color: 'var(--color-text)',
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

          {/* CTA */}
          <div className="cta-card" style={{ marginTop: 32 }}>
            <h2>Потрібна госпіталізація?</h2>
            <p>Зателефонуйте або зверніться до приймального відділення цілодобово</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
              <a href={siteConfig.contact.phoneHref} className="btn-white">
                📞 {siteConfig.contact.phone}
              </a>
              <button
                onClick={() => switchTab('admission')}
                style={{
                  padding: '10px 24px', borderRadius: 24,
                  border: '2px solid rgba(255,255,255,0.4)',
                  background: 'transparent',
                  color: '#fff', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Приймальне відділення
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
