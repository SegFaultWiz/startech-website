// 使用 fetch 直接调 Resend HTTP API，避免 SDK 打包问题
export default async function handler(req, res) {
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

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO;

  if (!apiKey || !toEmail) {
    return res.status(500).json({
      message: '请在 Vercel 环境变量中设置 RESEND_API_KEY 和 CONTACT_TO',
    });
  }

  const from = process.env.RESEND_FROM || 'onboarding@resend.dev';

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [toEmail],
        reply_to: email,
        subject: `来自 ${name} 的网站留言`,
        html: `<p><strong>姓名：</strong>${name}</p><p><strong>邮箱：</strong>${email}</p><p><strong>消息：</strong></p><p>${String(message).replace(/\n/g, '<br />')}</p>`,
      }),
    });

    const data = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      return res.status(500).json({
        message: data.message || data.error || `Resend 返回 ${resp.status}`,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({
      message: err?.message || '发送失败，请稍后重试',
    });
  }
}
