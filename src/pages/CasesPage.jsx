import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SeoHead from '../components/SeoHead.jsx';
import { Link } from 'react-router-dom';
import CaseCard from '../components/CaseCard';
import { cases, CASE_TYPES, caseTypeLabels, getCasesByType } from '../config/casesConfig';

export default function CasesPage() {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');
  const lng = i18n.language?.startsWith('zh') ? 'zh' : 'en';

  const filteredCases = useMemo(() => getCasesByType(filter), [filter]);

  const filters = [
    { key: 'all', label: { zh: '全部', en: 'All' } },
    ...Object.entries(caseTypeLabels).map(([key, val]) => ({ key, label: val }))
  ];

  return (
    <>
      <SeoHead
        title={t('cases.title')}
        description={t('cases.subtitle')}
        keywords="开发案例,网站建站,小程序,外包项目"
      />
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('cases.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </div>

        {/* 筛选 */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === f.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {f.label[lng]}
            </button>
          ))}
        </div>

        {/* 案例列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((c) => (
            <CaseCard key={c.id} caseItem={c} />
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            {t('cases.empty')}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">{t('cases.ctaText')}</p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            {t('cases.ctaButton')}
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
