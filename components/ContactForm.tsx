'use client';

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Дякуємо за ваше повідомлення! Ми зв'яжемося з вами найближчим часом.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Ваше ім'я *</label>
        <input type="text" required className="form-input" placeholder="Введіть ваше ім'я" />
      </div>
      <div className="form-group">
        <label className="form-label">Email *</label>
        <input type="email" required className="form-input" placeholder="your@email.com" />
      </div>
      <div className="form-group">
        <label className="form-label">Телефон</label>
        <input type="tel" className="form-input" placeholder="+380" />
      </div>
      <div className="form-group">
        <label className="form-label">Тема звернення</label>
        <select className="form-select">
          <option>Запис на прийом</option>
          <option>Консультація</option>
          <option>Скарга чи пропозиція</option>
          <option>Інше</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Повідомлення *</label>
        <textarea required rows={5} className="form-textarea" placeholder="Опишіть ваше питання..." />
      </div>
      <button type="submit" style={{
        width: '100%', background: 'var(--color-primary)', color: '#fff',
        border: 'none', borderRadius: 10, padding: '11px', cursor: 'pointer',
        fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-sans)',
        transition: 'background 0.2s',
      }}>Відправити повідомлення</button>
    </form>
  );
}
