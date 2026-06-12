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
    photo: '/assets/images/about/pryhodko.jpg',
    name: 'Приходько Катерина Василівна',
    role: 'Т.в.о. Генерального директора',
    location: 'Приміщення головного корпусу',
    address: 'вул. Мазепи, 11, м. Миколаїв',
    phone: '51-460',
  },
  {
    photo: '/assets/images/about/Одноріг_edited.jpg',
    name: 'Одноріг Роман Іванович',
    role: 'Заступник генерального директора з економічних питань та інвестиційно-господарського забезпечення',
    location: 'Приміщення бухгалтерії',
    address: 'вул. Мазепи, 11, м. Миколаїв',
    phone: '51-050',
  },
  {
    photo: '/assets/images/about/Пришляк_edited_edited.jpg',
    name: 'Пришляк Орест Орестович',
    role: 'Заступник генерального директора із стаціонарної медичної допомоги',
    location: 'Приміщення головного корпусу',
    address: 'вул. Мазепи, 11, м. Миколаїв',
    phone: null,
  },
  {
    photo: null,
    name: 'Чорна Галина Миколаївна',
    role: 'Заступник генерального директора з консультативно-діагностичної роботи та якості медичної допомоги',
    location: 'Приміщення головного корпусу',
    address: 'вул. Мазепи, 11, м. Миколаїв',
    phone: null,
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
          <div style={{ marginBottom: 24 }}>
            <h2 className="sh" style={{ paddingBottom: 0 }}>Керівництво закладу</h2>
          </div>
          <div className="grid-2" style={{ gap: 16 }}>
            {admins.map(a => (
              <div key={a.name} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: 10, padding: 18,
              }}>
                {/* Photo */}
                <div style={{
                  width: 72, height: 72, borderRadius: 8, flexShrink: 0, overflow: 'hidden',
                  background: 'linear-gradient(135deg, #EBF5FB 0%, #D5EEE9 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {a.photo ? (
                    <Image src={a.photo} alt={a.name} width={72} height={72}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9BB8C1" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  )}
                </div>
                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 3, lineHeight: 1.3 }}>{a.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: 10, lineHeight: 1.4 }}>{a.role}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)' }}>{a.location}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-light)' }}>{a.address}</div>
                    {a.phone && (
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text)', marginTop: 2 }}>
                        Тел./факс: <span style={{ fontWeight: 600 }}>{a.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
