import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, nszuPackages } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Головна',
};

const whyUs = [
  { icon: '🏆', title: 'Досвідчені спеціалісти',   desc: 'Лікарі з багаторічним досвідом та постійним підвищенням кваліфікації' },
  { icon: '🔬', title: 'Сучасна діагностика',       desc: 'УЗД експертного класу, цифровий рентген, власна лабораторія' },
  { icon: '💊', title: 'Програма «Доступні ліки»',  desc: 'Безкоштовні або пільгові ліки для пацієнтів з хронічними захворюваннями' },
  { icon: '⏰', title: 'Цілодобовий стаціонар',      desc: 'Приймальне відділення та інтенсивна терапія працюють 24/7' },
  { icon: '🤝', title: 'Програма медичних гарантій', desc: 'Більшість послуг — безкоштовно за договором з НСЗУ' },
  { icon: '🧸', title: 'Допомога ВПО та дітям',     desc: 'Безоплатна медична допомога для переміщених осіб та дітей до 16 років' },
];

const services = [
  { icon: '🩺', title: 'Поліклініка',    desc: 'Консультації спеціалістів та амбулаторне лікування',   href: '/ambulatory/' },
  { icon: '🔬', title: 'Діагностика',    desc: 'УЗД, рентген, лабораторні дослідження',                href: '/ambulatory/#ultrasound' },
  { icon: '🏥', title: 'Стаціонар',      desc: 'Терапевтичне, хірургічне, акушерське відділення',      href: '/inpatient/' },
  { icon: '💼', title: 'Платні послуги', desc: 'Медичні огляди та додаткові обстеження',               href: '/services/' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #4A9B8E 0%, #3A7B6E 100%)',
        padding: 'clamp(24px, 5vw, 36px) 0 clamp(28px, 5vw, 40px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
        }} />
        <div className="container">
          <div style={{ display: 'grid', gap: 28, alignItems: 'center', position: 'relative', zIndex: 1 }} className="hero-grid">
            <div style={{ color: '#fff' }}>
              <div style={{
                display: 'inline-block', padding: '4px 13px',
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)',
                borderRadius: 50, fontSize: 11, fontWeight: 600,
                marginBottom: 10, border: '1px solid rgba(255,255,255,0.2)',
              }}>🏥 Сучасна медицина</div>
              <h1 style={{
                fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
                fontWeight: 800, lineHeight: 1.15,
                marginBottom: 10, letterSpacing: '-0.03em',
              }}>
                Турбуємося про{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #fff 0%, #e0f7f4 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>ваше здоров&apos;я</span>
              </h1>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.95, marginBottom: 14 }}>
                Професійна медична допомога від досвідчених спеціалістів. Сучасне обладнання та індивідуальний підхід до кожного пацієнта.
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                <Link href="/contacts/" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '9px 16px', borderRadius: 9,
                  background: '#fff', color: '#3A7B6E',
                  fontWeight: 700, fontSize: 13, textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>Записатися на прийом →</Link>
                <Link href="/about/" style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '9px 16px', borderRadius: 9,
                  background: 'transparent', color: '#fff',
                  fontWeight: 600, fontSize: 13, textDecoration: 'none',
                  border: '2px solid rgba(255,255,255,0.3)',
                }}>Дізнатись більше</Link>
              </div>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
                {[['50+', 'Лікарів'], ['20+', 'Років досвіду'], ['24/7', 'Стаціонар']].map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{num}</div>
                    <div style={{ fontSize: 11, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}>
                <video autoPlay muted loop playsInline
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                >
                  <source src="/assets/images/hospital-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <style>{`.hero-grid { @media (min-width:900px) { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* НСЗУ Packages */}
      <section style={{ padding: '36px 0', background: '#FAFBFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{
              display: 'inline-block', padding: '3px 12px',
              background: '#E8F5F3', color: 'var(--color-primary)',
              borderRadius: 50, fontSize: 11, fontWeight: 600, marginBottom: 10,
            }}>Безкоштовно за програмою НСЗУ</span>
            <h2 className="sh center" style={{ paddingBottom: 0 }}>Державні медичні гарантії</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', maxWidth: 580, margin: '10px auto 0', lineHeight: 1.6 }}>
              Лікарня уклала договір з НСЗУ та надає медичну допомогу за 12 пакетами — безкоштовно для пацієнтів
            </p>
          </div>

          <div style={{ display: 'grid', gap: 16 }} className="nszu-grid">
            {nszuPackages.map(group => (
              <div key={group.group} style={{
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}>
                {/* Group header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '12px 18px',
                  background: `${group.color}12`,
                  borderBottom: `1px solid ${group.color}28`,
                }}>
                  <span style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: group.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', flexShrink: 0,
                  }}>{group.icon}</span>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, margin: 0, color: 'var(--color-text)' }}>
                    {group.group}
                  </h3>
                  <span style={{
                    marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 700,
                    color: group.color, background: `${group.color}18`,
                    padding: '2px 8px', borderRadius: 20,
                    border: `1px solid ${group.color}33`,
                    flexShrink: 0,
                  }}>{group.items.length} пакети</span>
                </div>
                {/* Items */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {group.items.map((pkg, i) => (
                    <li key={pkg.num} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      padding: '10px 18px',
                      borderBottom: i < group.items.length - 1 ? '1px solid var(--color-border)' : 'none',
                    }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        minWidth: 28, height: 22, borderRadius: 6,
                        background: `${group.color}18`,
                        color: group.color, fontSize: '0.7rem', fontWeight: 800,
                        flexShrink: 0, marginTop: 1,
                      }}>#{pkg.num}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                        {pkg.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: 18, fontSize: '0.78rem', color: 'var(--color-text-light)' }}>
            Для отримання послуг за пакетами НСЗУ необхідне направлення від лікаря або звернення до приймального відділення
          </p>
        </div>
      </section>
      <style>{`.nszu-grid { @media (min-width:768px) { grid-template-columns: 1fr 1fr !important; } }`}</style>

      {/* Why us */}
      <section style={{ padding: '24px 0', background: 'var(--color-bg-blue-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <span style={{
              display: 'inline-block', padding: '3px 12px',
              background: '#E8F5F3', color: 'var(--color-primary)',
              borderRadius: 50, fontSize: 11, fontWeight: 600, marginBottom: 8,
            }}>Наші переваги</span>
            <h2 className="sh center" style={{ paddingBottom: 0 }}>Чому обирають нас</h2>
          </div>
          <div className="why-grid" style={{ display: 'grid', gap: 10 }}>
            {whyUs.map(w => (
              <div key={w.title} style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                background: '#fff', padding: 14, borderRadius: 12,
                boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: '#E8F5F3',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.25rem', flexShrink: 0,
                }}>{w.icon}</div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 4 }}>{w.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`.why-grid { @media (min-width:600px) { grid-template-columns: 1fr 1fr !important; } @media (min-width:900px) { grid-template-columns: repeat(3,1fr) !important; } }`}</style>
      </section>

      {/* Services */}
      <section style={{ padding: '24px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <span style={{
              display: 'inline-block', padding: '3px 12px',
              background: '#E8F5F3', color: 'var(--color-primary)',
              borderRadius: 50, fontSize: 11, fontWeight: 600, marginBottom: 8,
            }}>Що ми пропонуємо</span>
            <h2 className="sh center" style={{ paddingBottom: 0 }}>Наші послуги</h2>
          </div>
          <div className="grid-4" style={{ marginTop: 16 }}>
            {services.map(s => (
              <Link key={s.title} href={s.href} style={{
                display: 'flex', flexDirection: 'column',
                background: '#fff', padding: 16, borderRadius: 12,
                boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)',
                textDecoration: 'none', color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                <div style={{ fontSize: '1.7rem', marginBottom: 8 }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8, color: 'var(--color-text)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', lineHeight: 1.5, flex: 1 }}>{s.desc}</p>
                <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: 13, marginTop: 12 }}>Детальніше →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '24px 0',
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} className="cta-inner">
            <div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 800, marginBottom: 4 }}>
                Потрібна консультація?
              </h2>
              <p style={{ color: '#fff', opacity: 0.9, fontSize: '0.9rem' }}>
                Зв&apos;яжіться з нами для запису на прийом або отримання інформації
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={siteConfig.contact.phoneHref} style={{
                background: '#fff', color: '#3A7B6E',
                padding: '11px 20px', borderRadius: 10,
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 7,
              }}>📞 {siteConfig.contact.phone}</a>
              <Link href="/contacts/" style={{
                background: 'transparent', color: '#fff',
                border: '2px solid rgba(255,255,255,0.3)',
                padding: '11px 20px', borderRadius: 10,
                fontWeight: 600, fontSize: 14, textDecoration: 'none',
              }}>Контакти</Link>
            </div>
          </div>
        </div>
        <style>{`.cta-inner { @media (min-width:768px) { flex-direction: row !important; justify-content: space-between; align-items: center; } }`}</style>
      </section>
    </>
  );
}
