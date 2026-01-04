import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


export const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: '英文' },
]
const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.features": "Features",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "hero.title": "Lead Digital Transformation",
      "hero.subtitle": "We provide innovative tech solutions to empower your business growth.",
      "features.title": "Key Features",
      "team.title": "Our Team",
      "contact.title": "Contact Us",
      "footer.copyright": "© {{year}} StarTech. All rights reserved.",
      "language.switch": "Language"
    }
  },
  zh: {
    translation: {
      "nav.home": "首页",
      "nav.features": "功能",
      "nav.team": "团队",
      "nav.contact": "联系",
      "hero.title": "引领数字化转型",
      "hero.subtitle": "我们为企业提供创新的技术解决方案，助力业务增长。",
      "features.title": "核心优势",
      "team.title": "我们的团队",
      "contact.title": "联系我们",
      "footer.copyright": "© {{year}} 星辰科技. 保留所有权利。",
      "language.switch": "语言"
    }
  }
};

const CustomDetector = {
  type: 'languageDetector', // ⬅️ 关键！告诉 i18next 这是一个语言检测器
  name: 'customDetector',
  detect: function () {
    return localStorage.getItem('i18nextLng') || navigator.language.split('-')[0];
  },

  // 可选：清除缓存（比如用户登出时）
  cacheUserLanguage(lng) {
    localStorage.setItem('i18nextLng', lng);
  }
};

i18n
  .use(CustomDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
