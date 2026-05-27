import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = { title: 'Амбулаторна допомога' };

const sections = [
  {
    id: 'clinical',
    title: 'Клініко-діагностичне відділення',
    desc: 'Відділення здійснює поліклінічний прийом пацієнтів та надає консультативно-діагностичну допомогу.',
    services: ['Консультації терапевта', 'Консультації вузьких спеціалістів', 'Профілактичні огляди', 'Виписка направлень та рецептів', 'Медичні довідки та документи'],
  },
  {
    id: 'ultrasound',
    title: 'Ультразвукова діагностика',
    desc: 'Кабінет ультразвукової діагностики оснащений апаратом УЗД експертного класу.',
    services: ['УЗД органів черевної порожнини', 'УЗД нирок та сечового міхура', 'УЗД щитоподібної залози', 'УЗД серця (ехокардіографія)', 'УЗД суглобів', 'УЗД органів малого таза', 'Допплерографія судин'],
  },
  {
    id: 'laboratory',
    title: 'Лабораторія',
    desc: 'Клінічна лабораторія виконує широкий спектр досліджень для правильної постановки діагнозу.',
    services: [
      'Загальний аналіз крові', 'Загальний аналіз сечі', 'Глюкоза крові', 'Загальний білірубін',
      'АСТ, АЛТ', 'Сечовина, креатинін', 'Холестерин', 'Коагулограма',
    ],
  },
  {
    id: 'xray',
    title: 'Рентгенодіагностика',
    desc: 'Рентгенівський кабінет з цифровим обладнанням для точної діагностики.',
    services: ['Рентгенографія органів грудної клітки', 'Рентгенографія кісток та суглобів', 'Рентгенографія хребта', 'Рентгенографія черевної порожнини', 'Флюорографія'],
  },
  {
    id: 'early-diagnosis',
    title: 'Рання діагностика',
    desc: 'Програма профілактичних оглядів для раннього виявлення захворювань.',
    services: ['Огляд терапевта', 'ЕКГ', 'Загальний аналіз крові та сечі', 'УЗД органів черевної порожнини', 'Вимірювання АТ та глюкози'],
  },
];

export default function AmbulatoryPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Амбулаторна допомога</h1>
          <p>Поліклінічні відділення та діагностичні служби</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Sidebar nav */}
          <div style={{ display: 'grid', gap: 24 }} className="amb-grid">
            <aside>
              <div className="dept-sidebar">
                <div className="dept-sidebar-title">Відділення</div>
                {sections.map(s => (
                  <a key={s.id} href={`#${s.id}`}>{s.title}</a>
                ))}
              </div>
            </aside>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {sections.map(s => (
                <div key={s.id} id={s.id}>
                  <h2 className="sh">{s.title}</h2>
                  <div className="grid-2" style={{ marginTop: 16 }}>
                    <div className="card" style={{ padding: 20 }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 10, color: 'var(--color-primary-dark)' }}>Про відділення</h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.6 }}>{s.desc}</p>
                      {s.id === 'early-diagnosis' && (
                        <div className="cta-card" style={{ marginTop: 16 }}>
                          <p style={{ marginBottom: 12 }}>Зателефонуйте для запису на безкоштовне профілактичне обстеження</p>
                          <a href={siteConfig.contact.phoneHref} className="btn-white">{siteConfig.contact.phone}</a>
                        </div>
                      )}
                    </div>
                    <div className="card" style={{ padding: 20 }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 10, color: 'var(--color-primary)' }}>Послуги</h3>
                      <ul className="ul-list">
                        {s.services.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .amb-grid { @media (min-width:768px) { grid-template-columns: 220px 1fr !important; } }
      `}</style>
    </>
  );
}
