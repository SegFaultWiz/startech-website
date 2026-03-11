// src/pages/AboutPage.jsx
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  const stats = [
    { num: "50+", label: "客户" },
    { num: "10+", label: "国家" },
    { num: "99.9%", label: "可用性" },
    { num: "24/7", label: "支持" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 px-4">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
          {t('about.title')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-center mb-12">
          {t('about.subtitle')}
        </p>

        <div className="prose prose-slate dark:prose-invert prose-lg mx-auto max-w-none">
          <p className="mb-6 text-slate-700 dark:text-slate-300">
            {t('about.content1')}
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            {t('about.content2')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 bg-white/95 dark:bg-slate-900/60 rounded-2xl border border-slate-200/70 dark:border-slate-700/70 backdrop-blur shadow-sm hover:shadow-cyan-500/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">{stat.num}</div>
              <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
