import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Заповніть обов\'язкові поля' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Сайт ММЛ" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `[Сайт] ${subject || 'Нове звернення'} — ${name}`,
    text: [
      `Ім'я: ${name}`,
      `Email: ${email}`,
      phone ? `Телефон: ${phone}` : '',
      `Тема: ${subject || '—'}`,
      '',
      message,
    ].filter(Boolean).join('\n'),
    html: `
      <p><strong>Ім'я:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      ${phone ? `<p><strong>Телефон:</strong> ${phone}</p>` : ''}
      <p><strong>Тема:</strong> ${subject || '—'}</p>
      <hr/>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
