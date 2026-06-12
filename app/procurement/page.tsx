import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = { title: 'Закупівлі' };

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
        <div className="container" style={{ maxWidth: 800 }}>

          <h2 className="sh" style={{ marginBottom: 16 }}>Публічні закупівлі</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.75, marginBottom: 24 }}>
            Миколаївська міська лікарня здійснює закупівлі відповідно до законодавства України про публічні закупівлі. Всі тендери публікуються в електронній системі ProZorro.
          </p>

          <div style={{
            padding: '16px 20px',
            background: '#fff',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
            marginBottom: 32,
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 2 }}>Система ProZorro</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-light)' }}>Всі оголошення, результати торгів та укладені договори</div>
            </div>
            <a href="https://prozorro.gov.ua" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block', padding: '8px 18px', borderRadius: 6,
              background: 'var(--color-primary)', color: '#fff',
              fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              Перейти на ProZorro →
            </a>
          </div>

          {/* In progress notice */}
          <div style={{
            padding: '24px 28px',
            background: '#F4F7F6',
            border: '1px solid var(--color-border)',
            borderLeft: '3px solid var(--color-primary)',
            borderRadius: 8,
            marginBottom: 32,
          }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
              Сторінка в процесі наповнення. Документи, звіти та плани закупівель будуть розміщені найближчим часом. З питань участі в тендерах звертайтесь за контактами нижче.
            </p>
          </div>

          {/* CTA */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: 16,
            padding: '20px 24px',
            background: 'var(--color-primary)',
            borderRadius: 8, color: '#fff',
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>Для постачальників</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Питання щодо закупівель — телефоном або email</div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <a href={siteConfig.contact.phoneHref} style={{
                display: 'inline-block', padding: '8px 16px', borderRadius: 6,
                background: '#fff', color: 'var(--color-primary-dark)',
                fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', whiteSpace: 'nowrap',
              }}>{siteConfig.contact.phone}</a>
              <a href={`mailto:${siteConfig.contact.email}`} style={{
                display: 'inline-block', padding: '8px 16px', borderRadius: 6,
                border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff',
                fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none', whiteSpace: 'nowrap',
              }}>{siteConfig.contact.email}</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
