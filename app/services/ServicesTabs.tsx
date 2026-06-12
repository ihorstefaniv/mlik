'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/config';

const tabs = [
  { id: 'medical-exams', title: 'Медичні огляди' },
  { id: 'lab-tests',     title: 'Лабораторні дослідження' },
  { id: 'massage',       title: 'Оздоровчі масажі' },
  { id: 'other',         title: 'Інші послуги' },
];

const exams = [
  {
    title: 'Водійська комісія',
    desc: 'Повний медичний огляд для отримання або продовження водійського посвідчення.',
    items: ['Огляд терапевта', 'Огляд хірурга', 'Огляд невропатолога', 'Огляд офтальмолога', 'Огляд ЛОРа', 'Психіатр та нарколог'],
  },
  {
    title: 'Медогляд для зброї',
    desc: 'Медичне обстеження для отримання дозволу на зброю.',
    items: ['Комплексний огляд спеціалістів', 'Психіатричне обстеження', 'Наркологічне обстеження', 'Оформлення довідки'],
  },
  {
    title: 'Медогляд для роботи',
    desc: 'Попередні та періодичні медичні огляди працівників.',
    items: ['Огляд за профілем роботи', 'Необхідні аналізи', 'Флюорографія', 'Оформлення медичної книжки'],
  },
];

const labTests = [
  {
    title: 'Загальноклінічні аналізи',
    items: ['Загальний аналіз крові розгорнутий', 'Загальний аналіз сечі', 'Аналіз калу на я/г', 'Коагулограма', 'ШОЕ'],
  },
  {
    title: 'Біохімічні дослідження',
    items: ['Глюкоза крові', 'Холестерин загальний', 'Ліпідограма', 'Печінкові проби (АЛТ, АСТ, білірубін)', 'Ниркові проби (креатинін, сечовина)'],
  },
  {
    title: 'Гормональні дослідження',
    items: ['ТТГ, Т3, Т4', 'Тестостерон', 'Прогестерон, естрадіол', 'Інсулін, С-пептид', 'Кортизол'],
  },
  {
    title: 'Серологічні дослідження',
    items: ['ВІЛ-тест', 'Гепатит В, С', 'Реакція Вассермана (RW)', 'Антитіла до Helicobacter pylori'],
  },
];

const massages = [
  { title: 'Лікувальний масаж спини',        desc: 'Усунення болю, розслаблення м\'язів, покращення кровообігу' },
  { title: 'Масаж шийно-комірцевої зони',    desc: 'При головних болях, остеохондрозі, напрузі' },
  { title: 'Загальний оздоровчий масаж',     desc: 'Загальнозміцнюючий ефект для всього організму' },
  { title: 'Масаж кінцівок',                 desc: 'При захворюваннях суглобів, реабілітація після травм' },
];

const other = [
  { title: 'Ін\'єкції (внутрішньом\'язові, підшкірні)', desc: 'Виконання медичних призначень вашого лікаря' },
  { title: 'Внутрішньовенні вливання',                  desc: 'Постановка та обслуговування крапельниць' },
  { title: 'ЕКГ за направленням',                       desc: 'Електрокардіографія з розшифровкою' },
  { title: 'Медичні довідки',                            desc: 'Довідки різних форм за необхідності' },
];

const IDS = tabs.map(t => t.id);

export default function ServicesTabs() {
  const [active, setActive] = useState(IDS[0]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && IDS.includes(hash)) setActive(hash);
  }, []);

  const switchTab = (id: string) => {
    setActive(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <>
      {/* Notice */}
      <div style={{ background: '#F4F7F6', borderBottom: '1px solid var(--color-border)', padding: '10px 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.6 }}>
            Базові медичні послуги надаються безкоштовно за програмою медичних гарантій НСЗУ. Платні послуги — додаткові обстеження та процедури.
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="tabs-list">
            {tabs.map(t => {
              const isActive = t.id === active;
              return (
                <button key={t.id} onClick={() => switchTab(t.id)} className="tab-btn" style={{
                  padding: '11px 14px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-light)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.83rem',
                  transition: 'color 0.15s, border-color 0.15s',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {t.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section">
        <div className="container">

          {/* Медичні огляди */}
          {active === 'medical-exams' && (
            <div className="grid-3" style={{ gap: 16 }}>
              {exams.map(exam => (
                <div key={exam.title} style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: 8, padding: 20,
                  display: 'flex', flexDirection: 'column',
                }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 8 }}>{exam.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', lineHeight: 1.65, marginBottom: 14, flex: 1 }}>{exam.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
                    {exam.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'var(--color-text)' }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a href={siteConfig.contact.phoneHref} style={{
                    fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none',
                  }}>Записатися →</a>
                </div>
              ))}
            </div>
          )}

          {/* Лабораторні дослідження */}
          {active === 'lab-tests' && (
            <div>
              <div style={{
                display: 'grid', gap: 20,
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              }}>
                {labTests.map(group => (
                  <div key={group.title} style={{
                    background: '#fff', border: '1px solid var(--color-border)', borderRadius: 8, padding: 18,
                  }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid var(--color-border)' }}>
                      {group.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {group.items.map(item => (
                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'var(--color-text)', padding: '3px 0', borderBottom: '1px solid #f0f0f0' }}>
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 20, fontSize: '0.8rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                Актуальний прайс-лист та умови підготовки до аналізів уточнюйте за телефоном.
              </p>
            </div>
          )}

          {/* Оздоровчі масажі */}
          {active === 'massage' && (
            <div className="grid-2" style={{ gap: 12 }}>
              {massages.map(m => (
                <div key={m.title} style={{
                  background: '#fff', border: '1px solid var(--color-border)', borderRadius: 8, padding: '16px 18px',
                }}>
                  <h4 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 5 }}>{m.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', lineHeight: 1.6, margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Інші послуги */}
          {active === 'other' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {other.map((o, i) => (
                <div key={o.title} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: 12,
                  padding: '14px 18px',
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: i === 0 ? '8px 8px 0 0' : i === other.length - 1 ? '0 0 8px 8px' : 0,
                  marginTop: i === 0 ? 0 : -1,
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 2 }}>{o.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>{o.desc}</div>
                  </div>
                  <a href={siteConfig.contact.phoneHref} style={{
                    fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap',
                  }}>Записатися →</a>
                </div>
              ))}
            </div>
          )}

          {/* Price list download */}
          <div style={{
            marginTop: 32,
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: 12,
            padding: '16px 20px',
            background: '#fff',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
          }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: 2 }}>Прайс-лист на платні послуги</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Актуальні тарифи у форматі PDF</div>
            </div>
            {/* TODO: замінити /files/prices.pdf на реальний файл */}
            <a href="/files/prices.pdf" download style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '8px 16px', borderRadius: 6,
              background: 'var(--color-primary)', color: '#fff',
              fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Завантажити PDF
            </a>
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 12,
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: 16,
            padding: '20px 24px',
            background: 'var(--color-primary)', borderRadius: 8, color: '#fff',
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>Дізнатися вартість послуг</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Телефонуйте або звертайтесь до реєстратури</div>
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
