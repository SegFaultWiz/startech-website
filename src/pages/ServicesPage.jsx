import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead.jsx';
import { FaGlobe, FaMobileAlt, FaCog, FaChartLine } from 'react-icons/fa';

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: FaGlobe,
      key: 'website',
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20'
    },
    {
      icon: FaMobileAlt,
      key: 'miniprogram',
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20'
    },
    {
      icon: FaCog,
      key: 'admin',
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20'
    },
    {
      icon: FaChartLine,
      key: 'data',
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20'
    }
  ];

  return (
    <>
      <SeoHead
        title={t('services.title')}
        description={t('services.subtitle')}
        keywords="网站建站,小程序,外包,全栈开发,管理系统"
      />
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {services.map((s) => (
            <div
              key={s.key}
              className={`${s.bgColor} rounded-xl p-8 flex flex-col md:flex-row gap-6 items-start`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center flex-shrink-0`}>
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {t(`services.${s.key}.title`)}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {t(`services.${s.key}.desc`)}
                </p>
                <Link
                  to="/cases"
                  className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
                >
                  {t('services.viewCases')} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white dark:bg-slate-800 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            {t('services.processTitle')}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {t('services.processDesc')}
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
          >
            {t('services.cta')}
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
