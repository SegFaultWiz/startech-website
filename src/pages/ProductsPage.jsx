// src/pages/ProductsPage.jsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const { t } = useTranslation();

  // 示例产品数据（可替换为真实数据）
  const products = [
    { id: 1, name: "StarCloud", desc: "企业级云服务平台" },
    { id: 2, name: "AI Insight", desc: "智能数据分析引擎" },
    { id: 3, name: "Quantum Secure", desc: "量子加密通信方案" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {t('products.title')}
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          {t('products.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-400">{product.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all"
          >
            {t('products.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
