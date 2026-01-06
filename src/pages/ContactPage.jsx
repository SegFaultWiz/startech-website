// src/pages/ContactPage.jsx
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-black text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
          {t('contact.title')}
        </h1>
        <p className="text-gray-300 text-center mb-12">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左侧：联系信息 */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t('contact.info')}</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-400 mr-3">📍</span>
                <span>广州市市越秀区天河路45号</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">✉️</span>
                <span>contact@lizhongjie.cn</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-400 mr-3">📞</span>
                <span>+86 138 **** ****</span>
              </div>
            </div>
          </div>

          {/* 右侧：表单（简化版，实际可接 Vercel Edge Function） */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">{t('contact.form')}</h2>
            <form className="space-y-4">
              <input type="text" placeholder={t('contact.name')} className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500" />
              <input type="email" placeholder={t('contact.email')} className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500" />
              <textarea rows="4" placeholder={t('contact.message')} className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"></textarea>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
