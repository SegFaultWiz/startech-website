
import { useTranslation } from 'react-i18next';
export default function HeroSection({ data }) {

  const { t } = useTranslation();
  return (
    <div
      className="relative h-[60vh] md:h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(6,12,30,0.85), rgba(6,12,30,0.95)), url(${data.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* 科技感网格背景 */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.25),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-slate-200 mt-4 mb-8">
          {t('hero.subtitle')}
        </p>
        <a
          href={data.ctaLink}
          className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full text-lg font-semibold bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-400 hover:to-cyan-600 text-white shadow-lg shadow-cyan-500/25 transition-transform transition-shadow duration-300 hover:-translate-y-0.5 hover:shadow-cyan-400/40"
        >
          <span>{data.ctaText}</span>
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
        </a>
      </div>
    </div>
  );
}
