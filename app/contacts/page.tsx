import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = { title: 'Контакти' };

const contactItems = [
  {
    icon: '📍',
    label: 'Адреса',
    value: `${siteConfig.contact.address}, ${siteConfig.contact.city}, ${siteConfig.contact.region}, ${siteConfig.contact.zip}`,
  },
  { icon: '📞', label: 'Телефон', value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
  { icon: '✉️', label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: '🕐', label: 'Графік роботи', value: 'Поліклініка: Пн–Пт 8:00–16:00\nСтаціонар: цілодобово' },
];

export default function ContactsPage() {
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
                  {contactItems.map(c => (
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

              <div style={{ marginTop: 16 }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginBottom: 8 }}>Ми в соцмережах:</p>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a href={siteConfig.social.facebook} style={{
                    background: '#1877F2', color: '#fff',
                    padding: '7px 14px', borderRadius: 8, fontSize: '0.82rem', fontWeight: 600,
                    textDecoration: 'none', display: 'inline-block',
                  }}>Facebook</a>
                  <a href={siteConfig.social.instagram} style={{
                    background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                    color: '#fff',
                    padding: '7px 14px', borderRadius: 8, fontSize: '0.82rem', fontWeight: 600,
                    textDecoration: 'none', display: 'inline-block',
                  }}>Instagram</a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="sh" style={{ marginBottom: 16 }}>Зворотній зв'язок</h2>
              <div className="card" style={{ padding: 20 }}>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={{ marginTop: 32 }}>
            <h2 className="sh" style={{ marginBottom: 16 }}>Як нас знайти</h2>
            <div className="map-wrap">
              <iframe
                src="https://maps.google.com/maps?q=49.528139,23.967871&z=17&output=embed&hl=uk"
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
