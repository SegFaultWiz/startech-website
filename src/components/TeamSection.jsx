

import { useTranslation } from 'react-i18next';
export default function TeamSection({ data }) {
 
  const { t, i18n } = useTranslation();
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">{t('team.title')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {data.members.map((member, i) => (
            <div key={i} className="text-center max-w-xs">
              <div className="w-32 h-32 mx-auto rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-4xl mb-4">
                👤
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-slate-600 dark:text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
