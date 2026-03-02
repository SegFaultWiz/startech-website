import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // 基础 CORS（可按需收紧）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = null;
    }
  }

  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: '缺少必填字段' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return res.status(500).json({ message: '服务器邮件配置缺失（SMTP_HOST/SMTP_USER/SMTP_PASS）' });
  }

  const to = CONTACT_TO || SMTP_USER;
  const from = SMTP_FROM || SMTP_USER;

  try {
    const port = Number(SMTP_PORT || 465);
    const secure = String(SMTP_SECURE || (port === 465 ? 'true' : 'false')) !== 'false';

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      // 关键：避免 Vercel 上 SMTP 端口被拦导致“函数一直挂住”最终变成 FUNCTION_INVOCATION_FAILED
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 8000,
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
    // 尽量返回可读信息，方便你在 Vercel 端定位（不包含敏感信息）
    const msg = err?.message || '发送失败，请稍后重试';
    console.error('sendMail failed:', msg);
    return res.status(500).json({
      message: msg,
      hint: '如果一直失败，很可能是 Vercel 环境限制了 SMTP 端口；建议改用 Resend/SendGrid 等 HTTP 邮件服务。',
    });
  }
}

