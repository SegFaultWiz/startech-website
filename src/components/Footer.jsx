import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig.js';

export default function Footer() {
  const contactData = siteConfig.pages.home.find(s => s.type === 'contact')?.data;

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {siteConfig.siteTitle}. 保留所有权利。
            </p>
            {contactData?.address && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">{contactData.address}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <Link
              to="/cases"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              案例展示
            </Link>
            <Link
              to="/services"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              服务范围
            </Link>
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              联系合作
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
