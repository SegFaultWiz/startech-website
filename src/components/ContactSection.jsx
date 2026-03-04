import { useTranslation } from 'react-i18next';
export default function ContactSection({ data }) {
  const { t, i18n } = useTranslation();
  return (
    <section className="py-16 bg-white dark:bg-slate-800/50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{t('contact.title')}</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">{t('footer.tip')}</p>
        <div className="space-y-3 text-lg text-slate-700 dark:text-slate-300">
          <p>📧 <a href={`mailto:${data.email}`} className="text-cyan-600 dark:text-cyan-400 hover:underline">{data.email}</a></p>
          <p>📞 {data.phone}</p>
          <p>📍 {data.address}</p>
        </div>
      </div>
    </section>
  );
}
