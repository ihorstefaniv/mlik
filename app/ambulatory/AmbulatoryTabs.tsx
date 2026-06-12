'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/config';

const sections = [
  {
    id: 'clinical',
    title: 'Клініко-діагностичне',
    fullTitle: 'Клініко-діагностичне відділення',
    desc: 'Відділення здійснює поліклінічний прийом пацієнтів та надає консультативно-діагностичну допомогу. Прийом ведуть терапевти та вузькі спеціалісти.',
    services: [
      'Консультації терапевта',
      'Консультації вузьких спеціалістів',
      'Профілактичні огляди',
      'Виписка направлень та рецептів',
      'Медичні довідки та документи',
    ],
  },
  {
    id: 'ultrasound',
    title: 'УЗД',
    fullTitle: 'Ультразвукова діагностика',
    desc: 'Кабінет ультразвукової діагностики оснащений апаратом експертного класу. Дослідження проводить лікар-сонолог.',
    services: [
      'УЗД органів черевної порожнини',
      'УЗД нирок та сечового міхура',
      'УЗД щитоподібної залози',
      'УЗД серця (ехокардіографія)',
      'УЗД суглобів',
      'УЗД органів малого таза',
      'Допплерографія судин',
    ],
  },
  {
    id: 'laboratory',
    title: 'Лабораторія',
    fullTitle: 'Клінічна лабораторія',
    desc: 'Клінічна лабораторія виконує широкий спектр досліджень для правильної постановки діагнозу та контролю лікування.',
    services: [
      'Загальний аналіз крові',
      'Загальний аналіз сечі',
      'Глюкоза крові',
      'Загальний білірубін',
      'АСТ, АЛТ',
      'Сечовина, креатинін',
      'Холестерин',
      'Коагулограма',
    ],
  },
  {
    id: 'xray',
    title: 'Рентгенодіагностика',
    fullTitle: 'Рентгенодіагностика',
    desc: 'Рентгенівський кабінет оснащений цифровим обладнанням. Результати дослідження надаються в електронному вигляді.',
    services: [
      'Рентгенографія органів грудної клітки',
      'Рентгенографія кісток та суглобів',
      'Рентгенографія хребта',
      'Рентгенографія черевної порожнини',
      'Флюорографія',
    ],
  },
  {
    id: 'early-diagnosis',
    title: 'Рання діагностика',
    fullTitle: 'Рання діагностика',
    desc: 'Профілактична програма для раннього виявлення захворювань. Обстеження доступне безкоштовно за направленням сімейного лікаря.',
    services: [
      'Огляд терапевта',
      'ЕКГ',
      'Загальний аналіз крові та сечі',
      'УЗД органів черевної порожнини',
      'Вимірювання АТ та глюкози',
    ],
  },
];

const IDS = sections.map(s => s.id);

export default function AmbulatoryTabs() {
  const [active, setActive] = useState(IDS[0]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && IDS.includes(hash)) setActive(hash);
  }, []);

  const switchTab = (id: string) => {
    setActive(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  const section = sections.find(s => s.id === active)!;

  return (
    <>
      {/* Tab bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="tabs-list">
            {sections.map(s => {
              const isActive = s.id === active;
              return (
                <button key={s.id} onClick={() => switchTab(s.id)} className="tab-btn" style={{
                  padding: '11px 14px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-light)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.83rem',
                  transition: 'color 0.15s, border-color 0.15s',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div style={{
            background: '#fff',
            border: '1px solid var(--color-border)',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
            {/* Header */}
            <div style={{
              padding: '20px 24px',
              borderBottom: '1px solid var(--color-border)',
              background: '#FAFBFC',
            }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, marginBottom: 6 }}>
                {section.fullTitle}
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.65 }}>
                {section.desc}
              </p>
            </div>

            {/* Services */}
            <div style={{ padding: '20px 24px' }}>
              <div style={{
                fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.8px', color: 'var(--color-text-light)',
                marginBottom: 14,
              }}>
                Перелік послуг
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '2px 24px',
              }}>
                {section.services.map(item => (
                  <div key={item} style={{
                    padding: '8px 0',
                    borderBottom: '1px solid var(--color-border)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text)',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: 'var(--color-primary)', flexShrink: 0,
                    }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Early diagnosis CTA */}
            {section.id === 'early-diagnosis' && (
              <div style={{
                margin: '0 24px 24px',
                padding: '16px 20px',
                background: '#F4F7F6',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-primary)',
                borderRadius: 7,
                display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                justifyContent: 'space-between', gap: 12,
              }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.6 }}>
                  Запис на безкоштовне профілактичне обстеження — за телефоном
                </p>
                <a href={siteConfig.contact.phoneHref} style={{
                  padding: '8px 16px', borderRadius: 6,
                  background: 'var(--color-primary)', color: '#fff',
                  fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', whiteSpace: 'nowrap',
                }}>{siteConfig.contact.phone}</a>
              </div>
            )}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 24,
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: 16,
            padding: '20px 24px',
            background: 'var(--color-primary)',
            borderRadius: 8, color: '#fff',
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>Записатися на прийом</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
                Поліклініка: понеділок — п'ятниця, 8:00–16:00
              </div>
            </div>
            <a href={siteConfig.contact.phoneHref} style={{
              display: 'inline-block', padding: '9px 20px', borderRadius: 6,
              background: '#fff', color: 'var(--color-primary-dark)',
              fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
