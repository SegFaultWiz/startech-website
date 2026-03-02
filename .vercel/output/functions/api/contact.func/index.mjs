import { createRequire as VPV_createRequire } from "node:module";
import { fileURLToPath as VPV_fileURLToPath } from "node:url";
import { dirname as VPV_dirname } from "node:path";
const require = VPV_createRequire(import.meta.url);
const __filename = VPV_fileURLToPath(import.meta.url);
const __dirname = VPV_dirname(__filename);


// _api/contact.js
import { createRequire } from "module";
var require2 = createRequire(import.meta.url);
var nodemailer = require2("nodemailer");
async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (e) {
    }
  }
  const { name, email, message } = body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ message: "\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5" });
  }
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("Missing SMTP configuration");
    return res.status(500).json({ message: "\u670D\u52A1\u5668\u90AE\u4EF6\u914D\u7F6E\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" });
  }
  const to = process.env.CONTACT_TO || process.env.SMTP_USER;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") !== "false",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `\u6765\u81EA ${name} \u7684\u7F51\u7AD9\u7559\u8A00`,
      text: `\u59D3\u540D: ${name}
\u90AE\u7BB1: ${email}

\u6D88\u606F:
${message}`,
      html: `<p><strong>\u59D3\u540D\uFF1A</strong>${name}</p>
             <p><strong>\u90AE\u7BB1\uFF1A</strong>${email}</p>
             <p><strong>\u6D88\u606F\uFF1A</strong></p>
             <p>${String(message).replace(/\n/g, "<br />")}</p>`
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error sending email", err?.message || err);
    return res.status(500).json({ message: err?.message || "\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" });
  }
}
export {
  handler as default
};
