'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const fd = new FormData(e.currentTarget);
    const body = {
      name:    fd.get('name'),
      email:   fd.get('email'),
      phone:   fd.get('phone'),
      subject: fd.get('subject'),
      message: fd.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      setStatus('ok');
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Ваше ім'я *</label>
        <input name="name" type="text" required className="form-input" placeholder="Введіть ваше ім'я" />
      </div>
      <div className="form-group">
        <label className="form-label">Email *</label>
        <input name="email" type="email" required className="form-input" placeholder="your@email.com" />
      </div>
      <div className="form-group">
        <label className="form-label">Телефон</label>
        <input name="phone" type="tel" className="form-input" placeholder="+380" />
      </div>
      <div className="form-group">
        <label className="form-label">Тема звернення</label>
        <select name="subject" className="form-select">
          <option>Запис на прийом</option>
          <option>Консультація</option>
          <option>Скарга чи пропозиція</option>
          <option>Інше</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Повідомлення *</label>
        <textarea name="message" required rows={5} className="form-textarea" placeholder="Опишіть ваше питання..." />
      </div>

      {status === 'ok' && (
        <div style={{ marginBottom: 12, padding: '10px 14px', background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: 6, fontSize: '0.875rem', color: '#2e7d32' }}>
          Повідомлення надіслано. Ми зв'яжемося з вами найближчим часом.
        </div>
      )}
      {status === 'error' && (
        <div style={{ marginBottom: 12, padding: '10px 14px', background: '#ffebee', border: '1px solid #ef9a9a', borderRadius: 6, fontSize: '0.875rem', color: '#c62828' }}>
          Помилка надсилання. Спробуйте ще раз або зателефонуйте нам.
        </div>
      )}

      <button type="submit" disabled={status === 'sending'} style={{
        width: '100%', background: 'var(--color-primary)', color: '#fff',
        border: 'none', borderRadius: 8, padding: '11px', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
        fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-sans)',
        opacity: status === 'sending' ? 0.7 : 1,
        transition: 'background 0.2s, opacity 0.2s',
      }}>
        {status === 'sending' ? 'Надсилання...' : 'Відправити повідомлення'}
      </button>
    </form>
  );
}
