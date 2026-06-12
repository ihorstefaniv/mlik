import type { Metadata } from 'next';
import InpatientTabs from './InpatientTabs';

export const metadata: Metadata = { title: 'Стаціонарна допомога' };

const stats = [
  { value: '8',    label: 'відділень' },
  { value: '24/7', label: 'цілодобово' },
  { value: '100+', label: 'ліжко-місць' },
  { value: 'НСЗУ', label: 'безкоштовно' },
];

export default function InpatientPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Стаціонарна допомога</h1>
          <p>Цілодобовий медичний догляд та лікування у спеціалізованих відділеннях</p>
          <div style={{ display: 'flex', gap: 24, marginTop: 20, flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InpatientTabs />
    </>
  );
}
