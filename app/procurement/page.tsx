import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Закупівлі' };

const categories = [
  { icon: '💊', title: 'Медикаменти та витратні матеріали', desc: "Ліки, перев'язувальні матеріали, одноразові вироби, реагенти для лабораторії" },
  { icon: '🔬', title: 'Медичне обладнання', desc: 'Діагностичне, лікувальне та реанімаційне обладнання' },
  { icon: '🧹', title: 'Господарські товари', desc: 'Засоби гігієни, прибиральний інвентар, постільна білизна' },
  { icon: '🍽️', title: 'Харчування пацієнтів', desc: 'Продукти харчування для організації дієтичного харчування' },
  { icon: '🔧', title: 'Ремонт та обслуговування', desc: 'Ремонтні роботи, технічне обслуговування обладнання' },
  { icon: '💡', title: 'Комунальні ресурси', desc: 'Електроенергія, газ, вода, теплопостачання' },
];

const steps = [
  { title: 'Планування', desc: 'Формування річного плану закупівель відповідно до потреб закладу та затвердженого бюджету.' },
  { title: 'Оголошення торгів', desc: 'Публікація оголошення про закупівлю в системі ProZorro з технічним завданням та умовами.' },
  { title: 'Прийом пропозицій', desc: 'Учасники подають свої тендерні пропозиції через електронну систему.' },
  { title: 'Оцінка та визначення переможця', desc: 'Тендерний комітет розглядає пропозиції та визначає переможця згідно з критеріями.' },
  { title: 'Укладення договору', desc: 'Підписання договору з переможцем та публікація результатів в системі ProZorro.' },
];

const reports = [
  { icon: '📋', title: 'Звіт за 2024 рік', desc: 'Річний звіт про виконання плану закупівель' },
  { icon: '📊', title: 'План закупівель на 2025 рік', desc: 'Затверджений план державних закупівель' },
  { icon: '📄', title: 'Реєстр договорів', desc: 'Перелік укладених договорів за останній рік' },
];

export default function ProcurementPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Закупівлі</h1>
          <p>Прозорість та відкритість у державних закупівлях</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Intro */}
          <div className="card" style={{ padding: 24, marginBottom: 32 }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: 16 }}>
              Миколаївська міська лікарня здійснює закупівлі медичного обладнання, ліків, витратних матеріалів та послуг у відповідності до законодавства України про публічні закупівлі.
            </p>
            <div style={{ background: 'var(--color-bg-blue-light)', borderRadius: 8, padding: '14px 18px' }}>
              <h4 style={{ fontWeight: 700, marginBottom: 8, fontSize: '0.9rem' }}>Принципи закупівель:</h4>
              <ul className="ul-list">
                {['Прозорість та публічність', 'Конкурентність та економічність', 'Рівність та недискримінація учасників', 'Дотримання законодавства'].map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* ProZorro */}
          <div style={{ marginBottom: 40 }}>
            <h2 className="sh">Електронна система закупівель</h2>
            <div className="grid-2" style={{ marginTop: 16 }}>
              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 10 }}>Система ProZorro</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7, marginBottom: 14 }}>
                  Всі закупівлі лікарні проводяться через систему електронних публічних закупівель ProZorro, що забезпечує максимальну прозорість процесу.
                </p>
                <a href="https://prozorro.gov.ua" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Перейти на ProZorro →
                </a>
              </div>
              <div className="card" style={{ padding: 20 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 10, color: 'var(--color-primary)' }}>Що можна знайти</h3>
                <ul className="ul-list">
                  {['Плани закупівель', 'Оголошення про торги', 'Умови та вимоги до учасників', 'Результати торгів', 'Укладені договори', 'Звіти про виконання'].map(i => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div style={{ marginBottom: 40 }}>
            <h2 className="sh">Категорії закупівель</h2>
            <div className="grid-3" style={{ marginTop: 16 }}>
              {categories.map(c => (
                <div key={c.title} style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                  color: '#fff', padding: '24px 20px', borderRadius: 12, textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: 10 }}>{c.icon}</div>
                  <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ opacity: 0.9, fontSize: '0.82rem', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div style={{ marginBottom: 40 }}>
            <h2 className="sh">Процедура закупівель</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
              {steps.map((step, i) => (
                <div key={step.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: 'var(--color-primary)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '1.1rem', flexShrink: 0,
                  }}>{i + 1}</div>
                  <div>
                    <h4 style={{ fontWeight: 700, marginBottom: 4 }}>{step.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reports */}
          <div style={{ marginBottom: 40 }}>
            <h2 className="sh">Звіти та документи</h2>
            <div className="grid-3" style={{ marginTop: 16 }}>
              {reports.map(r => (
                <div key={r.title} className="card" style={{ padding: 20, textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{r.icon}</div>
                  <h4 style={{ fontSize: '1rem', marginBottom: 4 }}>{r.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-light)' }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts for suppliers */}
          <div className="cta-card">
            <h2>Для постачальників</h2>
            <p>Всі питання щодо участі в тендерах та закупівлях надсилайте на email або телефонуйте</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
              <a href="tel:+380675600610" className="btn-white">📞 +38 067 5 600 610</a>
              <a href="mailto:mukolaiv_kcrl@ukr.net" className="btn-white">✉️ mukolaiv_kcrl@ukr.net</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
