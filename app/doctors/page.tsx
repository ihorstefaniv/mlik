import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = { title: 'Наші лікарі' };

const departments = [
  { name: 'Терапевтичне відділення',             href: '/inpatient/#therapy' },
  { name: 'Хірургічне відділення',               href: '/inpatient/#surgery' },
  { name: 'Акушерсько-гінекологічне відділення', href: '/inpatient/#gynecology' },
  { name: 'Дитяче відділення',                   href: '/inpatient/#pediatrics' },
  { name: 'Реабілітаційне відділення',           href: '/inpatient/#rehabilitation' },
  { name: 'Паліативне відділення',               href: '/inpatient/#palliative' },
  { name: 'Відділення інтенсивної терапії',      href: '/inpatient/#intensive-care' },
  { name: 'Клініко-діагностичне відділення',     href: '/ambulatory/#clinical' },
  { name: 'Ультразвукова діагностика',           href: '/ambulatory/#ultrasound' },
  { name: 'Лабораторія',                         href: '/ambulatory/#laboratory' },
  { name: 'Рентгенодіагностика',                 href: '/ambulatory/#xray' },
];

export default function DoctorsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Наші лікарі</h1>
          <p>Команда досвідчених медичних фахівців</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>

          {/* Відділення */}
          <h2 className="sh" style={{ marginBottom: 16 }}>Відділення лікарні</h2>
          <div className="grid-2" style={{ gap: 10, marginBottom: 48 }}>
            {departments.map(d => (
              <Link key={d.name} href={d.href} style={{
                display: 'block', padding: '11px 14px',
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: 7,
                fontSize: '0.875rem', color: 'var(--color-text)', textDecoration: 'none',
                transition: 'border-color 0.15s',
              }}
              className="dept-link"
              >
                {d.name}
              </Link>
            ))}
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
              Сторінка в процесі наповнення. Повна інформація про лікарів та графік прийому з'являться найближчим часом. Для запису на прийом до конкретного спеціаліста зателефонуйте або скористайтесь онлайн-записом через Doctor Eleks.
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
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>Записатися на прийом</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>Телефоном або через систему Doctor Eleks</div>
            </div>
            <a href={siteConfig.contact.phoneHref} style={{
              display: 'inline-block', padding: '9px 20px', borderRadius: 6,
              background: '#fff', color: 'var(--color-primary-dark)',
              fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              {siteConfig.contact.phone}
            </a>
          </div>

        </div>
      </section>

      <style>{`.dept-link:hover { border-color: var(--color-primary); color: var(--color-primary); }`}</style>
    </>
  );
}
