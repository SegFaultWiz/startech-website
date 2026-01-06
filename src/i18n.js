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
      "nav.products": "Products",
      "nav.about": "About",
      "nav.features": "Features",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "hero.title": "Lead Digital Transformation",
      "hero.subtitle": "We provide innovative tech solutions to empower your business growth.",
      "features.title": "Key Features",
      "team.title": "Our Team",
      "contact.title": "Contact Us",
      "footer.copyright": "© {{year}} StarTech. All rights reserved.",
      "language.switch": "Language",

      "footer.tip": "Do you have any questions? Feel free to consult us anytime",

      "products.title": "Our Products",
      "products.subtitle": "Cutting-edge solutions for the digital era.",
      "products.cta": "Request a Demo",

      "about.title": "About StarTech",
      "about.subtitle": "Driving innovation since 2023.",
      "about.content1": "StarTech is a forward-thinking technology company specializing in AI, cloud infrastructure, and cybersecurity.",
      "about.content2": "Our mission is to empower businesses through intelligent, scalable, and secure digital transformation.",

      "contact.title": "Get in Touch",
      "contact.subtitle": "Have questions? We'd love to hear from you.",
      "contact.info": "Contact Info",
      "contact.form": "Send a Message",
      "contact.name": "Your Name",
      "contact.email": "Your Email",
      "contact.message": "Your Message",
      "contact.send": "Send Message",


    }
  },
  zh: {
    translation: {
      "nav.home": "首页",

      "nav.products": "产品",
      "nav.about": "关于",
      "nav.features": "功能",
      "nav.team": "团队",
      "nav.contact": "联系",
      "hero.title": "引领数字化转型",
      "hero.subtitle": "我们为企业提供创新的技术解决方案，助力业务增长。",
      "features.title": "核心优势",
      "team.title": "我们的团队",
      "contact.title": "联系我们",
      "footer.copyright": "© {{year}} 星辰科技. 保留所有权利。",
      "language.switch": "语言",
      "footer.tip": "有任何问题？欢迎随时咨询.",

      "products.title": "我们的产品",
      "products.subtitle": "面向数字时代的尖端解决方案。",
      "products.cta": "申请演示",

      "about.title": "关于星辰科技",
      "about.subtitle": "自 2023 年起驱动创新。",
      "about.content1": "星辰科技是一家专注于人工智能、云计算和网络安全的前瞻性科技公司。",
      "about.content2": "我们的使命是通过智能、可扩展且安全的数字化转型赋能企业。",

      "contact.title": "联系我们",
      "contact.subtitle": "有疑问？我们很乐意收到您的消息。",
      "contact.info": "联系信息",
      "contact.form": "发送消息",
      "contact.name": "您的姓名",
      "contact.email": "您的邮箱",
      "contact.message": "您的留言",
      "contact.send": "发送消息"
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
