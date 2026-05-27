import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = { title: 'Про нас' };

const intro = [
  { icon: '🏥', text: 'Миколаївська міська лікарня — це медична допомога вторинного рівня.' },
  { icon: '🚑', text: 'Ви можете отримати невідкладну допомогу в будь-який час доби.' },
  { icon: '🌙', text: 'Стаціонар працює цілодобово без вихідних та свят.' },
  { icon: '💬', text: 'Звернувшись до нас, ви отримаєте вичерпну консультацію та якісну поліклінічну, стаціонарну і діагностичну допомогу.' },
  { icon: '🛏️', text: 'Ми дбаємо про комфортні умови перебування в нашій лікарні.' },
  { icon: '👨‍⚕️', text: 'Фаховий медичний персонал постійно удосконалює свої знання та впроваджує сучасні методи лікування.' },
];

const gallery = [
  '/assets/images/about/p2.jpg',
  '/assets/images/about/p3.jpg',
  '/assets/images/about/p4.jpg',
  '/assets/images/about/p5.jpg',
  '/assets/images/about/p6.jpg',
  '/assets/images/about/p7.jpg',
  '/assets/images/about/p8.jpg',
  '/assets/images/about/p9.jpg',
];

const admins = [
  {
    photo: '/assets/images/about/Одноріг_edited.jpg',
    name: 'Одноріг Сергій Михайлович',
    role: 'Головний лікар',
  },
  {
    photo: '/assets/images/about/Пришляк_edited_edited.jpg',
    name: 'Пришляк Оксана Романівна',
    role: 'Заступник головного лікаря з медичних питань',
  },
  {
    photo: '/assets/images/about/avatar.jpg',
    name: 'Адміністративний персонал',
    role: 'Керівництво закладу',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <h1>Про заклад</h1>
          <p>Медична допомога вторинного рівня з турботою про кожного пацієнта</p>
        </div>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gap: 32, alignItems: 'center' }} className="intro-grid">
            <div style={{ position: 'relative' }}>
              <Image
                src="/assets/images/about/p1.jpg"
                alt="Миколаївська міська лікарня"
                width={600} height={380}
                style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 16, display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: -14, right: 14,
                background: 'var(--color-primary)', color: '#fff',
                padding: '10px 16px', borderRadius: 10, textAlign: 'center',
                boxShadow: 'var(--shadow)',
              }}>
                <strong style={{ display: 'block', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>24/7</strong>
                <span style={{ fontSize: '0.72rem', opacity: 0.9 }}>Цілодобово</span>
              </div>
            </div>
            <div>
              <span style={{ display: 'inline-block', color: 'var(--color-primary)', fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 12 }}>Хто ми</span>
              <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: 20, lineHeight: 1.25 }}>
                Якісна медична допомога — наш пріоритет
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {intro.map(item => (
                  <li key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.65 }}>
                    <div style={{
                      flexShrink: 0, width: 32, height: 32,
                      background: '#EBF5FB', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, marginTop: 2,
                    }}>{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <style>{`.intro-grid { @media (min-width:768px) { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      {/* Gallery */}
      <section className="section" style={{ background: '#f8fffe' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <span style={{ display: 'inline-block', color: 'var(--color-primary)', fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 8 }}>Наш заклад</span>
            <h2 className="sh center" style={{ paddingBottom: 0 }}>Фотогалерея</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
            {gallery.map((src, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', height: 180, background: 'var(--color-border)' }}>
                <Image
                  src={src}
                  alt={`Фото лікарні ${i + 1}`}
                  width={400} height={180}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{ display: 'inline-block', color: 'var(--color-primary)', fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 8 }}>Керівництво</span>
            <h2 className="sh center" style={{ paddingBottom: 0 }}>Адміністрація</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: 6 }}>Команда, яка відповідає за якість та розвиток лікарні</p>
          </div>
          <div className="grid-3">
            {admins.map(a => (
              <div key={a.name} className="card">
                <div style={{ position: 'relative', height: 200, background: 'linear-gradient(135deg, #EBF5FB 0%, #D5EEE9 100%)', overflow: 'hidden' }}>
                  <Image
                    src={a.photo}
                    alt={a.name}
                    width={400} height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '16px 14px 18px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{a.name}</div>
                  <div style={{ width: 32, height: 3, background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-light))', borderRadius: 2, margin: '8px auto' }} />
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3px' }}>{a.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
