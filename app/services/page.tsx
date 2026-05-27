import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = { title: 'Платні послуги' };

const exams = [
  {
    accent: 'var(--color-primary)',
    icon: '🚗',
    title: 'Водійська комісія',
    desc: 'Повний медичний огляд для отримання або продовження водійського посвідчення.',
    items: ['Огляд терапевта', 'Огляд хірурга', 'Огляд невропатолога', 'Огляд офтальмолога', 'Огляд ЛОРа', 'Психіатр та нарколог'],
  },
  {
    accent: 'var(--color-secondary)',
    icon: '🔫',
    title: 'Медогляд для зброї',
    desc: 'Медичне обстеження для отримання дозволу на зброю.',
    items: ['Комплексний огляд спеціалістів', 'Психіатричне обстеження', 'Наркологічне обстеження', 'Оформлення довідки'],
  },
  {
    accent: 'var(--color-accent)',
    icon: '💼',
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
  { title: 'Лікувальний масаж спини', desc: 'Усунення болю, розслаблення м\'язів, покращення кровообігу' },
  { title: 'Масаж шийно-комірцевої зони', desc: 'При головних болях, остеохондрозі, напрузі' },
  { title: 'Загальний оздоровчий масаж', desc: 'Загальнозміцнюючий ефект для всього організму' },
  { title: 'Масаж кінцівок', desc: 'При захворюваннях суглобів, реабілітація після травм' },
];

const other = [
  { icon: '💉', title: 'Ін\'єкції (внутрішньом\'язові, підшкірні)', desc: 'Виконання медичних призначень вашого лікаря' },
  { icon: '🩸', title: 'Внутрішньовенні вливання', desc: 'Постановка та обслуговування крапельниць' },
  { icon: '🩺', title: 'ЕКГ за направленням', desc: 'Електрокардіографія з розшифровкою' },
  { icon: '📋', title: 'Медичні довідки', desc: 'Довідки різних форм за необхідності' },
];

export default function ServicesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Платні послуги</h1>
          <p>Додаткові медичні послуги для вашого здоров'я</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Notice */}
          <div style={{
            background: 'var(--color-bg-blue-light)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-primary)',
            borderRadius: 8, padding: '14px 18px', marginBottom: 32,
            fontSize: '0.875rem', lineHeight: 1.7,
          }}>
            <strong>Важливо:</strong> Всі базові медичні послуги надаються безкоштовно за програмою медичних гарантій. Платні послуги — це додаткові обстеження та процедури за вашим бажанням.
          </div>

          {/* Medical exams */}
          <div id="medical-exams" style={{ marginBottom: 40 }}>
            <h2 className="sh">Медичні огляди</h2>
            <div className="grid-3" style={{ marginTop: 16 }}>
              {exams.map(exam => (
                <div key={exam.title} style={{
                  background: '#fff',
                  borderRadius: 12, padding: 22,
                  boxShadow: 'var(--shadow-sm)',
                  borderTop: `4px solid ${exam.accent}`,
                  display: 'flex', flexDirection: 'column',
                }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: '1.05rem' }}>
                    {exam.icon} {exam.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7, marginBottom: 10, flex: 1 }}>{exam.desc}</p>
                  <ul style={{ paddingLeft: 18, color: 'var(--color-text-light)', fontSize: '0.875rem', lineHeight: 1.9, marginBottom: 14 }}>
                    {exam.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <div style={{ paddingTop: 12, borderTop: '1px solid var(--color-border)' }}>
                    <a href={siteConfig.contact.phoneHref} style={{ color: exam.accent, fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                      Записатися →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lab tests */}
          <div id="lab-tests" style={{ marginBottom: 40 }}>
            <h2 className="sh">Лабораторні дослідження</h2>
            <div className="card" style={{ padding: 20, marginTop: 16 }}>
              <div style={{ display: 'grid', gap: 18 }} className="lab-grid">
                {labTests.map(group => (
                  <div key={group.title}>
                    <h3 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: 8 }}>{group.title}</h3>
                    <ul className="ul-list">
                      {group.items.map(i => <li key={i}>{i}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 16, fontSize: '0.82rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                * Актуальний прайс-лист та умови підготовки до аналізів уточнюйте за телефоном.
              </p>
            </div>
          </div>

          {/* Massage */}
          <div id="massage" style={{ marginBottom: 40 }}>
            <h2 className="sh">Оздоровчі масажі</h2>
            <div className="grid-2" style={{ marginTop: 16 }}>
              {massages.map(m => (
                <div key={m.title} className="card" style={{ padding: 18 }}>
                  <h4 style={{ fontWeight: 700, marginBottom: 6 }}>{m.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other */}
          <div id="other" style={{ marginBottom: 40 }}>
            <h2 className="sh">Інші послуги</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
              {other.map(o => (
                <div key={o.title} style={{
                  display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                  justifyContent: 'space-between', gap: 10,
                  background: '#fff', padding: '16px 18px',
                  borderRadius: 10, boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--color-border)',
                }}>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: 3 }}>{o.icon} {o.title}</h4>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.85rem' }}>{o.desc}</p>
                  </div>
                  <a href={siteConfig.contact.phoneHref} style={{
                    color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.875rem',
                    textDecoration: 'none', whiteSpace: 'nowrap',
                  }}>Записатися →</a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="cta-card">
            <h2>Потрібна консультація?</h2>
            <p>Зателефонуйте та дізнайтеся вартість послуг та умови запису</p>
            <a href={siteConfig.contact.phoneHref} className="btn-white" style={{ marginTop: 16, display: 'inline-block' }}>
              📞 {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>

      <style>{`.lab-grid { @media (min-width:600px) { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </>
  );
}
