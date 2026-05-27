import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Наші лікарі' };

const departments = [
  { id: 'therapy',         name: 'Терапевтичне відділення' },
  { id: 'surgery',         name: 'Хірургічне відділення' },
  { id: 'gynecology',      name: 'Акушерсько-гінекологічне відділення' },
  { id: 'pediatrics',      name: 'Дитяче відділення' },
  { id: 'rehabilitation',  name: 'Реабілітаційне відділення' },
  { id: 'ambulatory',      name: 'Поліклініка' },
];

const doctors = [
  { name: 'Одноріг Сергій Михайлович',         position: 'Головний лікар',              dept: 'therapy',        photo: '/assets/images/about/Одноріг_edited.jpg' },
  { name: 'Пришляк Оксана Романівна',           position: 'Заступник головного лікаря',  dept: 'therapy',        photo: '/assets/images/about/Пришляк_edited_edited.jpg' },
  { name: 'Лікар терапевтичного відділення',   position: 'Лікар-терапевт',              dept: 'therapy',        photo: null },
  { name: 'Лікар хірургічного відділення',     position: 'Лікар-хірург',                dept: 'surgery',        photo: null },
  { name: 'Лікар гінекологічного відділення',  position: 'Лікар акушер-гінеколог',      dept: 'gynecology',     photo: null },
  { name: 'Лікар дитячого відділення',         position: 'Лікар-педіатр',               dept: 'pediatrics',     photo: null },
  { name: 'Лікар реабілітаційного відділення', position: 'Лікар-реабілітолог',          dept: 'rehabilitation', photo: null },
  { name: 'Лікар поліклініки',                 position: 'Лікар загальної практики',    dept: 'ambulatory',     photo: null },
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
        <div className="container">
          <div style={{ display: 'grid', gap: 24 }} className="docs-grid">
            {/* Sidebar */}
            <aside>
              <div className="dept-sidebar">
                <div className="dept-sidebar-title">Відділення</div>
                {departments.map(d => (
                  <a key={d.id} href={`#${d.id}`}>{d.name}</a>
                ))}
              </div>
            </aside>

            <div>
              {departments.map(dept => {
                const deptDoctors = doctors.filter(doc => doc.dept === dept.id);
                return (
                  <div key={dept.id} id={dept.id} style={{ marginBottom: 36 }}>
                    <h2 className="sh">{dept.name}</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
                      {deptDoctors.map(doc => (
                        <div key={doc.name} className="doctor-dept">
                          <div className="doctor-dept-photo" style={{
                            background: doc.photo ? 'transparent' : 'linear-gradient(135deg, var(--color-primary-light), var(--color-primary))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.5rem', color: '#fff',
                            overflow: 'hidden',
                          }}>
                            {doc.photo ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={doc.photo} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                            ) : '👨‍⚕️'}
                          </div>
                          <div className="doctor-dept-info">
                            <h4>{doc.name}</h4>
                            <p>{doc.position}</p>
                          </div>
                        </div>
                      ))}
                      {deptDoctors.length === 0 && (
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                          Інформація про лікарів відділення оновлюється
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="cta-card">
                <h3>Потрібна консультація?</h3>
                <p>Запишіться на прийом до необхідного спеціаліста</p>
                <a href="tel:+380675600610" className="btn-white">📞 +38 067 5 600 610</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`.docs-grid { @media (min-width:768px) { grid-template-columns: 220px 1fr !important; } }`}</style>
    </>
  );
}
