// src/pages/ProductsPage.jsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const { t } = useTranslation();

  const products = [
    { id: 1, name: "StarCloud", desc: "企业级云服务平台" },
    { id: 2, name: "AI Insight", desc: "智能数据分析引擎" },
    { id: 3, name: "Quantum Secure", desc: "量子加密通信方案" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 px-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
          {t('products.title')}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-16">
          {t('products.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-500/10"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{product.name}</h3>
              <p className="text-slate-600 dark:text-slate-400">{product.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
          >
            {t('products.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
