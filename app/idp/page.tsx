import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = { title: 'Для ВПО' };

const services = [
  { icon: '🏥', title: 'Безкоштовна медична допомога', desc: 'Внутрішньо переміщені особи мають право на безкоштовне медичне обслуговування нарівні з місцевими жителями за програмою державних гарантій НСЗУ.' },
  { icon: '📋', title: 'Постановка на облік', desc: "Наша лікарня приймає ВПО та ставить їх на облік без прив’язки до місця реєстрації. Для цього достатньо пред’явити довідку ВПО." },
  { icon: '💊', title: 'Доступні ліки', desc: 'ВПО мають право на отримання безкоштовних або пільгових ліків за програмою «Доступні ліки» при наявності відповідного діагнозу.' },
  { icon: '🧸', title: 'Допомога дітям', desc: 'Медична допомога дітям до 16 років надається безкоштовно незалежно від статусу переміщення.' },
];

const steps = [
  { title: 'Зверніться до реєстратури', desc: 'Зайдіть до реєстратури та повідомте, що ви є внутрішньо переміщеною особою.' },
  { title: 'Надайте документи', desc: "Пред'явіть довідку ВПО та паспорт або свідоцтво про народження (для дітей)." },
  { title: 'Постановка на облік', desc: 'Вас поставлять на облік у нашій лікарні та заведуть медичну картку.' },
  { title: 'Отримайте медичну допомогу', desc: 'Ви можете отримати всі необхідні медичні послуги безкоштовно за програмою НСЗУ.' },
];

const organizations = [
  { name: 'GRN', desc: 'Гуманітарна допомога' },
  { name: 'ASB', desc: 'Arbeiter-Samariter-Bund' },
  { name: 'DRC', desc: 'Danish Refugee Council' },
  { name: 'USAID', desc: 'Міжнародна допомога' },
];

export default function IdpPage() {
  return (
    <>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 60%, #5DADE2 100%)',
        padding: '28px 0 36px',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.9)', fontSize: 11, fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            padding: '5px 16px', borderRadius: 40, marginBottom: 16,
            border: '1px solid rgba(255,255,255,0.2)',
          }}>Миколаївська міська лікарня</div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 5vw, 3rem)', marginBottom: 12, lineHeight: 1.15 }}>
            Для внутрішньо<br />переміщених осіб
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.6 }}>
            Медична допомога для ВПО — безкоштовно та без зайвих бар'єрів
          </p>
        </div>
      </div>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <h2 className="sh center" style={{ marginBottom: 24 }}>Що ми пропонуємо ВПО</h2>
          <div className="grid-2" style={{ gap: 16 }}>
            {services.map(s => (
              <div key={s.title} className="feature-box" style={{ alignItems: 'flex-start', gap: 14 }}>
                <div className="feature-icon" style={{ fontSize: '1.3rem', width: 44, height: 44 }}>{s.icon}</div>
                <div>
                  <h4 style={{ marginBottom: 6 }}>{s.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + text section */}
      <section className="section" style={{ background: '#f8fffe' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: 32, alignItems: 'center' }} className="idp-grid">
            <div style={{ borderRadius: 14, overflow: 'hidden', height: 280 }}>
              <Image
                src="/assets/images/vpo/p1.jpg"
                alt="Допомога ВПО"
                width={600} height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div>
              <span style={{ color: 'var(--color-primary)', fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>Ваші права</span>
              <h2 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', marginBottom: 14 }}>
                Медична допомога без бар'єрів
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: 16 }}>
                Відповідно до законодавства України, внутрішньо переміщені особи мають право на отримання медичної допомоги за місцем фактичного проживання.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: 20 }}>
                Наша лікарня повністю підтримує програму допомоги ВПО та готова надати всі необхідні медичні послуги в рамках програми державних гарантій.
              </p>
              <a href={siteConfig.contact.phoneHref} className="btn-primary">
                📞 Зв'язатися з нами
              </a>
            </div>
          </div>
        </div>
        <style>{`.idp-grid { @media (min-width:768px) { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <h2 className="sh center" style={{ marginBottom: 24 }}>Як отримати допомогу</h2>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <ol className="step-list">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <div className="step-num">{i + 1}</div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: 4 }}>{step.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section" style={{ background: 'var(--color-bg-blue-light)' }}>
        <div className="container">
          <h2 className="sh center" style={{ marginBottom: 20 }}>Наші партнери</h2>
          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-light)', marginBottom: 24 }}>
            У роботі з ВПО ми співпрацюємо з міжнародними та українськими організаціями
          </p>
          <div className="grid-4" style={{ gap: 12 }}>
            {organizations.map(org => (
              <div key={org.name} className="card" style={{ padding: 20, textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 8, fontWeight: 800, color: 'var(--color-primary)' }}>{org.name}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>{org.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-card">
            <h2>Маєте запитання?</h2>
            <p>Зателефонуйте нам або завітайте до реєстратури — ми готові допомогти</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
              <a href={siteConfig.contact.phoneHref} className="btn-white">📞 {siteConfig.contact.phone}</a>
              <Link href="/contacts/" style={{
                padding: '10px 24px', borderRadius: 24, border: '2px solid rgba(255,255,255,0.4)',
                color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem',
              }}>Контакти</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
