// src/pages/AboutPage.jsx
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          {t('about.title')}
        </h1>
        <p className="text-gray-300 text-center mb-12">
          {t('about.subtitle')}
        </p>

        <div className="prose prose-invert prose-lg mx-auto">
          <p className="mb-6">
            {t('about.content1')}
          </p>
          <p>
            {t('about.content2')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{num: "50+", label: "客户"}, {num: "10+", label: "国家"}, {num: "99.9%", label: "可用性"}, {num: "24/7", label: "支持"}].map((stat, i) => (
            <div key={i} className="p-4">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.num}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
