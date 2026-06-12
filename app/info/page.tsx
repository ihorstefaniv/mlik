import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Інформація' };

export default function InfoPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Інформація</h1>
          <p>Новини закладу та благодійна допомога</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 32, alignItems: 'start' }}>

            {/* Новини */}
            <div>
              <h2 className="sh" style={{ marginBottom: 20 }}>Новини</h2>
              <div style={{
                padding: '24px 28px',
                background: '#F4F7F6',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-primary)',
                borderRadius: 8,
              }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
                  Розділ в процесі наповнення. Тут з'являтимуться новини та оголошення лікарні.
                </p>
              </div>
            </div>

            {/* Благодійна допомога */}
            <div>
              <h2 className="sh" style={{ marginBottom: 20 }}>Благодійна допомога</h2>
              <div style={{
                padding: '24px 28px',
                background: '#F4F7F6',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-primary)',
                borderRadius: 8,
              }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
                  Розділ в процесі наповнення. Тут буде інформація про благодійні внески та допомогу лікарні.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
