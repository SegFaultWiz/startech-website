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

      "nav.cases": "Cases",
      "nav.services": "Services",
      "cases.title": "Development Cases",
      "cases.subtitle": "Past projects including websites, mini-programs, dashboards and more.",
      "cases.sectionTitle": "Featured Cases",
      "cases.sectionSubtitle": "Selected works from past development projects.",
      "cases.viewAll": "View All",
      "cases.empty": "No cases in this category yet.",
      "cases.ctaText": "Need a similar project? Let's talk.",
      "cases.ctaButton": "Contact Me",

      "services.title": "Services",
      "services.subtitle": "Full-stack development services for web, mobile and mini-programs.",
      "services.website.title": "Website Development",
      "services.website.desc": "Corporate sites, landing pages, marketing sites. Responsive, SEO-friendly, multi-language support.",
      "services.miniprogram.title": "WeChat Mini Program",
      "services.miniprogram.desc": "E-commerce, tools, content platforms. Native performance with WeChat ecosystem integration.",
      "services.admin.title": "Admin Panel / Management System",
      "services.admin.desc": "Back-office systems, dashboards, data management. Built with React, Vue, Ant Design, etc.",
      "services.data.title": "Data Visualization",
      "services.data.desc": "Charts, dashboards, big-screen displays. ECharts, D3, real-time data.",
      "services.viewCases": "View cases",
      "services.processTitle": "How we work",
      "services.processDesc": "Consultation → Quote → Development → Delivery. Clear communication and on-time delivery.",
      "services.cta": "Get a Quote"

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
      "contact.send": "发送消息",

      "nav.cases": "案例",
      "nav.services": "服务",
      "cases.title": "开发案例",
      "cases.subtitle": "过往项目展示，包括网站建站、小程序、数据大屏等。",
      "cases.sectionTitle": "精选案例",
      "cases.sectionSubtitle": "部分过往开发项目展示。",
      "cases.viewAll": "查看全部",
      "cases.empty": "该分类下暂无案例。",
      "cases.ctaText": "有类似需求？欢迎联系。",
      "cases.ctaButton": "联系我",

      "services.title": "服务范围",
      "services.subtitle": "提供网站、小程序、后台系统等全栈开发服务。",
      "services.website.title": "网站建站",
      "services.website.desc": "企业官网、落地页、营销站。响应式、SEO 友好、多语言支持。",
      "services.miniprogram.title": "微信小程序",
      "services.miniprogram.desc": "电商、工具、内容平台。原生体验，对接微信生态。",
      "services.admin.title": "管理系统 / 后台",
      "services.admin.desc": "后台系统、数据看板、业务管理。React、Vue、Ant Design 等技术栈。",
      "services.data.title": "数据可视化",
      "services.data.desc": "图表、看板、大屏展示。ECharts、D3，支持实时数据。",
      "services.viewCases": "查看案例",
      "services.processTitle": "合作流程",
      "services.processDesc": "需求沟通 → 报价确认 → 开发交付 → 售后支持。沟通透明，按时交付。",
      "services.cta": "获取报价"
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
