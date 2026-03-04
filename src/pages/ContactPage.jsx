// src/pages/ContactPage.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg('请填写完整信息');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || '发送失败，请稍后重试');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || '发送失败，请稍后重试');
    }
  };

  const inputClass = "w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 px-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
          {t('contact.title')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左侧：联系信息 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">{t('contact.info')}</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <div className="flex items-start">
                <span className="text-cyan-500 mr-3">📍</span>
                <span>广州市市越秀区天河路45号</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-500 mr-3">✉️</span>
                <span>contact@lizhongjie.cn</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-500 mr-3">📞</span>
                <span>+86 138 **** ****</span>
              </div>
            </div>
          </div>

          {/* 右侧：表单 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">{t('contact.form')}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              填写后点击提交，我会通过邮箱第一时间联系你。
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder={t('contact.name')}
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder={t('contact.email')}
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <textarea
                rows="4"
                name="message"
                placeholder={t('contact.message')}
                value={form.message}
                onChange={handleChange}
                className={inputClass}
              />
              {status === 'error' && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}
              {status === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400">已发送成功，我会尽快回复你。</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? '发送中...' : t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
