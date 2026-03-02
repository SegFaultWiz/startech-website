import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      // ignore parse error, will be handled by validation below
    }
  }

  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: '缺少必填字段' });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Missing SMTP configuration');
    return res.status(500).json({ message: '服务器邮件配置错误，请稍后重试' });
  }

  const to = process.env.CONTACT_TO || process.env.SMTP_USER;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') !== 'false',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `来自 ${name} 的网站留言`,
      text: `姓名: ${name}\n邮箱: ${email}\n\n消息:\n${message}`,
      html: `<p><strong>姓名：</strong>${name}</p>
             <p><strong>邮箱：</strong>${email}</p>
             <p><strong>消息：</strong></p>
             <p>${String(message).replace(/\n/g, '<br />')}</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error sending email', err?.message || err);
    return res.status(500).json({ message: err?.message || '发送失败，请稍后重试' });
  }
}

