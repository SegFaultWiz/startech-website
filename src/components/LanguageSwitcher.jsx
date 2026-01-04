// src/components/LanguageSwitcher.jsx
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // 获取当前语言名称
  const currentLang = languages.find(lang => lang.code === i18n.language)?.name || 'Language';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-700 hover:text-blue-600 focus:outline-none"
        aria-label="切换语言"
      >
        <span>🌐</span>
        <span className="hidden md:inline">{currentLang}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${i18n.language === lang.code ? 'font-medium text-blue-600 bg-blue-50' : 'text-gray-700'
                }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
