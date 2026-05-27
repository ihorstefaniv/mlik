import Link from 'next/link';
import { navItems, partners, siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Partners strip */}
      <div className="partners-strip">
        <div className="container">
          <div className="partners-list">
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.5px', marginRight: 4 }}>
              Партнери:
            </span>
            {partners.map(p => (
              <span key={p} className="partner-badge">{p}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* Col 1 — logo + desc */}
          <div>
            <div className="footer-logo">🏥 {siteConfig.name}</div>
            <p className="footer-desc">
              Медична допомога вторинного рівня для мешканців міста Миколаїв та Львівської області.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <a href={siteConfig.social.facebook} className="social-link" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href={siteConfig.social.instagram} className="social-link" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — nav */}
          <div>
            <div className="footer-heading">Навігація</div>
            <ul className="footer-nav">
              {navItems.map(item => (
                <li key={item.id}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — departments */}
          <div>
            <div className="footer-heading">Відділення</div>
            <ul className="footer-nav">
              <li><Link href="/inpatient/#therapy">Терапевтичне</Link></li>
              <li><Link href="/inpatient/#surgery">Хірургічне</Link></li>
              <li><Link href="/inpatient/#gynecology">Акушерсько-гінекологічне</Link></li>
              <li><Link href="/inpatient/#pediatrics">Дитяче</Link></li>
              <li><Link href="/inpatient/#rehabilitation">Реабілітаційне</Link></li>
              <li><Link href="/ambulatory/">Поліклініка</Link></li>
            </ul>
          </div>

          {/* Col 4 — contacts */}
          <div>
            <div className="footer-heading">Контакти</div>
            <ul className="footer-nav" style={{ gap: 8 }}>
              <li style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem' }}>
                📍 {siteConfig.contact.address}, {siteConfig.contact.city}
              </li>
              <li>
                <a href={siteConfig.contact.phoneHref} style={{ fontWeight: 700, color: 'var(--color-accent)' }}>
                  📞 {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`}>
                  ✉️ {siteConfig.contact.email}
                </a>
              </li>
              <li style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                🕐 Поліклініка: Пн–Пт 8:00–16:00<br />
                Стаціонар: цілодобово
              </li>
            </ul>
          </div>
        </div>

        {/* USAID notice */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 14, paddingBottom: 14,
          fontSize: '0.72rem',
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.6,
        }}>
          {siteConfig.usaid}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between', alignItems: 'center' }}>
            <span>© {siteConfig.developer.year} {siteConfig.name}. Всі права захищені.</span>
            <span>
              Розробка:{' '}
              <a href={siteConfig.developer.url} target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--color-accent)' }}>
                {siteConfig.developer.name}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
