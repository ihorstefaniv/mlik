'use client';

import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

// Note: metadata export can't be in 'use client', moved to separate component
// Using suppressHydrationWarning for form submission

const contacts = [
  { icon: '📍', label: 'Адреса', value: `${siteConfig.contact.address}, ${siteConfig.contact.city}, ${siteConfig.contact.region}, ${siteConfig.contact.zip}` },
  { icon: '📞', label: 'Телефон', value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
  { icon: '✉️', label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: '🕐', label: 'Графік роботи', value: 'Поліклініка: Пн–Пт 8:00–16:00\nСтаціонар: цілодобово' },
];

export default function ContactsPage() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.');
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Контакти</h1>
          <p>Як з нами зв'язатися</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 24 }}>
            {/* Contact info */}
            <div>
              <h2 className="sh" style={{ marginBottom: 16 }}>Контактна інформація</h2>
              <div className="card" style={{ padding: 20 }}>
                <div className="contact-block">
                  {contacts.map(c => (
                    <div key={c.label} className="contact-item">
                      <div className="contact-icon">{c.icon}</div>
                      <div>
                        <strong>{c.label}</strong>
                        {c.href ? (
                          <a href={c.href} style={{ display: 'block' }}>{c.value}</a>
                        ) : (
                          <span style={{ display: 'block', whiteSpace: 'pre-line' }}>{c.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div style={{ marginTop: 16 }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginBottom: 8 }}>Ми в соцмережах:</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a href={siteConfig.social.facebook} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: '#1877F2', color: '#fff',
                    padding: '7px 14px', borderRadius: 8, fontSize: '0.82rem', fontWeight: 600,
                    textDecoration: 'none',
                  }}>Facebook</a>
                  <a href={siteConfig.social.instagram} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                    color: '#fff',
                    padding: '7px 14px', borderRadius: 8, fontSize: '0.82rem', fontWeight: 600,
                    textDecoration: 'none',
                  }}>Instagram</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="sh" style={{ marginBottom: 16 }}>Зворотній зв'язок</h2>
              <div className="card" style={{ padding: 20 }}>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Ваше ім'я *</label>
                    <input type="text" required className="form-input" placeholder="Введіть ваше ім'я" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" required className="form-input" placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Телефон</label>
                    <input type="tel" className="form-input" placeholder="+380" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Тема звернення</label>
                    <select className="form-select">
                      <option>Запис на прийом</option>
                      <option>Консультація</option>
                      <option>Скарга чи пропозиція</option>
                      <option>Інше</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Повідомлення *</label>
                    <textarea required rows={5} className="form-textarea" placeholder="Опишіть ваше питання..." />
                  </div>
                  <button type="submit" style={{
                    width: '100%', background: 'var(--color-primary)', color: '#fff',
                    border: 'none', borderRadius: 10, padding: '11px', cursor: 'pointer',
                    fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-sans)',
                    transition: 'background 0.2s',
                  }}>Відправити повідомлення</button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={{ marginTop: 32 }}>
            <h2 className="sh" style={{ marginBottom: 16 }}>Як нас знайти</h2>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.8!2d24.0!3d49.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM2JzAwLjAiTiAyNMKwMDAnMDAuMCJF!5e0!3m2!1suk!2sua!4v1234567890"
                width="100%" height="350"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
