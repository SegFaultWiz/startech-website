
import { useTranslation } from 'react-i18next';
export default function HeroSection({ data }) {

  const { t } = useTranslation();
  return (
    <div
      className="relative h-[60vh] md:h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 mb-6">{t('hero.subtitle')}</p>
        <a
          href={data.ctaLink}
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition"
        >
          {data.ctaText}
        </a>
      </div>
    </div>
  );
}
