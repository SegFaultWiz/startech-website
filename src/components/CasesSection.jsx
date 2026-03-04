import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CaseCard from './CaseCard';
import { getFeaturedCases } from '../config/casesConfig';

export default function CasesSection({ data }) {
  const { t } = useTranslation();
  const featured = getFeaturedCases(data?.limit || 4);

  return (
    <section className="py-16 bg-white dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {t('cases.sectionTitle')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              {t('cases.sectionSubtitle')}
            </p>
          </div>
          <Link
            to="/cases"
            className="mt-4 md:mt-0 text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
          >
            {t('cases.viewAll')} →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((c) => (
            <CaseCard key={c.id} caseItem={c} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
