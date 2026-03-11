export default function FeatureSection({ data }) {
  return (
    <section className="py-16 bg-white dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/40 backdrop-blur border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/80 dark:hover:border-cyan-400/80"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
