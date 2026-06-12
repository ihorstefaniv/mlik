import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, nszuPackages } from '@/lib/config';

export const metadata: Metadata = { title: 'Головна' };

// TODO: замінити на реальний URL Doctor Eleks
const BOOKING_URL = '#';

const services = [
  {
    title: 'Амбулаторна допомога',
    desc: 'Консультації спеціалістів, УЗД, лабораторія, рентгенодіагностика та профілактичні огляди.',
    href: '/ambulatory/',
  },
  {
    title: 'Стаціонарна допомога',
    desc: 'Цілодобове лікування у терапевтичному, хірургічному, акушерсько-гінекологічному, дитячому та інших відділеннях.',
    href: '/inpatient/',
  },
  {
    title: 'Діагностика',
    desc: 'УЗД експертного класу, цифровий рентген, клінічна лабораторія та ендоскопічна діагностика.',
    href: '/ambulatory/#ultrasound',
  },
  {
    title: 'Платні послуги',
    desc: 'Медичні огляди для водіїв, на зброю, для роботи. Лабораторні дослідження та оздоровчі масажі.',
    href: '/services/',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #4A9B8E 0%, #3A7B6E 100%)',
        padding: 'clamp(32px, 5vw, 52px) 0',
      }}>
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gap: 40, alignItems: 'center' }}>
            <div style={{ color: '#fff' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.8, marginBottom: 14 }}>
                Миколаїв, Львівська область
              </p>
              <h1 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 700, lineHeight: 1.2,
                marginBottom: 16, letterSpacing: '-0.02em',
              }}>
                Миколаївська міська лікарня
              </h1>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, opacity: 0.9, marginBottom: 28, maxWidth: 480 }}>
                Медична допомога вторинного рівня. Амбулаторне та стаціонарне лікування, сучасна діагностика. Більшість послуг — безкоштовно за договором з НСЗУ.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
                <a href={BOOKING_URL} style={{
                  display: 'inline-block', padding: '11px 22px', borderRadius: 6,
                  background: '#fff', color: '#3A7B6E',
                  fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}>Записатися на прийом</a>
                <a href={siteConfig.contact.phoneHref} style={{
                  display: 'inline-block', padding: '11px 22px', borderRadius: 6,
                  background: 'transparent', color: '#fff',
                  fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                }}>{siteConfig.contact.phone}</a>
              </div>
              <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 20 }}>
                {[['50+', 'Лікарів'], ['24/7', 'Стаціонар'], ['12', 'Пакети НСЗУ']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1 }}>{val}</div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.25)' }}>
              <video autoPlay muted loop playsInline style={{ width: '100%', height: 'auto', display: 'block' }}>
                <source src="/assets/images/hospital-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <style>{`.hero-grid { @media (min-width: 900px) { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      {/* Services */}
      <section style={{ padding: '48px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 700, marginBottom: 8 }}>Напрямки допомоги</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginBottom: 28, maxWidth: 560 }}>
            Лікарня надає первинну та спеціалізовану медичну допомогу мешканцям Миколаєва та Львівської області.
          </p>
          <div className="grid-4">
            {services.map(s => (
              <Link key={s.title} href={s.href} className="service-card">
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 8, color: 'var(--color-text)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', lineHeight: 1.6, marginBottom: 12 }}>{s.desc}</p>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>Детальніше →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* НСЗУ */}
      <section style={{ padding: '40px 0', background: '#F4F7F6', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="nszu-grid" style={{ display: 'grid', gap: 40, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 10 }}>
                Програма медичних гарантій
              </p>
              <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 700, marginBottom: 12 }}>
                Безкоштовна медична допомога за договором з НСЗУ
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.75, marginBottom: 16 }}>
                Лікарня уклала договір з Національною службою здоров'я України та надає медичну допомогу за 12 пакетами — безкоштовно для пацієнтів. Для отримання послуг необхідне направлення від лікаря або звернення до приймального відділення.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.75, marginBottom: 20 }}>
                Також діє програма «Доступні ліки» — безоплатні або пільгові медикаменти для пацієнтів з хронічними захворюваннями за рецептом лікаря.
              </p>
              <Link href="/contacts/" style={{
                display: 'inline-block', padding: '9px 18px', borderRadius: 6,
                background: 'var(--color-primary)', color: '#fff',
                fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
              }}>Дізнатися більше</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {nszuPackages.map(group => (
                <div key={group.group} style={{
                  padding: '10px 14px',
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderLeft: `3px solid ${group.color}`,
                  borderRadius: 6,
                  fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)',
                }}>
                  {group.group}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`.nszu-grid { @media (min-width: 768px) { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      {/* VPO + Contact strip */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="bottom-grid" style={{ display: 'grid', gap: 16 }}>

            <div style={{
              padding: '24px',
              background: '#fff',
              border: '1px solid var(--color-border)',
              borderRadius: 8,
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>Допомога внутрішньо переміщеним особам</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', lineHeight: 1.7, marginBottom: 14 }}>
                ВПО мають право на медичну допомогу за місцем фактичного проживання. Лікарня приймає переміщених осіб та ставить на облік без прив'язки до місця реєстрації. Дітям до 16 років — безкоштовно.
              </p>
              <Link href="/idp/" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                Детальніше про допомогу ВПО →
              </Link>
            </div>

            <div style={{
              padding: '24px',
              background: 'var(--color-primary)',
              borderRadius: 8,
              color: '#fff',
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8, color: '#fff' }}>Запис на прийом</h3>
              <p style={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.7, marginBottom: 16 }}>
                Запис проводиться через систему Doctor Eleks та застосунок для пацієнтів. Також можна зателефонувати або звернутися до реєстратури.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href={BOOKING_URL} style={{
                  display: 'block', textAlign: 'center', padding: '9px 18px', borderRadius: 6,
                  background: '#fff', color: 'var(--color-primary-dark)',
                  fontSize: '0.875rem', fontWeight: 700, textDecoration: 'none',
                }}>Онлайн-запис через Doctor Eleks</a>
                <a href={siteConfig.contact.phoneHref} style={{
                  display: 'block', textAlign: 'center', padding: '9px 18px', borderRadius: 6,
                  border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff',
                  fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none',
                }}>{siteConfig.contact.phone}</a>
              </div>
            </div>

          </div>
        </div>
        <style>{`.bottom-grid { @media (min-width: 768px) { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>
    </>
  );
}
