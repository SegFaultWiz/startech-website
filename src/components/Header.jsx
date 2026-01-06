import siteConfig from '../config/siteConfig.js';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.products', path: '/products' },    // ✅ 真实页面
    { key: 'nav.about', path: '/about' },          // ✅
    { key: 'nav.contact', path: '/contact' }       // ✅
  ];


  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          StarTech
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className='text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors'
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        {/* 语言切换器 */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        {/* Mobile: Hamburger Button */}

        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // Close icon (X)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon (☰)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Drawer) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg transition-opacity duration-300 ease-in-out opacity-100" style={{ animation: 'none' }}>
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)} // 点击后关闭菜单
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Mobile: Language + Theme */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">{t('language.switch')}</span>
                <LanguageSwitcher />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">主题</span>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
      {!isMenuOpen && <div className="md:hidden h-0"></div>}
    </header>
  );
}
